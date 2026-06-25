import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';
import StructuredData from '@/components/StructuredData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  buildItemListSchema,
  buildSeoMetadata,
  buildWebPageSchema,
  countryPages,
  staticSeoProfiles,
} from '@/lib/seo';

export const metadata: Metadata = buildSeoMetadata(staticSeoProfiles.countries);

export default function CountriesPage() {
  return (
    <>
      <StructuredData
        data={[
          buildWebPageSchema(
            staticSeoProfiles.countries.title,
            staticSeoProfiles.countries.description,
            '/countries',
            staticSeoProfiles.countries.keywords,
          ),
          buildItemListSchema(
            'SRK Fence country landing pages',
            countryPages.map((country) => ({ label: `Fencing Supplier in ${country.country}`, href: `/countries/${country.slug}` })),
          ),
        ]}
      />
      <SiteLayout>
        <section className="bg-background py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">Markets Served</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                GCC and Middle East Fencing Supplier Pages
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Country-specific pages for buyers requesting chain link fencing, welded mesh fencing, PVC fencing,
                anti-climb fencing, temporary fencing, barbed wire, razor wire, gates and accessories.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Target markets include UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan, with RFQ
                guidance for fence length, height, mesh opening, coating, posts, gates, delivery city and installation scope.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {countryPages.map((country) => (
                <Link key={country.slug} href={`/countries/${country.slug}`}>
                  <Card className="h-full rounded-lg border-border transition hover:-translate-y-1 hover:border-primary hover:shadow-hover">
                    <CardHeader>
                      <CardTitle className="text-2xl">Fencing Supplier in {country.country}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-4 text-sm leading-relaxed text-muted-foreground">{country.intro}</p>
                      <div className="mt-5 flex items-center text-sm font-bold text-primary">
                        View Country Page
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
