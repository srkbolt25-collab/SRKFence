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

const gccCountries = [
  { label: 'UAE', href: '/countries/uae', market: 'UAE projects including Dubai, Abu Dhabi, Sharjah and other emirates' },
  { label: 'Bahrain', href: '/countries/bahrain', market: 'Bahrain commercial, industrial and infrastructure projects' },
  { label: 'Qatar', href: '/countries/qatar', market: 'Qatar project sites, commercial properties and infrastructure works' },
  { label: 'Kuwait', href: '/countries/kuwait', market: 'Kuwait outdoor, industrial and perimeter fencing requirements' },
  { label: 'Saudi Arabia', href: '/countries/saudi-arabia', market: 'Saudi Arabia construction, industrial and security perimeter projects' },
  { label: 'Iraq', href: '/countries/iraq', market: 'Iraq boundary, utility, commercial and industrial fencing projects' },
  { label: 'Oman', href: '/countries/oman', market: 'Oman coastal, commercial, residential and infrastructure applications' },
  { label: 'Jordan', href: '/countries/jordan', market: 'Jordan residential, commercial, industrial and boundary fencing works' },
];

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

  return [
    {
      question: `What is ${productName} used for?`,
      answer: `${productName} is used for ${applications || 'fencing and perimeter applications'}. The product details, applications and specifications shown on this page are based on the supplied product PDF content.`,
    },
    {
      question: `Which options are available for ${productName}?`,
      answer: `Available options include ${options}. Final selection can be reviewed based on the project application, required finish, site exposure and specification.`,
    },
    {
      question: `Can ${productName} be customized for project requirements?`,
      answer: `Yes. Customization can be reviewed for ${customization}, depending on the product type and project requirement shown in the PDF specifications.`,
    },
    {
      question: `Is ${productName} available for UAE and GCC projects?`,
      answer: `Yes. SRK Fence can support enquiries for ${productName} across UAE and GCC markets including Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan. Share the project location, quantity, required finish and technical requirement for quotation support.`,
    },
  ];
}

function buildGccMarketText(productName: string, market: string) {
  return `${productName} can be supplied for ${market}. Buyers can share project drawings, quantity, finish requirement, site exposure and delivery location for quotation review.`;
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
                <p className="leading-relaxed">
                  SRK Fence can support enquiries for {pdfContent.title} across UAE and GCC markets. The core product description, options, specifications, key features and applications above remain based on the supplied product PDF, while this section helps buyers identify regional supply availability for GCC projects.
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
                        {buildGccMarketText(pdfContent.title, country.market)}
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
