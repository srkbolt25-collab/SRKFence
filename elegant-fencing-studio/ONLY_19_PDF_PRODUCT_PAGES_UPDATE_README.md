# Only 19 PDF Product Pages Update

This package limits the PDF-style product detail layout to the 19 products that have PDF source content/images.

What changed:
- Added `src/components/pages/ProductPdfLandingPage.tsx` for the PDF-style page layout.
- Restored `src/components/pages/ProductSeoLandingPage.tsx` as the default product SEO layout.
- Updated `app/products/[id]/page.tsx` so only these 19 slugs use the PDF layout:
  - fence-posts-gi-ms-pvc
  - panel-post-system
  - high-security-gate-systems
  - post-and-railing-system
  - pvc-decorative-fence
  - pvc-privacy-fence
  - rectangle-mesh-fence
  - fasteners-bolts
  - anti-climb-358-fence
  - temporary-fence-panels
  - barbed-wire
  - razor-wire
  - base-plates
  - fence-accessories
  - colors-and-coating-options
  - coating-materials
  - gabion-wall-and-fencing
  - clamps-and-connectors
  - gate-hinges-and-locks

Products outside these 19 continue using the previous/default product page layout.

Meta title and meta description are not changed by this update.
