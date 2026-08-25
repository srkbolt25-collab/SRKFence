Fix for duplicate Colors & Coating Options card.

Reason:
- Old/internal alias: color-and-coating-options
- Canonical/current slug: colors-and-coating-options
- When both forms appeared from product data, the archive could show the same product twice.

Fix:
- Product archive now deduplicates product cards by canonical detailSlug.
- color-and-coating-options continues to resolve to colors-and-coating-options internally.
- Product page content, hero slider, sections, RFQ logic and meta data remain unchanged.
