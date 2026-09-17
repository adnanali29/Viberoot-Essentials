"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const PRODUCTS = [
{
    id: "raspberry",
    amazonUrl: "https://www.amazon.ca/dp/B0HHNWY8MG",
    name: "Organic Raspberry Powder",
    displayName: "Raspberry Powder",
    images: ["/10.webp", "/product_card_rasp.webp", "/11.webp", "/12.webp"],
    prices: { "125g": 14.99, "250g": 24.99, "500g": 44.99 },
    originalPrices: { "125g": 17.59, "250g": 29.39, "500g": 52.89 },
    color: "#e4053a",
    lightColor: "rgba(228, 5, 58, 0.05)",
    hoverColor: "#c40432",
    tagline: "Antioxidant powerhouse made from vine-ripened organic berries.",
    description: "Viberoot Organic Raspberry Powder is a vibrant, nutrient-dense superfood crafted from pure, freeze-dried organic raspberries. Packed with Vitamin C, dietary fiber, and powerful antioxidants, it brings a bright, tangy berry flavor to your daily wellness routine with zero added sugar or preservatives.",
    benefits: ["Rich in Antioxidants", "Supports Cellular Health", "Boosts Natural Collagen"],
    healthGoals: ["Immunity", "Hair & Skin"],
    rating: 4.9,
    reviews: 320,
    nutrition: { Calories: "40 kcal", "Vitamin C": "35% DV", Fiber: "4g", Sugars: "0g Added" },
    ingredients: "100% Certified Organic Freeze-Dried Red Raspberry Powder.",
    pairing: "Perfect paired with oat milk, vanilla protein, or blended into coconut yogurt.",
    ingredientBoxes: ["🍓 100% Fruit", "🛡️ Antioxidant", "✨ Collagen Boost"],
    recipe: {
      title: "Raspberry Rose Smoothie Bowl",
      image: "/recipe_raspberry_rose.webp",
      time: "5 Min",
      ingredients: ["1 tbsp Raspberry Powder", "1 cup frozen mixed berries", "1 frozen banana", "1/2 cup almond milk"],
      steps: "Blend all base ingredients until thick and creamy. Pour into a glass and serve fresh."
    }
  },
{
    id: "pineapple",
    amazonUrl: "https://www.amazon.ca/dp/B0HHXD2P1J",
    name: "Organic Pineapple Fruit Juice Powder",
    displayName: "Pineapple Fruit Juice Powder",
    images: ["/13.webp", "/product_card_pine.webp", "/14.webp", "/15.webp"],
    prices: { "125g": 16.99, "250g": 27.99, "500g": 49.99 },
    originalPrices: { "125g": 19.99, "250g": 32.99, "500g": 58.89 },
    color: "#f0af02",
    lightColor: "rgba(240, 175, 2, 0.05)",
    hoverColor: "#c59002",
    tagline: "Tropical energy boost loaded with active digestive enzymes.",
    description: "Bring the tropical sunshine to your kitchen. Made from ripe, organic pineapples, this powder is naturally sweet and rich in Bromelain—a powerful digestive enzyme—and Vitamin C. It dissolves effortlessly, making it the perfect nutrient boost for refreshers, pre-workout drinks, or morning fruit bowls.",
    benefits: ["Aids Protein Digestion", "Natural Energy Boost", "High in Vitamin C"],
    healthGoals: ["Digestion", "Energy"],
    rating: 4.8,
    reviews: 180,
    nutrition: { Calories: "45 kcal", Bromelain: "Active Enzymes", "Vitamin C": "40% DV", Potassium: "6% DV" },
    ingredients: "100% Certified Organic Spray-Dried Pineapple Juice Powder.",
    pairing: "Pairs beautifully with ginger, green tea, or blended into green smoothies.",
    ingredientBoxes: ["🍍 Active Enzyme", "⚡ Energy Boost", "🥬 Easy Digestion"],
    recipe: {
      title: "Tropical Pineapple Detox",
      image: "/recipe_pineapple_detox.webp",
      time: "5 Min",
      ingredients: ["1 tbsp Pineapple Powder", "1 cup chilled coconut water", "1/2 inch fresh ginger", "Squeeze of lime juice"],
      steps: "Combine all ingredients in a blender or shaker. Blend until smooth. Serve over ice."
    }
  },
{
    id: "ginger",
    amazonUrl: "https://www.amazon.ca/s?k=viberoot+organic+ginger+powder",
    name: "Organic Ginger Root Powder",
    displayName: "Ginger Root Powder",
    images: ["/19.webp", "/product_card_ginger.webp", "/20.webp", "/21.webp"],
    prices: { "125g": 12.99, "250g": 20.99, "500g": 36.99 },
    originalPrices: { "125g": 15.29, "250g": 24.99, "500g": 43.49 },
    color: "#b46e31",
    lightColor: "rgba(180, 110, 49, 0.05)",
    hoverColor: "#935722",
    tagline: "Warm, spicy, and soothing powder for immune and gut support.",
    description: "Viberoot Organic Ginger Root Powder is carefully dried and finely ground to preserve its intense warmth and bioactive gingerols. Highly revered for its anti-inflammatory and soothing digestive properties, it is the ultimate warming addition to wellness teas, morning elixirs, stir-fries, and spiced bakes.",
    benefits: ["Powerful Anti-inflammatory", "Soothes Digestion", "Supports Immune Defense"],
    healthGoals: ["Immunity", "Digestion"],
    rating: 4.7,
    reviews: 260,
    nutrition: { Calories: "10 kcal", Gingerols: "Active Compounds", Calcium: "2% DV", Iron: "4% DV" },
    ingredients: "100% Certified Organic Ground Ginger Root.",
    pairing: "Perfect with honey, lemon, hot water, or blended with pineapple.",
    ingredientBoxes: ["🔥 Bio-Gingerols", "🤢 Anti-Nausea", "🛡️ Gut Support"],
    recipe: {
      title: "Golden Ginger Immunity Shot",
      image: "/recipe_ginger_immunity.webp",
      time: "5 Min",
      ingredients: ["1 tsp Ginger Powder", "1 lemon (juiced)", "1/2 cup warm water", "1/2 tsp maple syrup"],
      steps: "Mix all ingredients together in a glass. Drink immediately in the morning for a warming boost."
    }
  },
{
    id: "beetroot",
    amazonUrl: "https://www.amazon.ca/dp/B0HHXN6MG7",
    name: "Organic Beetroot Powder",
    displayName: "Beetroot Powder",
    images: ["/16.webp", "/product_card_beetroot.webp", "/17.webp", "/18.webp"],
    prices: { "125g": 12.99, "250g": 20.99, "500g": 36.99 },
    originalPrices: { "125g": 15.29, "250g": 24.99, "500g": 43.49 },
    color: "#9b2e36",
    lightColor: "rgba(155, 46, 54, 0.05)",
    hoverColor: "#7c2228",
    tagline: "Pure circulation and stamina booster from premium organic beets.",
    description: "A favorite among athletes and wellness enthusiasts. Viberoot Organic Beetroot Powder is loaded with dietary nitrates that help optimize blood circulation, lower blood pressure, and boost natural athletic performance. Its earthy, sweet profile adds depth and vitality to pre-workouts and morning elixirs.",
    benefits: ["Optimizes Blood Flow", "Enhances Athletic Stamina", "Natural Nitric Oxide Booster"],
    healthGoals: ["Energy", "Detox"],
    rating: 4.9,
    reviews: 410,
    nutrition: { Calories: "35 kcal", Nitrates: "High Activity", Iron: "8% DV", Folate: "12% DV" },
    ingredients: "100% Certified Organic Dehydrated Beetroot Powder.",
    pairing: "Blends well with raw cacao, ginger, or in warm almond milk lattes.",
    ingredientBoxes: ["🩸 High Nitrates", "💪 Stamina Boost", "❤️ Heart Health"],
    recipe: {
      title: "Beetroot Pre-Workout Latte",
      image: "/recipe_beetroot_latte.webp",
      time: "5 Min",
      ingredients: ["1 tbsp Beetroot Powder", "1 cup plant milk (warm or cold)", "1 tsp raw honey or maple syrup", "1/4 tsp cinnamon"],
      steps: "Whisk or blend all ingredients together until frothy. Perfect as a pre-workout drink."
    }
  },
{
    id: "wheatgrass",
    amazonUrl: "https://www.amazon.ca/dp/B0HHY25VNZ",
    name: "Organic Wheat Grass Powder",
    displayName: "Wheat Grass Powder",
    images: ["/23.webp", "/product_card_wheat.webp", "/24.webp", "/25.webp"],
    prices: { "125g": 13.49, "250g": 21.99, "500g": 38.99 },
    originalPrices: { "125g": 15.99, "250g": 25.99, "500g": 45.89 },
    color: "#465034",
    lightColor: "rgba(70, 80, 52, 0.05)",
    hoverColor: "#333d26",
    tagline: "Alkalizing green powerhouse rich in chlorophyll and essential minerals.",
    description: "Grown in nutrient-dense organic soils, our Wheat Grass is harvested at its nutritional peak and cold-pressed into a fine, bright green powder. High in chlorophyll, plant proteins, and iron, it helps cleanse the system, support digestion, and alkalize your body for sustained daily vitality.",
    benefits: ["Alkalizes & Cleanses", "High in Active Chlorophyll", "Supports Liver Detoxification"],
    healthGoals: ["Detox", "Digestion"],
    rating: 4.9,
    reviews: 350,
    nutrition: { Calories: "25 kcal", Chlorophyll: "180mg", Protein: "2g", Iron: "15% DV" },
    ingredients: "100% Certified Organic Young Wheat Grass Powder.",
    pairing: "Best blended with cold apple juice, orange juice, or green apples.",
    ingredientBoxes: ["🌿 Chlorophyll", "🧪 Alkalizer", "🧹 Daily Detox"],
    recipe: {
      title: "Wheatgrass Morning Shot",
      image: "/recipe_wheatgrass_shot.webp",
      time: "5 Min",
      ingredients: ["1 tbsp Wheat Grass Powder", "1 cup fresh apple juice", "1/2 cucumber (sliced)", "Squeeze of fresh lemon"],
      steps: "Blend the cucumber with apple juice and wheat grass powder. Strain and squeeze fresh lemon over top."
    }
  }
];

const PROMISE_VIDEOS = [
  { src: "/videos/video2.mp4", title: "Organic Berries & Fruit Sourcing" },
  { src: "/videos/video1.mp4", title: "Cold-Press Low-Temp Processing" },
  { src: "/videos/video5.mp4", title: "Third-Party Purity & Heavy Metal Testing" },
  { src: "/videos/video4.mp4", title: "Eco-Friendly Small Batching in Canada" },
  { src: "/videos/video3.mp4", title: "Pure Superfood Elixirs & Smoothies" }
];

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

        {/* Video Title Banner */}
        <div className={styles.videoTitleBanner}>
          <span className={styles.videoStepTag}>Step {currentVideoIdx + 1} of 5</span>
          <h3 className={styles.videoStepTitle}>{PROMISE_VIDEOS[currentVideoIdx].title}</h3>
        </div>

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

const HERO_SLIDES = [
  { id: 1, image: "/1.webp", title: "VibeRoot Banner 1" },
  { id: 2, image: "/2.webp", title: "VibeRoot Banner 2" },
  { id: 3, image: "/3.webp", title: "VibeRoot Banner 3" },
  { id: 4, image: "/4.webp", title: "VibeRoot Banner 4" },
  { id: 5, image: "/5.webp", title: "VibeRoot Banner 5" }
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
                  alt={slide.title}
                  fill
                  priority={index === 0}
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
      <section id="recipes" className={styles.recipesSection}>
        <div className={styles.recipesLayoutGrid}>
          <div className={styles.recipesLeftIntro}>
            <span className={styles.recipesOverline}>HEALTHY & DELICIOUS 🍃</span>
            <h2 className={styles.recipesMainTitle}>Recipes To <br />Inspire You</h2>
            <button className={styles.viewAllRecipesBtn}>VIEW ALL RECIPES</button>
          </div>

          <div className={styles.recipesRowList}>
            {PRODUCTS.slice(0, 4).map((prod) => {
              const recipeImage = prod.recipe.image || "/recipe_raspberry_rose.webp";

              return (
                <div 
                  key={prod.id} 
                  className={styles.recipeCard} 
                  onClick={() => {
                    setActiveTheme(prod);
                    setSelectedProduct(prod);
                  }}
                  style={{ "--recipe-accent": prod.color }}
                >
                  <div className={styles.recipeCardImageContainer}>
                    <Image 
                      src={recipeImage}
                      alt={prod.recipe.title}
                      fill
                      sizes="(max-width: 600px) 100vw, 25vw"
                      className={styles.recipeCardImg}
                    />
                    <div className={styles.recipeCardOverlayTag}>
                      <span>{prod.displayName.split(" ")[0]}</span>
                    </div>
                  </div>
                  <div className={styles.recipeCardContent}>
                    <div className={styles.recipeCardHeaderRow}>
                      <span className={styles.recipeDrinkTag}>DRINK</span>
                      <span className={styles.recipeCardTimePill}>⏱️ {prod.recipe.time}</span>
                    </div>
                    <h4 className={styles.recipeCardTitle}>{prod.recipe.title}</h4>
                    <div className={styles.recipeCardFooter}>
                      <span className={styles.recipeCardDifficulty}>Easy</span>
                      <button className={styles.recipeCircleArrowBtn} aria-label="View Recipe">
                        →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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

      {/* 13. Floating WhatsApp Chat widget (Saptamveda support style) */}
      <div className={styles.whatsappFloatWrapper}>
        <button 
          className={`${styles.whatsappBtn} animate-pulse-whatsapp`} 
          onClick={() => setIsChatOpen(!isChatOpen)}
          aria-label="Open WhatsApp Support"
        >
          <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.739-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.59 1.977 14.113.953 11.488.953c-5.442 0-9.866 4.372-9.87 9.802 0 1.83.504 3.614 1.46 5.178l-1.02 3.722 3.824-.997s.005-.001.005-.002zM18.8 14.88c-.3-.15-1.782-.879-2.057-.978-.276-.1-.476-.15-.676.15-.2.3-.776.979-.95 1.178-.176.2-.351.226-.652.075-.3-.15-1.269-.467-2.417-1.492-.892-.797-1.494-1.782-1.67-2.082-.175-.3-.018-.463.13-.612.134-.133.3-.349.45-.523.15-.175.2-.299.3-.5.1-.2.05-.375-.025-.524-.075-.15-.676-1.629-.926-2.228-.243-.585-.49-.506-.676-.516-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.376-.275.3-1.05 1.026-1.05 2.5 0 1.475 1.075 2.899 1.225 3.099.15.2 2.11 3.224 5.116 4.525.715.31 1.273.495 1.71.635.718.228 1.368.196 1.884.118.574-.088 1.782-.728 2.033-1.43.25-.701.25-1.3.175-1.429-.075-.13-.275-.205-.575-.355z" />
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
