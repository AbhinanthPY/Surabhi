# Verification record

Verified on 4 November 2026 during implementation.

## Build and dependencies

- `npm run build` completes successfully, including strict TypeScript checks and the Vite production build.
- Dependencies are installed and `package-lock.json` is included.
- The dependency audit reported zero vulnerabilities after upgrading React Router to a patched version.
- Inner pages are split into separate production chunks.

## Browser coverage

- All 23 linked content routes were opened and checked after their headings rendered at **1440px** and **390px** widths.
- All routes were also checked for horizontal overflow at **320px** after correcting the membership heading’s minimum size.
- The homepage was reviewed at **768px** tablet width.
- No horizontal page overflow was found in these final checks.
- No loaded image failures were found in the route checks. Local image variants were also inspected on disk; selected compositions were visually reviewed.
- Fresh browser warning/error logs were empty after guarding homepage-only animation targets on inner pages.
- Generic and activity-detail not-found routes render usable recovery links.

## Interaction checks

- Header navigation, active routes, and the compact scrolled header.
- Mobile menu opening, closing with Escape, focus returning to the menu button, and navigating to Home.
- Homepage activity selection updates the open item and photographic panel.
- Project category filter reduces the gallery and opens the matching detail page.
- Article search finds the animal-care article; an unmatched search displays a useful empty state; reset restores all three articles; an article detail route opens.
- Membership FAQ expands to show the eligibility explanation.
- Cross-page document links land at the governance documents section. A timing issue was fixed so lazy route loading does not lose the anchor.
- The enquiry form shows required-field errors and focuses the first invalid field. A complete demonstration enquiry validates and displays a clear “nothing sent or stored” review. Clearing restores empty fields.
- Form subject links select the intended area of interest. The production form’s clipboard action changes to “Copied to clipboard” after a reviewed enquiry is copied.
- Production smoke checks cover the homepage, project detail, article detail, and governance route, plus the contact review and clipboard flow.

## Scope of verification

Browser QA used the available desktop browser with responsive viewport overrides, not a physical-device lab. Reduced-motion handling, smooth-scroll cleanup, and image-failure fallback behavior were reviewed in source; system motion settings and forced network failures were not changed during testing. No formal Lighthouse or screen-reader certification is claimed.

The site is an informational demonstration. Official branding, contact information, leadership profiles, exact membership provisions, and original institutional documents remain subject to verified client material, as explained in the README and visible site notices.

## Editorial refinement verification

A second pass refined the existing implementation while retaining its routes, content distinctions, branding behavior, and enquiry workflow.

- All 23 existing content routes were opened at **320px** and **1440px**. Each rendered one H1, with no horizontal page overflow or overflowing masked-heading lines.
- Homepage, About, Activities, Projects, Membership, and Contact were checked at **768px** tablet width, with no horizontal overflow or clipped heading lines.
- The **390px** hero and mobile navigation were visually reviewed. Escape closes the menu and returns focus to the menu button without scrolling.
- Activity selection updates the image and remains stable; only one desktop activity image is rendered.
- The Rural Tourism filter returns the Farm Tourism card and opens its detail. Searching “animal” returns the animal-healthcare article.
- An empty enquiry shows four validation errors and focuses the name field. The form's review-only behavior and privacy copy remain intact.
- The heading reveal utility retains semantic text and accessible heading names. New imagery has local responsive variants and accurate recorded dimensions. Optimized-image failure recovery and reduced-motion behavior were reviewed in source.
- Fresh warning/error logs were empty during the route pass. No formal Lighthouse, physical-device, or screen-reader certification is claimed.

The production build includes strict TypeScript checking. New homepage art direction is documented in `DESIGN-REVIEW.md`; source credits are in `ASSETS.md`.

- Production smoke checks verified the 390px homepage's portrait image source and no overflow. Selecting Animal Healthcare remained stable after a Page Down action. The production build completed with strict TypeScript checks.
