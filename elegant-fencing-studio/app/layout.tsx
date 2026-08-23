import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Providers from './providers';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import StructuredData from '@/components/StructuredData';
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebsiteSchema,
  entityDescription,
  siteUrl,
  staticSeoProfiles,
} from '@/lib/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${staticSeoProfiles.home.title} - SRK Fence`,
    template: '%s | SRK Fence',
  },
  description: staticSeoProfiles.home.description || entityDescription,
  keywords: staticSeoProfiles.home.keywords,
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: staticSeoProfiles.home.title,
    description: staticSeoProfiles.home.description,
    siteName: 'SRK Fence',
    images: [
      {
        url: '/SRK FENCE Banners.webp',
        width: 1200,
        height: 630,
        alt: 'SRK Fence chain link and security fencing supplier in Dubai UAE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: staticSeoProfiles.home.title,
    description: staticSeoProfiles.home.description,
    images: ['/SRK FENCE Banners.webp'],
  },
  other: {
    'geo.region': 'AE-SH',
    'geo.placename': 'Dubai, Sharjah, United Arab Emirates',
    'business:contact_data:country_name': 'United Arab Emirates',
    'ai-search-intent': staticSeoProfiles.home.intent,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/new_whitelogog.png',
    apple: '/new_whitelogog.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StructuredData data={[buildOrganizationSchema(), buildLocalBusinessSchema(), buildWebsiteSchema()]} />
        <Script id="tawk-to-widget" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69f5ab526f23461c370f5ad9/1jnjqaf11';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
        <Providers>
          {children}
          <WhatsAppFloatingButton />
        </Providers>
      </body>
    </html>
  );
}
