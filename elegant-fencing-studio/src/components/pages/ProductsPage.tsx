'use client';

import { useState, useEffect } from "react";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroFence from "@/assets/hero-fence.jpg";
import metalFence from "@/assets/metal-fence.jpg";
import vinylFence from "@/assets/vinyl-fence.jpg";
import woodFence from "@/assets/wood-fence.jpg";
import { ArrowRight, ShieldCheck, Building2, Layers, Wrench, CheckCircle2, Eye, FileText, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { apiClient } from "@/lib/api";
import { useRFQ } from "@/contexts/RFQContext";

// Fallback products for when database is empty
const fallbackProducts = [
  {
    id: "high-security",
    title: "High Security Fencing",
    description:
      "A range of high-level security fencing including tested and approved CPNI & LPS1175 A1, B3, C5 & D10 in woven mesh, 358 prison mesh and others. Engineered for embassies, critical infrastructure, and data centers with integrated monitoring.",
    image: heroFence,
    features: [
      "CPNI & LPS1175 certified",
      "Integrated monitoring systems",
      "Custom configurations",
      "Global compliance standards",
    ],
    icon: ShieldCheck,
    highlight: true,
  },
  {
    id: "mugas-sports",
    title: "MUGAs & Sports Fencing",
    description:
      "Tailored enclosures engineered for durability, player safety, and spectator visibility. Perfect for sports facilities, schools, and recreational areas.",
    image: vinylFence,
    features: [
      "Player safety focused",
      "High visibility mesh",
      "Weather resistant",
      "Custom height options",
    ],
    icon: Building2,
  },
  {
    id: "playground",
    title: "Playground Fencing",
    description:
      "Vibrant, secure boundaries designed to protect children while complementing play areas. Safe, colorful, and durable solutions for schools and parks.",
    image: woodFence,
    features: [
      "Child-safe materials",
      "Colorful design options",
      "Easy maintenance",
      "Compliance certified",
    ],
    icon: Layers,
  },
  {
    id: "perimeter",
    title: "Perimeter Fencing",
    description:
      "Robust perimeter systems balancing aesthetics with uncompromising site protection. Ideal for commercial properties, industrial sites, and residential developments.",
    image: metalFence,
    features: [
      "Aesthetic and functional",
      "Multiple material options",
      "Long-lasting durability",
      "Customizable designs",
    ],
    icon: Building2,
  },
  {
    id: "hvm",
    title: "Hostile Vehicle Mitigation (HVM)",
    description:
      "Integrated barriers engineered to stop vehicle threats while maintaining safe access. Critical for high-security locations requiring vehicle protection.",
    image: heroFence,
    features: [
      "Vehicle impact tested",
      "Access control integration",
      "Bespoke solutions",
      "International standards",
    ],
    icon: ShieldCheck,
  },
  {
    id: "commercial",
    title: "Commercial & Hospitality Fencing",
    description:
      "Tailored solutions that balance guest experience, branding, and safety across resorts, headquarters, and campuses. Premium aesthetics meet security requirements.",
    image: metalFence,
    features: [
      "Brand customization",
      "Premium finishes",
      "Guest-friendly design",
      "Maintenance programs",
    ],
    icon: Building2,
  },
];

// Icon mapping based on category
const getIconForCategory = (category: string) => {
  const categoryLower = category?.toLowerCase() || '';
  if (categoryLower.includes('security') || categoryLower.includes('hvm')) {
    return ShieldCheck;
  }
  if (categoryLower.includes('sport') || categoryLower.includes('muga')) {
    return Building2;
  }
  if (categoryLower.includes('playground') || categoryLower.includes('child')) {
    return Layers;
  }
  return Building2;
};

const categoryOrder = [
  "Steel & Metal Fencing",
  "Welded Mesh Fencing",
  "Wire Fencing",
  "ECO / PVC Fencing",
  "Fence Accessories",
];

const processSteps = [
  {
    step: "01",
    title: "Consultation & Design",
    copy: "We assess your site, understand your requirements, and create custom design proposals with detailed specifications.",
  },
  {
    step: "02",
    title: "Manufacturing & Quality",
    copy: "Precision engineering and quality control ensure every component meets our exacting standards before delivery.",
  },
  {
    step: "03",
    title: "Installation & Support",
    copy: "Expert installation teams deliver your project on schedule, followed by comprehensive documentation and ongoing support.",
  },
];

const ProductsPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const { addToRFQ, isInRFQ } = useRFQ();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const response = await apiClient.getProducts();
      const dbProducts = response.products || [];
      
      // Transform database products to match the expected format
      const transformedProducts = dbProducts
        .filter((p: any) => p.status === 'Active')
        .map((p: any) => ({
          id: p.id,
          title: p.title || p.name,
          subtitle: p.subtitle || '',
          description: p.description || '',
          image: p.images && p.images.length > 0 ? p.images[0] : heroFence,
          images: p.images || [],
          features: p.specifications ? [
            p.specifications.nominalHeight && `Height: ${p.specifications.nominalHeight}`,
            p.specifications.panelDimensions && `Panels: ${p.specifications.panelDimensions}`,
            p.specifications.reinforcements && `Reinforcements: ${p.specifications.reinforcements}`,
            p.category && `Category: ${p.category}`,
          ].filter(Boolean) : [],
          icon: getIconForCategory(p.category),
          category: p.category,
          price: p.price,
          highlight: false,
        }));

      // Use database products if available, otherwise fallback
      if (transformedProducts.length > 0) {
        setProducts(transformedProducts);
      } else {
        setProducts(fallbackProducts);
      }
    } catch (error) {
      console.error('Error loading products:', error);
      // Fallback to static products on error
      setProducts(fallbackProducts);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToRFQ = (productId: string, productTitle: string) => {
    // Check if product is already in RFQ
    if (isInRFQ(productId)) {
      toast({
        title: "Already in RFQ",
        description: `${productTitle} is already in your Request for Quote list.`,
      });
      return;
    }

    // Add product to RFQ using context
    addToRFQ(productId);

    toast({
      title: "Added to RFQ",
      description: `${productTitle} has been added to your Request for Quote list.`,
    });
  };

  const handleViewDetails = (productId: string) => {
    // Navigate to product details page
    router.push(`/products/${productId}`);
  };

  // Group products by category
  const groupProductsByCategory = (products: any[]) => {
    const grouped: Record<string, any[]> = {};
    
    // Initialize all categories
    categoryOrder.forEach(category => {
      grouped[category] = [];
    });
    
    // Add "Other" category for products that don't match
    grouped["Other"] = [];
    
    products.forEach(product => {
      const category = product.category || "Other";
      if (categoryOrder.includes(category)) {
        grouped[category].push(product);
      } else {
        grouped["Other"].push(product);
      }
    });
    
    return grouped;
  };

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our Products"
        title="Premium Fencing Solutions for Every Need"
        description="From high-security perimeters to playground boundaries, discover our comprehensive range of engineered fencing systems designed for durability, aesthetics, and performance."
        variant="contrast"
        backgroundImage={metalFence}
        overlayClassName="from-black/85 via-black/75 to-black/60"
      >
        <Button
          asChild
          size="lg"
          className="bg-gradient-accent hover:shadow-glow text-secondary-foreground px-8 py-6 h-auto rounded-xl"
        >
          <Link href="/contact" className="font-semibold">
            Get a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </PageHeader>

      <section className="bg-background py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Comprehensive Product Range
            </h2>
            <p className="text-lg text-muted-foreground">
              Each product in our range is engineered to meet specific requirements, from maximum security to aesthetic appeal. Explore our solutions below.
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-24">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-muted-foreground text-lg">No products available at the moment.</p>
            </div>
          ) : (() => {
            const groupedProducts = groupProductsByCategory(products);
            const categoriesToShow = [...categoryOrder, "Other"].filter(cat => groupedProducts[cat]?.length > 0);
            
            return (
              <div className="space-y-16">
                {categoriesToShow.map((category) => {
                  const categoryProducts = groupedProducts[category];
                  if (categoryProducts.length === 0) return null;
                  
                  // Create a slug for the category ID
                  const categorySlug = category.toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-+|-+$/g, '');
                  
                  return (
                    <div key={category} id={categorySlug} className="scroll-mt-24">
                      <div className="mb-8 pb-4 border-b border-border">
                        <h3 className="text-3xl font-bold text-foreground">{category}</h3>
                        <p className="text-muted-foreground mt-2">
                          {categoryProducts.length} {categoryProducts.length === 1 ? 'product' : 'products'} in this category
                        </p>
                      </div>
                      <div className="grid gap-8 lg:grid-cols-2">
                        {categoryProducts.map((product, index) => {
                          const Icon = product.icon;
                          const isHighlight = index === 0 && categoryProducts.length > 0;
                          return (
                            <Card
                              id={`product-${product.id}`}
                              key={product.id}
                              className={`group overflow-hidden border border-border bg-gradient-to-br from-background via-background/90 to-secondary/5 transition hover:-translate-y-1 hover:border-secondary/60 hover:shadow-hover ${
                                isHighlight ? "lg:col-span-2" : ""
                              }`}
                            >
                              <div className="grid md:grid-cols-2 gap-0">
                                <div className="relative h-64 md:h-[400px] w-full overflow-hidden bg-muted flex-shrink-0">
                                  {typeof product.image === 'string' && product.image.startsWith('http') ? (
                                    <img
                                      src={product.image}
                                      alt={product.title}
                                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      style={{ objectFit: 'cover' }}
                                    />
                                  ) : (
                                    <Image
                                      src={product.image}
                                      alt={product.title}
                                      fill
                                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                                      sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                  )}
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                  <div className="absolute top-4 left-4">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                                      <Icon className="h-6 w-6" />
                                    </div>
                                  </div>
                                </div>
                                <CardHeader className="space-y-4 p-6 flex flex-col flex-1 min-w-0">
                                  <div className="flex-1 min-w-0">
                                    <CardTitle className="text-2xl font-semibold text-foreground mb-2">
                                      {product.title}
                                    </CardTitle>
                                    <CardDescription className="text-base leading-relaxed text-muted-foreground line-clamp-3">
                                      {product.description}
                                    </CardDescription>
                                  </div>
                                  <div className="space-y-2 pt-4 border-t border-border">
                                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                                    <ul className="space-y-2">
                                      {product.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                                          <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                                          <span>{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border w-full">
                                    <Button
                                      onClick={() => handleViewDetails(product.id)}
                                      variant="outline"
                                      className="flex-1 min-w-0 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm sm:text-base"
                                    >
                                      <Eye className="mr-2 h-4 w-4 flex-shrink-0" />
                                      <span className="truncate">View Details</span>
                                    </Button>
                                    <Button
                                      onClick={() => handleAddToRFQ(product.id, product.title)}
                                      className="flex-1 min-w-0 bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow text-white transition-all duration-300 text-sm sm:text-base"
                                    >
                                      <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                                      <span className="truncate">Add to RFQ</span>
                                    </Button>
                                  </div>
                                </CardHeader>
                              </div>
                            </Card>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </section>

      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(142_55%_48%/0.1)_0%,transparent_55%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">
              From initial consultation to final installation, we ensure a seamless experience at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <Card
                key={step.title}
                className="border border-border bg-background/85 backdrop-blur-sm rounded-3xl shadow-elegant text-center"
              >
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center text-2xl font-bold text-secondary-foreground shadow-glow mx-auto">
                    {step.step}
                  </div>
                  <CardTitle className="text-2xl text-foreground">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {step.copy}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Find Your Perfect Solution?</h2>
            <p className="text-lg text-primary-foreground/80">
              Contact our team to discuss your requirements and receive a tailored quote for your project.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-secondary text-secondary-foreground hover:shadow-glow px-8 py-6 h-auto rounded-xl"
          >
            <Link href="/contact" className="font-semibold">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ProductsPage;
export { fallbackProducts };
