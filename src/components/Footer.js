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
            100% Certified Organic superfoods, cold-pressed and triple tested and delivered straight to your door across Canada.
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
          <p className={styles.footerContactItem}>📍 Address / Adresse : VibeRoot Essentials T3P2H4 Calgary, Alberta Canada</p>
          <p className={styles.footerContactItem}>📧 hello@viberootessentials.com</p>
          <p className={styles.footerContactItem}>📞 +1 (587) 832-0198</p>
          <a
            href="https://wa.me/15878320198"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 2.217.72 4.267 1.942 5.926L2.6 21.4l3.585-1.328A9.957 9.957 0 0012 22.035c5.523 0 10-4.484 10-10.018C22 6.484 17.523 2 12 2zm5.83 14.156c-.244.685-1.417 1.309-1.977 1.394-.52.078-1.187.11-3.613-.878-3.08-1.256-5.06-4.382-5.213-4.587-.153-.205-1.246-1.658-1.246-3.161 0-1.503.785-2.242 1.064-2.548.279-.306.608-.383.811-.383.203 0 .406.002.584.01.19.009.444-.072.695.53.254.606.863 2.106.94 2.259.076.153.127.332.025.535-.101.204-.152.332-.304.51-.153.179-.321.399-.459.535-.152.153-.31.321-.133.626.177.306.787 1.3 1.688 2.103 1.157 1.031 2.133 1.35 2.438 1.503.305.153.483.127.66-.076.178-.204.762-.892.965-1.198.203-.306.406-.255.685-.153.28.102 1.776.837 2.08 1.002.304.165.508.244.584.372.076.128.076.741-.168 1.426z"/></svg>
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
        <p>© 2026 VibeRoot Essentials Inc. — Address / Adresse : VibeRoot Essentials T3P2H4 Calgary, Alberta Canada. All rights reserved.</p>
        <div className={styles.footerBottomLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
}
