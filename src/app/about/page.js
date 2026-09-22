import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";

export const metadata = {
  title: "About VibeRoot Essentials | Our Story & Purity Commitment",
  description: "Learn about VibeRoot Essentials — Canada's premier organic superfood powder brand, cold-pressed and packaged with absolute purity in Calgary, Alberta.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroBannerImageWrap}>
        <Image 
          src="/hero_about_hd.webp" unoptimized 
          alt="About VibeRoot Essentials Banner" 
          fill 
          priority 
          className={styles.heroImgBanner}
        />
      </section>

      {/* Brand Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyTextCol}>
              <span className={styles.sectionOverline}>OUR HERITAGE</span>
              <h2 className={styles.sectionHeading}>Why We Started VibeRoot Essentials</h2>
              <p className={styles.paragraph}>
                VibeRoot Essentials was born in Calgary, Alberta with a clear, uncompromising vision: to bring honest, unadulterated plant nutrition back into daily Canadian life.
              </p>
              <p className={styles.paragraph}>
                In an industry filled with synthetic additives, artificial sweeteners, and mystery blend fillers, we chose total transparency. Every single scoop of our powders contains 100% pure, freeze-dried or cold-pressed organic botanicals — harvested at peak potency to preserve living enzymes and vital micro-nutrients.
              </p>

              <div className={styles.highlightQuoteBox}>
                <p>"We believe true health starts at the root. No shortcuts, no compromises — just raw plant power from nature to your glass."</p>
              </div>
            </div>

            <div className={styles.storyVisualCol}>
              <div className={styles.visualCardMain}>
                <div className={styles.visualBadge}>🇨🇦 Calgary, AB</div>
                <div className={styles.visualCardContent}>
                  <h3>Purity First</h3>
                  <p>Packaged locally in Calgary under strict Canadian Organic Regime standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.headerCentered}>
            <span className={styles.sectionOverline}>GUIDING PRINCIPLES</span>
            <h2 className={styles.sectionHeading}>Our Mission & Vision</h2>
            <p className={styles.headerSubtext}>
              Pioneering Canada's most trusted organic superfood movement with purpose, transparency, and environmental care.
            </p>
          </div>

          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.cardHeaderRow}>
                <div className={styles.iconCircle}>🎯</div>
                <h3>Our Mission</h3>
              </div>
              <p>
                To empower every Canadian with pure, potent, cold-pressed organic superfoods — uncompromised quality, zero synthetic additives or fillers, transparently lab-tested, and harvested at peak potency to make daily organic wellness effortless and accessible.
              </p>
            </div>

            <div className={styles.missionCard}>
              <div className={styles.cardHeaderRow}>
                <div className={styles.iconCircle}>👁️</div>
                <h3>Our Vision</h3>
              </div>
              <p>
                To build Canada's most trusted organic superfood movement — pioneering sustainable, farm-to-table nutrition that inspires healthier communities across North America while protecting our planet with eco-conscious practices.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Certified Organic</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Superfood Concentrates</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10,000+</span>
              <span className={styles.statLabel}>Canadians Served</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>0</span>
              <span className={styles.statLabel}>Synthetic Additives</span>
            </div>
          </div>
        </div>
      </section>

      {/* The VibeRoot Promise Pillars */}
      <section className={styles.pillarsSection}>
        <div className={styles.container}>
          <div className={styles.headerCentered}>
            <span className={styles.sectionOverline}>OUR STANDARDS</span>
            <h2 className={styles.sectionHeading}>The VibeRoot Promise</h2>
            <p className={styles.headerSubtext}>What makes our botanical powders exceptional</p>
          </div>

          <div className={styles.pillarsGrid}>
            {[
              { icon: "🌿", title: "100% Organic Certified", desc: "All products carry full Canadian Organic Regime (COR) and USDA Organic certification, traceable directly to sustainable organic farms." },
              { icon: "🧪", title: "Triple Lab Tested", desc: "Every batch undergoes independent third-party testing for heavy metals, pesticides, microbials, and active bio-compound concentration." },
              { icon: "❄️", title: "Cold-Pressed Dehydration", desc: "Processed below 40°C to safeguard delicate digestive enzymes, vitamins, and antioxidants that heat processing destroys." },
              { icon: "🇨🇦", title: "Canadian Owned & Operated", desc: "Headquartered and packaged in Calgary, AB (Address: VibeRoot Essentials T3P2H4 Calgary, Alberta Canada). Proudly serving wellness shoppers nationwide." },
              { icon: "♻️", title: "Eco-Conscious Packaging", desc: "Packaged in light-shielding, resealable pouches designed to preserve freshness while minimizing our environmental impact." },
              { icon: "💬", title: "Direct Customer Care", desc: "Have questions about dosage or recipes? Reach our wellness team directly at +1 (587) 832-0198 or hello@viberootessentials.com." }
            ].map((pillar, i) => (
              <div key={i} className={styles.pillarCard}>
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Ready to Elevate Your Daily Wellness Ritual?</h2>
            <p>Experience the pure difference of cold-pressed organic powders delivered straight to your door.</p>
            <Link href="/shop" className={styles.ctaBtn}>
              Explore Organic Powders &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
