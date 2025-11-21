'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import AdminLayout from '@/components/admin/AdminLayout';
import AnalyticsPage from '@/pages/admin/AnalyticsPage';

export default function AdminAnalytics() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <AnalyticsPage />
      </AdminLayout>
    </ProtectedRoute>
  );
}

