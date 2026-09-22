SRK Fencing - Safe Uniform Product Grid Patch

Base: last working Google Map Exact Business Card build.

Only the products grid component is changed:
- product image area has the same fixed height at each breakpoint
- images remain fully visible with object-contain (no cropping)
- cards stretch evenly within the grid row
- title/description and bottom action areas have consistent minimum heights
- total card height is NOT hard-locked, avoiding content overflow on smaller screens

Updated file:
- src/components/pages/ProductsPage.tsx
