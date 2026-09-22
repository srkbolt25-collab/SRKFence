import type { Metadata } from 'next';
import SiteLayout from '@/components/SiteLayout';
import StructuredData from '@/components/StructuredData';
import ContactPage from '@/components/pages/ContactPage';
import { buildSeoMetadata, buildWebPageSchema, staticSeoProfiles } from '@/lib/seo';

export const metadata: Metadata = buildSeoMetadata(staticSeoProfiles.contact);

export default function Contact() {
  return (
    <>
      <StructuredData
        data={buildWebPageSchema(
          staticSeoProfiles.contact.title,
          staticSeoProfiles.contact.description,
          '/contact',
          staticSeoProfiles.contact.keywords,
        )}
      />
      <SiteLayout>
        <ContactPage />
      </SiteLayout>
    </>
  );
}
