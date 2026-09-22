"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { PRODUCTS } from "@/lib/products";
import styles from "./recipes.module.css";

const RECIPES = PRODUCTS.flatMap((p) => [
  { ...p.recipe, product: p, id: `${p.id}-1` },
  { ...p.recipe2, product: p, id: `${p.id}-2` },
]);

export default function RecipesPage() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const productId = params.get("product");
      if (productId) {
        const match = RECIPES.find((r) => r.product.id === productId);
        if (match) setSelected(match);
      }
    }
  }, []);

  const categories = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.healthGoals[0])))];
  const filtered = filter === "All" ? RECIPES : RECIPES.filter((r) => r.product.healthGoals.includes(filter));

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.heroBannerImageWrap}>
        <Image 
          src="/hero_recipes_hd.webp" unoptimized 
          alt="VibeRoot Organic Recipes Banner" 
          fill 
          priority 
          className={styles.heroImgBanner}
        />
      </section>

      {/* Filter Bar */}
      <div className={styles.filterBar}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${filter === cat ? styles.filterBtnActive : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Recipe Grid */}
      <section className={styles.recipesSection}>
        <div className={styles.grid}>
          {filtered.map((recipe) => (
            <div
              key={recipe.id}
              className={styles.card}
              onClick={() => setSelected(recipe)}
              style={{ "--card-color": recipe.product.color }}
            >
              <div className={styles.cardImage}>
                {recipe.image ? (
                  <Image 
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.cardImgTag}
                  />
                ) : (
                  <div className={styles.recipeEmoji}>
                    {recipe.product.id === "raspberry" ? "🍓" :
                     recipe.product.id === "pineapple" ? "🍍" :
                     recipe.product.id === "beetroot" ? "🫀" :
                     recipe.product.id === "ginger" ? "🫚" : "🌿"}
                  </div>
                )}
                <div className={styles.timeBadge}>⏱ {recipe.time}</div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.productPill} style={{ color: recipe.product.color, background: recipe.product.lightColor }}>
                  {recipe.product.displayName}
                </div>
                <h3 className={styles.cardTitle}>{recipe.title}</h3>
                <div className={styles.cardMeta}>
                  <span>⏱ {recipe.time}</span>
                  <span>📊 {recipe.difficulty}</span>
                  <span>🧪 {recipe.ingredients.length} ingredients</span>
                </div>
                <button className={styles.viewBtn}>View Recipe →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recipe Modal */}
      {selected && (
        <div className={styles.modalOverlay} onClick={() => setSelected(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelected(null)}>✕</button>
            <div className={styles.modalHeader} style={{ background: `linear-gradient(135deg, ${selected.product.lightColor}, #f4f9f4)` }}>
              <div className={styles.modalEmoji}>
                {selected.product.id === "raspberry" ? "🍓" :
                 selected.product.id === "pineapple" ? "🍍" :
                 selected.product.id === "beetroot" ? "🫀" :
                 selected.product.id === "ginger" ? "🫚" : "🌿"}
              </div>
              <div className={styles.modalHeaderText}>
                <div className={styles.productPill} style={{ color: selected.product.color, background: "rgba(255,255,255,0.6)" }}>
                  {selected.product.displayName}
                </div>
                <h2 className={styles.modalTitle}>{selected.title}</h2>
                <div className={styles.modalMeta}>
                  <span>⏱ {selected.time}</span>
                  <span>📊 {selected.difficulty}</span>
                </div>
              </div>
            </div>
            <div className={styles.modalBody}>
              {selected.image && (
                <div className={styles.modalImageWrap}>
                  <Image 
                    src={selected.image} 
                    alt={selected.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 600px"
                    className={styles.modalImgTag} 
                  />
                </div>
              )}
              <div className={styles.modalSection}>
                <h3 className={styles.modalSectionTitle}>Ingredients</h3>
                <ul className={styles.ingredientsList}>
                  {selected.ingredients.map((ing, i) => (
                    <li key={i} className={styles.ingredientItem}>
                      <span className={styles.ingredientDot} style={{ background: selected.product.color }} />
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.modalSection}>
                <h3 className={styles.modalSectionTitle}>Method</h3>
                <p className={styles.stepsText}>{selected.steps}</p>
              </div>
              <div className={styles.modalTip}>
                <strong>💡 Viberoot Tip:</strong> {selected.product.pairing}
              </div>

              {/* Buy Now Product CTA */}
              <div className={styles.modalBuyCtaRow}>
                <div className={styles.modalBuyProductInfo}>
                  <span className={styles.modalBuyPowderTitle}>Made with {selected.product.displayName}</span>
                  <span className={styles.modalBuyPrice}>C$ {selected.product.prices["250g"].toFixed(2)}</span>
                </div>
                <a
                  href={selected.product.amazonUrl || "https://www.amazon.ca"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalBuyNowBtn}
                  style={{ background: selected.product.color }}
                >
                  🛒 Buy {selected.product.displayName.split(" ")[0]} Powder Now &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
