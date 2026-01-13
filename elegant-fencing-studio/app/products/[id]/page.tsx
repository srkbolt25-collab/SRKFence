'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import dynamicImport from 'next/dynamic';
import { apiClient } from '@/lib/api';

const ProductsPage = dynamicImport(() => import('@/components/pages/ProductsPage'), {
  ssr: false,
});

const ProductDetailsPage = dynamicImport(() => import('@/components/pages/ProductDetailsPage'), {
  ssr: false,
});

export default function ProductIdPage({ params }: { params: { id: string } }) {
  const [isCategory, setIsCategory] = useState<boolean | null>(null);
  const [realCategoryName, setRealCategoryName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  // Use params.id instead of params.slug
  const decodedSlug = decodeURIComponent(params.id);

  useEffect(() => {
    const checkSlugType = async () => {
      setLoading(true);
      try {
        // Fetch categories to see if the slug matches a category name
        const response = await apiClient.getCategories();
        const categories = response.categories || [];

        // 1. Try exact match (case insensitive)
        let matchedCategory = categories.find(
          (c) => c.name.toLowerCase() === decodedSlug.toLowerCase()
        );

        // 2. Try de-slugified match (Chain-Link-Fence -> Chain Link Fence)
        if (!matchedCategory) {
          const normalizedSlug = decodedSlug.replace(/-/g, ' ');
          matchedCategory = categories.find(
            (c) => c.name.toLowerCase() === normalizedSlug.toLowerCase()
          );
        }

        // 3. Try to match by "slugified" category name
        if (!matchedCategory) {
          matchedCategory = categories.find(
            (c) => c.name.toLowerCase().replace(/\s+/g, '-') === decodedSlug.toLowerCase()
          );
        }

        if (matchedCategory) {
          setIsCategory(true);
          setRealCategoryName(matchedCategory.name);
        } else {
          setIsCategory(false);
          setRealCategoryName(null);
        }
      } catch (error) {
        console.error('Error checking slug type:', error);
        setIsCategory(false);
      } finally {
        setLoading(false);
      }
    };

    checkSlugType();
  }, [decodedSlug]);

  if (loading) {
    return <div className="min-h-screen bg-background" />;
  }

  if (isCategory && realCategoryName) {
    return <ProductsPage initialCategory={realCategoryName} />;
  }

  // If it's NOT a category, check if it's a valid MongoDB ObjectId.
  const isObjectId = /^[0-9a-fA-F]{24}$/.test(params.id);

  // If it's a valid ObjectId, render Product Details.
  // Otherwise, assume it's neither and fallback to ProductsPage.
  if (isObjectId) {
    return <ProductDetailsPage productId={params.id} />;
  }

  // Fallback
  return <ProductsPage />;
}
