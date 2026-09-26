import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import SectionHead from '@/components/SectionHead';
import heroStyles from '@/components/CategoryHero.module.css';
import { categoryInfo, countries, products } from '@/lib/data';
import { categoryFaqs, categoryGuide, faqJsonLd } from '@/lib/seoCopy';
import { breadcrumbJsonLd, buildMetadata, jsonLdMarkup } from '@/lib/seo';

const categoryDisplayNames: Record<string, string> = {
  'mild-steel-products': 'Mild Steel (MS) Products',
  'stainless-steel': 'Stainless Steel (SS) Products',
  'galvanized-steel': 'Galvanized Steel (GI) Products',
  'aluminium': 'Aluminium Products',
};

export const dynamicParams = false;
export function generateStaticParams() {
  return countries.flatMap((country) => categoryInfo.map((category) => ({ slug: country.slug, category: category.slug })));
}

export function generateMetadata({ params }: { params: { slug: string; category: string } }) {
  const country = countries.find((item) => item.slug === params.slug);
  const category = categoryInfo.find((item) => item.slug === params.category);
  if (!country || !category) return buildMetadata({ title: 'Steel Category', description: 'SRK Steel country category page.', path: `/countries/${params.slug}/categories/${params.category}` });
  const displayName = categoryDisplayNames[category.slug] ?? category.name;
  return buildMetadata({
    title: `${displayName} Supplier in ${country.name}`,
    description: `${displayName} for ${country.name} projects. Review the category range, applications, RFQ details and product options from SRK Steel.`,
    path: `/countries/${country.slug}/categories/${category.slug}`,
    image: category.heroImage ?? category.image,
  });
}

export default function CountryCategoryPage({ params }: { params: { slug: string; category: string } }) {
  const country = countries.find((item) => item.slug === params.slug);
  const category = categoryInfo.find((item) => item.slug === params.category);
  if (!country || !category) notFound();

  const displayName = categoryDisplayNames[category.slug] ?? category.name;
  const categoryProducts = products.filter((product) => product.category === category.name);
  const guide = categoryGuide(category);
  const faqs = categoryFaqs(category).map((faq) => ({
    ...faq,
    q: `${faq.q} in ${country.name}`,
    a: `${faq.a} For ${country.name} enquiries, include the delivery city and project-specific specification details in the RFQ.`,
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdMarkup(breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Countries', path: '/countries' },
        { name: country.name, path: `/countries/${country.slug}` },
        { name: displayName, path: `/countries/${country.slug}/categories/${category.slug}` },
      ]))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdMarkup(faqJsonLd(faqs))} />

      <section className={heroStyles.hero}>
        <div className={heroStyles.grid}>
          <div className={heroStyles.copy}>
            <p className="eyebrow">{country.name} Product Category</p>
            <h1>{displayName} Supplier in {country.name}</h1>
            <p>{category.description}</p>
            <p>SRK Steel supports {country.name} enquiries for {displayName.toLowerCase()} across construction, fabrication, roofing, fitout, MEP and industrial project requirements.</p>
            <p>{guide.answer}</p>
            <div className={heroStyles.actions}>
              <Link href="/contact" className="btn">Request {country.name} RFQ</Link>
              <Link href={`/categories/${category.slug}`} className="btn ghost">View Main Category</Link>
            </div>
          </div>
          <div className={heroStyles.media}>
            <Image
              src={category.heroImage ?? category.image}
              alt={`${displayName} supplier in ${country.name}`}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={`${country.name} Category Products`} title={`${displayName} in ${country.name}`} text="Open a country-specific product page for specifications, applications, gallery images and RFQ review." />
          <div className="grid products">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                href={`/countries/${country.slug}/products/${product.slug}`}
                title={`${product.name} in ${country.name}`}
                cta="View country product page →"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section soft"><div className="container seo-two-col"><div><p className="eyebrow">Country Category Buying Guide</p><h2 className="large-title">Specification Guide for {displayName} in {country.name}</h2>{guide.paragraphs.map((paragraph) => <p className="lead-copy" key={paragraph}>{paragraph}</p>)}</div><div className="content-panel"><h3>RFQ Details to Include</h3><ul className="copy-list">{guide.buyingPoints.map((item) => <li key={item}>{item}</li>)}<li>Delivery city in {country.name} and required project timeline.</li></ul><Link href="/contact" className="btn">Send {country.name} Category RFQ</Link></div></div></section>

      <section className="section"><div className="container"><SectionHead eyebrow="Common Buyer Questions" title={`${displayName} FAQs for ${country.name}`} text="Country-specific guidance for product options, specifications and RFQ details." /><div className="faq-list">{faqs.map((faq) => <details key={faq.q} open><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></div></section>
    </>
  );
}
