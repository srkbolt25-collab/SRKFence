'use client';

import { ReactNode } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col antialiased">
      <TopBar />
      <Navbar />
      <main className="flex-1 pt-[116px] overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;

