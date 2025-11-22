'use client';

export const dynamic = 'force-dynamic';

import dynamicImport from 'next/dynamic';

const ProductsPage = dynamicImport(() => import('@/pages/ProductsPage'), {
  ssr: false,
});

export default function Products() {
  return <ProductsPage />;
}

