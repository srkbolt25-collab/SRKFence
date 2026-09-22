# Product Archive Thumbnails Only Rollback

This update rolls back the previous `/products` archive product-name/card injection change.

## What changed
- Product card names and descriptions on `/products` remain driven by the existing database/fallback data.
- The previous PDF-based injected archive card list was removed.
- Only thumbnails for matched products in the RFQ product card grid are replaced with PDF-mapped HD thumbnails.
- The top "Priority RFQ Products" section remains unchanged and is not converted into image cards.
- Meta titles/descriptions were not changed.

## Updated file
- `src/components/pages/ProductsPage.tsx`

## Image folder kept
- `public/products/pdf-mapped/`

The thumbnails are used only when a live product card can be matched to one of the PDF product pages such as fence posts, base plates, coating materials, gate hinges, clamps/connectors, gabion wall and other mapped product slugs.
