import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Nos Importations", href: "/importations" },
  { label: "FAQ", href: "/faq" },
  { label: "Faire une demande", href: "/contact" },
];

const legalLinks = [
  { label: "Mentions Légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "Conditions générales de vente", href: "/cgv" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* CTA Banner */}
      <div className={styles.ctaBanner}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaTitle}>N'attendez plus et faites une demande personnalisée !</h2>
            <p className={styles.ctaSub}>Un expert vous recontacte sous 24h</p>
          </div>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Faire une demande
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.footerMain}>
        <div className={`container ${styles.footerGrid}`}>
          {/* Brand Column */}
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo} style={{ display: 'inline-block' }}>
              <Image src="/logo.webp" alt="GT Cars Import" width={160} height={45} style={{ objectFit: 'contain' }} />
            </Link>
            <p className={styles.brandTagline}>
              Spécialiste de l'importation de véhicules depuis l'Allemagne depuis 2020.
            </p>
            <div className={styles.socialRow}>
              <a
                href="https://www.instagram.com/gtcarsimport"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Navigation</h4>
            <ul className={styles.footerList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    <span className={styles.footerLinkArrow}>→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Informations</h4>
            <ul className={styles.footerList}>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    <span className={styles.footerLinkArrow}>→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Contact</h4>
            <ul className={styles.footerContactList}>
              <li>
                <a href="tel:0970702675" className={styles.footerContactItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.89 12.07 19.79 19.79 0 0 1 1.79 3.41 2 2 0 0 1 3.77 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.61 6.61l1.1-1.1a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  09 70 70 26 75
                </a>
              </li>
              <li>
                <a href="mailto:gtcarsimport44@gmail.com" className={styles.footerContactItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  gtcarsimport44@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={`container ${styles.footerBottomInner}`}>
          <p className={styles.copyright}>
            Copyright © {new Date().getFullYear()} GTCARSIMPORT — Tous droits réservés
          </p>
          <p className={styles.credits}>
            Ce site a été réalisé par <a href="https://microdidact.com/" target="_blank" rel="noopener noreferrer">micodidact</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
