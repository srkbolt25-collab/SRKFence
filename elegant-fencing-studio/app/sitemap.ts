import type { MetadataRoute } from 'next';
import { applications, categoryInfo, countries, products } from '@/lib/data';
import { blogPosts } from '@/lib/blogs';

const base = 'https://srksteel.com';
const LAST_CONTENT_UPDATE = '2026-08-27';

function routePriority(path: string) {
  if (path === '/') return 1;
  if (path === '/products' || path === '/categories') return 0.92;
  if (path.startsWith('/products/') || path.startsWith('/categories/')) return 0.9;
  if (path.startsWith('/applications/')) return 0.86;
  if (path.startsWith('/countries/')) return 0.84;
  if (path.startsWith('/blogs/')) return 0.78;
  return 0.75;
}

function changeFrequency(path: string): MetadataRoute.Sitemap[number]['changeFrequency'] {
  if (path === '/') return 'weekly';
  if (path === '/products' || path === '/categories' || path === '/blogs') return 'weekly';
  return 'monthly';
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/', '/products', '/categories', '/applications', '/countries', '/services', '/blogs', '/about', '/contact',
    ...blogPosts.map((post) => `/blogs/${post.slug}`),
    ...products.map((product) => `/products/${product.slug}`),
    ...categoryInfo.map((category) => `/categories/${category.slug}`),
    ...applications.map((application) => `/applications/${application.slug}`),
    ...countries.map((country) => `/countries/${country.slug}`),
    ...countries.flatMap((country) => products.map((product) => `/countries/${country.slug}/products/${product.slug}`)),
    ...countries.flatMap((country) => categoryInfo.map((category) => `/countries/${country.slug}/categories/${category.slug}`)),
    ...countries.flatMap((country) => applications.map((application) => `/countries/${country.slug}/applications/${application.slug}`)),
  ];

  return routes.map((path) => {
    const blog = blogPosts.find((post) => path === `/blogs/${post.slug}`);
    return {
    url: `${base}${path}`,
    // Blog URLs use their real editorial update date; other URLs keep the prior content release date.
    lastModified: blog?.dateModified || (path === '/blogs' ? '2026-08-28' : LAST_CONTENT_UPDATE),
    changeFrequency: changeFrequency(path),
    priority: routePriority(path),
  };
  });
}
