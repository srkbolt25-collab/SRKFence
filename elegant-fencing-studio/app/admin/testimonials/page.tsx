'use client';

export const dynamic = 'force-dynamic';

import ProtectedRoute from '@/components/ProtectedRoute';
import AdminLayout from '@/components/admin/AdminLayout';
import TestimonialsPage from '@/components/pages/admin/TestimonialsPage';

export default function AdminTestimonials() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <TestimonialsPage />
      </AdminLayout>
    </ProtectedRoute>
  );
}

