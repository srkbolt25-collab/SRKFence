'use client';

import { Mail, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-9 bg-[#A02222] text-white shadow-sm">
      <div className="container mx-auto flex h-full items-center justify-center gap-3 px-3 text-[11px] font-semibold sm:gap-10 sm:px-6 sm:text-sm md:justify-end">
        <a
          href="tel:+971586600183"
          className="inline-flex shrink-0 items-center gap-1.5 transition-opacity hover:opacity-90 sm:gap-2"
        >
          <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span className="whitespace-nowrap">+971 58 660 0183</span>
        </a>
        <a
          href="mailto:sales@srkmetals.com"
          className="inline-flex shrink-0 items-center gap-1.5 transition-opacity hover:opacity-90 sm:gap-2"
        >
          <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span className="whitespace-nowrap">sales@srkmetals.com</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
