# SRK Fence Full GCC SEO Page Setup

This package adds a complete GCC landing-page architecture for SRK Fence.

## Page Coverage

- 8 main country pages
- 64 product-country pages: 8 priority product pages for each country
- 56 application-country pages: 7 priority application pages for each country
- Total GCC SEO landing pages: 128

## Countries Covered

- UAE
- Bahrain
- Qatar
- Kuwait
- Saudi Arabia
- Iraq
- Oman
- Jordan

## Product-Country Page Types

Each country has dedicated pages for:

- Chain Link Fence
- Welded Mesh Fence
- Anti-Climb 358 Fence
- Temporary Fence Panels
- PVC Fence
- PVC Hoarding Fence
- Barbed Wire
- Razor Wire

Example URLs:

- /countries/qatar/chain-link-fence
- /countries/saudi-arabia/anti-climb-358-fence
- /countries/oman/temporary-fence-panels
- /countries/kuwait/razor-wire

## Application-Country Page Types

Each country has dedicated pages for:

- Construction Site Fencing
- Warehouse Fencing
- Oil & Gas Fencing
- Data Center Security Fencing
- Industrial Fencing
- Farm Fencing
- Boundary Security Fencing

Example URLs:

- /countries/qatar/construction-site-fencing
- /countries/uae/warehouse-fencing
- /countries/saudi-arabia/oil-gas-fencing
- /countries/bahrain/data-center-security-fencing

## SEO Improvements Included

- Real buyer-facing landing pages, not visible keyword pages
- Removed public keyword chips / target keyword blocks from pages
- Added answer-first page sections for AEO and AI SEO
- Added service schema, FAQ schema and breadcrumb schema
- Added country-specific metadata for every GCC landing page
- Added product specs, application fit, RFQ checklist and buyer questions
- Added internal linking between country, product and application pages
- Updated sitemap to include the full GCC matrix
- Updated footer to include all target countries
- Changed key product/application images from cropped object-cover to object-contain where cutting was reported
- Hid invalid/fake BIM/PDF downloads and replaced empty technical sections with professional request-based messages

## Main Files Added/Modified

Added:

- src/lib/gccPages.ts
- src/components/pages/GccMarketLandingPage.tsx
- app/countries/[slug]/[page]/page.tsx
- GCC_SEO_PAGE_SETUP_README.md

Modified:

- src/components/pages/CountryLandingPage.tsx
- src/components/pages/ProductSeoLandingPage.tsx
- src/components/pages/ProductDetailsPage.tsx
- src/components/pages/ProductsPage.tsx
- app/applications/page.tsx
- app/applications/[slug]/page.tsx
- app/sitemap.ts
- src/components/Footer.tsx
- app/layout.tsx
- src/lib/seo.ts

