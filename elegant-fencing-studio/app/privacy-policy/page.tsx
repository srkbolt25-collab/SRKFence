import type { Metadata } from 'next';
import SiteLayout from '@/components/SiteLayout';
import StructuredData from '@/components/StructuredData';
import { buildWebPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy | SRK Fence',
  description:
    'Privacy Policy for SRK Fence covering enquiry data, quote requests, website analytics, cookies, WhatsApp communication and contact information.',
  alternates: {
    canonical: '/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    title: '1. Who We Are',
    body: [
      'SRK FENCE Industries is a Dubai/UAE based fencing supplier, contractor and installation support company serving UAE, GCC and Middle East project enquiries. This Privacy Policy explains how we collect, use and protect information when you visit our website, send an enquiry, request a quote, contact us by phone, email or WhatsApp, or use our online forms.',
    ],
  },
  {
    title: '2. Information We Collect',
    body: [
      'When you contact us or submit a quote request, we may collect your name, company name, email address, phone number, country, city, project location, product requirement, drawings, BOQ notes, message details and any other information you choose to share.',
      'When you use the website, basic technical information may be collected, such as browser type, device type, pages visited, approximate location, referral source, IP-based region and interaction data. This helps us improve website performance and understand which fencing products and pages are useful to visitors.',
    ],
  },
  {
    title: '3. How We Use Your Information',
    body: [
      'We use your information to respond to enquiries, prepare quotations, understand project requirements, provide product guidance, arrange follow-up communication, improve our website, measure marketing performance and maintain business records.',
      'We may use contact details to communicate about your enquiry, quotation, project requirement or related fencing products and services. We do not use your information to sell unrelated third-party products.',
    ],
  },
  {
    title: '4. Quote Requests and Project Information',
    body: [
      'Information submitted through our forms is used to evaluate fencing requirements such as fence type, height, running meters, mesh opening, coating, posts, gates, delivery location and installation scope. Sharing accurate project details helps us prepare more relevant guidance and quotation support.',
    ],
  },
  {
    title: '5. Cookies, Analytics and Website Tools',
    body: [
      'Our website may use cookies and analytics tools, including Google Analytics, to understand website usage and improve user experience. These tools may collect aggregated information such as pages viewed, time on site, device type and approximate location.',
      'The website may also include live chat or messaging tools and links to WhatsApp, Google Maps and social media platforms. When you use these third-party services, their own privacy policies may also apply.',
    ],
  },
  {
    title: '6. Sharing of Information',
    body: [
      'We may share enquiry details internally with our sales, purchasing, technical or installation support teams so they can respond properly. We may also share necessary project information with trusted service providers, logistics partners, installation partners, IT systems or hosting providers where required to support your enquiry or project.',
      'We do not sell personal information. We may disclose information if required by law, regulation, legal process or to protect our business, website users or lawful rights.',
    ],
  },
  {
    title: '7. Data Security and Retention',
    body: [
      'We take reasonable steps to protect information submitted through the website. However, no online transmission or storage system can be guaranteed to be completely secure.',
      'We retain enquiry and quotation information for as long as needed for business, project follow-up, legal, accounting or record-keeping purposes. If information is no longer required, we may delete, archive or anonymize it.',
    ],
  },
  {
    title: '8. Your Choices',
    body: [
      'You may request correction or removal of your contact information by contacting us. You can also manage cookies through your browser settings. If you do not want to share information through the website, you may contact us directly by phone or email.',
    ],
  },
  {
    title: '9. International Enquiries',
    body: [
      'SRK Fence serves enquiries from UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman, Jordan and other markets. By contacting us from outside the UAE, you understand that your information may be processed for enquiry handling and project communication across relevant business systems and support teams.',
    ],
  },
  {
    title: '10. Contact Us',
    body: [
      'For privacy questions or data-related requests, contact SRK FENCE Industries at Sales@srkmetals.com or info@srkfencing.com. You may also call Sales & Purchase Team: +971 58 660 0183 or Quick Support: +971 52 216 0874.',
    ],
  },
  {
    title: '11. Updates to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <StructuredData
        data={buildWebPageSchema(
          'Privacy Policy',
          'Privacy Policy for SRK Fence enquiries, quote requests, analytics and communication.',
          '/privacy-policy',
          ['privacy policy', 'SRK Fence privacy', 'fencing quote privacy'],
        )}
      />
      <SiteLayout>
        <main className="bg-background">
          <section className="border-b border-border/70 bg-gradient-to-b from-muted/70 to-background py-16 md:py-20">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Legal Information</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">Privacy Policy</h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                This page explains how SRK Fence collects, uses and protects information submitted through our website, quote forms and communication channels.
              </p>
              <p className="mt-4 text-sm font-medium text-muted-foreground">Last updated: July 2026</p>
            </div>
          </section>

          <section className="py-14 md:py-16">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="space-y-8 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-10">
                {sections.map((section) => (
                  <section key={section.title} className="space-y-3">
                    <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}
              </div>
            </div>
          </section>
        </main>
      </SiteLayout>
    </>
  );
}
