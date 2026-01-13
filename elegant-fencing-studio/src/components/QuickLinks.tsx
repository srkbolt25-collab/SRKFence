'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

// Helper function to slugify category names (matches ProductsPage slug format)
// ProductsPage uses: value.replace(/\s+/g, '-')
// We lowercase it for URL conventions, but the dynamic route matching handles case-insensitive comparison
const slugifyCategory = (categoryName: string): string => {
  return categoryName
    .toLowerCase()
    .replace(/\s+/g, '-'); // Replace spaces with dashes (matches ProductsPage logic)
};

const categoryLinks = [
  {
    label: "Steel & Metal Fencing",
    categoryName: "Steel & Metal Fencing",
    description: "Durable and secure metal fencing solutions",
    image: "/image1.png",
  },
  {
    label: "Welded Mesh Fencing",
    categoryName: "Welded Mesh Fencing",
    description: "Strong welded mesh for maximum security",
    image: "/image2.png",
  },
  {
    label: "Wire Fencing",
    categoryName: "Wire Fencing",
    description: "Versatile wire fencing options",
    image: "/image3.png",
  },
  {
    label: "ECO / PVC Fencing",
    categoryName: "ECO / PVC Fencing",
    description: "Eco-friendly PVC fencing solutions",
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
            const categorySlug = slugifyCategory(link.categoryName);
            return (
            <Link
              key={index}
              href={`/products/${encodeURIComponent(categorySlug)}`}
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

