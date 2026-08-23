import type { Metadata } from 'next';
import ProductRouteClientPage from '@/components/pages/ProductRouteClientPage';
import ProductSeoLandingPage from '@/components/pages/ProductSeoLandingPage';
import { buildSeoMetadata, getProductKeywordSet, getProductSeoBySlug, productSeoPages } from '@/lib/seo';

export function generateStaticParams() {
  return productSeoPages.map((product) => ({ id: product.slug }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = getProductSeoBySlug(params.id);

  if (!product) {
    return {
      title: 'Products',
      description: 'Explore SRK Fence products and request a project quotation.',
    };
  }

  return buildSeoMetadata({
    title: product.metaTitle,
    description: product.metaDescription,
    path: `/products/${product.slug}`,
    keywords: getProductKeywordSet(product),
    image: product.image,
    intent: `${product.name} product/service page for supplier searches, RFQs, specifications and UAE/GCC project buyers.`,
  });
}

export default function ProductIdPage({ params }: { params: { id: string } }) {
  const product = getProductSeoBySlug(params.id);

  if (product) {
    return <ProductSeoLandingPage product={product} />;
  }

  return <ProductRouteClientPage params={params} />;
}
