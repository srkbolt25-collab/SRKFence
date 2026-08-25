import type { Metadata } from 'next';
import ProductPdfLandingPage from '@/components/pages/ProductPdfLandingPage';
import { buildSeoMetadata, getProductKeywordSet, getProductSeoBySlug } from '@/lib/seo';

const product = getProductSeoBySlug('coating-materials');

export const metadata: Metadata = product
  ? buildSeoMetadata({
      title: product.metaTitle,
      description: product.metaDescription,
      path: `/products/${product.slug}`,
      keywords: getProductKeywordSet(product),
      image: product.image,
      intent: `${product.name} product page for supplier searches, RFQs, specifications and UAE/GCC project buyers.`,
    })
  : {
      title: 'Coating Materials',
      description: 'Protective coating materials for fencing products and steel components.',
    };

export default function CoatingMaterialsPage() {
  if (!product) return null;

  return <ProductPdfLandingPage product={product} />;
}
