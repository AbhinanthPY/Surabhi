(() => {
  'use strict';

  const root = document.documentElement;
  const loader = document.querySelector('.home-loader');
  if (!loader || !root.classList.contains('home-loading')) return;

  loader.setAttribute('data-loader-active', '');
  const word = loader.querySelector('.home-loader-name');
  const fill = loader.querySelector('.home-loader-fill');
  const percent = loader.querySelector('.home-loader-percent');
  const message = loader.querySelector('.home-loader-message');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const connection = navigator.connection;
  const background = [...document.querySelectorAll('body > :is(a, header, main, footer):not([inert])')];
  background.forEach(element => { element.inert = true; });
  document.addEventListener('surabhi:home-revealed', () => {
    background.forEach(element => { element.inert = false; });
  }, { once: true });
  const pending = new Set(document.querySelectorAll('.site-header .brand img, [data-home-hero]'));
  const imageTotal = pending.size;
  const preparing = new Set();
  let target = 24;
  let displayed = 0;
  let pointerX = 0.5;
  let pointerEnergy = 0;
  let lastTime = performance.now();
  let exitAt = 0;
  let finished = false;
  let timedOut = false;

  function leave() {
    if (finished) return;
    finished = true;
    fill.style.clipPath = 'none';
    percent.textContent = '100%';
    message.textContent = '';
    loader.classList.add('is-leaving');
    setTimeout(() => {
      if (!root.classList.contains('home-loading')) return;
      root.classList.remove('home-loading');
      document.dispatchEvent(new Event('surabhi:home-revealed'));
    }, motion.matches ? 0 : 280);
  }

  function settle(image) {
    if (!pending.delete(image)) return;
    target = 24 + Math.round(76 * (imageTotal - pending.size) / imageTotal);
  }

  async function checkImage(image) {
    if (!pending.has(image) || preparing.has(image)) return;
    if (image.hasAttribute('data-image-unavailable')) {
      settle(image);
      return;
    }
    if (!image.hasAttribute('data-image-ready')) return;
    preparing.add(image);
    try {
      await image.decode();
      settle(image);
    } catch {
      // A new responsive source may have been selected during the decode.
      if (image.complete && image.naturalWidth > 0) settle(image);
    } finally {
      preparing.delete(image);
    }
  }

  function onImageSettled(event) { checkImage(event.target); }
  document.addEventListener('surabhi:image-settled', onImageSettled);
  document.addEventListener('surabhi:home-revealed', () => {
    document.removeEventListener('surabhi:image-settled', onImageSettled);
  }, { once: true });
  pending.forEach(checkImage);

  loader.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse') return;
    const bounds = word.getBoundingClientRect();
    pointerX = Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width));
    pointerEnergy = 1;
  }, { passive: true });
  word.addEventListener('pointerdown', event => {
    const bounds = word.getBoundingClientRect();
    pointerX = (event.clientX - bounds.left) / bounds.width;
    pointerEnergy = 2;
  }, { passive: true });

  function draw(now) {
    if (finished || !root.classList.contains('home-loading')) return;
    const step = Math.max(1, now - lastTime);
    lastTime = now;
    if (now >= 7800 && pending.size) timedOut = true;
    const ready = pending.size === 0 || timedOut;
    if (ready && !exitAt) exitAt = now + (motion.matches ? 0 : 145);
    const goal = ready ? 100 : target;
    displayed += (goal - displayed) * (1 - Math.exp(-step / (ready ? 58 : 170)));

    const slowConnection = /^(slow-2g|2g|3g)$/.test(connection?.effectiveType ?? '');
    const status = ready ? '' : !navigator.onLine
      ? 'You’re offline. The page will open with available content.'
      : (slowConnection && now >= 900) || now >= 2000
        ? 'Connection seems slow. Still loading the page…'
        : '';
    if (message.textContent !== status) message.textContent = status;
    percent.textContent = `${Math.floor(displayed)}%`;

    const height = 96 - displayed * 0.98;
    if (motion.matches) {
      fill.style.clipPath = `inset(${Math.max(0, height)}% 0 0)`;
    } else {
      const points = ['0% 100%'];
      for (let index = 0; index <= 20; index++) {
        const x = index / 20;
        const wave = Math.sin(x * 13 - now / 335) * 5;
        const ripple = Math.cos((x - pointerX) * 20 - now / 125) * Math.exp(-Math.abs(x - pointerX) * 4) * pointerEnergy * 3;
        points.push(`${index * 5}% ${(height + wave + ripple).toFixed(1)}%`);
      }
      points.push('100% 100%');
      fill.style.clipPath = `polygon(${points.join(',')})`;
      pointerEnergy *= Math.exp(-step / 360);
    }

    if (exitAt && now >= exitAt) leave();
    else requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();
