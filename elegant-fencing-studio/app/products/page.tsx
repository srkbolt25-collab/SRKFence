'use client';

export const dynamic = 'force-dynamic';

import dynamic from 'next/dynamic';

const ProductsPage = dynamic(() => import('@/pages/ProductsPage'), {
  ssr: false,
});

export default function Products() {
  return <ProductsPage />;
}

