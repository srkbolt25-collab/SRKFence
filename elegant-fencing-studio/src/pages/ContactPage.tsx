import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroFence from "@/assets/hero-fence.jpg";
import { CalendarCheck, Globe2, MessageSquare, PhoneCall, Timer, Users } from "lucide-react";

const conciergeServices = [
  {
    icon: PhoneCall,
    title: "Dedicated Project Line",
    description: "Experienced specialists ready to discuss your project requirements and next steps.",
  },
  {
    icon: CalendarCheck,
    title: "On-Site Assessments",
    description: "Schedule a complimentary property walk-through with an SRK FENCE consultant.",
  },
  {
    icon: MessageSquare,
    title: "Global Support",
    description: "24/7 assistance for active projects across time zones and regions.",
  },
];

const contactStats = [
  {
    value: "24/7",
    label: "Dedicated support for active installations",
    icon: Timer,
  },
  {
    value: "12",
    label: "Regional project coordination hubs",
    icon: Globe2,
  },
  {
    value: "48 hrs",
    label: "Average turnaround for design proposals",
    icon: Users,
  },
];

const faqItems = [
  {
    question: "How quickly can we start a new project?",
    answer:
      "After the initial consultation we deliver a proposal within 48 hours. Mobilization timelines vary by scope, but most projects kick off within 2-3 weeks of approval.",
  },
  {
    question: "Do you handle permits and compliance?",
    answer:
      "Yes. Our permitting specialists coordinate with local authorities, homeowner associations, and regulatory bodies to secure approvals and documentation.",
  },
  {
    question: "Can you work alongside existing contractors?",
    answer:
      "We frequently collaborate with general contractors, landscapers, and architects. Our project leads integrate into your construction workflow for seamless delivery.",
  },
  {
    question: "What aftercare services are available?",
    answer:
      "SRK FENCE offers seasonal maintenance, emergency repairs, finish restoration, and technology upgrades to extend the life of your installation.",
  },
];

const ContactPage = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Let's Build Your Next Fencing Project"
        description="Share your vision and our team will prepare a tailored proposal with timelines, materials, and investment options."
        backgroundImage={heroFence}
        variant="contrast"
      >
        <Button
          asChild
          size="lg"
          className="bg-gradient-accent hover:shadow-glow text-secondary-foreground px-8 py-6 h-auto rounded-xl"
        >
          <a href="tel:+15551234567" className="font-semibold">
            Call +1 (555) 123-4567
          </a>
        </Button>
      </PageHeader>

      <section className="bg-card border-b border-border/60 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="border border-border bg-background/90 rounded-3xl shadow-elegant">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow">
                      <Icon className="w-7 h-7 text-secondary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-secondary">{stat.value}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                        {stat.label}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-card">
        <Contact />
      </section>

      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,hsl(142_55%_48%/0.08)_0%,transparent_55%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
            <Card className="border border-border bg-background/90 backdrop-blur-md rounded-3xl shadow-elegant overflow-hidden">
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl text-foreground">Global Coordination Hub</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  We deploy dedicated project coordinators in North America, Europe, Asia-Pacific, and the Middle East. Our teams operate in local time zones to collaborate with your stakeholders efficiently.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-72 rounded-2xl bg-gradient-to-br from-secondary/20 via-secondary/10 to-primary/20 border border-border flex items-center justify-center text-center px-8">
                  <p className="text-lg text-muted-foreground">
                    Interactive map coming soon. Share your location and we’ll connect you with the closest SRK FENCE expert for on-site evaluation.
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">How We Begin</h2>
              <p className="text-lg text-muted-foreground">
                Share architectural drawings, inspiration imagery, or security requirements. Our specialists translate your objectives into a precise scope of work and schedule an on-site assessment when needed.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {conciergeServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Card key={service.title} className="border border-border bg-gradient-card rounded-2xl">
                      <CardHeader className="space-y-3">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow">
                          <Icon className="w-7 h-7 text-secondary-foreground" />
                        </div>
                        <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,hsl(142_55%_48%/0.08)_0%,transparent_55%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl text-center mx-auto mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to accelerate planning, budgeting, and execution. Reach out for tailored insights on your property.
            </p>
          </div>
          <Card className="border border-border bg-background/80 backdrop-blur-sm rounded-3xl shadow-elegant">
            <CardContent className="p-6 sm:p-10">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={item.question} value={`item-${index}`} className="border-border rounded-2xl px-4">
                    <AccordionTrigger className="text-left text-lg font-semibold text-foreground">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=2000&q=80"
          alt="Consultation meeting"
          className="w-full h-[360px] object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-primary-foreground space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Talk with an SRK FENCE specialist</h2>
              <p className="text-lg text-primary-foreground/80">
                We’ll review your site, discuss finishes, and outline next steps in a collaborative working session.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-secondary text-secondary-foreground hover:shadow-glow px-8 py-6 h-auto rounded-xl"
            >
              <a href="mailto:contact@securefence.com" className="font-semibold">
                Email our team
              </a>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ContactPage;

