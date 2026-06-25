import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CountryLandingPage from '@/components/pages/CountryLandingPage';
import { buildSeoMetadata, getCountryBySlug, countryPages, getCountryKeywordSet } from '@/lib/seo';

export function generateStaticParams() {
  return countryPages.map((country) => ({ slug: country.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const country = getCountryBySlug(params.slug);

  if (!country) {
    return {
      title: 'Country Page Not Found',
    };
  }

  return buildSeoMetadata({
    title: `Fencing Supplier in ${country.country} | Chain Link, Welded Mesh & Security Fencing`,
    description: `SRK Fence supplies fencing products to ${country.country}, including chain link, welded mesh, anti-climb, PVC fencing, temporary fencing, barbed wire, razor wire, gates and accessories.`,
    path: `/countries/${country.slug}`,
    keywords: getCountryKeywordSet(country),
    image: '/Whyusnew/chain-link-fence-supplier-uae-saudi-gcc.png',
    intent: `${country.country} country landing page for fencing supplier, country RFQ and project sourcing searches.`,
  });
}

export default function CountryPage({ params }: { params: { slug: string } }) {
  const country = getCountryBySlug(params.slug);

  if (!country) {
    notFound();
  }

  return <CountryLandingPage country={country} />;
}
