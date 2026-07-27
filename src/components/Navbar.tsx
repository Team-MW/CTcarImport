"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const links = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Nos Importations", href: "/importations" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`} role="navigation" aria-label="Navigation principale">
      <div className={`${styles.navInner} container`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="GT Cars Import - Accueil">
          <span className={styles.logoGT}>GT</span>
          <span className={styles.logoCars}>CARS</span>
          <span className={styles.logoImport}>IMPORT</span>
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.navLinks}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className={styles.navActions}>
          <Link href="/contact" className="btn btn-primary">
            Faire une demande
          </Link>
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ""}`} />
            <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ""}`} />
            <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.mobileLink} ${pathname === link.href ? styles.active : ""}`}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/contact" className={`btn btn-primary ${styles.mobileCta}`}>
          Faire une demande
        </Link>
      </div>
    </nav>
  );
}
