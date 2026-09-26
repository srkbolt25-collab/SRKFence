import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import SectionHead from '@/components/SectionHead';
import heroStyles from '@/components/CategoryHero.module.css';
import { categoryInfo, products } from '@/lib/data';
import { categoryFaqs, categoryGuide, faqJsonLd } from '@/lib/seoCopy';
import { breadcrumbJsonLd, buildMetadata, jsonLdMarkup } from '@/lib/seo';
import { getCategoryKeywordProfile } from '@/lib/keywordSeo';

export const dynamicParams = false;
export function generateStaticParams() {
  return categoryInfo.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = categoryInfo.find((item) => item.slug === params.slug);
  if (!category) return buildMetadata({ title: 'Steel Category', description: 'SRK Steel category page.', path: `/categories/${params.slug}` });
  const seoProfile = getCategoryKeywordProfile(category);
  return buildMetadata({
    title: seoProfile.title,
    description: seoProfile.description,
    path: `/categories/${category.slug}`,
    image: category.heroImage ?? category.image,
    keywords: [seoProfile.primary, ...seoProfile.secondary],
  });
}

export default function CategoryDetailPage({ params }: { params: { slug: string } }) {
  const category = categoryInfo.find((item) => item.slug === params.slug);
  if (!category) notFound();
  const categoryProducts = products.filter((product) => product.category === category.name);
  const categoryDisplayNames: Record<string, string> = {
    'mild-steel-products': 'Mild Steel (MS) Products',
    'stainless-steel': 'Stainless Steel (SS) Products',
    'galvanized-steel': 'Galvanized Steel (GI) Products',
    'aluminium': 'Aluminium Products',
  };
  const displayName = categoryDisplayNames[category.slug] ?? category.name;
  const guide = categoryGuide(category);
  const faqs = categoryFaqs(category);
  const seoProfile = getCategoryKeywordProfile(category);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdMarkup(breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Categories', path: '/categories' },
        { name: displayName, path: `/categories/${category.slug}` },
      ]))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdMarkup(faqJsonLd(faqs))} />

      <section className={heroStyles.hero}>
        <div className={heroStyles.grid}>
          <div className={heroStyles.copy}>
            <p className="eyebrow">Product Category</p>
            <h1>{displayName}</h1>
            <p>{category.description}</p>
            <p>{seoProfile.content}</p>
            <p>{guide.answer}</p>
            <div className={heroStyles.actions}>
              <Link href="/contact" className="btn">Request RFQ</Link>
              <Link href="/categories" className="btn ghost">All Categories</Link>
            </div>
          </div>
          <div className={heroStyles.media}>
            <Image
              src={category.heroImage ?? category.image}
              alt={`${displayName} for GCC and selected Middle East projects`}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Category Products" title={`Products in ${displayName}`} text="Open each product page for specifications, applications and RFQ review." />
          <div className="grid products">{categoryProducts.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
        </div>
      </section>

      <section className="section soft"><div className="container seo-two-col"><div><p className="eyebrow">Category Buying Guide</p><h2 className="large-title">Specification Guide for {displayName}</h2>{guide.paragraphs.map((paragraph) => <p className="lead-copy" key={paragraph}>{paragraph}</p>)}</div><div className="content-panel"><h3>RFQ Details to Include</h3><ul className="copy-list">{guide.buyingPoints.map((item) => <li key={item}>{item}</li>)}</ul><Link href="/contact" className="btn">Send Category RFQ</Link></div></div></section>

      <section className="section"><div className="container"><SectionHead eyebrow="Common Buyer Questions" title={`${displayName} FAQs`} text="Clear answers help buyers understand product options, specifications and enquiry details before contacting SRK Steel." /><div className="faq-list">{faqs.map((faq) => <details key={faq.q} open><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></div></section>
    </>
  );
}
