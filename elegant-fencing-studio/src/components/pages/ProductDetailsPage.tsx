'use client';

import { useState, useEffect } from 'react';
import SiteLayout from '@/components/SiteLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
                        description: data.description || '',
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

    // Update document head with SEO metadata when product is loaded
    useEffect(() => {
        if (product) {
            // Update document title
            const title = product.metaTitle || product.title || 'SRK FENCE - High Security Fencing Solutions';
            document.title = title;

            // Update or create meta description
            let metaDescription = document.querySelector('meta[name="description"]');
            const description = product.metaDescription || product.description || 'Leading manufacturer and supplier of high-quality fencing systems';

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
            const ogDescription = product.ogDescription || product.metaDescription || product.description || '';
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

            {/* Product Images Gallery */}
            {product.images && product.images.length > 0 && (
                <section className="bg-background py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Product Images</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {product.images.map((image: any, index: number) => (
                                <div key={index} className="relative aspect-video rounded-lg overflow-hidden border border-border">
                                    {typeof image === 'string' && (image.startsWith('http') || image.startsWith('data:')) ? (
                                        <img
                                            src={image}
                                            alt={`${product.title} - Image ${index + 1}`}
                                            className="w-full h-full object-cover"
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
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
                <section className="bg-muted/30 py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {product.features.map((feature: string) => (
                                <div key={feature} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                                    <span className="text-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Description */}
            {product.description && (
                <section className="bg-background py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Description</h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-foreground whitespace-pre-line leading-relaxed">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
                <section className="bg-background py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Product by Application</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {product.applications.map((application: string) => (
                                <div key={application} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border hover:bg-muted transition-colors">
                                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                                    <span className="text-sm text-foreground">{application}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Technical Information */}
            <section className="bg-background py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-foreground mb-8">Technical Information</h2>

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
                                                                        <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                                                                            {section.description}
                                                                        </p>
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
                                                                    <p className="text-muted-foreground whitespace-pre-line">
                                                                        {typeof tab.content === 'string' ? tab.content : 'No panel variations information available.'}
                                                                    </p>
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
                                        {(tab.type === 'bimObjects' || tab.type === 'custom') && (
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>{tab.name}</CardTitle>
                                                    <CardDescription>
                                                        {tab.type === 'bimObjects'
                                                            ? 'Download product drawings and specifications'
                                                            : 'Additional information'}
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="space-y-4">
                                                        <p className="text-muted-foreground whitespace-pre-line">
                                                            {typeof tab.content === 'string' ? tab.content : 'No content available.'}
                                                        </p>
                                                        {tab.type === 'bimObjects' && (
                                                            <div className="flex flex-col sm:flex-row gap-4">
                                                                <Button variant="outline" className="flex-1">
                                                                    <Download className="mr-2 h-4 w-4" />
                                                                    Download CAD Files
                                                                </Button>
                                                                <Button variant="outline" className="flex-1">
                                                                    <Download className="mr-2 h-4 w-4" />
                                                                    Download Revit Files
                                                                </Button>
                                                            </div>
                                                        )}
                                                        {tab.type === 'bimObjects' && (
                                                            <div className="p-4 bg-muted rounded-lg">
                                                                <p className="text-sm text-muted-foreground">
                                                                    Access our complete library of free BIM Objects for all product variations. Files are available in both CAD and Revit formats.
                                                                </p>
                                                            </div>
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
