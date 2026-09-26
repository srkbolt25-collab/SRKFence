import Link from 'next/link';
import type { Product } from '@/lib/data';
import { getProductThumbnail } from '@/lib/productThumbnailOverrides';

export default function ProductCard({
  product,
  compact = false,
  href,
  title,
  cta = 'View Details →',
}: {
  product: Product;
  compact?: boolean;
  href?: string;
  title?: string;
  cta?: string;
}) {
  const thumbnail = getProductThumbnail(product);

  return (
    <Link href={href ?? `/products/${product.slug}`} className={`product-card ${compact ? 'compact' : ''}`}>
      <div className="product-photo">
        <img src={thumbnail} alt={`${product.name} supplier by SRK Steel`} loading="lazy" />
      </div>
      <div className="product-content">
        <p className="product-cat">{product.category}</p>
        <h3>{title ?? product.name}</h3>
        {!compact && <p>{product.short}</p>}
        <b>{cta}</b>
      </div>
    </Link>
  );
}
