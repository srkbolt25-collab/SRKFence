import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Why Us", to: "/why-us" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-white shadow-elegant">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/srk_fence-removebg-preview.png"
                alt="SRK FENCE"
                className="h-20 w-auto object-contain"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="group relative inline-flex items-center font-medium text-[#4a4a4a] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#c5162a]/70 after:transition-all after:duration-300 hover:text-[#c5162a] hover:after:w-full"
                activeClassName="text-[#c5162a] after:w-full after:bg-[#c5162a]"
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              asChild
              className="px-6 py-5 h-auto rounded-xl font-semibold shadow-lg transition bg-[#c5162a] text-white hover:bg-[#9f1122] hover:text-white"
            >
              <NavLink to="/contact" className="font-medium">
                Get Quote
              </NavLink>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#c5162a] hover:bg-[#c5162a]/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden space-y-3 bg-white py-4 shadow-elegant">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block py-2 font-medium text-[#4a4a4a] transition-colors hover:text-[#c5162a]"
                activeClassName="text-[#c5162a]"
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              asChild
              className="w-full h-12 rounded-xl font-semibold shadow-md transition bg-[#c5162a] text-white hover:bg-[#9f1122] hover:text-white"
            >
              <NavLink to="/contact" className="font-medium">
                Get Quote
              </NavLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
