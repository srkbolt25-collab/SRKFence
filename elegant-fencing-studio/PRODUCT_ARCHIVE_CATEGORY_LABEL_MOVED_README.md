# Product Archive Category Label Moved

Updated `/products` archive cards so category labels no longer cover product thumbnails.

## Changes
- Removed the top-left category overlay from the thumbnail image area.
- Moved the category label into the card content area above the product title.
- Kept thumbnail no-crop behavior intact: images remain full width with auto height.
- Kept product names, order, descriptions, category values, RFQ buttons, and metadata unchanged.
- Kept the RFQ-thumbnail-only rollback behavior from the previous update.

## Main file changed
- `src/components/pages/ProductsPage.tsx`
