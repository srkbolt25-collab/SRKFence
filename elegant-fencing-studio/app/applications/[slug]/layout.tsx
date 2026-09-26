import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import {
  applicationSeoContent,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildSeoMetadata,
  buildServiceSchema,
  getApplicationKeywordSet,
} from '@/lib/seo';

const applicationsData: Record<string, {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}> = {
  'residential-fencing': {
    metaTitle: 'Residential Fencing Dubai | PVC, Steel & Gate Solutions',
    metaDescription: 'Residential fencing in Dubai for villas, homes and communities, including PVC coated fence, steel fencing, chain link, privacy fencing and gates.',
    keywords: 'residential fencing Dubai, home fencing UAE, privacy fencing Dubai, villa fencing, PVC fence Dubai',
  },
  'commercial-industrial': {
    metaTitle: 'Industrial Fencing UAE | Commercial Fence Contractor Dubai',
    metaDescription: 'Commercial and industrial fencing in UAE with welded mesh, chain link, steel fencing, anti-climb fencing, gate systems and perimeter security support.',
    keywords: 'industrial fencing UAE, commercial fencing Dubai, fence contractor Dubai, warehouse fencing UAE',
  },
  'oil-gas-sector': {
    metaTitle: 'Oil and Gas Security Fencing UAE',
    metaDescription: 'Oil and gas security fencing in UAE with anti-climb fence, razor wire, steel fencing, welded mesh, gates and perimeter security products.',
    keywords: 'oil and gas security fencing UAE, refinery fencing, energy facility security, razor wire UAE',
  },
  'data-centers': {
    metaTitle: 'Data Center Security Fencing UAE | Anti-Climb 358 Fence',
    metaDescription: 'Data center security fencing in UAE with anti-climb 358 fence, welded mesh, razor wire, high-security gates and perimeter protection support.',
    keywords: 'data center security fencing UAE, anti climb 358 fence, high security fence Dubai, critical infrastructure fencing',
  },
  'schools-public-parks': {
    metaTitle: 'School and Park Fencing UAE | Playground Fence & Safe Perimeters',
    metaDescription: 'School and park fencing in UAE with visible mesh fencing, safe playground boundaries, gates, coated panels and durable public-space perimeter support.',
    keywords: 'school fencing UAE, playground fencing Dubai, park fencing UAE, child safe fencing, sports area fencing',
  },
  'farms-animal-enclosures': {
    metaTitle: 'Farm Fencing UAE | Chain Link, Barbed Wire & Animal Enclosures',
    metaDescription: 'Farm fencing in UAE with chain link fence, GI chain link, barbed wire, gates, posts and animal enclosure fencing support.',
    keywords: 'farm fencing UAE, livestock fencing, animal enclosure fencing, barbed wire UAE',
  },
  'boundary-security-fencing': {
    metaTitle: 'Security Fencing Dubai | Boundary & Perimeter Security Fence',
    metaDescription: 'Security fencing in Dubai and UAE with anti-climb, welded mesh, steel fencing, barbed wire, razor wire, gates and perimeter protection options.',
    keywords: 'security fencing Dubai, perimeter fencing UAE, boundary fencing, high security fencing',
  },
  'warehouses-logistic-centers': {
    metaTitle: 'Warehouse Security Fencing UAE | Chain Link, Mesh & Gates',
    metaDescription: 'Warehouse security fencing in UAE with chain link fence, welded mesh fence, steel fencing, anti-climb options, gates and accessories.',
    keywords: 'warehouse security fencing UAE, warehouse fencing Dubai, logistics fencing, chain link fence UAE',
  },
  'country-border-fencing': {
    metaTitle: 'Border Fencing Solutions GCC | Anti-Climb, Razor Wire & Gates',
    metaDescription: 'Border fencing solutions for GCC infrastructure, government and large perimeter projects with anti-climb fence, welded mesh, razor wire and security gates.',
    keywords: 'border fencing solutions, country border fencing, anti climb fence GCC, razor wire fencing, security gates',
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const application = applicationsData[params.slug];
  
  if (!application) {
    return {
      title: 'Application Not Found',
    };
  }

  return {
    ...buildSeoMetadata({
      title: application.metaTitle,
      description: application.metaDescription,
      path: `/applications/${params.slug}`,
      keywords: getApplicationKeywordSet(params.slug),
      image: '/Applicationsnew/high-security-boundary-fencing-contractors-gcc.png',
      intent: `Application page for ${application.keywords} and RFQ-ready fencing buyers.`,
    }),
  };
}

export default function ApplicationLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const seoContent = applicationSeoContent[params.slug];

  return (
    <>
      {seoContent && (
        <StructuredData
          data={[
            buildServiceSchema(
              seoContent.primaryKeyword,
              seoContent.answer,
              `/applications/${params.slug}`,
              undefined,
              getApplicationKeywordSet(params.slug),
            ),
            buildFaqSchema(seoContent.faqs),
            buildBreadcrumbSchema([
              { label: 'Home', href: '/' },
              { label: 'Applications', href: '/applications' },
              {
                label: applicationsData[params.slug]?.metaTitle?.split('|')[0]?.trim() || params.slug,
                href: `/applications/${params.slug}`,
              },
            ]),
          ]}
        />
      )}
      {children}
    </>
  );
}
