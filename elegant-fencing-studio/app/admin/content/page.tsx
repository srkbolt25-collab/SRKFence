'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import AdminLayout from '@/components/admin/AdminLayout';
import ContentPage from '@/pages/admin/ContentPage';

export default function AdminContent() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <ContentPage />
      </AdminLayout>
    </ProtectedRoute>
  );
}

