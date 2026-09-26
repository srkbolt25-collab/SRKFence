# Category Layout Final Fix — 2026-08-28

Main and country-specific category detail pages now use an isolated two-column hero module:

Desktop:
- Left: category eyebrow, title, description/copy, CTA buttons
- Right: category hero image

Mobile/tablet:
- Copy first
- Image second
- Remaining sections continue below

This no longer depends on the conflicting global `detail-hero-grid` and `detail-hero-image` overrides.
