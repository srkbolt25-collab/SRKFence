import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GccMarketLandingPage from '@/components/pages/GccMarketLandingPage';
import { buildSeoMetadata, countryPages } from '@/lib/seo';
import {
  countryNameForKeyword,
  gccApplicationPages,
  gccProductPages,
  getCountryApplicationKeywords,
  getCountryApplicationPage,
  getCountryProductKeywords,
  getCountryProductPage,
  type GccApplicationPage,
  type GccProductPage,
} from '@/lib/gccPages';

export function generateStaticParams() {
  return countryPages.flatMap((country) => [
    ...gccProductPages.map((product) => ({ slug: country.slug, page: product.slug })),
    ...gccApplicationPages.map((application) => ({ slug: country.slug, page: application.slug })),
  ]);
}

function productSeoModifier(productPage: GccProductPage) {
  const modifiers: Record<string, string> = {
    'chain-link-fence': 'GI & PVC Coated Fencing',
    'welded-mesh-fence': 'Steel Mesh Panels',
    'anti-climb-358-fence': 'High Security Mesh Fencing',
    'temporary-fence-panels': 'Construction Site Fencing',
    'pvc-fence': 'PVC Privacy & Coated Fencing',
    'pvc-hoarding-fence': 'Construction Site Hoarding',
    'barbed-wire': 'Security & Farm Fencing Wire',
    'razor-wire': 'Concertina Security Wire',
  };
  return modifiers[productPage.slug] || productPage.category;
}

function productDescription(productPage: GccProductPage, countryName: string, market: string) {
  const descriptions: Record<string, string> = {
    'chain-link-fence': `Request chain link fence in ${countryName} with GI chain link fence, PVC coated chain link fence, posts, gates and boundary fence options for ${market} buyers.`,
    'welded-mesh-fence': `Request welded mesh fence in ${countryName} with steel mesh fencing, coated welded panels, posts, gates and industrial mesh fence support for ${market} projects.`,
    'anti-climb-358-fence': `Request anti-climb 358 fence in ${countryName} with high security mesh fencing, 358 security fence panels, gates, razor wire options and RFQ support for ${market}.`,
    'temporary-fence-panels': `Request temporary fence panels in ${countryName} for construction site fencing, portable fencing, PVC hoarding support, gates and short-term project perimeters across ${market}.`,
    'pvc-fence': `Request PVC fence in ${countryName} with PVC coated chain link fence, PVC privacy fence, decorative fencing, posts, gates and weather-resistant fencing options for ${market}.`,
    'pvc-hoarding-fence': `Request PVC hoarding fence in ${countryName} for construction hoarding, site boundary fencing, project screening, gates and temporary perimeter support across ${market}.`,
    'barbed-wire': `Request barbed wire in ${countryName} with galvanized barbed wire, farm fencing wire, security barbed wire, posts and boundary topping support for ${market}.`,
    'razor-wire': `Request razor wire in ${countryName} with concertina razor wire, razor tape fencing, perimeter security wire, brackets and high-security fence topping support for ${market}.`,
  };
  return descriptions[productPage.slug] || `Request ${productPage.shortName} in ${countryName} with specification guidance, accessories, delivery scope and project quotation support for ${market}.`;
}

function applicationSeoModifier(applicationPage: GccApplicationPage) {
  const modifiers: Record<string, string> = {
    'construction-site-fencing': 'Temporary Fence & PVC Hoarding',
    'warehouse-fencing': 'Chain Link, Mesh & Gates',
    'oil-gas-fencing': 'Anti-Climb, Razor Wire & Security Gates',
    'data-center-security-fencing': 'Anti-Climb 358 & High Security Fence',
    'industrial-fencing': 'Steel, Mesh & Perimeter Security',
    'farm-fencing': 'Chain Link & Barbed Wire',
    'boundary-security-fencing': 'Perimeter Fence & Access Control',
  };
  return modifiers[applicationPage.slug] || 'Security Fencing Solutions';
}

function applicationDescription(applicationPage: GccApplicationPage, countryName: string, market: string) {
  const descriptions: Record<string, string> = {
    'construction-site-fencing': `Construction site fencing in ${countryName} with temporary fence panels, PVC hoarding fence, chain link fence, gates and site boundary RFQ support for ${market}.`,
    'warehouse-fencing': `Warehouse security fencing in ${countryName} with chain link fence, welded mesh fence, anti-climb fencing, steel gates and perimeter control for ${market}.`,
    'oil-gas-fencing': `Oil and gas security fencing in ${countryName} with anti-climb fence, welded mesh fence, razor wire, barbed wire, steel gates and high-security perimeter support for ${market}.`,
    'data-center-security-fencing': `Data center security fencing in ${countryName} with anti-climb 358 fence, welded mesh security fence, razor wire, gates and perimeter protection for ${market}.`,
    'industrial-fencing': `Industrial fencing in ${countryName} with steel fencing, welded mesh fence, chain link fence, anti-climb fence, gates and project RFQ support for ${market}.`,
    'farm-fencing': `Farm fencing in ${countryName} with chain link fence, barbed wire, animal enclosure fencing, posts, gates and agricultural boundary support for ${market}.`,
    'boundary-security-fencing': `Boundary security fencing in ${countryName} with perimeter fencing, anti-climb mesh, welded mesh panels, razor wire, gates and access-control-ready layouts for ${market}.`,
  };
  return descriptions[applicationPage.slug] || `${applicationPage.name} in ${countryName} with recommended fence systems, specification guidance and quotation support for ${market} projects.`;
}

export async function generateMetadata({ params }: { params: { slug: string; page: string } }): Promise<Metadata> {
  const productResult = getCountryProductPage(params.slug, params.page);
  if (productResult) {
    const { country, productPage } = productResult;
    const market = countryNameForKeyword(country);
    const title = `${productPage.name} Supplier in ${country.country} | ${productSeoModifier(productPage)}`;
    return buildSeoMetadata({
      title,
      description: productDescription(productPage, country.country, market),
      path: `/countries/${country.slug}/${productPage.slug}`,
      keywords: getCountryProductKeywords(country, productPage),
      image: productPage.image,
      intent: `${productPage.name} supplier landing page for ${country.country} buyer RFQs, secondary keywords and GCC project sourcing.`,
    });
  }

  const applicationResult = getCountryApplicationPage(params.slug, params.page);
  if (applicationResult) {
    const { country, applicationPage } = applicationResult;
    const market = countryNameForKeyword(country);
    const title = `${applicationPage.name} in ${country.country} | ${applicationSeoModifier(applicationPage)}`;
    return buildSeoMetadata({
      title,
      description: applicationDescription(applicationPage, country.country, market),
      path: `/countries/${country.slug}/${applicationPage.slug}`,
      keywords: getCountryApplicationKeywords(country, applicationPage),
      image: applicationPage.image,
      intent: `${applicationPage.name} landing page for ${country.country} application-based fencing buyer searches, secondary keywords and RFQ journeys.`,
    });
  }

  return { title: 'Page Not Found' };
}

export default function CountrySegmentPage({ params }: { params: { slug: string; page: string } }) {
  const productResult = getCountryProductPage(params.slug, params.page);
  if (productResult) {
    return <GccMarketLandingPage type="product" country={productResult.country} productPage={productResult.productPage} />;
  }

  const applicationResult = getCountryApplicationPage(params.slug, params.page);
  if (applicationResult) {
    return <GccMarketLandingPage type="application" country={applicationResult.country} applicationPage={applicationResult.applicationPage} />;
  }

  notFound();
}
