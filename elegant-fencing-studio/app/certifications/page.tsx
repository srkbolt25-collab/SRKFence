import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';
import StructuredData from '@/components/StructuredData';
import CertificateGallery from '@/components/CertificateGallery';
import { buildWebPageSchema, siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Certifications & Accreditations | SRK Fence UAE',
  description:
    'View SRK METALS FZE-LLC ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 certificates, certificate numbers and validity details.',
  alternates: { canonical: `${siteUrl}/certifications` },
  openGraph: {
    title: 'Certifications & Accreditations | SRK Fence UAE',
    description:
      'ISO 9001, ISO 14001 and ISO 45001 certificates issued to SRK METALS FZE-LLC with certificate numbers and validity details.',
    url: `${siteUrl}/certifications`,
    type: 'website',
  },
};

const certificates = [
  {
    standard: 'ISO 9001:2015',
    title: 'Quality Management System',
    certificateNumber: '212447',
    validFrom: '24 September 2026',
    validUntil: '23 September 2029',
    image: '/certifications/iso-9001-2015-certificate.webp',
    pdf: '/certifications/srk-metals-iso-9001-2015.pdf',
  },
  {
    standard: 'ISO 14001:2015',
    title: 'Environmental Management System',
    certificateNumber: '212448',
    validFrom: '24 September 2026',
    validUntil: '23 September 2029',
    image: '/certifications/iso-14001-2015-certificate.webp',
    pdf: '/certifications/srk-metals-iso-14001-2015.pdf',
  },
  {
    standard: 'ISO 45001:2018',
    title: 'Occupational Health & Safety Management System',
    certificateNumber: 'ISO 45001/780',
    validFrom: '24 September 2026',
    validUntil: '23 September 2029',
    image: '/certifications/iso-45001-2018-certificate.webp',
    pdf: '/certifications/srk-metals-iso-45001-2018.pdf',
  },
];

export default function CertificationsPage() {
  return (
    <>
      <StructuredData
        data={buildWebPageSchema(
          'Certifications & Accreditations | SRK Fence UAE',
          'ISO 9001, ISO 14001 and ISO 45001 certificates issued to SRK METALS FZE-LLC with certificate numbers and validity details.',
          '/certifications',
          ['ISO 9001 UAE', 'ISO 14001 UAE', 'ISO 45001 UAE', 'SRK METALS certifications', 'SRK Fence certifications'],
        )}
      />
      <SiteLayout>
        <section className="relative overflow-hidden bg-gradient-to-r from-[#101b3e] via-[#16345c] to-[#234f72] py-16 text-white sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(255,255,255,0.12),transparent_36%)]" />
          <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)] lg:gap-14">
              <div className="max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/75">
                  Trust · Compliance · International Standards
                </p>
                <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  Certifications & Accreditations
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
                  SRK METALS FZE-LLC is certified to ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018,
                  reflecting our commitment to consistent quality, responsible environmental practices and a safe,
                  healthy workplace across our operations.
                </p>
              </div>

              <div className="mx-auto w-full max-w-xl lg:mx-0 lg:justify-self-end">
                <div className="overflow-hidden rounded-xl border border-white/15 bg-white p-3 shadow-2xl shadow-black/20 sm:p-4">
                  <Image
                    src="/certifications/iaf-eiac-iso-accreditation.webp"
                    alt="IAF and Emirates International Accreditation Centre marks with ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018"
                    width={1973}
                    height={797}
                    className="h-auto w-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-10 sm:py-14">
          <div className="container mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="transition hover:text-primary">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="font-semibold text-foreground">Certifications & Accreditations</span>
            </nav>

            <div className="mb-10 max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Our Certifications & Accreditations
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                SRK METALS FZE-LLC is certified to internationally recognized ISO standards for quality,
                environmental responsibility, and occupational health & safety. These certifications reflect our
                commitment to consistent processes, responsible operations, safer workplaces, and dependable project
                support for clients across the UAE and GCC.
              </p>
              <p className="mt-3 text-sm font-medium text-muted-foreground sm:text-base">
                View each certificate for full details, certificate number, validity, and the original PDF document.
              </p>
            </div>

            <CertificateGallery certificates={certificates} />
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
