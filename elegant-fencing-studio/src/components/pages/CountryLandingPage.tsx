import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { CountryPage } from '@/lib/seo';
import {
  arabicKeywordBlocks,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  getCountryKeywordSet,
  productSeoPages,
} from '@/lib/seo';

type CountryLandingPageProps = {
  country: CountryPage;
};

const priorityProducts = productSeoPages.slice(0, 8);

export default function CountryLandingPage({ country }: CountryLandingPageProps) {
  const targetedKeywords = getCountryKeywordSet(country);

  return (
    <>
      <StructuredData
        data={[
          buildServiceSchema(
            `Fencing Supplier in ${country.country}`,
            country.intro,
            `/countries/${country.slug}`,
            [country.country],
            targetedKeywords,
          ),
          buildFaqSchema(country.faqs),
          buildBreadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Countries', href: '/countries' },
            { label: country.country, href: `/countries/${country.slug}` },
          ]),
        ]}
      />
      <SiteLayout>
        <section className="border-b border-border bg-background">
          <div className="container mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="max-w-4xl space-y-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                {country.primaryKeyword}
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Fencing Supplier in {country.country}
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">{country.intro}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-auto rounded-xl bg-gradient-to-r from-[#c5162a] to-[#e63946] px-8 py-5 font-bold uppercase tracking-wide text-white hover:shadow-glow"
                >
                  <Link href="/contact">
                    Request {country.country} Quote
                    <FileText className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-auto rounded-xl px-8 py-5 font-bold">
                  <Link href="/products">
                    View Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-20">
          <div className="container mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)] lg:px-8">
            <div className="space-y-8">
              <Card className="rounded-lg border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Products Supplied to {country.country}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-2">
                  {country.products.map((product) => (
                    <div key={product} className="flex items-start gap-3 rounded-md bg-muted/60 p-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">{product}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="rounded-lg border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Applications Served</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-2">
                  {country.applications.map((application) => (
                    <div key={application} className="rounded-md border border-border px-3 py-2 text-sm font-semibold text-muted-foreground">
                      {application}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="rounded-lg border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Why Source from SRK Fence Dubai/UAE?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {country.whySource.map((reason) => (
                    <div key={reason} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                      <p className="text-muted-foreground">{reason}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="rounded-lg border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Country RFQ Guidance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Request a fencing quotation for {country.country}. Share fence length, height, mesh size, wire
                    diameter, coating requirement, delivery city, installation requirement, timeline and
                    drawings/specifications to receive a custom quote.
                  </p>
                  <p>
                    Common buyer intent: {country.buyerIntent} Service areas include {country.cities.join(', ')} and
                    other project locations by requirement.
                  </p>
                </CardContent>
              </Card>
            </div>

            <aside className="space-y-6">
              <Card className="rounded-lg border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Priority Product Links</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2">
                  {priorityProducts.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className="rounded-md bg-muted px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-primary hover:text-primary-foreground"
                    >
                      {product.name}
                    </Link>
                  ))}
                </CardContent>
              </Card>

              <Card className="rounded-lg border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Keyword Focus</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {targetedKeywords.slice(0, 18).map((keyword) => (
                    <span key={keyword} className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                      {keyword}
                    </span>
                  ))}
                </CardContent>
              </Card>

              <Card className="rounded-lg border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Arabic Keyword Signals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {arabicKeywordBlocks.slice(0, 8).map((keyword) => (
                    <div key={keyword.english} className="flex items-center justify-between gap-3 rounded-md bg-muted px-3 py-2 text-sm">
                      <span className="font-semibold text-muted-foreground">{keyword.english}</span>
                      <span className="font-bold text-foreground" dir="rtl" lang="ar">
                        {keyword.arabic}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-extrabold text-foreground">Fencing FAQs for {country.country}</h2>
              <p className="mt-3 text-muted-foreground">Answer-first content for buyers comparing suppliers and project requirements.</p>
            </div>
            <div className="grid gap-4">
              {country.faqs.map((faq) => (
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
