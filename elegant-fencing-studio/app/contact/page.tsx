import Image from 'next/image';
import Link from 'next/link';
import { company, products } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';
import RFQForm from '@/components/RFQForm';

export const metadata = buildMetadata({
  title: 'Contact Steel Supplier in UAE | RFQ & Sales',
  description: 'Request RFQs for mild steel, stainless steel, GI/PPGI and aluminium products. Call SRK Steel Sales & Purchase at +971 58 660 0183.',
  path: '/contact',
  image: '/banners/products-banner.webp',
  keywords: ['steel supplier contact UAE', 'steel RFQ UAE', 'steel sales UAE', 'mild steel RFQ', 'GI steel RFQ'],
});

const salesPhoneHref = `tel:${company.phone.replace(/[^+\d]/g, '')}`;
const quickPhoneHref = `tel:${company.whatsapp.replace(/[^+\d]/g, '')}`;
const whatsappHref = `https://wa.me/${company.whatsapp.replace(/[^\d]/g, '')}`;
const emailHref = `mailto:${company.email}?subject=Steel%20Product%20RFQ%20-%20SRK%20Steel`;
const secondaryEmailHref = `mailto:${company.secondaryEmail}?subject=Steel%20Product%20RFQ%20-%20SRK%20Steel`;

export default function ContactPage() {
  return (
    <>
      <section className="page-banner contact-banner">
        <Image src="/banners/products-banner.webp" alt="Request steel RFQ from SRK Steel UAE" fill priority sizes="100vw" />
        <div className="page-banner-overlay" />
        <div className="container page-banner-content">
          <p className="eyebrow">Contact SRK Steel</p>
          <h1>Request a Steel RFQ</h1>
          <p>
            Share your product name, grade, size, finish, quantity, drawing or BOQ details and delivery location so the SRK Steel team can review your requirement clearly.
          </p>
        </div>
      </section>

      <section className="section soft contact-section-top">
        <div className="container contact-sequence">
          <RFQForm recipients={company.rfqEmails} />

          <aside className="contact-info-panel">
            <p className="eyebrow">Contact Information</p>
            <h2>Speak With Our Team</h2>
            <div className="contact-number-list">
              <a className="chip contact-link" href={salesPhoneHref} aria-label={`Call ${company.salesPhoneLabel} at ${company.phone}`}>
                <span><small>{company.salesPhoneLabel}</small>☎ {company.phone}</span><b>Call →</b>
              </a>
              <a className="chip contact-link" href={quickPhoneHref} aria-label={`Call ${company.quickSupportLabel} at ${company.whatsapp}`}>
                <span><small>{company.quickSupportLabel}</small>☎ {company.whatsapp}</span><b>Call →</b>
              </a>
              <a className="chip contact-link" href={emailHref} aria-label={`Email SRK Steel at ${company.email}`}>✉ {company.email}</a>
              <a className="chip contact-link" href={secondaryEmailHref} aria-label={`Email SRK Metals at ${company.secondaryEmail}`}>✉ {company.secondaryEmail}</a>
              <a className="chip contact-link" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Contact SRK Steel on WhatsApp">WhatsApp RFQ Support →</a>
            </div>
          </aside>

          <div className="map-panel contact-map-card">
            <iframe
              title="SRK Steel Google Business location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=SRK%20Steel%20UAE&output=embed"
            />
            <div className="map-copy">
              <div>
                <h3>Find SRK Steel on Google</h3>
                <p>Open the Google Business profile for location, directions and business information.</p>
              </div>
              <a className="btn" href={company.googleBusinessUrl} target="_blank" rel="noopener noreferrer">Open Google Profile →</a>
            </div>
          </div>

          <div className="contact-rfq-panel contact-rfq-wide">
            <p className="eyebrow">Common Enquiries</p>
            <h3>Popular RFQ Items</h3>
            <p className="lead-copy compact-copy">Select a common item below or describe your custom steel requirement in the form above.</p>
            <div className="chips rfq-chip-grid clickable-rfq-grid">
              {products.slice(0, 12).map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="chip contact-link product-rfq-link">
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
