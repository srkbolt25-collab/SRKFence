import Link from 'next/link';
import { blogPosts } from '@/lib/blogs';
import { categoryInfo } from '@/lib/data';
import SectionHead from '@/components/SectionHead';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Steel Buying Guides UAE | GI, Purlins & MEP',
  description: 'Practical steel buying guides for UAE and GCC projects covering GI decking sheets, C/Z purlins, strut channels, stainless steel, drywall framing and RFQs.',
  path: '/blogs',
  image: '/banners/products-banner.webp',
  keywords: ['steel buying guides UAE', 'GI decking sheet guide', 'C purlin vs Z purlin', 'strut channel guide', 'stainless steel buying guide', 'steel RFQ checklist'],
});

export default function BlogsPage() {
  return <><section className="page-hero"><div className="container"><p className="eyebrow">Knowledge Center</p><h1>Steel Buying Guides for UAE & GCC Projects</h1><p className="section-text">Practical procurement and specification guidance for contractors, fabricators, MEP teams, fitout companies and project buyers.</p></div></section>
  <section className="section soft"><div className="container seo-two-col"><div><p className="eyebrow">Buyer-Focused Guidance</p><h2 className="large-title">From Product Name to Purchase-Ready RFQ</h2><p className="lead-copy">Each guide is built around the questions that slow down real steel enquiries: which product form is required, which dimensions and finishes must be stated, what drawings or certificates matter, and which technical decisions need consultant or engineer approval.</p><p className="lead-copy">The articles connect product selection, project applications and RFQ preparation across mild steel, stainless steel, galvanized steel and aluminium. They are written for UAE-based procurement with GCC and selected Middle East project context, without replacing project-specific engineering or consultant requirements.</p></div><aside className="content-panel"><h3>Product Families Covered</h3><ul className="copy-list">{categoryInfo.map((category) => <li key={category.slug}><Link href={`/categories/${category.slug}`}>{category.name}</Link></li>)}</ul><Link className="btn" href="/products">View Catalogue</Link></aside></div></section>
  <section className="section"><div className="container"><SectionHead eyebrow="Guides" title="Latest Steel Procurement & Product Guides" text="Use the direct answers, technical checks, FAQs and RFQ checklists before sending a project enquiry." /><div className="grid three">{blogPosts.map((post) => <article className="application-card blog-card" key={post.slug}><div><p>{post.category}</p><h3>{post.title}</h3><span>{post.excerpt}</span><small>{post.readTime}</small><Link href={`/blogs/${post.slug}`}><b>Read Guide →</b></Link></div></article>)}</div></div></section></>;
}
