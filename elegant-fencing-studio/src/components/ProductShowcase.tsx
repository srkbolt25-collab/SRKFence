'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import heroFence from "@/assets/hero-fence.jpg";

const ProductShowcase = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products directly without auth token
        const response = await fetch('/api/products');
        if (response.ok) {
          const data = await response.json();
          // Get first 5 active products
          const activeProducts = (data.products || [])
            .filter((p: any) => p.status === 'Active')
            .slice(0, 5);
          setProducts(activeProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // If no products, show loading or empty state
  if (loading) {
    return (
      <section className="bg-gradient-to-b from-background to-muted/30 py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Our Products</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
              Premium Fencing Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of high-quality fencing systems
            </p>
          </div>
          <div className="text-center text-muted-foreground">Loading products...</div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="bg-gradient-to-b from-background to-muted/30 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(356_70%_40%/_0.05)_0%,transparent_50%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Our Products</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
            Premium Fencing Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality fencing systems
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-12">
          {products.map((product, index) => {
            const colSpan =
              index === 0
                ? "lg:col-span-6"
                : index === 1
                  ? "lg:col-span-6"
                  : "lg:col-span-4";

            const productImage = product.images && product.images.length > 0 
              ? product.images[0] 
              : heroFence;
            
            const productTitle = product.title || product.name || 'Product';
            const productSubtitle = product.subtitle || product.category || '';
            const productDescription = product.description || '';

            return (
              <Link
                key={product.id || index}
                href={`/products/${product.id}`}
                className={`group relative aspect-[4/3] overflow-hidden rounded-2xl bg-black shadow-modern transition-all duration-500 hover:-translate-y-2 hover:shadow-float ${colSpan} block`}
              >
                {typeof productImage === 'string' && productImage.startsWith('http') ? (
                  <img
                    src={productImage}
                    alt={productTitle}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <Image
                    src={productImage}
                    alt={productTitle}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white sm:p-8">
                  <div className="backdrop-blur-md bg-white/5 rounded-lg px-4 py-3 sm:px-6 sm:py-4 border border-white/10">
                    {productSubtitle && (
                      <p className="text-xs sm:text-sm text-white/80 uppercase tracking-wide mb-1.5">
                        {productSubtitle}
                      </p>
                    )}
                    <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-3xl">
                      {productTitle}
                    </h3>
                    <span className="mt-3 block h-1 w-12 origin-left bg-gradient-to-r from-[#c5162a] to-[#e63946] rounded-full transition-[width] duration-500 ease-out group-hover:w-32 shadow-glow" />
                  </div>
                  {productDescription && (
                    <div className="backdrop-blur-md bg-white/5 rounded-lg px-4 py-3 sm:px-6 sm:py-4 mt-4 border border-white/10">
                      <p className="text-sm font-medium leading-relaxed text-white/90 transition-all duration-500 ease-out sm:text-base translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 line-clamp-2">
                        {productDescription}
                      </p>
                    </div>
                  )}
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-bold">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

