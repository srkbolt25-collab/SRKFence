'use client';

export const dynamic = 'force-dynamic';

import dynamicImport from 'next/dynamic';

const LoginPage = dynamicImport(() => import('@/components/pages/admin/LoginPage'), {
  ssr: false,
});

export default function AdminLogin() {
  return <LoginPage />;
}

