import Image from 'next/image';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import SectionHead from '@/components/SectionHead';
import { categoryInfo, products } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Steel Product Categories | MS, SS, GI & Aluminium',
  description: 'Compare mild steel, stainless steel, galvanized steel and aluminium product categories for project supply. Call +971 58 660 0183 for category RFQs.',
  path: '/categories',
  image: '/banners/products-banner.webp',
  keywords: ['steel product categories', 'mild steel products', 'stainless steel products', 'galvanized steel products', 'aluminium products'],
});

export default function CategoriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Product Categories</p>
          <h1>Steel Product Categories</h1>
          <p className="section-text">Explore SRK Steel product groups for construction, roofing, cladding, fabrication, interior fitout and MEP support requirements.</p>
        </div>
      </section>

      <section className="section">
        <div className="container visual-copy-grid">
          <div>
            <p className="eyebrow">Category Guide</p>
            <h2 className="large-title">Find the Right Steel System for Your Project</h2>
            <p className="lead-copy">SRK Steel categories help buyers move from a broad steel product family to the exact item required for a project. Contractors can review mild steel products for structural and fabrication requirements, stainless steel products for corrosion-resistant fabrication and finishing, galvanized steel products for roofing/cladding/support systems, and aluminium products for lightweight sheet and coil applications.</p>
            <p className="lead-copy">Each category links to related product pages with a product overview, common uses, specification points and RFQ details. This helps procurement teams compare options before sending grade, size, thickness, finish, quantity, drawings, BOQ reference and delivery location.</p>
            <div className="internal-links"><a href="/products">View Products</a><a href="/applications">View Applications</a><a href="/contact">Request RFQ</a></div>
          </div>
          <div className="visual-copy-image"><Image src="/banners/products-banner.webp" alt="Steel product categories supplied by SRK Steel" fill sizes="(max-width: 900px) 100vw, 46vw" /></div>
        </div>
      </section>

      <section className="section soft"><div className="container"><SectionHead eyebrow="Browse Range" title="Product Categories" text="Select a category to view related products, common applications and RFQ details." /><div className="grid category-grid-new">{categoryInfo.map((category) => <CategoryCard key={category.slug} category={category} />)}</div></div></section>
      <section className="section"><div className="container"><SectionHead eyebrow="Catalogue" title="All Steel Products" text="Open each product page for specifications, applications and enquiry details." /><div className="grid products">{products.map((product) => <ProductCard key={product.slug} product={product} compact />)}</div></div></section>
    </>
  );
}
