'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Download, ExternalLink, X, ZoomIn } from 'lucide-react';
import { useState } from 'react';

type Certificate = {
  standard: string;
  title: string;
  certificateNumber: string;
  validFrom: string;
  validUntil: string;
  image: string;
  pdf: string;
};

export default function CertificateGallery({ certificates }: { certificates: Certificate[] }) {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <>
      <div className="grid gap-7 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <article
            key={certificate.standard}
            className="overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border/70 px-5 py-4 sm:px-6">
              <div>
                <h3 className="text-xl font-extrabold text-foreground sm:text-2xl">{certificate.standard}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{certificate.title}</p>
              </div>
              <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700">
                Cert. {certificate.certificateNumber}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setSelected(certificate)}
              className="group relative block w-full bg-white p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
              aria-label={`View enlarged ${certificate.standard} certificate`}
            >
              <div className="flex h-[520px] items-center justify-center overflow-hidden rounded-xl bg-white p-1 sm:h-[600px] lg:h-[560px] xl:h-[640px]">
                <Image
                  src={certificate.image}
                  alt={`${certificate.standard} ${certificate.title} certificate issued to SRK METALS FZE-LLC`}
                  width={1100}
                  height={1555}
                  className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <span className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-sm">
                <ZoomIn className="h-4 w-4" /> View enlarged certificate
              </span>
            </button>
          </article>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.standard} certificate preview`}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative flex max-h-[96vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-5">
              <div>
                <p className="text-sm font-extrabold text-foreground">{selected.standard} · Certificate {selected.certificateNumber}</p>
                <p className="text-xs text-muted-foreground">{selected.title} · Valid {selected.validFrom} – {selected.validUntil}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground transition hover:bg-slate-100"
                aria-label="Close certificate zoom"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-auto bg-slate-100 p-3 sm:p-5">
              <div className="mx-auto flex min-h-full max-w-3xl items-center justify-center rounded-xl bg-white p-2 shadow-sm sm:p-4">
                <Image
                  src={selected.image}
                  alt={`${selected.standard} certificate enlarged preview`}
                  width={1400}
                  height={1980}
                  className="h-auto max-h-[78vh] w-auto max-w-full object-contain"
                  priority
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-border p-4 sm:px-5">
              <Link
                href={selected.pdf}
                target="_blank"
                className="inline-flex items-center justify-center rounded-lg border border-primary px-4 py-2.5 text-sm font-bold text-primary transition hover:bg-primary hover:text-white"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Open PDF
              </Link>
              <a
                href={selected.pdf}
                download
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white transition hover:bg-primary/90"
              >
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
