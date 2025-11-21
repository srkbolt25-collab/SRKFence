'use client';

export const dynamic = 'force-dynamic';

import dynamic from 'next/dynamic';
import SiteLayout from '@/components/SiteLayout';

const WhyUsPage = dynamic(() => import('@/pages/WhyUsPage'), {
  ssr: false,
});

export default function WhyUs() {
  return (
    <SiteLayout>
      <WhyUsPage />
    </SiteLayout>
  );
}

