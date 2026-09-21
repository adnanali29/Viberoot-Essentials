"use client";
import { useState } from "react";
import Image from "next/image";
import { BLOGS } from "@/lib/products";
import styles from "./blogs.module.css";

export default function BlogsPage() {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All Articles");

  const categories = ["All Articles", "Nutrition", "Superfood Science", "Ingredient Deep Dive", "Lifestyle"];

  const filteredBlogs = activeCategory === "All Articles" 
    ? BLOGS 
    : BLOGS.filter((b) => b.category === activeCategory);

  const featuredBlog = BLOGS[0];

  return (
    <div className={styles.page}>
      {/* 1. Hero Banner (Same 340px height as all inner pages) */}
      

      {/* 2. Saptamveda Category Filter Bar */}
      

      <div className={styles.filterContainer}>
        <div className={styles.filterInner}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={styles.filterTab + " " + (activeCategory === cat ? styles.filterTabActive : "")}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Blog Container */}
      <div className={styles.mainContainer}>
        {/* 3. Featured Hero Article Card (Saptamveda Top Banner Style) */}
        {activeCategory === "All Articles" && featuredBlog && (
          <section className={styles.featuredSection}>
            <div className={styles.featuredCard} onClick={() => setSelected(featuredBlog)}>
              <div className={styles.featuredImageWrap}>
                <Image 
                  src={featuredBlog.image || "/16.webp"} 
                  alt={featuredBlog.title || "Featured Wellness Article"} 
                  fill 
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.featuredImg}
                />
                <span className={styles.featuredBadge}>{featuredBlog.category}</span>
              </div>
              <div className={styles.featuredContent}>
                <div className={styles.articleMeta}>
                  <span className={styles.authorBadge}>🌿 VibeRoot Wellness Team</span>
                  <span className={styles.metaDot}>•</span>
                  <span className={styles.metaTime}>{featuredBlog.readTime}</span>
                  <span className={styles.metaDot}>•</span>
                  <span className={styles.metaDate}>{featuredBlog.date}</span>
                </div>
                <h2 className={styles.featuredTitle}>{featuredBlog.title}</h2>
                <p className={styles.featuredExcerpt}>{featuredBlog.excerpt}</p>
                <div className={styles.featuredFooter}>
                  <span className={styles.readBtn}>Read Featured Story &rarr;</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 4. Saptamveda 2-Column Grid + Sidebar Layout */}
        <div className={styles.layoutGrid}>
          {/* Main Grid Articles */}
          <div className={styles.articlesCol}>
            <div className={styles.grid}>
              {filteredBlogs.map((blog) => (
                <article key={blog.id} className={styles.card} onClick={() => setSelected(blog)}>
                  <div className={styles.cardImageWrap}>
                    <Image 
                      src={blog.image || "/10.webp"} 
                      alt={blog.title || "VibeRoot Organic Article"} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.cardImg}
                    />
                    <span className={styles.categoryBadge}>{blog.category}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.articleMeta}>
                      <span className={styles.metaTime}>{blog.readTime}</span>
                      <span className={styles.metaDot}>•</span>
                      <span className={styles.metaDate}>{blog.date}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{blog.title}</h3>
                    <p className={styles.cardExcerpt}>{blog.excerpt}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.authorName}>By VibeRoot Team</span>
                      <span className={styles.readMoreBtn}>Read Article &rarr;</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Sidebar Widgets */}
          <aside className={styles.sidebar}>
            {/* Widget 1: Popular Articles */}
            <div className={styles.widgetBox}>
              <h4 className={styles.widgetTitle}>Popular Articles 🔥</h4>
              <div className={styles.popularList}>
                {BLOGS.slice(0, 3).map((item) => (
                  <div key={item.id} className={styles.popularItem} onClick={() => setSelected(item)}>
                    <div className={styles.popularThumb}>
                      <Image 
                        src={item.image || "/16.webp"} 
                        alt={item.title || "Popular Article"} 
                        fill 
                        sizes="80px"
                        className={styles.popularImg}
                      />
                    </div>
                    <div className={styles.popularText}>
                      <span className={styles.popularCategory}>{item.category}</span>
                      <h5 className={styles.popularItemTitle}>{item.title}</h5>
                      <span className={styles.popularDate}>{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 2: Featured Product Promotion */}
            <div className={styles.productPromoWidget}>
              <span className={styles.promoPill}>🌿 100% ORGANIC SUPERFOODS</span>
              <h3>Nourish Your Body Daily</h3>
              <p>Cold-pressed, triple lab-tested powders delivered straight across Canada.</p>
              <a href="/shop" className={styles.promoShopBtn}>Shop Best Sellers &rarr;</a>
            </div>

            {/* Widget 3: Newsletter Box */}
            <div className={styles.newsletterWidget}>
              <h4>Get Weekly Wellness Tips ✉️</h4>
              <p>Subscribe for organic recipes, health guides, and exclusive Canadian offers.</p>
              <form onSubmit={(e) => e.preventDefault()} className={styles.sidebarForm}>
                <input type="email" placeholder="your@email.ca" required className={styles.sidebarInput} />
                <button type="submit" className={styles.sidebarSubmitBtn}>Subscribe</button>
              </form>
            </div>
          </aside>
        </div>
      </div>

      {/* 5. Article Details Reader Modal */}
      {selected && (
        <div className={styles.modalOverlay} onClick={() => setSelected(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelected(null)}>✕</button>
            <div className={styles.modalHeader}>
              <span className={styles.modalCategory}>{selected.category}</span>
              <h1 className={styles.modalTitle}>{selected.title}</h1>
              <div className={styles.modalMetaRow}>
                <span>🌿 By VibeRoot Wellness Team</span>
                <span>•</span>
                <span>{selected.date}</span>
                <span>•</span>
                <span>⏱️ {selected.readTime}</span>
              </div>
            </div>
            
            <div className={styles.modalImageHero}>
              <Image 
                src={selected.image || "/16.webp"} 
                alt={selected.title || "VibeRoot Blog Article"} 
                fill 
                sizes="(max-width: 768px) 100vw, 700px"
                className={styles.modalHeroImg} 
              />
            </div>

            <div className={styles.modalBody}>
              <p className={styles.modalLead}>{selected.excerpt}</p>
              <div className={styles.modalContent}>{selected.content}</div>
              
              <div className={styles.takeawayBox}>
                <h5>💡 Key Wellness Takeaway</h5>
                <p>Incorporating daily organic powders supports natural cell hydration, digestion, and long-term vitality without synthetic chemicals.</p>
              </div>

              <div className={styles.modalCtaBox}>
                <div>
                  <h4>Ready to Experience the Benefits?</h4>
                  <p>Explore our 5 certified organic superfood powders.</p>
                </div>
                <a href="/shop" className={styles.modalShopLink}>🛒 Shop Organic Powders &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
