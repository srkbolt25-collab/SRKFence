'use client';

import { useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { categoryInfo, products } from '@/lib/data';

const ALL = 'All';

export default function ProductsCatalogue() {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [search, setSearch] = useState('');

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatch = activeCategory === ALL || product.category === activeCategory;
      const searchMatch = !query || [product.name, product.category, product.short, product.intro].join(' ').toLowerCase().includes(query);
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Product Filters</p>
          <h2>Browse Steel Products by Category</h2>
          <p className="section-text">Filter the catalogue by product group or search by product name. Open any item to view applications, specification points and RFQ details.</p>
        </div>
        <div className="catalog-tools">
          <div className="filter-tabs" aria-label="Filter products by category">
            <span>Filter By:</span>
            <button type="button" className={activeCategory === ALL ? 'active' : ''} onClick={() => setActiveCategory(ALL)}>All</button>
            {categoryInfo.map((category) => (
              <button
                type="button"
                key={category.slug}
                className={activeCategory === category.name ? 'active' : ''}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <input
            className="searchbox"
            placeholder="Search steel products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search steel products"
          />
        </div>

        {visibleProducts.length ? (
          <div className="grid products">{visibleProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}</div>
        ) : (
          <div className="empty-state">
            <h2>No matching products found</h2>
            <p>Try another category or search term, or send your requirement for a custom RFQ.</p>
          </div>
        )}
      </div>
    </section>
  );
}
