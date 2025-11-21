'use client';

import { useState, useEffect } from 'react';
import SiteLayout from '@/components/SiteLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRFQ } from '@/contexts/RFQContext';
import { apiClient } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { Trash2, Plus, Minus, MapPin, FileText, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import heroFence from '@/assets/hero-fence.jpg';
import metalFence from '@/assets/metal-fence.jpg';
import vinylFence from '@/assets/vinyl-fence.jpg';
import woodFence from '@/assets/wood-fence.jpg';

// Static products data (for fallback)
const staticProducts: Record<string, any> = {
  'high-security': {
    id: 'high-security',
    title: 'High Security Fencing',
    images: [heroFence, metalFence],
    category: 'Security',
  },
  'mugas-sports': {
    id: 'mugas-sports',
    title: 'MUGAs & Sports Fencing',
    images: [vinylFence, woodFence],
    category: 'Sports',
  },
  'playground': {
    id: 'playground',
    title: 'Playground Fencing',
    images: [woodFence, heroFence],
    category: 'Playground',
  },
  'perimeter': {
    id: 'perimeter',
    title: 'Perimeter Fencing',
    images: [metalFence, heroFence],
    category: 'Perimeter',
  },
  'hvm': {
    id: 'hvm',
    title: 'Hostile Vehicle Mitigation (HVM)',
    images: [heroFence, metalFence],
    category: 'Security',
  },
  'commercial': {
    id: 'commercial',
    title: 'Commercial & Hospitality Fencing',
    images: [metalFence, vinylFence],
    category: 'Commercial',
  },
};

const countries = [
  'United Arab Emirates',
  'Saudi Arabia',
  'Qatar',
  'Kuwait',
  'Bahrain',
  'Oman',
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'India',
  'Other',
];

export default function RFQPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { rfqItems, removeFromRFQ, clearRFQ } = useRFQ();
  const [rfqProducts, setRfqProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    companyName: '',
    country: '',
    city: '',
    mobileNumber: '',
    comments: '',
  });

  // Load RFQ products
  useEffect(() => {
    const loadRFQProducts = async () => {
      if (rfqItems.length === 0) {
        setRfqProducts([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const products = await Promise.all(
          rfqItems.map(async (id) => {
            // First check if it's a static product
            if (staticProducts[id]) {
              const staticProduct = staticProducts[id];
              return {
                id: staticProduct.id,
                title: staticProduct.title,
                image: staticProduct.images && staticProduct.images.length > 0 ? staticProduct.images[0] : null,
                category: staticProduct.category,
              };
            }

            // Otherwise, try to fetch from API
            try {
              const response = await apiClient.getProduct(id);
              return {
                id: response.id,
                title: response.title || response.name,
                image: response.images && response.images.length > 0 ? response.images[0] : null,
                category: response.category || 'General',
              };
            } catch (error) {
              console.error(`Error loading product ${id}:`, error);
              return {
                id: id,
                title: `Product ${id.slice(0, 8)}...`,
                image: null,
                category: 'Unknown',
              };
            }
          })
        );
        const validProducts = products.filter(Boolean);
        setRfqProducts(validProducts);
        
        // Initialize quantities
        const initialQuantities: Record<string, number> = {};
        validProducts.forEach((product) => {
          initialQuantities[product.id] = quantities[product.id] || 1;
        });
        setQuantities(initialQuantities);
      } catch (error) {
        console.error('Error loading RFQ products:', error);
        setRfqProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadRFQProducts();
  }, [rfqItems]);

  // Redirect if no items
  useEffect(() => {
    if (!loading && rfqItems.length === 0) {
      toast({
        title: "No items in RFQ",
        description: "Please add products to your RFQ before proceeding.",
      });
      router.push('/products');
    }
  }, [loading, rfqItems.length, router, toast]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuantityChange = (productId: string, delta: number) => {
    setQuantities((prev) => {
      const newQuantity = (prev[productId] || 1) + delta;
      return {
        ...prev,
        [productId]: Math.max(1, newQuantity),
      };
    });
  };

  const handleRemoveItem = (productId: string) => {
    removeFromRFQ(productId);
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[productId];
      return newQuantities;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.address || 
        !formData.companyName || !formData.city || !formData.mobileNumber) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      // Prepare RFQ data
      const rfqData = {
        ...formData,
        items: rfqProducts.map((product) => ({
          productId: product.id,
          productTitle: product.title,
          quantity: quantities[product.id] || 1,
        })),
        totalItems: rfqProducts.reduce((sum, product) => sum + (quantities[product.id] || 1), 0),
        submittedAt: new Date().toISOString(),
      };

      // Here you would typically send this to your backend API
      console.log('RFQ Submission:', rfqData);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "RFQ Submitted Successfully",
        description: "Your request for quotation has been submitted. We will contact you shortly.",
      });

      // Clear RFQ and redirect
      clearRFQ();
      router.push('/products');
    } catch (error) {
      console.error('Error submitting RFQ:', error);
      toast({
        title: "Error",
        description: "Failed to submit RFQ. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const totalItems = rfqProducts.reduce((sum, product) => sum + (quantities[product.id] || 1), 0);

  if (loading) {
    return (
      <SiteLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </SiteLayout>
    );
  }

  if (rfqItems.length === 0) {
    return null; // Will redirect
  }

  return (
    <SiteLayout>
      <div className="min-h-screen bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Check out</h1>
            <p className="text-lg text-muted-foreground">Complete your Request for Quotation</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
            {/* Left Section - Form */}
            <Card>
              <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <CardTitle className="text-white">Address</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">
                      Full name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="youremail@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">
                    Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Address - Bldg No. / Landmark / Street"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">
                      Company Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select
                      value={formData.country}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, country: value }))}
                    >
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">
                      City <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobileNumber">
                      Mobile Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="mobileNumber"
                      name="mobileNumber"
                      type="tel"
                      placeholder="Mobile Number"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comments">Comments</Label>
                  <Textarea
                    id="comments"
                    name="comments"
                    placeholder="Comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Right Section - Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Products List */}
                <div className="space-y-4">
                  {rfqProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 p-4 border rounded-lg"
                    >
                      {product.image ? (
                        <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden border border-border bg-muted">
                          {typeof product.image === 'string' && (product.image.startsWith('http') || product.image.startsWith('data:') || product.image.startsWith('/')) ? (
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Image
                              src={product.image}
                              alt={product.title}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          )}
                        </div>
                      ) : (
                        <div className="h-16 w-16 flex-shrink-0 rounded-md bg-muted flex items-center justify-center">
                          <FileText className="h-6 w-6 text-muted-foreground" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium truncate">{product.title}</h4>
                        {product.category && (
                          <p className="text-xs text-muted-foreground truncate">{product.category}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(product.id, -1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">
                          {quantities[product.id] || 1}
                        </span>
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(product.id, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => handleRemoveItem(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Summary Details */}
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Items</span>
                    <span className="font-medium">{totalItems}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">To be discussed</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4 border-t">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow"
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : 'PLACE ENQUIRE'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-[#c5162a] text-[#c5162a] hover:bg-[#c5162a]/10"
                    onClick={() => router.push('/products')}
                  >
                    Continue Shopping
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </SiteLayout>
  );
}

