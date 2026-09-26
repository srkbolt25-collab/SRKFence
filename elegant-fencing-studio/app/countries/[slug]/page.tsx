import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import SectionHead from '@/components/SectionHead';
import ProductCard from '@/components/ProductCard';
import { applications, categoryInfo, countries, products } from '@/lib/data';
import { countryFaqs, countryGuide, faqJsonLd } from '@/lib/seoCopy';
import { breadcrumbJsonLd, buildMetadata, jsonLdMarkup } from '@/lib/seo';

export const dynamicParams = false;
export function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const country = countries.find((item) => item.slug === params.slug);
  if (!country) return buildMetadata({ title: 'Country Not Found', description: 'SRK Steel country page.', path: `/countries/${params.slug}` });
  return buildMetadata({
    title: `Steel Supplier in ${country.name} | Mild Steel, Purlins, Decking & Stainless Steel`,
    description: `SRK Steel supports ${country.name} enquiries for mild steel, stainless steel, galvanized steel and aluminium products with clear RFQ review.`,
    path: `/countries/${country.slug}`,
    image: '/banners/countries-banner.webp',
  });
}

export default function CountryPage({ params }: { params: { slug: string } }) {
  const country = countries.find((item) => item.slug === params.slug);
  if (!country) notFound();
  const guide = countryGuide(country);
  const faqs = countryFaqs(country);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdMarkup(breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Countries', path: '/countries' },
        { name: country.name, path: `/countries/${country.slug}` },
      ]))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdMarkup(faqJsonLd(faqs))} />
      <section className="product-detail-hero">
        <div className="container detail-hero-grid">
          <div>
            <p className="eyebrow">Countries We Serve</p>
            <h1>Steel Supplier in {country.name}</h1>
            <p>{country.description}</p>
            <p>{country.buyerFocus}</p>
            <div className="hero-actions"><Link href="/contact" className="btn">Request {country.name} RFQ</Link><Link href="/products" className="btn ghost">View Products</Link></div>
          </div>
          <div className="detail-hero-image"><Image src="/banners/countries-banner.webp" alt={`Steel supplier in ${country.name}`} fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
        </div>
      </section>

      <section className="section"><div className="container seo-two-col"><div><p className="eyebrow">Country Buyer Guide</p><h2 className="large-title">Steel Product Supply for {country.name} Projects</h2><div className="answer-block"><h3>Does SRK Steel supply steel products to {country.name}?</h3><p>{guide.answer}</p></div>{guide.paragraphs.map((paragraph) => <p className="lead-copy" key={paragraph}>{paragraph}</p>)}</div><aside className="content-panel"><h3>Industries served in {country.name}</h3><ul className="copy-list">{guide.industries.map((item) => <li key={item}>{item}</li>)}</ul><h3>RFQ Details to Include</h3><ul className="copy-list"><li>Product name, profile, section size or drawing reference.</li><li>Grade, coating, finish, thickness and length.</li><li>Quantity, project city and required delivery timeline.</li><li>Certificate, packing, cutting, punching or accessory requirements.</li></ul></aside></div></section>

      <section className="section soft">
        <div className="container">
          <SectionHead eyebrow="Country Product Categories" title={`Steel Product Categories in ${country.name}`} text="Browse category-specific pages before opening individual products for specifications, gallery images and RFQ details." />
          <div className="grid four">
            {categoryInfo.map((category) => {
              const displayNames: Record<string, string> = {
                'mild-steel-products': 'Mild Steel (MS) Products',
                'stainless-steel': 'Stainless Steel (SS) Products',
                'galvanized-steel': 'Galvanized Steel (GI) Products',
                'aluminium': 'Aluminium Products',
              };
              const displayName = displayNames[category.slug] ?? category.name;
              return (
                <Link href={`/countries/${country.slug}/categories/${category.slug}`} className="category-card-new" key={category.slug}>
                  <div className="category-image"><Image src={category.heroImage ?? category.image} alt={`${displayName} in ${country.name}`} fill sizes="(max-width: 760px) 100vw, 25vw" /></div>
                  <div className="category-copy"><span>Product Category</span><h3>{displayName}</h3><p>{category.description}</p><b>View {country.name} category →</b></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Country Product Range" title={`Steel Products Available in ${country.name}`} text="Open a country-specific product page to review applications, specification points and delivery details for your project location." />
          <div className="grid products">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                compact
                href={`/countries/${country.slug}/products/${product.slug}`}
                title={`${product.name} in ${country.name}`}
                cta="View country product page →"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Project Applications" title={`Steel Applications in ${country.name}`} text="Application-based product information for construction, fitout, MEP support, roofing, cladding and fabrication work." />
          <div className="grid three">
            {applications.map((app) => (
              <Link href={`/countries/${country.slug}/applications/${app.slug}`} className="application-card with-image" key={app.slug}>
                <img src={app.image} alt={`${app.title} in ${country.name}`} />
                <div><p>Application</p><h3>{app.title} in {country.name}</h3><span>{app.description}</span><b>View application page →</b></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft"><div className="container"><SectionHead eyebrow="Common Buyer Questions" title={`${country.name} Steel Supply FAQs`} text="Answers to common questions about product supply, RFQ details and project requirements." /><div className="faq-list">{faqs.map((faq) => <details key={faq.q} open><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></div></section>
    </>
  );
}
