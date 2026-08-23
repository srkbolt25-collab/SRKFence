# Product Archive Names & Thumbnails Update

Updated `/products` listing/archive page so PDF-based product cards use the product names and thumbnail images from the provided product PDF/image references.

## What changed

- Added a PDF-based product archive card list in `src/components/pages/ProductsPage.tsx`.
- Added thumbnail image cards to the "Priority RFQ Products" section.
- The "Complete Fencing Product Range" now shows PDF-mapped product cards first.
- Duplicate/matching database products are filtered so old/wrong titles and thumbnails do not appear for the PDF-based product pages.
- Product detail navigation uses `hrefSlug`, so display names can match the PDF while still linking to the correct website slug.
- Copied the full PDF-mapped product image set into `public/products/pdf-mapped/`.

## PDF-based product cards included

1. Fence Posts (G.I. / M.S. / PVC)
2. Panel & Post System
3. High-Security Gate Systems
4. Base Plates
5. Gate Hinges
6. Post & Rail System
7. PVC Decorative Fence
8. PVC Privacy Fence
9. Anti Climb 358 Security Fence
10. Rectangle Mesh Fence
11. Gabion Wall & Fencing
12. Clamps & Connectors
13. Fence Accessories
14. Fasteners / Bolts
15. Coating Materials
16. Colors & Coating Options
17. G.I. & PVC Coated Barbed Wire
18. Razor Wire
19. Temporary Fence Panels

## Notes

- Meta title/meta description were not intentionally changed in this update.
- Full Next.js build was not run here because `node_modules` is not included in the ZIP. After upload, run `npm install` and `npm run build`.
