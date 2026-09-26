import Image from 'next/image';
import Link from 'next/link';
import { applications } from '@/lib/data';
import SectionHead from '@/components/SectionHead';
import { buildMetadata } from '@/lib/seo';
export const metadata = buildMetadata({
  title: 'Steel Applications | Roofing, MEP & Fabrication',
  description: 'Find steel products for warehouses, construction, fitout, MEP support, roofing, cladding and fabrication with product-specific RFQ guidance.',
  path: '/applications',
  image: '/banners/applications-banner.webp',
  keywords: ['steel products by application', 'construction steel products', 'roofing steel products', 'MEP support steel', 'fabrication steel products'],
});
export default function ApplicationsPage() {
  return <>
    <section className="page-hero">
      <div className="container"><p className="eyebrow">Applications</p><h1>Steel Products by Project Application</h1><p className="section-text">Match steel products to construction, roofing, cladding, interior fitout, MEP support and fabrication project requirements.</p></div>
    </section>
    <section className="section">
      <div className="container visual-copy-grid">
        <div>
          <p className="eyebrow">Application Selection</p>
          <h2 className="large-title">Choose Steel Products by How They Will Be Used</h2>
          <p className="lead-copy">Every project uses steel differently. A warehouse may need purlins, decking sheets and support channels, while an interior fitout package may need drywall studs, tracks and accessories. This section helps buyers start from the site use before choosing the product family.</p>
          <p className="lead-copy">Open an application page to see common products, selection points and related country pages. For a useful response, share drawings, BOQ notes, product sizes, grade, thickness, finish, quantity and delivery location when sending an RFQ.</p>
          <div className="internal-links"><a href="/products">View Products</a><a href="/categories">View Categories</a><a href="/contact">Request RFQ</a></div>
        </div>
        <div className="visual-copy-image"><Image src="/banners/applications-banner.webp" alt="Steel products by construction and industrial application" fill priority sizes="(max-width: 900px) 100vw, 46vw" /></div>
      </div>
    </section>
    <section className="section soft"><div className="container"><SectionHead eyebrow="Project Use Cases" title="Applications We Support" text="Select an application to review recommended steel products and specification points." /><div className="grid three">{applications.map(app => <Link href={`/applications/${app.slug}`} className="application-card with-image" key={app.slug}><img src={app.image} alt={app.title} /><div><p>Application</p><h3>{app.title}</h3><span>{app.description}</span><b>Explore Application →</b></div></Link>)}</div></div></section>
  </>;
}
