# Surabhi — HTML, CSS and JavaScript

The complete Surabhi website is now a framework-free static website. All 23 public page routes and the 404 document contain their full content in HTML. The official branding, imagery, editorial layouts, factual distinctions, and working interactions are preserved.

## Files to edit

- `site/index.html` — homepage.
- `site/about/index.html`, `site/activities/index.html`, `site/projects/index.html`, and other route folders — individual pages and detail pages.
- `site/css/styles.css` — readable, ordinary CSS containing the complete visual system.
- `site/css/static.css` — small static-document integration rules.
- `site/js/site.js` — plain JavaScript for menus, filters, search, local enquiry review and animation.
- `site/js/content.js` — shared activity labels and descriptions used by the scroll presentation. Keep these in sync with homepage and detail-page HTML when editing this content.
- `site/js/vendor/` — local GSAP, ScrollTrigger and Lenis distributions. No CDN is required.
- `site/assets/` — supplied logo, transparent derivative, photographs and fonts.

There is no React, JSX, TypeScript, React Router, Vite, Tailwind compiler, hydration or application framework in the delivered source. CSS is already compiled and editable. The HTML pages use ordinary links and native browser navigation. Shared header/footer markup is present in each HTML document; update it consistently across pages when editing navigation or branding.

## Preview

No dependency installation is needed. Node.js 18 or newer is only used for these optional convenience commands:

```sh
npm run dev
```

Open the printed localhost URL. Any ordinary static web server can serve the `site/` folder instead. The downloadable `surabhi-html-css-js.zip` places `index.html`, `css/`, `js/`, assets and route folders together. For the most consistent local preview, serve that extracted folder with a static web server.

## Validate and package

```sh
npm run check
npm run build
npm run preview
```

The build validates all 24 HTML documents and local links/assets, checks JavaScript syntax, and copies `site/` to `dist/`. It does not compile a framework or download packages. Upload the **contents** of `dist/` to static hosting. Configure folder-index pages (`/about` → `/about/index.html`) and a custom `404.html` for unknown URLs; a blanket SPA rewrite is unnecessary. The included `_redirects` provides the custom not-found fallback on hosts that support it.

The existing private Sites identity remains in `.openai/hosting.json` with `static.directory` set to `dist`. Preserve this project ID on future updates.

## Preserved behavior

- White transparent logo on the hero/dark surfaces and the original green-and-black colors in the compact light header.
- Scroll-aware masthead; accessible native-dialog mobile navigation; Escape and focus restoration; back-to-top and anchor links.
- Six activity chapters held in a pinned composition. Scrolling updates the image, number and details; after the sixth chapter, normal page progression continues. Direct controls and a skip link remain available. Mobile uses a compact image/detail layout; reduced-motion preferences and screens shorter than 620px retain the accordion.
- Project category filters; article search/category filtering; clear search, result counts and empty-result recovery; native membership disclosures.
- Local enquiry validation, review, clipboard copy and clearing, including query-based subject selection. **No data is sent, emailed, uploaded, saved to storage or persisted.** The form is inert until its event handlers have been installed.
- Local fonts, responsive WebP/JPEG images, JPEG recovery and image fallback; static metadata and canonical URLs for every page.

## Content and assets

Activities remain organizational objectives; proposed projects remain concepts subject to confirmation; articles remain demonstration content. No unverified achievements, impact statistics, officeholders, contact details or membership rules were added. The registration milestone remains attributed to the client brief. The original supplied logo is retained unchanged at `site/assets/surabhi-logo.png`; the site displays its transparent derivative.

See `ASSETS.md`, `THIRD-PARTY.md` and `QA.md` for asset provenance, dependency notices and validation. Future development uses the HTML, CSS and JavaScript in `site/` exclusively. The obsolete React backup and dependency folder have been removed.
