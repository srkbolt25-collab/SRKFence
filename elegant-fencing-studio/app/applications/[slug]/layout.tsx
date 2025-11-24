import { Metadata } from 'next';

const applicationsData: Record<string, {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}> = {
  'residential-fencing': {
    metaTitle: 'Residential Fencing Solutions | SRK FENCE - Secure Your Home',
    metaDescription: 'Professional residential fencing solutions for homes and communities. Enhance security, privacy, and property value with our premium fencing systems.',
    keywords: 'residential fencing, home fencing, privacy fencing, residential security, property fencing',
  },
  'commercial-industrial': {
    metaTitle: 'Commercial & Industrial Fencing | SRK FENCE - Secure Your Business',
    metaDescription: 'Professional commercial and industrial fencing solutions. Protect your business assets with durable, cost-effective perimeter security systems.',
    keywords: 'commercial fencing, industrial fencing, business security, warehouse fencing, factory fencing',
  },
  'oil-gas-sector': {
    metaTitle: 'Oil & Gas Sector Fencing | SRK FENCE - Secure Energy Facilities',
    metaDescription: 'Specialized fencing solutions for oil and gas facilities. Corrosion-resistant, high-security systems meeting industry safety standards.',
    keywords: 'oil and gas fencing, refinery fencing, energy facility security, pipeline fencing, petrochemical fencing',
  },
  'data-centers': {
    metaTitle: 'Data Center Fencing | SRK FENCE - CPNI Certified Security',
    metaDescription: 'High-security CPNI and LPS1175 certified fencing for data centers. Protect critical IT infrastructure with maximum security systems.',
    keywords: 'data center fencing, CPNI certified fencing, IT security fencing, server farm security, critical infrastructure fencing',
  },
  'schools-public-parks': {
    metaTitle: 'School & Park Fencing | SRK FENCE - Safe Playground Solutions',
    metaDescription: 'Child-safe fencing for schools and public parks. High-visibility, durable solutions meeting safety standards for educational and recreational facilities.',
    keywords: 'school fencing, playground fencing, park fencing, child safe fencing, educational facility security',
  },
  'farms-animal-enclosures': {
    metaTitle: 'Farm & Animal Fencing | SRK FENCE - Agricultural Solutions',
    metaDescription: 'Specialized fencing for farms and animal enclosures. Durable, weather-resistant solutions for livestock management and agricultural security.',
    keywords: 'farm fencing, livestock fencing, animal enclosure, agricultural fencing, ranch fencing',
  },
  'boundary-security-fencing': {
    metaTitle: 'Boundary & Security Fencing | SRK FENCE - Maximum Protection',
    metaDescription: 'High-security perimeter fencing for critical infrastructure. Anti-climb, anti-cut systems with integrated surveillance for maximum protection.',
    keywords: 'security fencing, perimeter fencing, military fencing, boundary fencing, high security fencing',
  },
  'warehouses-logistic-centers': {
    metaTitle: 'Warehouse & Logistics Fencing | SRK FENCE - Protect Your Assets',
    metaDescription: 'Secure fencing for warehouses and logistics centers. Protect inventory and assets with scalable, cost-effective perimeter security solutions.',
    keywords: 'warehouse fencing, logistics fencing, distribution center security, storage facility fencing',
  },
  'country-border-fencing': {
    metaTitle: 'Country Border Fencing | SRK FENCE - National Security Solutions',
    metaDescription: 'Large-scale border security fencing for national boundaries. Government-approved systems designed for extreme conditions and maximum security.',
    keywords: 'border fencing, national security fencing, country border security, international boundary fencing',
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const application = applicationsData[params.slug];
  
  if (!application) {
    return {
      title: 'Application Not Found | SRK FENCE',
    };
  }

  return {
    title: application.metaTitle,
    description: application.metaDescription,
    keywords: application.keywords,
  };
}

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

