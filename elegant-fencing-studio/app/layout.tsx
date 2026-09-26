import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import Script from 'next/script';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import TawkChatButton from '@/components/TawkChatButton';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://srksteel.com'),
  title: { default: 'Steel Supplier in UAE | SRK Steel', template: '%s | SRK Steel' },
  description: 'SRK Steel supplies mild steel, stainless steel, galvanized steel and aluminium products for UAE, GCC and Middle East construction, roofing, cladding, MEP support, fitout and fabrication projects.',
  keywords: ['steel supplier UAE', 'mild steel products', 'stainless steel supplier', 'galvanized steel supplier', 'aluminium coils UAE', 'GI decking sheets', 'C purlins', 'Z purlins', 'strut channels', 'drywall partition systems'],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
        <TawkChatButton />
        <Script id="tawk-to-widget" strategy="afterInteractive">
          {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
Tawk_API.onLoad = function(){ if (Tawk_API.hideWidget) Tawk_API.hideWidget(); };
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6475a80f74285f0ec46e617d/1h1lph08d';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}
        </Script>
      </body>
    </html>
  );
}
