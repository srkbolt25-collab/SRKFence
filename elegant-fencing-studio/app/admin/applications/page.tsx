'use client';

import dynamicImport from 'next/dynamic';
import AdminLayout from '@/components/admin/AdminLayout';

const ApplicationsPage = dynamicImport(() => import('@/components/pages/admin/ApplicationsPage'), {
  ssr: false,
});

export default function Applications() {
  return (
    <AdminLayout>
      <ApplicationsPage />
    </AdminLayout>
  );
}

