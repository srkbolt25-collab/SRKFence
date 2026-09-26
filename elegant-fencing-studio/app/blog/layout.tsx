import type { Metadata } from 'next';
import { buildSeoMetadata, staticSeoProfiles } from '@/lib/seo';

export const metadata: Metadata = buildSeoMetadata(staticSeoProfiles.blog);

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
