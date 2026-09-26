import type { Metadata } from 'next';
import { buildSeoMetadata, staticSeoProfiles } from '@/lib/seo';

export const metadata: Metadata = buildSeoMetadata(staticSeoProfiles.applications);

export default function ApplicationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
