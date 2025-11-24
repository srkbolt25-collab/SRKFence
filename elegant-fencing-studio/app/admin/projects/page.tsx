'use client';

import dynamicImport from 'next/dynamic';
import AdminLayout from '@/components/admin/AdminLayout';

const ProjectsPage = dynamicImport(() => import('@/components/pages/admin/ProjectsPage'), {
  ssr: false,
});

export default function Projects() {
  return (
    <AdminLayout>
      <ProjectsPage />
    </AdminLayout>
  );
}

