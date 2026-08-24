export const PRODUCTS = [
  {
    id: "raspberry",
    name: "Organic Raspberry Powder",
    displayName: "Raspberry Powder",
    prices: { "250g": 24.99 },
    originalPrices: { "250g": 29.39 },
    color: "#e4053a",
    lightColor: "rgba(228, 5, 58, 0.08)",
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
    recipe: {
      title: "Raspberry Rose Smoothie Bowl",
      time: "10 Min",
      difficulty: "Easy",
      ingredients: ["2 tbsp Raspberry Powder", "1 cup frozen mixed berries", "1 frozen banana", "1/2 cup almond milk", "Toppings: granola, fresh berries, coconut flakes"],
      steps: "Blend Raspberry Powder with frozen berries, banana, and almond milk until thick and creamy. Pour into a bowl and top with granola, fresh berries, and coconut flakes."
    },
    recipe2: {
      title: "Raspberry Lemonade",
      time: "5 Min",
      difficulty: "Easy",
      ingredients: ["1 tbsp Raspberry Powder", "Juice of 1 lemon", "2 cups chilled water", "1 tsp honey or maple syrup", "Ice & fresh mint"],
      steps: "Whisk Raspberry Powder into lemon juice until dissolved. Add chilled water, sweetener, and stir well. Serve over ice with fresh mint."
    }
  },
  {
    id: "pineapple",
    name: "Organic Pineapple Fruit Juice Powder",
    displayName: "Pineapple Fruit Juice Powder",
    prices: { "250g": 19.99 },
    originalPrices: { "250g": 23.49 },
    color: "#f0af02",
    lightColor: "rgba(240, 175, 2, 0.08)",
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
    recipe: {
      title: "Tropical Pineapple Detox",
      time: "5 Min",
      difficulty: "Easy",
      ingredients: ["1 tbsp Pineapple Powder", "1 cup chilled coconut water", "1/2 inch fresh ginger", "Squeeze of lime juice", "Ice cubes"],
      steps: "Combine all ingredients in a blender or shaker. Blend until smooth. Serve over ice."
    },
    recipe2: {
      title: "Pineapple Chia Pudding",
      time: "10 Min + 2h chill",
      difficulty: "Easy",
      ingredients: ["1.5 tbsp Pineapple Powder", "3 tbsp chia seeds", "1.5 cups coconut milk", "1 tsp maple syrup", "Fresh pineapple chunks"],
      steps: "Mix Pineapple Powder into coconut milk. Stir in chia seeds and sweetener. Refrigerate 2 hours or overnight. Top with fresh pineapple."
    }
  },
  {
    id: "beetroot",
    name: "Organic Beetroot Powder",
    displayName: "Beetroot Powder",
    prices: { "250g": 18.99 },
    originalPrices: { "250g": 22.29 },
    color: "#9b2e36",
    lightColor: "rgba(155, 46, 54, 0.08)",
    hoverColor: "#7c2228",
    tagline: "Pure circulation and stamina booster from premium organic beets.",
    description: "A favourite among athletes and wellness enthusiasts. Viberoot Organic Beetroot Powder is loaded with dietary nitrates that help optimize blood circulation, lower blood pressure, and boost natural athletic performance. Its earthy, sweet profile adds depth and vitality to pre-workouts and morning elixirs.",
    benefits: ["Optimizes Blood Flow", "Enhances Athletic Stamina", "Natural Nitric Oxide Booster"],
    healthGoals: ["Energy", "Detox"],
    rating: 4.9,
    reviews: 410,
    nutrition: { Calories: "35 kcal", Nitrates: "High Activity", Iron: "8% DV", Folate: "12% DV" },
    ingredients: "100% Certified Organic Dehydrated Beetroot Powder.",
    pairing: "Blends well with raw cacao, ginger, or in warm almond milk lattes.",
    recipe: {
      title: "Beetroot Pre-Workout Latte",
      time: "5 Min",
      difficulty: "Easy",
      ingredients: ["1.5 tbsp Beetroot Powder", "1 cup plant milk (warm)", "1 tsp raw honey", "1/4 tsp cinnamon", "Pinch of black pepper"],
      steps: "Whisk Beetroot Powder into warm plant milk until smooth. Add honey, cinnamon, and a pinch of pepper. Froth and serve hot."
    },
    recipe2: {
      title: "Pink Beet Overnight Oats",
      time: "5 Min + overnight",
      difficulty: "Easy",
      ingredients: ["1 tbsp Beetroot Powder", "1/2 cup rolled oats", "1 cup almond milk", "1 tbsp chia seeds", "Berries & seeds to top"],
      steps: "Mix Beetroot Powder with almond milk. Stir in oats and chia seeds. Refrigerate overnight. Top with fresh berries and seeds in the morning."
    }
  },
  {
    id: "ginger",
    name: "Organic Ginger Root Powder",
    displayName: "Ginger Root Powder",
    prices: { "250g": 16.99 },
    originalPrices: { "250g": 19.99 },
    color: "#b46e31",
    lightColor: "rgba(180, 110, 49, 0.08)",
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
    recipe: {
      title: "Golden Ginger Immunity Shot",
      time: "5 Min",
      difficulty: "Easy",
      ingredients: ["1 tsp Ginger Powder", "1 lemon (juiced)", "1/2 tsp turmeric", "1/2 cup warm water", "1/2 tsp raw honey"],
      steps: "Mix all ingredients in a glass. Stir well until dissolved. Shoot it first thing in the morning for an immune kick."
    },
    recipe2: {
      title: "Warming Ginger Chai Latte",
      time: "10 Min",
      difficulty: "Easy",
      ingredients: ["1.5 tsp Ginger Powder", "1 black tea bag", "1 cup plant milk", "1/4 tsp cinnamon", "1/4 tsp cardamom", "Honey to taste"],
      steps: "Brew tea bag in half cup water. Add plant milk, Ginger Powder, and spices. Simmer 3 minutes. Sweeten with honey and serve hot."
    }
  },
  {
    id: "wheatgrass",
    name: "Organic Wheat Grass Powder",
    displayName: "Wheat Grass Powder",
    prices: { "250g": 22.99 },
    originalPrices: { "250g": 26.99 },
    color: "#465034",
    lightColor: "rgba(70, 80, 52, 0.08)",
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
    recipe: {
      title: "Wheatgrass Morning Shot",
      time: "5 Min",
      difficulty: "Easy",
      ingredients: ["1 tbsp Wheat Grass Powder", "1 cup fresh apple juice", "1/2 cucumber sliced", "Squeeze of fresh lemon"],
      steps: "Blend cucumber with apple juice and Wheat Grass Powder. Strain through a fine mesh. Squeeze fresh lemon over top. Drink immediately."
    },
    recipe2: {
      title: "Green Detox Smoothie",
      time: "5 Min",
      difficulty: "Easy",
      ingredients: ["1.5 tbsp Wheat Grass Powder", "1 green apple", "1/2 cup spinach", "1 cup coconut water", "1/2 lemon juiced", "Ginger to taste"],
      steps: "Add all ingredients to a blender. Blend on high until silky smooth. Serve immediately for maximum chlorophyll benefits."
    }
  }
];

export function getDarkenedColor(hex) {
  if (hex === "#e4053a") return "#9d0224";
  if (hex === "#f0af02") return "#b78501";
  if (hex === "#9b2e36") return "#691f24";
  if (hex === "#b46e31") return "#7e4a1f";
  if (hex === "#465034") return "#2e3522";
  return hex;
}

export const BLOGS = [
  {
    id: 1,
    title: "5 Reasons to Add Organic Beetroot Powder to Your Daily Diet",
    category: "Nutrition",
    date: "Aug 18, 2026",
    readTime: "4 min read",
    excerpt: "Beetroot powder is no longer just an athlete's secret. Discover how daily dietary nitrates from organic beets can transform your energy, blood pressure, and stamina in just weeks.",
    content: "Organic Beetroot Powder is packed with natural nitrates that the body converts to nitric oxide — a molecule that widens blood vessels, improving circulation and oxygen delivery to muscles. Studies show consistent beetroot supplementation can improve exercise endurance by up to 16%. Beyond athletics, the high folate content supports cognitive function and heart health. The deep red color comes from betalains — potent anti-inflammatory compounds that protect cells from oxidative stress. Starting with 1 tablespoon daily in warm water or a morning smoothie is all it takes to begin feeling the benefits. Organic certification ensures no pesticide residue — just pure beet nutrition in every scoop."
  },
  {
    id: 2,
    title: "Why Wheatgrass is Called Nature's Ultimate Multivitamin",
    category: "Superfood Science",
    date: "Aug 10, 2026",
    readTime: "5 min read",
    excerpt: "Packed with chlorophyll, iron, and over 70 minerals, young wheatgrass may be the most nutritionally complete plant food available. Here's the science behind the hype.",
    content: "Wheatgrass is harvested from the young shoots of Triticum aestivum — before the plant begins producing wheat grain. At this stage, the grass contains extraordinarily high concentrations of chlorophyll (the green pigment that mirrors human hemoglobin in structure), vitamins A, C, and E, calcium, magnesium, and amino acids. The alkalizing effect of chlorophyll helps neutralize acidic foods and supports the liver in its daily detoxification role. Our cold-press processing ensures enzymes remain fully active — a key differentiator from heat-dried alternatives. Take it as a morning shot or blend into your green smoothies for a sustained energy lift that does not crash."
  },
  {
    id: 3,
    title: "Ginger Root Powder vs Fresh Ginger: Which is More Potent?",
    category: "Ingredient Deep Dive",
    date: "Aug 02, 2026",
    readTime: "4 min read",
    excerpt: "Fresh ginger gets all the glory, but is powdered ginger actually more therapeutically concentrated? The answer might surprise Canadian wellness shoppers.",
    content: "When ginger is dried and powdered, the concentration of active compounds — particularly shogaols — actually increases significantly compared to fresh root. While fresh ginger is higher in gingerols, the dehydration process converts gingerols to shogaols, which research shows have even stronger anti-inflammatory properties. For gut health, nausea relief, and anti-inflammatory support, organic ginger powder used daily delivers a more consistent therapeutic dose than fresh root, which varies widely in potency. Viberoot's low-temperature dehydration ensures bioactive compounds are preserved. Add 1/2 teaspoon to warm lemon water each morning or stir into golden milk for a daily anti-inflammatory ritual."
  },
  {
    id: 4,
    title: "The Canadian Guide to Going Organic: What Certifications Actually Mean",
    category: "Lifestyle",
    date: "Jul 25, 2026",
    readTime: "3 min read",
    excerpt: "Understanding Canadian Organic Regime (COR) certified products and why it matters for the powders you add to your daily smoothies.",
    content: "Canada's organic certification framework — the Canadian Organic Regime (COR) — ensures that certified products are produced without synthetic pesticides, GMOs, or prohibited substances. Look for the Canada Organic logo or USDA Organic equivalent when shopping for superfoods. At Viberoot Essentials, every product carries organic certification traceable to the farm level. This matters especially for powdered superfoods, where the concentration process also concentrates any contaminants present in conventionally grown plants. Third-party lab testing for heavy metals, microbials, and pesticide residues is our non-negotiable standard before any batch ships to Canadian customers."
  }
];
