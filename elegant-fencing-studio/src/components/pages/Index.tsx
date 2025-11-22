'use client';

import SiteLayout from "@/components/SiteLayout";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import ProductShowcase from "@/components/ProductShowcase";
import SectorShowcase from "@/components/SectorShowcase";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";

const Index = () => {
  return (
    <SiteLayout>
      {/* Hero Section - Full Width */}
      <Hero />
      
      {/* Statistics Section - Quick Impact */}
      <Stats />
      
      {/* Product Showcase - Main Products */}
      <section className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <ProductShowcase />
      </section>
      
      {/* Sector Showcase - Industry Focus */}
      <section className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <SectorShowcase />
      </section>
      
      {/* Benefits Section - Why Choose Us */}
      <section className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <Benefits />
      </section>
      
      {/* Testimonials - Social Proof */}
      <section className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <Testimonials />
      </section>
      
      {/* Contact Section - CTA */}
      <section className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <Contact />
      </section>
    </SiteLayout>
  );
};

export default Index;
