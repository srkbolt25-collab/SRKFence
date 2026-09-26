import Link from 'next/link';
import { categoryInfo, services } from '@/lib/data';
import SectionHead from '@/components/SectionHead';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Steel Supply Services | RFQ, BOQ & Delivery Support',
  description: 'Steel supply services for RFQ/BOQ review, cut-to-length support, certificates, bulk enquiries and delivery planning. Call +971 58 660 0183.',
  path: '/services',
  image: '/banners/products-banner.webp',
  keywords: ['steel supply services', 'steel RFQ review', 'steel BOQ review', 'cut to length steel', 'steel delivery support'],
});

const serviceDetails: Record<string, string> = {
  'RFQ and BOQ review': 'Send drawings, BOQ notes, project scope and product list so SRK Steel can understand required grades, profiles, sizes, thicknesses, finishes and quantities before preparing a response.',
  'Cut-to-length supply support': 'For sheets, coils, profiles and sections, mention required cut lengths, tolerances and packing expectations so the enquiry can be reviewed correctly.',
  'Material certificate support': 'Where the project requires material certificates or supporting documents, mention that requirement at RFQ stage so documentation expectations are clear.',
  'Bulk quantity RFQ': 'Bulk enquiries should include quantity breakdown, phased delivery needs, destination city and product grouping so the team can review the supply package properly.',
  'Delivery coordination': 'Delivery planning depends on country, city, site access, timeline and packing requirements. Add these details when sending a regional RFQ.',
  'Custom profile and accessory guidance': 'For purlins, strut channels, drywall systems, decking sheets and roofing packages, include accessories, drawings and installation context where available.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Steel Supply Services</h1>
          <p className="section-text">Support for buyers who need steel products reviewed against drawings, BOQ notes, size requirements, finishes, quantities and delivery locations.</p>
        </div>
      </section>
      <section className="section soft">
        <div className="container seo-two-col">
          <div><p className="eyebrow">Procurement Support</p><h2 className="large-title">Practical RFQ Support for Steel Buyers</h2><p className="lead-copy">SRK Steel services are designed around how contractors and procurement teams actually buy steel products. A clear enquiry should not only mention the product name; it should also include grade, size, thickness, finish, quantity, drawing reference, delivery city and timeline.</p><p className="lead-copy">The team reviews mild steel, stainless steel, galvanized steel and aluminium enquiries for construction, roofing, cladding, interior fitout, MEP support and fabrication projects. The goal is to reduce unclear back-and-forth and help buyers submit a complete requirement from the start.</p></div>
          <aside className="content-panel"><h3>Categories Covered</h3><ul className="copy-list">{categoryInfo.map((category) => <li key={category.slug}>{category.name}</li>)}</ul><Link href="/contact" className="btn">Send Service RFQ</Link></aside>
        </div>
      </section>
      <section className="section">
        <div className="container"><SectionHead eyebrow="Service Areas" title="How SRK Steel Supports Your Enquiry" text="Each service helps buyers prepare clearer, specification-led RFQs for project steel requirements." /><div className="grid three">
          {services.map((service) => (
            <article className="product-card compact" key={service}>
              <div className="product-content"><p className="product-cat">Service</p><h3>{service}</h3><p>{serviceDetails[service] || 'Share your requirement with the available technical details so SRK Steel can review the scope and respond clearly.'}</p><Link href="/contact"><b>Contact Team →</b></Link></div>
            </article>
          ))}
        </div></div>
      </section>
      <section className="section soft"><div className="container"><SectionHead eyebrow="Buyer FAQ" title="Steel Service Questions" text="Direct answers for buyers comparing steel supply, BOQ review and delivery coordination support." /><div className="faq-list"><details open><summary>What should I send for BOQ review?</summary><p>Send drawings, BOQ lines, product names, grades, sizes, thicknesses, finishes, quantities and delivery location. Add certificate, packing, cutting or punching requirements if they apply.</p></details><details open><summary>Can SRK Steel support multiple products in one RFQ?</summary><p>Yes. Many projects require related steel items such as purlins, decking sheets, flashings, strut channels, panels and sheets. Sending the full package helps the team review the requirement together.</p></details><details open><summary>Does SRK Steel support UAE, GCC and selected Middle East enquiries?</summary><p>Yes. SRK Steel reviews enquiries for UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan.</p></details></div></div></section>
    </>
  );
}
