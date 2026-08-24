import styles from "./about.module.css";

export const metadata = {
  title: "About VibeRoot Essentials | Our Story",
  description: "Learn about VibeRoot Essentials — Canada's premium organic superfood powder brand, grown with purpose and packed with purity in Toronto, ON.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <span className={styles.heroOverline}>🌱 OUR STORY</span>
          <h1 className={styles.heroTitle}>About VibeRoot Essentials</h1>
          <p className={styles.heroSubtitle}>Born in Toronto. Rooted in nature. Built for the Canadian wellness generation.</p>
        </div>
      </section>

      {/* Video Bar */}
      <section className={styles.videoBar}>
        <video
          className={styles.video}
          src="https://cdn.mixkit.co/videos/preview/mixkit-green-plant-growing-in-a-field-4-small.mp4"
          autoPlay muted loop playsInline
        />
        <div className={styles.videoOverlay}>
          <p className={styles.videoQuote}>"From the farm to your kitchen — every scoop carries our promise."</p>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission}>
        <div className={styles.missionInner}>
          <div className={styles.missionText}>
            <span className={styles.overline}>OUR MISSION</span>
            <h2 className={styles.missionTitle}>We Believe Food is Medicine</h2>
            <p className={styles.missionBody}>
              VibeRoot Essentials was founded with a single conviction: that every Canadian deserves access to pure, potent, and affordable organic superfoods — without the greenwashing, without the fillers, and without compromise.
            </p>
            <p className={styles.missionBody}>
              We partner directly with certified organic farms to source our five flagship powders at peak harvest, then cold-press and dehydrate them below 40°C to lock in enzymes, vitamins, and bioactive compounds that heat-processing destroys.
            </p>
            <p className={styles.missionBody}>
              Every single batch is third-party lab tested for heavy metals, pesticide residue, and microbial safety — and those results are available to you, our customers, upon request. That's not just transparency. That's VibeRoot.
            </p>
          </div>
          <div className={styles.missionStats}>
            {[
              { num: "5", label: "Organic Powders" },
              { num: "1,500+", label: "Happy Customers" },
              { num: "100%", label: "Organic Certified" },
              { num: "0", label: "Fillers or Additives" },
            ].map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statNum}>{stat.num}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className={styles.valuesInner}>
          <h2 className={styles.valuesTitle}>The VibeRoot Promise</h2>
          <div className={styles.valuesGrid}>
            {[
              { icon: "🌿", title: "100% Organic Certified", desc: "All products carry full Canadian Organic Regime (COR) certification, traceable to the farm." },
              { icon: "🧪", title: "Triple Lab Tested", desc: "Every batch undergoes independent testing for heavy metals, pesticides, and microbial safety." },
              { icon: "❄️", title: "Cold-Pressed Preservation", desc: "Below 40°C processing preserves enzymes, vitamins, and bioactive compounds that heat destroys." },
              { icon: "🇨🇦", title: "Canadian Owned & Operated", desc: "Headquartered and packaged in Toronto, Ontario. Proud to serve the Canadian wellness community." },
              { icon: "♻️", title: "Eco-Conscious Packaging", desc: "Biodegradable, compostable pouches. We're committed to reducing our ecological footprint." },
              { icon: "💬", title: "Real Human Support", desc: "A real Canadian wellness expert, not a bot, answers your questions via WhatsApp and email." },
            ].map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Ready to Start Your VibeRoot Journey?</h2>
        <p className={styles.ctaSubtitle}>Join over 1,500 Canadians who have made organic superfoods a daily ritual.</p>
        <a href="/shop" className={styles.ctaBtn}>Shop All Products →</a>
      </section>
    </div>
  );
}
