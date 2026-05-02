import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Providers from './providers';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SRK FENCE - High Security Fencing Solutions',
  description: 'Leading manufacturer and supplier of high-quality fencing systems',
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

