import Link from 'next/link';
import {
  comparisonTopics,
  countryPages,
  entityDescription,
  homepageFaqs,
  productByApplicationRows,
  productSeoPages,
} from '@/lib/seo';

const priorityProductLinks = productSeoPages.slice(0, 9);
const priorityCountries = countryPages.filter((country) =>
  ['uae', 'qatar', 'saudi-arabia', 'oman', 'kuwait'].includes(country.slug),
);

export default function HomeSeoSection() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          <div className="space-y-7">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">Buyer Focus</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Fencing Supplier in Dubai, UAE and GCC
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                {entityDescription} The company works with project teams that need practical quotation guidance, product
                specifications, delivery coordination and installation support for demanding site conditions.
              </p>
              <p>
                SRK Fence works with contractors, consultants, facility managers, procurement teams and project
                owners looking for fencing systems that match security, safety, privacy and access-control
                requirements. Common projects include construction sites, warehouses, logistics yards, commercial
                properties, schools, public parks, farms, oil and gas facilities, data centers, industrial sites and
                high-security boundary perimeters.
              </p>
              <p>
                Buyers can compare chain link fence, welded mesh fence, anti-climb 358 fence, PVC coated fencing,
                temporary fence panels, ECO PVC hoarding, barbed wire, razor wire, steel fencing, gates and fence
                accessories. Each quotation can be prepared around the actual site requirement: fence length, height,
                mesh opening, wire diameter, coating, posts, gate access, delivery location, drawings, BOQ and
                installation scope.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-5">
                <h3 className="mb-2 text-lg font-bold text-foreground">Who is SRK Fence?</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  SRK Fence is a Dubai-based fencing supplier and contractor offering fencing supply, installation
                  and custom perimeter security solutions for residential, commercial, industrial, construction,
                  infrastructure, warehouse, oil and gas, data center, farm and border-security projects.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5">
                <h3 className="mb-2 text-lg font-bold text-foreground">Need a project quote?</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Send fence length, height, mesh size, wire diameter, coating requirement, delivery location,
                  installation requirement and drawings or specifications for a tailored quotation.
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="mb-4 text-xl font-bold text-foreground">Priority Products</h3>
              <div className="grid gap-2">
                {priorityProductLinks.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="rounded-md border border-border/70 px-3 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="mb-4 text-xl font-bold text-foreground">Countries We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {priorityCountries.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/countries/${country.slug}`}
                    className="rounded-full bg-muted px-3 py-1.5 text-sm font-semibold text-muted-foreground transition hover:bg-primary hover:text-primary-foreground"
                  >
                    {country.country}
                  </Link>
                ))}
              </div>
              <Link href="/countries" className="mt-4 inline-block text-sm font-bold text-primary hover:underline">
                View all GCC markets
              </Link>
            </div>
          </aside>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4 sm:p-5">
            <h3 className="mb-4 text-lg font-bold text-foreground sm:text-xl">Recommended Product by Application</h3>

            <div className="grid gap-3 md:hidden">
              {productByApplicationRows.map((row) => (
                <div key={row.application} className="rounded-lg border border-border/70 bg-background p-3">
                  <p className="text-sm font-bold text-foreground">{row.application}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{row.products}</p>
                </div>
              ))}
            </div>

            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead className="border-b border-border text-foreground">
                  <tr>
                    <th className="py-3 pr-4 font-bold">Application</th>
                    <th className="py-3 font-bold">Recommended Products</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/70 text-muted-foreground">
                  {productByApplicationRows.map((row) => (
                    <tr key={row.application}>
                      <td className="py-3 pr-4 font-semibold text-foreground">{row.application}</td>
                      <td className="py-3">{row.products}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-4 sm:p-5">
            <h3 className="mb-4 text-lg font-bold text-foreground sm:text-xl">Buyer Questions</h3>
            <div className="space-y-3 sm:space-y-4">
              {homepageFaqs.map((faq) => (
                <div key={faq.question} className="border-b border-border/70 pb-3 last:border-b-0 last:pb-0 sm:pb-4">
                  <h4 className="text-sm font-bold leading-snug text-foreground sm:text-base">{faq.question}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 sm:mt-6">
              <h4 className="mb-3 text-sm font-bold text-foreground sm:text-base">Helpful comparisons</h4>
              <div className="grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
                {comparisonTopics.map((topic) => (
                  <Link
                    key={topic.label}
                    href={topic.href}
                    className="max-w-full rounded-full border border-border px-3 py-1.5 text-center text-[11px] font-semibold leading-snug text-muted-foreground transition hover:border-primary hover:text-primary sm:text-xs"
                  >
                    {topic.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
