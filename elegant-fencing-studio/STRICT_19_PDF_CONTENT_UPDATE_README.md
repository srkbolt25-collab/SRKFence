# Strict 19 PDF Product Content Update

This build limits the PDF-style product detail layout to the 19 uploaded PDF-based products only.

Important:
- Visible product detail page content for these 19 pages is now stored in `src/lib/pdfProductContent.ts`.
- The displayed headings, descriptions, options, specification rows, key features, applications, colors, coating options, benefits and accessory lists are derived from the uploaded PDF content only.
- Generic generated country/FAQ sections have been removed from the PDF detail layout so the page content does not add unsupported content beyond the PDF files.
- Other non-PDF products keep their existing/default product layout.
- Product archive descriptions for mapped PDF products now use the PDF-derived short descriptions from `pdfProductContent.ts`.
- Meta title and meta description were not intentionally changed.

Updated component:
- `src/components/pages/ProductPdfLandingPage.tsx`

PDF content source map:
- `src/lib/pdfProductContent.ts`
