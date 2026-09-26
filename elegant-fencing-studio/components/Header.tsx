'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { categoryInfo } from '@/lib/data';

const nav = [
  ['Products', '/products'],
  ['Categories', '/categories'],
  ['Applications', '/applications'],
  ['Countries', '/countries'],
  ['Blogs', '/blogs'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-open', open);
    return () => document.body.classList.remove('mobile-nav-open');
  }, [open]);

  const toggleMenu = () => {
    setOpen((value) => {
      const next = !value;
      if (next) setCatOpen(true);
      return next;
    });
  };

  const closeMenu = () => {
    setOpen(false);
    setCatOpen(true);
  };

  return (
    <>
      <div className="topbar desktop-topbar">
        <div className="container topbar-inner">
          <span>25+ Years Excellence as Leading Steel Supplier</span>
          <a href="tel:+971586600183">☎ +971 58 660 0183</a>
          <Link href="/contact">✉ Direct Message Us</Link>
          <span className="topbar-social"><span>Follow Us</span><a href="https://www.facebook.com/srkmetals" target="_blank" rel="noopener noreferrer">f</a><a href="https://www.linkedin.com/company/srk-metals-uae/" target="_blank" rel="noopener noreferrer">in</a></span>
        </div>
      </div>
      <div className="topbar mobile-topbar">
        <div className="container topbar-inner topbar-phone-only">
          <a href="tel:+971586600183">Call us: +971 58 660 0183</a>
        </div>
      </div>

      <header className="header">
        <div className="container header-main">
          <Link href="/" className="brand" aria-label="SRK Steel home" onClick={closeMenu}>
            <Image src="/srk-steel-logo-user.jpeg" alt="SRK Steel" width={498} height={262} priority />
          </Link>

          <nav className="navlinks desktop-nav" aria-label="Main navigation">
            {nav.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
          </nav>

          <div className="header-actions desktop-actions">
            <Link href="/contact" className="quote">Get a Quote →</Link>
          </div>

          <button
            className={`mobile-menu-toggle ${open ? 'active' : ''}`}
            type="button"
            aria-label={open ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={open}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className="category-nav desktop-category-nav" aria-label="Product categories">
          <div className="category-scroll">
            {categoryInfo.map((category) => <Link key={category.slug} href={`/categories/${category.slug}`}>{category.name}</Link>)}
          </div>
        </nav>

        <div className={`mobile-menu ${open ? 'open' : ''}`}>
          <div className="container mobile-menu-inner">
            <nav className="mobile-navlinks" aria-label="Mobile main navigation">
              {nav.map(([label, href]) => (
                <Link key={label} href={href} onClick={closeMenu}>{label}</Link>
              ))}
            </nav>

            <button
              className={`mobile-category-title mobile-category-toggle ${catOpen ? 'open' : ''}`}
              type="button"
              aria-expanded={catOpen}
              aria-controls="mobile-product-categories"
              onClick={() => setCatOpen((value) => !value)}
            >
              <span>Product Categories</span>
              <b>{catOpen ? '−' : '+'}</b>
            </button>
            {catOpen && (
              <nav id="mobile-product-categories" className="mobile-category-links" aria-label="Mobile product category navigation">
                {categoryInfo.map((category) => (
                  <Link key={category.slug} href={`/categories/${category.slug}`} onClick={closeMenu}>{category.name}</Link>
                ))}
              </nav>
            )}

            <Link href="/contact" className="quote mobile-quote" onClick={closeMenu}>Get a Quote →</Link>
          </div>
        </div>
      </header>
      {open && <button className="mobile-menu-backdrop" aria-label="Close mobile menu" type="button" onClick={closeMenu} />}
    </>
  );
}
