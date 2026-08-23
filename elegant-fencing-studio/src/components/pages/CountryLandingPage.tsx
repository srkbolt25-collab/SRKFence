import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText, MapPin, ShieldCheck } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { CountryPage } from '@/lib/seo';
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema, getCountryKeywordSet } from '@/lib/seo';
import { gccApplicationPages, gccProductPages, getCountryApplicationUrl, getCountryProductUrl } from '@/lib/gccPages';

type CountryLandingPageProps = { country: CountryPage };

export default function CountryLandingPage({ country }: CountryLandingPageProps) {
  const keywordSet = getCountryKeywordSet(country);
  const heroImage = '/Applicationsnew/high-security-boundary-fencing-contractors-gcc.png';

  return (
    <>
      <StructuredData
        data={[
          buildServiceSchema(
            `Fencing Supplier in ${country.country}`,
            country.intro,
            `/countries/${country.slug}`,
            [country.country],
            keywordSet,
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
          <div className="container mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.85fr)] lg:px-8">
            <div className="space-y-6">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Project Fencing Support</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Fencing Supplier in {country.country}
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">{country.intro}</p>
              <p className="leading-relaxed text-muted-foreground">
                SRK Fence helps contractors, consultants, facility managers and procurement teams compare fencing options for supply, installation, accessories, delivery and quotation scope.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-auto rounded-xl bg-gradient-to-r from-[#c5162a] to-[#e63946] px-8 py-5 font-bold uppercase tracking-wide text-white">
                  <Link href="/contact">Request {country.country} Quote <FileText className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-auto rounded-xl px-8 py-5 font-bold">
                  <Link href="/products">View Product Range <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
            <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-border bg-white shadow-sm lg:min-h-[360px]">
              <Image src={heroImage} alt={`Fencing supplier in ${country.country}`} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 520px" priority />
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-20">
          <div className="container mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.85fr)] lg:px-8">
            <div className="space-y-8">
              <Card className="rounded-2xl border-border bg-background shadow-sm">
                <CardHeader><CardTitle className="text-2xl">Products Supplied to {country.country}</CardTitle></CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-2">
                  {country.products.map((product) => (
                    <div key={product} className="flex items-start gap-3 rounded-lg bg-muted/70 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="font-semibold text-foreground">{product}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-border bg-background shadow-sm">
                <CardHeader><CardTitle className="text-2xl">Fencing Solutions by Application</CardTitle></CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-2">
                  {country.applications.map((application) => (
                    <div key={application} className="flex items-start gap-3 rounded-lg border border-border p-4">
                      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="font-semibold text-muted-foreground">{application}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-border bg-background shadow-sm">
                <CardHeader><CardTitle className="text-2xl">Why Source from SRK Fence Dubai/UAE?</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  {country.whySource.map((reason) => (
                    <div key={reason} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-muted-foreground">{reason}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-border bg-background shadow-sm">
                <CardHeader><CardTitle className="text-2xl">Request a Fencing Quote</CardTitle></CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Request a fencing quotation for {country.country}. Share fence length, height, mesh size, wire diameter, coating requirement, delivery city, gate requirement, installation scope, project timeline and any drawings or specifications.
                  </p>
                  <p>
                    Typical project requirements include {country.buyerIntent.toLowerCase()} SRK Fence can review supply-only and installation discussions based on the final site requirement.
                  </p>
                </CardContent>
              </Card>
            </div>

            <aside className="space-y-6">
              <Card className="rounded-2xl border-border bg-background shadow-sm">
                <CardHeader><CardTitle className="text-xl">Service Areas</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  {country.cities.map((city) => (
                    <div key={city} className="flex items-center gap-3 rounded-lg border border-border px-4 py-3">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-foreground">{city}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-border bg-background shadow-sm">
                <CardHeader><CardTitle className="text-xl">Fencing Products in {country.country}</CardTitle></CardHeader>
                <CardContent className="grid gap-2">
                  {gccProductPages.map((product) => (
                    <Link key={product.slug} href={getCountryProductUrl(country.slug, product.slug)} className="rounded-lg bg-muted px-4 py-3 text-sm font-semibold text-muted-foreground hover:bg-primary hover:text-primary-foreground">
                      {product.name}
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-extrabold text-foreground">Explore Fencing Options for {country.country}</h2>
              <p className="mt-3 text-muted-foreground">Select a fencing product or project application to view details, quote requirements and suitable systems for this market.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="rounded-2xl border-border bg-background shadow-sm">
                <CardHeader><CardTitle className="text-2xl">Fencing Products Available</CardTitle></CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-2">
                  {gccProductPages.map((product) => (
                    <Link key={product.slug} href={getCountryProductUrl(country.slug, product.slug)} className="rounded-lg border border-border p-4 font-semibold hover:border-primary hover:text-primary">
                      {product.name} in {country.country}
                    </Link>
                  ))}
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-border bg-background shadow-sm">
                <CardHeader><CardTitle className="text-2xl">Fencing Solutions by Application</CardTitle></CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-2">
                  {gccApplicationPages.map((application) => (
                    <Link key={application.slug} href={getCountryApplicationUrl(country.slug, application.slug)} className="rounded-lg border border-border p-4 font-semibold hover:border-primary hover:text-primary">
                      {application.name} in {country.country}
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-extrabold text-foreground">Common Buyer Questions for {country.country}</h2>
              <p className="mt-3 text-muted-foreground">Helpful answers for contractors, procurement teams and project owners planning fencing requirements.</p>
            </div>
            <div className="grid gap-4">
              {country.faqs.map((faq) => (
                <Card key={faq.question} className="rounded-2xl border-border bg-background">
                  <CardHeader><CardTitle className="text-xl">{faq.question}</CardTitle></CardHeader>
                  <CardContent><p className="leading-relaxed text-muted-foreground">{faq.answer}</p></CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
