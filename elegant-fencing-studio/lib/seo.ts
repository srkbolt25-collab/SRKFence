import type { Metadata } from 'next';
import type { BlogPost } from './blogs';
import type { Product } from './data';

export const SITE_URL = 'https://srksteel.com';
export const SITE_NAME = 'SRK Steel';

export function absoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${path}`;
}

function brandedTitle(title: string) {
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
}

export function buildMetadata({
  title,
  description,
  path,
  image = '/banners/products-banner.webp',
  type = 'website',
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string[];
}): Metadata {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const socialTitle = brandedTitle(title);

  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [{ url: imageUrl, alt: socialTitle }],
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [imageUrl],
    },
    robots: { index: true, follow: true },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function productJsonLd(product: Product, image?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${absoluteUrl(`/products/${product.slug}`)}#product`,
    name: product.name,
    description: product.intro || product.short,
    category: product.category,
    image: [absoluteUrl(image || product.image)],
    url: absoluteUrl(`/products/${product.slug}`),
    additionalProperty: product.specs.map((spec) => ({
      '@type': 'PropertyValue',
      name: spec.label,
      value: spec.value,
    })),
  };
}

export function blogPostingJsonLd(post: BlogPost) {
  const url = absoluteUrl(`/blogs/${post.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    articleSection: post.category,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    image: absoluteUrl(post.image || '/banners/products-banner.webp'),
    author: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME },
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME },
    dateModified: post.dateModified,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(', '),
    inLanguage: 'en',
  };
}

export function jsonLdMarkup(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, '\\u003c') };
}
