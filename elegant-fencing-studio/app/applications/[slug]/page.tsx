'use client';
import { useState, useEffect } from 'react';
import SiteLayout from '@/components/SiteLayout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import Image from 'next/image';
import heroFence from '@/assets/hero-fence.jpg';
import metalFence from '@/assets/metal-fence.jpg';
import { apiClient } from '@/lib/api';

const applicationsData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  image: any;
  features: string[];
  benefits: string[];
  specifications: string[];
  useCases: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}> = {
  'residential-fencing': {
    title: 'Residential Fencing',
    description: 'Secure and stylish fencing solutions for homes, apartments, and residential communities.',
    longDescription: 'SRK FENCE provides premium residential fencing solutions that combine security, privacy, and aesthetic appeal. Our residential fencing systems are designed to enhance your property value while providing the protection and privacy your family deserves. From elegant picket fences to high-security perimeter systems, we offer a wide range of options to suit every residential need.',
    image: metalFence,
    features: [
      'Enhanced Privacy & Security',
      'Aesthetic Appeal & Curb Appeal',
      'Property Value Enhancement',
      'Custom Design Options',
      'Low Maintenance Solutions',
      'Weather Resistant Materials',
    ],
    benefits: [
      'Protect your family and property with reliable security fencing',
      'Increase property value with professionally installed fencing',
      'Enjoy privacy in your outdoor spaces',
      'Choose from various styles and materials to match your home',
      'Long-lasting solutions with minimal maintenance requirements',
    ],
    specifications: [
      'Multiple height options: 1.2m to 2.4m',
      'Various materials: Steel, Aluminum, PVC, Wood',
      'Custom color and finish options',
      'Gates and access control integration',
      'Installation by certified professionals',
    ],
    useCases: [
      'Single-family homes',
      'Apartment complexes',
      'Gated communities',
      'Townhouses and condominiums',
      'Residential developments',
    ],
    metaTitle: 'Residential Fencing Solutions | SRK FENCE - Secure Your Home',
    metaDescription: 'Professional residential fencing solutions for homes and communities. Enhance security, privacy, and property value with our premium fencing systems.',
    keywords: 'residential fencing, home fencing, privacy fencing, residential security, property fencing',
  },
  'commercial-industrial': {
    title: 'Commercial & Industrial Fencing',
    description: 'Robust fencing systems for commercial properties, factories, and industrial facilities.',
    longDescription: 'Our commercial and industrial fencing solutions are engineered to meet the demanding requirements of business facilities. Whether you need to secure a retail complex, protect an industrial plant, or establish clear boundaries for commercial properties, SRK FENCE delivers durable, cost-effective fencing systems that stand up to heavy use and harsh conditions.',
    image: heroFence,
    features: [
      'High Security & Durability',
      'Cost-Effective Solutions',
      'Custom Industrial Specifications',
      'Scalable for Large Properties',
      'Access Control Integration',
      'Low Maintenance Requirements',
    ],
    benefits: [
      'Protect valuable assets and inventory',
      'Meet insurance and compliance requirements',
      'Control access to your facility',
      'Reduce security costs with reliable perimeter protection',
      'Professional appearance that enhances your brand',
    ],
    specifications: [
      'Heavy-duty construction for industrial use',
      'Height options: 1.8m to 3.0m',
      'Anti-climb and anti-cut features',
      'Vehicle access gates and barriers',
      'Integration with security systems',
    ],
    useCases: [
      'Manufacturing facilities',
      'Retail complexes',
      'Office parks',
      'Industrial warehouses',
      'Business districts',
    ],
    metaTitle: 'Commercial & Industrial Fencing | SRK FENCE - Secure Your Business',
    metaDescription: 'Professional commercial and industrial fencing solutions. Protect your business assets with durable, cost-effective perimeter security systems.',
    keywords: 'commercial fencing, industrial fencing, business security, warehouse fencing, factory fencing',
  },
  'oil-gas-sector': {
    title: 'Oil & Gas Sector Fencing',
    description: 'Specialized fencing for oil refineries, gas plants, and energy facilities.',
    longDescription: 'The oil and gas industry requires specialized fencing solutions that can withstand extreme conditions while maintaining strict security standards. SRK FENCE provides corrosion-resistant, high-security fencing systems designed specifically for refineries, gas plants, pipelines, and energy facilities. Our solutions meet industry safety standards and regulatory requirements.',
    image: heroFence,
    features: [
      'Corrosion Resistant Materials',
      'Safety Compliance & Standards',
      'High Security Requirements',
      'Extreme Weather Resistance',
      'Fire Retardant Options',
      'Industry-Specific Certifications',
    ],
    benefits: [
      'Meet strict safety and security regulations',
      'Protect critical infrastructure from unauthorized access',
      'Withstand harsh industrial environments',
      'Reduce maintenance costs with corrosion-resistant materials',
      'Ensure compliance with industry standards',
    ],
    specifications: [
      'Galvanized steel or specialized alloys',
      'Height: 2.4m to 3.6m standard',
      'Anti-climb and anti-cut protection',
      'Integrated monitoring and alarm systems',
      'Emergency access points and gates',
    ],
    useCases: [
      'Oil refineries',
      'Natural gas processing plants',
      'Pipeline facilities',
      'Petrochemical complexes',
      'Energy storage facilities',
    ],
    metaTitle: 'Oil & Gas Sector Fencing | SRK FENCE - Secure Energy Facilities',
    metaDescription: 'Specialized fencing solutions for oil and gas facilities. Corrosion-resistant, high-security systems meeting industry safety standards.',
    keywords: 'oil and gas fencing, refinery fencing, energy facility security, pipeline fencing, petrochemical fencing',
  },
  'data-centers': {
    title: 'Data Centers Fencing',
    description: 'High-security fencing solutions for data centers and critical IT infrastructure.',
    longDescription: 'Data centers house critical IT infrastructure that requires the highest levels of security. SRK FENCE provides CPNI and LPS1175 certified fencing systems specifically designed for data centers and critical infrastructure facilities. Our solutions integrate with advanced monitoring systems and provide multiple layers of security to protect sensitive information and equipment.',
    image: heroFence,
    features: [
      'CPNI & LPS1175 Certified',
      'Integrated Monitoring Systems',
      'Maximum Security Standards',
      'Custom Security Configurations',
      '24/7 Surveillance Ready',
      'Multi-Layer Protection',
    ],
    benefits: [
      'Meet critical infrastructure security requirements',
      'Protect sensitive data and equipment',
      'Integrate with existing security systems',
      'Comply with international security standards',
      'Reduce risk of unauthorized access',
    ],
    specifications: [
      'CPNI certified systems available',
      'LPS1175 A1, B3, C5, D10 ratings',
      'Height: 2.4m to 3.6m',
      'Integrated CCTV and alarm systems',
      'Access control integration',
    ],
    useCases: [
      'Data centers',
      'Server farms',
      'Telecommunications facilities',
      'Critical IT infrastructure',
      'Cloud computing facilities',
    ],
    metaTitle: 'Data Center Fencing | SRK FENCE - CPNI Certified Security',
    metaDescription: 'High-security CPNI and LPS1175 certified fencing for data centers. Protect critical IT infrastructure with maximum security systems.',
    keywords: 'data center fencing, CPNI certified fencing, IT security fencing, server farm security, critical infrastructure fencing',
  },
  'schools-public-parks': {
    title: 'Schools & Public Parks Fencing',
    description: 'Safe and secure fencing for educational institutions and public recreational areas.',
    longDescription: 'Creating safe environments for children and communities is our priority. SRK FENCE provides child-safe, high-visibility fencing solutions for schools, playgrounds, and public parks. Our systems are designed to ensure safety while maintaining visibility for supervision. We use materials and designs that meet child safety standards and provide durable solutions for high-traffic public areas.',
    image: metalFence,
    features: [
      'Child-Safe Design Standards',
      'High Visibility Mesh',
      'Durable Public Use Construction',
      'Compliance Certified',
      'Weather Resistant',
      'Low Maintenance',
    ],
    benefits: [
      'Ensure child safety in educational and recreational areas',
      'Meet school and park safety regulations',
      'Provide clear boundaries while maintaining visibility',
      'Durable solutions for high-traffic areas',
      'Easy maintenance for public facilities',
    ],
    specifications: [
      'Child-safe wire diameter: 2.5mm',
      'Height: 1.2m to 2.4m',
      'High visibility mesh options',
      'Colorful design options available',
      'Gates with child-safe latches',
    ],
    useCases: [
      'Schools and educational institutions',
      'Public playgrounds',
      'Community parks',
      'Recreation centers',
      'Sports facilities',
    ],
    metaTitle: 'School & Park Fencing | SRK FENCE - Safe Playground Solutions',
    metaDescription: 'Child-safe fencing for schools and public parks. High-visibility, durable solutions meeting safety standards for educational and recreational facilities.',
    keywords: 'school fencing, playground fencing, park fencing, child safe fencing, educational facility security',
  },
  'farms-animal-enclosures': {
    title: 'Farms & Animal Enclosures',
    description: 'Specialized fencing for agricultural properties, livestock management, and animal enclosures.',
    longDescription: 'Agricultural and livestock operations require specialized fencing that can contain animals while withstanding weather and wear. SRK FENCE provides durable, weather-resistant fencing solutions designed for farms, ranches, and animal enclosures. Our systems are engineered to handle the unique challenges of agricultural environments while providing reliable containment and protection.',
    image: metalFence,
    features: [
      'Animal Containment Design',
      'Weather Resistant Materials',
      'Agricultural Grade Construction',
      'Long-Lasting Durability',
      'Easy Installation & Maintenance',
      'Cost-Effective Solutions',
    ],
    benefits: [
      'Secure livestock and protect crops',
      'Withstand harsh weather conditions',
      'Reduce maintenance and replacement costs',
      'Improve farm security and organization',
      'Meet agricultural safety standards',
    ],
    specifications: [
      'Various mesh sizes for different animals',
      'Height options: 1.0m to 2.4m',
      'Galvanized steel for corrosion resistance',
      'Electric fence integration available',
      'Gates for vehicle and animal access',
    ],
    useCases: [
      'Livestock farms',
      'Crop protection',
      'Animal enclosures',
      'Ranch properties',
      'Agricultural facilities',
    ],
    metaTitle: 'Farm & Animal Fencing | SRK FENCE - Agricultural Solutions',
    metaDescription: 'Specialized fencing for farms and animal enclosures. Durable, weather-resistant solutions for livestock management and agricultural security.',
    keywords: 'farm fencing, livestock fencing, animal enclosure, agricultural fencing, ranch fencing',
  },
  'boundary-security-fencing': {
    title: 'Boundary & Security Fencing',
    description: 'Perimeter security fencing for critical infrastructure, military bases, and high-security facilities.',
    longDescription: 'Critical infrastructure and high-security facilities require perimeter fencing that provides maximum protection against unauthorized access. SRK FENCE delivers advanced security fencing systems designed for military installations, government facilities, and critical infrastructure. Our solutions incorporate anti-climb, anti-cut, and anti-ram features with integrated surveillance capabilities.',
    image: heroFence,
    features: [
      'Maximum Security Standards',
      'Anti-Climb & Anti-Cut Design',
      'Perimeter Protection',
      'Surveillance Integration',
      'Multi-Layer Security',
      'Government Approved',
    ],
    benefits: [
      'Protect critical infrastructure from threats',
      'Meet military and government security standards',
      'Deter unauthorized access attempts',
      'Integrate with advanced security systems',
      'Provide comprehensive perimeter protection',
    ],
    specifications: [
      'Height: 2.4m to 4.0m',
      'Anti-climb and anti-cut features',
      'Integrated CCTV and motion sensors',
      'Vehicle barrier integration',
      'Access control systems',
    ],
    useCases: [
      'Military bases',
      'Government facilities',
      'Critical infrastructure',
      'High-security installations',
      'Border security',
    ],
    metaTitle: 'Boundary & Security Fencing | SRK FENCE - Maximum Protection',
    metaDescription: 'High-security perimeter fencing for critical infrastructure. Anti-climb, anti-cut systems with integrated surveillance for maximum protection.',
    keywords: 'security fencing, perimeter fencing, military fencing, boundary fencing, high security fencing',
  },
  'warehouses-logistic-centers': {
    title: 'Warehouses & Logistic Centers',
    description: 'Secure fencing solutions for warehouses, distribution centers, and logistics facilities.',
    longDescription: 'Warehouses and logistics centers require fencing that protects valuable inventory while allowing efficient operations. SRK FENCE provides secure, scalable fencing solutions designed for distribution centers, warehouses, and logistics facilities. Our systems balance security needs with operational efficiency, providing access control while protecting assets.',
    image: heroFence,
    features: [
      'Asset Protection',
      'Access Control Integration',
      'Scalable Solutions',
      'Cost-Effective Design',
      'Vehicle Access Gates',
      'Loading Bay Security',
    ],
    benefits: [
      'Protect valuable inventory and assets',
      'Control access to your facility',
      'Meet insurance requirements',
      'Support efficient logistics operations',
      'Reduce theft and unauthorized access',
    ],
    specifications: [
      'Height: 1.8m to 2.4m standard',
      'Vehicle and pedestrian gates',
      'Loading bay access control',
      'CCTV integration options',
      'Scalable for large facilities',
    ],
    useCases: [
      'Distribution centers',
      'Warehouses',
      'Logistics hubs',
      'Storage facilities',
      'Shipping yards',
    ],
    metaTitle: 'Warehouse & Logistics Fencing | SRK FENCE - Protect Your Assets',
    metaDescription: 'Secure fencing for warehouses and logistics centers. Protect inventory and assets with scalable, cost-effective perimeter security solutions.',
    keywords: 'warehouse fencing, logistics fencing, distribution center security, storage facility fencing',
  },
  'country-border-fencing': {
    title: 'Country Border Fencing',
    description: 'Large-scale border security fencing systems for national boundaries.',
    longDescription: 'National border security requires large-scale fencing systems engineered for extreme conditions and maximum security. SRK FENCE provides comprehensive border fencing solutions designed for national boundaries, incorporating advanced security features, surveillance integration, and durable construction to withstand harsh environmental conditions over vast distances.',
    image: heroFence,
    features: [
      'National Security Standards',
      'Extreme Durability',
      'Large-Scale Project Capability',
      'Government Approved Systems',
      'Surveillance Integration',
      'Weather & Climate Resistant',
    ],
    benefits: [
      'Secure national boundaries',
      'Control border crossings',
      'Integrate with border security systems',
      'Withstand extreme environmental conditions',
      'Support national security objectives',
    ],
    specifications: [
      'Height: 3.0m to 6.0m',
      'Anti-climb and anti-cut protection',
      'Integrated surveillance systems',
      'Vehicle barrier integration',
      'Designed for extreme conditions',
    ],
    useCases: [
      'National borders',
      'International boundaries',
      'Border checkpoints',
      'Security perimeters',
      'Large-scale security projects',
    ],
    metaTitle: 'Country Border Fencing | SRK FENCE - National Security Solutions',
    metaDescription: 'Large-scale border security fencing for national boundaries. Government-approved systems designed for extreme conditions and maximum security.',
    keywords: 'border fencing, national security fencing, country border security, international boundary fencing',
  },
};

export default function ApplicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const [application, setApplication] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [slug, setSlug] = useState<string>('');

  useEffect(() => {
    const loadParams = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
      loadApplication(resolvedParams.slug);
    };
    loadParams();
  }, [params]);

  const loadApplication = async (appSlug: string) => {
    try {
      setLoading(true);
      const response = await apiClient.getApplications();
      const found = (response.applications || []).find((app: any) => app.slug === appSlug && app.status === 'Published');
      
      if (!found) {
        // Fallback to static data
        const staticApp = applicationsData[appSlug];
        setApplication(staticApp || null);
      } else {
        // Use API data, but fallback to static image if needed
        const imageSrc = found.image || (applicationsData[appSlug]?.image || heroFence);
        setApplication({
          ...found,
          image: imageSrc,
          images: found.images || [],
        });
      }
    } catch (error) {
      console.error('Error loading application:', error);
      // Fallback to static data
      const staticApp = applicationsData[appSlug];
      setApplication(staticApp || null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <SiteLayout>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
        </div>
      </SiteLayout>
    );
  }

  if (!application) {
    return (
      <SiteLayout>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Application Not Found</h1>
          <p className="text-muted-foreground mb-8">The application you're looking for doesn't exist.</p>
          <Link href="/applications" className="text-primary hover:underline">
            View All Applications
          </Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Application"
        title={application.title}
        description={application.description}
        variant="contrast"
        backgroundImage={application.image}
        overlayClassName="from-black/85 via-black/75 to-black/60"
      />

      <section className="bg-background py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {application.longDescription}
              </p>
            </div>

            {/* Features */}
            {application.features && application.features.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {application.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Benefits */}
            {application.benefits && application.benefits.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {application.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Specifications */}
            {application.specifications && application.specifications.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {application.specifications.map((spec, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Use Cases */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Common Use Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  {application.useCases && application.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{useCase}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Image Gallery */}
            {application.images && application.images.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Image Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {application.images.map((imageUrl: string, idx: number) => (
                      <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border border-border group">
                        {imageUrl.startsWith('http') ? (
                          <img
                            src={imageUrl}
                            alt={`${application.title} - Image ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        ) : (
                          <Image
                            src={imageUrl}
                            alt={`${application.title} - Image ${idx + 1}`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* CTA */}
            <div className="text-center py-8 border-t border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact our expert team to discuss your {application.title.toLowerCase()} requirements and receive a customized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                >
                  <Link href="/products">
                    View Products
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

