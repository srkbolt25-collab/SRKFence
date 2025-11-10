import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import Benefits from "@/components/Benefits";
import heroFence from "@/assets/hero-fence.jpg";
import vinylFence from "@/assets/vinyl-fence.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Gem, Globe2, Handshake, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const globalStats = [
  { value: "1,200+", label: "Signature projects delivered" },
  { value: "30", label: "Countries served end-to-end" },
  { value: "4.9/5", label: "Average client satisfaction" },
];

const pillars = [
  {
    icon: Gem,
    title: "Elevated Materials",
    copy: "We curate long-life finishes and textures that feel bespoke to your architecture and microclimate.",
  },
  {
    icon: Handshake,
    title: "Transparent Partnership",
    copy: "Dedicated project leads deliver clear timelines, weekly touchpoints, and concierge coordination.",
  },
  {
    icon: Globe2,
    title: "Worldwide Delivery",
    copy: "Multilingual teams manage travel, logistics, and compliance so international installs stay on track.",
  },
];

const carePoints = [
  "Detailed quality checklists for every stage of install",
  "Project documentation, finish schedules, and maintenance guides",
  "Priority service plans for seasonal refreshes and upgrades",
];

const WhyUsPage = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Why SRK FENCE"
        title="Craftsmanship and Confidence in Every Line"
        description="We partner with design-forward property owners to deliver fencing that protects, impresses, and performs for decades."
        backgroundImage={heroFence}
        variant="contrast"
      >
        <Button
          asChild
          size="lg"
          className="bg-gradient-accent hover:shadow-glow text-secondary-foreground px-8 py-6 h-auto rounded-xl"
        >
          <Link to="/projects" className="font-semibold">
            Explore Our Work
          </Link>
        </Button>
      </PageHeader>

      <section className="py-20 bg-card border-y border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold uppercase tracking-wide text-secondary">Trusted Globally</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">A reputation built on precision and service.</h2>
            <p className="text-lg text-muted-foreground">
              Our multidisciplinary team blends architectural sensitivity with engineering rigor. Each project is delivered with the polish of a hospitality brand and the security standards of critical infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:max-w-xl">
            {globalStats.map((stat) => (
              <Card key={stat.label} className="text-center border border-border bg-background/85 backdrop-blur-sm rounded-3xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-3xl font-bold text-secondary">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {stat.label}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-card">
        <Benefits />
      </div>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-elegant">
            <img src={vinylFence} alt="SRK FENCE team at work" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
            <div className="absolute bottom-6 left-6 text-primary-foreground">
              <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/70">Heritage Property</p>
              <h3 className="text-2xl font-semibold">Courtyard Residence, Florence</h3>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">What makes SRK FENCE different?</h2>
            <p className="text-lg text-muted-foreground">
              We take ownership of the entire journey, from creative direction to compliance and aftercare. Our clients enjoy luxury-grade communication and flawless execution, no matter the scale.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <Card key={pillar.title} className="border border-border bg-gradient-to-br from-background via-background/90 to-secondary/10 rounded-2xl">
                    <CardHeader className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
                        <Icon className="w-6 h-6 text-secondary-foreground" />
                      </div>
                      <CardTitle className="text-lg text-foreground">{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.copy}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,hsl(142_55%_48%/0.1)_0%,transparent_55%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Design led, safety assured</h2>
            <p className="text-lg text-muted-foreground">
              Our engineers collaborate with architects and landscape designers to integrate sightlines, lighting, and technology without compromising the artistry of your property.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              {carePoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="border border-border bg-background/85 backdrop-blur-sm rounded-3xl shadow-elegant">
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl text-foreground">Partnering with SRK FENCE</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Expect proactive updates, on-site leadership, and documentation that keeps every stakeholder aligned. We treat your property like a flagship destination—because it is.
              </p>
              <Button asChild size="lg" className="bg-gradient-accent hover:shadow-glow text-secondary-foreground h-auto px-6 py-4">
                <Link to="/contact" className="font-semibold">
                  Talk with our specialists
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold">Your perimeter, reimagined.</h2>
            <p className="text-lg text-primary-foreground/80">
              Share your vision and we’ll craft a roadmap with visuals, finishes, and milestones tailored to your site.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-secondary text-secondary-foreground hover:shadow-glow px-8 py-6 h-auto rounded-xl"
          >
            <Link to="/services" className="font-semibold">
              Discover Our Services
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
};

export default WhyUsPage;

