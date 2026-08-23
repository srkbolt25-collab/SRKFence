import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText, MapPin, ShieldCheck } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  type CountryPage,
  type FaqItem,
} from '@/lib/seo';
import {
  countryNameForKeyword,
  getApplicationProductLinks,
  getCountryApplicationKeywords,
  getCountryApplicationUrl,
  getCountryPageBanner,
  getCountryProductKeywords,
  getCountryProductUrl,
  getRelatedProductLinks,
  gccApplicationPages,
  gccProductPages,
  type GccApplicationPage,
  type GccProductPage,
} from '@/lib/gccPages';

type Props =
  | { type: 'product'; country: CountryPage; productPage: GccProductPage }
  | { type: 'application'; country: CountryPage; applicationPage: GccApplicationPage };

function countryBuyerLine(country: CountryPage) {
  return `SRK Fence works with contractors, consultants and procurement teams in ${country.country}, helping them choose suitable fencing systems and prepare clear project quotations from its Dubai/UAE base.`;
}

function RfqBox({ country, checklist, title }: { country: CountryPage; checklist: string[]; title: string }) {
  return (
    <Card className="rounded-2xl border-border bg-background shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <FileText className="h-6 w-6 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="leading-relaxed text-muted-foreground">
          Request a quotation for {country.country}. Share the site location, fence length, height and coating requirement so our team can recommend the right system, accessories, delivery scope and installation option.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {checklist.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-lg bg-muted/70 p-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm font-semibold text-foreground">{item}</span>
            </div>
          ))}
        </div>
        <Button asChild className="h-auto rounded-xl bg-gradient-to-r from-[#c5162a] to-[#e63946] px-8 py-4 font-bold text-white">
          <Link href="/contact">Request Project Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function CountryLinks({ country, currentSlug }: { country: CountryPage; currentSlug: string }) {
  return (
    <Card className="rounded-2xl border-border bg-background shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">Products & Applications You May Need in {country.country}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        <Link className="rounded-lg border border-border px-4 py-3 font-semibold hover:border-primary hover:text-primary" href={`/countries/${country.slug}`}>
          Fencing Supplier in {country.country}
        </Link>
        {gccProductPages.filter((item) => item.slug !== currentSlug).slice(0, 4).map((item) => (
          <Link key={item.slug} className="rounded-lg border border-border px-4 py-3 font-semibold hover:border-primary hover:text-primary" href={getCountryProductUrl(country.slug, item.slug)}>
            {item.name} in {country.country}
          </Link>
        ))}
        {gccApplicationPages.filter((item) => item.slug !== currentSlug).slice(0, 4).map((item) => (
          <Link key={item.slug} className="rounded-lg border border-border px-4 py-3 font-semibold hover:border-primary hover:text-primary" href={getCountryApplicationUrl(country.slug, item.slug)}>
            {item.name} in {country.country}
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}

export default function GccMarketLandingPage(props: Props) {
  const { country } = props;
  const market = countryNameForKeyword(country);

  if (props.type === 'product') {
    const page = props.productPage;
    const title = `${page.name} Supplier in ${country.country}`;
    const keywords = getCountryProductKeywords(country, page);
    const faqs: FaqItem[] = [
      {
        question: `Does SRK Fence supply ${page.shortName} to ${country.country}?`,
        answer: `Yes. SRK Fence can review ${page.shortName} requirements for ${country.country} projects, including fence length, height, material, coating, accessories, delivery city and installation scope.`,
      },
      {
        question: `What details are required for a ${page.shortName} quote in ${country.country}?`,
        answer: `Buyers should share ${page.quoteChecklist.join(', ').toLowerCase()}, project timeline, drawings or photos if available, and the required delivery or installation location in ${country.country}.`,
      },
      {
        question: `Which applications use ${page.shortName} in ${market}?`,
        answer: `${page.name} is commonly reviewed for ${page.applications.join(', ').toLowerCase()} depending on the project security level, site exposure, access-control needs and budget.`,
      },
    ];

    return (
      <>
        <StructuredData data={[
          buildServiceSchema(title, page.summary, `/countries/${country.slug}/${page.slug}`, [country.country], keywords),
          buildFaqSchema(faqs),
          buildBreadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Countries', href: '/countries' },
            { label: country.country, href: `/countries/${country.slug}` },
            { label: page.name, href: `/countries/${country.slug}/${page.slug}` },
          ]),
        ]} />
        <SiteLayout>
          <section className="border-b border-border bg-background">
            <div className="container mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)] lg:px-8">
              <div className="space-y-6">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">{page.category} • {country.country}</p>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">{title}</h1>
                <p className="text-lg leading-relaxed text-muted-foreground">{page.summary}</p>
                <p className="leading-relaxed text-muted-foreground">{countryBuyerLine(country)}</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="h-auto rounded-xl bg-gradient-to-r from-[#c5162a] to-[#e63946] px-8 py-5 font-bold uppercase tracking-wide text-white">
                    <Link href="/contact">Request {country.country} Quote <FileText className="ml-2 h-5 w-5" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-auto rounded-xl px-8 py-5 font-bold">
                    <Link href={page.productHref}>View Product Details <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                </div>
              </div>
              <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                <Image src={getCountryPageBanner(country, page.image)} alt={`${page.name} supplier in ${country.country}`} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 520px" priority />
              </div>
            </div>
          </section>

          <section className="bg-background py-16 lg:py-20">
            <div className="container mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.8fr)] lg:px-8">
              <div className="space-y-8">
                <Card className="rounded-2xl border-border bg-background shadow-sm">
                  <CardHeader><CardTitle className="text-2xl">Product Specification Guidance</CardTitle></CardHeader>
                  <CardContent className="space-y-5">
                    <p className="leading-relaxed text-muted-foreground">For {country.country} projects, the right {page.shortName} specification depends on the site use, exposure, required height, security level, maintenance expectations and access points. Use the points below to prepare clear information for quotation review.</p>
                    <div className="overflow-x-auto rounded-xl border border-border">
                      <table className="w-full min-w-[560px] text-left text-sm">
                        <tbody className="divide-y divide-border">
                          {page.specs.map((spec) => <tr key={spec.label}><th className="w-1/3 bg-muted/50 px-4 py-3 font-bold text-foreground">{spec.label}</th><td className="px-4 py-3 text-muted-foreground">{spec.value}</td></tr>)}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border-border bg-background shadow-sm">
                  <CardHeader><CardTitle className="text-2xl">Best-Fit Applications in {country.country}</CardTitle></CardHeader>
                  <CardContent className="grid gap-3 sm:grid-cols-2">
                    {page.applications.map((item) => <div key={item} className="flex items-start gap-3 rounded-lg bg-muted/70 p-4"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span className="font-semibold text-foreground">{item}</span></div>)}
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border-border bg-background shadow-sm">
                  <CardHeader><CardTitle className="text-2xl">Why Buyers Choose This System</CardTitle></CardHeader>
                  <CardContent className="grid gap-3 sm:grid-cols-2">
                    {page.benefits.map((item) => <div key={item} className="flex items-start gap-3 rounded-lg border border-border p-4"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span className="text-muted-foreground">{item}</span></div>)}
                  </CardContent>
                </Card>

                <RfqBox country={country} checklist={page.quoteChecklist} title={`${page.name} Quote Checklist`} />
              </div>

              <aside className="space-y-6">
                <Card className="rounded-2xl border-border bg-background shadow-sm">
                  <CardHeader><CardTitle className="text-xl">Products You May Also Need</CardTitle></CardHeader>
                  <CardContent className="grid gap-2">
                    {getRelatedProductLinks(page).map((link) => <Link key={link.href} href={link.href} className="rounded-lg bg-muted px-4 py-3 font-semibold text-muted-foreground hover:bg-primary hover:text-primary-foreground">{link.label}</Link>)}
                  </CardContent>
                </Card>
                <Card className="rounded-2xl border-border bg-background shadow-sm">
                  <CardHeader><CardTitle className="text-xl">Service Areas</CardTitle></CardHeader>
                  <CardContent className="space-y-3">
                    {country.cities.map((city) => <div key={city} className="flex items-center gap-3 rounded-lg border border-border px-4 py-3"><MapPin className="h-4 w-4 text-primary" /><span className="font-semibold text-foreground">{city}</span></div>)}
                  </CardContent>
                </Card>
                <CountryLinks country={country} currentSlug={page.slug} />
              </aside>
            </div>
          </section>

          <section className="bg-muted/30 py-16">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8 text-center"><h2 className="text-3xl font-extrabold text-foreground">Buyer Questions</h2><p className="mt-3 text-muted-foreground">Answer-first guidance for procurement, contractor and project teams.</p></div>
              <div className="grid gap-4">{faqs.map((faq) => <Card key={faq.question} className="rounded-2xl border-border bg-background"><CardHeader><CardTitle className="text-xl">{faq.question}</CardTitle></CardHeader><CardContent><p className="leading-relaxed text-muted-foreground">{faq.answer}</p></CardContent></Card>)}</div>
            </div>
          </section>
        </SiteLayout>
      </>
    );
  }

  const page = props.applicationPage;
  const title = `${page.name} in ${country.country}`;
  const keywords = getCountryApplicationKeywords(country, page);
  const faqs = page.buyerQuestions.map((faq) => ({
    question: faq.question.replace(/\?$/, ` in ${country.country}?`),
    answer: `${faq.answer} SRK Fence can review ${country.country} project requirements based on site layout, delivery city, material exposure and installation scope.`,
  }));
  const productLinks = getApplicationProductLinks(page);

  return (
    <>
      <StructuredData data={[
        buildServiceSchema(title, page.summary, `/countries/${country.slug}/${page.slug}`, [country.country], keywords),
        buildFaqSchema(faqs),
        buildBreadcrumbSchema([
          { label: 'Home', href: '/' },
          { label: 'Countries', href: '/countries' },
          { label: country.country, href: `/countries/${country.slug}` },
          { label: page.name, href: `/countries/${country.slug}/${page.slug}` },
        ]),
      ]} />
      <SiteLayout>
        <section className="border-b border-border bg-background">
          <div className="container mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)] lg:px-8">
            <div className="space-y-6">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Application Solution • {country.country}</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">{title}</h1>
              <p className="text-lg leading-relaxed text-muted-foreground">{page.summary}</p>
              <p className="leading-relaxed text-muted-foreground">{countryBuyerLine(country)}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-auto rounded-xl bg-gradient-to-r from-[#c5162a] to-[#e63946] px-8 py-5 font-bold uppercase tracking-wide text-white"><Link href="/contact">Request {country.country} Quote <FileText className="ml-2 h-5 w-5" /></Link></Button>
                <Button asChild size="lg" variant="outline" className="h-auto rounded-xl px-8 py-5 font-bold"><Link href="/applications">View Applications <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
              </div>
            </div>
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-border bg-white shadow-sm"><Image src={getCountryPageBanner(country, page.image)} alt={`${page.name} in ${country.country}`} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 520px" priority /></div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-20">
          <div className="container mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.8fr)] lg:px-8">
            <div className="space-y-8">
              <Card className="rounded-2xl border-border bg-background shadow-sm"><CardHeader><CardTitle className="text-2xl">Project Requirement Review</CardTitle></CardHeader><CardContent className="space-y-4 text-muted-foreground"><p>{page.riskProfile}</p><p>For {country.country}, SRK Fence recommends reviewing project drawings, site access, perimeter length, exposure conditions, security level, gate movement and future maintenance before final product selection.</p></CardContent></Card>

              <Card className="rounded-2xl border-border bg-background shadow-sm"><CardHeader><CardTitle className="text-2xl">Recommended Fencing Systems</CardTitle></CardHeader><CardContent className="grid gap-3 sm:grid-cols-2">{productLinks.map((link) => <Link key={link.href} href={link.href} className="flex items-start gap-3 rounded-lg border border-border p-4 font-semibold hover:border-primary hover:text-primary"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{link.label}</Link>)}</CardContent></Card>

              <RfqBox country={country} checklist={page.projectRequirements} title={`${page.name} Quote Checklist`} />
            </div>
            <aside className="space-y-6">
              <Card className="rounded-2xl border-border bg-background shadow-sm"><CardHeader><CardTitle className="text-xl">Service Areas</CardTitle></CardHeader><CardContent className="space-y-3">{country.cities.map((city) => <div key={city} className="flex items-center gap-3 rounded-lg border border-border px-4 py-3"><MapPin className="h-4 w-4 text-primary" /><span className="font-semibold text-foreground">{city}</span></div>)}</CardContent></Card>
              <CountryLinks country={country} currentSlug={page.slug} />
            </aside>
          </div>
        </section>

        <section className="bg-muted/30 py-16"><div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="mb-8 text-center"><h2 className="text-3xl font-extrabold text-foreground">Buyer Questions</h2><p className="mt-3 text-muted-foreground">Answer-first guidance for application-based fencing searches.</p></div><div className="grid gap-4">{faqs.map((faq) => <Card key={faq.question} className="rounded-2xl border-border bg-background"><CardHeader><CardTitle className="text-xl">{faq.question}</CardTitle></CardHeader><CardContent><p className="leading-relaxed text-muted-foreground">{faq.answer}</p></CardContent></Card>)}</div></div></section>
      </SiteLayout>
    </>
  );
}
