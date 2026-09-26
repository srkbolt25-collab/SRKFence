import type { Metadata } from 'next';
import { buildSeoMetadata, staticSeoProfiles } from '@/lib/seo';

export const metadata: Metadata = {
  ...buildSeoMetadata(staticSeoProfiles.rfq),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RFQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
