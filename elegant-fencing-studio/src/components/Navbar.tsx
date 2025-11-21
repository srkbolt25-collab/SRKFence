'use client';

import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Menu, ShoppingCart, X, Trash2, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRFQ } from "@/contexts/RFQContext";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { apiClient } from "@/lib/api";
import heroFence from "@/assets/hero-fence.jpg";
import metalFence from "@/assets/metal-fence.jpg";
import vinylFence from "@/assets/vinyl-fence.jpg";
import woodFence from "@/assets/wood-fence.jpg";

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

const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Why Us", to: "/why-us" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rfqProducts, setRfqProducts] = useState<any[]>([]);
  const [loadingRFQ, setLoadingRFQ] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { rfqItems, removeFromRFQ, clearRFQ } = useRFQ();

  // Load RFQ products when items change
  useEffect(() => {
    const loadRFQProducts = async () => {
      if (rfqItems.length === 0) {
        setRfqProducts([]);
        return;
      }

      setLoadingRFQ(true);
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
              // Return a fallback product if API fails
              return {
                id: id,
                title: `Product ${id.slice(0, 8)}...`,
                image: null,
                category: 'Unknown',
              };
            }
          })
        );
        setRfqProducts(products.filter(Boolean));
      } catch (error) {
        console.error('Error loading RFQ products:', error);
        setRfqProducts([]);
      } finally {
        setLoadingRFQ(false);
      }
    };

    loadRFQProducts();
  }, [rfqItems]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-xl shadow-modern transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/srk_fence-removebg-preview.png"
                alt="SRK FENCE"
                className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="group relative inline-flex items-center font-semibold text-[#4a4a4a] transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#c5162a] after:to-[#e63946] after:transition-all after:duration-300 hover:text-[#c5162a] hover:after:w-full"
                activeClassName="text-[#c5162a] after:w-full after:bg-gradient-to-r after:from-[#c5162a] after:to-[#e63946]"
              >
                {link.label}
              </NavLink>
            ))}
            
            {/* RFQ Cart */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative h-10 w-10 rounded-full hover:bg-[#c5162a]/10 transition-all duration-300"
                >
                  <ShoppingCart className="h-5 w-5 text-[#4a4a4a]" />
                  {rfqItems.length > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-gradient-to-r from-[#c5162a] to-[#e63946] text-white text-xs border-0">
                      {rfqItems.length}
                    </Badge>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0" align="end">
                <div className="flex flex-col max-h-[500px]">
                  <div className="flex items-center justify-between p-4 border-b">
                    <h3 className="font-semibold text-lg">Request for Quote</h3>
                    {rfqItems.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearRFQ}
                        className="h-8 px-2 text-xs text-muted-foreground hover:text-destructive"
                      >
                        Clear All
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex-1 overflow-y-auto">
                    {loadingRFQ ? (
                      <div className="flex items-center justify-center p-8">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                      </div>
                    ) : rfqProducts.length === 0 ? (
                      <div className="flex flex-col items-center justify-center p-8 text-center">
                        <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-sm text-muted-foreground">No items in RFQ</p>
                        <p className="text-xs text-muted-foreground mt-2">Add products to request a quote</p>
                      </div>
                    ) : (
                      <div className="p-2">
                        {rfqProducts.map((product) => (
                          <div
                            key={product.id}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
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
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => router.push(`/products/${product.id}`)}
                              >
                                <FileText className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                                onClick={() => removeFromRFQ(product.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {rfqProducts.length > 0 && (
                    <div className="p-4 border-t">
                      <Button
                        className="w-full bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow"
                        onClick={() => router.push('/rfq')}
                      >
                        RFQ ({rfqItems.length})
                      </Button>
                    </div>
                  )}
                </div>
              </PopoverContent>
            </Popover>
            
            <Button
              asChild
              className="px-6 py-5 h-auto rounded-xl font-semibold shadow-lg bg-gradient-to-r from-[#c5162a] to-[#e63946] text-white hover:shadow-glow hover:scale-105 transition-all duration-300 border-0"
            >
              <NavLink to="/contact" className="font-medium">
                Get Quote
              </NavLink>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#c5162a] hover:bg-[#c5162a]/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden space-y-3 bg-white/95 backdrop-blur-xl py-4 shadow-float rounded-b-2xl border-t border-border/40 animate-fade-in">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block py-3 px-4 font-semibold text-[#4a4a4a] transition-all duration-300 rounded-lg hover:text-[#c5162a] hover:bg-[#c5162a]/5"
                activeClassName="text-[#c5162a] bg-[#c5162a]/10"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="px-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full h-12 justify-between font-semibold"
                  >
                    <span className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      RFQ Cart
                    </span>
                    {rfqItems.length > 0 && (
                      <Badge className="bg-gradient-to-r from-[#c5162a] to-[#e63946] text-white">
                        {rfqItems.length}
                      </Badge>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[calc(100vw-2rem)] max-w-sm p-0" align="start">
                  <div className="flex flex-col max-h-[400px]">
                    <div className="flex items-center justify-between p-4 border-b">
                      <h3 className="font-semibold text-lg">Request for Quote</h3>
                      {rfqItems.length > 0 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={clearRFQ}
                          className="h-8 px-2 text-xs text-muted-foreground hover:text-destructive"
                        >
                          Clear All
                        </Button>
                      )}
                    </div>
                    
                    <div className="flex-1 overflow-y-auto">
                      {loadingRFQ ? (
                        <div className="flex items-center justify-center p-8">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                        </div>
                      ) : rfqProducts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center p-8 text-center">
                          <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
                          <p className="text-sm text-muted-foreground">No items in RFQ</p>
                          <p className="text-xs text-muted-foreground mt-2">Add products to request a quote</p>
                        </div>
                      ) : (
                        <div className="p-2">
                          {rfqProducts.map((product) => (
                            <div
                              key={product.id}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
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
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                                onClick={() => removeFromRFQ(product.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {rfqProducts.length > 0 && (
                      <div className="p-4 border-t">
                        <Button
                          className="w-full bg-gradient-to-r from-[#c5162a] to-[#e63946] hover:shadow-glow"
                          onClick={() => {
                            router.push('/rfq');
                            setIsOpen(false);
                          }}
                        >
                          RFQ ({rfqItems.length})
                        </Button>
                      </div>
                    )}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <Button
              asChild
              className="w-full h-12 rounded-xl font-semibold shadow-md transition-all duration-300 bg-gradient-to-r from-[#c5162a] to-[#e63946] text-white hover:shadow-glow hover:scale-[1.02] border-0"
            >
              <NavLink to="/contact" className="font-medium">
                Get Quote
              </NavLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
