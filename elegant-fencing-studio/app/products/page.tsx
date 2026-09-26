import Image from 'next/image';
import ProductsCatalogue from '@/components/ProductsCatalogue';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Steel Products Catalogue | MS, SS, GI & Aluminium',
  description: 'Browse mild steel, stainless steel, GI/PPGI and aluminium products for construction and fabrication. Call +971 58 660 0183 for catalogue RFQs.',
  path: '/products',
  image: '/banners/products-banner.webp',
  keywords: ['steel products catalogue', 'mild steel products', 'stainless steel products', 'GI steel products', 'aluminium products'],
});

export default function ProductsPage() {
  return (
    <>
      <section className="page-banner compact-banner">
        <Image src="/banners/products-banner.webp" alt="Industrial steel products catalogue for UAE, GCC and selected Middle East projects" fill priority sizes="100vw" />
        <div className="page-banner-overlay" />
        <div className="container page-banner-content">
          <p className="eyebrow">Steel Product Catalogue</p>
          <h1>Steel Products for Construction, Fitout, Roofing and Fabrication Projects</h1>
          <p>Browse SRK Steel products by category, compare common applications and open detailed product pages before sending a project RFQ.</p>
        </div>
      </section>

      <section className="section soft">
        <div className="container seo-two-col">
          <div>
            <p className="eyebrow">Product Range</p>
            <h2 className="large-title">Steel Products for Construction, Fitout and Fabrication Buyers</h2>
            <p className="lead-copy">SRK Steel supplies commonly requested steel products for industrial buildings, commercial construction, roofing and cladding, interior fitout, MEP support systems and fabrication work. The catalogue includes mild steel beams, channels, angles, bars, hollow sections, MS coils, sheets and plates, stainless steel coils, SS wire, SS plain sheets, galvanized coils, PPGI coils, Aluzinc coils, PVDF coils, GI sheets, insulated panels, corrugated sheets, decking sheets, purlins, drywall systems, strut and track, GI pipes and aluminium coils/sheets.</p>
            <p className="lead-copy">Use the product filter to narrow the catalogue by product family, then open the product page to check its common uses, specification points and related items. When sending an RFQ, include the technical details available from your drawing, BOQ or site notes.</p>
          </div>
          <aside className="content-panel">
            <h3>RFQ Details to Include</h3>
            <ul className="copy-list">
              <li>Product name, category and intended application.</li>
              <li>Grade, material, profile, size, thickness and finish.</li>
              <li>Required quantity, length, delivery city and timeline.</li>
              <li>Drawing, BOQ, specification sheet or site notes if available.</li>
            </ul>
            <Link href="/contact" className="btn">Send Product RFQ</Link>
          </aside>
        </div>
      </section>

      <ProductsCatalogue />

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Common Buyer Questions</p>
            <h2>Steel Product Catalogue FAQs</h2>
            <p className="section-text">Answers for contractors, fabricators, MEP buyers, fitout teams and procurement departments comparing steel products for project enquiries.</p>
          </div>
          <div className="faq-list">
            <details open><summary>Which steel products can I find in this catalogue?</summary><p>The catalogue includes mild steel products, stainless steel coils, SS wire, SS plain sheets, SS slitted coils, GI coils, PPGI coils, Aluzinc coils, PVDF coils, GI sheets, slitted coils, insulated panels, corrugated sheets, decking sheets, purlins, drywall systems, strut and track, GI pipes and aluminium coils/sheets.</p></details>
            <details open><summary>How do I choose the right product category?</summary><p>Start with the project use case. Mild steel products are used for structural and fabrication work, stainless steel for corrosion-resistant fabrication and finishes, galvanized steel for coated roofing, cladding and support systems, and aluminium for lightweight sheet, coil and cladding applications.</p></details>
            <details open><summary>What should I send for an accurate RFQ?</summary><p>Send the product name, grade or material, size, thickness, finish, quantity, drawing or BOQ reference and delivery location. Clear technical details help SRK Steel understand the product scope and respond with fewer clarification steps.</p></details>
            <details open><summary>Does SRK Steel support GCC project enquiries?</summary><p>Yes. SRK Steel supports enquiries across UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan for steel products used in construction, fitout, roofing, cladding, MEP support and fabrication work.</p></details>
          </div>
        </div>
      </section>
    </>
  );
}
