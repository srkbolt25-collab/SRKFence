import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText, Layers3 } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const pageUrl = 'https://www.srkfencing.com/products/fence-posts-gi-ms-pvc';
const pageTitle = 'G.I., M.S. & PVC Fence Posts Supplier in Dubai UAE | SRK Fence';
const pageDescription =
  'SRK Fence supplies G.I., M.S. and PVC fence posts for chain-link, welded mesh, perimeter, privacy, decorative, residential, commercial and industrial fencing projects across UAE, GCC and Middle East.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'fence posts supplier in Dubai',
    'GI fence posts UAE',
    'MS fence posts Dubai',
    'PVC fence posts UAE',
    'galvanized fence posts supplier UAE',
    'fence post supplier GCC',
    'chain link fence posts UAE',
    'welded mesh fence posts Dubai',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: 'SRK Fence',
    type: 'website',
    images: [
      {
        url: 'https://www.srkfencing.com/products/fence-posts/gi-ms-pvc-fence-posts-supplier-uae.webp',
        width: 1200,
        height: 630,
        alt: 'G.I., M.S. and PVC fence posts supplier in UAE',
      },
    ],
  },
};

const countryLinks = [
  { label: 'UAE', href: '/countries/uae' },
  { label: 'Bahrain', href: '/countries/bahrain' },
  { label: 'Qatar', href: '/countries/qatar' },
  { label: 'Kuwait', href: '/countries/kuwait' },
  { label: 'Saudi Arabia', href: '/countries/saudi-arabia' },
  { label: 'Iraq', href: '/countries/iraq' },
  { label: 'Oman', href: '/countries/oman' },
  { label: 'Jordan', href: '/countries/jordan' },
];

const postOptions = [
  {
    title: 'G.I. Fence Posts',
    subtitle: 'Hot-dip galvanized fence posts for outdoor fencing and long-term corrosion resistance.',
    image: '/products/fence-posts/gi-fence-post-supplier-dubai-uae.webp',
    alt: 'G.I. galvanized fence posts supplier in Dubai UAE',
    description:
      'G.I. fence posts are galvanized steel posts used for chain-link fencing, welded mesh fencing, perimeter fencing and security boundary projects where outdoor durability is important.',
    features: [
      'Hot-dip galvanized finish',
      'Excellent corrosion resistance',
      'Strong and durable construction',
      'Round, square and rectangular profiles',
      'Compatible with clamps, caps, rails and fixings',
    ],
    applications: [
      'Chain-link fencing',
      'Welded mesh fencing',
      'Perimeter fencing',
      'Security fencing',
      'Industrial facilities',
    ],
    specs: [
      ['Material', 'G.I. / galvanized steel'],
      ['Profile', 'Round / square / rectangular / customized'],
      ['Finish', 'Hot-dip galvanized'],
      ['Color', 'Galvanized silver / custom by requirement'],
      ['Accessories', 'Caps, clamps, brackets, rails and fixings'],
      ['Installation', 'Embedded or surface mounted'],
      ['Customization', 'Profile, thickness, length and finish'],
    ],
  },
  {
    title: 'M.S. Fence Posts',
    subtitle: 'Mild steel fence posts for strong fabricated, commercial and industrial fencing systems.',
    image: '/products/fence-posts/ms-fence-post-supplier-dubai-uae.webp',
    alt: 'M.S. mild steel fence posts supplier in Dubai UAE',
    description:
      'M.S. fence posts are mild steel posts used where strength, fabrication flexibility and custom coating options are required for commercial and industrial perimeter projects.',
    features: [
      'Heavy-duty mild steel construction',
      'Powder coated, PVC coated or painted finish',
      'Multiple color options including green and black',
      'Suitable for custom profiles and heavy-duty systems',
      'Useful with gates, rails, brackets and security fittings',
    ],
    applications: [
      'Welded mesh fencing',
      'Security fencing',
      'Perimeter fencing',
      'Commercial boundaries',
      'Industrial fencing',
    ],
    specs: [
      ['Material', 'M.S. / mild steel'],
      ['Profile', 'Round / square / rectangular / customized'],
      ['Finish', 'Powder coated / PVC coated / painted'],
      ['Color', 'Green / black / white / custom'],
      ['Accessories', 'Caps, clamps, brackets, rails and fixings'],
      ['Installation', 'Embedded or surface mounted'],
      ['Customization', 'Profile, thickness, length, color and finish'],
    ],
  },
  {
    title: 'PVC Fence Posts',
    subtitle: 'Smooth PVC fence posts for decorative, privacy, garden and clean-finish fencing.',
    image: '/products/fence-posts/pvc-fence-post-supplier-dubai-uae.webp',
    alt: 'PVC fence posts supplier in Dubai UAE',
    description:
      'PVC fence posts are suitable for privacy fencing, decorative fencing, residential boundaries, garden fencing and projects where a clean finished appearance is required.',
    features: [
      'Smooth durable PVC finish',
      'Low-maintenance solution',
      'Multiple color options',
      'Clean appearance for residential and decorative fencing',
      'Compatible with privacy, garden and boundary fence systems',
    ],
    applications: [
      'Privacy fencing',
      'Decorative fencing',
      'Residential boundaries',
      'Garden fencing',
      'Landscaping areas',
    ],
    specs: [
      ['Material', 'PVC / PVC coated post option'],
      ['Profile', 'Round / square / rectangular / customized'],
      ['Finish', 'Smooth PVC / PVC coated'],
      ['Color', 'Green / black / white / custom'],
      ['Accessories', 'Caps, clamps, brackets, rails and fixings'],
      ['Installation', 'Embedded or surface mounted'],
      ['Customization', 'Profile, thickness, length, color and finish'],
    ],
  },
];

const rfqChecklist = [
  'Fence type - chain-link, welded mesh, privacy, decorative or security fencing',
  'Post material - G.I., M.S. or PVC',
  'Required profile - round, square, rectangular or custom',
  'Post height, thickness, length and spacing requirement',
  'Coating, color and finish requirement',
  'Accessories - caps, clamps, brackets, rails and fixings',
  'Installation type - embedded or surface mounted',
  'Project location, BOQ, drawings and delivery schedule',
];

const faqs = [
  {
    question: 'What are fence posts used for?',
    answer:
      'Fence posts provide the main structural support for fencing systems. They help keep chain-link, welded mesh, privacy, decorative and security fencing stable, aligned and securely installed.',
  },
  {
    question: 'Which fence post material should I choose - G.I., M.S. or PVC?',
    answer:
      'G.I. posts are commonly used for corrosion-resistant outdoor fencing, M.S. posts are useful for strong fabricated and heavy-duty systems, and PVC posts are suitable for clean-finish residential, garden, privacy and decorative fencing.',
  },
  {
    question: 'Can SRK Fence supply posts with accessories?',
    answer:
      'Yes. SRK Fence can support compatible caps, clamps, brackets, rails and fixing accessories based on the fence type, post profile, installation method and project requirement.',
  },
  {
    question: 'Are these fence posts available for GCC projects?',
    answer:
      'Yes. SRK Fence can support enquiries for UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan, subject to project specification, quantity, delivery location and scope.',
  },
];

export default function FencePostsGiMsPvcPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'G.I., M.S. and PVC Fence Posts',
    brand: { '@type': 'Brand', name: 'SRK Fence' },
    description: pageDescription,
    image: `${pageUrl.replace('/products/fence-posts-gi-ms-pvc', '')}/products/fence-posts/gi-ms-pvc-fence-posts-supplier-uae.webp`,
    category: 'Fence Posts and Fencing Accessories',
    areaServed: ['UAE', 'Bahrain', 'Qatar', 'Kuwait', 'Saudi Arabia', 'Iraq', 'Oman', 'Jordan'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.srkfencing.com/' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.srkfencing.com/products' },
      { '@type': 'ListItem', position: 3, name: 'G.I., M.S. & PVC Fence Posts', item: pageUrl },
    ],
  };

  return (
    <>
      <StructuredData data={[productSchema, faqSchema, breadcrumbSchema]} />
      <SiteLayout>
        <section className="border-b border-border bg-background">
          <div className="container mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(440px,1fr)] lg:px-8 lg:py-16">
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-primary">
                Fence Posts & Accessories
              </p>
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
                  G.I., M.S. & PVC Fence Posts Supplier in Dubai UAE
                </h1>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  SRK Fence supplies galvanized steel, mild steel and PVC fence posts for chain-link, welded mesh,
                  perimeter, privacy, decorative, residential, commercial and industrial fencing projects.
                </p>
              </div>
              <div className="grid gap-3 text-sm font-semibold text-muted-foreground sm:grid-cols-2">
                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />G.I., M.S. and PVC options</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Round, square and rectangular profiles</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Caps, clamps, brackets and rails</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />GCC project enquiry support</span>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-auto rounded-xl bg-gradient-to-r from-[#c5162a] to-[#e63946] px-8 py-5 font-bold uppercase tracking-wide text-white">
                  <Link href="/contact">
                    Request Quote
                    <FileText className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-auto rounded-xl px-8 py-5 font-bold">
                  <Link href="#post-options">
                    Compare Options
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-border bg-white shadow-lg sm:min-h-[440px] lg:min-h-[540px]">
              <Image
                src="/products/fence-posts/gi-ms-pvc-fence-posts-supplier-uae.webp"
                alt="G.I., M.S. and PVC fence posts supplier in UAE"
                fill
                className="object-contain p-1 sm:p-2"
                sizes="(max-width: 1024px) 100vw, 620px"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-background py-14 lg:py-18">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="rounded-2xl border-border">
              <CardContent className="grid gap-8 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
                <div>
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">Product Description</p>
                  <h2 className="mb-4 text-3xl font-extrabold text-foreground">Fence posts for stable and secure fencing systems</h2>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Fence posts provide the main structural support for fencing systems, ensuring stability, strength and
                    secure installation of chain-link, welded mesh, privacy, decorative and other fence types.
                  </p>
                  <p>
                    Posts are available in various profiles, finishes, colors and configurations, and can be supplied with
                    compatible caps, clamps, brackets, rails and fixing accessories according to project requirements.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="post-options" className="bg-muted/30 py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-primary">
                Choose Your Fence Post Type
              </p>
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">G.I., M.S. and PVC Fence Post Options</h2>
              <p className="mt-4 text-muted-foreground">
                Compare each option by material, finish, features, typical applications and technical information before
                sending an RFQ.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {postOptions.map((option) => (
                <Card key={option.title} className="flex h-full flex-col overflow-hidden rounded-2xl border-border bg-background shadow-sm">
                  <div className="relative h-72 w-full border-b border-border bg-white sm:h-80">
                    <Image src={option.image} alt={option.alt} fill className="object-contain p-2" sizes="(max-width: 1024px) 100vw, 33vw" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{option.title}</CardTitle>
                    <p className="text-sm font-semibold text-primary">{option.subtitle}</p>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col gap-6">
                    <p className="leading-relaxed text-muted-foreground">{option.description}</p>

                    <div>
                      <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-foreground">
                        <Layers3 className="h-5 w-5 text-primary" /> Features
                      </h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {option.features.map((feature) => (
                          <li key={feature} className="flex gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3 text-lg font-bold text-foreground">Typical Applications</h3>
                      <div className="flex flex-wrap gap-2">
                        {option.applications.map((application) => (
                          <span key={application} className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                            {application}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-3 text-lg font-bold text-foreground">Technical Information</h3>
                      <div className="overflow-hidden rounded-lg border border-border">
                        <table className="w-full text-left text-sm">
                          <tbody className="divide-y divide-border">
                            {option.specs.map(([label, value]) => (
                              <tr key={label}>
                                <th className="w-[38%] bg-muted/60 px-3 py-3 font-bold text-foreground">{label}</th>
                                <td className="px-3 py-3 text-muted-foreground">{value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="container mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.55fr)] lg:px-8">
            <div className="space-y-8">
              <Card className="rounded-2xl border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">General Technical Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[620px] text-left text-sm">
                      <tbody className="divide-y divide-border">
                        <tr><th className="w-1/3 py-3 pr-4 font-bold text-foreground">Material</th><td className="py-3 text-muted-foreground">G.I. / M.S. / PVC</td></tr>
                        <tr><th className="py-3 pr-4 font-bold text-foreground">Profile</th><td className="py-3 text-muted-foreground">Round / square / rectangular / customized</td></tr>
                        <tr><th className="py-3 pr-4 font-bold text-foreground">G.I. finish</th><td className="py-3 text-muted-foreground">Hot-dip galvanized</td></tr>
                        <tr><th className="py-3 pr-4 font-bold text-foreground">M.S. finish</th><td className="py-3 text-muted-foreground">Powder coated / PVC coated / painted</td></tr>
                        <tr><th className="py-3 pr-4 font-bold text-foreground">PVC finish</th><td className="py-3 text-muted-foreground">Smooth PVC / PVC coated</td></tr>
                        <tr><th className="py-3 pr-4 font-bold text-foreground">Color</th><td className="py-3 text-muted-foreground">G.I. / green / black / white / custom</td></tr>
                        <tr><th className="py-3 pr-4 font-bold text-foreground">Applications</th><td className="py-3 text-muted-foreground">Chain-link / welded mesh / privacy / decorative / security</td></tr>
                        <tr><th className="py-3 pr-4 font-bold text-foreground">Accessories</th><td className="py-3 text-muted-foreground">Caps / clamps / brackets / rails / fixings</td></tr>
                        <tr><th className="py-3 pr-4 font-bold text-foreground">Installation</th><td className="py-3 text-muted-foreground">Embedded / surface mounted</td></tr>
                        <tr><th className="py-3 pr-4 font-bold text-foreground">Customization</th><td className="py-3 text-muted-foreground">Profile, thickness, length, color and finish</td></tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Fence Post RFQ Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {rfqChecklist.map((item) => (
                      <div key={item} className="flex gap-3 rounded-md bg-muted px-3 py-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <aside className="space-y-6">
              <Card className="rounded-2xl border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Available for GCC & Middle East Projects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    This product is available in UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan for
                    project enquiries based on specification, quantity and delivery scope.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {countryLinks.map((country) => (
                      <Link key={country.href} href={country.href} className="rounded-md border border-border px-3 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
                        {country.label}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Related Product Pages</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <Link href="/products/chain-link-fence" className="rounded-md bg-muted px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-primary hover:text-primary-foreground">Chain Link Fence</Link>
                  <Link href="/products/welded-mesh-fence" className="rounded-md bg-muted px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-primary hover:text-primary-foreground">Welded Mesh Fence</Link>
                  <Link href="/products/anti-climb-358-fence" className="rounded-md bg-muted px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-primary hover:text-primary-foreground">Anti-Climb 358 Fence</Link>
                  <Link href="/products/fence-accessories" className="rounded-md bg-muted px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-primary hover:text-primary-foreground">Fence Accessories</Link>
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="mb-3 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-primary">AEO FAQ</p>
              <h2 className="text-3xl font-extrabold text-foreground">Fence Posts Questions Buyers Ask</h2>
              <p className="mt-3 text-muted-foreground">Short answer-style content for buyers, search engines and AI results.</p>
            </div>
            <div className="grid gap-4">
              {faqs.map((faq) => (
                <Card key={faq.question} className="rounded-2xl border-border bg-background">
                  <CardHeader><CardTitle className="text-xl">{faq.question}</CardTitle></CardHeader>
                  <CardContent><p className="leading-relaxed text-muted-foreground">{faq.answer}</p></CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-14 text-primary-foreground">
          <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold">Need G.I., M.S. or PVC Fence Posts?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
              Share the fence type, post material, profile, height, finish, accessories, location and BOQ/drawings for a
              project-specific quotation.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="h-auto rounded-xl px-8 py-5 font-bold uppercase tracking-wide">
                <Link href="/contact">Request Fence Post Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-auto rounded-xl border-white/40 px-8 py-5 font-bold text-white hover:bg-white hover:text-primary">
                <a href="tel:+971586600183">Call +971 58 660 0183</a>
              </Button>
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
