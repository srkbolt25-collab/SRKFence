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
} from '@/lib/gccPages';

export function generateStaticParams() {
  return countryPages.flatMap((country) => [
    ...gccProductPages.map((product) => ({ slug: country.slug, page: product.slug })),
    ...gccApplicationPages.map((application) => ({ slug: country.slug, page: application.slug })),
  ]);
}

export async function generateMetadata({ params }: { params: { slug: string; page: string } }): Promise<Metadata> {
  const productResult = getCountryProductPage(params.slug, params.page);
  if (productResult) {
    const { country, productPage } = productResult;
    const market = countryNameForKeyword(country);
    return buildSeoMetadata({
      title: `${productPage.name} Supplier in ${country.country} | SRK Fence`,
      description: `SRK Fence supports ${productPage.shortName} RFQs for ${market} buyers with product specification guidance, accessories, delivery scope and project quotation support.`,
      path: `/countries/${country.slug}/${productPage.slug}`,
      keywords: getCountryProductKeywords(country, productPage),
      image: productPage.image,
      intent: `${productPage.name} supplier landing page for ${country.country} buyer RFQs and GCC project sourcing.`,
    });
  }

  const applicationResult = getCountryApplicationPage(params.slug, params.page);
  if (applicationResult) {
    const { country, applicationPage } = applicationResult;
    const market = countryNameForKeyword(country);
    return buildSeoMetadata({
      title: `${applicationPage.name} in ${country.country} | SRK Fence`,
      description: `SRK Fence supports ${applicationPage.name.toLowerCase()} RFQs for ${market} projects with recommended fence systems, specification guidance and quotation support.`,
      path: `/countries/${country.slug}/${applicationPage.slug}`,
      keywords: getCountryApplicationKeywords(country, applicationPage),
      image: applicationPage.image,
      intent: `${applicationPage.name} landing page for ${country.country} application-based fencing buyer searches.`,
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
