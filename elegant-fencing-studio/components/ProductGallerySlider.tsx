'use client';

import Image from 'next/image';
import { useRef, useState, type TouchEvent } from 'react';

type ProductGallerySliderProps = {
  productName: string;
  images: string[];
};

export default function ProductGallerySlider({ productName, images }: ProductGallerySliderProps) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = (index: number) => {
    const total = images.length;
    setActive((index + total) % total);
  };

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 45) return;
    goTo(active + (delta < 0 ? 1 : -1));
  };

  return (
    <div className="product-gallery" aria-label={`${productName} image gallery`}>
      <div className="product-gallery-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <Image
          src={images[active]}
          alt={`${productName} product image ${active + 1}`}
          fill
          priority={active === 0}
          sizes="(max-width: 900px) 100vw, 46vw"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="product-gallery-arrow product-gallery-prev"
              onClick={() => goTo(active - 1)}
              aria-label="Previous product image"
            >
              ‹
            </button>
            <button
              type="button"
              className="product-gallery-arrow product-gallery-next"
              onClick={() => goTo(active + 1)}
              aria-label="Next product image"
            >
              ›
            </button>
            <span className="product-gallery-count" aria-live="polite">
              {active + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      <div className="product-gallery-thumbs" role="tablist" aria-label={`${productName} gallery thumbnails`} style={{ gridTemplateColumns: `repeat(${images.length}, minmax(0, 1fr))` }}>
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={`product-gallery-thumb${index === active ? ' active' : ''}`}
            onClick={() => goTo(index)}
            aria-label={`Show ${productName} image ${index + 1}`}
            aria-selected={index === active}
            role="tab"
          >
            <span className="product-gallery-thumb-image">
              <Image
                src={image}
                alt=""
                fill
                sizes="110px"
              />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
