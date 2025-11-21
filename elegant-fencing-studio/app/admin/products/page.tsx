'use client';

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

