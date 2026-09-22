"use client";

import { useState, useEffect, useRef } from "react";
import { PRODUCTS } from "@/lib/products";
import Image from "next/image";
import styles from "./page.module.css";

const PROMISE_VIDEOS = [
  { src: "/videos/video2.mp4", title: "Organic Berries & Fruit Sourcing" },
  { src: "/videos/video1.mp4", title: "Cold-Press Low-Temp Processing" },
  { src: "/videos/video5.mp4", title: "Third-Party Purity & Heavy Metal Testing" },
  { src: "/videos/video4.mp4", title: "Eco-Friendly Small Batching in Canada" },
  { src: "/videos/video3.mp4", title: "Pure Superfood Elixirs & Smoothies" }
];


function RecipeSectionSlider({ onSelectRecipe }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const onMouseLeave = () => { isDown = false; };
    const onMouseUp = () => { isDown = false; };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseleave", onMouseLeave);
    slider.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mousemove", onMouseMove);

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseleave", onMouseLeave);
      slider.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const slide = (dir) => {
    if (sliderRef.current) {
      const scrollAmt = 320;
      sliderRef.current.scrollBy({ left: dir === "next" ? scrollAmt : -scrollAmt, behavior: "smooth" });
    }
  };

  return (
    <section id="recipes" className={styles.recipesSectionFull}>
      {/* Top Banner Header matching Image 4 & Image 5 */}
      <div className={styles.recipesHeaderBanner}>
        <span className={styles.recipesBannerOverline}>🌱 ORGANIC RECIPES</span>
        <h2 className={styles.recipesBannerTitle}>Nourish Your Body One Recipe at a Time</h2>
        <p className={styles.recipesBannerDisclaimer}>
          NOTE: All dish images are for illustration purposes only. Final dish appearance may vary from person to person.
        </p>
      </div>

      {/* Slider Viewport with Manual Touch/Mouse Drag */}
      <div className={styles.recipesSliderContainer}>
        <button className={styles.recipeNavBtnPrev} onClick={() => slide("prev")} aria-label="Previous recipes">‹</button>
        <button className={styles.recipeNavBtnNext} onClick={() => slide("next")} aria-label="Next recipes">›</button>
        
        <div className={styles.recipesSliderTrack} ref={sliderRef}>
          {ALL_RECIPES.map((item) => (
            <div 
              key={item.id} 
              className={styles.recipeCardItem}
              onClick={() => onSelectRecipe({ recipe: item, product: item.product })}
            >
              <div className={styles.recipeCardImgWrap}>
                <Image 
                  src={item.image || "/recipe_raspberry_rose.webp"} 
                  alt={item.title || item.product?.displayName || "VibeRoot Organic Recipe Image"} 
                  fill 
                  sizes="(max-width: 768px) 80vw, 280px"
                  className={styles.recipeCardImgTag} 
                />

              </div>
              <div className={styles.recipeCardBody}>
                <div className={styles.recipeMetaRow}>
                  <span className={styles.recipeDrinkPill}>RECIPE</span>
                  <span className={styles.recipeTimePill}>⏱️ {item.time}</span>
                </div>
                <h3 className={styles.recipeItemTitle}>{item.title}</h3>
                <div className={styles.recipeCardFooterRow}>
                  <span className={styles.recipeDiff}>Easy</span>
                  <span className={styles.recipeArrowCircle} style={{ background: item.product.lightColor, color: item.product.color }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.viewAllRecipesFooter}>
        <a href="/recipes" className={styles.viewAllRecipesLink}>VIEW ALL RECIPES &rarr;</a>
      </div>
    </section>
  );
}

function PromiseVideoCard() {
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const videoRef = useRef(null);
  const touchStartX = useRef(0);

  const prevVideo = () => {
    setCurrentVideoIdx((prev) => (prev - 1 + PROMISE_VIDEOS.length) % PROMISE_VIDEOS.length);
  };

  const nextVideo = () => {
    setCurrentVideoIdx((prev) => (prev + 1) % PROMISE_VIDEOS.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      nextVideo();
    } else if (diff < -40) {
      prevVideo();
    }
  };

  useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.muted = true;
      videoEl.defaultMuted = true;
      videoEl.load();
      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [currentVideoIdx]);

  return (
    <section id="product-videos" className={styles.promiseVideoSection}>
      <div className={styles.productVideosHeader}>
        <span className={styles.productVideosOverline}>SEE OUR ORGANIC PROCESS 🍃</span>
        <h2 className={styles.productVideosTitle}>PRODUCT VIDEOS 🎥</h2>
      </div>

      <div 
        className={styles.videoPlayerContainer}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <video 
          key={PROMISE_VIDEOS[currentVideoIdx].src}
          ref={videoRef}
          src={PROMISE_VIDEOS[currentVideoIdx].src}
          autoPlay 
          muted 
          loop
          playsInline
          preload="auto"
          className={styles.purityVideo}
        />



        {/* Manual Slide Arrow Buttons */}
        <button 
          className={`${styles.videoNavBtn} ${styles.videoNavBtnPrev}`}
          onClick={prevVideo}
          aria-label="Previous Video"
        >
          ‹
        </button>
        <button 
          className={`${styles.videoNavBtn} ${styles.videoNavBtnNext}`}
          onClick={nextVideo}
          aria-label="Next Video"
        >
          ›
        </button>

        {/* Manual Slide Dots */}
        <div className={styles.videoDotsContainer}>
          {PROMISE_VIDEOS.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.videoDot} ${currentVideoIdx === idx ? styles.videoDotActive : ""}`}
              onClick={() => setCurrentVideoIdx(idx)}
              aria-label={`Go to Video ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


const renderStars = (rating) => {
  if (rating === 5) return "★ ★ ★ ★ ★";
  if (rating === 4.5) return "★ ★ ★ ★ ½";
  if (rating === 4) return "★ ★ ★ ★ ☆";
  if (rating === 3.5) return "★ ★ ★ ½ ☆";
  return "★ ★ ★ ★ ★";
};


const ALL_RECIPES = PRODUCTS.flatMap((p) => [
  p.recipe ? { ...p.recipe, product: p, id: p.id + "-1" } : null,
  p.recipe2 ? { ...p.recipe2, product: p, id: p.id + "-2" } : null
]).filter(Boolean);

const HERO_SLIDES = [
  { id: 1, image: "/1.webp", title: "VibeRoot Organic Superfood Powder Banner 1" },
  { id: 2, image: "/2.webp", title: "VibeRoot Organic Superfood Powder Banner 2" },
  { id: 3, image: "/3.webp", title: "VibeRoot Organic Superfood Powder Banner 3" },
  { id: 4, image: "/4.webp", title: "VibeRoot Organic Superfood Powder Banner 4" },
  { id: 5, image: "/5.webp", title: "VibeRoot Organic Superfood Powder Banner 5" }
];

const TESTIMONIALS = [
  // 3.5 Stars (3 Testimonials)
  {
    id: 1,
    name: "Marcus Vance",
    location: "Seattle, WA",
    rating: 3.5,
    quote: "Good quality organic beetroot powder. The taste is quite earthy as expected from real beets, but it blends fine in my pre-workout shaker with orange juice.",
    date: "Aug 28, 2026"
  },
  {
    id: 2,
    name: "Heather Bennett",
    location: "Calgary, AB",
    rating: 3.5,
    quote: "The raspberry powder adds a nice tart flavour to my morning oats. Slightly fine powder so handle carefully when scooping, but overall very clean product.",
    date: "Aug 14, 2026"
  },
  {
    id: 3,
    name: "Derek Miller",
    location: "Chicago, IL",
    rating: 3.5,
    quote: "Decent ginger root powder with a noticeable spicy kick. Dissolves best in warm tea rather than cold water, but good value for organic certification.",
    date: "Aug 02, 2026"
  },

  // 4.0 Stars (3 Testimonials)
  {
    id: 4,
    name: "Amanda Rodriguez",
    location: "Vancouver, BC",
    rating: 4.0,
    quote: "Loved the pineapple juice powder! Super convenient for smoothies and has active bromelain enzymes. Shipping to BC took 3 days.",
    date: "Sep 02, 2026"
  },
  {
    id: 5,
    name: "Tyler Hayes",
    location: "Denver, CO",
    rating: 4.0,
    quote: "Been taking the wheatgrass powder daily before my morning runs. Great alkalizing green boost, though I prefer mixing it with apple juice.",
    date: "Aug 20, 2026"
  },
  {
    id: 6,
    name: "Sophie Tremblay",
    location: "Montreal, QC",
    rating: 4.0,
    quote: "Very fresh beetroot powder. You can tell it is high grade from the deep crimson color. Mixes well into almond milk lattes.",
    date: "Jul 30, 2026"
  },

  // 4.5 Stars (4 Testimonials)
  {
    id: 7,
    name: "Ethan Reynolds",
    location: "Toronto, ON",
    rating: 4.5,
    quote: "Impressive quality! No clumpiness and no filler ingredients. The organic raspberry powder is now a staple in our home protein bowls.",
    date: "Sep 10, 2026"
  },
  {
    id: 8,
    name: "Clara Sterling",
    location: "Austin, TX",
    rating: 4.5,
    quote: "Fantastic ginger powder for warming immunity drinks. It gives a genuine zesty burn that clears your sinuses in the morning. Will reorder!",
    date: "Sep 05, 2026"
  },
  {
    id: 9,
    name: "Liam O'Connor",
    location: "Halifax, NS",
    rating: 4.5,
    quote: "Fast Canadian shipping and excellent resealable packaging. The pineapple powder tastes remarkably fresh like actual fruit.",
    date: "Aug 25, 2026"
  },
  {
    id: 10,
    name: "Natalie Brooks",
    location: "Boston, MA",
    rating: 4.5,
    quote: "Clean, organic, and lab-tested. Noticed a subtle improvement in workout recovery after 2 weeks on the beetroot powder.",
    date: "Aug 08, 2026"
  },

  // 5.0 Stars (6 Testimonials)
  {
    id: 11,
    name: "Jessica MacLeod",
    location: "Victoria, BC",
    rating: 5.0,
    quote: "The best superfood powders in Canada! Pure ingredients with zero added sugar. The raspberry flavor is unreal in coconut yogurt.",
    date: "Sep 14, 2026"
  },
  {
    id: 12,
    name: "David Kovacs",
    location: "New York, NY",
    rating: 5.0,
    quote: "10/10 quality. You can taste the purity right away. I add 1 scoop of ginger and pineapple to my daily green juice. Exceptional!",
    date: "Sep 12, 2026"
  },
  {
    id: 13,
    name: "Sarah Jenkins",
    location: "Ottawa, ON",
    rating: 5.0,
    quote: "Obsessed with Viberoot! The wheatgrass is bright green and so energizing. My morning digestive routine has never felt better.",
    date: "Sep 08, 2026"
  },
  {
    id: 14,
    name: "Ryan Gallagher",
    location: "Portland, OR",
    rating: 5.0,
    quote: "Top tier organic powders! The beetroot gives me sustained stamina during my cycling sessions without any energy jitters.",
    date: "Sep 01, 2026"
  },
  {
    id: 15,
    name: "Chloe Dubois",
    location: "Quebec City, QC",
    rating: 5.0,
    quote: "Super fast delivery and eco-conscious brand. Every scoop feels like pure nourishment. Highly recommend to anyone seeking real food nutrition!",
    date: "Aug 22, 2026"
  },
  {
    id: 16,
    name: "Brandon Cole",
    location: "Minneapolis, MN",
    rating: 5.0,
    quote: "Stuck with Viberoot after trying multiple brands. Pristine quality, zero pesticides, and customer support was wonderful. A lifetime customer here!",
    date: "Aug 18, 2026"
  }
];

const TREASURES = [
  {
    id: 1,
    title: "Purity & Transparency Sourcing",
    desc: "At VibeRoot, our roots run deep. We collaborate directly with organic farming cooperatives to handpick herbs at their nutritional zenith, avoiding synthetic inputs entirely."
  },
  {
    id: 2,
    title: "Low-Temperature Active Dehydration",
    desc: "We freeze-dry and dehydrate our fresh raw plants below 40°C. This ensures that every cell wall preserves its vital digestive enzymes, anti-inflammatory compounds, and vitamins."
  },
  {
    id: 3,
    title: "Eco-Conscious Canadian Craftsmanship",
    desc: "Packaged locally in Calgary, AB (Address / Adresse : VibeRoot Essentials T3P2H4 Calgary, Alberta Canada), inside clean, biodegradable pouches. We ensure every batch is triple tested in third-party labs, bringing safety reports to your table."
  }
];

function getDarkenedColor(hex) {
  if (hex === "#e4053a") return "#9d0224";
  if (hex === "#f0af02") return "#b78501";
  if (hex === "#9b2e36") return "#691f24";
  if (hex === "#b46e31") return "#7e4a1f";
  if (hex === "#465034") return "#2e3522";
  return hex;
}

// SVG Apothecary Jar Component
function ProductJar({ color, labelName }) {
  const shortName = labelName.split(" ")[0].toUpperCase();
  return (
    <svg width="100%" height="100%" viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8d6842" />
          <stop offset="30%" stopColor="#bfa37e" />
          <stop offset="70%" stopColor="#ab885f" />
          <stop offset="100%" stopColor="#73512e" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(240, 240, 240, 0.4)" />
          <stop offset="25%" stopColor="rgba(255, 255, 255, 0.7)" />
          <stop offset="75%" stopColor="rgba(230, 230, 230, 0.5)" />
          <stop offset="100%" stopColor="rgba(200, 200, 200, 0.4)" />
        </linearGradient>
        <linearGradient id={`powderGrad-${color.replace("#", "")}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={getDarkenedColor(color)} />
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="rgba(0,0,0,0.06)" />
        </filter>
      </defs>
      <rect x="25" y="35" width="110" height="150" rx="16" fill="rgba(0,0,0,0.02)" filter="url(#shadow)" />
      <path d="M 28 85 Q 80 80 132 85 L 132 170 Q 132 181 120 181 L 40 181 Q 28 181 28 170 Z" fill={`url(#powderGrad-${color.replace("#", "")})`} />
      <rect x="26" y="36" width="108" height="146" rx="16" fill="url(#glassGrad)" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1.5" />
      <rect x="36" y="24" width="88" height="12" rx="2" fill="rgba(255, 255, 255, 0.5)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
      <rect x="33" y="10" width="94" height="15" rx="3" fill="url(#lidGrad)" />
      <rect x="33" y="22" width="94" height="3" fill="rgba(0, 0, 0, 0.15)" />
      <rect x="38" y="70" width="84" height="85" rx="4" fill="#ffffff" stroke="rgba(0, 0, 0, 0.04)" strokeWidth="0.5" />
      <rect x="42" y="74" width="76" height="77" rx="2" fill="none" stroke="rgba(0, 0, 0, 0.02)" strokeWidth="0.5" />
      <text x="80" y="93" fontSize="8" fontWeight="700" fontFamily="var(--font-serif)" textAnchor="middle" fill="#1c1c1a" letterSpacing="0.05em">VibeRoot</text>
      <text x="80" y="100" fontSize="4.5" fontWeight="600" fontFamily="var(--font-sans)" textAnchor="middle" fill="#1c1c1a" letterSpacing="0.1em" opacity="0.6">ESSENTIALS</text>
      <line x1="50" y1="106" x2="110" y2="106" stroke="rgba(0, 0, 0, 0.08)" strokeWidth="0.5" />
      <text x="80" y="113" fontSize="4.5" fontWeight="700" fontFamily="var(--font-sans)" textAnchor="middle" fill={color} letterSpacing="0.1em">ORGANIC</text>
      <text x="80" y="124" fontSize="8.5" fontWeight="800" fontFamily="var(--font-serif)" textAnchor="middle" fill="#1c1c1a">{shortName}</text>
      <text x="80" y="132" fontSize="5.5" fontWeight="600" fontFamily="var(--font-sans)" textAnchor="middle" fill="#1c1c1a" opacity="0.7">POWDER</text>
      <text x="80" y="143" fontSize="4" fontWeight="600" fontFamily="var(--font-sans)" textAnchor="middle" fill="#1c1c1a" opacity="0.4" letterSpacing="0.05em">NET WT. 250G</text>
      <path d="M 33 46 Q 30 100 33 160" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      <path d="M 127 46 Q 130 100 127 160" stroke="rgba(0, 0, 0, 0.03)" strokeWidth="2" strokeLinecap="round" />
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

export default function Home() {
  const [activeTheme, setActiveTheme] = useState(PRODUCTS[0]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  
  // Carousel and layout states
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderViewportRef = useRef(null);

  useEffect(() => {
    const slider = sliderViewportRef.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
    };

    const onMouseUp = () => {
      isDown = false;
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseleave", onMouseLeave);
    slider.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mousemove", onMouseMove);

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseleave", onMouseLeave);
      slider.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const [catalogIndex, setCatalogIndex] = useState(0); // Shows 3 at a time (max index: PRODUCTS.length - 3)
  const [cardSizes, setCardSizes] = useState({
    raspberry: "250g",
    pineapple: "250g",
    beetroot: "250g",
    ginger: "250g",
    wheatgrass: "250g"
  });
  const [wishlist, setWishlist] = useState([]);
  const [toastMessage, setToastMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Namaste! Welcome to VibeRoot Essentials. How can we help you on your wellness journey today?" }
  ]);
  const [chatInput, setChatInput] = useState("");

  // Auto-slide autoplay every 5s
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  // Sync scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const addToCart = (product, size) => {
    const productPrice = product.prices[size];
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id && item.size === size);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === size ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, price: productPrice, size, qty: 1 }];
    });
    triggerToast(`Added ${product.displayName} (${size}) to cart!`);
    setIsCartOpen(true);
  };

  const updateQty = (id, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + change;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const toggleWishlist = (productId) => {
    setWishlist((prevList) => {
      if (prevList.includes(productId)) {
        triggerToast("Removed from wishlist.");
        return prevList.filter((id) => id !== productId);
      } else {
        triggerToast("Added to wishlist! ❤️");
        return [...prevList, productId];
      }
    });
  };

  const handleSizeChange = (productId, size) => {
    setCardSizes((prevSizes) => ({ ...prevSizes, [productId]: size }));
  };

  const slideCatalog = (direction) => {
    if (sliderViewportRef.current) {
      const container = sliderViewportRef.current;
      const card = container.querySelector('.' + styles.productCard);
      const scrollAmount = card ? card.offsetWidth + 16 : 300;
      if (direction === "next") {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  // Mock chat submit
  const sendChatMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    const userMsg = { sender: "user", text: chatInput };
    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput("");

    // Simulate bot response after a brief pause
    setTimeout(() => {
      const botResponse = { sender: "bot", text: "Thank you for reaching out! A wellness consultant is reviewing your query and will reply shortly." };
      setChatMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div
      className={styles.container}
      style={{
        "--accent-color": activeTheme.color,
        "--accent-color-light": activeTheme.lightColor,
        "--accent-color-hover": activeTheme.hoverColor,
      }}
    >
      {/* Dynamic Toast Alerts */}
      {toastMessage && <div className={styles.toast}>{toastMessage}</div>}



      {/* Auto-sliding Hero Carousel (Images 1-5) */}
      <section className={styles.carouselHero}>
        <div className={styles.slidesWrapper} style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {HERO_SLIDES.map((slide, index) => (
            <div key={slide.id} className={styles.slideItem}>
              <div className={styles.slideImageContainer}>
                <Image 
                  src={slide.image} 
                  alt={slide.title || "VibeRoot Essential Superfood Banner"}
                  fill
                  priority={true}
                  unoptimized={true}
                  className={styles.slideImg}
                />
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className={`${styles.carouselArrow} ${styles.carouselArrowPrev}`} 
          onClick={() => setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          aria-label="Previous Slide"
        >
          ‹
        </button>
        <button 
          className={`${styles.carouselArrow} ${styles.carouselArrowNext}`} 
          onClick={() => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          aria-label="Next Slide"
        >
          ›
        </button>

        <div className={styles.carouselDots}>
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${activeSlide === index ? styles.dotActive : ""}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 3.5. Bento Grid Gut Science Section ("Your gut knows so does science") */}
      <section className={styles.gutScienceSection}>
        <div className={styles.gutScienceHeader}>
          <h2 className={styles.gutScienceTitleSingleLine}>
            Rooted in Earth &bull; Crafted for Worth
          </h2>
        </div>

        <div className={styles.bentoGrid}>
          {/* Top Left Card 1 (Chestnut Brown) */}
          <div className={styles.bentoCardTextBrown}>
            <h3>Pure never tasted this simple</h3>
            <p>No additives. No shortcuts. Just real ingredients, straight from nature.</p>
          </div>

          {/* Top Middle Card 2 (Golden Amber - Center Aligned) */}
          <div className={styles.bentoCardTextGold}>
            <h3>Real food, no compromises</h3>
            <p>Nothing artificial. Nothing hidden. Just clean, honest powders.</p>
          </div>

          {/* Right Tall Card 3 (Card Pine Image) */}
          <div className={styles.bentoCardTallPink}>
            <Image 
              src="/card_pine.webp" 
              alt="VibeRoot Organic Pineapple Superfood Powder"
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              className={styles.bentoImg}
            />
          </div>

          {/* Middle Left Card 4 (Card Rasp Image) */}
          <div className={styles.bentoCardBlue}>
            <Image 
              src="/card_rasp.webp" 
              alt="VibeRoot Organic Raspberry Superfood Powder"
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              className={styles.bentoImg}
            />
          </div>

          {/* Middle Center Card 5 (Card 2 Image) */}
          <div className={styles.bentoCardBrownImg}>
            <Image 
              src="/card_2_image.webp" 
              alt="VibeRoot Organic Superfoods Collection"
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              className={styles.bentoImg}
            />
          </div>

          {/* Bottom Center Card 6 (Coral Pink Text) */}
          <div className={styles.bentoCardTextPink}>
            <h3>Simple by design, pure by nature</h3>
            <p>100% organic. Nothing added. Just the real thing, every scoop.</p>
          </div>

          {/* Bottom Right Card 7 (Green Text Card - Right Aligned) */}
          <div className={styles.bentoCardTextGreen}>
            <h3>Simplicity you can taste</h3>
            <p>No extras. No compromises. Just pure, clean nutrition in every scoop.</p>
          </div>
        </div>
      </section>

      {/* 4. Best Sellers Section (Shows 4 Cards in Viewport, Slide Arrows) */}
      <section id="shop" className={styles.bestSellers}>
        <div className={styles.bestSellersHeader}>
          <div className={styles.bestSellersTitleBlock}>
            <h2>BEST SELLERS 🍃</h2>
          </div>
          
          
        </div>

        {/* 5 Cards Slider Viewport */}
        <div className={styles.sliderViewport} ref={sliderViewportRef}>
          <div className={styles.sliderTrack}>
            {PRODUCTS.map((product) => {
              const currentSize = cardSizes[product.id] || "250g";
              const currentPrice = product.prices[currentSize];
              const originalPrice = product.originalPrices[currentSize];
              const isLiked = wishlist.includes(product.id);

              return (
                <div 
                  key={product.id} 
                  className={styles.productCard}
                  onMouseEnter={() => setActiveTheme(product)}
                  style={{
                    "--card-theme": product.color,
                    "--card-theme-light": product.lightColor
                  }}
                >
                  {/* Top image box with overlay actions */}
                  <div className={styles.cardImageContainer}>
                    <div className={styles.jarVisualContainer}>
                      <ProductCardImageSlider 
                        images={product.images} 
                        alt={product.displayName} 
                        onClick={() => setSelectedProduct(product)} 
                      />
                    </div>
                    
                    <button 
                      className={`${styles.heartBtn} ${isLiked ? styles.heartBtnActive : ""}`}
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="Add to Wishlist"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    </button>
                    

                  </div>

                  {/* Redesigned Card Body (Fusing Image 3 & 4) */}
                  <div className={styles.productCardContent}>
                    
                    {/* Forest Green Serif Title */}
                    <h3 className={styles.productCardTitle} onClick={() => setSelectedProduct(product)}>
                      {product.displayName}
                    </h3>

                    {/* Capsule Tags under Title (Image 3 Style) */}
                    <div className={styles.cardCapsuleTags}>
                      <span className={styles.capsuleTag}>Vegan</span>
                      <span className={styles.capsuleTag}>Gluten free</span>
                      <span className={styles.capsuleTag}>Organic</span>
                    </div>

                    {/* Star ratings with 250g weight label */}
                    <div className={styles.reviewsRow}>
                      <span className={styles.stars}>★ ★ ★ ★ ★</span>
                      <span className={styles.reviewCount}>({product.reviews})</span>
                      <span className={styles.weightLabel}>· 250g</span>
                    </div>

                    <p className={styles.cardDescriptionTeaser}>{product.tagline}</p>



                    {/* Bottom Price & Add to Cart Action */}
                    <div className={styles.productCardFooter}>
                      <div className={styles.productCardPriceRow}>
                        <span className={styles.priceAmt}>C$ {product.prices["250g"].toFixed(2)}</span>
                        <span className={styles.originalPrice}>From C$ {product.originalPrices["250g"].toFixed(2)}</span>
                      </div>

                      <a 
                        href={product.amazonUrl || "https://www.amazon.ca"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardAddToCartBtn}
                        style={{ textDecoration: "none", display: "inline-block", textAlign: "center" }}
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Product Videos Section (Plays 5 videos endlessly right after Best Sellers) */}
      <PromiseVideoCard />

      {/* 6. Recipes Section */}
      <RecipeSectionSlider onSelectRecipe={setSelectedRecipe} />

      {/* 7. Customer Testimonials Section ("Here's What Our Customers Have To Say About Us") */}
      <section id="testimonials" className={styles.testimonialsSection}>
        <div className={styles.sectionHeaderCentered}>
          <span className={styles.sectionOverline}>OUR COMMUNITY 🍁 🇺🇸</span>
          <h2 className={styles.sectionTitle}>Here's What Our Customers Have To Say About Us</h2>
          <p className={styles.sectionSubtitle}>
            Read honest feedback from wellness advocates across Canada & USA who have made our powders their daily ritual.
          </p>
        </div>

        {/* Continuous Auto-Sliding Endless Marquee Track */}
        <div className={styles.testimonialsMarqueeContainer}>
          <div className={styles.testimonialsMarqueeTrack}>
            {[...TESTIMONIALS, ...TESTIMONIALS].map((test, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <span className={styles.testimonialStars}>{renderStars(test.rating)}</span>
                  <span className={styles.testimonialRatingBadge}>{test.rating.toFixed(1)} ★</span>
                </div>
                <p className={styles.testimonialQuote}>"{test.quote}"</p>
                <div className={styles.testimonialAuthorFooter}>
                  <div className={styles.testimonialAuthorBlock}>
                    <span className={styles.authorName}>{test.name}</span>
                    <span className={styles.authorLocation}>📍 {test.location}</span>
                  </div>
                  <span className={styles.testimonialDate}>{test.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VibeRoot Essentials Treasure Trove Section */}
      <section id="treasure" className={styles.treasureSection}>
        <div className={styles.sectionHeaderCentered}>
          <span className={styles.sectionOverline}>TREASURE TROVE</span>
          <h2 className={styles.sectionTitle}>VibeRoot Essentials Treasure Trove</h2>
          <p className={styles.sectionSubtitle}>
            What makes us different? Dive into the core values that make our botanical concentrates pure and premium.
          </p>
        </div>

        <div className={styles.treasureGrid}>
          {TREASURES.map((item) => (
            <div key={item.id} className={styles.treasureCard}>
              <div className={styles.treasureNumBadge}>0{item.id}</div>
              <h3 className={styles.treasureCardTitle}>{item.title}</h3>
              <p className={styles.treasureCardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/* 11. Sliding Cart Drawer */}
      {isCartOpen && (
        <div className={styles.cartOverlay} onClick={() => setIsCartOpen(false)}>
          <div className={styles.cartDrawer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.cartHeader}>
              <h3>Your Wellness Cart</h3>
              <button className={styles.closeCartBtn} onClick={() => setIsCartOpen(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {cart.length === 0 ? (
              <div className={styles.emptyCart}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <p>Your cart is empty. Start blending wellness!</p>
                <button className={styles.emptyShopBtn} onClick={() => setIsCartOpen(false)}>Shop Best Sellers</button>
              </div>
            ) : (
              <>
                <div className={styles.cartItems}>
                  {cart.map((item) => (
                    <div key={item.id} className={styles.cartItem}>
                      <div className={styles.cartItemColorIndicator} style={{ backgroundColor: item.color }} />
                      <div className={styles.cartItemDetails}>
                        <h4>{item.name}</h4>
                        <span className={styles.cartItemSize}>Size: {item.size}</span>
                        <div className={styles.cartItemQtyControls}>
                          <button onClick={() => updateQty(item.id, -1)}>-</button>
                          <span>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)}>+</button>
                        </div>
                      </div>
                      <div className={styles.cartItemPriceBlock}>
                        <span className={styles.cartItemPrice}>C$ {(item.price * item.qty).toFixed(2)}</span>
                        <button className={styles.cartItemRemove} onClick={() => removeFromCart(item.id)}>Remove</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.cartFooter}>
                  <div className={styles.shippingBar}>
                    {cartTotal >= 45 ? (
                      <span className={styles.shippingNoticeSuccess}>🎉 You qualify for FREE Expedited Shipping across Canada!</span>
                    ) : (
                      <span className={styles.shippingNoticeInfo}>Add <strong>C$ {(45 - cartTotal).toFixed(2)}</strong> more for free expedited shipping.</span>
                    )}
                  </div>
                  <div className={styles.subtotalRow}>
                    <span>Subtotal</span>
                    <span className={styles.subtotalVal}>C$ {cartTotal.toFixed(2)}</span>
                  </div>
                  <p className={styles.taxesNotice}>GST/HST and shipping calculated at checkout.</p>
                  <button className={styles.checkoutBtn} onClick={() => alert("Checkout flow simulated. Thank you for supporting local D2C brands!")}>
                    Proceed to Safe Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* 12. Quick View Modal */}
      {selectedProduct && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProduct(null)}>
          <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={() => setSelectedProduct(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <div className={styles.modalGrid}>
              <div className={styles.modalLeft}>
                <div className={styles.modalHalfHalfContainer}>
                  <div className={styles.modalHalfItem}>
                    <Image 
                      src={selectedProduct.images ? selectedProduct.images[0] : "/10.webp"} 
                      alt={`${selectedProduct.name} View 1`} 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className={styles.modalHalfImg} 
                    />
                  </div>
                  <div className={styles.modalHalfItem}>
                    <Image 
                      src={selectedProduct.images ? selectedProduct.images[1] : "/11.webp"} 
                      alt={`${selectedProduct.name} View 2`} 
                      fill 
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className={styles.modalHalfImg} 
                    />
                  </div>
                </div>
              </div>

              <div className={styles.modalRight}>
                <span className={styles.modalCategory}>VIBEROOT PREMIUM SUPERFOODS</span>
                <h2>{selectedProduct.name}</h2>
                <div className={styles.modalPriceRow}>
                  <span className={styles.modalPrice}>C$ {selectedProduct.prices["250g"]}</span>
                  <span className={styles.modalSize}>250g stand-up pouch</span>
                </div>
                <p className={styles.modalDescription}>{selectedProduct.description}</p>
                
                <div className={styles.modalIngredients}>
                  <h5>Ingredients:</h5>
                  <p>{selectedProduct.ingredients}</p>
                </div>

                <div className={styles.modalBenefits}>
                  <h5>Key Health Benefits:</h5>
                  <ul>
                    {selectedProduct.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                                <div className={styles.modalNutritionBox}>
                  <h4>Nutritional Profile (per 5g serving)</h4>
                  <ul>
                    {Object.entries(selectedProduct.nutrition).map(([key, val]) => (
                      <li key={key}>
                        <span>{key}</span>
                        <strong>{val}</strong>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.modalActions}>
                  <a 
                    href={selectedProduct.amazonUrl || "https://www.amazon.ca"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalAddBtn}
                    style={{ textDecoration: "none", display: "inline-block", textAlign: "center" }}
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      
      {/* Recipe Details Modal Popup */}
      {selectedRecipe && (
        <div className={styles.modalOverlay} onClick={() => setSelectedRecipe(null)}>
          <div className={styles.recipeModal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={() => setSelectedRecipe(null)}>✕</button>

            <div className={styles.recipeModalHeader}>
              <div className={styles.recipeModalImgWrap}>
                <Image 
                  src={selectedRecipe.recipe.image || "/recipe_raspberry_rose.webp"} 
                  alt={selectedRecipe?.recipe?.title || selectedRecipe?.title || "VibeRoot Organic Recipe Detail"}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.recipeModalHeaderText}>
                <span className={styles.recipeModalPill}>🌿 Chef-Curated Recipe</span>
                <h3 className={styles.recipeModalTitle}>{selectedRecipe.recipe.title}</h3>
                <div className={styles.recipeModalMeta}>
                  <span>⏱️ Prep: {selectedRecipe.recipe.time}</span>
                  <span>&bull;</span>
                  <span>⚡ Difficulty: Easy</span>
                </div>
              </div>
            </div>

            <div className={styles.recipeModalBody}>
              <div className={styles.recipeModalSection}>
                <h4 className={styles.recipeModalSecTitle}>INGREDIENTS</h4>
                <ul className={styles.ingredientsList}>
                  {selectedRecipe.recipe.ingredients.map((ing, i) => (
                    <li key={i} className={styles.ingredientItem}>
                      <span className={styles.ingredientDot} style={{ background: selectedRecipe.product.color }} />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.recipeModalSection}>
                <h4 className={styles.recipeModalSecTitle}>PREPARATION STEPS</h4>
                <p className={styles.stepsText}>{selectedRecipe.recipe.steps}</p>
              </div>

              {/* Buy Now CTA inside Recipe Details Modal */}
              <div className={styles.recipeModalFooterCta}>
                <div className={styles.recipeFooterProductInfo}>
                  <span className={styles.recipeFooterPowderLabel}>Made with {selectedRecipe.product.displayName}</span>
                  <span className={styles.recipeFooterPrice}>C$ {selectedRecipe.product.prices["250g"].toFixed(2)}</span>
                </div>
                <a
                  href={selectedRecipe.product.amazonUrl || "https://www.amazon.ca"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.recipeBuyNowBtn}
                >
                  Buy {selectedRecipe.product.displayName.split(" ")[0]} Powder &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 13. Floating WhatsApp Chat widget (Saptamveda support style) */}
      <div className={styles.whatsappFloatWrapper}>
        <button 
          className={`${styles.whatsappBtn} animate-pulse-whatsapp`} 
          onClick={() => setIsChatOpen(!isChatOpen)}
          aria-label="Open WhatsApp Support"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#ffffff">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 2.217.72 4.267 1.942 5.926L2.6 21.4l3.585-1.328A9.957 9.957 0 0012 22.035c5.523 0 10-4.484 10-10.018C22 6.484 17.523 2 12 2zm5.83 14.156c-.244.685-1.417 1.309-1.977 1.394-.52.078-1.187.11-3.613-.878-3.08-1.256-5.06-4.382-5.213-4.587-.153-.205-1.246-1.658-1.246-3.161 0-1.503.785-2.242 1.064-2.548.279-.306.608-.383.811-.383.203 0 .406.002.584.01.19.009.444-.072.695.53.254.606.863 2.106.94 2.259.076.153.127.332.025.535-.101.204-.152.332-.304.51-.153.179-.321.399-.459.535-.152.153-.31.321-.133.626.177.306.787 1.3 1.688 2.103 1.157 1.031 2.133 1.35 2.438 1.503.305.153.483.127.66-.076.178-.204.762-.892.965-1.198.203-.306.406-.255.685-.153.28.102 1.776.837 2.08 1.002.304.165.508.244.584.372.076.128.076.741-.168 1.426z" />
          </svg>
        </button>

        {isChatOpen && (
          <div className={styles.chatWindow}>
            <div className={styles.chatHeader}>
              <div className={styles.chatTitleBlock}>
                <span className={styles.onlineDot} />
                <div>
                  <h5>VibeRoot Support</h5>
                  <span>Active Wellness Experts</span>
                </div>
              </div>
              <button className={styles.closeChatBtn} onClick={() => setIsChatOpen(false)}>✕</button>
            </div>
            
            <div className={styles.chatBody}>
              {chatMessages.map((msg, i) => (
                <div key={i} className={msg.sender === "bot" ? styles.msgBot : styles.msgUser}>
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>

            <form className={styles.chatFooter} onSubmit={sendChatMessage}>
              <input 
                type="text" 
                placeholder="Ask about dosage, ingredients..." 
                value={chatInput} 
                onChange={(e) => setChatInput(e.target.value)}
                required
                aria-label="WhatsApp support message input"
              />
              <button type="submit" aria-label="Send message">➔</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
