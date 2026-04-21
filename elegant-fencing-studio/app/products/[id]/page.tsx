'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import dynamicImport from 'next/dynamic';
import { apiClient } from '@/lib/api';
import { getProductSlug, slugifyProductName } from '@/lib/productSlug';

const ProductsPage = dynamicImport(() => import('@/components/pages/ProductsPage'), {
  ssr: false,
});

const ProductDetailsPage = dynamicImport(() => import('@/components/pages/ProductDetailsPage'), {
  ssr: false,
});

export default function ProductIdPage({ params }: { params: { id: string } }) {
  const [isCategory, setIsCategory] = useState<boolean | null>(null);
  const [realCategoryName, setRealCategoryName] = useState<string | null>(null);
  const [resolvedProductId, setResolvedProductId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const decodedSlug = decodeURIComponent(params.id);
  const normalizedSlug = slugifyProductName(decodedSlug);

  useEffect(() => {
    const checkSlugType = async () => {
      setLoading(true);
      try {
        const [categoriesResponse, productsResponse] = await Promise.all([
          apiClient.getCategories(),
          apiClient.getProducts(),
        ]);

        const categories = categoriesResponse.categories || [];
        const products = productsResponse.products || [];

        let matchedCategory = categories.find(
          (c) => c.name.toLowerCase() === decodedSlug.toLowerCase()
        );

        if (!matchedCategory) {
          const normalizedSlug = decodedSlug.replace(/-/g, ' ');
          matchedCategory = categories.find(
            (c) => c.name.toLowerCase() === normalizedSlug.toLowerCase()
          );
        }

        if (!matchedCategory) {
          matchedCategory = categories.find(
            (c) => c.name.toLowerCase().replace(/\s+/g, '-') === decodedSlug.toLowerCase()
          );
        }

        if (matchedCategory) {
          setIsCategory(true);
          setRealCategoryName(matchedCategory.name);
          setResolvedProductId(null);
        } else {
          setIsCategory(false);
          setRealCategoryName(null);

          const matchedProduct = products.find((product: any) => {
            const productSlug = getProductSlug(product);
            return (
              product.id === decodedSlug ||
              productSlug === decodedSlug.toLowerCase() ||
              productSlug === normalizedSlug
            );
          });

          if (matchedProduct?.id) {
            setResolvedProductId(matchedProduct.id);
          } else if (/^[0-9a-fA-F]{24}$/.test(params.id)) {
            setResolvedProductId(params.id);
          } else {
            setResolvedProductId(null);
          }
        }
      } catch (error) {
        console.error('Error checking slug type:', error);
        setIsCategory(false);
        setResolvedProductId(/^[0-9a-fA-F]{24}$/.test(params.id) ? params.id : null);
      } finally {
        setLoading(false);
      }
    };

    checkSlugType();
  }, [decodedSlug, normalizedSlug, params.id]);

  if (loading) {
    return <div className="min-h-screen bg-background" />;
  }

  if (isCategory && realCategoryName) {
    return <ProductsPage initialCategory={realCategoryName} />;
  }

  if (resolvedProductId) {
    return <ProductDetailsPage productId={resolvedProductId} />;
  }

  return <ProductsPage />;
}
