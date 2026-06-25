import type { MetadataRoute } from 'next';
import { countryPages, productSeoPages, siteUrl } from '@/lib/seo';

const staticRoutes = [
  '',
  '/products',
  '/applications',
  '/countries',
  '/projects',
  '/blog',
  '/rfq',
  '/why-us',
  '/contact',
];

const applicationRoutes = [
  '/applications/residential-fencing',
  '/applications/commercial-industrial',
  '/applications/oil-gas-sector',
  '/applications/data-centers',
  '/applications/schools-public-parks',
  '/applications/farms-animal-enclosures',
  '/applications/boundary-security-fencing',
  '/applications/warehouses-logistic-centers',
  '/applications/country-border-fencing',
];

const blogRoutes = [
  '/blog/how-to-choose-the-right-fence',
  '/blog/ppgi-vs-pvc-fencing-which-is-better',
  '/blog/fence-height-rules-in-uae',
  '/blog/best-fencing-for-data-centers',
  '/blog/difference-between-358-and-welded-mesh',
  '/blog/chain-link-vs-welded-mesh-fence',
  '/blog/pvc-coated-vs-galvanized-chain-link-fence',
  '/blog/best-fencing-for-construction-sites-in-dubai',
  '/blog/warehouse-security-fencing-guide',
  '/blog/barbed-wire-vs-razor-wire',
  '/blog/how-to-prepare-a-fencing-rfq',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const productRoutes = productSeoPages.map((product) => `/products/${product.slug}`);
  const countryRoutes = countryPages.map((country) => `/countries/${country.slug}`);

  return [...staticRoutes, ...productRoutes, ...applicationRoutes, ...countryRoutes, ...blogRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1 : route.startsWith('/products') || route.startsWith('/countries') ? 0.85 : 0.7,
  }));
}
