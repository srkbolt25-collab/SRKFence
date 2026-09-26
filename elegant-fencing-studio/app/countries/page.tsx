import Image from 'next/image';
import Link from 'next/link';
import { countries, categoryInfo, products } from '@/lib/data';
import SectionHead from '@/components/SectionHead';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Countries We Serve | Steel Supplier for UAE, GCC & Middle East',
  description: 'SRK Steel supports steel product enquiries across UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan for construction, roofing, cladding, fitout, MEP and fabrication projects.',
  path: '/countries',
  image: '/banners/countries-banner.webp',
});

const countryQuestions = [
  ['Which countries does SRK Steel support?', 'SRK Steel supports enquiries for UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan. Buyers can use the country pages to review product scope, RFQ details and application guidance.'],
  ['What information should regional buyers send?', 'Send product name, size, grade, thickness, finish, quantity, delivery city, drawings, BOQ notes, certificate needs and timeline. This helps the team review the enquiry with fewer clarification rounds.'],
  ['Do country pages use the same product images?', 'Yes. Country pages use the same central product data as the main catalogue, so updated product photos and product details are consistent throughout the website.'],
];

export default function CountriesPage() {
  return <>
    <section className="page-banner">
      <Image src="/banners/countries-banner.webp" alt="Countries served by SRK Steel" fill priority sizes="100vw" />
      <div className="page-banner-overlay" />
      <div className="container page-banner-content"><p className="eyebrow">Markets Served</p><h1>Countries We Serve</h1><p>Steel product supply support for UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan.</p></div>
    </section>

    <section className="section soft">
      <div className="container seo-two-col">
        <div>
          <p className="eyebrow">Regional Steel Supply</p>
          <h2 className="large-title">Steel Product RFQ Support Across UAE and GCC Markets</h2>
          <p className="lead-copy">SRK Steel country pages are built for contractors, fabricators, fitout companies, MEP teams, roofing contractors and procurement departments that need product information by project location. Each country page explains commonly requested product groups, enquiry details and application-based guidance.</p>
          <p className="lead-copy">The same product catalogue powers the country pages, product pages and category pages. This means updated product photos, product descriptions and specification points remain consistent across the website instead of showing different information in different locations.</p>
          <p className="lead-copy">For a faster response, include the project city, product list, grade, thickness, finish, quantity, delivery schedule, drawings or BOQ references and any certificate, packing, cutting or punching requirements.</p>
        </div>
        <aside className="content-panel">
          <h3>Popular Product Families</h3>
          <ul className="copy-list">{categoryInfo.map((category) => <li key={category.slug}>{category.name}</li>)}</ul>
          <h3>Common RFQ Products</h3>
          <div className="chips">{products.slice(0, 10).map((product) => <Link className="chip" key={product.slug} href={`/products/${product.slug}`}>{product.name}</Link>)}</div>
        </aside>
      </div>
    </section>

    <section className="section"><div className="container"><SectionHead eyebrow="Select Market" title="Regional Country Pages" text="Open a country page to view related steel products, applications, RFQ details and buyer guidance for that market." /><div className="country-grid detailed">{countries.map(country => <Link className="country-card" key={country.slug} href={`/countries/${country.slug}`}><span>{country.name}</span><p>{country.cities}</p><b>View country page →</b></Link>)}</div></div></section>

    <section className="section soft"><div className="container"><SectionHead eyebrow="Answer Engine FAQ" title="Country Supply Questions" text="Short answers written for buyers and answer engines researching steel product supply by country." /><div className="faq-list">{countryQuestions.map(([q, a]) => <details key={q} open><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
  </>;
}
