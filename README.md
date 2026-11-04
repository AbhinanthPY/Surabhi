# Surabhi — Growing Together. Beyond Boundaries.

A complete editorial corporate website for **Surabhi Multi State Co-operative Dairy Society Ltd.** Built with React, Vite, TypeScript, Tailwind CSS, GSAP / ScrollTrigger, Lenis, React Router, and Lucide.

## Run locally

Requires Node.js 20.19+ (Node 22 LTS is also suitable).

```sh
cd /Users/abhinanth/Desktop/sweb/surabhi
npm install
npm run dev
```

Open the Local URL printed by Vite. To use a particular port:

```sh
npm run dev -- --port 5173
```

## Production

```sh
npm run build
npm run preview
```

The production output is **`dist/`**. Upload its contents to a static host. Configure **all non-file URLs to return `/index.html` with status 200**, so direct visits to React Router pages work. The supplied `public/_redirects` covers hosts that support the Netlify/Cloudflare Pages format. Equivalent Nginx configuration is `try_files $uri $uri/ /index.html;`. No server secrets, database, or backend are required.

The private Sites deployment configuration is in `.openai/hosting.json`; retain its project identity for future updates. Update the canonical origin in `src/hooks/usePageMeta.ts` and the Open Graph image URL in `index.html` if deploying to a different domain. Client-side page metadata is included; prerendering can be added if search-engine or social-crawler rendering of every detail page becomes a requirement.

## What is included

- All 13 homepage sections: cinematic hero; editorial introduction; purpose; activity explorer; visual interlude; four projects; animal-care story; sustainability; journey; membership; three journal cards; closing CTA; institutional footer.
- About, activities, six activity details, projects, four project details, membership, leadership and governance, journal, three article details, contact, privacy, legal notice, and a not-found page.
- Scroll-aware floating navigation, native-dialog mobile menu with focus containment and Escape support, activity accordion and changing imagery, category filters, article search and empty-state recovery, membership disclosures, related content, and back-to-top.
- Client-side enquiry validation, accessible field errors, local review, clipboard copy, and clearing. **Nothing is sent, emailed, or stored.** No localStorage or analytics are used.
- GSAP entrance and scroll reveals, image masking, subtle desktop parallax, sticky visual narratives, hover effects, and Lenis on fine-pointer devices. Animation and smooth-scrolling setup clean up on unmount and honor reduced-motion preferences.
- Local fonts; local JPG fallbacks, optimized WebP sources, and 640px mobile variants; lazy-loaded secondary imagery; route-based code splitting; responsive layouts; keyboard focus styles; titles and descriptions.

## Source map

```text
src/
  components/
    layout/       Navigation, official branding, page shell, footer
    sections/     Activity explorer, timeline, enquiry form, closing CTA
    ui/           Photography, headings, cards, links, content notices
  data/           Typed, reusable activities, projects, articles, milestones
  hooks/          Page motion and metadata
  pages/          Homepage, inner pages, detail templates, legal, 404
  styles/         Foundation tokens plus scoped editorial refinements
  types/          Content interfaces
public/
  assets/
    images/       Local imagery and mobile/WebP derivatives
    fonts/        Self-hosted fonts and SIL Open Font License files
    branding/     Reserved for additional official brand assets
```

## Replacing content

Edit **`src/data/content.ts`** to update activity, project, article, and timeline content. All related listings and detail routes use these objects. The palette, gutters, typography, and spacing start in **`src/styles/global.css`**.

### Official logo

The original supplied image is retained unchanged at **`public/assets/surabhi-logo.png`**. The website uses **`public/assets/surabhi-logo-transparent.png`**, a background-extracted derivative. The shared `Brand` component displays a white treatment over the hero and dark surfaces, and a smaller dark treatment on the light navigation surface and inner pages. CSS changes the rendered color and width without replacing image files during scroll. The large footer “SURABHI” remains a separate decorative typographic element.

### Verification required before public launch

- Supply the registration certificate, registered bye-laws, verified leadership information, and official contact/office details.
- Confirm exact membership categories, rights, responsibilities, fees, and admission procedures against the actual bye-laws. No unverified rules are invented in this build.
- The registration date **12 October 2023** is attributed to the supplied brief. It was not independently checked against the original certificate.
- Registered objectives are clearly distinguished from confirmed operational services. Biogas, farm tourism, and veterinary healthcare are labeled as concepts/proposals; dairy infrastructure is a development objective.
- Articles are demonstration content. Photography illustrates themes and does not depict confirmed Surabhi facilities, projects, members, or staff.
- Replace the demo form with a real delivery integration and an appropriate privacy notice only when official channels and data-handling requirements are known.

## Asset sources and licensing

Photographs were downloaded from free stock sources and are stored locally. See [ASSETS.md](./ASSETS.md) for original links and license references. Fonts are Manrope and Instrument Serif, distributed under the SIL Open Font License; copies are included beside the fonts. The build has no external font or image request dependency.

## Checks

```sh
npm run typecheck
npm run build
npm audit
```

See [QA.md](./QA.md) for the verified browser scenarios and any practical verification limits. This is a static presentation site; the enquiry form has no delivery or persistence endpoint.

## Editorial refinement

The refinement preserves the existing content model, official-logo handling, all routes, and the local-only enquiry flow. `HeroSection`, `FeaturedProjects`, and `RevealHeading` separate photographic art direction and masked typography from page content. `styles/editorial.css` defines the new compositions; `global.css` remains the shared foundation for the existing inner pages.

Activity selection is now visitor-controlled, avoiding scroll-driven accordion changes and loading only the selected desktop photograph. `Photo` accepts per-composition crops, explicit responsive sizes, and mobile sources. `imageDimensions.ts` records actual widths so source descriptors and intrinsic image dimensions are accurate. A failed optimized source retries the original JPEG before showing the accessible visual fallback.

GSAP masks heading lines, varies image and text entrances, uses the actual photograph container for parallax, batches refreshes, disables parallax on smaller screens, and retains full reduced-motion support. Navigation scroll work is scheduled once per animation frame. See `DESIGN-REVIEW.md` for the design assessment and `QA.md` for the verification record.
