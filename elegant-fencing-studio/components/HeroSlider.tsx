'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type TouchEvent } from 'react';

type Slide = {
  name: string;
  title: string;
  accent: string;
  subtitle: string;
  description: string;
  href: string;
  desktop: string;
  mobile: string;
};

const slides: Slide[] = [
  {
    name: 'Mild Steel (MS) Products',
    title: 'Mild Steel',
    accent: 'Products',
    subtitle: 'For Construction & Fabrication',
    description: 'MS plates, sections, pipes and bars for strong, reliable steel structures across the GCC.',
    href: '/categories/mild-steel-products',
    desktop: '/banners/homepage-slider/mild-steel-desktop.webp',
    mobile: '/banners/homepage-slider/mild-steel-mobile.webp',
  },
  {
    name: 'Stainless Steel (SS) Products',
    title: 'Stainless Steel',
    accent: 'Products',
    subtitle: 'For Industrial & Commercial Use',
    description: 'SS coils, sheets, slit coils and wires with excellent durability and corrosion resistance across the GCC.',
    href: '/categories/stainless-steel',
    desktop: '/banners/homepage-slider/stainless-steel-desktop.webp',
    mobile: '/banners/homepage-slider/stainless-steel-mobile.webp',
  },
  {
    name: 'Galvanized Steel (GI) Products',
    title: 'Galvanized Steel',
    accent: 'Products',
    subtitle: 'For Roofing & Construction',
    description: 'GI coils, purlins, decking sheets and insulated panels for durable roofing and structural applications across the GCC.',
    href: '/categories/galvanized-steel',
    desktop: '/banners/homepage-slider/galvanized-steel-desktop.webp',
    mobile: '/banners/homepage-slider/galvanized-steel-mobile.webp',
  },
  {
    name: 'Aluminium Products',
    title: 'Aluminium',
    accent: 'Products',
    subtitle: 'For Modern Industrial Solutions',
    description: 'Aluminium coils, sheets and profiles for lightweight, durable and corrosion-resistant applications across the GCC.',
    href: '/categories/aluminium',
    desktop: '/banners/homepage-slider/aluminium-desktop.webp',
    mobile: '/banners/homepage-slider/aluminium-mobile.webp',
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const current = slides[active];

  useEffect(() => {
    if (hovered || interacted) return;
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [hovered, interacted]);

  const go = (direction: 1 | -1) => {
    setActive((index) => (index + direction + slides.length) % slides.length);
    setInteracted(true);
  };

  const choose = (index: number) => {
    setActive(index);
    setInteracted(true);
  };

  const onTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 42) return;
    go(delta < 0 ? 1 : -1);
  };

  return (
    <section
      className="srkHero"
      aria-label="SRK Steel product category slider"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <h1 className="srkHeroSrOnly">Steel Products for GCC Projects</h1>

      <div className="srkHeroStage">
        <div className="srkHeroSlide">
          <div className="srkHeroArt" aria-hidden="true">
            <picture>
              <source media="(max-width: 760px)" srcSet={current.mobile} />
              <img src={current.desktop} alt="" draggable={false} />
            </picture>
          </div>

          <div className="srkHeroShade" aria-hidden="true" />

          <div className="srkHeroContent">
            <h2 className="srkHeroTitle">
              <span>{current.title}</span>
              <strong>{current.accent}</strong>
            </h2>
            <p className="srkHeroSubtitle">{current.subtitle}</p>
            <span className="srkHeroLine" aria-hidden="true" />
            <p className="srkHeroDescription">{current.description}</p>

            <div className="srkHeroButtons">
              <Link href={current.href} className="srkHeroButton srkHeroPrimary">
                <span>Explore Products</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="srkHeroButton srkHeroSecondary">
                <span>Request RFQ</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="srkHeroArrow srkHeroArrowLeft"
          aria-label="Previous category"
          onClick={() => go(-1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="srkHeroArrow srkHeroArrowRight"
          aria-label="Next category"
          onClick={() => go(1)}
        >
          ›
        </button>

        <div className="srkHeroDots" aria-label="Category slider navigation">
          {slides.map((slide, index) => (
            <button
              key={slide.name}
              type="button"
              className={index === active ? 'isActive' : ''}
              aria-current={index === active ? 'true' : undefined}
              aria-label={`Show ${slide.name}`}
              onClick={() => choose(index)}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .srkHero {
          position: relative;
          width: 100%;
          height: 430px;
          overflow: hidden;
          background: #050a0f;
          color: #fff;
          user-select: text;
          touch-action: pan-y;
        }
        .srkHeroStage,
        .srkHeroSlide {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .srkHeroSlide {
          background: linear-gradient(90deg, #050a0f 0%, #071018 48%, #050a0f 100%);
        }
        .srkHeroArt {
          position: absolute;
          z-index: 1;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .srkHeroArt picture,
        .srkHeroArt img {
          display: block;
          width: 100%;
          height: 100%;
        }
        .srkHeroArt img {
          object-fit: cover;
          object-position: center center;
          pointer-events: none;
          user-select: none;
        }
        .srkHeroShade {
          position: absolute;
          z-index: 2;
          inset: 0;
          background: linear-gradient(90deg, rgba(4,9,14,.70) 0%, rgba(4,9,14,.38) 27%, rgba(4,9,14,.10) 42%, rgba(4,9,14,.03) 60%, transparent 75%);
          pointer-events: none;
        }
        .srkHeroContent {
          position: absolute;
          z-index: 4;
          left: clamp(48px, 8vw, 120px);
          top: 50%;
          width: min(42%, 580px);
          transform: translateY(-50%);
        }
        .srkHeroTitle {
          margin: 0;
          text-transform: uppercase;
          font-size: clamp(40px, 3.35vw, 54px);
          line-height: 0.96;
          letter-spacing: -.02em;
          font-weight: 900;
        }
        .srkHeroTitle span,
        .srkHeroTitle strong {
          display: block;
        }
        .srkHeroTitle strong {
          margin-top: 4px;
          color: #ef3a30;
          font-weight: 900;
        }
        .srkHeroSubtitle {
          margin: 14px 0 0;
          text-transform: uppercase;
          font-size: clamp(15px, 1.22vw, 19px);
          line-height: 1.25;
          font-weight: 800;
          letter-spacing: .01em;
        }
        .srkHeroLine {
          display: block;
          width: 56px;
          height: 3px;
          margin: 14px 0 14px;
          background: #ef3329;
        }
        .srkHeroDescription {
          margin: 0;
          max-width: 500px;
          font-size: clamp(14px, 1.08vw, 16.5px);
          line-height: 1.52;
          color: rgba(255,255,255,.92);
        }
        .srkHeroButtons {
          display: flex;
          gap: 12px;
          margin-top: 20px;
          flex-wrap: wrap;
        }
        .srkHeroButton {
          position: relative;
          z-index: 10;
          pointer-events: auto;
          min-width: 176px;
          height: 48px;
          padding: 0 18px;
          border-radius: 2px;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-decoration: none;
          color: #fff;
          font-size: 16px;
          line-height: 1;
          font-weight: 800;
          transition: transform .18s ease, background .18s ease, border-color .18s ease;
        }
        .srkHeroButton:hover { transform: translateY(-1px); }
        .srkHeroPrimary {
          background: #c62828;
          border: 1px solid #c62828;
        }
        .srkHeroPrimary:hover {
          background: #b71c1c;
          border-color: #b71c1c;
        }
        .srkHeroSecondary {
          background: rgba(5,10,15,.55);
          border: 1px solid rgba(255,255,255,.72);
        }
        .srkHeroArrow {
          position: absolute;
          z-index: 8;
          top: 50%;
          width: 44px;
          height: 44px;
          transform: translateY(-50%);
          border: 1px solid rgba(255,255,255,.72);
          border-radius: 50%;
          background: rgba(3,8,12,.28);
          color: #fff;
          font-size: 30px;
          line-height: 38px;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .srkHeroArrowLeft { left: 18px; }
        .srkHeroArrowRight { right: 18px; }
        .srkHeroDots {
          position: absolute;
          z-index: 9;
          left: 50%;
          bottom: 12px;
          transform: translateX(-50%);
          display: flex;
          gap: 9px;
          align-items: center;
        }
        .srkHeroDots button {
          width: 8px;
          height: 8px;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background: rgba(255,255,255,.48);
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .srkHeroDots button.isActive { background: #ef3329; }
        .srkHeroSrOnly {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0,0,0,0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }

        @media (max-width: 760px) {
          .srkHero { height: 480px; }
          .srkHeroArt img {
            object-position: center bottom;
          }
          .srkHeroContent {
            left: 24px;
            top: 18px;
            width: min(86%, 390px);
            transform: none;
          }
          .srkHeroTitle {
            font-size: clamp(34px, 9.5vw, 42px);
            line-height: 0.96;
          }
          .srkHeroTitle strong { margin-top: 3px; }
          .srkHeroSubtitle {
            margin-top: 10px;
            font-size: clamp(13.5px, 3.7vw, 16px);
            line-height: 1.24;
          }
          .srkHeroLine {
            width: 52px;
            height: 3px;
            margin: 9px 0 9px;
          }
          .srkHeroDescription {
            max-width: 335px;
            font-size: clamp(13.5px, 3.6vw, 15.5px);
            line-height: 1.46;
          }
          .srkHeroButtons {
            gap: 9px;
            margin-top: 13px;
            flex-direction: column;
            align-items: flex-start;
          }
          .srkHeroButton {
            min-width: 180px;
            height: 41px;
            padding: 0 14px;
            gap: 12px;
            font-size: 14.5px;
          }
          .srkHeroArrow {
            top: 56%;
            width: 32px;
            height: 32px;
            font-size: 24px;
            line-height: 27px;
          }
          .srkHeroArrowLeft { left: 8px; }
          .srkHeroArrowRight { right: 8px; }
          .srkHeroDots {
            bottom: 10px;
            gap: 7px;
          }
          .srkHeroDots button {
            width: 7px;
            height: 7px;
          }
        }

        @media (max-width: 430px) {
          .srkHero { height: 460px; }
          .srkHeroContent {
            left: 22px;
            top: 18px;
            width: 86%;
          }
          .srkHeroTitle { font-size: 34px; }
          .srkHeroSubtitle { font-size: 13.5px; }
          .srkHeroDescription {
            font-size: 13.5px;
            max-width: 305px;
          }
          .srkHeroButton {
            min-width: 174px;
            height: 39px;
            padding: 0 13px;
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
