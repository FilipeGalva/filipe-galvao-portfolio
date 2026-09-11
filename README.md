# PO-01 Minimum Portfolio — Release R01

## Status
PRE-DEPLOY QA

## Source
Claude Design export

## Source ZIP
`..\..\Source Export\Portfolio Premium PO-01.zip`

Size: 20,210,565 bytes.
SHA-256: `56cc2ef635449e4fe48ff112595decb545e3726ced9e5eb0b9ec67f4755ca74b`.

## Homepage
`index.html` (also served at `/`)

## Case
`ensine-gastronomy.html`

The case returns to `index.html#work`. `anchor-navigation.js` waits for the runtime to create fragment targets and positions them below the sticky header.

## Runtime
- `support.js`: original Claude Design runtime, preserved byte-for-byte; renders `x-dc`, `x-import`, conditional content and data bindings.
- `image-slot.js`: original image-slot component, preserved byte-for-byte.
- `.image-slots.state.json`: original embedded WebP images and crop/position state, preserved byte-for-byte. Must be served over HTTP, including the leading dot in its filename. Slots are read-only outside the Claude editing host.
- `_ds/marca-pessoal-design-system-b1a1581b-f01b-408a-b3a9-12fe92465c67/styles.css`, `_ds_bundle.css`, `_ds_bundle.js`: required design-system assets. CSS and embedded fonts are unchanged. Only the source-authoring manifest comment was removed from the JS bundle; executable code is unchanged.
- React 18.3.1: https://unpkg.com/react@18.3.1/umd/react.production.min.js
- ReactDOM 18.3.1: https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js
- Babel Standalone 7.29.0, available on demand for runtime JSX imports: https://unpkg.com/@babel/standalone@7.29.0/babel.min.js
- These CDN versions and their integrity hashes are the original export's dependencies. React is loaded before `support.js` to prevent the design-system bundle from executing before React exists. No framework conversion or runtime rewrite was performed.
- Fonts are embedded in `_ds_bundle.css`; no external font service is required. The image-slot script includes an Unsplash attribution URL for its optional credit feature; this release uses supplied images.
- Rendering requires JavaScript and access to the runtime CDN. This is a static site with client-side rendering, without a build step, server backend, analytics or new package dependencies.

## Technical patch
- Renamed the two public HTML entrypoints and repaired navigation.
- Added the requested titles, descriptions and Open Graph metadata. Both pages use the existing EnsinE ecosystem cover. The image URL is relative while no public origin is assigned; use the actual HTTPS asset URL when a deployment origin is chosen.
- Reused the same existing image as the browser icon to avoid an automatic missing favicon request.
- Exported the four editorial captures as their exact embedded WebP bytes; inspection links use `.webp` rather than nonexistent PNGs. No image was recompressed or fabricated.
- Removed the two dormant PDF controls because the source does not contain those PDFs; brochure evidence images remain.
- Allowed the existing contact email button to wrap at widths up to 480px, preventing mobile overflow without changing its text.
- Added `noopener noreferrer` to links opening new tabs; approved destinations and the email address are unchanged.

## Excluded authoring material
The cover-authoring HTML is not referenced by either page: the final cover PNG is already used directly. It remains in Working with the original uploads, briefs, content JSON, design-system README, manifest, linter settings, thumbnail and unused duplicate images. None of those documents is required by runtime, and none is included here. No source ZIP is present in Release.

## Local QA
Serve this directory with an existing static HTTP server; do not rely on `file://` viewing. Serve `.image-slots.state.json` with the other files. Desktop 1440px, tablet 834px and mobile 390px were inspected in Microsoft Edge through local HTTP. Detailed screenshots, navigation checks, HTTP results, static checks and the SHA-256 file inventory are retained separately under `../../Working/` and should not be published.

Template `{{ ... }}` expressions and image-slot placeholder attributes are required runtime syntax, not unresolved public copy. All used slots resolve to supplied images; rendered text contains no unresolved template expressions. Image-slot crop images may extend beyond their own boxes internally; the original crop masks keep them within the layout.

All 22 release files returned HTTP 200 locally. All 14 approved editorial/course destinations returned HTTP 200. LinkedIn returned HTTP 999 to the automated check, so profile availability could not be confirmed automatically; its approved URL is preserved. The `mailto:` destination is syntactically valid and unchanged; no email was sent.

## Important
Original Claude Design ZIP is immutable and preserved separately.

## Deployment Target
Static hosting / Vercel

Only this `Release/R01` directory is the public site root. No project has been created, repository pushed, DNS configured, analytics added or site published.

## Do Not
Do not edit Source Export directly.
