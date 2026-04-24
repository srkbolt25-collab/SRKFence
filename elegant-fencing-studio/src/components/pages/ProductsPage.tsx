'use client';

import { useState, useEffect, useMemo } from "react";
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductSlug } from "@/lib/productSlug";

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

const ProductsPage = ({ initialCategory }: { initialCategory?: string }) => {
  const { toast } = useToast();
  const router = useRouter();
  const { addToRFQ, isInRFQ } = useRFQ();
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<Array<{ id: string; name: string; displayOrder?: number }>>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory || null);
  const [loading, setLoading] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);

  // Sync state if prop changes
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    } else {
      setSelectedCategory(null);
    }
  }, [initialCategory]);

  useEffect(() => {
    loadProducts();
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      setLoadingCategories(true);
      const response = await apiClient.getCategories();
      setCategories(
        (response.categories || []).sort(
          (a, b) => (a.displayOrder ?? 9999) - (b.displayOrder ?? 9999) || a.name.localeCompare(b.name)
        )
      );
    } catch (error) {
      console.error('Error loading categories:', error);
    } finally {
      setLoadingCategories(false);
    }
  };

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
          description: Array.isArray(p.description) && p.description.length > 0
            ? p.description.map((d: { title: string; content: string }) => `${d.title}: ${d.content}`).join(' ')
            : (p.description || ''),
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
          displayOrder: typeof p.displayOrder === 'number' ? p.displayOrder : 9999,
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

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  const sortedFilteredProducts = useMemo(() => {
    const categoryOrderMap = new Map(
      categories.map((category, index) => [category.name, category.displayOrder ?? index + 1])
    );

    return [...filteredProducts].sort((a, b) => {
      if (!selectedCategory) {
        const aCategoryOrder = categoryOrderMap.get(a.category || "") ?? 9999;
        const bCategoryOrder = categoryOrderMap.get(b.category || "") ?? 9999;
        if (aCategoryOrder !== bCategoryOrder) return aCategoryOrder - bCategoryOrder;
      }

      const aOrder = typeof a.displayOrder === 'number' ? a.displayOrder : 9999;
      const bOrder = typeof b.displayOrder === 'number' ? b.displayOrder : 9999;
      if (aOrder !== bOrder) return aOrder - bOrder;

      return (a.title || "").localeCompare(b.title || "");
    });
  }, [categories, filteredProducts, selectedCategory]);

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

  const handleViewDetails = (product: { id: string; title?: string; name?: string }) => {
    const productSlug = getProductSlug(product);
    // Navigate to product details page
    router.push(`/products/${encodeURIComponent(productSlug)}`);
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

          {/* Category Filter Tabs */}
          {!loadingCategories && categories.length > 0 && (
            <div className="mb-12">
              <Tabs
                value={selectedCategory || "all"}
                onValueChange={(value) => {
                  if (value === "all") {
                    router.push('/products', { scroll: false });
                  } else {
                    // Slugify: replace spaces with dashes
                    const slug = value.replace(/\s+/g, '-');
                    router.push(`/products/${encodeURIComponent(slug)}`, { scroll: false });
                  }
                }}
                className="w-full"
              >
                <div className="flex justify-center w-full">
                  <TabsList className="inline-flex flex-wrap h-auto items-center justify-center gap-2 rounded-lg bg-muted p-3 text-muted-foreground w-full max-w-5xl">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#c5162a] data-[state=active]:to-[#e63946] data-[state=active]:text-white data-[state=active]:shadow-sm px-4 md:px-6 py-2.5 md:py-3 rounded-md transition-all duration-300 text-sm md:text-base font-medium whitespace-nowrap flex-shrink-0"
                    >
                      All Products
                    </TabsTrigger>
                    {categories.map((category) => {
                      const categoryProductCount = products.filter(p => p.category === category.name).length;
                      return (
                        <TabsTrigger
                          key={category.id}
                          value={category.name}
                          className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#c5162a] data-[state=active]:to-[#e63946] data-[state=active]:text-white data-[state=active]:shadow-sm px-4 md:px-6 py-2.5 md:py-3 rounded-md transition-all duration-300 text-sm md:text-base font-medium whitespace-nowrap flex-shrink-0"
                        >
                          <span>{category.name}</span>
                          {categoryProductCount > 0 && (
                            <span className="ml-2 px-2 py-0.5 rounded-full bg-white/20 text-xs font-semibold">
                              {categoryProductCount}
                            </span>
                          )}
                        </TabsTrigger>
                      );
                    })}
                  </TabsList>
                </div>
              </Tabs>
              {selectedCategory && (
                <div className="mt-6 text-center">
                  <p className="text-muted-foreground">
                    Showing products in <span className="font-semibold text-foreground">{selectedCategory}</span>
                  </p>
                </div>
              )}
            </div>
          )}

          {loading ? (
            <div className="flex items-center justify-center py-24">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : sortedFilteredProducts.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-muted-foreground text-lg">
                {selectedCategory
                  ? `No products found in ${selectedCategory} category.`
                  : "No products available at the moment."}
              </p>
              {selectedCategory && (
                <Button
                  variant="outline"
                  onClick={() => setSelectedCategory(null)}
                  className="mt-4"
                >
                  View All Products
                </Button>
              )}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {sortedFilteredProducts.map((product) => {
                const Icon = product.icon;
                const featureTags = Array.isArray(product.features) ? product.features.slice(0, 3) : [];

                return (
                  <Card
                    id={`product-${product.id}`}
                    key={product.id}
                    role="link"
                    tabIndex={0}
                    onClick={() => handleViewDetails(product)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        handleViewDetails(product);
                      }
                    }}
                    className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <div className="relative h-52 w-full overflow-hidden bg-muted">
                      {typeof product.image === 'string' && product.image.startsWith('http') ? (
                        <img
                          src={product.image}
                          alt={product.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                      <div className="absolute left-3 top-3 rounded-xl bg-white/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
                        {product.category || 'General'}
                      </div>
                      <div className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <CardHeader className="space-y-3 p-5 pb-3">
                      <div className="flex items-center justify-between gap-3">
                        <CardTitle className="line-clamp-1 text-xl font-bold text-foreground">
                          {product.title}
                        </CardTitle>
                        <span className="shrink-0 rounded-full bg-[#e85d3a] px-3 py-1 text-sm font-semibold text-white">
                          {product.price || 'Enquire'}
                        </span>
                      </div>
                      <CardDescription className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {product.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4 p-5 pt-0">
                      <div className="flex flex-wrap gap-2">
                        {featureTags.length > 0 ? (
                          featureTags.map((feature: string, idx: number) => (
                            <span
                              key={idx}
                              className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                            >
                              {feature}
                            </span>
                          ))
                        ) : (
                          <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                            Premium fencing solution
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          onClick={(event) => {
                            event.stopPropagation();
                            handleViewDetails(product);
                          }}
                          variant="outline"
                          className="h-10 rounded-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <Eye className="mr-1.5 h-4 w-4" />
                          View
                        </Button>
                        <Button
                          onClick={(event) => {
                            event.stopPropagation();
                            handleAddToRFQ(product.id, product.title);
                          }}
                          className="h-10 rounded-full bg-gradient-to-r from-[#c5162a] to-[#e63946] text-white hover:shadow-glow"
                        >
                          <FileText className="mr-1.5 h-4 w-4" />
                          Add RFQ
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
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
