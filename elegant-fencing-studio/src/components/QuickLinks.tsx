'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const categoryLinks = [
  {
    label: "Chain Link Fence",
    href: "/products/chain-link-fence",
    description: "Cost-effective boundary fencing for UAE and GCC projects",
    image: "/applicartion/heavy-duty-chain-link-fence-gcc-supplier.webp",
  },
  {
    label: "Welded Mesh Fencing",
    href: "/products/welded-mesh-fence",
    description: "Rigid welded mesh panels for commercial and industrial sites",
    image: "/applicartion/galvanized-welded-wire-mesh-fence-uae.webp",
  },
  {
    label: "Anti-Climb 358 Fence",
    href: "/products/anti-climb-358-fence",
    description: "High-security mesh fencing for sensitive perimeters",
    image: "/applicartion/perimeter-security-fencing-system-gcc.webp",
  },
  {
    label: "Temporary & PVC Hoarding",
    href: "/products/temporary-fence-panels",
    description: "Construction site fencing, hoarding and portable panels",
    image: "/SRK FENCE Banners2.jpg",
  },
];

const QuickLinks = () => {
  return (
    <section className="bg-background py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
        <div className="text-center mb-8">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Quick Links</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Explore Our Products
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Quick access to our main product categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categoryLinks.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-hover"
              >
                <div className="relative h-52 w-full overflow-hidden bg-white">
                  <Image
                    src={link.image}
                    alt={link.label}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="border-t border-border p-5">
                  <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {link.label}
                  </h3>
                  <p className="mb-4 min-h-[44px] text-sm leading-relaxed text-muted-foreground">
                    {link.description}
                  </p>
                  <div className="flex items-center text-sm font-bold text-primary">
                    <span>View Products</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
