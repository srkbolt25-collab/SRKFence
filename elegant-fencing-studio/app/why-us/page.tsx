'use client';

export const dynamic = 'force-dynamic';

import SiteLayout from '@/components/SiteLayout';
import WhyUsPage from '@/pages/WhyUsPage';

export default function WhyUs() {
  return (
    <SiteLayout>
      <WhyUsPage />
    </SiteLayout>
  );
}

