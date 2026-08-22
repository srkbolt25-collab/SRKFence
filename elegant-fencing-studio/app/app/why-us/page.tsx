import type { Metadata } from 'next';
import SiteLayout from '@/components/SiteLayout';
import StructuredData from '@/components/StructuredData';
import WhyUsPage from '@/components/pages/WhyUsPage';
import { buildSeoMetadata, buildWebPageSchema, staticSeoProfiles } from '@/lib/seo';

export const metadata: Metadata = buildSeoMetadata(staticSeoProfiles.whyUs);

export default function WhyUs() {
  return (
    <>
      <StructuredData
        data={buildWebPageSchema(
          staticSeoProfiles.whyUs.title,
          staticSeoProfiles.whyUs.description,
          '/why-us',
          staticSeoProfiles.whyUs.keywords,
        )}
      />
      <SiteLayout>
        <WhyUsPage />
      </SiteLayout>
    </>
  );
}
