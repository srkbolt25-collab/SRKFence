import { productSeoPages } from '@/lib/seo';
import { getPdfProductContent } from '@/lib/pdfProductContent';

const aliasToCanonical: Record<string, string> = {
  'gate-hinges': 'gate-hinges-and-locks',
  'post-and-rail-system': 'post-and-railing-system',
  'gabion-wall': 'gabion-wall-and-fencing',
  'color-and-coating-options': 'colors-and-coating-options',
  'anti-climb-358-security-fence': 'anti-climb-358-fence',
  fasteners: 'fasteners-bolts',
  bolts: 'fasteners-bolts',
};

export const normalizeRFQProductSlug = (value: string) => {
  const slug = String(value || '')
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return aliasToCanonical[slug] || slug;
};

export const getRFQFallbackProduct = (id: string) => {
  const canonicalSlug = normalizeRFQProductSlug(id);
  const pdfContent = getPdfProductContent(canonicalSlug);
  const seoProduct = productSeoPages.find((product) => normalizeRFQProductSlug(product.slug) === canonicalSlug);

  if (!pdfContent && !seoProduct) return null;

  return {
    id: canonicalSlug,
    title: pdfContent?.title || seoProduct?.name || canonicalSlug,
    image: pdfContent?.imageSlides?.[0]?.src || seoProduct?.image || null,
    category: pdfContent?.category || seoProduct?.category || 'Fencing Product',
  };
};
