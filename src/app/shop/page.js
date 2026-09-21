"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { PRODUCTS, getDarkenedColor } from "@/lib/products";
import styles from "./shop.module.css";

function ProductJar({ color, labelName }) {
  const shortName = labelName.split(" ")[0].toUpperCase();
  return (
    <svg width="100%" height="100%" viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lidGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8d6842" />
          <stop offset="30%" stopColor="#bfa37e" />
          <stop offset="70%" stopColor="#ab885f" />
          <stop offset="100%" stopColor="#73512e" />
        </linearGradient>
        <linearGradient id="glassGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(240, 240, 240, 0.4)" />
          <stop offset="25%" stopColor="rgba(255, 255, 255, 0.7)" />
          <stop offset="75%" stopColor="rgba(230, 230, 230, 0.5)" />
          <stop offset="100%" stopColor="rgba(200, 200, 200, 0.4)" />
        </linearGradient>
        <linearGradient id={`pGrad-${color.replace("#", "")}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={getDarkenedColor(color)} />
        </linearGradient>
        <filter id="shadow2" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="rgba(0,0,0,0.06)" />
        </filter>
      </defs>
      <rect x="25" y="35" width="110" height="150" rx="16" fill="rgba(0,0,0,0.02)" filter="url(#shadow2)" />
      <path d="M 28 85 Q 80 80 132 85 L 132 170 Q 132 181 120 181 L 40 181 Q 28 181 28 170 Z" fill={`url(#pGrad-${color.replace("#", "")})`} />
      <rect x="26" y="36" width="108" height="146" rx="16" fill="url(#glassGrad2)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
      <rect x="36" y="24" width="88" height="12" rx="2" fill="rgba(255,255,255,0.5)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      <rect x="33" y="10" width="94" height="15" rx="3" fill="url(#lidGrad2)" />
      <rect x="38" y="70" width="84" height="85" rx="4" fill="#ffffff" />
      <text x="80" y="93" fontSize="8" fontWeight="700" fontFamily="Georgia,serif" textAnchor="middle" fill="#1c1c1a">VibeRoot</text>
      <text x="80" y="100" fontSize="4.5" fontWeight="600" fontFamily="sans-serif" textAnchor="middle" fill="#1c1c1a" opacity="0.6">ESSENTIALS</text>
      <text x="80" y="113" fontSize="4.5" fontWeight="700" fontFamily="sans-serif" textAnchor="middle" fill={color}>ORGANIC</text>
      <text x="80" y="124" fontSize="8.5" fontWeight="800" fontFamily="Georgia,serif" textAnchor="middle" fill="#1c1c1a">{shortName}</text>
      <text x="80" y="132" fontSize="5.5" fontWeight="600" fontFamily="sans-serif" textAnchor="middle" fill="#1c1c1a" opacity="0.7">POWDER</text>
      <text x="80" y="143" fontSize="4" fontWeight="600" fontFamily="sans-serif" textAnchor="middle" fill="#1c1c1a" opacity="0.4">NET WT. 250G</text>
    </svg>
  );
}


function ProductCardImageSlider({ images, alt, onClick }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className={styles.cardSliderContainer} onClick={onClick}>
      <div 
        className={styles.cardSliderTrack} 
        style={{ transform: `translateX(-${currentIdx * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className={styles.cardSlideItem}>
            <Image 
              src={img} 
              alt={`${alt} image ${i + 1}`} 
              fill 
              sizes="(max-width: 768px) 100vw, 25vw"
              className={styles.cardSlideImg} 
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className={styles.cardSliderDots} onClick={(e) => e.stopPropagation()}>
          {images.map((_, i) => (
            <span
              key={i}
              className={`${styles.cardDot} ${currentIdx === i ? styles.cardDotActive : ""}`}
              onClick={() => setCurrentIdx(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState("");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    showToast(`✓ ${product.displayName} added to cart`);
  };

  return (
    <div className={styles.page}>
      {toast && <div className={styles.toast}>{toast}</div>}

      {/* Hero Banner */}
      <section className={styles.heroBannerImageWrap}>
        <Image 
          src="/hero_shop_v3.png" unoptimized 
          alt="VibeRoot Organic Powders Shop Banner" 
          fill 
          priority 
          className={styles.heroImgBanner}
        />
      </section>

      {/* Products Grid */}
      <section className={styles.productsSection}>
        <div className={styles.productsHeader}>
          <h2 className={styles.sectionTitle}>Our Organic Powders</h2>
          <p className={styles.sectionSubtitle}>5 premium superfoods — all 250g, no compromises.</p>
        </div>

        <div className={styles.grid}>
          {PRODUCTS.map((product) => (
            <div key={product.id} className={styles.card} onClick={() => setSelected(product)}>
              <div className={styles.cardImage}>
                <ProductCardImageSlider 
                  images={product.images} 
                  alt={product.displayName} 
                  onClick={() => setSelected(product)} 
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{product.displayName}</h3>
                <div className={styles.cardTags}>
                  <span className={styles.tag}>Vegan</span>
                  <span className={styles.tag}>Gluten Free</span>
                  <span className={styles.tag}>Organic</span>
                </div>
                <div className={styles.cardRating}>
                  <span className={styles.stars}>★★★★★</span>
                  <span className={styles.reviewCount}>({product.reviews})</span>
                  <span className={styles.weight}>250g</span>
                </div>
                <p className={styles.cardTagline}>{product.tagline}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.priceBlock}>
                    <span className={styles.price}>C$ {product.prices["250g"].toFixed(2)}</span>
                    <span className={styles.originalPrice}>C$ {product.originalPrices["250g"].toFixed(2)}</span>
                  </div>
                  <a 
                    href={product.amazonUrl || "https://www.amazon.ca"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.addBtn} 
                    onClick={(e) => e.stopPropagation()}
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selected && (
        <div className={styles.modalOverlay} onClick={() => setSelected(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelected(null)}>✕</button>
            <div className={styles.modalGrid}>
              <div className={styles.modalHalfHalfContainer}>
                <div className={styles.modalHalfItem}>
                  <Image 
                    src={selected.images ? selected.images[0] : "/10.webp"} 
                    alt={`${selected.name} View 1`} 
                    fill 
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className={styles.modalHalfImg} 
                  />
                </div>
                <div className={styles.modalHalfItem}>
                  <Image 
                    src={selected.images ? selected.images[1] : "/11.webp"} 
                    alt={`${selected.name} View 2`} 
                    fill 
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className={styles.modalHalfImg} 
                  />
                </div>
              </div>
              <div className={styles.modalBody}>
                <h2 className={styles.modalTitle}>{selected.name}</h2>
                <div className={styles.cardRating}>
                  <span className={styles.stars}>★★★★★</span>
                  <span className={styles.reviewCount}>({selected.reviews} reviews)</span>
                </div>
                <p className={styles.modalDesc}>{selected.description}</p>
                <div className={styles.modalBenefits}>
                  {selected.benefits.map((b, i) => (
                    <span key={i} className={styles.benefit}>✓ {b}</span>
                  ))}
                </div>
                <div className={styles.modalNutrition}>
                  {Object.entries(selected.nutrition).map(([k, v]) => (
                    <div key={k} className={styles.nutRow}>
                      <span className={styles.nutKey}>{k}</span>
                      <span className={styles.nutVal}>{v}</span>
                    </div>
                  ))}
                </div>
                <p className={styles.modalIngredients}><strong>Ingredients:</strong> {selected.ingredients}</p>
                <div className={styles.modalFooter}>
                  <div className={styles.priceBlock}>
                    <span className={styles.price} style={{ fontSize: "1.4rem" }}>C$ {selected.prices["250g"].toFixed(2)}</span>
                    <span className={styles.originalPrice}>C$ {selected.originalPrices["250g"].toFixed(2)}</span>
                  </div>
                  <a 
                    href={selected.amazonUrl || "https://www.amazon.ca"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.addBtn} 
                    style={{ padding: "12px 28px", fontSize: "0.95rem", textDecoration: "none", textAlign: "center", display: "inline-block" }}
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Trust Bar */}
      <section className={styles.trustBar}>
        {["🌿 USDA Certified Organic", "🧪 Triple Lab Tested", "🚚 Free Shipping C$45+", "🇨🇦 Packaged in Calgary, AB", "↩️ 30-Day Returns"].map((item) => (
          <div key={item} className={styles.trustItem}>{item}</div>
        ))}
      </section>
    </div>
  );
}
