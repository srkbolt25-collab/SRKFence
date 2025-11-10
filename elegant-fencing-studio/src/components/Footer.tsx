import { NavLink } from "@/components/NavLink";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Why Us", to: "/why-us" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101c44] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">SRK FENCE</h3>
            <p className="text-white/75">
              Your trusted partner for premium fencing solutions worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-white/75 transition-colors hover:text-white"
                    activeClassName="text-white"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-white/75">
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: contact@securefence.com</li>
              <li>International Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 pt-8 text-center text-white/70">
          <p>&copy; {currentYear} SRK FENCE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
