// Keep the reserved image area visible until a usable source is available.
(() => {
  'use strict';

  const retries = new WeakSet();

  function settle(image, ready) {
    if (ready) {
      image.setAttribute('data-image-ready', '');
      image.removeAttribute('data-image-unavailable');
    } else {
      image.setAttribute('data-image-unavailable', '');
    }
    image.dispatchEvent(new Event('surabhi:image-settled', { bubbles: true }));
  }

  function recover(image) {
    image.removeAttribute('data-image-ready');
    const picture = image.closest('picture');

    // Let the browser pick the matching JPEG size before trying a single file.
    const modernSources = picture?.querySelectorAll('source[type]');
    if (modernSources?.length) {
      modernSources.forEach(source => source.remove());
      return;
    }

    if (!retries.has(image)) {
      const current = image.currentSrc || image.src;
      const fallback = [
        image.dataset.imageFallback,
        image.srcset.split(',')[0].trim().split(/\s+/)[0],
        image.getAttribute('src'),
      ].find(url => url && new URL(url, document.baseURI).href !== current);
      if (fallback) {
        retries.add(image);
        picture?.querySelectorAll('source').forEach(source => source.remove());
        image.removeAttribute('srcset');
        image.src = fallback;
        return;
      }
    }

    const brand = image.closest('.brand-official');
    if (brand) {
      const name = document.createElement('span');
      name.className = 'brand-text-fallback';
      name.textContent = 'Surabhi';
      name.setAttribute('aria-hidden', 'true');
      brand.append(name);
      image.hidden = true;
    }
    settle(image, false);
  }

  document.addEventListener('load', event => {
    if (event.target instanceof HTMLImageElement) settle(event.target, true);
  }, true);
  document.addEventListener('error', event => {
    if (event.target instanceof HTMLImageElement && !event.target.hasAttribute('data-image-unavailable')) recover(event.target);
  }, true);

  // Some cached or failed requests finish before this deferred script executes.
  for (const image of document.images) {
    if (!image.complete) continue;
    if (image.naturalWidth > 0) settle(image, true);
    else if (image.currentSrc || image.loading !== 'lazy') recover(image);
  }
})();
