

const products = [
  {
    id: 1,
    imgSrc: '/shop/Grains and Flour/barley_flour.webp',
    title: 'Barley Flour',
    slug: 'barley-flour', // SEO-friendly slug
    price: '$10',
    category: 'Grains & Flour',
    description: 'A healthy and nutritious flour made from barley.',
    ingredients: ['Barley'],
    nutritionalValue: {
      calories: '350 kcal',
      protein: '10g',
      fat: '1g',
      carbohydrates: '75g',
      fiber: '17g',
    },
    shelfLife: '12 months',
  },
  {
    id: 2,
    imgSrc: '/shop/rice/rice flour.webp',
    title: 'Rice Flour',
    slug: 'rice-flour', // SEO-friendly slug
    price: '$12',
    category: 'Grains & Flour',
    description: 'Fine flour made from rice, perfect for gluten-free baking.',
    ingredients: ['Rice'],
    nutritionalValue: {
      calories: '370 kcal',
      protein: '7g',
      fat: '1.3g',
      carbohydrates: '80g',
      fiber: '3g',
    },
    shelfLife: '9 months',
  },
  {
    id: 4,
    imgSrc: '/shop/Grains and Flour/besan.webp',
    title: 'Besan',
    slug: 'besan', // SEO-friendly slug
    price: '$10',
    category: 'Grains & Flour',
    description: 'A type of gram flour made from chickpeas or chana dal.',
    ingredients: ['Chickpeas or Chana Dal'],
    nutritionalValue: {
      calories: '380 kcal',
      protein: '20g',
      fat: '6g',
      carbohydrates: '60g',
      fiber: '10g',
    },
    shelfLife: '12 months',
  },

  {
    id: 6,
    imgSrc: '/shop/Grains and Flour/chakki_atta.webp',
    title: 'Chakki Atta',
    slug:"chakki-atta",
    price: '$250',
    category: 'Grains & Flour',
    description: 'Whole wheat flour made from grinding whole wheat grains, perfect for making chapatis and other Indian flatbreads.',
    ingredients: ['Whole Wheat'],
    nutritionalValue: {
      calories: '340 kcal',
      protein: '12g',
      fat: '2g',
      carbohydrates: '70g',
      fiber: '10g',
    },
    shelfLife: '6 months',
  },

  {
    id: 7,
    imgSrc: '/shop/Grains and Flour/corn_flour.webp',
    title: 'Corn Flour',
    slug: 'corn-flour',
    price: '$10',
    category: 'Grains & Flour',
    description: 'Fine powder made from corn, perfect for baking, thickening sauces, and coating foods.',
    ingredients: ['Corn'],
    nutritionalValue: {
      calories: '370 kcal',
      protein: '2g',
      fat: '1g',
      carbohydrates: '85g',
      fiber: '2g',
    },
    shelfLife: '12 months',
  },

  {
    id: 8,
    imgSrc: '/shop/Grains and Flour/fine_atta.webp',
    title: 'Refined Flour',
    slug: 'refined-flour',
    price: '$450',
    category: 'Grains & Flour',
    description: 'Fine, soft, and silky flour made from wheat grains, perfect for baking delicate pastries, cakes, and cookies.',
    ingredients: ['Wheat'],
    nutritionalValue: {
      calories: '360 kcal',
      protein: '10g',
      fat: '1g',
      carbohydrates: '75g',
      fiber: '2g',
    },
    shelfLife: '9 months',
  },

  {
    id: 9,
    imgSrc: '/shop/Grains and Flour/millet_flour.webp',
    title: 'Millet Flour',
    slug: 'millet-flour',
    price: '$10',
    category: 'Grains & Flour',
    description: 'Nutritious and gluten-free flour made from millet grains, perfect for making flatbreads, porridges, and baked goods.',
    ingredients: ['Millet'],
    nutritionalValue: {
      calories: '380 kcal',
      protein: '8g',
      fat: '2g',
      carbohydrates: '70g',
      fiber: '5g',
    },
    shelfLife: '12 months',
  },

  {
    id: 10,
    imgSrc: '/shop/Grains and Flour/sabudana.webp',
    title: 'Sabudana',
    slug: 'sabudana',
    price: '$90',
    category: 'Grains & Flour',
    description: 'Tapioca pearls made from cassava root, commonly used in Indian cuisine for fasting dishes, desserts, and savory snacks.',
    ingredients: ['Tapioca (Cassava Root)'],
    nutritionalValue: {
      calories: '360 kcal',
      protein: '2g',
      fat: '0.5g',
      carbohydrates: '85g',
      fiber: '2g',
    },
    shelfLife: '18 months',
  },

  {
    id: 11,
    imgSrc: '/shop/Grains and Flour/Oats.webp',
    title: 'Oats',
    slug: 'oats',
    price: '$25',
    category: 'Grains & Flour',
    description: 'Whole grain oats rich in fiber, perfect for oatmeal, baking, and healthy breakfast options.',
    ingredients: ['Whole Grain Oats'],
    nutritionalValue: {
      calories: '389 kcal',
      protein: '11g',
      fat: '7g',
      carbohydrates: '66g',
      fiber: '11g',
    },
    shelfLife: '12 months',
  },

  {
    id: 12,
    imgSrc: '/shop/Baking/baking_powder.webp',
    title: 'Baking Powder',
    price: '$100',
    category: 'Baking',
    description: 'A leavening agent used in baking, made from baking soda, cream of tartar, and cornstarch, perfect for cakes, cookies, and quick breads.',
    ingredients: ['Baking Soda', 'Cream of Tartar', 'Cornstarch'],
    nutritionalValue: {
      calories: '0 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '0g',
      fiber: '0g',
    },
    shelfLife: '12 months',
  }



  // Add more products...
];

export default products;