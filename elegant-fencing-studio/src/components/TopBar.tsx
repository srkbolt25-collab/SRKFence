'use client';

import { Mail, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-9 bg-[#A02222] text-white shadow-sm">
      <div className="container mx-auto flex h-full items-center justify-end gap-8 px-4 text-sm font-semibold sm:gap-10">
        <a
          href="tel:+971528489775"
          className="inline-flex items-center gap-2 transition-opacity hover:opacity-90"
        >
          <Phone className="h-4 w-4" />
          <span> +971 522160874</span>
        </a>
        <a
          href="mailto:sales@srkmetals.com"
          className="inline-flex items-center gap-2 transition-opacity hover:opacity-90"
        >
          <Mail className="h-4 w-4" />
          <span>sales@srkmetals.com</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
