# RFQ Mobile Functionality Fix

Updated the 19 PDF product page action buttons so the mobile Add RFQ flow works beyond the toast notification.

## Changes

- `Request Quote` remains corrected to `Request a Quote`.
- `Add RFQ` now waits for product ID resolution before saving the item.
- If the database/API product lookup is slow or unavailable on mobile, the page falls back to the canonical PDF product slug instead of creating a broken RFQ item.
- The success and duplicate-item toast now includes a `View RFQ` action that opens `/rfq` directly.
- Navbar RFQ cart and `/rfq` page now understand the canonical PDF product slugs, so added PDF products show with proper title, category and image even when no MongoDB product ID is available.
- PDF content, GCC content, FAQ content, thumbnails, meta title and meta description remain unchanged.

## Files changed

- `src/components/pages/ProductPdfActionButtons.tsx`
- `src/lib/rfqProductHelpers.ts`
- `src/components/Navbar.tsx`
- `app/rfq/page.tsx`
