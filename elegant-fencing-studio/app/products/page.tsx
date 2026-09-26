import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import ProductsPage from '@/components/pages/ProductsPage';
import {
  buildItemListSchema,
  buildSeoMetadata,
  buildWebPageSchema,
  productSeoPages,
  staticSeoProfiles,
} from '@/lib/seo';

export const metadata: Metadata = buildSeoMetadata(staticSeoProfiles.products);

export default function Products() {
  return (
    <>
      <StructuredData
        data={[
          buildWebPageSchema(
            staticSeoProfiles.products.title,
            staticSeoProfiles.products.description,
            '/products',
            staticSeoProfiles.products.keywords,
          ),
          buildItemListSchema(
            'SRK Fence priority product and service pages',
            productSeoPages.map((product) => ({ label: product.name, href: `/products/${product.slug}` })),
          ),
        ]}
      />
      <ProductsPage />
    </>
  );
}
