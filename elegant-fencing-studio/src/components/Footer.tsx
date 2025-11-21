'use client';

import { NavLink } from "@/components/NavLink";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Why Us", to: "/why-us" },
  { label: "Contact", to: "/contact" },
  { label: "Get a Quote", to: "/contact" },
];

const productCategories = [
  { label: "High Security Fencing", to: "/products#high-security" },
  { label: "MUGAs & Sports Fencing", to: "/products#mugas-sports" },
  { label: "Playground Fencing", to: "/products#playground" },
  { label: "Perimeter Fencing", to: "/products#perimeter" },
  { label: "Hostile Vehicle Mitigation", to: "/products#hvm" },
  { label: "Commercial & Hospitality", to: "/products#commercial" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white [&_*]:border-transparent">
      <div className="bg-gradient-to-br from-[#0a1233] via-[#101c44] to-[#0a1233] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(356_70%_40%/_0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto grid gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:px-8 relative">
          <div className="space-y-6">
            <img src="/new_whitelogog.png" alt="SRK FENCE" className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            <p className="text-sm leading-relaxed text-white/80 font-medium">
              Leading manufacturer and supplier of high-quality fencing systems serving estates across India and
              internationally since 1998. Your trusted partner for premium perimeter protection.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 hover:bg-gradient-to-br hover:from-[#c5162a] hover:to-[#e63946] hover:border-transparent hover:scale-110 hover:shadow-glow"
                  aria-label="Social link"
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
                  Industrial Area, Phase 1
                  <br />
                  Mumbai, Maharashtra 400001
                  <br />
                  India
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="mt-1 h-5 w-5 rounded-full bg-gradient-to-br from-[#c5162a] to-[#e63946] flex items-center justify-center p-1">
                  <Phone className="h-3 w-3 text-white" />
                </div>
                <span className="font-medium group-hover:text-white transition-colors">
                  +91-9876543210
                  <br />
                  +91-9876543211
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="mt-1 h-5 w-5 rounded-full bg-gradient-to-br from-[#c5162a] to-[#e63946] flex items-center justify-center p-1">
                  <Mail className="h-3 w-3 text-white" />
                </div>
                <span className="font-medium group-hover:text-white transition-colors">
                  sales@srkfence.com
                  <br />
                  support@srkfence.com
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
