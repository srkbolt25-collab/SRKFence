SRK Fence - SAFE old-blog rewrite deployment patch

This recovery patch intentionally changes ONLY:
- app/blog/[slug]/page.tsx (rewritten old-blog content)
- app/blog/page.tsx (updated old-blog cards/listing copy)
- 11 public/blog/*.webp banner files

It intentionally DOES NOT change:
- app/blog/[slug]/layout.tsx
- src/lib/seo.ts
- package.json / lockfiles
- shared layout/components

Reason: isolate the blog content/banner update from metadata/schema changes so deployment risk is minimized.
The updated TSX files were syntax-parsed successfully before packaging.
