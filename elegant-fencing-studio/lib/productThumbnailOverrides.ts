import type { Product } from '@/lib/data';
import { productGalleryImages } from '@/lib/productGalleries';

export const productThumbnailOverrides: Record<string, string> = {
  'ms-bars': '/products/catalog/ms-bars-round-bar-bundle-srk-steel.webp',
  'gi-pipe': '/products/catalog/gi-pipe-galvanized-round-pipes-srk-steel.jpg',
  'corrugated-roofing-sheet': '/products/gallery5/corrugated-roofing-sheet/galvanized-corrugated-roofing-sheet-profile-stock-srk-steel.jpeg',
  'corrugated-fence-sheet-panel': '/products/catalog/corrugated-fence-sheet-panel-site-barrier-srk-steel.jpeg',
  'ppgi-plain-sheet': '/products/catalog/ppgi-plain-sheet-prepainted-steel-sheets-srk-steel.jpg',
};

export function getProductThumbnail(product: Product): string {
  return productThumbnailOverrides[product.slug] ?? product.image;
}

export function getPrimaryProductImage(product: Product): string {
  return productThumbnailOverrides[product.slug] ?? productGalleryImages[product.slug]?.[0] ?? product.image;
}

export function getProductGallery(product: Product): string[] {
  const baseGalleryImages = productGalleryImages[product.slug] ?? [
    product.image,
    `/products/gallery/${product.slug}-2.jpg`,
    `/products/gallery/${product.slug}-3.jpg`,
    `/products/gallery/${product.slug}-4.jpg`,
  ];

  const primaryImage = productThumbnailOverrides[product.slug];
  if (!primaryImage) return baseGalleryImages;

  return [
    primaryImage,
    ...baseGalleryImages.filter((image, index) => index > 0 && image !== primaryImage),
  ];
}
