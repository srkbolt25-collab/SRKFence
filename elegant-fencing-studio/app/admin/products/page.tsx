'use client';

export const dynamic = 'force-dynamic';

import ProtectedRoute from '@/components/ProtectedRoute';
import AdminLayout from '@/components/admin/AdminLayout';
import ProductsPage from '@/pages/admin/ProductsPage';

export default function AdminProducts() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <ProductsPage />
      </AdminLayout>
    </ProtectedRoute>
  );
}

