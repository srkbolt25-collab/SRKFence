'use client';

import { useState, useEffect, useMemo } from "react";
import SiteLayout from "@/components/SiteLayout";
import HeroBannerSlider from "@/components/HeroBannerSlider";
import { UNUSED_BANNERS_SLIDES } from "@/lib/unusedHeroBanners";
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



const pdfProductArchiveCards = [
  {
    id: "pdf-fence-posts-gi-ms-pvc",
    hrefSlug: "fence-posts-gi-ms-pvc",
    title: "Fence Posts (G.I. / M.S. / PVC)",
    category: "Fence Accessories & Post Systems",
    description: "G.I., M.S. and PVC fence posts for chain-link, welded mesh, privacy, decorative, perimeter and security fencing systems.",
    image: "/products/pdf-mapped/fence-posts-gi-ms-pvc/fence-posts-gi-ms-pvc-01.webp",
    features: ["G.I. / M.S. / PVC", "Round, square and rectangular profiles", "Custom finishes available"],
    icon: Building2,
    displayOrder: 1,
  },
  {
    id: "pdf-panel-post-system",
    hrefSlug: "panel-post-system",
    title: "Panel & Post System",
    category: "Panel & Post Systems",
    description: "Modular welded mesh panel and post systems for secure boundary, perimeter and commercial fencing applications.",
    image: "/products/pdf-mapped/panel-post-system/panel-post-system-01.webp",
    features: ["Panel and post system", "Secure fixing", "Multiple installation types"],
    icon: Building2,
    displayOrder: 2,
  },
  {
    id: "pdf-high-security-gate-systems",
    hrefSlug: "high-security-gate-systems",
    title: "High-Security Gate Systems",
    category: "Gate Systems",
    description: "High-security swing and sliding gate systems for controlled access, perimeter protection and heavy-duty fence lines.",
    image: "/products/pdf-mapped/high-security-gate-systems/high-security-gate-systems-01.webp",
    features: ["Swing and sliding gates", "Manual or automated options", "Heavy-duty construction"],
    icon: ShieldCheck,
    displayOrder: 3,
  },
  {
    id: "pdf-base-plates",
    hrefSlug: "base-plates",
    title: "Base Plates",
    category: "Fence Accessories & Mounting Systems",
    description: "G.I., hot-dipped G.I., M.S. and powder-coated base plates for fence posts, gate posts and steel structures.",
    image: "/products/pdf-mapped/base-plates/base-plates-01.webp",
    features: ["G.I. / M.S. / powder coated", "Round and square post options", "Custom hole patterns"],
    icon: Wrench,
    displayOrder: 4,
  },
  {
    id: "pdf-gate-hinges-and-locks",
    hrefSlug: "gate-hinges-and-locks",
    title: "Gate Hinges",
    category: "Gate Hardware & Fence Accessories",
    description: "Gate hinges for chain-link gates, welded mesh gates, steel gates and fencing systems in G.I., SS 304 and coated finishes.",
    image: "/products/pdf-mapped/gate-hinges/gate-hinges-01.webp",
    features: ["G.I. / SS 304 / M.S.", "Weld-on and bolt-on options", "Light to heavy-duty gates"],
    icon: Wrench,
    displayOrder: 5,
  },
  {
    id: "pdf-post-and-railing-system",
    hrefSlug: "post-and-railing-system",
    title: "Post & Rail System",
    category: "Post & Rail Systems",
    description: "Post and rail systems for chain-link fencing, boundary fencing and perimeter fencing with compatible accessories.",
    image: "/products/pdf-mapped/post-and-railing-system/post-and-railing-system-01.webp",
    features: ["Post and rail framework", "Chain-link support", "G.I. and coated finishes"],
    icon: Building2,
    displayOrder: 6,
  },
  {
    id: "pdf-pvc-decorative-fence",
    hrefSlug: "pvc-decorative-fence",
    title: "PVC Decorative Fence",
    category: "PVC Fencing",
    description: "PVC decorative fencing for residential, commercial, garden, pool, park and boundary applications.",
    image: "/products/pdf-mapped/pvc-decorative-fence/pvc-decorative-fence-01.webp",
    features: ["Decorative PVC panels", "Multiple style options", "Low maintenance"],
    icon: Layers,
    displayOrder: 7,
  },
  {
    id: "pdf-pvc-privacy-fence",
    hrefSlug: "pvc-privacy-fence",
    title: "PVC Privacy Fence",
    category: "PVC Fencing",
    description: "PVC privacy fencing for residential properties, villas, gardens, patios, outdoor spaces and boundary screening.",
    image: "/products/pdf-mapped/pvc-privacy-fence/pvc-privacy-fence-01.webp",
    features: ["Privacy panels", "UV protected", "Custom colors available"],
    icon: Layers,
    displayOrder: 8,
  },
  {
    id: "pdf-anti-climb-358-security-fence",
    hrefSlug: "anti-climb-358-fence",
    title: "Anti Climb 358 Security Fence",
    category: "High Security Fencing",
    description: "Anti-climb 358 security fence systems for perimeter protection, industrial sites, airports and high-security applications.",
    image: "/products/pdf-mapped/anti-climb-358-fence/anti-climb-358-fence-01.webp",
    features: ["Anti-climb mesh", "High visibility", "Corrosion resistant"],
    icon: ShieldCheck,
    displayOrder: 9,
  },
  {
    id: "pdf-rectangle-mesh-fence",
    hrefSlug: "rectangle-mesh-fence",
    title: "Rectangle Mesh Fence",
    category: "Welded Mesh Fencing",
    description: "Rectangle mesh fence systems with durable welded mesh panels for long-lasting perimeter and boundary applications.",
    image: "/products/pdf-mapped/rectangle-mesh-fence/rectangle-mesh-fence-01.webp",
    features: ["Strong and durable", "Corrosion resistant", "Multiple applications"],
    icon: Building2,
    displayOrder: 10,
  },
  {
    id: "pdf-gabion-wall-and-fencing",
    hrefSlug: "gabion-wall-and-fencing",
    title: "Gabion Wall & Fencing",
    category: "Gabion Wall & Boundary Systems",
    description: "Gabion wall and fencing systems using wire mesh baskets with natural or project-specified stone filling.",
    image: "/products/pdf-mapped/gabion-wall/gabion-wall-01.webp",
    features: ["Welded or woven mesh", "Natural stone-filled appearance", "Retaining and boundary use"],
    icon: Building2,
    displayOrder: 11,
  },
  {
    id: "pdf-clamps-and-connectors",
    hrefSlug: "clamps-and-connectors",
    title: "Clamps & Connectors",
    category: "Fence Accessories & Connection Hardware",
    description: "Clamps and connectors for secure assembly of chain-link and welded mesh fence systems.",
    image: "/products/pdf-mapped/clamps-and-connectors/clamps-and-connectors-01.webp",
    features: ["Post, rail and U-bolt clamps", "Galvanized and powder coated", "Custom connectors"],
    icon: Wrench,
    displayOrder: 12,
  },
  {
    id: "pdf-fence-accessories",
    hrefSlug: "fence-accessories",
    title: "Fence Accessories",
    category: "Fence Accessories",
    description: "Complete range of accessories for chain-link and welded fence systems in G.I. and PVC coated finishes.",
    image: "/products/pdf-mapped/fence-accessories/fence-accessories-01.webp",
    features: ["Clamps, post caps and fasteners", "G.I. and PVC coated finishes", "Wide compatibility"],
    icon: Wrench,
    displayOrder: 13,
  },
  {
    id: "pdf-fasteners-bolts",
    hrefSlug: "fasteners-bolts",
    title: "Fasteners / Bolts",
    category: "Fence Accessories",
    description: "Fasteners, bolts, nuts, washers, screws, anchors and threaded rods for fencing and steel fixing applications.",
    image: "/products/pdf-mapped/fasteners-bolts/fasteners-bolts-01.webp",
    features: ["Bolts, nuts and washers", "Anchors and screws", "Stainless and steel options"],
    icon: Wrench,
    displayOrder: 14,
  },
  {
    id: "pdf-coating-materials",
    hrefSlug: "coating-materials",
    title: "Coating Materials",
    category: "Coating Materials & Protective Finishes",
    description: "Protective coating materials for fencing products, wires, pipes, posts, gates and steel structures.",
    image: "/products/pdf-mapped/coating-materials/coating-materials-01.webp",
    features: ["PVC, PE and powder coating", "Zinc and hot-dip galvanizing", "Multiple colors and finishes"],
    icon: Layers,
    displayOrder: 15,
  },
  {
    id: "pdf-colors-and-coating-options",
    hrefSlug: "colors-and-coating-options",
    title: "Colors & Coating Options",
    category: "Coating & Finish Options",
    description: "Durable coating and color options for corrosion resistance, long service life and a professional fence finish.",
    image: "/products/pdf-mapped/color-and-coating-options/color-and-coating-options-01.webp",
    features: ["Galvanized, PVC and powder coated", "Green, black, white, grey and custom RAL", "Outdoor and indoor options"],
    icon: Layers,
    displayOrder: 16,
  },
  {
    id: "pdf-barbed-wire",
    hrefSlug: "barbed-wire",
    title: "G.I. & PVC Coated Barbed Wire",
    category: "Security Wire",
    description: "G.I. and PVC coated barbed wire for security fencing, perimeter fencing, industrial and boundary applications.",
    image: "/products/pdf-mapped/barbed-wire/barbed-wire-01.webp",
    features: ["G.I. and PVC coated options", "Weather resistant", "Security boundary use"],
    icon: ShieldCheck,
    displayOrder: 17,
  },
  {
    id: "pdf-razor-wire",
    hrefSlug: "razor-wire",
    title: "Razor Wire",
    category: "Security Wire",
    description: "Razor wire systems for high-security perimeter protection on fences, walls, gates and security arms.",
    image: "/products/pdf-mapped/razor-wire/razor-wire-01.webp",
    features: ["G.I. and S.S. material options", "Multiple diameters", "High-security perimeter use"],
    icon: ShieldCheck,
    displayOrder: 18,
  },
  {
    id: "pdf-temporary-fence-panels",
    hrefSlug: "temporary-fence-panels",
    title: "Temporary Fence Panels",
    category: "Temporary Fencing",
    description: "Temporary fence panels for construction sites, events, road works, security perimeters and crowd control.",
    image: "/products/pdf-mapped/temporary-fence-panels/temporary-fence-panels-01.webp",
    features: ["Portable and reusable", "Quick setup", "Concrete base and clamps"],
    icon: Building2,
    displayOrder: 19,
  },
];

const normalizeProductText = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const identifyPdfArchiveSlug = (product: { title?: string; name?: string; category?: string; description?: string }) => {
  const haystack = normalizeProductText(`${product.title || ""} ${product.name || ""} ${product.category || ""} ${product.description || ""}`);

  const exact = pdfProductArchiveCards.find((card) => {
    const title = normalizeProductText(card.title);
    const slug = normalizeProductText(card.hrefSlug);
    return haystack === title || haystack.includes(title) || haystack.includes(slug);
  });
  if (exact) return exact.hrefSlug;

  if (haystack.includes("fence post") || haystack.includes("gi ms pvc")) return "fence-posts-gi-ms-pvc";
  if (haystack.includes("panel post")) return "panel-post-system";
  if (haystack.includes("high security gate") || haystack.includes("sliding gate") || haystack.includes("swing gate")) return "high-security-gate-systems";
  if (haystack.includes("base plate")) return "base-plates";
  if (haystack.includes("gate hinge")) return "gate-hinges-and-locks";
  if (haystack.includes("post rail") || haystack.includes("railing system")) return "post-and-railing-system";
  if (haystack.includes("pvc decorative")) return "pvc-decorative-fence";
  if (haystack.includes("pvc privacy")) return "pvc-privacy-fence";
  if (haystack.includes("anti climb") || haystack.includes("358 security")) return "anti-climb-358-fence";
  if (haystack.includes("rectangle mesh")) return "rectangle-mesh-fence";
  if (haystack.includes("gabion")) return "gabion-wall-and-fencing";
  if (haystack.includes("clamps") || haystack.includes("connectors")) return "clamps-and-connectors";
  if (haystack.includes("fence accessories")) return "fence-accessories";
  if (haystack.includes("fastener") || haystack.includes("bolts") || haystack.includes("nuts")) return "fasteners-bolts";
  if (haystack.includes("coating materials")) return "coating-materials";
  if (haystack.includes("color") && haystack.includes("coating")) return "colors-and-coating-options";
  if (haystack.includes("barbed wire")) return "barbed-wire";
  if (haystack.includes("razor wire")) return "razor-wire";
  if (haystack.includes("temporary fence")) return "temporary-fence-panels";

  return null;
};

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

      // Always show the PDF-based product cards first so archive names and thumbnails match the uploaded PDFs.
      // Database products that duplicate those PDF pages are filtered out to avoid old thumbnails/titles showing on /products.
      const filteredDatabaseProducts = transformedProducts.filter((product: any) => !identifyPdfArchiveSlug(product));

      setProducts([...pdfProductArchiveCards, ...filteredDatabaseProducts]);
    } catch (error) {
      console.error('Error loading products:', error);
      // Fallback to PDF-based product cards first, then static products on error
      setProducts([...pdfProductArchiveCards, ...fallbackProducts]);
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

  const handleViewDetails = (product: { id: string; title?: string; name?: string; hrefSlug?: string }) => {
    const productSlug = product.hrefSlug || getProductSlug(product);
    // Navigate to product details page
    router.push(`/products/${encodeURIComponent(productSlug)}`);
  };

  return (
    <SiteLayout>
      <HeroBannerSlider slides={UNUSED_BANNERS_SLIDES} altPrefix="Products banner" />

      <section className="border-b border-border/60 bg-background py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-secondary">Our Products</p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Fencing Products and Services for UAE Projects
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
            Compare chain link fence, welded mesh fence, PVC coated fencing, anti-climb 358 fence, temporary fence
            panels, PVC hoarding, barbed wire, razor wire, steel fencing, gates and accessories for Dubai, UAE and GCC projects.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-accent hover:shadow-glow h-auto rounded-xl px-8 py-6 text-secondary-foreground"
          >
            <Link href="/contact" className="font-semibold">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">Priority RFQ Products</p>
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                High-Intent Fencing Product Pages
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Start with these high-demand fencing products, then request a custom quotation with your project dimensions, coating, gates and installation scope.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pdfProductArchiveCards.map((product) => (
                <Link
                  key={product.hrefSlug}
                  href={`/products/${product.hrefSlug}`}
                  className="group overflow-hidden rounded-lg border border-border bg-card transition hover:-translate-y-1 hover:border-primary hover:shadow-hover"
                >
                  <div className="relative h-40 w-full overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain bg-white p-2 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-3 text-xs font-bold uppercase tracking-wide text-primary">{product.category}</div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary">{product.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                    <div className="mt-4 flex items-center text-sm font-bold text-primary">
                      View Product Page
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete Fencing Product Range
            </h2>
            <p className="text-lg text-muted-foreground">
              Each product in our range can be quoted by fence height, running meters, mesh opening, wire diameter,
              coating, posts, gate requirement, delivery country and installation scope.
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
                          className="absolute inset-0 h-full w-full object-contain bg-muted p-2 transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-contain bg-muted p-2 transition-transform duration-500 group-hover:scale-105"
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
