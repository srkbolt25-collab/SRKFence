import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { applications, countries, getApplication, products } from '@/lib/data';
import { applicationFaqs, countryApplicationGuide, faqJsonLd } from '@/lib/seoCopy';
import { breadcrumbJsonLd, buildMetadata, jsonLdMarkup } from '@/lib/seo';

export const dynamicParams = false;
export function generateStaticParams() {
  return countries.flatMap((country) => applications.map((application) => ({ slug: country.slug, application: application.slug })));
}

export function generateMetadata({ params }: { params: { slug: string; application: string } }) {
  const country = countries.find((item) => item.slug === params.slug);
  const application = getApplication(params.application);
  if (!country || !application) return buildMetadata({ title: 'Steel Application Support', description: 'SRK Steel country application page.', path: `/countries/${params.slug}/applications/${params.application}` });
  return buildMetadata({
    title: `${application.title} Steel Products in ${country.name} | RFQ Support`,
    description: `${application.title} steel products for ${country.name} projects. Review recommended products, RFQ details and application guidance for construction, fitout, MEP, roofing and fabrication work.`,
    path: `/countries/${country.slug}/applications/${application.slug}`,
    image: application.image,
  });
}

export default function CountryApplicationPage({ params }: { params: { slug: string; application: string } }) {
  const country = countries.find((item) => item.slug === params.slug);
  const application = getApplication(params.application);
  if (!country || !application) notFound();
  const recommended = products.filter((product) => application.recommendedProducts.includes(product.slug));
  const guide = countryApplicationGuide(application, country);
  const faqs = applicationFaqs(application).map((faq) => ({
    ...faq,
    q: faq.q.replace(application.title, `${application.title} in ${country.name}`),
    a: faq.a.replace('UAE and GCC', `${country.name} and GCC`),
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdMarkup(breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Countries', path: '/countries' },
        { name: country.name, path: `/countries/${country.slug}` },
        { name: application.title, path: `/countries/${country.slug}/applications/${application.slug}` },
      ]))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdMarkup(faqJsonLd(faqs))} />
      <section className="product-detail-hero">
        <div className="container detail-hero-grid">
          <div>
            <p className="eyebrow">{country.name} Application Enquiries</p>
            <h1>{application.title} Steel Products in {country.name}</h1>
            <p>{application.description}</p>
            <p>SRK Steel helps {country.name} buyers match application requirements with suitable steel products, related accessories and RFQ details.</p>
            <div className="hero-actions"><Link href="/contact" className="btn">Request {country.name} RFQ</Link><Link href={`/applications/${application.slug}`} className="btn ghost">View Main Application Page</Link></div>
          </div>
          <div className="detail-hero-image"><Image src={application.image} alt={`${application.title} steel products in ${country.name}`} fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
        </div>
      </section>

      <section className="section">
        <div className="container seo-two-col">
          <div>
            <p className="eyebrow">Application Guidance</p>
            <h2 className="large-title">Steel Product Selection for {application.title} in {country.name}</h2>
            {guide.map((paragraph) => <p className="lead-copy" key={paragraph}>{paragraph}</p>)}
          </div>
          <aside className="content-panel"><h3>RFQ Details to Include</h3><ul className="copy-list">{application.requirements.map((item) => <li key={item}>{item}</li>)}<li>Project city: {country.cities}</li><li>Drawings, BOQ, finish requirement and expected delivery timeline.</li></ul><Link href="/contact" className="btn">Send Application Enquiry</Link></aside>
        </div>
      </section>

      <section className="section soft">
        <div className="container detail">
          <div>
            <p className="eyebrow">Recommended Products</p>
            <h2>Products Commonly Used for {application.title}</h2>
            <p className="lead-copy">The products below are commonly requested for {application.title.toLowerCase()} in {country.name}. Open each product page to review the product overview, applications, specification points and RFQ details.</p>
            <div className="grid two" style={{ marginTop: 28 }}>{recommended.map((product) => <ProductCard key={product.slug} product={product} compact />)}</div>
          </div>
          <aside><div className="rfq-box"><p className="product-cat">Application Enquiry</p><h3>Request a {country.name} RFQ</h3><p>Share the project city, drawings, BOQ, product sizes, quantities and delivery timeline for accurate application-based product review.</p><Link href="/contact" className="btn">Send RFQ</Link></div></aside>
        </div>
      </section>

      <section className="section"><div className="container"><h2 className="large-title">{application.title} FAQs for {country.name}</h2><div className="faq-list">{faqs.map((faq) => <details key={faq.q} open><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></div></section>
    </>
  );
}
