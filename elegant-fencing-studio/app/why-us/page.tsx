'use client';

export const dynamic = 'force-dynamic';

import dynamicImport from 'next/dynamic';
import SiteLayout from '@/components/SiteLayout';

const WhyUsPage = dynamicImport(() => import('@/pages/WhyUsPage'), {
  ssr: false,
});

export default function WhyUs() {
  return (
    <SiteLayout>
      <WhyUsPage />
    </SiteLayout>
  );
}

