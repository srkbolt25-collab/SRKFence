import Link from 'next/link';
import type { CategoryInfo } from '@/lib/data';

export default function CategoryCard({ category }: { category: CategoryInfo }) {
  return (
    <Link href={`/categories/${category.slug}`} className="category-card-new">
      <div className="category-image">
        <img src={category.image} alt={`${category.name} category by SRK Steel`} loading="lazy" />
      </div>
      <div className="category-copy">
        <span>Industrial Category</span>
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <b>Know More →</b>
      </div>
    </Link>
  );
}
