# Product Archive Category + Card Height Fix

Updates applied to `/products` archive/listing cards:

- Removed the duplicate category chip from the product card content area.
- Kept thumbnail display no-crop using `object-contain`.
- Kept the same thumbnail ratio with a fixed `16:9` image area.
- Added equal-height grid behavior using `auto-rows-fr`.
- Added consistent product card minimum height.
- Kept descriptions limited to 2 lines.
- Kept feature chips in a fixed-height area so buttons align.
- Product names, descriptions, order, RFQ logic, meta title and meta description were not changed.

After upload, run:

```bash
npm install
npm run build
```
