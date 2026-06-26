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
                {entityDescription} The company supports buyers who need practical RFQ guidance, product
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

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="mb-4 text-xl font-bold text-foreground">Recommended Product by Application</h3>
            <div className="overflow-x-auto">
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

          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="mb-4 text-xl font-bold text-foreground">Buyer Questions</h3>
            <div className="space-y-4">
              {homepageFaqs.map((faq) => (
                <div key={faq.question} className="border-b border-border/70 pb-4 last:border-b-0 last:pb-0">
                  <h4 className="font-bold text-foreground">{faq.question}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="mb-3 font-bold text-foreground">Helpful comparisons</h4>
              <div className="flex flex-wrap gap-2">
                {comparisonTopics.map((topic) => (
                  <Link
                    key={topic.label}
                    href={topic.href}
                    className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition hover:border-primary hover:text-primary"
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
