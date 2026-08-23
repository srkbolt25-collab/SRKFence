'use client';

import Benefits from "@/components/Benefits";
import HeroBannerSlider from "@/components/HeroBannerSlider";
import Image from "next/image";
import woodFence from "@/assets/wood-fence.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Gem, Globe2, Handshake, Sparkles, Building2, Target, Factory, Award, Briefcase, Users, Eye, Shield, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const globalStats = [
  { value: "1,200+", label: "Fencing projects supported" },
  { value: "30", label: "Countries and project markets served" },
  { value: "4.9/5", label: "Average client satisfaction" },
];

const pillars = [
  {
    icon: Gem,
    title: "Specification-Led Supply",
    copy: "We quote chain link, welded mesh, PVC, anti-climb, temporary, barbed wire, razor wire and steel fencing around actual project dimensions.",
  },
  {
    icon: Handshake,
    title: "RFQ Clarity",
    copy: "Our team helps buyers confirm fence height, running meters, mesh opening, coating, posts, gates, delivery city and installation scope.",
  },
  {
    icon: Globe2,
    title: "UAE and GCC Reach",
    copy: "Regional sourcing and project support for UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman, Jordan and Middle East enquiries.",
  },
];

const carePoints = [
  "Clear product recommendations by security level, exposure and site use",
  "Specification support for drawings, BOQ, coating and accessories",
  "Supply-only and installation discussions for commercial, industrial and security projects",
];

const whyUsHeroSlides = [
  "/Whyusnew/barbed-wire-fencing-security-gcc-middle-east.png",
  "/Whyusnew/chain-link-fence-supplier-uae-saudi-gcc.png",
  "/Whyusnew/corrugated-metal-fence-panel-gcc.png",
  "/Whyusnew/welded-mesh-fence-uae-gcc-industrial.png",
];

const WhyUsPage = () => {
  return (
    <>
      <HeroBannerSlider slides={whyUsHeroSlides} altPrefix="Why SRK FENCE banner" />

      <section className="py-20 bg-card border-y border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold uppercase tracking-wide text-secondary">Trusted Fencing Partner</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">A UAE fencing supplier built for practical project delivery.</h2>
            <p className="text-lg text-muted-foreground">
              SRK Fence supports contractors, procurement teams, consultants and facility managers with clear quotations,
              reliable product options and perimeter security guidance for Dubai, UAE and GCC projects.
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
            <Image
              src={woodFence}
              alt="SRK FENCE team at work"
              fill
              className="object-cover"
              loading="lazy"
              quality={65}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
            <div className="absolute bottom-6 left-6 text-primary-foreground">
              <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/70">Project Support</p>
              <h3 className="text-2xl font-semibold">Fencing Supply and Installation Guidance</h3>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Why choose SRK Fence?</h2>
            <p className="text-lg text-muted-foreground">
              We connect buyer intent with the right fencing system. Whether the project needs chain link fence,
              welded mesh fence, anti-climb 358 fence, temporary fencing, barbed wire, razor wire or gate accessories,
              the quotation starts with site use, security level, dimensions and delivery requirements.
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
            <h2 className="text-4xl font-bold text-foreground">Project-ready fencing recommendations</h2>
            <p className="text-lg text-muted-foreground">
              SRK Fence helps buyers compare practical options for boundary security, warehouse protection,
              construction site control, data center security, oil and gas facilities, farms and residential boundaries.
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
                Expect clear communication, product guidance and quotation support for fence length, height, mesh
                opening, wire diameter, coating, posts, gates, drawings, BOQ and installation scope.
              </p>
              <Button asChild size="lg" className="bg-gradient-accent hover:shadow-glow text-secondary-foreground h-auto px-6 py-4">
                <Link href="/contact" className="font-semibold">
                  Talk with our specialists
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">About Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
              About SRK FENCE
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dubai/UAE fencing supply, installation and perimeter security support for GCC projects
            </p>
          </div>

          {/* Company Profile */}
          <div id="company-profile" className="scroll-mt-24 mb-20">
            <Card className="border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
                    <Building2 className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground">Company Profile</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  SRK FENCE Industries is a Dubai/UAE based fencing supplier, contractor and installation partner for chain link fencing, welded mesh fencing, steel fencing, PVC fencing, anti-climb fencing, temporary fencing, barbed wire, razor wire, gates, posts, accessories and custom perimeter security solutions across UAE, GCC and Middle East.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Our Heritage
                    </h4>
                    <p className="text-muted-foreground">
                      SRK FENCE supports procurement teams, contractors, consultants and project owners with specification-led fencing quotations for residential, commercial, industrial, construction and security sites.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Globe2 className="w-5 h-5 text-primary" />
                      Global Reach
                    </h4>
                    <p className="text-muted-foreground">
                      Our product and project support covers UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman, Jordan, GCC and wider Middle East requirements.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Handshake className="w-5 h-5 text-primary" />
                      Client Trust
                    </h4>
                    <p className="text-muted-foreground">
                      We have successfully completed 1,200+ signature projects, earning the trust of clients in residential, commercial, industrial, and critical infrastructure sectors.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Industry Recognition
                    </h4>
                    <p className="text-muted-foreground">
                      Recognized for excellence in manufacturing, quality standards, and customer service, maintaining a 4.9/5 average client satisfaction rating.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vision & Mission */}
          <div id="vision-mission" className="scroll-mt-24 mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border border-border bg-gradient-to-br from-background via-background/90 to-primary/5">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#c5162a] to-[#e63946] flex items-center justify-center shadow-glow">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    To be a trusted UAE and GCC fencing supplier recognized for reliable product quality, clear RFQ support and practical perimeter security solutions.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Supporting chain link, welded mesh, PVC, anti-climb, temporary and security fencing requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Serving UAE, GCC and Middle East buyers with consistent project communication</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Building lasting partnerships with contractors, consultants, procurement teams and facility managers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#c5162a] to-[#e63946] flex items-center justify-center shadow-glow">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    To deliver fencing supply and installation support that protects sites, clarifies specifications and helps buyers source the right perimeter system for the job.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Provide practical fencing products at competitive project pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Help customers prepare clear RFQs with dimensions, materials, coating, gates and delivery details</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Support safe, durable and specification-led perimeter protection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Manufacturing Capacity */}
          <div id="manufacturing-capacity" className="scroll-mt-24 mb-20">
            <Card className="border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
                    <Factory className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground">Manufacturing Capacity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our state-of-the-art manufacturing facilities are equipped with advanced machinery and technology, enabling us to produce high-quality fencing systems at scale while maintaining precision and consistency.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-xl bg-background border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Production Volume</h4>
                    <p className="text-muted-foreground">
                      Capable of manufacturing large-scale projects with production capacity exceeding 10,000 linear meters per month.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-background border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Factory className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Advanced Facilities</h4>
                    <p className="text-muted-foreground">
                      Modern manufacturing units with automated production lines, quality control labs, and testing facilities.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-background border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Skilled Workforce</h4>
                    <p className="text-muted-foreground">
                      Team of experienced engineers, technicians, and craftsmen ensuring precision in every product.
                    </p>
                  </div>
                </div>
                <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Capabilities:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom fabrication and design services</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Multiple material processing (Steel, Aluminum, PVC)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Surface treatment and coating facilities</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Quality testing and certification support</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quality Standards */}
          <div id="quality-standards" className="scroll-mt-24 mb-20">
            <Card className="border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
                    <Award className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground">Quality Standards</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Quality is at the heart of everything we do. We adhere to international standards and certifications, ensuring our products meet the highest quality benchmarks and regulatory requirements.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <Shield className="w-6 h-6 text-primary" />
                        Certifications & Standards
                      </h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>ISO 9001:2015 Quality Management System</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>CPNI & LPS1175 Certified Security Systems</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>ASTM International Standards Compliance</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>BS EN Standards for Fencing Systems</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <Eye className="w-6 h-6 text-primary" />
                        Quality Assurance Process
                      </h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Rigorous material testing and inspection</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>In-process quality checks at every stage</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Final inspection and certification before dispatch</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Continuous improvement and quality audits</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-muted-foreground">
                    Our commitment to quality extends beyond manufacturing. We provide comprehensive documentation, maintenance guides, and ongoing support to ensure our products perform optimally throughout their lifecycle.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Careers */}
          <div id="careers" className="scroll-mt-24 mb-20">
            <Card className="border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
                    <Briefcase className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground">Careers</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Join the SRK FENCE team and be part of an organization that values innovation, excellence, and professional growth. We offer exciting career opportunities for talented individuals passionate about manufacturing and engineering.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4">Why Work With Us?</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Competitive compensation and benefits packages</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Opportunities for professional development and growth</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Work on diverse and challenging projects</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Collaborative and inclusive work environment</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4">Open Positions</h4>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-background border border-border">
                        <h5 className="font-semibold text-foreground mb-2">Production Engineer</h5>
                        <p className="text-sm text-muted-foreground mb-2">Dubai / Sharjah, UAE</p>
                        <p className="text-sm text-muted-foreground">Manage production processes and quality control</p>
                      </div>
                      <div className="p-4 rounded-lg bg-background border border-border">
                        <h5 className="font-semibold text-foreground mb-2">Sales Executive</h5>
                        <p className="text-sm text-muted-foreground mb-2">UAE and GCC Markets</p>
                        <p className="text-sm text-muted-foreground">Build client relationships and drive business growth</p>
                      </div>
                      <div className="p-4 rounded-lg bg-background border border-border">
                        <h5 className="font-semibold text-foreground mb-2">Quality Assurance Specialist</h5>
                        <p className="text-sm text-muted-foreground mb-2">Dubai / Sharjah, UAE</p>
                        <p className="text-sm text-muted-foreground">Ensure product quality and compliance standards</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Interested in Joining Our Team?</h4>
                  <p className="text-muted-foreground mb-4">
                    Send your resume to <a href="mailto:careers@srkfence.com" className="text-primary hover:underline font-semibold">careers@srkfence.com</a> or contact our HR department for more information.
                  </p>
                  <Button asChild className="bg-gradient-accent hover:shadow-glow text-secondary-foreground">
                    <Link href="/contact">
                      Contact HR Department
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <section className="py-20 bg-primary text-primary-foreground rounded-3xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="space-y-4 max-w-xl">
                <h2 className="text-3xl sm:text-4xl font-bold">Ready to Work With Us?</h2>
                <p className="text-lg text-primary-foreground/80">
                  Contact our team to discuss your fencing requirements and discover how SRK FENCE can help protect and enhance your property.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-secondary text-secondary-foreground hover:shadow-glow px-8 py-6 h-auto rounded-xl"
              >
                <Link href="/contact" className="font-semibold">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default WhyUsPage;
