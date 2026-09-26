import Image from 'next/image';
import Link from 'next/link';
import { categoryInfo, company, countries } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about-col">
          <Link href="/" className="footer-logo-link" aria-label="SRK Steel home">
            <Image src="/srk-steel-logo-user.jpeg" alt="SRK Steel" width={498} height={262} className="footer-logo" />
          </Link>
          <p>Premium industrial steel solutions engineered for strength, durability and precision. Serving construction and infrastructure sectors since 1998.</p>
          <div className="footer-social footer-social-left" aria-label="SRK Steel social links">
            <a href="https://www.facebook.com/srkmetals" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
            <a href="https://www.linkedin.com/company/srk-metals-uae/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
          </div>
        </div>
        <div>
          <h4>Industrial Products</h4>
          {categoryInfo.map((c) => <Link key={c.slug} href={`/categories/${c.slug}`}>{c.name}</Link>)}
        </div>
        <div>
          <h4>Explore Site</h4>
          {['Home', 'Products', 'Categories', 'Countries', 'Services', 'About', 'Contact'].map((item) => <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>{item}</Link>)}
        </div>
        <div>
          <h4>Countries We Serve</h4>
          {countries.map((country) => <Link key={country.slug} href={`/countries/${country.slug}`}>{country.name}</Link>)}
        </div>
        <div className="footer-contact-col">
          <h4>Get in Touch</h4>
          <p><b>{company.salesPhoneLabel}</b><br /><a href={`tel:${company.phone.replace(/[^+\d]/g, '')}`}>☎ {company.phone}</a></p>
          <p><b>{company.quickSupportLabel}</b><br /><a href={`tel:${company.whatsapp.replace(/[^+\d]/g, '')}`}>☎ {company.whatsapp}</a></p>
          <p className="footer-email-row"><a className="footer-email-link" href={`mailto:${company.email}`}><span className="footer-email-icon" aria-hidden="true">✉</span><span>{company.email}</span></a></p>
          <p className="footer-email-row"><a className="footer-email-link" href={`mailto:${company.secondaryEmail}`}><span className="footer-email-icon" aria-hidden="true">✉</span><span>{company.secondaryEmail}</span></a></p>
        </div>
      </div>
      <div className="container footer-bottom"><span>© 2026 SRK Steel Limited. All rights reserved.</span></div>
    </footer>
  );
}
