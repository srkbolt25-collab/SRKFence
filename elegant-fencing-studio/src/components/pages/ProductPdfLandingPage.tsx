import { ArrowLeft, CheckCircle2, FileText } from 'lucide-react';
import Link from 'next/link';
import SiteLayout from '@/components/SiteLayout';
import StructuredData from '@/components/StructuredData';
import ProductHeroSlider from '@/components/pages/CoatingMaterialsHeroSlider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ProductSeoPage } from '@/lib/seo';
import { buildBreadcrumbSchema, buildFaqSchema, buildProductSchema } from '@/lib/seo';
import { getPdfProductContent, type PdfProductContent } from '@/lib/pdfProductContent';

type ProductPdfLandingPageProps = {
  product: ProductSeoPage;
};

type SeoFaq = {
  question: string;
  answer: string;
};

type GccCountry = {
  label: string;
  href: string;
  regionalNeed: string;
};

type ProductRegionalProfile = {
  regionalIntro: string;
  procurementNote: string;
  countryAngle: string;
  projectFit: string;
};

const gccCountries: GccCountry[] = [
  {
    label: 'UAE',
    href: '/countries/uae',
    regionalNeed: 'Dubai, Abu Dhabi, Sharjah and other UAE emirates where heat, dust, coastal exposure and fast project timelines often influence product selection',
  },
  {
    label: 'Bahrain',
    href: '/countries/bahrain',
    regionalNeed: 'Bahrain coastal, commercial and industrial sites where corrosion protection and clean finishing are important for long service life',
  },
  {
    label: 'Qatar',
    href: '/countries/qatar',
    regionalNeed: 'Qatar infrastructure, commercial, logistics and perimeter projects that require consistent product quality and project-specific specifications',
  },
  {
    label: 'Kuwait',
    href: '/countries/kuwait',
    regionalNeed: 'Kuwait outdoor, industrial and boundary applications where heat, dust and open-site exposure should be considered during specification',
  },
  {
    label: 'Saudi Arabia',
    href: '/countries/saudi-arabia',
    regionalNeed: 'Saudi Arabia construction, industrial, infrastructure and security projects that commonly require scalable supply and finish options',
  },
  {
    label: 'Iraq',
    href: '/countries/iraq',
    regionalNeed: 'Iraq utility, commercial, boundary and industrial projects where durable perimeter materials and practical installation compatibility matter',
  },
  {
    label: 'Oman',
    href: '/countries/oman',
    regionalNeed: 'Oman coastal, residential, commercial and infrastructure applications where weather resistance and appearance may both be required',
  },
  {
    label: 'Jordan',
    href: '/countries/jordan',
    regionalNeed: 'Jordan residential, commercial, industrial and public-area fencing works that require clear specifications and dependable finish options',
  },
];

const productRegionalProfiles: Record<string, ProductRegionalProfile> = {
  'fence-posts-gi-ms-pvc': {
    regionalIntro:
      'For GCC fencing projects, Fence Posts (G.I. / M.S. / PVC) should be selected according to the fence type, post profile, finish and installation method required on site. The product specifications highlight G.I., M.S. and PVC post options, making this page suitable for buyers comparing structural post choices for chain-link, welded mesh, privacy, decorative and security fencing.',
    procurementNote:
      'For quotation review, share the required material, profile, length, finish, colour, accessories and whether posts will be embedded or surface mounted.',
    countryAngle: 'post material, coating and installation method can be matched to local climate, fence type and site layout',
    projectFit: 'chain-link, welded mesh, privacy, decorative, boundary and security fencing projects',
  },
  'panel-post-system': {
    regionalIntro:
      'For GCC projects that need a complete modular fence line, Panel & Post System content should focus on welded mesh panels, supporting posts, secure fixing accessories and long-term outdoor performance. It is useful for buyers who want a ready framework rather than separate panel and post items.',
    procurementNote:
      'Share panel height, width, mesh configuration, post type, fixing method, coating and colour requirements so the system can be reviewed as a complete package.',
    countryAngle: 'panel configuration, post type and fixing method can be adjusted for perimeter layout, visibility and security requirement',
    projectFit: 'residential compounds, commercial properties, warehouses, schools, parks, sports facilities and infrastructure boundaries',
  },
  'high-security-gate-systems': {
    regionalIntro:
      'High-Security Gate Systems should be positioned for GCC sites where controlled access, heavy-duty construction and integration with perimeter fencing are important. The product specifications cover swing gates, sliding gates, single-leaf and double-leaf configurations with hinges, locks, posts and access-control compatibility.',
    procurementNote:
      'For accurate review, provide gate opening width, height, operation type, infill type, locking requirement, automation requirement and finish specification.',
    countryAngle: 'gate configuration, frame strength and locking arrangement can be selected around access control, vehicle movement and perimeter security needs',
    projectFit: 'industrial facilities, warehouses, airports, data centers, utility sites, government areas and restricted-access projects',
  },
  'post-and-railing-system': {
    regionalIntro:
      'The Chain-Link Fence Post & Rail System is relevant for GCC perimeter projects where the chain-link mesh needs additional support from vertical posts and top/bottom rails. The product specifications focus on framework stability, rail support, clamps, caps and fixing accessories.',
    procurementNote:
      'Share post diameter, railing size, finish, rail layout, accessory list and installation method to prepare a proper project quotation.',
    countryAngle: 'post, rail and accessory selection can be matched to chain-link height, mesh tension and perimeter layout',
    projectFit: 'industrial perimeters, commercial properties, construction sites, sports areas and residential or commercial boundaries',
  },
  'pvc-decorative-fence': {
    regionalIntro:
      'PVC Decorative Fence pages should target GCC buyers looking for attractive, low-maintenance fencing for villas, gardens, landscaped areas and commercial frontages. The product specifications include picket, rail, privacy, semi-privacy and decorative style options.',
    procurementNote:
      'For enquiries, share the required style, colour, height, width, privacy level and project area so the decorative layout can be reviewed.',
    countryAngle: 'style, colour and privacy level can be aligned with architecture, landscape design and outdoor exposure',
    projectFit: 'villas, gardens, parks, pool areas, patios, commercial properties and decorative screening applications',
  },
  'pvc-privacy-fence': {
    regionalIntro:
      'PVC Privacy Fence should be written for GCC residential, villa, garden and commercial buyers who need solid visual screening with a clean finish. The product specifications focus on privacy panels, PVC posts, rails, post caps and colour/profile options.',
    procurementNote:
      'Share the required privacy height, panel profile, colour, width, post layout and fixing/accessory requirements for quotation review.',
    countryAngle: 'panel profile, colour and height can be selected according to privacy requirement, property design and outdoor weather exposure',
    projectFit: 'residential properties, villas, gardens, pool areas, patios, commercial boundaries and landscape privacy enclosures',
  },
  'rectangle-mesh-fence': {
    regionalIntro:
      'Rectangle Mesh Fence should support GCC searches for welded wire fencing with clear visibility, clean appearance and perimeter security. The product specifications keep sizes flexible by project requirement and focus on wire diameter, mesh opening, panel height, posts and coating options.',
    procurementNote:
      'For RFQs, provide wire diameter, mesh opening, panel height/width, post type, coating, colour and project application.',
    countryAngle: 'wire diameter, mesh opening, panel size and coating can be selected around security level, visibility and outdoor exposure',
    projectFit: 'residential, commercial, industrial, school, park, sports, airport and infrastructure fencing projects',
  },
  'fasteners-bolts': {
    regionalIntro:
      'Fasteners / Bolts content should support GCC procurement teams ordering fixing components for chain-link fences, welded mesh fences, fence posts, rails, clamps, brackets and gates. The product specifications cover bolts, nuts, washers, screws, materials and finishes.',
    procurementNote:
      'Share bolt type, size, material, grade, finish, washer/nut requirement and application area for accurate matching.',
    countryAngle: 'material, finish and thread/size selection can be aligned with outdoor use, fence hardware and structural fixing requirement',
    projectFit: 'posts, rails, clamps, brackets, fence panels, gates, security fencing and perimeter fencing assemblies',
  },
  'anti-climb-358-fence': {
    regionalIntro:
      'Anti-Climb 358 Security Fence content should be tailored for GCC high-security perimeter projects that require tight mesh openings, visibility and anti-tamper fixing options. The product specifications highlight 358 welded mesh, security posts, fixings and optional security accessories.',
    procurementNote:
      'Share panel height, mesh configuration, post type, fixing system, coating, colour and any required security toppings or gates.',
    countryAngle: 'panel height, fixing system, coating and compatible security accessories can be reviewed around high-security perimeter requirements',
    projectFit: 'airports, utilities, industrial plants, data centers, government sites, transport infrastructure and logistics facilities',
  },
  'temporary-fence-panels': {
    regionalIntro:
      'Temporary Fence Panels content should focus on GCC sites that need portable, reusable and quickly installed fencing. The product specifications cover welded mesh, chain-link temporary fence, G.I. hoarding, ECO PVC fence, concrete bases and temporary connections.',
    procurementNote:
      'Share fence type, panel size, mesh opening, wire diameter, base requirement, coating and project duration for quotation review.',
    countryAngle: 'panel type, base support and connection method can be selected for temporary site control, relocation and outdoor durability',
    projectFit: 'construction sites, road works, events, restricted areas, storage yards, crowd management and temporary security perimeters',
  },
  'barbed-wire': {
    regionalIntro:
      'Barbed Wire (GI / PVC) should target GCC boundary and perimeter projects that require an added deterrent above or along existing fencing. The product specifications cover GI and PVC-coated options, barb spacing, 2-point/4-point configuration, coils and installation positions.',
    procurementNote:
      'For quotations, share material, finish, barb configuration, coil/roll quantity, colour and the fence or wall where it will be used.',
    countryAngle: 'GI or PVC-coated finish, barb configuration and installation position can be selected around deterrent level and outdoor exposure',
    projectFit: 'industrial boundaries, warehouses, agricultural properties, construction sites, utility areas, perimeter walls and security compounds',
  },
  'razor-wire': {
    regionalIntro:
      'Razor Wire content should focus on GCC high-security boundary projects where a strong perimeter deterrent is required. The product specifications cover G.I. and S.S. materials, 50 cm, 75 cm and 100 cm coil sizes, blade profile and fence/wall/gate installation options.',
    procurementNote:
      'Share material, coil diameter, quantity, blade profile requirement, installation location and project security level for review.',
    countryAngle: 'material, coil diameter and installation arrangement can be matched to perimeter security level and exposure conditions',
    projectFit: 'industrial facilities, data centers, airports, utilities, restricted-access sites, boundary walls and high-security fencing',
  },
  'base-plates': {
    regionalIntro:
      'Base Plates content should support GCC buyers specifying secure post-to-ground fixing for fence posts, gate posts, railing posts and steel structures. The product specifications include square, round, socket, U-bracket, gusseted and custom base plate options.',
    procurementNote:
      'Share post/tube size, base plate shape, thickness, hole pattern, socket diameter, anchor type and finish requirement.',
    countryAngle: 'plate shape, hole pattern, thickness and finish can be matched to post type, load requirement and installation surface',
    projectFit: 'chain-link fencing, welded mesh fencing, gate posts, railing systems, steel gates and perimeter fencing projects',
  },
  'fence-accessories': {
    regionalIntro:
      'Fence Accessories content should serve GCC project teams looking for the supporting hardware needed to assemble and maintain chain-link and welded mesh fence systems. The product specifications cover posts, rails, clamps, tension bars, post caps, bolts, nuts, washers and other fixing accessories.',
    procurementNote:
      'For RFQs, share the fence type, accessory list, finish, quantity, colour and any required drawings or fixing details.',
    countryAngle: 'accessory selection can be matched to chain-link or welded mesh systems, fixing method and required finish consistency',
    projectFit: 'new fence installation, maintenance, repairs, industrial fencing, sports areas, agricultural boundaries and infrastructure projects',
  },
  'colors-and-coating-options': {
    regionalIntro:
      'Colors & Coating Options content should help GCC buyers compare finish systems such as electro galvanized, hot-dip galvanized, PVC coated and powder coated surfaces. The product specifications explain where each option is best suited, including indoor, outdoor, security, decorative and architectural applications.',
    procurementNote:
      'Share the product type, exposure condition, preferred coating, colour/RAL requirement, thickness expectation and project application.',
    countryAngle: 'coating and colour selection can be matched to corrosion protection, appearance, UV exposure and project environment',
    projectFit: 'chain-link, welded mesh, security fencing, decorative fencing, gates, commercial projects and outdoor boundary systems',
  },
  'coating-materials': {
    regionalIntro:
      'Coating Materials content should target GCC buyers sourcing protective coating solutions for fencing products and steel components. The product specifications include PVC coating, PE coating, powder coating, zinc coating, hot-dip galvanizing and green powder coating.',
    procurementNote:
      'For quotation, share coating type, product being coated, colour, thickness, finish, application method and project exposure conditions.',
    countryAngle: 'coating type, thickness, finish and colour can be selected around corrosion resistance, weather exposure and appearance requirements',
    projectFit: 'chain-link fences, welded mesh, fence wires, steel pipes, fence posts, gates, railings and steel structures',
  },
  'gabion-wall-and-fencing': {
    regionalIntro:
      'Gabion Wall & Fencing content should be written for GCC projects requiring retaining support, boundary walls, natural stone appearance or fencing above a gabion base. The product specifications cover welded or woven gabion mesh, galvanized/PVC finish, stone filling and optional fencing above the gabion.',
    procurementNote:
      'Share gabion dimensions, mesh type, wire diameter, mesh opening, stone filling requirement, finish and whether fencing is required above the gabion wall.',
    countryAngle: 'gabion mesh, stone filling, finish and fencing-above-gabion options can be matched to retaining, boundary or landscape requirements',
    projectFit: 'retaining walls, boundary walls, landscape projects, roads, commercial developments, residential projects and erosion-control areas',
  },
  'clamps-and-connectors': {
    regionalIntro:
      'Clamps & Connectors content should support GCC buyers ordering connection hardware for chain-link and welded mesh fence assembly. The product specifications cover post clamps, rail clamps, U-bolt clamps, saddle clamps, corner/T/cross connectors, brackets and customized connectors.',
    procurementNote:
      'Share connection type, compatible post/rail profile, hole pattern, finish, size, thickness and fastener requirements.',
    countryAngle: 'connector type, compatible post/rail size and finish can be matched to mechanical fixing and fence system layout',
    projectFit: 'post-to-mesh, post-to-rail, rail-to-rail, panel-to-post, corner and T-connection applications',
  },
  'gate-hinges-and-locks': {
    regionalIntro:
      'Gate Hinges content should target GCC projects where smooth gate movement, secure gate alignment and durable hardware are required for fence gates. The product specifications cover butt hinges, heavy-duty hinges, weld-on hinges, adjustable hinges, T-hinges, strap hinges, pivot hinges and spring hinges.',
    procurementNote:
      'Share hinge type, gate weight/size, material, mounting method, pin type, finish and adjustment requirement for proper review.',
    countryAngle: 'hinge design, mounting method, load capacity and finish can be matched to gate type and outdoor service requirement',
    projectFit: 'chain-link gates, welded mesh gates, security gates, industrial gates, compound gates, garden gates and commercial entrances',
  },
};

function getProductProfile(pdfContent: PdfProductContent): ProductRegionalProfile {
  return productRegionalProfiles[pdfContent.slug] || {
    regionalIntro:
      `${pdfContent.title} can be reviewed for GCC projects using the product description, available options, specifications, key features and applications from the product specifications.`,
    procurementNote:
      'For quotation review, share the project location, quantity, required finish, technical specification and site exposure details.',
    countryAngle: 'specifications and finish options can be matched to project application and site condition',
    projectFit: pdfContent.applications.slice(0, 6).join(', ') || 'fencing and perimeter applications',
  };
}

function getOptionSummary(pdfContent: PdfProductContent) {
  if (pdfContent.options && pdfContent.options.length > 0) {
    return pdfContent.options.map((option) => option.title).slice(0, 6).join(', ');
  }

  const finishSpec = pdfContent.specs.find((spec) => /finish|coating|material|type/i.test(spec.label));
  return finishSpec ? `${finishSpec.label}: ${finishSpec.value}` : 'options can be selected as per project requirement';
}

function getCustomizationText(pdfContent: PdfProductContent) {
  const customization = pdfContent.specs.find((spec) => /custom/i.test(spec.label));
  if (customization) return customization.value;

  const sizeOrHeight = pdfContent.specs.find((spec) => /size|height|width|diameter|opening|color|colour|finish/i.test(spec.label));
  if (sizeOrHeight) return `${sizeOrHeight.label}, ${sizeOrHeight.value}`;

  return 'project requirement, site condition, quantity and required finish';
}

function buildSeoFaqs(pdfContent: PdfProductContent): SeoFaq[] {
  const productName = pdfContent.title;
  const applications = pdfContent.applications.slice(0, 5).join(', ');
  const options = getOptionSummary(pdfContent);
  const customization = getCustomizationText(pdfContent);
  const profile = getProductProfile(pdfContent);

  return [
    {
      question: `What is ${productName} used for?`,
      answer: `${productName} is used for ${applications || profile.projectFit}. The product details, applications and specifications shown on this page follow the product specifications.`,
    },
    {
      question: `Which options are available for ${productName}?`,
      answer: `Available options include ${options}. Final selection can be reviewed based on project application, finish requirement, site exposure and the technical specifications listed on this page.`,
    },
    {
      question: `Can ${productName} be customized for project requirements?`,
      answer: `Yes. Customization can be reviewed for ${customization}, depending on the product type and listed specification range.`,
    },
    {
      question: `Can SRK Fence support ${productName} enquiries across GCC countries?`,
      answer: `Yes. ${profile.procurementNote} SRK Fence can review enquiries for UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan.`,
    },
  ];
}

function buildGccMarketText(pdfContent: PdfProductContent, country: GccCountry) {
  const profile = getProductProfile(pdfContent);
  return `For ${country.label}, ${pdfContent.title} is suitable for ${profile.projectFit}. In ${country.regionalNeed}, ${profile.countryAngle}. ${profile.procurementNote}`;
}

function buildGccIntroText(pdfContent: PdfProductContent) {
  return getProductProfile(pdfContent).regionalIntro;
}

function buildGccProcurementText(pdfContent: PdfProductContent) {
  return getProductProfile(pdfContent).procurementNote;
}

export default function ProductPdfLandingPage({ product }: ProductPdfLandingPageProps) {
  const pdfContent = getPdfProductContent(product.slug);

  if (!pdfContent) {
    return null;
  }

  const seoFaqs = buildSeoFaqs(pdfContent);

  return (
    <>
      <StructuredData
        data={[
          buildProductSchema(product),
          buildFaqSchema(seoFaqs),
          buildBreadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: pdfContent.title, href: `/products/${product.slug}` },
          ]),
        ]}
      />
      <SiteLayout>
        <section className="border-b border-border bg-background">
          <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
              <div className="space-y-6">
                <Button asChild variant="ghost" className="px-0 text-muted-foreground hover:text-foreground">
                  <Link href="/products">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Products
                  </Link>
                </Button>
                <div>
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                    {pdfContent.category}
                  </p>
                  <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                    {pdfContent.title}
                  </h1>
                </div>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  {pdfContent.shortDescription}
                </p>
                <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
                  {pdfContent.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <Button
                  asChild
                  size="lg"
                  className="h-auto rounded-xl bg-gradient-to-r from-[#c5162a] to-[#e63946] px-8 py-5 font-bold uppercase tracking-wide text-white hover:shadow-glow"
                >
                  <Link href="/contact">
                    Request Quote
                    <FileText className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <ProductHeroSlider slides={pdfContent.imageSlides} />
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
            {pdfContent.options && pdfContent.options.length > 0 && (
              <Card className="rounded-lg border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">{pdfContent.optionsTitle || 'Available Options'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {pdfContent.options.map((option) => (
                      <div key={`${option.title}-${option.description || ''}`} className="rounded-lg border border-border bg-muted/30 p-5">
                        <h2 className="mb-2 text-lg font-bold text-foreground">{option.title}</h2>
                        {option.description && <p className="text-sm leading-relaxed text-muted-foreground">{option.description}</p>}
                        {option.bullets && option.bullets.length > 0 && (
                          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                            {option.bullets.map((bullet) => (
                              <li key={bullet} className="flex gap-2">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="rounded-lg border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Details / Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto rounded-md border border-border">
                  <table className="w-full min-w-[720px] text-left text-sm">
                    <tbody className="divide-y divide-border">
                      {pdfContent.specs.map((spec) => (
                        <tr key={`${spec.label}-${spec.value}`} className="align-top">
                          <th className="w-[260px] bg-muted/30 px-4 py-3 font-bold text-foreground">{spec.label}</th>
                          <td className="px-4 py-3 text-muted-foreground">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-8 lg:grid-cols-2">
              {pdfContent.keyFeatures.length > 0 && (
                <Card className="rounded-lg border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl">Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {pdfContent.keyFeatures.map((feature) => (
                        <div key={feature} className="flex gap-3 rounded-md bg-muted px-3 py-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {pdfContent.applications.length > 0 && (
                <Card className="rounded-lg border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl">Typical Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {pdfContent.applications.map((application) => (
                        <div key={application} className="flex items-center gap-3 rounded-md border border-border px-3 py-3 text-sm font-semibold text-foreground">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          {application}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {pdfContent.extraSections && pdfContent.extraSections.length > 0 && (
              <div className="grid gap-8 lg:grid-cols-2">
                {pdfContent.extraSections.map((section) => (
                  <Card key={section.title} className="rounded-lg border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="leading-relaxed">{paragraph}</p>
                      ))}
                      {section.bullets && section.bullets.length > 0 && (
                        <div className="grid gap-3 sm:grid-cols-2">
                          {section.bullets.map((bullet) => (
                            <div key={bullet} className="flex gap-3 rounded-md bg-muted px-3 py-3 text-sm text-muted-foreground">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {section.table && section.table.length > 0 && (
                        <div className="overflow-x-auto rounded-md border border-border">
                          <table className="w-full min-w-[620px] text-left text-sm">
                            <tbody className="divide-y divide-border">
                              {section.table.map((row) => (
                                <tr key={`${row.label}-${row.value}`} className="align-top">
                                  <th className="w-[220px] bg-muted/30 px-4 py-3 font-bold text-foreground">{row.label}</th>
                                  <td className="px-4 py-3 text-muted-foreground">{row.value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="bg-muted/25 py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
            <Card className="rounded-lg border-border bg-background">
              <CardHeader>
                <CardTitle className="text-2xl">Available in GCC Countries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-muted-foreground">
                <p className="leading-relaxed">{buildGccIntroText(pdfContent)}</p>
                <p className="leading-relaxed">
                  {buildGccProcurementText(pdfContent)} This section is written as visible buyer guidance for GCC supply enquiries and supports the product description, options, specifications, key features and typical applications above.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {gccCountries.map((country) => (
                    <Link
                      key={country.href}
                      href={country.href}
                      className="rounded-lg border border-border bg-muted/20 p-4 transition hover:border-primary hover:bg-background"
                    >
                      <h2 className="mb-2 text-base font-bold text-foreground">{country.label}</h2>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {buildGccMarketText(pdfContent, country)}
                      </p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-lg border-border bg-background">
              <CardHeader>
                <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 lg:grid-cols-2">
                  {seoFaqs.map((faq) => (
                    <div key={faq.question} className="rounded-lg border border-border bg-muted/20 p-5">
                      <h2 className="mb-2 text-lg font-bold text-foreground">{faq.question}</h2>
                      <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
