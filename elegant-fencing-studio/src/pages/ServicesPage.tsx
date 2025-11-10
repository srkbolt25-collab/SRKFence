import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroFence from "@/assets/hero-fence.jpg";
import metalFence from "@/assets/metal-fence.jpg";
import woodFence from "@/assets/wood-fence.jpg";
import { ArrowRight, Building2, Compass, Layers, Palette, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const coreServices = [
  {
    icon: ShieldCheck,
    title: "High-Security Perimeters",
    description:
      "Accredited fencing systems engineered for embassies, critical infrastructure, and data centers with integrated monitoring.",
  },
  {
    icon: Building2,
    title: "Commercial & Hospitality Estates",
    description:
      "Tailored solutions that balance guest experience, branding, and safety across resorts, headquarters, and campuses.",
  },
  {
    icon: Layers,
    title: "Architectural Screening",
    description:
      "Signature privacy screens, sound barriers, and sculptural facades that elevate streetscapes without compromising function.",
  },
  {
    icon: Palette,
    title: "Design & Visualisation Studio",
    description:
      "Concept boards, finish palettes, and photoreal renders ensure every stakeholder can see the vision before we build.",
  },
  {
    icon: Compass,
    title: "Global Project Delivery",
    description:
      "Multilingual site leads manage permissions, logistics, and compliance across continents to keep momentum seamless.",
  },
  {
    icon: Wrench,
    title: "Lifecycle Care & Upgrades",
    description:
      "Concierge maintenance plans, protective coatings, and technology enhancements extend the performance of every installation.",
  },
];

const craftsmanshipHighlights = [
  {
    title: "Precision Engineering",
    description:
      "Laser-measured layouts, CAD-driven fabrication, and premium hardware ensure every line is crisp and enduring.",
  },
  {
    title: "Curated Materials",
    description: "Metals, woods, and composites selected for climate, durability, and aesthetic harmony with your property.",
  },
  {
    title: "White-Glove Delivery",
    description: "Dedicated site leads coordinate trades, safety checks, and finishing touches for a seamless installation.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Session",
    copy: "Share your vision, priorities, and timelines. We walk the property virtually or in person to map opportunities.",
  },
  {
    step: "02",
    title: "Design & Visuals",
    copy: "Receive tailored design boards, color palettes, and photoreal renderings aligned to your architecture.",
  },
  {
    step: "03",
    title: "Installation & Care",
    copy: "Certified crews deliver the build, followed by a care guide and concierge maintenance options.",
  },
];

const ServicesPage = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our Services"
        title="Tailored Fencing Solutions for Landmark Properties"
        description="From sculptural privacy screens to fortified perimeter systems, SRK FENCE pairs striking aesthetics with unwavering performance."
        variant="contrast"
        backgroundImage={metalFence}
        overlayClassName="from-black/85 via-black/75 to-black/60"
      >
        <Button
          asChild
          size="lg"
          className="bg-gradient-accent hover:shadow-glow text-secondary-foreground px-8 py-6 h-auto rounded-xl"
        >
          <Link to="/contact" className="font-semibold">
            Book a Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </PageHeader>

      <section className="bg-background py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                Our Expertise
              </span>
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
                Comprehensive perimeter services for visionary properties
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Whether safeguarding critical assets or curating landmark destinations, SRK FENCE delivers end-to-end
                programs that marry engineering rigor with crafted aesthetics. Explore the core services we tailor to each
                engagement.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-secondary/15 px-4 py-2 text-sm font-medium text-secondary">
                  Design-Led Strategy
                </span>
                <span className="rounded-full bg-secondary/15 px-4 py-2 text-sm font-medium text-secondary">
                  Specialist Installation
                </span>
                <span className="rounded-full bg-secondary/15 px-4 py-2 text-sm font-medium text-secondary">
                  Long-Term Stewardship
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="hidden h-40 w-40 rounded-full bg-secondary/20 blur-3xl lg:block" />
              <Card className="relative overflow-hidden rounded-3xl border border-border shadow-elegant">
                <img
                  src={heroFence}
                  alt="Secure perimeter detail"
                  className="h-56 w-full object-cover"
                />
                <CardHeader className="space-y-2 pb-4">
                  <CardTitle className="text-2xl text-foreground">Signature Programs</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    Tailored service routes for hospitality, aviation, mixed-use campuses, and defence estates—each
                    with bespoke finishes, documentation, and aftercare.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group h-full overflow-hidden border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5 transition hover:-translate-y-1 hover:border-secondary/60 hover:shadow-hover"
                >
                  <CardHeader className="space-y-5">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-secondary transition group-hover:bg-secondary group-hover:text-secondary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold uppercase tracking-wide text-secondary">Craftsmanship</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground">The SRK FENCE Finish</h2>
            <p className="text-lg text-muted-foreground">
              Each project is choreographed by artisans and engineers who obsess over sightlines, hardware, and longevity. We match the character of your estate or campus while elevating security and usability.
            </p>
            <div className="space-y-4">
              {craftsmanshipHighlights.map((item) => (
                <div key={item.title} className="p-6 rounded-2xl border border-border bg-gradient-to-br from-background via-background/90 to-secondary/10">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-elegant">
            <img src={woodFence} alt="SRK FENCE installation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-primary-foreground">
              <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/70">Signature Install</p>
              <h3 className="text-2xl font-semibold">Modern Estate Screening</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(142_55%_48%/0.1)_0%,transparent_55%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Our Three-Stage Process</h2>
            <p className="text-lg text-muted-foreground">
              We keep planning transparent and momentum high—so your property transformation feels effortless.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <Card key={step.title} className="border border-border bg-background/85 backdrop-blur-sm rounded-3xl shadow-elegant">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center text-2xl font-bold text-secondary-foreground shadow-glow">
                    {step.step}
                  </div>
                  <CardTitle className="text-2xl text-foreground">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">{step.copy}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={heroFence} alt="Fencing project" className="w-full h-[420px] object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-primary-foreground space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Engineered for Generations</h2>
              <p className="text-lg text-primary-foreground/80">
                Choose protective finishes, integrated lighting, and smart access upgrades that keep your fence performing—and captivating—for decades.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-secondary text-secondary-foreground hover:shadow-glow px-8 py-6 h-auto rounded-xl"
            >
              <Link to="/projects" className="font-semibold">
                View Recent Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Begin?</h2>
            <p className="text-lg text-primary-foreground/80">
              Tell us about your site and vision. We’ll assemble a tailored scope with budgets, finishes, and timelines in days—not weeks.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-secondary text-secondary-foreground hover:shadow-glow px-8 py-6 h-auto rounded-xl"
          >
            <Link to="/contact" className="font-semibold">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ServicesPage;

