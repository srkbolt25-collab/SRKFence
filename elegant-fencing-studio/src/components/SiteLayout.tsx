'use client';

import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col antialiased">
      <Navbar />
      <main className="flex-1 pt-20 overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;

