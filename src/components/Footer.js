import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {/* Brand Column */}
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.footerLogoWrap}>
            <Image
              src="/logo.webp"
              alt="VibeRoot Essentials Logo"
              width={280}
              height={140}
              className={styles.footerLogoImage}
            />
          </Link>
          <p className={styles.footerTagline}>
            100% Certified Organic superfoods, cold-pressed and triple lab-tested — delivered straight to your door across Canada.
          </p>
          <div className={styles.footerBadges}>
            <span className={styles.badge}>🌿 USDA Organic</span>
            <span className={styles.badge}>🇨🇦 Canadian Owned</span>
            <span className={styles.badge}>🧪 Lab Tested</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.footerCol}>
          <h4 className={styles.footerColTitle}>Quick Links</h4>
          <Link href="/shop" className={styles.footerLink}>Shop All</Link>
          <Link href="/recipes" className={styles.footerLink}>Recipes</Link>
          <Link href="/bulk-order" className={styles.footerLink}>Bulk Order</Link>
          <Link href="/blogs" className={styles.footerLink}>Blog</Link>
          <Link href="/about" className={styles.footerLink}>About Us</Link>
          <Link href="/contact" className={styles.footerLink}>Contact</Link>
        </div>

        {/* Products */}
        <div className={styles.footerCol}>
          <h4 className={styles.footerColTitle}>Our Products</h4>
          <Link href="/shop" className={styles.footerLink}>Raspberry Powder</Link>
          <Link href="/shop" className={styles.footerLink}>Pineapple Powder</Link>
          <Link href="/shop" className={styles.footerLink}>Beetroot Powder</Link>
          <Link href="/shop" className={styles.footerLink}>Ginger Root Powder</Link>
          <Link href="/shop" className={styles.footerLink}>Wheat Grass Powder</Link>
        </div>

        {/* Contact & WhatsApp */}
        <div className={styles.footerCol}>
          <h4 className={styles.footerColTitle}>Get In Touch</h4>
          <p className={styles.footerContactItem}>📍 Toronto, Ontario, Canada</p>
          <p className={styles.footerContactItem}>📧 hello@viberoot.ca</p>
          <p className={styles.footerContactItem}>📞 +1 (416) 555-0190</p>
          <a
            href="https://wa.me/14165550190"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat on WhatsApp
          </a>
          <div className={styles.socials}>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.16 8.16 0 004.78 1.52V6.87a4.85 4.85 0 01-1.01-.18z"/></svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2026 VibeRoot Essentials Inc. — Toronto, Ontario, Canada. All rights reserved.</p>
        <div className={styles.footerBottomLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
}
