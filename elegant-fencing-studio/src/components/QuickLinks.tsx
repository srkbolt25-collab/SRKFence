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
    image: "/Applicationsnew/high-security-boundary-fencing-contractors-gcc.png",
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
    <section className="bg-background py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Quick Links</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Explore Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick access to our main product categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoryLinks.map((link, index) => {
            return (
            <Link
              key={index}
              href={link.href}
              className="group relative rounded-xl border border-border hover:border-primary/50 hover:shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative w-full h-80 rounded-xl overflow-hidden bg-muted">
                <Image
                  src={link.image}
                  alt={link.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-sm text-white/90 mb-4 line-clamp-2">
                    {link.description}
                  </p>
                  <div className="flex items-center text-white font-semibold text-sm">
                    <span>View Products</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
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
