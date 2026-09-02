"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/recipes", label: "Recipes" },
    { href: "/bulk-order", label: "Bulk Order" },
    { href: "/blogs", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>

      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={styles.headerInner}>
          {/* Logo Image */}
          <Link href="/" className={styles.logoWrap}>
            <Image
              src="/logo.webp"
              alt="VibeRoot Essentials Logo"
              width={220}
              height={110}
              priority
              className={styles.logoImage}
            />
          </Link>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <Link href="/shop" className={styles.shopBtn}>
              Shop Now
            </Link>
          </div>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`} />
            <span className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`} />
            <span className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className={styles.mobileMenu}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileNavLink} ${pathname === link.href ? styles.mobileNavLinkActive : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/shop" className={styles.mobileShopBtn} onClick={() => setMenuOpen(false)}>
              Shop Now →
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
