import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';
import StructuredData from '@/components/StructuredData';
import ProductHeroSlider from '@/components/pages/CoatingMaterialsHeroSlider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ProductSeoPage } from '@/lib/seo';
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildProductSchema,
  buildServiceSchema,
  getProductKeywordSet,
} from '@/lib/seo';

type ProductSeoLandingPageProps = {
  product: ProductSeoPage;
};

export default function ProductSeoLandingPage({ product }: ProductSeoLandingPageProps) {
  const targetedKeywords = getProductKeywordSet(product);
  const heroSlides = product.imageGallery && product.imageGallery.length > 0
    ? product.imageGallery.map((image) => ({ src: image.src, alt: image.alt }))
    : [{ src: product.image, alt: `${product.name} supplier in Dubai UAE` }];
  const faqItems = [...product.faqs, ...(product.buyerQuestions || [])];
  const marketLinks = product.availableMarkets && product.availableMarkets.length > 0
    ? product.availableMarkets
    : [
        { label: 'UAE', href: '/countries/uae' },
        { label: 'Bahrain', href: '/countries/bahrain' },
        { label: 'Qatar', href: '/countries/qatar' },
        { label: 'Kuwait', href: '/countries/kuwait' },
        { label: 'Saudi Arabia', href: '/countries/saudi-arabia' },
        { label: 'Iraq', href: '/countries/iraq' },
        { label: 'Oman', href: '/countries/oman' },
        { label: 'Jordan', href: '/countries/jordan' },
      ];

  return (
    <>
      <StructuredData
        data={[
          buildProductSchema(product),
          buildFaqSchema(faqItems),
          buildServiceSchema(product.h1, product.shortDescription, `/products/${product.slug}`, undefined, targetedKeywords),
          buildBreadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: product.name, href: `/products/${product.slug}` },
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
                    {product.category}
                  </p>
                  <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                    {product.h1}
                  </h1>
                </div>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  {product.shortDescription}
                </p>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {product.intro}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
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
                  <Button asChild size="lg" variant="outline" className="h-auto rounded-xl px-8 py-5 font-bold">
                    <Link href="/applications">
                      View Applications
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <ProductHeroSlider slides={heroSlides} />
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
            {product.materialOptions && product.materialOptions.length > 0 && (
              <Card className="rounded-lg border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Available Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {product.materialOptions.map((option) => (
                      <div key={option.title} className="rounded-lg border border-border bg-muted/30 p-5">
                        <h2 className="mb-2 text-lg font-bold text-foreground">{option.title}</h2>
                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{option.description}</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {option.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-2">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
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
                      {product.specs.map((spec) => (
                        <tr key={spec.label} className="align-top">
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
              {product.keyFeatures && product.keyFeatures.length > 0 && (
                <Card className="rounded-lg border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl">Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {product.keyFeatures.map((feature) => (
                        <div key={feature} className="flex gap-3 rounded-md bg-muted px-3 py-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="rounded-lg border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Typical Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {product.applications.map((application) => (
                      <Link
                        key={application.href}
                        href={application.href}
                        className="flex items-center gap-3 rounded-md border border-border px-3 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        {application.label}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {marketLinks.length > 0 && (
          <section className="bg-muted/25 py-16 lg:py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Card className="rounded-lg border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Available In: UAE & GCC Countries</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    SRK Fence supplies {product.name.toLowerCase()} for UAE and GCC project buyers, contractors,
                    fabricators, distributors and site teams. Quotations can be prepared based on product type,
                    dimensions, coating, quantity, delivery country and project specification.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Supply support is available across UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan.
                    Buyers can share drawings, BOQ, finish requirements, site exposure details and delivery location for a
                    more accurate quotation.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {marketLinks.map((market) => (
                      <Link
                        key={market.href}
                        href={market.href}
                        className="rounded-md border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                      >
                        {market.label}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {faqItems.length > 0 && (
          <section className="bg-background py-16 lg:py-20">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-extrabold text-foreground">Frequently Asked Questions</h2>
                <p className="mt-3 text-muted-foreground">Answer-first guidance for procurement teams and project buyers.</p>
              </div>
              <div className="grid gap-4">
                {faqItems.map((faq) => (
                  <Card key={faq.question} className="rounded-lg border-border bg-card">
                    <CardHeader>
                      <CardTitle className="text-xl">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="leading-relaxed text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </SiteLayout>
    </>
  );
}
