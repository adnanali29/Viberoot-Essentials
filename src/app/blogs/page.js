"use client";
import { useState } from "react";
import { BLOGS } from "@/lib/products";
import styles from "./blogs.module.css";

export default function BlogsPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <span className={styles.heroOverline}>✍️ ORGANIC WELLNESS BLOG</span>
          <h1 className={styles.heroTitle}>The VibeRoot Journal</h1>
          <p className={styles.heroSubtitle}>Science-backed articles on organic nutrition, Canadian wellness culture, and superfood living.</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className={styles.blogsSection}>
        <div className={styles.grid}>
          {BLOGS.map((blog) => (
            <article key={blog.id} className={styles.card} onClick={() => setSelected(blog)}>
              <div className={styles.cardImagePlaceholder}>
                <div className={styles.categoryBadge}>{blog.category}</div>
                <div className={styles.blogEmoji}>
                  {blog.id === 1 ? "🫀" : blog.id === 2 ? "🌿" : blog.id === 3 ? "🫚" : "🍃"}
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.category}>{blog.category}</span>
                  <span className={styles.dot}>•</span>
                  <span className={styles.readTime}>{blog.readTime}</span>
                </div>
                <h2 className={styles.cardTitle}>{blog.title}</h2>
                <p className={styles.cardExcerpt}>{blog.excerpt}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.date}>{blog.date}</span>
                  <span className={styles.readMore}>Read Article →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Blog Article Modal */}
      {selected && (
        <div className={styles.modalOverlay} onClick={() => setSelected(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelected(null)}>✕</button>
            <div className={styles.modalHero}>
              <span className={styles.modalCategory}>{selected.category}</span>
              <h1 className={styles.modalTitle}>{selected.title}</h1>
              <div className={styles.modalMeta}>
                <span>{selected.date}</span>
                <span>•</span>
                <span>{selected.readTime}</span>
                <span>•</span>
                <span>By VibeRoot Wellness Team</span>
              </div>
            </div>
            <div className={styles.modalBody}>
              <p className={styles.modalLead}>{selected.excerpt}</p>
              <p className={styles.modalContent}>{selected.content}</p>
              <div className={styles.modalCta}>
                <p>Ready to experience the benefits for yourself?</p>
                <a href="/shop" className={styles.shopLink}>Shop Organic Powders →</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterInner}>
          <h2 className={styles.newsletterTitle}>Stay in the Loop 🌿</h2>
          <p className={styles.newsletterSubtitle}>Get weekly wellness tips, new recipes, and exclusive Canadian subscriber offers.</p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" className={styles.newsletterInput} placeholder="your@email.ca" />
            <button type="submit" className={styles.newsletterBtn}>Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
