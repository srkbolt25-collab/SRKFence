import Link from 'next/link';
import CategoryCard from '@/components/CategoryCard';
import HeroSlider from '@/components/HeroSlider';
import SectionHead from '@/components/SectionHead';
import { applications, categoryInfo, countries } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Steel Supplier in UAE | MS, SS, GI & Aluminium',
  description: 'Steel supplier in UAE for mild steel, stainless steel, GI/PPGI and aluminium products. Call +971 58 660 0183 for project RFQs and supply enquiries.',
  path: '/',
  image: '/banners/hero-steel-2.webp',
  keywords: ['steel supplier in UAE', 'mild steel supplier', 'stainless steel supplier', 'galvanized steel supplier', 'aluminium supplier UAE'],
});

const buyerReasons = [
  ['Documentation Support', 'Material certificates and product information can be reviewed where project documents require it.'],
  ['Supply Efficiency', 'Product size, quantity, delivery city and timeline are checked early for smoother coordination.'],
  ['Wide Product Range', 'Mild steel, stainless steel, galvanized steel and aluminium categories are organised in one catalogue.'],
  ['Practical RFQ Support', 'The team helps buyers clarify grade, profile, thickness, finish, drawings and BOQ notes before quotation.'],
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="section soft intro-section">
        <div className="container seo-two-col intro-two-col">
          <div>
            <p className="eyebrow">Who is SRK Steel?</p>
            <h2 className="large-title">Steel Products for Contractors, Fabricators and MEP Teams</h2>
            <p className="lead-copy">SRK Steel supplies commonly requested steel products for construction, roofing, cladding, interior fitout, fabrication and MEP support work. Buyers can review mild steel products, stainless steel products, galvanized steel products and aluminium products before sending a project RFQ.</p>
            <p className="lead-copy">The team helps buyers confirm practical details such as grade, profile, thickness, finish, quantity, drawings or BOQ notes and delivery location. Enquiries are reviewed for UAE and selected GCC/Middle East markets including Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan.</p>
            <div className="internal-links"><a href="/products">Products</a><a href="/categories">Categories</a><a href="/countries">Countries</a><a href="/contact">Request RFQ</a></div>
          </div>
          <aside className="homepage-image-panel">
            <img src="/banners/products-banner.webp" alt="SRK Steel product range for construction and industrial projects" />
          </aside>
        </div>
      </section>

      <section className="section soft category-section">
        <div className="container">
          <div className="section-row-head">
            <SectionHead eyebrow="Product Categories" title="Explore Our Steel Product Range" text="We offer a wide range of mild steel, stainless steel, galvanized steel and aluminium products for project requirements." />
            <Link href="/contact" className="btn category-quote">Get a Quote →</Link>
          </div>
          <div className="grid category-grid-new">
            {categoryInfo.map((category) => <CategoryCard key={category.slug} category={category} />)}
          </div>
        </div>
      </section>

      <section className="section applications-strip">
        <div className="container">
          <SectionHead eyebrow="Applications" title="Built for Industrial Projects" text="Match the right steel products to site requirements, fabrication needs and construction workflows." />
          <div className="grid three">{applications.map((app) => <article className="application-card with-image" key={app.slug}><img src={app.image} alt={app.title} /><div><p>Application</p><h3>{app.title}</h3><span>{app.description}</span><Link href={`/applications/${app.slug}`}><b>Explore Application →</b></Link></div></article>)}</div>
        </div>
      </section>

      <section className="section why-section soft">
        <div className="container split why-grid">
          <div>
            <div className="factory-photo"><img src="/banners/homepage-stacked-steel-sheets.jpg" alt="Stacked coated steel sheets supplied by SRK Steel" /></div>
            <div className="quote-card">“We don't just sell steel; we help buyers organise the right steel requirement for real project work.”</div>
          </div>
          <div>
            <p className="eyebrow">Why Leaders Choose Us</p>
            <h2 className="large-title">Reliable Supply Support for Industrial Buyers</h2>
            <p className="lead-copy">SRK Steel works with contractors, fabricators, fitout teams and procurement departments that need clear product information, organised RFQs and dependable supply support before placing an order.</p>
            <div className="feature-grid" style={{marginTop: 34}}>
              {buyerReasons.map(([title, text]) => <div className="feature" key={title}><b>{title}</b><p>{text}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section leading-section">
        <div className="container leading-grid">
          <div className="leading-image-card"><img src="/banners/hero-steel-2.webp" alt="SRK Steel industrial supply team and steel products" /></div>
          <div className="leading-copy-card">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="large-title">Leading Suppliers,<br /><span>Since 1998</span></h2>
            <p className="lead-copy">Since 1998, SRK Steel has served buyers who need practical steel product information, clear communication and dependable supply coordination for construction and industrial work.</p>
            <p className="lead-copy">The range covers mild steel, stainless steel, galvanized steel and aluminium products including coils, sheets, panels, profiles, purlins, strut systems and fabrication materials. Share product sizes, drawings and delivery details so the team can review the requirement properly.</p>
            <div className="leading-stats"><div><strong>25+</strong><span>Years</span></div><div><strong>250+</strong><span>Products</span></div><div><strong>10k+</strong><span>Projects</span></div><div><strong>500+</strong><span>Customers</span></div></div>
          </div>
        </div>
      </section>

      <section className="section soft testimonials-section">
        <div className="container">
          <SectionHead eyebrow="Client Feedback" title="What Our Customers Are Saying About Us" text="Feedback from project buyers and procurement teams who value clear communication and practical product guidance." />
          <div className="reviews-track">
            {[
              ['Procurement Manager', 'SRK Steel helped us shortlist purlins and decking sheets quickly. The team asked the right technical questions before preparing a response.'],
              ['MEP Contractor', 'The strut channel support was clear and practical. We received guidance on size, finish and accessory planning before confirming the enquiry.'],
              ['Fitout Company', 'Drywall partition product information was easy to understand and helped our team prepare a cleaner BOQ-based request.'],
              ['Fabrication Buyer', 'The stainless steel product pages made it easier to compare sheets, wire and coils before sending the final requirement.'],
              ['Construction Contractor', 'Good communication for regional enquiries. The team understood delivery location, quantity and specification details from the beginning.'],
              ['Project Engineer', 'SRK Steel gives product-focused answers instead of generic replies, which helps when a project needs quick technical clarification.']
            ].map(([role, quote]) => <article className="review-card" key={role}><p>“{quote}”</p><b>{role}</b></article>)}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionHead eyebrow="Markets Served" title="Countries We Serve" text="SRK Steel supports steel product RFQs for UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan." />
          <div className="country-grid">
            {countries.map((country) => (
              <Link href={`/countries/${country.slug}`} className="country-card" key={country.slug}>
                <span>{country.name}</span>
                <p>{country.cities}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft"><div className="container"><div className="banner"><div><h2>Need steel products for a project?</h2><p>Send product name, grade, thickness, finish, quantity and delivery location so the team can review your requirement.</p></div><Link href="/contact" className="btn" style={{background:'#111', borderColor:'#111'}}>Request RFQ</Link></div></div></section>
    </>
  );
}
