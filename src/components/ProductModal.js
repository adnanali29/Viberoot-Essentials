"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ProductModal.module.css";

export default function ProductModal({ product, onClose }) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const images = product.images && product.images.length > 0
    ? product.images
    : ["/10.webp", "/11.webp"];

  const currentPrice = product.prices && product.prices["250g"] 
    ? product.prices["250g"] 
    : 20.99;
  
  const origPrice = product.originalPrices && product.originalPrices["250g"] 
    ? product.originalPrices["250g"] 
    : 24.99;

  const discountPercent = Math.round(((origPrice - currentPrice) / origPrice) * 100);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div 
        className={styles.modalCard} 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        {/* Floating Close Button */}
        <button 
          className={styles.closeBtn} 
          onClick={onClose} 
          aria-label="Close product modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.grid}>
          {/* Left Column: Image Showcase & Thumbnails */}
          <div className={styles.galleryCol}>
            {/* Main Featured Image Container */}
            <div className={styles.mainImageContainer}>
              <Image
                src={images[activeImgIdx] || images[0]}
                alt={`${product.displayName || product.name} view ${activeImgIdx + 1}`}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 360px"
                className={styles.mainImage}
              />
              <span className={styles.pouchBadge}>250g Pouch • 50 Servings</span>
            </div>

            {/* Clean Square Thumbnail Strip */}
            {images.length > 1 && (
              <div className={styles.thumbStrip}>
                {images.slice(0, 4).map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`${styles.thumbItem} ${activeImgIdx === idx ? styles.activeThumb : ""}`}
                    onClick={() => setActiveImgIdx(idx)}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <Image
                      src={img}
                      alt={`Product view ${idx + 1}`}
                      fill
                      sizes="64px"
                      className={styles.thumbImg}
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Quality & Trust Badges */}
            <div className={styles.guaranteeStrip}>
              <div className={styles.guaranteeItem}>
                <span>🌿</span> USDA Organic
              </div>
              <div className={styles.guaranteeItem}>
                <span>🧪</span> Triple Tested
              </div>
              <div className={styles.guaranteeItem}>
                <span>🇨🇦</span> Canada D2C
              </div>
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className={styles.infoCol}>
            {/* Top Badges */}
            <div className={styles.badgeRow}>
              <span className={styles.categoryBadge}>🌿 100% ORGANIC SUPERFOOD</span>
              <span className={styles.stockBadge}>✓ In Stock (Amazon CA)</span>
            </div>

            {/* Title */}
            <h2 id="product-modal-title" className={styles.title}>
              {product.name || product.displayName}
            </h2>

            {/* Ratings Row */}
            <div className={styles.ratingRow}>
              <span className={styles.stars}>★★★★★</span>
              <span className={styles.ratingScore}>{product.rating || 4.8}</span>
              <span className={styles.reviewCount}>({product.reviews || 260} verified reviews)</span>
            </div>

            {/* Price Row */}
            <div className={styles.priceRow}>
              <div className={styles.priceWrap}>
                <span className={styles.currentPrice}>
                  C$ {typeof currentPrice === "number" ? currentPrice.toFixed(2) : currentPrice}
                </span>
                {origPrice && (
                  <span className={styles.origPrice}>
                    C$ {typeof origPrice === "number" ? origPrice.toFixed(2) : origPrice}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className={styles.saveBadge}>Save {discountPercent}%</span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className={styles.description}>
              {product.description || product.tagline}
            </p>

            {/* Key Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div className={styles.sectionBlock}>
                <h3 className={styles.sectionHeading}>General Benefits</h3>
                <div className={styles.benefitsGrid}>
                  {product.benefits.map((benefit, i) => (
                    <div key={i} className={styles.benefitItem}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Nutrition Highlights */}
            {product.nutrition && (
              <div className={styles.sectionBlock}>
                <h3 className={styles.sectionHeading}>Purity & Quality Standards</h3>
                <div className={styles.nutritionGrid}>
                  {Object.entries(product.nutrition).map(([key, val]) => (
                    <div key={key} className={styles.nutItem}>
                      <span className={styles.nutKey}>{key}</span>
                      <strong className={styles.nutVal}>{val}</strong>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Ingredients Callout */}
            {product.ingredients && (
              <div className={styles.ingredientsBox}>
                <strong>🍃 Ingredients: </strong>
                <span>{product.ingredients}</span>
              </div>
            )}

            {/* Action CTA Button */}
            <div className={styles.actionBlock}>
              <a
                href={product.amazonUrl || "https://www.amazon.ca"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buyBtn}
              >
                <span className={styles.buyBtnText}>Buy on Amazon CA</span>
                <span className={styles.buyBtnPrice}>
                  C$ {typeof currentPrice === "number" ? currentPrice.toFixed(2) : currentPrice}
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.buyBtnArrow}>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <p className={styles.primeNote}>⚡ Fast Prime Delivery across Canada • 30-Day Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
