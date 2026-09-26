import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import SectionHead from '@/components/SectionHead';
import { applications, countries, products } from '@/lib/data';
import { applicationFaqs, applicationGuide, faqJsonLd } from '@/lib/seoCopy';
import { breadcrumbJsonLd, buildMetadata, jsonLdMarkup } from '@/lib/seo';
import { getApplicationKeywordProfile } from '@/lib/keywordSeo';

export const dynamicParams = false;
export function generateStaticParams() {
  return applications.map((application) => ({ slug: application.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const application = applications.find((item) => item.slug === params.slug);
  if (!application) return buildMetadata({ title: 'Steel Application', description: 'SRK Steel application page.', path: `/applications/${params.slug}` });
  const seoProfile = getApplicationKeywordProfile(application);
  return buildMetadata({
    title: seoProfile.title,
    description: seoProfile.description,
    path: `/applications/${application.slug}`,
    image: application.image,
    keywords: [seoProfile.primary, ...seoProfile.secondary],
  });
}

export default function ApplicationDetailPage({ params }: { params: { slug: string } }) {
  const application = applications.find((item) => item.slug === params.slug);
  if (!application) notFound();
  const recommended = products.filter((product) => application.recommendedProducts.includes(product.slug));
  const guide = applicationGuide(application);
  const faqs = applicationFaqs(application);
  const seoProfile = getApplicationKeywordProfile(application);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdMarkup(breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Applications', path: '/applications' },
        { name: application.title, path: `/applications/${application.slug}` },
      ]))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdMarkup(faqJsonLd(faqs))} />
      <section className="product-detail-hero">
        <div className="container detail-hero-grid">
          <div>
            <p className="eyebrow">Application</p>
            <h1>{application.title} Steel Products</h1>
            <p>{application.description}</p>
            <p>{seoProfile.content}</p>
            <p>{guide.answer}</p>
            <div className="hero-actions"><Link href="/contact" className="btn">Request RFQ</Link><Link href="/applications" className="btn ghost">All Applications</Link></div>
          </div>
          <div className="detail-hero-image"><Image src={application.image} alt={`${application.title} steel products`} fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
        </div>
      </section>
      <section className="section"><div className="container seo-two-col"><div><p className="eyebrow">Application Guide</p><h2 className="large-title">How to Select Steel Products for {application.title}</h2>{guide.paragraphs.map((paragraph) => <p className="lead-copy" key={paragraph}>{paragraph}</p>)}</div><aside className="content-panel"><h3>RFQ details to include</h3><ul className="copy-list">{application.requirements.map((item) => <li key={item}>{item}</li>)}<li>Drawing, BOQ, delivery city and required delivery date.</li></ul><h3>Country pages</h3><div className="chips">{countries.map((country) => <Link className="chip" href={`/countries/${country.slug}/applications/${application.slug}`} key={country.slug}>{country.name}</Link>)}</div></aside></div></section>
      <section className="section soft">
        <div className="container detail">
          <div>
            <SectionHead eyebrow="Recommended Products" title={`Steel Products for ${application.title}`} text="These products are commonly requested for this application. Open product pages for specifications and RFQ details." />
            <div className="grid two">{recommended.map((product) => <ProductCard key={product.slug} product={product} compact />)}</div>
          </div>
          <aside><div className="rfq-box"><p className="product-cat">RFQ Support</p><h3>Need help choosing?</h3><p>Send drawings, BOQ or site notes and SRK Steel can guide product selection for your project package.</p><Link href="/contact" className="btn">Send RFQ</Link></div></aside>
        </div>
      </section>
      <section className="section"><div className="container"><SectionHead eyebrow="Common Buyer Questions" title={`${application.title} FAQs`} text="Direct answers for buyers researching steel product options by application." /><div className="faq-list">{faqs.map((faq) => <details key={faq.q} open><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></div></section>
    </>
  );
}
