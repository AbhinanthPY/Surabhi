# Surabhi — creative and frontend review

This is an editorial refinement of the existing site, not a replacement application. Its original content, routes, branding safeguards, and demo functionality are retained.

## Reference assessment

The first implementation established a credible forest-green and ivory identity. Its execution was more uniform than the intended direction: the hero was a close, low-depth landscape crop; most sections repeated a left/right composition; headings followed the same sans/italic formula; projects and journal stories relied on conventional repeated cards; and scroll reveals generally applied one fade-and-rise treatment.

- **[Floema](https://floema.com/en/about):** the relevant principle is editorial hierarchy and proportion. The refinement varies typographic scale, indents display baselines, gives the projects an upright serif treatment, and separates quieter supporting copy from large narrative statements.
- **[Farm Minerals](https://www.farmminerals.com/):** the useful influence is confidence and specificity in agricultural storytelling. Six clear activity choices, a large selected-field visual, and one lead initiative with three differently proportioned supporting photographs make the institution's multiple activities concrete.
- **[Vantara](https://vantara.in/en/about-us):** the useful influence is photographic atmosphere and care-led storytelling. A misty Munnar horizon, intentional portrait crops, a real farmer image, and a larger animal-care composition give the narrative greater human and environmental depth.

These are critical design judgments, not claims of awards, formal benchmarking, or equivalence with the references. No reference-site imagery, branding, source code, or exact interaction sequence was copied.

## Implemented craft changes

- Separate desktop and mobile hero crops and headline compositions; restrained photographic grading and layered contrast.
- Reusable semantic masked headings with readable text and predictable line breaks.
- Different section scales, image ratios, alignments, and spacing, including a featured initiative and a lead journal story.
- Six activity chapters advance with scrolling inside a pinned stage, with image crossfades, synchronized details, direct-selection controls and a skip link. Short screens and reduced-motion readers retain the accordion.
- Desktop-only parallax measured against `.photo`, not a `display:contents` picture element; lighter mobile entrances; animated journey progression; batched refreshes and proper cleanup.
- Refined masthead, active contact state, arrow transitions, staggered mobile navigation, and focus restoration without scrolling.
- Actual intrinsic image dimensions, accurate responsive descriptors, explicit sizes, lazy-loaded activity layers, and JPEG recovery before image fallback.
- A single anchor offset, avoiding compounded document padding, section margins, and Lenis offsets.

## Content integrity

The official logo was supplied after the editorial refinement and now replaces the temporary wordmark in the header, mobile menu, and footer. The supplied image is preserved unchanged in the assets folder. A transparent derivative now supports the requested white hero logo and smaller original green-and-black logo on light navigation surfaces. Organizational objectives, proposed concepts, demonstration articles, pending leadership and document information, and the non-sending enquiry form keep their original distinctions. No achievements, impact figures, membership provisions, officeholders, or contact channels were invented.

## Static implementation — 5 November 2026

All page content is now stored as complete HTML documents in `site/`. The visual system is ordinary, readable CSS. Plain JavaScript owns interactive behavior, with local GSAP/ScrollTrigger and Lenis enhancements. The six-field pinned story, branding, responsive layouts and content distinctions are retained. Native page navigation replaces the former client router; there is no hydration or framework runtime.
