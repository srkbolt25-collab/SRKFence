'use client';

export const dynamic = 'force-dynamic';

import ProtectedRoute from '@/components/ProtectedRoute';
import AdminLayout from '@/components/admin/AdminLayout';
import SettingsPage from '@/components/pages/admin/SettingsPage';

export default function AdminSettings() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <SettingsPage />
      </AdminLayout>
    </ProtectedRoute>
  );
}

