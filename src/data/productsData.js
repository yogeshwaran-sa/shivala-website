export const CATEGORIES = [
  {
    id: 'all',
    name: 'All Categories',
    icon: 'Grid',
    description: 'Explore the complete range of SHIVALA consumer products.'
  },
  {
    id: 'traditional-foods',
    name: 'Traditional Foods',
    icon: 'Utensils',
    description: 'Authentic South Indian culinary preparations made with traditional recipes.',
    image: '/assets/appalam.jpg'
  },
  {
    id: 'appalam',
    name: 'Appalam & Papadum',
    icon: 'Disc',
    description: 'Sun-dried crisp urad dal appalams crafted with pristine hygiene.',
    image: '/assets/appalam.jpg'
  },
  {
    id: 'vathal-vadagam',
    name: 'Vathal & Vadagam',
    icon: 'Sun',
    description: 'Traditional sun-dried berries, salted curd chilies & savory seasoning vadagams.',
    image: '/assets/vathal.jpg'
  },
  {
    id: 'noodles-semiya',
    name: 'Noodles & Semiya',
    icon: 'Wheat',
    description: 'Double-roasted vermicelli and nutrient-dense millet noodles.',
    image: '/assets/hero_banner.jpg'
  },
  {
    id: 'pooja-products',
    name: 'Pooja Products',
    icon: 'Flame',
    description: 'Pure camphor, natural incense & traditional auspicious essentials for daily prayers.',
    image: '/assets/vathal.jpg'
  },
  {
    id: 'household-essentials',
    name: 'Household Essentials',
    icon: 'Home',
    description: 'Eco-conscious, high-performance home cleaning and lifestyle products.',
    image: '/assets/family_story.jpg'
  }
];

export const PRODUCTS = [
  {
    id: 'shv-app-01',
    name: 'SHIVALA Special Urad Dal Appalam',
    slug: 'shivala-appalam',
    category: 'Appalam & Papadum',
    categoryId: 'appalam',
    weight: '200g',
    weightOptions: ['100g', '200g', '500g', '1kg Pack'],
    price: 65,
    mrp: 75,
    discount: '13% OFF',
    rating: 4.9,
    reviewsCount: 128,
    isBestseller: true,
    isNew: false,
    availability: 'In Stock',
    image: '/assets/appalam.jpg',
    images: ['/assets/appalam.jpg', '/assets/family_story.jpg', '/assets/vathal.jpg'],
    shortDescription: 'Premium hand-rolled urad dal appalams, sun-dried under hygienic conditions for maximum crispiness.',
    description: 'Made from premium selected black gram (urad dal), hand-rolled and sun-dried under hygienic conditions. Delivers extraordinary crispiness and traditional Tamil Nadu authentic flavor with zero added preservatives.',
    ingredientsPlaceholder: 'Premium Urad Dal Flour, Rice Flour, Edible Salt, Asafoetida (Hing), Sodium Bicarbonate.',
    storageInfo: 'Store in a cool, dry place. Keep sealed in an airtight container after opening.',
    packagingInfo: 'Hygienically heat-sealed multi-layer moisture-lock pouch.',
    shippingInfo: 'Dispatched within 24 hours. Free delivery on orders above ₹499.',
    highlights: ['100% Sun Dried', 'No Preservatives', 'Airtight Moisture-Proof Pouch', 'Export Quality'],
    tags: ['appalam', 'papad', 'urad dal', 'traditional', 'south indian', 'bestseller'],
    reviews: [
      { id: 1, name: 'Lakshmi R.', rating: 5, date: '2026-09-28', comment: 'Puffs up evenly when fried! Clean and non-greasy texture. Real authentic Taste of Madurai.' },
      { id: 2, name: 'Venkatesh K.', rating: 5, date: '2026-09-15', comment: 'Packaging is very solid. Not a single appalam was broken during delivery.' }
    ]
  },
  {
    id: 'shv-vth-01',
    name: 'SHIVALA Sun-Dried Sundakkai Vathal',
    slug: 'shivala-vathal',
    category: 'Vathal & Vadagam',
    categoryId: 'vathal-vadagam',
    weight: '150g',
    weightOptions: ['150g', '300g'],
    price: 95,
    mrp: 110,
    discount: '14% OFF',
    rating: 4.8,
    reviewsCount: 94,
    isBestseller: true,
    isNew: false,
    availability: 'In Stock',
    image: '/assets/vathal.jpg',
    images: ['/assets/vathal.jpg', '/assets/appalam.jpg'],
    shortDescription: 'Wild turkey berries soaked in salted buttermilk and traditional sun-dried.',
    description: 'Hand-harvested wild turkey berries (sundakkai) soaked in seasoned buttermilk and sun-dried. Perfect for preparing traditional Vathal Kuzhambu or crispy oil-fried side dishes.',
    ingredientsPlaceholder: 'Fresh Turkey Berries (Sundakkai), Pure Rock Salt, Cultured Buttermilk.',
    storageInfo: 'Store in a moisture-free container. Deep fry in hot oil before consuming.',
    packagingInfo: 'Pristine foil sealed stand-up pouch.',
    shippingInfo: 'Dispatched within 24 hours.',
    highlights: ['Digestive Wellness', 'Traditional Tamil Recipe', 'Hygienically Packed', 'Rich in Antioxidants'],
    tags: ['vathal', 'sundakkai', 'turkey berry', 'traditional', 'curry', 'side dish'],
    reviews: [
      { id: 1, name: 'Ananya M.', rating: 5, date: '2026-09-20', comment: 'Super crisp when fried. Prepared Vathal Kuzhambu with this and it tasted heavenly!' }
    ]
  },
  {
    id: 'shv-vdg-01',
    name: 'SHIVALA Small Onion Seasoning Vadagam',
    slug: 'shivala-vadagam',
    category: 'Vathal & Vadagam',
    categoryId: 'vathal-vadagam',
    weight: '100g',
    weightOptions: ['100g', '250g'],
    price: 85,
    mrp: 100,
    discount: '15% OFF',
    rating: 4.9,
    reviewsCount: 81,
    isBestseller: true,
    isNew: true,
    availability: 'In Stock',
    image: '/assets/vathal.jpg',
    images: ['/assets/vathal.jpg', '/assets/family_story.jpg'],
    shortDescription: 'Artisanal seasoning balls made with fresh shallots, mustard, curry leaves, and spices.',
    description: 'Artisanal seasoning balls prepared with fresh Shallots (Small Onions), mustard seeds, curry leaves, and aromatic spices. Tempering with SHIVALA Vadagam elevates any sambar or rasam.',
    ingredientsPlaceholder: 'Small Shallots, Mustard Seeds, Cumin Seeds, Curry Leaves, Garlic, Asafoetida, Salt, Castor Oil.',
    storageInfo: 'Keep tightly closed in an airtight jar.',
    packagingInfo: 'Sealed food-grade pouch.',
    shippingInfo: 'Dispatched within 24 hours.',
    highlights: ['Authentic Flavor Booster', 'Hand-shaped & Sun Dried', 'No Artificial Colors', 'Grandma’s Secret Recipe'],
    tags: ['vadagam', 'shallots', 'small onion', 'seasoning', 'tempering', 'sambar'],
    reviews: [
      { id: 1, name: 'Karthik S.', rating: 5, date: '2026-09-18', comment: 'Adds rich aroma to Sambar tempering! The exact traditional flavor my mother used to prepare.' }
    ]
  },
  {
    id: 'shv-mrm-01',
    name: 'SHIVALA Spicy Salted Mor Milagai',
    slug: 'shivala-mor-milagai',
    category: 'Vathal & Vadagam',
    categoryId: 'vathal-vadagam',
    weight: '150g',
    weightOptions: ['150g', '300g'],
    price: 75,
    mrp: 90,
    discount: '17% OFF',
    rating: 4.7,
    reviewsCount: 62,
    isBestseller: false,
    isNew: false,
    availability: 'In Stock',
    image: '/assets/vathal.jpg',
    images: ['/assets/vathal.jpg', '/assets/appalam.jpg'],
    shortDescription: 'Green chilies marinated in sour curd and rock salt, repeatedly sun-dried.',
    description: 'Select green chilies marinated in sour curd and rock salt, repeatedly sun-dried until crisp. Deep fry in mustard or sesame oil for the ultimate side dish with curd rice.',
    ingredientsPlaceholder: 'Select Green Chilies, Sour Curd (Yogurt), Sea Salt.',
    storageInfo: 'Keep in an airtight jar away from moisture.',
    packagingInfo: 'Foil sealed pouch.',
    shippingInfo: 'Dispatched within 24 hours.',
    highlights: ['Zesty & Crunchy', 'Traditional Curd Marinated', 'Long Shelf Life', 'Zero Artificial Flavoring'],
    tags: ['mor milagai', 'curd chili', 'salted chili', 'vathal', 'curd rice side'],
    reviews: [
      { id: 1, name: 'Senthil K.', rating: 5, date: '2026-09-10', comment: 'Perfect crispness and spiciness. Goes amazingly well with cold curd rice.' }
    ]
  },
  {
    id: 'shv-sem-01',
    name: 'SHIVALA Roasted Durum Wheat Semiya',
    slug: 'shivala-semiya',
    category: 'Noodles & Semiya',
    categoryId: 'noodles-semiya',
    weight: '400g',
    weightOptions: ['400g', '900g Family Pack'],
    price: 55,
    mrp: 65,
    discount: '15% OFF',
    rating: 4.8,
    reviewsCount: 110,
    isBestseller: true,
    isNew: false,
    availability: 'In Stock',
    image: '/assets/hero_banner.jpg',
    images: ['/assets/hero_banner.jpg', '/assets/family_story.jpg'],
    shortDescription: 'Golden double-roasted vermicelli made from 100% premium Durum Wheat Semolina.',
    description: 'Golden double-roasted vermicelli made from 100% premium Durum Wheat Semolina. Non-sticky texture ideal for Upma, Kheer, Payasam, and savory breakfast dishes.',
    ingredientsPlaceholder: '100% Hard Wheat Semolina (Soji).',
    storageInfo: 'Store in dry place in an airtight container.',
    packagingInfo: 'Moisture-proof poly pack.',
    shippingInfo: 'Dispatched within 24 hours.',
    highlights: ['Non-Sticky Texture', 'Double Roasted', 'High Fiber Durum Wheat', 'Quick 5-Min Cooking'],
    tags: ['semiya', 'vermicelli', 'upma', 'payasam', 'roasted semiya', 'durum wheat'],
    reviews: [
      { id: 1, name: 'Priya N.', rating: 5, date: '2026-09-22', comment: 'Non-sticky and cooks super fast. Made Payasam for Festival and everyone loved it.' }
    ]
  },
  {
    id: 'shv-ndl-01',
    name: 'SHIVALA Multi-Millet Healthy Noodles',
    slug: 'shivala-millet-noodles',
    category: 'Noodles & Semiya',
    categoryId: 'noodles-semiya',
    weight: '200g',
    weightOptions: ['200g', '400g'],
    price: 80,
    mrp: 95,
    discount: '16% OFF',
    rating: 4.6,
    reviewsCount: 45,
    isBestseller: false,
    isNew: true,
    availability: 'In Stock',
    image: '/assets/hero_banner.jpg',
    images: ['/assets/hero_banner.jpg', '/assets/appalam.jpg'],
    shortDescription: 'Nutritious noodle strands made with Ragi, Foxtail, and Pearl Millet with natural tastemaker.',
    description: 'Nutritious noodle strands formulated with a blend of Finger Millet (Ragi), Foxtail Millet, and Pearl Millet. Comes with a natural spice blend pouch.',
    ingredientsPlaceholder: 'Millet Flour (Ragi, Thinai, Kambu), Wheat Flour, Tastemaker Spice Blend.',
    storageInfo: 'Store in a cool dry area.',
    packagingInfo: 'Packaged with spice pouch.',
    shippingInfo: 'Dispatched within 24 hours.',
    highlights: ['Maida-Free Option', 'High Dietary Fiber', 'No MSG or Added Preservatives', 'Wholesome Family Meal'],
    tags: ['millet noodles', 'ragi noodles', 'healthy breakfast', 'millet', 'noodle pack'],
    reviews: [
      { id: 1, name: 'Deepa V.', rating: 4, date: '2026-09-14', comment: 'Great healthy alternative to instant noodles. Kids enjoyed it without complaints.' }
    ]
  },
  {
    id: 'shv-pja-01',
    name: 'SHIVALA Bhimseni Pure Camphor (Karpuram)',
    slug: 'shivala-bhimseni-camphor',
    category: 'Pooja Products',
    categoryId: 'pooja-products',
    weight: '100g',
    weightOptions: ['100g', '250g Jar'],
    price: 120,
    mrp: 140,
    discount: '14% OFF',
    rating: 4.9,
    reviewsCount: 156,
    isBestseller: true,
    isNew: false,
    availability: 'In Stock',
    image: '/assets/appalam.jpg',
    images: ['/assets/appalam.jpg', '/assets/vathal.jpg'],
    shortDescription: '100% Pure organic Bhimseni camphor flakes for holy rituals and evening Aarti.',
    description: '100% Pure organic Bhimseni camphor flakes for holy rituals and evening Aarti. Burns cleanly without black soot, dispersing a divine soothing aroma.',
    ingredientsPlaceholder: '100% Pure Edible Grade Pine Tree Extract Camphor (Isoborneol).',
    storageInfo: 'Keep jar tightly closed in a cool place away from flame.',
    packagingInfo: 'Airtight PET Jar.',
    shippingInfo: 'Dispatched within 24 hours.',
    highlights: ['Zero Residue Smoke', 'Natural Pine Tree Source', 'Long-lasting Fragrance', 'Divine Energy'],
    tags: ['camphor', 'bhimseni', 'karpuram', 'pooja', 'aarti', 'pure camphor'],
    reviews: [
      { id: 1, name: 'Ganesh M.', rating: 5, date: '2026-09-25', comment: 'Pure aroma with zero soot residue. Best camphor for daily morning prayer.' }
    ]
  },
  {
    id: 'shv-pja-02',
    name: 'SHIVALA Natural Herbal Agarbatti Pack',
    slug: 'shivala-herbal-agarbatti',
    category: 'Pooja Products',
    categoryId: 'pooja-products',
    weight: '250g',
    weightOptions: ['250g Box'],
    price: 99,
    mrp: 120,
    discount: '18% OFF',
    rating: 4.8,
    reviewsCount: 78,
    isBestseller: false,
    isNew: true,
    availability: 'In Stock',
    image: '/assets/appalam.jpg',
    images: ['/assets/appalam.jpg', '/assets/family_story.jpg'],
    shortDescription: 'Charcoal-free incense sticks hand-rolled with upcycled temple flowers and natural oils.',
    description: 'Charcoal-free incense sticks hand-rolled with temple flower extracts, natural gums, and aromatic essential oils. Calming atmosphere for prayer and meditation.',
    ingredientsPlaceholder: 'Upcycled Temple Flowers, Natural Tree Gums, Essential Fragrance Oils, Bamboo Stick.',
    storageInfo: 'Store in dry place.',
    packagingInfo: 'Eco-friendly cardboard box container.',
    shippingInfo: 'Dispatched within 24 hours.',
    highlights: ['Charcoal Free', 'Soothes Mind & Soul', 'Eco-Friendly Packaging', '45 Min Burn Duration'],
    tags: ['agarbatti', 'incense sticks', 'pooja', 'herbal incense', 'temple flower'],
    reviews: [
      { id: 1, name: 'Meenakshi S.', rating: 5, date: '2026-09-12', comment: 'Pleasant natural scent that lingers softly for hours.' }
    ]
  },
  {
    id: 'shv-hsh-01',
    name: 'SHIVALA Natural Neem & Dishwashing Cleaner',
    slug: 'shivala-neem-dishwash',
    category: 'Household Essentials',
    categoryId: 'household-essentials',
    weight: '500ml',
    weightOptions: ['500ml', '1 Litre Refill'],
    price: 110,
    mrp: 130,
    discount: '15% OFF',
    rating: 4.7,
    reviewsCount: 52,
    isBestseller: false,
    isNew: true,
    availability: 'In Stock',
    image: '/assets/family_story.jpg',
    images: ['/assets/family_story.jpg', '/assets/hero_banner.jpg'],
    shortDescription: 'Plant-powered tough grease-cleansing liquid infused with active Neem and Lemon extracts.',
    description: 'Plant-powered tough grease-cleansing liquid infused with active Neem and Lemon extracts. Gentle on hands while leaving cookware squeaky clean and odor-free.',
    ingredientsPlaceholder: 'Plant Surfactants, Neem Bark Extract, Organic Lemon Essential Oil, Purified Water.',
    storageInfo: 'Keep out of direct sunlight.',
    packagingInfo: 'Recyclable bottle with leak-proof cap.',
    shippingInfo: 'Dispatched within 24 hours.',
    highlights: ['Plant-Based Cleaners', 'Gentle on Hands', 'Tough on Oil Grease', 'Fresh Citrus Scent'],
    tags: ['dishwash', 'neem cleaner', 'household', 'kitchen cleaner', 'natural wash'],
    reviews: [
      { id: 1, name: 'Shanthi B.', rating: 5, date: '2026-09-08', comment: 'Cuts through oily stainless steel utensils effortlessly. Gentle on hands.' }
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Lakshmi Ramachandran',
    city: 'Chennai, Tamil Nadu',
    rating: 5,
    text: 'Good quality and the packaging is very neat. The appalams puff up evenly without absorbing excess oil. Feels like traditional homemade food.',
    verified: true
  },
  {
    id: 2,
    name: 'Karthik Subburaj',
    city: 'Madurai, Tamil Nadu',
    rating: 5,
    text: 'Feels like a trusted local product with a modern touch. The small onion vadagam has that nostalgic grandma curry flavor. Prompt delivery too!',
    verified: true
  },
  {
    id: 3,
    name: 'Ananya Meenakshi',
    city: 'Coimbatore, Tamil Nadu',
    rating: 5,
    text: 'The Sundakkai Vathal quality is top notch. Crisp, perfectly salted and clean. Super excited that SHIVALA is expanding into online delivery.',
    verified: true
  },
  {
    id: 4,
    name: 'R. Senthil Kumar',
    city: 'Trichy, Tamil Nadu',
    rating: 5,
    text: 'We bought SHIVALA roasted semiya in bulk for our family function. Everybody praised the non-sticky texture. A brand with real family integrity.',
    verified: true
  }
];

export const FAQS = [
  {
    q: 'Where can I buy SHIVALA products?',
    a: 'You can order directly from our online website store (shivalabrand.com), order via WhatsApp, or find SHIVALA products in leading neighborhood retail shops and supermarkets across Tamil Nadu.'
  },
  {
    q: 'Do you offer wholesale and bulk ordering for businesses?',
    a: 'Yes! We actively supply supermarkets, grocery stores, hotels, mess facilities, wedding caterers, and regional distributors. Please visit our Wholesale page or submit an inquiry for custom bulk pricing.'
  },
  {
    q: 'Do you deliver outside Tamil Nadu?',
    a: 'Yes, we ship our packaged consumer products across India via reliable courier partners. Orders above ₹499 qualify for FREE doorstep delivery.'
  },
  {
    q: 'How can I become an authorized SHIVALA distributor or retail partner?',
    a: 'We are expanding our retail distribution network! Submit your business details on our Wholesale page or contact our business development team via WhatsApp or email.'
  },
  {
    q: 'How can I contact customer support?',
    a: 'Our customer care team is available Monday through Saturday (9:00 AM – 7:00 PM IST). You can WhatsApp us, call our hotline, or email hello@shivalabrand.com.'
  },
  {
    q: 'How can I request a new product category or provide feedback?',
    a: 'We love hearing from our community! Use our Contact Us form or message us directly on WhatsApp with product suggestions. As a growing family brand, customer requests guide our future product launches.'
  }
];
