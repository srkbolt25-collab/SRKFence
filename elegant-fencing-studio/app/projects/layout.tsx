import type { Metadata } from 'next';
import { buildSeoMetadata, staticSeoProfiles } from '@/lib/seo';

export const metadata: Metadata = buildSeoMetadata(staticSeoProfiles.projects);

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
