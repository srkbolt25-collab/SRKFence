import { categoryInfo, company, countries, products } from '@/lib/data';
import { getPrimaryProductImage } from '@/lib/productThumbnailOverrides';

const baseUrl = 'https://srksteel.com';

function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, '\u003c') };
}

export default function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'SRK Steel',
    url: baseUrl,
    logo: `${baseUrl}/srk-steel-header-logo.png`,
    image: `${baseUrl}/banners/products-banner.webp`,
    description: 'SRK Steel supplies mild steel, stainless steel, galvanized steel and aluminium products for UAE, GCC and Middle East construction, roofing, cladding, MEP support, fitout and fabrication projects.',
    telephone: company.phone,
    email: company.email,
    areaServed: countries.map((country) => ({ '@type': 'Country', name: country.name })),
    knowsAbout: [
      'Mild steel products', 'Stainless steel products', 'Galvanized steel products', 'Aluminium coils and sheets',
      'Purlins', 'GI decking sheets', 'Drywall partition systems', 'Strut channel systems', 'Roofing and cladding products'
    ],
    sameAs: [company.googleBusinessUrl, 'https://www.facebook.com/srkmetals', 'https://www.linkedin.com/company/srk-metals-uae/'],
    contactPoint: [
      { '@type': 'ContactPoint', telephone: company.phone, contactType: 'Sales and purchase', areaServed: 'AE, BH, QA, KW, SA, IQ, OM, JO', availableLanguage: ['en'] },
      { '@type': 'ContactPoint', telephone: company.whatsapp, contactType: 'Quick support', areaServed: 'AE, BH, QA, KW, SA, IQ, OM, JO', availableLanguage: ['en'] }
    ]
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: 'SRK Steel',
    url: baseUrl,
    publisher: { '@id': `${baseUrl}/#organization` },
    inLanguage: 'en'
  };

  const catalog = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${baseUrl}/products#catalog`,
    name: 'SRK Steel Product Catalogue',
    itemListElement: products.slice(0, 43).map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: product.name,
      url: `${baseUrl}/products/${product.slug}`,
      image: `${baseUrl}${getPrimaryProductImage(product)}`
    }))
  };

  const categoryList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${baseUrl}/categories#categories`,
    name: 'SRK Steel Product Categories',
    itemListElement: categoryInfo.map((category, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: category.name,
      url: `${baseUrl}/categories/${category.slug}`,
      image: `${baseUrl}${category.image}`
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organization)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(website)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(catalog)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(categoryList)} />
    </>
  );
}
