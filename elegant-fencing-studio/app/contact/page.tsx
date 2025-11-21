'use client';

export const dynamic = 'force-dynamic';

import SiteLayout from '@/components/SiteLayout';
import ContactPage from '@/pages/ContactPage';

export default function Contact() {
  return (
    <SiteLayout>
      <ContactPage />
    </SiteLayout>
  );
}

