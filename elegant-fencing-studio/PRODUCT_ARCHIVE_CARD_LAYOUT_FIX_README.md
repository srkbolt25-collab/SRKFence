# Product Archive Card Layout Fix

Updated `/products` listing cards only.

## Changes
- Kept thumbnail images uncropped using `object-contain`.
- Set one consistent thumbnail area ratio using `aspect-[16/9]`.
- Removed circular/round visual treatment from the product-card thumbnail area and overlays.
- Moved/kept category label in the content area, not over the image.
- Limited product description to exactly 2 visible lines with `line-clamp-2`.
- Added consistent title/description spacing so cards align better.
- Made all product cards equal height with `flex h-full flex-col` and pushed View/Add RFQ buttons to the bottom.
- Product names, order, metadata, RFQ logic and page SEO were not changed.

## Updated file
- `src/components/pages/ProductsPage.tsx`
