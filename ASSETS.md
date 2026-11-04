# Image and font sources

All photography is illustrative stock material. It does not identify an operating Surabhi facility, initiative, member, or employee. Cropping and compression were applied for the website. Each photograph has an optimized WebP version and 640px mobile variant; JPG is retained as fallback.

| Local filename | Original source                                                                                                                                                 |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hero`         | [Lush Green Tea Plantations in Munnar Hills — Pexels](https://www.pexels.com/photo/lush-green-tea-plantations-in-munnar-hills-37534351/)                        |
| `landscape`    | [Lush Tea Plantations in Munnar Hillside — Pexels](https://www.pexels.com/photo/lush-tea-plantations-in-munnar-hillside-32262516/)                              |
| `hills`        | [Misty Landscape of Tea Plantations with Bus — Pexels](https://www.pexels.com/photo/misty-landscape-of-tea-plantations-with-bus-36982207/)                      |
| `cattle`       | [Close-up Portrait of a Black and White Dairy Cow — JacLou-DL, Pexels](https://www.pexels.com/photo/close-up-portrait-of-a-black-and-white-dairy-cow-33381885/) |
| `farmer`       | [People Working on Field — Beyond India by Shubham Thakur, Pexels](https://www.pexels.com/photo/people-working-on-field-19911960/)                              |
| `processing`   | [Milk Processing in a Factory — Mark Stebnicki, Pexels](https://www.pexels.com/photo/milk-processing-in-a-factory-2889347/)                                     |
| `biogas`       | [Farmer in Indian Village — EqualStock IN, Pexels](https://www.pexels.com/photo/farmer-in-indian-village-20344373/)                                             |
| `fields`       | [Unsplash source image](https://images.unsplash.com/photo-1500382017468-9049fed747ef)                                                                           |
| `herd`         | [Unsplash source image](https://images.unsplash.com/photo-1500595046743-cd271d694d30)                                                                           |
| `harvest`      | [Unsplash source image](https://images.unsplash.com/photo-1464226184884-fa280b87c399)                                                                           |

Stock license references: [Pexels license](https://www.pexels.com/license/), [Unsplash license](https://unsplash.com/license).

Fonts: [Manrope](https://github.com/google/fonts/tree/main/ofl/manrope), [Instrument Serif](https://github.com/google/fonts/tree/main/ofl/instrumentserif). SIL Open Font License copies are in `public/assets/fonts/`.

Design references, used for principles only: [Floema](https://floema.com/en/about), [Farm Minerals](https://www.farmminerals.com/), [Vantara](https://vantara.in/en/about-us). No reference-site code, proprietary images, branding, or animation sequence was copied.

## Editorial refinement assets

- `cinematic` and `cinematic-mobile`: [Misty Tea Plantations at Sunrise — Akhil Saji, Pexels](https://www.pexels.com/photo/scenic-view-of-misty-tea-plantations-at-sunrise-33361362/). Separate landscape and portrait crops keep the horizon intentional on each screen.
- `resources`: [Scenic View of Lush Tea Plantations in Munnar — Pexels](https://www.pexels.com/photo/scenic-view-of-lush-tea-plantations-in-munnar-30169270/).
- `people`: [Indian Female Farmer Working in Field at Sunset — Votso Sothu, Pexels](https://www.pexels.com/photo/indian-female-farmer-working-in-field-at-sunset-35635150/). This is illustrative Indian farming photography, not a verified Surabhi member or location.

The earlier hero assets remain available for replacement and comparison. All new photographs are local, with WebP, JPEG fallback, mobile variants, and recorded intrinsic dimensions.

## Official Surabhi logo

`public/assets/surabhi-logo.png` is the user-supplied official logo (1377 × 1048 PNG). It is retained byte-for-byte from the supplied attachment, including its original green, black and white canvas. The website now displays the transparent derivative described below.

## Transparent navigation logo

`public/assets/surabhi-logo-transparent.png` is a PNG with actual alpha transparency, created from the supplied logo using built-in ImageGen background extraction. The original supplied file remains unchanged. White-on-dark and dark-on-light variants are rendered with CSS, and the compact navigation uses a smaller width.

Final built-in ImageGen edit prompt:

> Use case: background-extraction. Edit target: the supplied official Surabhi logo. Produce a precise transparent-background cutout of this EXACT logo, not a redesign. Remove the plain white background and white negative spaces, including enclosed background regions and letter counters. Retain ONLY the original green and black printed artwork. Preserve the leaf, circular organic S-shaped mark, cow illustration, every edge and stroke, font shapes, all lettering, original green and black colors, original proportions, relative positioning and sharpness. Preserve exact text: 'SURABHI' and 'Multi State Co-operative Dairy Society Ltd.'. No new text, no new symbols, no rearrangement, no shadows, no glow, no outline, no colored background, no white rectangle, no checkerboard baked into pixels. Use actual PNG alpha transparency. Keep the entire logo and registered-name line visible with a modest transparent margin, not a large empty canvas.
