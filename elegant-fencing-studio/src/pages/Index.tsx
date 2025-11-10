import SiteLayout from "@/components/SiteLayout";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import ProductShowcase from "@/components/ProductShowcase";
import SectorShowcase from "@/components/SectorShowcase";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <SiteLayout>
      <Hero />
      <ProductShowcase />
      <SectorShowcase />
      <Benefits />
      <Testimonials />
      <Contact />
    </SiteLayout>
  );
};

export default Index;
