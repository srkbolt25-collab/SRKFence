import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import ProductGallerySlider from '@/components/ProductGallerySlider';
import { applications, countries, getProduct, products, slugifyCategory } from '@/lib/data';
import { getPrimaryProductImage, getProductGallery } from '@/lib/productThumbnailOverrides';
import { faqJsonLd, getCountryProductSeo, productAuthorityProfile } from '@/lib/seoCopy';
import { breadcrumbJsonLd, buildMetadata, jsonLdMarkup } from '@/lib/seo';

export const dynamicParams = false;
export function generateStaticParams() {
  return countries.flatMap((country) => products.map((product) => ({ slug: country.slug, product: product.slug })));
}

export function generateMetadata({ params }: { params: { slug: string; product: string } }) {
  const country = countries.find((item) => item.slug === params.slug);
  const product = getProduct(params.product);
  if (!country || !product) return buildMetadata({ title: 'Steel Product Supply', description: 'SRK Steel country product page.', path: `/countries/${params.slug}/products/${params.product}` });
  const image = getPrimaryProductImage(product);
  const localizedSeo = getCountryProductSeo(product, country);
  return buildMetadata({
    title: localizedSeo.metaTitle,
    description: localizedSeo.metaDescription,
    path: `/countries/${country.slug}/products/${product.slug}`,
    image,
    keywords: localizedSeo.keywords,
  });
}

export default function CountryProductPage({ params }: { params: { slug: string; product: string } }) {
  const country = countries.find((item) => item.slug === params.slug);
  const product = getProduct(params.product);
  if (!country || !product) notFound();

  const related = products.filter((item) => item.slug !== product.slug && item.category === product.category).slice(0, 4);
  const localizedSeo = getCountryProductSeo(product, country);
  const faqs = localizedSeo.faqs;
  const guide = localizedSeo.guide;
  const galleryImages = getProductGallery(product);
  const authority = productAuthorityProfile(product);
  const categorySlug = slugifyCategory(product.category);
  const relatedApplications = product.applications.map((title) => applications.find((application) => application.title === title)).filter(Boolean);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdMarkup(breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Countries', path: '/countries' },
        { name: country.name, path: `/countries/${country.slug}` },
        { name: product.name, path: `/countries/${country.slug}/products/${product.slug}` },
      ]))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdMarkup(faqJsonLd(faqs))} />

      <section className="product-detail-hero">
        <div className="container detail-hero-grid">
          <div>
            <p className="eyebrow">{localizedSeo.eyebrow}</p>
            <h1>{localizedSeo.h1}</h1>
            <p>{product.short}</p>
            {localizedSeo.heroParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="hero-actions">
              <Link href="/contact" className="btn">Request {country.name} RFQ</Link>
              <Link href={`/products/${product.slug}`} className="btn ghost">View Main Product Page</Link>
            </div>
          </div>
          <ProductGallerySlider productName={`${product.name} in ${country.name}`} images={galleryImages} />
        </div>
      </section>

      <section className="section">
        <div className="container detail">
          <div>
            <p className="eyebrow">Product Scope</p>
            <h2>{localizedSeo.scopeHeading}</h2>
            <p className="lead-copy">{product.intro}</p>
            <div className="answer-block"><h3>What should buyers specify?</h3><p>{localizedSeo.answer}</p></div>
            {guide.map((paragraph) => <p className="lead-copy" key={paragraph}>{paragraph}</p>)}
            <h2 style={{ marginTop: 38 }}>Key Specification Points</h2>
            <table className="spec-table"><tbody>{product.specs.map((spec) => <tr key={spec.label}><th>{spec.label}</th><td>{spec.value}</td></tr>)}<tr><th>Country</th><td>{country.name} — {country.cities}</td></tr><tr><th>Procurement focus</th><td>{localizedSeo.procurementFocus}</td></tr><tr><th>RFQ details</th><td>Grade, size, thickness, finish, quantity, delivery city and drawings where available.</td></tr></tbody></table>
          </div>
          <aside>
            <div className="rfq-box"><p className="product-cat">Country Enquiry</p><h3>Request {product.name} RFQ</h3><p>{localizedSeo.rfqBoxCopy}</p><Link href="/contact" className="btn">Send RFQ</Link></div>
            <h3 style={{ marginTop: 32 }}>Common Applications</h3><div className="chips">{product.applications.map((app) => <span className="chip" key={app}>{app}</span>)}</div>
            <h3 style={{ marginTop: 32 }}>Useful RFQ Checks</h3><ul className="copy-list">{localizedSeo.rfqChecks.map((check) => <li key={check}>{check}</li>)}</ul>
            <h3 style={{ marginTop: 32 }}>Related Procurement Paths</h3>
            <ul className="copy-list">
              <li><Link href={`/countries/${country.slug}/categories/${categorySlug}`}>{product.category} in {country.name}</Link></li>
              {relatedApplications.slice(0, 2).map((application) => application && <li key={application.slug}><Link href={`/countries/${country.slug}/applications/${application.slug}`}>{application.title} in {country.name}</Link></li>)}
              <li><Link href={`/products/${product.slug}`}>{product.name} technical procurement guide</Link></li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Country RFQ Comparison</p>
            <h2>Compare {product.name} Quotes for {country.name} on One Basis</h2>
            <p className="section-text">Use the project specification first, then align quantity, documents, packing and delivery scope before comparing commercial offers.</p>
          </div>
          <table className="trust-table">
            <thead><tr><th>Parameter</th><th>Why it matters</th><th>RFQ basis</th></tr></thead>
            <tbody>{authority.comparisonRows.slice(0, 7).map(([parameter, why, rfq]) => <tr key={parameter}><td><strong>{parameter}</strong></td><td>{why}</td><td>{rfq}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="section soft"><div className="container"><h2 className="large-title">{localizedSeo.faqHeading}</h2><div className="faq-list">{faqs.map((faq) => <details key={faq.q} open><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></div></section>
      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="large-title">{localizedSeo.relatedHeading}</h2>
            <div className="grid four">
              {related.map((item) => (
                <ProductCard
                  key={item.slug}
                  product={item}
                  compact
                  href={`/countries/${country.slug}/products/${item.slug}`}
                  title={`${item.name} in ${country.name}`}
                  cta="View country product page →"
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
