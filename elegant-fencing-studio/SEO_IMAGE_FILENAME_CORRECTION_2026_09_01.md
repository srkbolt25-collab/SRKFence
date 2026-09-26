# Corrugated Slider SEO Filename Fix — 2026-09-01

The previous update incorrectly renamed your keyword-focused image files to generic `01.jpg`, `02.jpg`, etc.

This correction preserves the user-supplied SEO keyword filenames in the actual public gallery paths and updates `lib/productGalleries.ts` accordingly.

Updated products:
- Corrugated Ridge — 5 keyword-named images
- Corrugated Curve — 5 keyword-named images
- Corrugated Wall Sheet — 5 keyword-named images
- Corrugated Roofing Sheet — 4 keyword-named uploaded images + one pre-existing fifth image retained as `05.jpg`

Coverage:
- Main product sliders
- Country product sliders
- Corrugated Roofing Sheet primary thumbnail/metadata image now points to the keyword-named first gallery image

No image pixels were recompressed or regenerated in this correction; the uploaded source files were copied as supplied.
