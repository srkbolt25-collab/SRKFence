'use client';

import Image from "next/image";
import { NavLink } from "@/components/NavLink";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock, Twitter, Youtube } from "lucide-react";

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.05 2 11.04c0 3.65 2.25 6.77 5.44 8.22-.07-.62-.13-1.57.03-2.25.14-.61.9-3.9.9-3.9s-.23-.46-.23-1.14c0-1.07.62-1.87 1.39-1.87.66 0 .98.5.98 1.1 0 .67-.42 1.67-.64 2.59-.18.77.39 1.4 1.16 1.4 1.39 0 2.46-1.47 2.46-3.59 0-1.88-1.35-3.2-3.28-3.2-2.24 0-3.56 1.68-3.56 3.42 0 .68.26 1.4.59 1.79.07.09.08.17.06.27-.06.29-.19.92-.22 1.05-.03.17-.11.2-.27.12-1-.47-1.63-1.94-1.63-3.13 0-2.55 1.85-4.89 5.33-4.89 2.8 0 4.98 1.99 4.98 4.65 0 2.78-1.75 5.02-4.18 5.02-.82 0-1.6-.43-1.87-.94l-.51 1.94c-.18.69-.66 1.55-.99 2.08.75.23 1.53.35 2.33.35 5.52 0 10-4.05 10-9.04C22 6.05 17.52 2 12 2z" />
  </svg>
);

const socialLinks = [
  { label: "Facebook", Icon: Facebook, href: "https://www.facebook.com/srkmetals" },
  { label: "Pinterest", Icon: PinterestIcon, href: "https://www.pinterest.com/srkmetals/" },
  { label: "YouTube", Icon: Youtube, href: "https://www.youtube.com/@SRKMetals" },
  { label: "LinkedIn", Icon: Linkedin, href: "https://www.linkedin.com/company/srk-metals-uae/" },
  { label: "Twitter", Icon: Twitter, href: "https://x.com/srkmetals" },
  { label: "Instagram", Icon: Instagram, href: "https://www.instagram.com/srkmetals23/" },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Why Us", to: "/why-us" },
  { label: "Contact", to: "/contact" },
  { label: "Get a Quote", to: "/contact" },
];

const productCategories = [
  { label: "Steel & Metal Fencing", to: "/products#steel-metal-fencing" },
  { label: "Welded Mesh Fencing", to: "/products#welded-mesh-fencing" },
  { label: "Wire Fencing", to: "/products#wire-fencing" },
  { label: "ECO / PVC Fencing", to: "/products#eco-pvc-fencing" },
  { label: "Fence Accessories", to: "/products#fence-accessories" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white [&_*]:border-transparent">
      <div className="bg-gradient-to-br from-[#0a1233] via-[#101c44] to-[#0a1233] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(356_70%_40%/_0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto grid gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:px-8 relative">
          <div className="space-y-6">
            <Image
              src="/WhatsApp_Image_2026-05-05_at_12.08.13_PM-removebg-preview.png"
              alt="SRK FENCE"
              width={180}
              height={64}
              className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
            <p className="text-sm leading-relaxed text-white/80 font-medium">
              Leading manufacturer and supplier of high-quality fencing systems serving estates across India and
              internationally since 1998. Your trusted partner for premium perimeter protection.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 hover:bg-gradient-to-br hover:from-[#c5162a] hover:to-[#e63946] hover:border-transparent hover:scale-110 hover:shadow-glow"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-extrabold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    className="transition-all duration-300 hover:text-white hover:translate-x-1 inline-block font-medium"
                    activeClassName="text-white"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-extrabold text-white mb-6">Product Categories</h4>
            <ul className="space-y-3 text-white/80">
              {productCategories.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className="transition-all duration-300 hover:text-white hover:translate-x-1 inline-block font-medium"
                    activeClassName="text-white"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-extrabold text-white mb-6">Contact Information</h4>
            <ul className="space-y-5 text-white/80">
              <li className="flex items-start gap-3 group">
                <div className="mt-1 h-5 w-5 rounded-full bg-gradient-to-br from-[#c5162a] to-[#e63946] flex items-center justify-center p-1">
                  <MapPin className="h-3 w-3 text-white" />
                </div>
                <span className="font-medium leading-relaxed group-hover:text-white transition-colors">
                  SRK FENCE Industries
                  <br />
                  Sharjah Publication City (SPC)
                  <br />
                  City Center - E311 - opposite Al Zahia
                  <br />
                  Muwaileh Commercial - Al Zahia
                  <br />
                  Sharjah - United Arab Emirates
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="mt-1 h-5 w-5 rounded-full bg-gradient-to-br from-[#c5162a] to-[#e63946] flex items-center justify-center p-1">
                  <Phone className="h-3 w-3 text-white" />
                </div>
                <span className="font-medium group-hover:text-white transition-colors">
                  <a href="tel:+971522160874" className="hover:underline">M: +971 52 216 0874</a>
                  <br />
                  <a href="tel:+971528489775" className="hover:underline">+971 52 848 9775</a>
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="mt-1 h-5 w-5 rounded-full bg-gradient-to-br from-[#c5162a] to-[#e63946] flex items-center justify-center p-1">
                  <Mail className="h-3 w-3 text-white" />
                </div>
                <span className="font-medium group-hover:text-white transition-colors">
                  <a href="mailto:Sales@srkmetals.com" className="hover:underline block">Sales@srkmetals.com</a>
                  <a href="mailto:info@srkmetals.com" className="hover:underline block">info@srkfencing.com</a>
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="mt-1 h-5 w-5 rounded-full bg-gradient-to-br from-[#c5162a] to-[#e63946] flex items-center justify-center p-1">
                  <Clock className="h-3 w-3 text-white" />
                </div>
                <span className="font-medium group-hover:text-white transition-colors">
                  Mon – Fri: 9:00 AM – 6:00 PM
                  <br />
                  Sat: 9:00 AM – 2:00 PM
                  <br />
                  Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#050a1f] border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-white/70 sm:flex-row sm:px-6 lg:px-8">
          <p className="font-medium">&copy; {currentYear} SRK FENCE Industries. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-all duration-300 hover:text-white hover:underline font-medium">
              Privacy Policy
            </a>
            <a href="#" className="transition-all duration-300 hover:text-white hover:underline font-medium">
              Terms of Service
            </a>
            <a href="#" className="transition-all duration-300 hover:text-white hover:underline font-medium">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
