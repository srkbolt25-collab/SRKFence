import Link from 'next/link';
import { Fragment, ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPost } from '@/lib/blogs';
import { faqJsonLd } from '@/lib/seoCopy';
import { blogPostingJsonLd, breadcrumbJsonLd, buildMetadata, jsonLdMarkup } from '@/lib/seo';

export const dynamicParams = false;
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) return buildMetadata({ title: 'Steel Guide', description: 'SRK Steel product guide.', path: `/blogs/${params.slug}`, type: 'article' });
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blogs/${post.slug}`,
    image: post.image,
    type: 'article',
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
  });
}

function renderLinkedText(text: string): ReactNode[] {
  const pattern = /\[\[([^|]+)\|([^\]]+)\]\]/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    nodes.push(<Link key={`${match.index}-${match[2]}`} href={match[2]}>{match[1]}</Link>);
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes.map((node, index) => <Fragment key={index}>{node}</Fragment>);
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdMarkup(blogPostingJsonLd(post))} />
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdMarkup(faqJsonLd(post.faqs))} />
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdMarkup(breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Steel Product Guides', path: '/blogs' },
      { name: post.title, path: `/blogs/${post.slug}` },
    ]))} />

    <section className="page-hero"><div className="container"><p className="eyebrow">{post.category}</p><h1>{post.title}</h1><p className="section-text">{post.excerpt}</p><div className="blog-meta"><span>{post.reviewer}</span><span>{post.updated}</span><span>{post.readTime}</span></div></div></section>

    <section className="section"><div className="container detail"><article className="blog-article">
      <section className="answer-block"><h2>Quick answer</h2><p>{post.quickAnswer}</p></section>

      {post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.body.map((paragraph, index) => <p className="lead-copy" key={`${section.heading}-${index}`}>{renderLinkedText(paragraph)}</p>)}</section>)}

      <section><h2>Frequently Asked Questions</h2><div className="faq-list">{post.faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></section>

      <section className="content-panel"><p className="eyebrow">Next Step</p><h2>Prepare the RFQ around the real project requirement</h2><p className="lead-copy">{renderLinkedText(post.nextStep)}</p></section>

      <div className="internal-links"><Link href="/products">View Steel Products</Link><Link href="/categories">Browse Product Categories</Link><Link href="/contact">Request RFQ</Link></div>
    </article><aside><div className="content-panel"><h3>Practical RFQ Checklist</h3><ul className="copy-list">{post.checklist.map((item) => <li key={item}>{item}</li>)}</ul><Link href="/contact" className="btn">Send RFQ</Link></div></aside></div></section>
  </>;
}
