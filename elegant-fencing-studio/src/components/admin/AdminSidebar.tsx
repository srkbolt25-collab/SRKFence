'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Settings,
  LogOut,
  MessageSquare,
  Package,
  BarChart3,
  Menu,
  ShoppingCart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
  { icon: Package, label: "Products", path: "/admin/products" },
  { icon: MessageSquare, label: "Testimonials", path: "/admin/testimonials" },
  { icon: ShoppingCart, label: "Enquiries", path: "/admin/enquiries" },
  { icon: BarChart3, label: "Analytics", path: "/admin/analytics" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
];

const AdminSidebar = () => {
  const { logout, user } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/admin/login');
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="bg-white/90 backdrop-blur-sm"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 bg-gradient-to-b from-[#0f1c43] to-[#122456] border-r border-white/10 transition-transform duration-300",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo/Header */}
          <div className="flex h-16 items-center border-b border-white/10 px-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#c5162a] to-[#e63946] flex items-center justify-center">
                <LayoutDashboard className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-white text-sm">SRK FENCE</h2>
                <p className="text-xs text-white/60">Admin Panel</p>
              </div>
            </div>
          </div>

          {/* User Info */}
          <div className="border-b border-white/10 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#c5162a] to-[#e63946] flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {user?.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">{user?.name}</p>
                <p className="text-xs text-white/60 truncate">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-4 py-4 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-[#c5162a] to-[#e63946] text-white shadow-glow"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="border-t border-white/10 p-4">
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>

        {/* Overlay for mobile */}
        {isMobileOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </aside>
    </>
  );
};

export default AdminSidebar;

