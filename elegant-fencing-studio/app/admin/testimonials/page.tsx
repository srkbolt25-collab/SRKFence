'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import AdminLayout from '@/components/admin/AdminLayout';
import TestimonialsPage from '@/pages/admin/TestimonialsPage';

export default function AdminTestimonials() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <TestimonialsPage />
      </AdminLayout>
    </ProtectedRoute>
  );
}

