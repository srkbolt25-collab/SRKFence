import type { Metadata } from 'next';
import SiteLayout from '@/components/SiteLayout';
import StructuredData from '@/components/StructuredData';
import { buildWebPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Terms of Use | SRK Fence',
  description:
    'Terms of Use for SRK Fence website visitors, enquiries, quote requests, product information and third-party links.',
  alternates: {
    canonical: '/terms-of-use',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    title: '1. Acceptance of These Terms',
    body: [
      'By accessing or using the SRK Fence website, you agree to these Terms of Use. If you do not agree with these terms, please do not use the website.',
    ],
  },
  {
    title: '2. Website Purpose',
    body: [
      'This website provides information about fencing products, applications, project support, quote requests and contact options for SRK FENCE Industries. The content is provided for general business information and enquiry support.',
    ],
  },
  {
    title: '3. Product Information and Specifications',
    body: [
      'Product descriptions, images, applications, specifications and suggested uses are provided to help visitors understand available fencing options. Final product selection, specification, coating, size, accessories, installation scope and delivery terms must be confirmed in writing before order confirmation.',
      'Images and banners are for illustration and may not show exact final product finish, size, coating, color, accessories or installation method. Site conditions, project drawings, local requirements and final quotation details may affect the recommended solution.',
    ],
  },
  {
    title: '4. Quotations and Enquiries',
    body: [
      'Submitting a quote request does not create a binding order or contract. Quotations are prepared after our team reviews available information such as location, fence type, height, running meters, mesh opening, coating, posts, gates, delivery city, drawings, BOQ notes and installation scope.',
      'Any pricing, delivery timeline, availability or installation support is subject to written confirmation by SRK Fence. We may request additional information before preparing or finalizing a quotation.',
    ],
  },
  {
    title: '5. User Submissions',
    body: [
      'When you submit forms, messages, drawings, photos, BOQ details or project notes, you confirm that the information is accurate to the best of your knowledge and that you have permission to share it. You should not upload or send content that is unlawful, confidential without permission, misleading or harmful.',
    ],
  },
  {
    title: '6. Third-Party Links and Tools',
    body: [
      'The website may include links or integrations for WhatsApp, Google Maps, analytics, live chat, social media and other third-party platforms. These services are provided for convenience and may be governed by their own terms and privacy policies. SRK Fence is not responsible for third-party websites or platforms.',
    ],
  },
  {
    title: '7. Intellectual Property',
    body: [
      'Website text, images, logos, graphics, layouts and other content are owned by or licensed to SRK Fence unless otherwise stated. You may view the website for business enquiry purposes, but you may not copy, reproduce, publish or use website content for commercial purposes without written permission.',
    ],
  },
  {
    title: '8. Website Availability',
    body: [
      'We aim to keep the website available and accurate, but we do not guarantee uninterrupted access, error-free operation or that all information will always be current. We may update, remove or change content, pages, features or services at any time.',
    ],
  },
  {
    title: '9. Limitation of Liability',
    body: [
      'To the extent permitted by applicable law, SRK Fence is not liable for losses arising from website use, reliance on general website content, temporary unavailability, third-party links or incomplete project information supplied through the website.',
      'Final responsibilities for product suitability, project approvals, local compliance, site conditions and installation requirements should be confirmed through written project documentation and, where required, qualified professional advice.',
    ],
  },
  {
    title: '10. Governing Terms',
    body: [
      'These Terms of Use are intended for use in connection with SRK Fence website activity and business enquiries. Project orders, supply contracts, installation agreements, payment terms, warranties and delivery terms may be governed by separate written quotations, invoices, purchase orders or agreements.',
    ],
  },
  {
    title: '11. Contact Information',
    body: [
      'For questions about these Terms of Use, contact SRK FENCE Industries at Sales@srkmetals.com or info@srkfencing.com. You may also call Sales & Purchase Team: +971 58 660 0183 or Quick Support: +971 52 216 0874.',
    ],
  },
  {
    title: '12. Updates to These Terms',
    body: [
      'We may update these Terms of Use from time to time. Continued use of the website after updates means you accept the revised terms.',
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <StructuredData
        data={buildWebPageSchema(
          'Terms of Use',
          'Terms of Use for SRK Fence website visitors, enquiries, quotations and product information.',
          '/terms-of-use',
          ['terms of use', 'SRK Fence terms', 'fencing quote terms'],
        )}
      />
      <SiteLayout>
        <main className="bg-background">
          <section className="border-b border-border/70 bg-gradient-to-b from-muted/70 to-background py-16 md:py-20">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Legal Information</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">Terms of Use</h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                These terms explain the basic conditions for using the SRK Fence website, requesting information and submitting project enquiries.
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
