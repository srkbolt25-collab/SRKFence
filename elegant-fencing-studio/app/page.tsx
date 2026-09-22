import type { Metadata } from 'next';
import SiteLayout from '@/components/SiteLayout';
import Hero from '@/components/Hero'; 
import Benefits from '@/components/Benefits';
import Contact from '@/components/Contact';
import QuickLinks from '@/components/QuickLinks';
import ProjectHighlights from '@/components/ProjectHighlights';
import HomeSeoSection from '@/components/HomeSeoSection';
import HomeBlogSection from '@/components/HomeBlogSection';
import StructuredData from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  buildSeoMetadata,
  buildFaqSchema,
  buildItemListSchema,
  buildWebPageSchema,
  homepageFaqs,
  productSeoPages,
  countryPages,
  staticSeoProfiles,
} from '@/lib/seo';

export const metadata: Metadata = buildSeoMetadata(staticSeoProfiles.home);

export default function Home() {
  return (
    <>
      <StructuredData
        data={[
          buildFaqSchema(homepageFaqs),
          buildItemListSchema(
            'Priority SRK Fence product pages',
            productSeoPages.map((product) => ({ label: product.name, href: `/products/${product.slug}` })),
          ),
          buildItemListSchema(
            'SRK Fence country pages',
            countryPages.map((country) => ({ label: `Fencing Supplier in ${country.country}`, href: `/countries/${country.slug}` })),
          ),
          buildWebPageSchema(
            staticSeoProfiles.home.title,
            staticSeoProfiles.home.description,
            '/',
            staticSeoProfiles.home.keywords,
          ),
        ]}
      />
      <SiteLayout>
        {/* Hero Section - Full Width with Best Fencing Images */}
        <Hero />
        
        {/* Quick Links to Main Products */}
        <section className="relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <QuickLinks />
        </section>

        <HomeSeoSection />
        
        {/* Project Highlights */}
        <section className="relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <ProjectHighlights />
        </section>

        {/* Latest Blog Posts */}
        <section className="relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <HomeBlogSection />
        </section>
        
        {/* Why Choose Us */}
        <section className="relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <Benefits />
        </section>
        
        {/* Get a Quote CTA Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(0_0%_100%/_0.1)_0%,transparent_50%)]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                Need a Custom Fencing Quotation?
              </h2>
              <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Send your fence length, height, mesh size, wire diameter, coating requirement, delivery location, installation requirement and project details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 hover:shadow-glow px-8 py-6 h-auto rounded-xl font-bold uppercase tracking-wide"
                >
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 h-auto rounded-xl font-bold uppercase tracking-wide"
                >
                  <Link href="/products">
                    View Products
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <Contact />
        </section>
      </SiteLayout>
    </>
  );
}
