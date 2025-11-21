'use client';

export const dynamic = 'force-dynamic';

import dynamic from 'next/dynamic';

const LoginPage = dynamic(() => import('@/pages/admin/LoginPage'), {
  ssr: false,
});

export default function AdminLogin() {
  return <LoginPage />;
}

