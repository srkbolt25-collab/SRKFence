'use client';

export const dynamic = 'force-dynamic';

import dynamicImport from 'next/dynamic';
import SiteLayout from '@/components/SiteLayout';

const ContactPage = dynamicImport(() => import('@/components/pages/ContactPage'), {
  ssr: false,
});

export default function Contact() {
  return (
    <SiteLayout>
      <ContactPage />
    </SiteLayout>
  );
}

