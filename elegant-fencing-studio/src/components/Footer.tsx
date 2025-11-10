import { NavLink } from "@/components/NavLink";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Why Us", to: "/why-us" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
  { label: "Get a Quote", to: "/contact" },
];

const productCategories = [
  { label: "High-Security Perimeters", to: "/services#high-security" },
  { label: "Commercial & Hospitality Estates", to: "/services#commercial-hospitality" },
  { label: "Architectural Screening", to: "/services#architectural-screening" },
  { label: "Design & Visualisation Studio", to: "/services#design-visualisation" },
  { label: "Global Project Delivery", to: "/services#global-delivery" },
  { label: "Lifecycle Care & Upgrades", to: "/services#lifecycle-care" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white [&_*]:border-transparent">
      <div className="bg-[#101c44]">
        <div className="container mx-auto grid gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:px-8">
          <div className="space-y-6">
            <img src="/new_whitelogog.png" alt="SRK FENCE" className="h-14 w-auto object-contain" />
            <p className="text-sm leading-relaxed text-white/75">
              Leading manufacturer and supplier of high-quality fencing systems serving estates across India and
              internationally since 1998. Your trusted partner for premium perimeter protection.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  aria-label="Social link"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-white/75">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    className="transition hover:text-white"
                    activeClassName="text-white"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Product Categories</h4>
            <ul className="mt-4 space-y-3 text-white/75">
              {productCategories.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className="transition hover:text-white"
                    activeClassName="text-white"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Contact Information</h4>
            <ul className="mt-4 space-y-4 text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-white/60" />
                <span>
                  SRK FENCE Industries
                  <br />
                  Industrial Area, Phase 1
                  <br />
                  Mumbai, Maharashtra 400001
                  <br />
                  India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-white/60" />
                <span>
                  +91-9876543210
                  <br />
                  +91-9876543211
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-white/60" />
                <span>
                  sales@srkfence.com
                  <br />
                  support@srkfence.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-white/60" />
                <span>
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

      <div className="bg-[#0a1233]">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-white/70 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {currentYear} SRK FENCE Industries. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="transition hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
