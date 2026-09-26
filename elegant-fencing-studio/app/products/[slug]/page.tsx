import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import ProductGallerySlider from '@/components/ProductGallerySlider';
import ProductTechnicalContent from '@/components/ProductTechnicalContent';
import { applications, products, slugifyCategory } from '@/lib/data';
import { countryNames, faqJsonLd, mainProductFaqs, productAuthorityFaqs, productAuthorityProfile, productBuyerGuide, productSelectionChecks, productUseAnswer } from '@/lib/seoCopy';
import { getPrimaryProductImage, getProductGallery } from '@/lib/productThumbnailOverrides';
import { breadcrumbJsonLd, buildMetadata, jsonLdMarkup, productJsonLd } from '@/lib/seo';
import { getProductKeywordProfile } from '@/lib/keywordSeo';


export const dynamicParams = false;
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return buildMetadata({ title: 'Steel Product', description: 'SRK Steel product page.', path: `/products/${params.slug}` });
  const image = getPrimaryProductImage(product);
  const seoProfile = getProductKeywordProfile(product);
  return buildMetadata({
    title: seoProfile.title,
    description: seoProfile.description,
    path: `/products/${product.slug}`,
    image,
    keywords: [seoProfile.primary, ...seoProfile.secondary],
  });
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();
  const related = products.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 3);
  const faqs = [...mainProductFaqs(product), ...productAuthorityFaqs(product)];
  const guide = productBuyerGuide(product);
  const seoProfile = getProductKeywordProfile(product);
  const selectionChecks = productSelectionChecks(product);
  const galleryImages = getProductGallery(product);
  const authority = productAuthorityProfile(product);
  const categorySlug = slugifyCategory(product.category);
  const relatedApplications = product.applications.map((title) => applications.find((application) => application.title === title)).filter(Boolean);

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdMarkup(productJsonLd(product, galleryImages[0]))} />
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdMarkup(breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/products' },
      { name: product.name, path: `/products/${product.slug}` },
    ]))} />
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdMarkup(faqJsonLd(faqs))} />

    <section className="product-detail-hero">
      <div className="container detail-hero-grid">
        <div>
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p>{product.short}</p>
          <p>{seoProfile.content}</p>
          <p>SRK Steel supports steel sourcing and project procurement enquiries across the UAE, GCC and selected Middle East markets. Share drawings, size, grade, finish or coating, quantity and delivery location so the requirement can be reviewed against suitable supply options.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn">Request RFQ</Link>
            <Link href="/products" className="btn ghost">Back to Catalogue</Link>
          </div>
        </div>
        <ProductGallerySlider productName={product.name} images={galleryImages} />
      </div>
    </section>

    <main className="section"><div className="container detail">
      <div>
        <h2>Product Overview</h2><p className="lead-copy">{product.intro}</p>
        <div className="answer-block"><h3>What is {product.name} used for?</h3><p>{productUseAnswer(product)}</p></div>
        <h2 style={{marginTop:38}}>Specifications</h2><table className="spec-table"><tbody>{product.specs.map(s => <tr key={s.label}><th>{s.label}</th><td>{s.value}</td></tr>)}<tr><th>Markets served</th><td>{countryNames()}</td></tr><tr><th>RFQ method</th><td>Send an RFQ with specification, quantity, drawing or BOQ reference and delivery location.</td></tr></tbody></table>
      </div>
      <aside>
        <div className="rfq-box"><p className="product-cat">RFQ Guidance</p><h3>Request RFQ</h3><p>Send grade, size, thickness, finish, quantity, drawings and delivery location so the requirement can be reviewed properly.</p><Link href="/contact" className="btn">Send RFQ</Link></div>
        <h3 style={{marginTop:32}}>Applications</h3><div className="chips">{product.applications.map(a => <span className="chip" key={a}>{a}</span>)}</div>
        <h3 style={{marginTop:32}}>Key Features</h3><div className="chips">{product.features.map(a => <span className="chip" key={a}>{a}</span>)}</div>
      </aside>
    </div></main>

    <ProductTechnicalContent slug={product.slug} productName={product.name} />

    <section className="section soft">
      <div className="container seo-two-col">
        <div>
          <p className="eyebrow">{authority.eyebrow}</p>
          <h2 className="large-title">{authority.heading}</h2>
          <div className="answer-block">
            <h3>What should a purchase-ready {product.name} enquiry include?</h3>
            <p>{authority.answer}</p>
          </div>
          {authority.paragraphs.map((paragraph) => <p className="lead-copy" key={paragraph}>{paragraph}</p>)}
        </div>
        <aside className="content-panel">
          <h3>{product.name} RFQ Checklist</h3>
          <ul className="copy-list">{authority.rfqChecks.map((check) => <li key={check}>{check}</li>)}</ul>
          <Link href="/contact" className="btn">Send {product.name} RFQ</Link>
        </aside>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Quotation Comparison</p>
          <h2>Compare {product.name} on the Same Technical Basis</h2>
          <p className="section-text">A useful price comparison starts only after material, dimensions, finish or coating, processing scope, documents, quantity and delivery basis are aligned.</p>
        </div>
        <table className="trust-table">
          <thead><tr><th>Parameter</th><th>Why it matters</th><th>What to state in the RFQ</th></tr></thead>
          <tbody>{authority.comparisonRows.map(([parameter, why, rfq]) => <tr key={parameter}><td><strong>{parameter}</strong></td><td>{why}</td><td>{rfq}</td></tr>)}</tbody>
        </table>
      </div>
    </section>

    <section className="section soft">
      <div className="container seo-two-col">
        <div>
          <p className="eyebrow">Standards & Documentation</p>
          <h2 className="large-title">Use the Project Specification as the Purchase Basis</h2>
          <p className="lead-copy">{authority.standardsNote}</p>
          <p className="lead-copy">For UAE and regional procurement, state certificate needs, approved-equivalent rules, packing, processing and delivery requirements before pricing when those items affect project acceptance or site handling.</p>
        </div>
        <aside className="content-panel">
          <h3>Useful Internal Resources</h3>
          <div className="internal-links">
            {related.slice(0, 3).map((item) => <Link key={item.slug} href={`/products/${item.slug}`}>{item.name}</Link>)}
            {relatedApplications.slice(0, 2).map((application) => application && <Link key={application.slug} href={`/applications/${application.slug}`}>{application.title}</Link>)}
            <Link href={`/categories/${categorySlug}`}>{product.category} Range</Link>
            <Link href="/countries/uae">Steel Supply in UAE</Link>
          </div>
        </aside>
      </div>
    </section>

    <section className="section soft"><div className="container seo-two-col"><div><p className="eyebrow">Buyer Guide</p><h2 className="large-title">Specification Guide for {product.name}</h2>{guide.map((paragraph) => <p className="lead-copy" key={paragraph}>{paragraph}</p>)}</div><div className="content-panel"><h3>Best-fit project checks</h3><ul className="copy-list">{selectionChecks.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>

    <section className="section"><div className="container"><div className="section-head"><p className="eyebrow">Buyer Guidance</p><h2>Common Buyer Questions</h2><p className="section-text">Practical answers for procurement teams comparing specifications, applications and enquiry requirements.</p></div><div className="faq-list">{faqs.map((faq) => <details key={faq.q} open><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></div></section>

    {related.length > 0 && <section className="section soft"><div className="container"><SectionTitle title="Related Products" /><div className="grid three">{related.map(p => <ProductCard key={p.slug} product={p} compact />)}</div></div></section>}
  </>;
}

function SectionTitle({ title }: { title: string }) { return <div className="section-head"><p className="eyebrow">You May Also Need</p><h2>{title}</h2></div>; }
