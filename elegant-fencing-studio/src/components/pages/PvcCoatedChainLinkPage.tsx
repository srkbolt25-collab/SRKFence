import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Eye,
  Factory,
  FileText,
  House,
  Layers3,
  Leaf,
  Link2,
  LockKeyhole,
  MapPin,
  Ruler,
  Settings2,
  ShieldCheck,
  Trophy,
  Wheat,
  Wind,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  countryPages,
  getProductKeywordSet,
  type CountryPage,
  type FaqItem,
  type ProductSeoPage,
} from '@/lib/seo';
import { getCountryProductKeywords } from '@/lib/gccPages';

type Props = {
  product: ProductSeoPage;
  country?: CountryPage;
};

const heroImage = '/products/pvc-coated-chain-link-fence/pvc-chain-link-fence-hero.webp';
const detailImage = '/products/pvc-coated-chain-link-fence/pvc-chain-link-system-details.webp';
const securityImage = '/products/pvc-coated-chain-link-fence/pvc-chain-link-security-options.webp';
const perimeterImage = '/products/pvc-coated-chain-link-fence/pvc-chain-link-perimeter.webp';

const supportItems = [
  'Line Posts',
  'Corner Posts',
  'End Posts',
  'Gate Posts',
  'Top Rails',
  'Tension Wires',
  'Tie Wires',
  'Tension Bands',
  'Brace Bands',
  'Clamps & Fixing Accessories',
  'Gates',
];

const featureCards = [
  {
    title: 'Corrosion Protection',
    description: 'PVC coating adds a protective layer over the galvanized steel wire for outdoor perimeter applications.',
    icon: ShieldCheck,
  },
  {
    title: 'Strong & Flexible Mesh',
    description: 'Woven galvanized steel wire forms a flexible diamond-pattern chain-link mesh.',
    icon: Link2,
  },
  {
    title: 'Good Visibility',
    description: 'The open diamond mesh maintains visibility across the boundary.',
    icon: Eye,
  },
  {
    title: 'Airflow Through Open Mesh',
    description: 'The open mesh design allows air to pass through the fence.',
    icon: Wind,
  },
  {
    title: 'Economical Long Boundary Solution',
    description: 'Suitable for projects requiring long-running boundary coverage.',
    icon: Layers3,
  },
  {
    title: 'Clean Uniform Green Appearance',
    description: 'The PVC coating provides a clean and uniform coloured finish for commercial and residential environments.',
    icon: Leaf,
  },
];

const applications = [
  {
    title: 'Industrial & Commercial',
    description: 'Warehouses, industrial yards, commercial compounds, factory boundaries and logistics facilities.',
    image: '/applicartion/industrial-fencing-solutions-uae-ksa-qatar.webp',
    icon: Factory,
  },
  {
    title: 'Construction',
    description: 'Construction site boundaries, temporary or permanent project fencing and site security.',
    image: '/applicartion/construction-site-temporary-fence-gcc.webp',
    icon: Building2,
  },
  {
    title: 'Agriculture',
    description: 'Farms, agricultural boundaries and animal enclosures.',
    image: '/Applicationsnew/marine-grade-fencing-ss316l-uae.png',
    icon: Wheat,
  },
  {
    title: 'Sports & Recreation',
    description: 'Sports grounds, parks, recreational areas and school facilities.',
    image: '/Applicationsnew/powder-coated-wire-mesh-fence-uae.png',
    icon: Trophy,
  },
  {
    title: 'Residential',
    description: 'Property boundaries, gardens, villas and community areas.',
    image: '/Applicationsnew/premium-residential-fencing-solutions-installation-uae.png',
    icon: House,
  },
];

const countryFlags: Record<string, string> = {
  UAE: '🇦🇪',
  'Saudi Arabia': '🇸🇦',
  Qatar: '🇶🇦',
  Oman: '🇴🇲',
  Kuwait: '🇰🇼',
  Bahrain: '🇧🇭',
  Iraq: '🇮🇶',
  Jordan: '🇯🇴',
};

function SectionTitle({ children }: { children?: ReactNode }) {
  return (
    <div className="mb-7">
      <h2 className="text-3xl font-extrabold tracking-tight text-[#0c3151] sm:text-[2rem]">{children}</h2>
      <div className="mt-3 h-1 w-12 rounded-full bg-[#e52b3d]" />
    </div>
  );
}

function Highlight({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="flex min-h-[104px] flex-col items-center justify-center gap-3 border-b border-r border-slate-200 bg-white px-4 py-5 text-center last:border-r-0 lg:border-b-0">
      <Icon className="h-7 w-7 text-[#0c3151]" strokeWidth={1.8} />
      <span className="text-sm font-bold leading-tight text-[#17364f]">{title}</span>
    </div>
  );
}

export default function PvcCoatedChainLinkPage({ product, country }: Props) {
  const locationLabel = country ? country.country : 'UAE & GCC';
  const path = country ? `/countries/${country.slug}/pvc-coated-chain-link-fence` : `/products/${product.slug}`;
  const keywords = country
    ? getCountryProductKeywords(country, {
        slug: 'pvc-coated-chain-link-fence',
        name: product.name,
        primaryBase: 'PVC coated chain link fence',
        shortName: 'PVC coated chain link fence',
        category: product.category,
        image: heroImage,
        productHref: `/products/${product.slug}`,
        summary: product.shortDescription,
        specs: product.specs,
        applications: applications.map((item) => item.title),
        benefits: featureCards.map((item) => item.title),
        quoteChecklist: ['Fence running length', 'Required height', 'Mesh opening', 'Wire diameter', 'Post and gate requirement', 'Delivery / installation location'],
        relatedProductSlugs: ['chain-link-fence', 'gi-chain-link-fence', 'barbed-wire', 'fence-accessories'],
      })
    : getProductKeywordSet(product);

  const faqs: FaqItem[] = [
    {
      question: `What is PVC coated chain link fence${country ? ` for ${country.country} projects` : ''}?`,
      answer:
        'PVC coated chain link fence is manufactured from galvanized steel wire with a protective PVC coating. The diamond-pattern mesh provides a secure boundary while maintaining visibility and airflow.',
    },
    {
      question: 'What mesh openings and fence heights are available?',
      answer:
        'Common mesh options include 50 × 50 mm and 25 × 25 mm, with other openings subject to requirement. Common fence heights include 1.2 m, 1.5 m, 1.8 m, 2.0 m, 2.4 m and 3.0 m, while custom heights can be considered by project requirement.',
    },
    {
      question: 'Can the fence be supplied with posts, gates and accessories?',
      answer:
        'Yes. A complete system can include line, corner, end and gate posts, top rails, tension wires, tie wires, tension and brace bands, clamps, fixing accessories and gates.',
    },
    {
      question: 'Is a security topping available?',
      answer:
        'Yes. For higher-security applications, the chain-link fence can be configured with angled arms and barbed wire or other security toppings based on project requirements.',
    },
  ];

  const structuredData = country
    ? [
        buildServiceSchema(product.name, product.shortDescription, path, [country.country], keywords),
        buildFaqSchema(faqs),
        buildBreadcrumbSchema([
          { label: 'Home', href: '/' },
          { label: 'Countries', href: '/countries' },
          { label: country.country, href: `/countries/${country.slug}` },
          { label: product.name, href: path },
        ]),
      ]
    : [
        buildServiceSchema(product.name, product.shortDescription, path, undefined, keywords),
        buildFaqSchema(faqs),
        buildBreadcrumbSchema([
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: product.name, href: path },
        ]),
      ];

  return (
    <>
      <StructuredData data={structuredData} />
      <SiteLayout>
        <section className="border-b border-slate-200 bg-white">
          <div className="container mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8 lg:py-14">
            <div className="flex flex-col justify-center">
              <div className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.16em] text-[#667789]">
                <span className="h-[2px] w-8 bg-[#e52b3d]" />
                Fencing solutions for a safer tomorrow
              </div>
              <h1 className="max-w-xl text-4xl font-black leading-[0.98] tracking-tight text-[#0c3151] sm:text-5xl lg:text-[3.55rem]">
                PVC Coated<br className="hidden sm:block" /> Chain Link Fence
              </h1>
              <p className="mt-5 max-w-xl text-lg font-bold leading-snug text-[#2d4b63]">
                Durable perimeter fencing for industrial, commercial, residential and infrastructure projects.
              </p>
              <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">
                PVC coated chain link fence is manufactured from galvanized steel wire with a protective PVC coating, offering long-lasting perimeter security, good visibility, airflow and a clean green finish for outdoor use.
              </p>
              <p className="mt-3 text-sm font-semibold text-[#0c3151]">Project enquiries: {locationLabel}</p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-auto rounded-md bg-[#e52b3d] px-7 py-5 font-extrabold text-white shadow-sm hover:bg-[#c91f31]">
                  <Link href="/rfq">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-auto rounded-md border-[#e52b3d] px-7 py-5 font-extrabold text-[#e52b3d] hover:bg-red-50">
                  <Link href="/rfq">Add RFQ <FileText className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#314f67]"><ShieldCheck className="h-5 w-5 text-[#0c3151]" /> Durable & Reliable</div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#314f67]"><Settings2 className="h-5 w-5 text-[#0c3151]" /> Suitable for {country ? country.country : 'UAE & Regional Markets'}</div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#314f67]"><Wrench className="h-5 w-5 text-[#0c3151]" /> Supply & Installation Support</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 self-start">
              <div className="relative col-span-3 min-h-[340px] overflow-hidden rounded-md bg-slate-100 sm:min-h-[430px]">
                <Image src={heroImage} alt="PVC coated chain link fence with green posts and security topping" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 720px" priority />
              </div>
              <div className="relative min-h-[115px] overflow-hidden rounded-md bg-slate-100 sm:min-h-[145px]">
                <Image src={perimeterImage} alt="Green PVC coated chain link fence perimeter" fill className="object-cover" sizes="240px" />
              </div>
              <div className="relative min-h-[115px] overflow-hidden rounded-md bg-slate-100 sm:min-h-[145px]">
                <Image src={detailImage} alt="PVC coated chain link fence gate and post details" fill className="object-cover" sizes="240px" />
              </div>
              <div className="relative min-h-[115px] overflow-hidden rounded-md bg-slate-100 sm:min-h-[145px]">
                <Image src={securityImage} alt="PVC coated chain link fence with barbed wire security topping" fill className="object-cover" sizes="240px" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-[#fbfdff]">
          <div className="container mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 md:grid-cols-3 lg:grid-cols-6 lg:px-8">
            <Highlight icon={Layers3} title="PVC Coated Galvanized Wire" />
            <Highlight icon={ShieldCheck} title="Durable Outdoor Finish" />
            <Highlight icon={Wind} title="Good Visibility & Airflow" />
            <Highlight icon={Ruler} title="Custom Heights Available" />
            <Highlight icon={LockKeyhole} title="Security Topping Option" />
            <Highlight icon={Wrench} title="Supply & Installation Support" />
          </div>
        </section>

        <section className="bg-white py-14 lg:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle>Available Coating Options</SectionTitle>
            <div className="grid gap-5 md:grid-cols-3">
              <div className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md"><Image src={perimeterImage} alt="Green PVC coated finish" fill className="object-cover" sizes="96px" /></div>
                <div><h3 className="font-extrabold text-[#17364f]">Green PVC Coated</h3><p className="mt-2 text-sm leading-6 text-slate-600">Standard protective and aesthetic finish for perimeter fencing. Other colours are subject to project requirement.</p></div>
              </div>
              <div className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-md bg-slate-100"><Layers3 className="h-10 w-10 text-slate-500" /></div>
                <div><h3 className="font-extrabold text-[#17364f]">Galvanized Steel Core</h3><p className="mt-2 text-sm leading-6 text-slate-600">Galvanized steel wire forms the structural base beneath the PVC protective coating.</p></div>
              </div>
              <div className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md"><Image src={detailImage} alt="PVC chain link post and accessory options" fill className="object-cover" sizes="96px" /></div>
                <div><h3 className="font-extrabold text-[#17364f]">Project-Based Options</h3><p className="mt-2 text-sm leading-6 text-slate-600">Matching posts, accessories, gates, top rails and security toppings can be configured to project requirements.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white pb-14 lg:pb-16">
          <div className="container mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <SectionTitle>Details / Specifications</SectionTitle>
              <div className="overflow-hidden rounded-lg border border-slate-200">
                <table className="w-full text-left text-sm">
                  <tbody className="divide-y divide-slate-200">
                    {[
                      ['Product Type', 'PVC Coated Chain Link Fence'],
                      ['Mesh Type', 'Woven Diamond Mesh'],
                      ['Base Wire', 'Galvanized Steel Wire'],
                      ['Coating', 'PVC Coated'],
                      ['Mesh Opening', '25 mm to 65 mm; common options include 50 × 50 mm and 25 × 25 mm'],
                      ['Wire Diameter', 'Project-based options from 2.5 mm to 4.75 mm'],
                      ['Fence Heights', 'Commonly 2 m to 3.0 m; project heights from 1.0 m to 3.95 m'],
                      ['Colour', 'Green commonly available; other colours subject to requirement'],
                      ['Top Support', 'Top rail / tension wire as required'],
                      ['Security Option', 'Barbed wire / other security toppings'],
                      ['Installation', 'Supply only or supply & installation'],
                    ].map(([label, value]) => (
                      <tr key={label}>
                        <th className="w-[35%] bg-slate-50 px-4 py-3 font-extrabold text-[#17364f]">{label}</th>
                        <td className="px-4 py-3 leading-6 text-slate-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                The exact mesh opening, wire diameter, height and coating specification should be selected according to the project requirement rather than assumed as one standard specification.
              </p>
            </div>

            <div>
              <SectionTitle>Fence Post & Support System</SectionTitle>
              <div className="grid grid-cols-2 gap-x-7 gap-y-4 rounded-lg border border-slate-200 bg-white p-6">
                {supportItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-[#294960]">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e52b3d] text-white"><CheckCircle2 className="h-3.5 w-3.5" /></span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-3 rounded-md bg-[#eef5f8] p-4 text-sm leading-6 text-[#456176]">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#0c3151]" />
                <p>Post size, spacing and foundation arrangement should be selected according to fence height, site conditions, wind exposure, application and project requirements.</p>
              </div>
              <div className="mt-5 relative min-h-[245px] overflow-hidden rounded-lg bg-slate-100">
                <Image src={detailImage} alt="PVC coated chain link fence post, mesh and gate support system" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 600px" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fbfdff] py-14 lg:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle>Key Features</SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {featureCards.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm">
                  <Icon className="mx-auto h-8 w-8 text-[#0c3151]" strokeWidth={1.8} />
                  <h3 className="mt-4 text-sm font-extrabold text-[#17364f]">{title}</h3>
                  <p className="mt-3 text-xs leading-5 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle>Typical Applications</SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {applications.map(({ title, description, image, icon: Icon }) => (
                <div key={title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-40"><Image src={image} alt={`${title} application for PVC coated chain link fencing`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 240px" /></div>
                  <div className="p-4"><div className="flex items-center gap-2"><Icon className="h-5 w-5 text-[#0c3151]" /><h3 className="font-extrabold text-[#17364f]">{title}</h3></div><p className="mt-2 text-sm leading-5 text-slate-600">{description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#063d61] to-[#075b83] py-12 text-white lg:py-14">
          <div className="container mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold">Security Options</h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-[#e52b3d]" />
              <p className="mt-6 max-w-lg leading-7 text-white/85">For higher-security applications, the PVC-coated chain-link fence can be supplied with angled arms and barbed wire or other security toppings while maintaining the basic chain-link fence structure.</p>
              <Button asChild className="mt-7 w-fit rounded-md bg-[#e52b3d] px-6 py-5 font-extrabold text-white hover:bg-[#c91f31]"><Link href="/rfq">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative min-h-[280px] overflow-hidden rounded-md"><Image src={securityImage} alt="PVC coated chain link fence with security topping" fill className="object-cover" sizes="50vw" /></div>
              <div className="relative min-h-[280px] overflow-hidden rounded-md"><Image src={heroImage} alt="PVC coated chain link fence perimeter security system" fill className="object-cover" sizes="50vw" /></div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle>Why Choose SRK Fence?</SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Professional fencing supply and installation support', Wrench],
                [country ? `Project enquiry support for ${country.country}` : 'Suitable for UAE and regional projects', MapPin],
                ['Multiple chain-link configurations', Settings2],
                ['Custom quotation based on project requirements', FileText],
              ].map(([text, Icon]) => {
                const C = Icon as typeof Wrench;
                return <div key={text as string} className="flex items-center gap-4 rounded-lg border border-slate-200 bg-[#fbfdff] p-5 shadow-sm"><C className="h-7 w-7 shrink-0 text-[#e52b3d]" /><span className="text-sm font-bold leading-5 text-[#294960]">{text as string}</span></div>;
              })}
            </div>
          </div>
        </section>

        {country && (
          <section className="border-y border-slate-200 bg-[#fbfdff] py-12">
            <div className="container mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
              <div>
                <SectionTitle>Project Support in {country.country}</SectionTitle>
                <p className="max-w-2xl text-sm leading-7 text-slate-600">
                  For {country.country} enquiries, the PVC coated chain link fence specification can be reviewed around project length, height, mesh opening, wire diameter, post and gate requirements, security topping and the required supply or installation scope.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Country focus: {country.buyerIntent}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#17364f]">Key enquiry locations</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {country.cities.map((city) => (
                    <span key={city} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-[#36566d] shadow-sm">
                      <MapPin className="h-4 w-4 text-[#e52b3d]" /> {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="bg-white pb-14 pt-14 lg:pb-16 lg:pt-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle>Available in All SRK Fence Markets</SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8">
              {countryPages.map((item) => (
                <Link
                  key={item.slug}
                  href={`/countries/${item.slug}/pvc-coated-chain-link-fence`}
                  className={`rounded-lg border p-4 transition hover:-translate-y-0.5 hover:border-[#e52b3d] hover:shadow-md ${country?.slug === item.slug ? 'border-[#e52b3d] bg-red-50' : 'border-slate-200 bg-white'}`}
                >
                  <div className="text-2xl">{countryFlags[item.country] || '🌍'}</div>
                  <h3 className="mt-3 text-sm font-extrabold text-[#17364f]">{item.country}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">Project enquiries for {item.cities.slice(0, 3).join(', ')} and other locations.</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fbfdff] py-14 lg:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm">
                  <summary className="cursor-pointer list-none pr-6 text-sm font-extrabold text-[#17364f]">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#063d61] py-8 text-white">
          <div className="container mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
            <div><h2 className="text-2xl font-extrabold">Need a Quote for Your Project?</h2><p className="mt-2 text-sm text-white/80">Share your fence length, height, mesh opening, wire diameter, posts, gates, security topping and project location.</p></div>
            <div className="flex gap-3"><Button asChild className="rounded-md bg-[#e52b3d] px-6 py-5 font-extrabold text-white hover:bg-[#c91f31]"><Link href="/rfq">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild variant="outline" className="rounded-md border-white/70 bg-transparent px-6 py-5 font-extrabold text-white hover:bg-white hover:text-[#063d61]"><Link href="/contact">Contact Us</Link></Button></div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
