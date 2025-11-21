'use client';

export const dynamic = 'force-dynamic';

import dynamic from 'next/dynamic';
import SiteLayout from '@/components/SiteLayout';

const ContactPage = dynamic(() => import('@/pages/ContactPage'), {
  ssr: false,
});

export default function Contact() {
  return (
    <SiteLayout>
      <ContactPage />
    </SiteLayout>
  );
}

