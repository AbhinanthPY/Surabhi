# Surabhi — Current verification

## HTML, CSS and JavaScript conversion — 5 November 2026

The HTML, CSS and JavaScript in `site/` are the maintained implementation.

- All 23 public routes plus `404.html` contain full static HTML with page-specific titles/descriptions and canonical links. Automated checks validate their local links, image sources and responsive-image candidates. All 23 public routes returned HTTP 200 from the local static server; an unknown path returned the custom HTTP 404.
- The production build passes with no installed package dependencies. It checks documents/JavaScript and copies the static source. There is no framework runtime, hydration, JSX, TypeScript or bundler requirement.
- The original visual design was inspected in the browser. Hero image and fonts loaded, white logo remained over the hero, and original logo colors appeared on the light header.
- At 946 × 781, scrolling advanced through fields 02–06 after selecting 01, with the stage pinned at 110px. Further scrolling released it into the following visual interlude. At 390 × 844 the second field appeared automatically with the stage at 94px and no horizontal overflow.
- Project category filtering returned only Farm Tourism. Its direct page and the animal-healthcare article now show their full detail content. News search returned the animal-healthcare article, no-match search showed the empty state, and reset restored all three cards.
- Mobile dialog opened, Escape closed it and restored focus, and its Membership link navigated correctly. The membership enquiry link preselected the membership subject.
- Empty enquiry submission produced four accessible errors and focused the name. Valid local data produced a review; clipboard copy reported success; clear removed field values and hid the review. The URL remained `/contact` with no form data in the query. No network delivery, persistence or storage is implemented.
- No console errors or warnings observed on the converted preview.
- The obsolete React backup archive and legacy `node_modules` folder were removed at the user’s request. The build passes without a dependency folder.
