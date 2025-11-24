'use client';

import { useState, useEffect } from 'react';
import SiteLayout from '@/components/SiteLayout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Home, Building2, Fuel, Server, GraduationCap, Trees, Shield, Warehouse, Globe, Loader2 } from 'lucide-react';
import metalFence from '@/assets/metal-fence.jpg';
import heroFence from '@/assets/hero-fence.jpg';
import Image from 'next/image';
import { apiClient } from '@/lib/api';

const iconMap: Record<string, any> = {
  'residential-fencing': Home,
  'commercial-industrial': Building2,
  'oil-gas-sector': Fuel,
  'data-centers': Server,
  'schools-public-parks': GraduationCap,
  'farms-animal-enclosures': Trees,
  'boundary-security-fencing': Shield,
  'warehouses-logistic-centers': Warehouse,
  'country-border-fencing': Globe,
};

const defaultApplications = [
  {
    slug: 'residential-fencing',
    title: 'Residential Fencing',
    description: 'Secure and stylish fencing solutions for homes, apartments, and residential communities. Enhance privacy, security, and property value.',
    icon: Home,
    image: metalFence,
    features: ['Privacy & Security', 'Aesthetic Appeal', 'Property Value Enhancement', 'Custom Designs'],
  },
  {
    slug: 'commercial-industrial',
    title: 'Commercial & Industrial',
    description: 'Robust fencing systems for commercial properties, factories, and industrial facilities. Designed for durability and maximum security.',
    icon: Building2,
    image: heroFence,
    features: ['High Security', 'Durability', 'Cost-Effective', 'Custom Solutions'],
  },
  {
    slug: 'oil-gas-sector',
    title: 'Oil & Gas Sector',
    description: 'Specialized fencing for oil refineries, gas plants, and energy facilities. Meeting strict safety and security standards.',
    icon: Fuel,
    image: heroFence,
    features: ['Safety Compliance', 'Corrosion Resistant', 'High Security', 'Industry Standards'],
  },
  {
    slug: 'data-centers',
    title: 'Data Centers',
    description: 'High-security fencing solutions for data centers and critical IT infrastructure. CPNI and LPS1175 certified systems.',
    icon: Server,
    image: heroFence,
    features: ['CPNI Certified', 'LPS1175 Compliant', 'Integrated Monitoring', 'Maximum Security'],
  },
  {
    slug: 'schools-public-parks',
    title: 'Schools & Public Parks',
    description: 'Safe and secure fencing for educational institutions and public recreational areas. Child-safe designs with high visibility.',
    icon: GraduationCap,
    image: metalFence,
    features: ['Child Safety', 'High Visibility', 'Durable Construction', 'Compliance Certified'],
  },
  {
    slug: 'farms-animal-enclosures',
    title: 'Farms & Animal Enclosures',
    description: 'Specialized fencing for agricultural properties, livestock management, and animal enclosures. Weather-resistant and durable.',
    icon: Trees,
    image: metalFence,
    features: ['Animal Containment', 'Weather Resistant', 'Agricultural Grade', 'Long-Lasting'],
  },
  {
    slug: 'boundary-security-fencing',
    title: 'Boundary & Security Fencing',
    description: 'Perimeter security fencing for critical infrastructure, military bases, and high-security facilities. Maximum protection guaranteed.',
    icon: Shield,
    image: heroFence,
    features: ['Maximum Security', 'Perimeter Protection', 'Anti-Climb Design', 'Surveillance Ready'],
  },
  {
    slug: 'warehouses-logistic-centers',
    title: 'Warehouses & Logistic Centers',
    description: 'Secure fencing solutions for warehouses, distribution centers, and logistics facilities. Protect valuable inventory and assets.',
    icon: Warehouse,
    image: heroFence,
    features: ['Asset Protection', 'Access Control', 'Scalable Solutions', 'Cost-Effective'],
  },
  {
    slug: 'country-border-fencing',
    title: 'Country Border Fencing',
    description: 'Large-scale border security fencing systems for national boundaries. Engineered for extreme conditions and maximum security.',
    icon: Globe,
    image: heroFence,
    features: ['National Security', 'Extreme Durability', 'Large-Scale Projects', 'Government Approved'],
  },
];

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      setLoading(true);
      const response = await apiClient.getApplications();
      const publishedApps = (response.applications || []).filter((app: any) => app.status === 'Published');
      setApplications(publishedApps.length > 0 ? publishedApps : defaultApplications);
    } catch (error) {
      console.error('Error loading applications:', error);
      setApplications(defaultApplications);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Applications"
        title="Fencing Solutions for Every Sector"
        description="From residential properties to critical infrastructure, we provide specialized fencing solutions tailored to your specific industry needs."
        variant="contrast"
        backgroundImage={heroFence}
        overlayClassName="from-black/85 via-black/75 to-black/60"
      />

      <section className="bg-background py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {applications.map((application) => {
                const Icon = iconMap[application.slug] || Building2;
                const imageSrc = application.image || heroFence;
                return (
                  <Link key={application.slug} href={`/applications/${application.slug}`}>
                    <Card className="group h-full overflow-hidden border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-hover cursor-pointer">
                      <div className="relative h-48 overflow-hidden">
                        {typeof imageSrc === 'string' && imageSrc.startsWith('http') ? (
                          <img
                            src={imageSrc}
                            alt={application.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <Image
                            src={imageSrc}
                            alt={application.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                            <Icon className="h-6 w-6" />
                          </div>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {application.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {application.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {application.features && application.features.length > 0 && (
                          <div className="space-y-2 mb-4">
                            <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                            <ul className="space-y-1">
                              {application.features.slice(0, 4).map((feature: string, idx: number) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="flex items-center text-primary font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                          <span>Learn More</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-subtle relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our expert team can design and install fencing solutions tailored to your specific requirements, regardless of your industry or application.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow"
            >
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

