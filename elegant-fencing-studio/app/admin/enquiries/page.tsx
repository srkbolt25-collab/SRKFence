'use client';

export const dynamic = 'force-dynamic';

import ProtectedRoute from '@/components/ProtectedRoute';
import AdminLayout from '@/components/admin/AdminLayout';
import EnquiriesPage from '@/components/pages/admin/EnquiriesPage';

export default function AdminEnquiries() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <EnquiriesPage />
      </AdminLayout>
    </ProtectedRoute>
  );
}

