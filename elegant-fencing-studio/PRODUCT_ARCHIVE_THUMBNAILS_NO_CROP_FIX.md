# Product Archive Thumbnail No-Crop Fix

Updated `/products` archive card thumbnail rendering only.

## What changed

- Kept the rollback behavior: only product cards with the RFQ button use the mapped PDF thumbnails.
- Did not change product names, descriptions, categories, order, meta title, or meta description.
- Removed the fixed thumbnail height (`h-52`) from product cards.
- Removed `fill`/absolute image placement for product thumbnails.
- Removed hover zoom scaling that could crop image edges.
- Images now render full width with auto height so the full thumbnail is visible without cropping.

## Why

The previous fixed-height thumbnail box used `object-contain`, which preserved the whole image but caused blank side space on wide/landscape thumbnails. This update keeps the full image visible without cropping by allowing the image area height to follow the original thumbnail ratio.
