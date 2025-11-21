'use client';

export const dynamic = 'force-dynamic';

import ProtectedRoute from '@/components/ProtectedRoute';
import AdminLayout from '@/components/admin/AdminLayout';
import DashboardPage from '@/pages/admin/DashboardPage';

export default function AdminDashboard() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <DashboardPage />
      </AdminLayout>
    </ProtectedRoute>
  );
}

