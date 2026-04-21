'use client';

import { useState, useEffect } from 'react';
import SiteLayout from '@/components/SiteLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { ArrowLeft, CheckCircle2, FileText, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import heroFence from '@/assets/hero-fence.jpg';
import metalFence from '@/assets/metal-fence.jpg';
import vinylFence from '@/assets/vinyl-fence.jpg';
import woodFence from '@/assets/wood-fence.jpg';
import { useToast } from '@/hooks/use-toast';
import { useRFQ } from '@/contexts/RFQContext';

// Product data - in production, this would come from API
// keeping this for fallback/static generation compatibility if needed
interface ProductDetailsPageProps {
    productId: string;
}

export default function ProductDetailsPage({ productId }: ProductDetailsPageProps) {
    const { toast } = useToast();
    const { addToRFQ, isInRFQ } = useRFQ();
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const normalizeRichText = (text: string) =>
        text
            .replace(/\r\n/g, '\n')
            .replace(/\u2022/g, '*')
            .replace(/\s+\*\s+/g, '\n* ')
            .replace(/\n{3,}/g, '\n\n')
            .trim();

    const renderInlineBold = (text: string) => {
        const parts = text.split(/(\*\*[^*]+\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
                return (
                    <strong key={index} className="font-semibold text-foreground">
                        {part.slice(2, -2)}
                    </strong>
                );
            }

            return <span key={index}>{part.replace(/\*\*/g, '')}</span>;
        });
    };

    const renderFormattedText = (text: string, defaultClass = 'text-muted-foreground') => {
        const normalized = normalizeRichText(text);
        if (!normalized) return null;

        const lines = normalized
            .split('\n')
            .map((line) => line.trim())
            .filter(Boolean);

        const blocks: any[] = [];
        let bulletItems: string[] = [];
        let numberedItems: string[] = [];

        const flushBulletItems = () => {
            if (bulletItems.length === 0) return;
            blocks.push(
                <ul key={`ul-${blocks.length}`} className={`list-disc pl-5 space-y-1 ${defaultClass}`}>
                    {bulletItems.map((item, index) => (
                        <li key={index}>{renderInlineBold(item)}</li>
                    ))}
                </ul>
            );
            bulletItems = [];
        };

        const flushNumberedItems = () => {
            if (numberedItems.length === 0) return;
            blocks.push(
                <ol key={`ol-${blocks.length}`} className={`list-decimal pl-5 space-y-1 ${defaultClass}`}>
                    {numberedItems.map((item, index) => (
                        <li key={index}>{renderInlineBold(item)}</li>
                    ))}
                </ol>
            );
            numberedItems = [];
        };

        lines.forEach((line) => {
            const bulletMatch = line.match(/^[*-]\s+(.+)$/);
            if (bulletMatch) {
                flushNumberedItems();
                bulletItems.push(bulletMatch[1]);
                return;
            }

            const numberedMatch = line.match(/^\d+\.\s+(.+)$/);
            if (numberedMatch) {
                flushBulletItems();
                numberedItems.push(numberedMatch[1]);
                return;
            }

            flushBulletItems();
            flushNumberedItems();

            const isHeading = /:$/.test(line);
            blocks.push(
                <p
                    key={`p-${blocks.length}`}
                    className={`${defaultClass} leading-relaxed ${isHeading ? 'font-semibold text-foreground' : ''}`}
                >
                    {renderInlineBold(line)}
                </p>
            );
        });

        flushBulletItems();
        flushNumberedItems();

        return <div className="space-y-3">{blocks}</div>;
    };

    useEffect(() => {
        if (!productId) {
            setLoading(false);
            return;
        }

        const fetchProduct = async () => {
            setLoading(true);
            try {
                // Try to fetch from API (MongoDB ObjectId)
                const response = await fetch(`/api/products/${productId}`);
                if (response.ok) {
                    // ... (rest as before)
                    const data = await response.json();

                    // Transform API product to match expected format
                    const transformedProduct = {
                        id: data.id,
                        title: data.title || data.name,
                        subtitle: data.subtitle || '',
                        description: data.description || [],
                        images: data.images && data.images.length > 0 ? data.images : [heroFence],
                        // Extract features from specifications or use empty array
                        features: data.features || [],
                        // Use technicalInfoTabs if available, otherwise convert old format
                        technicalInfoTabs: data.technicalInfoTabs,
                        specifications: (() => {
                            try {
                                if (typeof data.specifications === 'string' && data.specifications.trim() !== '') {
                                    return JSON.parse(data.specifications);
                                } else if (Array.isArray(data.specifications)) {
                                    return data.specifications;
                                } else if (data.specifications && typeof data.specifications === 'object') {
                                    // Convert old format to new format
                                    const oldSpecs = data.specifications;
                                    return [{
                                        heading: "Technical Specifications",
                                        fields: [
                                            { label: "Nominal Fence Height (mm)", value: oldSpecs.nominalHeight || "" },
                                            { label: "Panels Width x Height (mm)", value: oldSpecs.panelDimensions || "" },
                                            { label: "Number of Reinforcements per Panel", value: oldSpecs.reinforcements || "" },
                                            { label: "Post Length (mm)", value: oldSpecs.postLength || "" },
                                            { label: "Number of Fixators / Post", value: oldSpecs.fixators || "" },
                                            { label: "Bolts, Washers & Shear-off Nuts / Post", value: oldSpecs.bolts || "" },
                                            { label: "Wire Diameter Information", value: oldSpecs.wireDiameter || oldSpecs.wireDiameterInfo || "" },
                                        ].filter((f: any) => f.value)
                                    }];
                                }
                                return [];
                            } catch {
                                return [];
                            }
                        })(),
                        panelVariations: data.panelVariations || '',
                        bimObjects: data.bimObjects || '',
                        applications: data.applications || [],
                        category: data.category,
                        price: data.price,
                        // SEO metadata
                        metaTitle: data.metaTitle || '',
                        metaDescription: data.metaDescription || '',
                        focusKeywords: data.focusKeywords || '',
                        metaKeywords: data.metaKeywords || '',
                    };

                    setProduct(transformedProduct);
                } else {
                    setProduct(null);
                }
            } catch (error) {
                console.error('Error fetching product:', error);
                setProduct(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    useEffect(() => {
        if (!carouselApi) {
            return;
        }

        setCurrentImageIndex(carouselApi.selectedScrollSnap());
        const onSelect = () => setCurrentImageIndex(carouselApi.selectedScrollSnap());
        carouselApi.on('select', onSelect);

        const interval = setInterval(() => {
            carouselApi.scrollNext();
        }, 4000);

        return () => {
            clearInterval(interval);
            carouselApi.off('select', onSelect);
        };
    }, [carouselApi]);

    useEffect(() => {
        setCurrentImageIndex(0);
        carouselApi?.scrollTo(0);
    }, [product?.id, carouselApi]);

    // Update document head with SEO metadata when product is loaded
    useEffect(() => {
        if (product) {
            // Update document title
            const title = product.metaTitle || product.title || 'SRK FENCE - High Security Fencing Solutions';
            document.title = title;

            // Update or create meta description
            let metaDescription = document.querySelector('meta[name="description"]');
            const descriptionContent = Array.isArray(product.description) && product.description.length > 0
                ? product.description.map((d: { content: string }) => d.content).join(' ')
                : '';
            const description = product.metaDescription || descriptionContent || 'Leading manufacturer and supplier of high-quality fencing systems';

            if (metaDescription) {
                metaDescription.setAttribute('content', description);
            } else {
                metaDescription = document.createElement('meta');
                metaDescription.setAttribute('name', 'description');
                metaDescription.setAttribute('content', description);
                document.getElementsByTagName('head')[0].appendChild(metaDescription);
            }

            // Update or create meta keywords
            if (product.focusKeywords || product.metaKeywords) {
                const keywords = [product.focusKeywords, product.metaKeywords].filter(Boolean).join(', ');
                let metaKeywords = document.querySelector('meta[name="keywords"]');

                if (metaKeywords) {
                    metaKeywords.setAttribute('content', keywords);
                } else {
                    metaKeywords = document.createElement('meta');
                    metaKeywords.setAttribute('name', 'keywords');
                    metaKeywords.setAttribute('content', keywords);
                    document.getElementsByTagName('head')[0].appendChild(metaKeywords);
                }
            }

            // Add Open Graph tags
            const ogTitle = product.ogTitle || product.metaTitle || product.title || '';
            const ogDescriptionContent = Array.isArray(product.description) && product.description.length > 0
                ? product.description.map((d: { content: string }) => d.content).join(' ')
                : '';
            const ogDescription = product.ogDescription || product.metaDescription || ogDescriptionContent || '';
            const ogImage = product.ogImage || (product.images && product.images.length > 0 ? product.images[0] : '');

            if (ogTitle) {
                let ogTitleTag = document.querySelector('meta[property="og:title"]');
                if (ogTitleTag) {
                    ogTitleTag.setAttribute('content', ogTitle);
                } else {
                    ogTitleTag = document.createElement('meta');
                    ogTitleTag.setAttribute('property', 'og:title');
                    ogTitleTag.setAttribute('content', ogTitle);
                    document.getElementsByTagName('head')[0].appendChild(ogTitleTag);
                }
            }

            if (ogDescription) {
                let ogDescTag = document.querySelector('meta[property="og:description"]');
                if (ogDescTag) {
                    ogDescTag.setAttribute('content', ogDescription);
                } else {
                    ogDescTag = document.createElement('meta');
                    ogDescTag.setAttribute('property', 'og:description');
                    ogDescTag.setAttribute('content', ogDescription);
                    document.getElementsByTagName('head')[0].appendChild(ogDescTag);
                }
            }

            if (ogImage) {
                let ogImageTag = document.querySelector('meta[property="og:image"]');
                if (ogImageTag) {
                    ogImageTag.setAttribute('content', ogImage);
                } else {
                    ogImageTag = document.createElement('meta');
                    ogImageTag.setAttribute('property', 'og:image');
                    ogImageTag.setAttribute('content', ogImage);
                    document.getElementsByTagName('head')[0].appendChild(ogImageTag);
                }
            }
        }

        // Cleanup function to reset to default when component unmounts
        return () => {
            document.title = 'SRK FENCE - High Security Fencing Solutions';
            const defaultDesc = document.querySelector('meta[name="description"]');
            if (defaultDesc) {
                defaultDesc.setAttribute('content', 'Leading manufacturer and supplier of high-quality fencing systems');
            }
        };
    }, [product]);

    if (loading) {
        return (
            <SiteLayout>
                <div className="min-h-screen flex items-center justify-center">
                    <Card className="max-w-md">
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                            </div>
                            <p className="text-center mt-4 text-muted-foreground">Loading product details...</p>
                        </CardContent>
                    </Card>
                </div>
            </SiteLayout>
        );
    }

    if (!product) {
        return (
            <SiteLayout>
                <div className="min-h-screen flex items-center justify-center">
                    <Card className="max-w-md">
                        <CardHeader>
                            <CardTitle>Product Not Found</CardTitle>
                            <CardDescription>The product you're looking for doesn't exist.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild>
                                <Link href="/products">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back to Products
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </SiteLayout>
        );
    }

    const handleAddToRFQAction = () => {
        // Check if product is already in RFQ
        if (isInRFQ(product.id)) {
            toast({
                title: "Already in RFQ",
                description: `${product.title} is already in your Request for Quote list.`,
            });
            return;
        }

        // Add product to RFQ using context
        addToRFQ(product.id);

        toast({
            title: "Added to RFQ",
            description: `${product.title} has been added to your Request for Quote list.`,
        });
    };

    return (
        <SiteLayout>
            {/* Header Section with Navigation */}
            <section className="bg-background border-b border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="space-y-2">
                            <Button
                                asChild
                                variant="ghost"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <Link href="/products">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back to Products
                                </Link>
                            </Button>
                            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{product.title}</h1>
                            {product.subtitle && (
                                <p className="text-lg text-muted-foreground">{product.subtitle}</p>
                            )}
                        </div>
                        <Button
                            onClick={handleAddToRFQAction}
                            className="bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow"
                        >
                            <FileText className="mr-2 h-4 w-4" />
                            Add to RFQ
                        </Button>
                    </div>
                </div>
            </section>

            {/* Product Images + Applications */}
            {(product.images?.length > 0 || product.applications?.length > 0) && (
                <section className="bg-background py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                            {product.images?.length > 0 && (
                                <Card className="overflow-hidden border border-border/70 shadow-sm">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-2xl">Product Images</CardTitle>
                                        <CardDescription>
                                            Browse product photos using the carousel controls.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1fr)_120px] md:items-start">
                                            <Carousel setApi={setCarouselApi} opts={{ loop: true }} className="w-full">
                                                <CarouselContent>
                                                    {product.images.map((image: any, index: number) => (
                                                        <CarouselItem key={index} className="pl-0">
                                                            <div className="relative aspect-[16/8] overflow-hidden rounded-xl border border-border bg-muted">
                                                                {typeof image === 'string' && (image.startsWith('http') || image.startsWith('data:') || image.startsWith('/')) ? (
                                                                    <img
                                                                        src={image}
                                                                        alt={`${product.title} - Image ${index + 1}`}
                                                                        className="h-full w-full object-cover"
                                                                    />
                                                                ) : (
                                                                    <Image
                                                                        src={image}
                                                                        alt={`${product.title} - Image ${index + 1}`}
                                                                        fill
                                                                        className="object-cover"
                                                                    />
                                                                )}
                                                            </div>
                                                        </CarouselItem>
                                                    ))}
                                                </CarouselContent>
                                                <CarouselPrevious className="left-4" />
                                                <CarouselNext className="right-4" />
                                            </Carousel>

                                            {product.images.length > 1 && (
                                                <div className="grid grid-cols-3 gap-2 md:grid-cols-1">
                                                    {product.images.map((image: any, index: number) => (
                                                        <button
                                                            key={index}
                                                            type="button"
                                                            onClick={() => carouselApi?.scrollTo(index)}
                                                            className={`relative h-16 w-full overflow-hidden rounded-md border transition-all md:h-20 ${
                                                                currentImageIndex === index
                                                                    ? 'border-primary ring-1 ring-primary'
                                                                    : 'border-border'
                                                            }`}
                                                            aria-label={`Go to image ${index + 1}`}
                                                        >
                                                            {typeof image === 'string' && (image.startsWith('http') || image.startsWith('data:') || image.startsWith('/')) ? (
                                                                <img
                                                                    src={image}
                                                                    alt={`${product.title} thumbnail ${index + 1}`}
                                                                    className="h-full w-full object-cover"
                                                                />
                                                            ) : (
                                                                <Image
                                                                    src={image}
                                                                    alt={`${product.title} thumbnail ${index + 1}`}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            )}

                            {product.applications?.length > 0 && (
                                <Card className="border border-border/70">
                                    <CardHeader>
                                        <CardTitle className="text-2xl">Product by Application</CardTitle>
                                        <CardDescription>Recommended use cases and deployment areas.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {product.applications.map((application: string) => (
                                                <div key={application} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border hover:bg-muted transition-colors">
                                                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                                                    <span className="text-sm text-foreground">{application}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
                <section className="bg-muted/30 py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <Card className="border border-border/70">
                            <CardHeader>
                                <CardTitle className="text-2xl">Key Features</CardTitle>
                                <CardDescription>Main highlights of this product.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {product.features.map((feature: string) => (
                                        <div key={feature} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                                            <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            )}

            {/* Description Sections */}
            {product.description && product.description.length > 0 && (
                <section className="bg-background py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                        {product.description.map((section: { title: string; content: string }, index: number) => (
                            <Card key={index} className="border border-border/70">
                                <CardHeader>
                                    <CardTitle className="text-2xl">{section.title || `Section ${index + 1}`}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="prose prose-lg max-w-none">
                                        {renderFormattedText(section.content, 'text-foreground')}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            )}

            {/* Technical Information */}
            <section className="bg-background py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="border border-border/70">
                        <CardHeader>
                            <CardTitle className="text-3xl">Technical Information</CardTitle>
                            <CardDescription>Specifications, panel variations, and downloadable product data.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {(() => {
                        // Get technicalInfoTabs from product or convert from old format
                        let tabs: Array<{
                            id: string;
                            name: string;
                            type: 'specifications' | 'panelVariations' | 'bimObjects' | 'custom';
                            content: any;
                        }> = [];

                        if (product.technicalInfoTabs && Array.isArray(product.technicalInfoTabs)) {
                            tabs = product.technicalInfoTabs;
                        } else {
                            // Convert old format to new format
                            const specs = Array.isArray(product.specifications) ? product.specifications : [];
                            if (specs.length > 0) {
                                tabs.push({
                                    id: 'specifications',
                                    name: 'Specifications',
                                    type: 'specifications',
                                    content: specs,
                                });
                            }

                            // Check if panelVariations is already in new format
                            if (product.panelVariations && typeof product.panelVariations === 'object' && !Array.isArray(product.panelVariations) && product.panelVariations.headers) {
                                tabs.push({
                                    id: 'panel-variations',
                                    name: 'Panel Variations',
                                    type: 'panelVariations',
                                    content: product.panelVariations,
                                });
                            } else {
                                // Convert old format to new format
                                let panelVariationsData: any[] = [];
                                try {
                                    if (typeof product.panelVariations === 'string' && product.panelVariations.trim() !== '') {
                                        panelVariationsData = JSON.parse(product.panelVariations);
                                    } else if (Array.isArray(product.panelVariations)) {
                                        panelVariationsData = product.panelVariations;
                                    }
                                } catch (e) {
                                    console.error('Error parsing panel variations:', e);
                                }

                                if (panelVariationsData.length > 0 || product.panelVariations) {
                                    // Convert to new format with default headers
                                    tabs.push({
                                        id: 'panel-variations',
                                        name: 'Panel Variations',
                                        type: 'panelVariations',
                                        content: {
                                            headers: [
                                                { key: 'panelType', label: 'Panel Type' },
                                                { key: 'coating', label: 'Coating' },
                                                { key: 'description', label: 'Description' },
                                                { key: 'environmentalSuitability', label: 'Environmental Suitability' },
                                            ],
                                            rows: Array.isArray(panelVariationsData) ? panelVariationsData : [],
                                        },
                                    });
                                }
                            }

                            if (product.bimObjects && product.bimObjects.trim() !== '') {
                                tabs.push({
                                    id: 'bim-objects',
                                    name: 'BIM Objects',
                                    type: 'bimObjects',
                                    content: product.bimObjects,
                                });
                            }
                        }

                        if (tabs.length === 0) {
                            return (
                                <Card>
                                    <CardContent className="pt-6">
                                        <p className="text-muted-foreground text-center">No technical information available for this product.</p>
                                    </CardContent>
                                </Card>
                            );
                        }

                        return (
                            <Tabs defaultValue={tabs[0]?.id} className="w-full">
                                <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}>
                                    {tabs.map((tab) => (
                                        <TabsTrigger key={tab.id} value={tab.id}>
                                            {tab.name}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>

                                {tabs.map((tab) => (
                                    <TabsContent key={tab.id} value={tab.id} className="mt-6">
                                        {/* Specifications Content */}
                                        {tab.type === 'specifications' && (
                                            <>
                                                {(!Array.isArray(tab.content) || tab.content.length === 0) ? (
                                                    <Card>
                                                        <CardHeader>
                                                            <CardTitle>Product Specifications</CardTitle>
                                                            <CardDescription>Detailed technical specifications for {product.title}</CardDescription>
                                                        </CardHeader>
                                                        <CardContent>
                                                            <p className="text-muted-foreground">No specifications available for this product.</p>
                                                        </CardContent>
                                                    </Card>
                                                ) : (
                                                    <div className="space-y-6">
                                                        {(tab.content as Array<{ heading: string; description: string }>).map((section, sectionIndex) => (
                                                            <Card key={sectionIndex}>
                                                                <CardHeader>
                                                                    <CardTitle className="text-xl">{section.heading || `Specification Section ${sectionIndex + 1}`}</CardTitle>
                                                                </CardHeader>
                                                                <CardContent>
                                                                    {section.description ? (
                                                                        renderFormattedText(section.description)
                                                                    ) : (
                                                                        <p className="text-muted-foreground">No description available for this section.</p>
                                                                    )}
                                                                </CardContent>
                                                            </Card>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        )}

                                        {/* Panel Variations Content */}
                                        {tab.type === 'panelVariations' && (
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>Panel Variations</CardTitle>
                                                    <CardDescription>Available panel configurations and variations</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    {(() => {
                                                        // Check if it's new format with headers
                                                        const content = tab.content && typeof tab.content === 'object' && !Array.isArray(tab.content) && tab.content.headers
                                                            ? tab.content
                                                            : null;

                                                        // Check if it's old array format
                                                        const oldFormat = Array.isArray(tab.content) && tab.content.length > 0
                                                            ? tab.content
                                                            : null;

                                                        if (!content && !oldFormat) {
                                                            return (
                                                                <div className="space-y-4">
                                                                    {renderFormattedText(
                                                                        typeof tab.content === 'string'
                                                                            ? tab.content
                                                                            : 'No panel variations information available.'
                                                                    )}
                                                                    <div className="p-4 bg-muted rounded-lg">
                                                                        <p className="text-sm text-muted-foreground">
                                                                            <strong>Note:</strong> All panel variations are available in multiple coating options and can be customized to meet your specific requirements.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }

                                                        // New format with custom headers
                                                        if (content && content.headers && content.rows) {
                                                            const headers = content.headers;
                                                            const rows = content.rows;

                                                            if (headers.length === 0 || rows.length === 0) {
                                                                return (
                                                                    <div className="space-y-4">
                                                                        <p className="text-muted-foreground">No panel variations available.</p>
                                                                    </div>
                                                                );
                                                            }

                                                            return (
                                                                <div className="space-y-4">
                                                                    <div className="border rounded-lg overflow-x-auto">
                                                                        <Table>
                                                                            <TableHeader>
                                                                                <TableRow>
                                                                                    {headers.map((header: any, index: number) => (
                                                                                        <TableHead key={index}>{header.label}</TableHead>
                                                                                    ))}
                                                                                </TableRow>
                                                                            </TableHeader>
                                                                            <TableBody>
                                                                                {rows.map((row: any, rowIndex: number) => (
                                                                                    <TableRow key={rowIndex}>
                                                                                        {headers.map((header: any, headerIndex: number) => (
                                                                                            <TableCell key={headerIndex} className={headerIndex === 0 ? "font-medium" : ""}>
                                                                                                {row[header.key] || 'N/A'}
                                                                                            </TableCell>
                                                                                        ))}
                                                                                    </TableRow>
                                                                                ))}
                                                                            </TableBody>
                                                                        </Table>
                                                                    </div>
                                                                    <div className="p-4 bg-muted rounded-lg">
                                                                        <p className="text-sm text-muted-foreground">
                                                                            <strong>Note:</strong> All panel variations are available in multiple coating options and can be customized to meet your specific requirements. Ask us about different wire thickness combinations and the most suitable post for your installation.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }

                                                        // Old format (array of objects)
                                                        if (oldFormat) {
                                                            return (
                                                                <div className="space-y-4">
                                                                    <div className="border rounded-lg overflow-x-auto">
                                                                        <Table>
                                                                            <TableHeader>
                                                                                <TableRow>
                                                                                    <TableHead>Panel Type</TableHead>
                                                                                    <TableHead>Coating</TableHead>
                                                                                    <TableHead>Description</TableHead>
                                                                                    <TableHead>Environmental Suitability</TableHead>
                                                                                </TableRow>
                                                                            </TableHeader>
                                                                            <TableBody>
                                                                                {oldFormat.map((variation: any, index: number) => (
                                                                                    <TableRow key={index}>
                                                                                        <TableCell className="font-medium">{variation.panelType || 'N/A'}</TableCell>
                                                                                        <TableCell>{variation.coating || 'N/A'}</TableCell>
                                                                                        <TableCell>{variation.description || 'N/A'}</TableCell>
                                                                                        <TableCell>{variation.environmentalSuitability || 'N/A'}</TableCell>
                                                                                    </TableRow>
                                                                                ))}
                                                                            </TableBody>
                                                                        </Table>
                                                                    </div>
                                                                    <div className="p-4 bg-muted rounded-lg">
                                                                        <p className="text-sm text-muted-foreground">
                                                                            <strong>Note:</strong> All panel variations are available in multiple coating options and can be customized to meet your specific requirements. Ask us about different wire thickness combinations and the most suitable post for your installation.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }

                                                        return null;
                                                    })()}
                                                </CardContent>
                                            </Card>
                                        )}

                                        {/* BIM Objects and Custom Content */}
                                        {tab.type === 'bimObjects' && (() => {
                                            // Parse BIM Objects content
                                            let bimContent: { title?: string; description?: string; files?: any[] } = {};
                                            if (typeof tab.content === 'string' && tab.content.trim().startsWith('{')) {
                                                try {
                                                    bimContent = JSON.parse(tab.content);
                                                } catch {
                                                    bimContent = { description: tab.content, files: [] };
                                                }
                                            } else if (typeof tab.content === 'object' && tab.content !== null) {
                                                bimContent = tab.content;
                                            } else if (typeof tab.content === 'string') {
                                                bimContent = { description: tab.content, files: [] };
                                            }
                                            
                                            return (
                                                <Card>
                                                    <CardHeader>
                                                        <CardTitle>{bimContent.title || tab.name}</CardTitle>
                                                        <CardDescription>
                                                            {bimContent.description || 'Download product drawings and specifications'}
                                                        </CardDescription>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="space-y-4">
                                                            {/* Files List */}
                                                            {(bimContent.files || []).length > 0 ? (
                                                                <div className="grid gap-3">
                                                                    {bimContent.files.map((file: any, fileIndex: number) => (
                                                                        <div key={fileIndex} className="flex items-center justify-between p-3 border rounded-lg bg-muted/50">
                                                                            <div className="flex items-center gap-3">
                                                                                <FileText className="h-5 w-5 text-muted-foreground" />
                                                                                <div>
                                                                                    <p className="font-medium text-sm">{file.name || `File ${fileIndex + 1}`}</p>
                                                                                    <p className="text-xs text-muted-foreground uppercase">{file.type || 'PDF'}</p>
                                                                                </div>
                                                                            </div>
                                                                            <Button 
                                                                                variant="outline" 
                                                                                size="sm"
                                                                                onClick={async () => {
                                                                                    try {
                                                                                        const response = await fetch(file.url);
                                                                                        const blob = await response.blob();
                                                                                        const blobUrl = window.URL.createObjectURL(blob);
                                                                                        const link = document.createElement('a');
                                                                                        link.href = blobUrl;
                                                                                        link.download = file.name || `file-${fileIndex + 1}.${file.type || 'pdf'}`;
                                                                                        document.body.appendChild(link);
                                                                                        link.click();
                                                                                        document.body.removeChild(link);
                                                                                        window.URL.revokeObjectURL(blobUrl);
                                                                                    } catch (error) {
                                                                                        // Fallback to opening in new tab if download fails
                                                                                        window.open(file.url, '_blank');
                                                                                    }
                                                                                }}
                                                                            >
                                                                                <Download className="mr-2 h-4 w-4" />
                                                                                Download
                                                                            </Button>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            ) : (
                                                                <div className="p-4 bg-muted rounded-lg text-center">
                                                                    <p className="text-sm text-muted-foreground">
                                                                        No files available for download.
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            );
                                        })()}

                                        {tab.type === 'custom' && (
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>{tab.name}</CardTitle>
                                                    <CardDescription>Additional information</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="space-y-4">
                                                        {renderFormattedText(
                                                            typeof tab.content === 'string' ? tab.content : 'No content available.'
                                                        )}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )}
                                    </TabsContent>
                                ))}
                            </Tabs>
                        );
                            })()}
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="space-y-4 max-w-xl">
                        <h2 className="text-3xl sm:text-4xl font-bold">Interested in {product.title}?</h2>
                        <p className="text-lg text-primary-foreground/80">
                            Contact our team to discuss your requirements and receive a tailored quote for your project.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                            onClick={handleAddToRFQAction}
                            variant="secondary"
                            size="lg"
                            className="bg-secondary text-secondary-foreground hover:shadow-glow px-8 py-6 h-auto rounded-xl"
                        >
                            <FileText className="mr-2 h-5 w-5" />
                            Add to RFQ
                        </Button>
                        <Button
                            asChild
                            variant="secondary"
                            size="lg"
                            className="bg-secondary text-secondary-foreground hover:shadow-glow px-8 py-6 h-auto rounded-xl"
                        >
                            <Link href="/contact">
                                Contact Us
                                <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
