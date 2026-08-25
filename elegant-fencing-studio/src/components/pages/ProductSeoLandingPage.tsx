import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';
import StructuredData from '@/components/StructuredData';
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

  return (
    <>
      <StructuredData
        data={[
          buildProductSchema(product),
          buildFaqSchema([...product.faqs, ...(product.buyerQuestions || [])]),
          buildServiceSchema(product.h1, product.shortDescription, `/products/${product.slug}`, undefined, targetedKeywords),
          buildBreadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: product.name, href: `/products/${product.slug}` },
          ]),
        ]}
      />
      <SiteLayout>
        <section className="bg-background border-b border-border">
          <div className="container mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)] lg:px-8">
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
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {product.shortDescription}
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
            <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-border bg-muted shadow-sm">
              <Image
                src={product.image}
                alt={`${product.name} supplier in Dubai UAE`}
                fill
                className="object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 520px"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-20">
          <div className="container mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:px-8">
            <div className="space-y-8">
              <Card className="rounded-lg border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Product Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 text-base leading-relaxed text-muted-foreground">
                  <p>{product.intro}</p>
                  <div className="rounded-lg bg-muted p-5">
                    <h2 className="mb-2 text-xl font-bold text-foreground">{product.faqs[0]?.question}</h2>
                    <p>{product.faqs[0]?.answer}</p>
                  </div>
                </CardContent>
              </Card>

              {product.imageGallery && product.imageGallery.length > 0 && (
                <Card className="rounded-lg border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl">Product Options & Images</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {product.imageGallery.map((image) => (
                        <div key={image.src} className="overflow-hidden rounded-lg border border-border bg-muted">
                          <div className="relative h-44 w-full">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-contain p-2"
                              sizes="(max-width: 640px) 100vw, 33vw"
                            />
                          </div>
                          <p className="border-t border-border bg-background px-3 py-3 text-sm font-semibold text-muted-foreground">
                            {image.caption}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {product.materialOptions && product.materialOptions.length > 0 && (
                <Card className="rounded-lg border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl">Material & Finish Options</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4 md:grid-cols-3">
                    {product.materialOptions.map((option) => (
                      <div key={option.title} className="rounded-lg border border-border bg-muted/40 p-4">
                        <h2 className="mb-2 text-lg font-bold text-foreground">{option.title}</h2>
                        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{option.description}</p>
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
                  </CardContent>
                </Card>
              )}

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
                  <CardTitle className="text-2xl">Technical Specification Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[520px] text-left text-sm">
                      <tbody className="divide-y divide-border">
                        {product.specs.map((spec) => (
                          <tr key={spec.label}>
                            <th className="w-1/3 py-3 pr-4 font-bold text-foreground">{spec.label}</th>
                            <td className="py-3 text-muted-foreground">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {product.rfqChecklist && product.rfqChecklist.length > 0 && (
                <Card className="rounded-lg border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl">RFQ Checklist</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {product.rfqChecklist.map((item) => (
                        <div key={item} className="flex gap-3 rounded-md bg-muted px-3 py-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="rounded-lg border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Supply, Installation and RFQ Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    SRK Fence can support supply-only and project installation discussions for Dubai, UAE and GCC
                    markets. The final recommendation depends on product type, site risk, location, material exposure,
                    required security level, coating requirement and access-control needs.
                  </p>
                  <p>{product.rfqPrompt}</p>
                </CardContent>
              </Card>
            </div>

            <aside className="space-y-6">
              <Card className="rounded-lg border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Common Applications</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3">
                  {product.applications.map((application) => (
                    <Link
                      key={application.href}
                      href={application.href}
                      className="flex items-center gap-3 rounded-md border border-border px-3 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {application.label}
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {product.availableMarkets && product.availableMarkets.length > 0 && (
                <Card className="rounded-lg border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">This Product Is Available In</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {product.availableMarkets.map((market) => (
                        <Link
                          key={market.href}
                          href={market.href}
                          className="rounded-md border border-border px-3 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                        >
                          {market.label}
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="rounded-lg border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Related Pages</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2">
                  {product.internalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-md bg-muted px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-primary hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-extrabold text-foreground">Frequently Asked Questions</h2>
              <p className="mt-3 text-muted-foreground">Answer-first guidance for procurement teams and project buyers.</p>
            </div>
            <div className="grid gap-4">
              {[...product.faqs, ...(product.buyerQuestions || [])].map((faq) => (
                <Card key={faq.question} className="rounded-lg border-border bg-background">
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
      </SiteLayout>
    </>
  );
}
