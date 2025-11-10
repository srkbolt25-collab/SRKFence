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
    <nav className="fixed top-0 w-full bg-primary backdrop-blur-sm z-50 border-b border-primary shadow-elegant">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold text-white tracking-wider hover:text-white/80 transition-colors">
              SRK FENCE
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="group relative inline-flex items-center font-medium text-white/75 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white/70 after:transition-all after:duration-300 hover:text-white hover:after:w-full"
                activeClassName="text-white after:w-full after:bg-white"
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              asChild
              className="bg-white text-[#c5162a] hover:bg-[#f7d2d7] hover:text-[#9f1122] px-6 py-5 h-auto rounded-xl font-semibold shadow-lg transition"
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
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 bg-primary">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block py-2 font-medium text-white/80 transition-colors hover:text-white"
                activeClassName="text-white"
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              asChild
              className="w-full bg-white text-[#c5162a] hover:bg-[#f7d2d7] hover:text-[#9f1122] h-12 rounded-xl font-semibold shadow-md transition"
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
