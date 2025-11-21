'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import AdminLayout from '@/components/admin/AdminLayout';
import UsersPage from '@/pages/admin/UsersPage';

export default function AdminUsers() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <UsersPage />
      </AdminLayout>
    </ProtectedRoute>
  );
}

