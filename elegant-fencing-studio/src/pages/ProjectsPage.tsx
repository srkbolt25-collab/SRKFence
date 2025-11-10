import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroFence from "@/assets/hero-fence.jpg";
import metalFence from "@/assets/metal-fence.jpg";
import vinylFence from "@/assets/vinyl-fence.jpg";
import woodFence from "@/assets/wood-fence.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Timer } from "lucide-react";
import { Link } from "react-router-dom";

const featureProjects = [
  {
    title: "Skyline Residence",
    location: "Aspen, USA",
    timeline: "8 weeks",
    description:
      "Terraced cedar fencing with hidden lighting tracks and automated gate controls for a mountain estate.",
    image: woodFence,
  },
  {
    title: "Aegean Resort",
    location: "Santorini, Greece",
    timeline: "6 weeks",
    description:
      "Powder-coated aluminum fins paired with tempered glass windbreaks to frame panoramic ocean views.",
    image: metalFence,
  },
  {
    title: "Urban Courtyard",
    location: "Toronto, Canada",
    timeline: "5 weeks",
    description:
      "Low-maintenance vinyl privacy walls layered with planters and sculptural accents for a modern community.",
    image: vinylFence,
  },
];

const galleryMosaic = [
  {
    title: "Tech Campus",
    subtitle: "Singapore",
    image: heroFence,
  },
  {
    title: "Desert Villa",
    subtitle: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Coastal Retreat",
    subtitle: "Monterey, USA",
    image: "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Boutique Hotel",
    subtitle: "Lisbon, Portugal",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
  },
];

const ProjectsPage = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Project Showcase"
        title="Spaces transformed with SRK FENCE"
        description="Explore a curated selection of projects where form and function come together to elevate entire properties."
        backgroundImage={heroFence}
        variant="contrast"
      >
        <Button
          asChild
          size="lg"
          className="bg-gradient-accent hover:shadow-glow text-secondary-foreground px-8 py-6 h-auto rounded-xl"
        >
          <Link to="/contact" className="font-semibold">
            Start your project
          </Link>
        </Button>
      </PageHeader>

      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(142_55%_48%/0.08)_0%,transparent_55%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">Featured projects</h2>
            <p className="text-lg text-muted-foreground">
              Every installation reflects the character of the site while delivering the assurance of precision engineering.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureProjects.map((project) => (
              <Card key={project.title} className="overflow-hidden border border-border bg-background/85 backdrop-blur-sm rounded-3xl shadow-elegant">
                <div className="h-56 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader className="space-y-3">
                  <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Timer className="w-4 h-4" />
                    {project.timeline}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Design-led, detail-driven</h2>
            <p className="text-lg text-muted-foreground">
              Our project teams immerse themselves in the landscape, architecture, and guest experience. We collaborate with your designers to translate moodboards into durable, buildable solutions.
            </p>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl border border-border bg-gradient-to-br from-background via-background/90 to-secondary/10">
                <h3 className="text-xl font-semibold text-foreground mb-2">Immersive visual previews</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Receive renderings and material palettes that highlight how daylight, lighting, and flora interact with your new perimeter.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-gradient-to-br from-background via-background/90 to-secondary/10">
                <h3 className="text-xl font-semibold text-foreground mb-2">Concierge coordination</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Site leads manage trades, safety, and homeowner expectations with hospitality-level communication.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-elegant">
            <img src={metalFence} alt="Design presentation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
            <div className="absolute bottom-6 left-6 text-primary-foreground space-y-1">
              <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/70">Design Studio</p>
              <h3 className="text-2xl font-semibold">Concept to fabrication alignment</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(142_55%_48%/0.08)_0%,transparent_55%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-12">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-4xl font-bold text-foreground">Global gallery</h2>
              <p className="text-lg text-muted-foreground">
                From coastal boardwalks to city rooftops, SRK FENCE layouts respond to site-specific challenges with refined finishes.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-border bg-background/80 backdrop-blur-sm text-foreground hover:bg-secondary hover:text-secondary-foreground px-8 py-6 h-auto rounded-xl"
            >
              <Link to="/services" className="font-semibold">
                View capabilities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryMosaic.map((item) => (
              <div key={item.title} className="relative overflow-hidden rounded-3xl border border-border bg-background/60 shadow-elegant">
                <img src={item.image} alt={item.title} className="w-full h-72 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
                <div className="absolute bottom-6 left-6 text-primary-foreground">
                  <p className="text-xl font-semibold">{item.title}</p>
                  <p className="text-sm text-primary-foreground/80">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold">Let’s craft your perimeter story</h2>
            <p className="text-lg text-primary-foreground/80">
              Share drawings or inspiration—our team will prepare concepts, budgets, and a timeline tailored to your site.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-secondary text-secondary-foreground hover:shadow-glow px-8 py-6 h-auto rounded-xl"
          >
            <Link to="/contact" className="font-semibold">
              Request a consultation
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ProjectsPage;

