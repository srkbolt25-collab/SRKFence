'use client';

import dynamicImport from 'next/dynamic';
import AdminLayout from '@/components/admin/AdminLayout';

const BlogPage = dynamicImport(() => import('@/components/pages/admin/BlogPage'), {
  ssr: false,
});

export default function Blog() {
  return (
    <AdminLayout>
      <BlogPage />
    </AdminLayout>
  );
}

