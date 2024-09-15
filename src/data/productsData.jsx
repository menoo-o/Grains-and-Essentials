

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
    imgSrc: '/shop/Grains and Flour/rice_flour.webp',
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
  },

  {
    id: 11,
    imgSrc: '/shop/Baking/cocoa_powder.webp',
    title: 'Cocoa Powder',
    slug: 'cocoa-powder',
    price: '$75',
    category: 'Baking',
    description: 'Rich, Dutch-processed cocoa powder perfect for baking, making chocolate desserts, and hot chocolate.',
    ingredients: ['Cocoa Solids'],
    nutritionalValue: {
      calories: '120 kcal',
      protein: '2g',
      fat: '7g',
      carbohydrates: '15g',
      fiber: '2g',
    },
    shelfLife: '24 months',
  },

  {
    id: 12,
    imgSrc: '/shop/Baking/maida.webp',
    title: 'Maida',
    slug: 'maida',
    price: '$40',
    category: 'Baking',
    description: 'Refined wheat flour, also known as all-purpose flour, perfect for making cakes, pastries, and other baked goods.',
    ingredients: ['Refined Wheat'],
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
    id: 13,
    imgSrc: '/shop/Baking/yeast.webp',
    title: 'Yeast',
    slug: 'yeast',
    price: '$10',
    category: 'Baking',
    description: 'Active dry yeast for fermentation, perfect for making bread, cakes, and other baked goods.',
    ingredients: ['Yeast (Saccharomyces cerevisiae)'],
    nutritionalValue: {
      calories: '20 kcal',
      protein: '3g',
      fat: '0g',
      carbohydrates: '4g',
      fiber: '0g',
    },
    shelfLife: '2 years',
  },
  
  
  {
    id: 14,
    imgSrc: '/shop/Baking/vanilla_essence.webp',
    title: 'Vanilla Extract',
    slug:'vanilla-extract',
    price: '$5',
    category: 'Baking',
    description: 'Pure vanilla extract, perfect for adding flavor to baked goods, desserts, and ice cream.',
    ingredients: ['Vanilla Beans', 'Ethyl Alcohol'],
    nutritionalValue: {
      calories: '12 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '3g',
      fiber: '0g',
    },
    shelfLife: '5 years',
  },
  
  
  {
    id: 15,
    imgSrc: '/shop/Baking/kewra_essence.webp',
    title: 'Kewra Extract',
    slug:'kewra-extract',
    price: '$5',
    category: 'Baking',
    description: 'Kewra (screw pine) extract, commonly used in Indian desserts and beverages for its unique flavor and aroma.',
    ingredients: ['Kewra Flowers', 'Ethyl Alcohol'],
    nutritionalValue: {
      calories: '10 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '2g',
      fiber: '0g',
    },
    shelfLife: '5 years',
  },

  {
    id: 16,
    imgSrc: '/shop/lentils/chana_daal.webp',
    title: 'Chana Daal',
    slug:'chana-daal',
    price: '$8',
    category: 'Lentils',
    description: 'Split Bengal gram, commonly used in Indian cuisine for making curries, stews, and dal.',
    ingredients: ['Split Bengal Gram'],
    nutritionalValue: {
      calories: '370 kcal',
      protein: '20g',
      fat: '5g',
      carbohydrates: '60g',
      fiber: '10g',
    },
    shelfLife: '12 months',
  },
  
  
  {
    id: 17,
    imgSrc: '/shop/lentils/green_grams.webp',
    title: 'Green Grams',
    slug: 'green-grams',
    price: '$9',
    category: 'Lentils',
    description: 'Whole green gram, rich in protein and fiber, perfect for making curries, salads, and stir-fries.',
    ingredients: ['Whole Green Gram'],
    nutritionalValue: {
      calories: '340 kcal',
      protein: '22g',
      fat: '2g',
      carbohydrates: '55g',
      fiber: '8g',
    },
    shelfLife: '12 months',
  },
  
  
  {
    id: 18,
    imgSrc: '/shop/lentils/kalay_chanay.webp',
    title: 'Black Chickpeas',
    slug:'black-chickpeas',
    price: '$140',
    category: 'Lentils',
    description: 'Whole black chickpeas, rich in protein and fiber, perfect for making curries, stews, and salads.',
    ingredients: ['Whole Black Chickpeas'],
    nutritionalValue: {
      calories: '360 kcal',
      protein: '20g',
      fat: '4g',
      carbohydrates: '60g',
      fiber: '10g',
    },
    shelfLife: '12 months',
  },
  
  
  {
    id: 19,
    imgSrc: '/shop/lentils/kidney_beans.webp',
    title: 'Kidney Beans',
    slug:'kidney-beans',
    price: '$360',
    category: 'Lentils',
    description: 'Red kidney beans, rich in protein and fiber, perfect for making curries, stews, and salads.',
    ingredients: ['Red Kidney Beans'],
    nutritionalValue: {
      calories: '340 kcal',
      protein: '22g',
      fat: '1g',
      carbohydrates: '55g',
      fiber: '8g',
    },
    shelfLife: '12 months',
  },
  
  
  {
    id: 20,
    imgSrc: '/shop/lentils/masar_daal_sabit.webp',
    title: 'Masar Sabit',
    slug:'masar-sabit',
    price: '$110',
    category: 'Lentils',
    description: 'Whole masoor dal, rich in protein and fiber, perfect for making curries, stews, and dal.',
    ingredients: ['Whole Masoor Dal'],
    nutritionalValue: {
      calories: '350 kcal',
      protein: '20g',
      fat: '2g',
      carbohydrates: '60g',
      fiber: '10g',
    },
    shelfLife: '12 months',
  },
  
  
  {
    id: 21,
    imgSrc: '/shop/lentils/mash_black_gram.webp',
    title: 'Black Gram',
    slug: 'black-gram',
    price: '$170',
    category: 'Lentils',
    description: 'Whole black gram, rich in protein and fiber, perfect for making curries, stews, and dal.',
    ingredients: ['Whole Black Gram'],
    nutritionalValue: {
      calories: '360 kcal',
      protein: '20g',
      fat: '4g',
      carbohydrates: '60g',
      fiber: '10g',
    },
    shelfLife: '12 months',
  },
  
  
  {
    id: 22,
    imgSrc: '/shop/lentils/red_lentils.webp',
    title: 'Red Lentils',
    slug:'red-lentils',
    price: '$50',
    category: 'Lentils',
    description: 'Split red lentils, commonly used in Indian cuisine for making curries, stews, and dal.',
    ingredients: ['Split Red Lentils'],
    nutritionalValue: {
      calories: '350 kcal',
      protein: '20g',
      fat: '2g',
      carbohydrates: '60g',
      fiber: '10g',
    },
    shelfLife: '12 months',
  },
  
  
  {
    id: 23,
    imgSrc: '/shop/lentils/safaid_channay.webp',
    title: 'Safaid Channay',
    slug:'safaid-channay',
    price: '$15',
    category: 'Lentils',
    description: 'White chickpeas, rich in protein and fiber, perfect for making curries, stews, and salads.',
    ingredients: ['White Chickpeas'],
    nutritionalValue: {
      calories: '360 kcal',
      protein: '20g',
      fat: '4g',
      carbohydrates: '60g',
      fiber: '10g',
    },
    shelfLife: '12 months',
  },
  
  
  {
    id: 24,
    imgSrc: '/shop/lentils/white_lobia.webp',
    title: 'White Lobia',
    slug:'white-lobia',
    price: '$98',
    category: 'Lentils',
    description: 'White cowpeas, rich in protein and fiber, perfect for making curries, stews, and salads.',
    ingredients: ['White Cowpeas'],
    nutritionalValue: {
      calories: '340 kcal',
      protein: '22g',
      fat: '2g',
      carbohydrates: '55g',
      fiber: '8g',
    },
    shelfLife: '12 months',
  },
  
  
  {
    id: 25,
    imgSrc: '/shop/lentils/yellow_lentils.webp',
    title: 'Yellow Lentils',
    slug:'yellow-lentils',
    price: '$09',
    category: 'Lentils',
    description: 'Split yellow lentils, commonly used in Indian cuisine for making curries, stews, and dal.',
    ingredients: ['Split Yellow Lentils'],
    nutritionalValue: {
      calories: '350 kcal',
      protein: '20g',
      fat: '2g',
      carbohydrates: '60g',
      fiber: '10g',
    },
    shelfLife: '12 months',
  },

  {
    id: 26,
    imgSrc: '/shop/rice/brown_rice.webp',
    title: 'Brown Rice',
    slug: 'brown-rice',
    price: '$49',
    category: 'Rice',
    description: 'Whole grain brown rice, rich in fiber and nutrients, perfect for healthy meals.',
    ingredients: ['Brown Rice'],
    nutritionalValue: {
      calories: '110 kcal',
      protein: '2g',
      fat: '1g',
      carbohydrates: '25g',
      fiber: '3g',
    },
    shelfLife: '18 months',
  },
  
  
  {
    id: 27,
    imgSrc: '/shop/rice/extra_long_basmati.webp',
    title: 'Extra Long Basmati',
    slug:'extra-long-basmati',
    price: '$78',
    category: 'Rice',
    description: 'Aromatic, long-grain basmati rice, perfect for special occasions and flavorful dishes.',
    ingredients: ['Basmati Rice'],
    nutritionalValue: {
      calories: '150 kcal',
      protein: '3g',
      fat: '0g',
      carbohydrates: '35g',
      fiber: '0g',
    },
    shelfLife: '24 months',
  },
  
  
  {
    id: 28,
    imgSrc: '/shop/rice/sella_rice.webp',
    title: 'Sella Rice',
    slug:'sella-rice',
    price: '$39',
    category: 'Rice',
    description: 'Parboiled, long-grain rice, perfect for everyday meals and nutritious dishes.',
    ingredients: ['Parboiled Rice'],
    nutritionalValue: {
      calories: '130 kcal',
      protein: '2g',
      fat: '0g',
      carbohydrates: '30g',
      fiber: '1g',
    },
    shelfLife: '18 months',
  },
  
  
  {
    id: 29,
    imgSrc: '/shop/rice/steamed_rice.webp',
    title: 'Steamed Rice',
    slug:'steamed-rice',
    price: '$29',
    category: 'Rice',
    description: 'Pre-cooked, steamed rice, perfect for convenient and healthy meals.',
    ingredients: ['Steamed Rice'],
    nutritionalValue: {
      calories: '120 kcal',
      protein: '2g',
      fat: '0g',
      carbohydrates: '25g',
      fiber: '0g',
    },
    shelfLife: '12 months',
  },
  
  
  {
    id: 30,
    imgSrc: '/shop/rice/super_basmati.webp',
    title: 'Super Basmati',
    slug:'super-basmati',
    price: '$18',
    category: 'Rice',
    description: 'Premium, aromatic basmati rice, perfect for special occasions and flavorful dishes.',
    ingredients: ['Basmati Rice'],
    nutritionalValue: {
      calories: '150 kcal',
      protein: '3g',
      fat: '0g',
      carbohydrates: '35g',
      fiber: '0g',
    },
    shelfLife: '24 months',
  },

  {
    id: 31,
    imgSrc: '/shop/sugar/brown-sugar.webp',
    title: 'Brown Sugar',
    slug:'brown-sugar',
    price: '$58',
    category: 'Sugar',
    description: 'Unrefined, soft brown sugar with a rich caramel flavor, perfect for baking and cooking.',
    ingredients: ['Sugar Cane', 'Molasses'],
    nutritionalValue: {
      calories: '380 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '99g',
      fiber: '0g',
    },
    shelfLife: '24 months',
  },
  
  
  {
    id: 32,
    imgSrc: '/shop/sugar/gurr.webp',
    title: 'Gurr',
    slug:'gurr',
    price: '$1000',
    category: 'Sugar',
    description: 'Unrefined, crude sugar made from sugarcane juice, commonly used in traditional medicine and cooking.',
    ingredients: ['Sugarcane Juice'],
    nutritionalValue: {
      calories: '380 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '99g',
      fiber: '0g',
    },
    shelfLife: '12 months',
  },
  
  
  {
    id: 33,
    imgSrc: '/shop/sugar/honey.webp',
    title: 'Honey',
    slug:'honey',
    price: '$98',
    category: 'Sugar',
    description: 'Pure, natural honey with antibacterial properties, perfect for sweetening and cooking.',
    ingredients: ['Honey'],
    nutritionalValue: {
      calories: '330 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '82g',
      fiber: '0g',
    },
    shelfLife: 'Indefinite',
  },
  
  
  {
    id: 34,
    imgSrc: '/shop/sugar/icing_sugar.webp',
    title: 'Icing Sugar',
    slug:'icing-sugar',
    price: '$74',
    category: 'Sugar',
    description: 'Finely powdered sugar, perfect for decorating cakes, pastries, and desserts.',
    ingredients: ['Sugar'],
    nutritionalValue: {
      calories: '380 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '99g',
      fiber: '0g',
    },
    shelfLife: '24 months',
  },
  
  
  {
    id: 35,
    imgSrc: '/shop/sugar/shakar.webp',
    title: 'Shakar',
    slug:'shakar',
    price: '$51',
    category: 'Sugar',
    description: 'Unrefined, crystalline sugar, commonly used in traditional Pakistani cooking and medicine.',
    ingredients: ['Sugarcane Juice'],
    nutritionalValue: {
      calories: '380 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '99g',
      fiber: '0g',
    },
    shelfLife: '12 months',
  },
  
  
  {
    id: 36,
    imgSrc: '/shop/sugar/sugar.webp',
    title: 'White Sugar',
    slug: 'white-sugar',
    price: '$200',
    category: 'Sugar',
    description: 'Refined, granulated sugar, perfect for everyday use in cooking and baking.',
    ingredients: ['Sugar Cane', 'Sugar Beets'],
    nutritionalValue: {
      calories: '380 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '99g',
      fiber: '0g',
    },
    shelfLife: '24 months',
  },

  {
    id: 37,
    imgSrc: '/shop/storage/plastic/01.webp',
    title: 'Plastic Round Jar - 100ml',
    slug:'plastic-roundjar-100ml',
    price: '$45',
    category: 'Storage',
    description: 'Food-grade, BPA-free plastic jar for storing spices, herbs, or other small items.',
    ingredients: ['Plastic'],
    nutritionalValue: {
      calories: '0 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '0g',
      fiber: '0g',
    },
    shelfLife: 'Indefinite',
    capacity: '100ml',
    material: 'Plastic',
  },
  
  
  {
    id: 38,
    imgSrc: '/shop/storage/plastic/02.webp',
    title: 'Plastic Round Jar - 200ml',
    slug:'plastic-roundjar-200ml',
    price: '$65',
    category: 'Storage',
    description: 'Food-grade, BPA-free plastic jar for storing spices, herbs, or other small items.',
    ingredients: ['Plastic'],
    nutritionalValue: {
      calories: '0 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '0g',
      fiber: '0g',
    },
    shelfLife: 'Indefinite',
    capacity: '200ml',
    material: 'Plastic',
  },
  
  
  {
    id: 39,
    imgSrc: '/shop/storage/plastic/03.webp',
    title: 'Plastic Round Jar - 300ml',
    slug:'plastic-roundjar-300ml',
    price: '$85',
    category: 'Storage',
    description: 'Food-grade, BPA-free plastic jar for storing spices, herbs, or other small items.',
    ingredients: ['Plastic'],
    nutritionalValue: {
      calories: '0 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '0g',
      fiber: '0g',
    },
    shelfLife: 'Indefinite',
    capacity: '300ml',
    material: 'Plastic',
  },
  
  
  {
    id: 40,
    imgSrc: '/shop/storage/plastic/04.webp',
    title: 'Plastic Round Jar - 500ml',
    slug:'plastic-roundjar-500ml',
    price: '$100',
    category: 'Storage',
    description: 'Food-grade, BPA-free plastic jar for storing spices, herbs, or other small items.',
    ingredients: ['Plastic'],
    nutritionalValue: {
      calories: '0 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '0g',
      fiber: '0g',
    },
    shelfLife: 'Indefinite',
    capacity: '500ml',
    material: 'Plastic',
  },
  
  
  {
    id: 41,
    imgSrc: '/shop/storage/plastic/05.webp',
    title: 'Plastic Round Jar - 1 ltr',
    slug:'plastic-roundjar-1ltr',
    price: '$120',
    category: 'Storage',
    description: 'Food-grade, BPA-free plastic jar for storing spices, herbs, or other small items.',
    ingredients: ['Plastic'],
    nutritionalValue: {
      calories: '0 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '0g',
      fiber: '0g',
    },
    shelfLife: 'Indefinite',
    capacity: '1 ltr',
    material: 'Plastic',
  },

  {
    id: 42,
    imgSrc: '/shop/storage/glass/01.webp',
    title: 'Glass Mini Jar',
    slug:'glass-mini-jar',
    price: '$120',
    category: 'Storage',
    description: 'Small, decorative glass jar for storing spices, herbs, or other tiny items.',
    ingredients: ['Glass'],
    nutritionalValue: {
      calories: '0 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '0g',
      fiber: '0g',
    },
    shelfLife: 'Indefinite',
    capacity: 'Mini',
    material: 'Glass',
  },
  
  
  {
    id: 43,
    imgSrc: '/shop/storage/glass/02.webp',
    title: 'Glass Mason Jar - 350ml',
    slug:'glass-mason-jar-350ml',
    price: '$140',
    category: 'Storage',
    description: 'Airtight, glass mason jar for storing food, spices, or other household items.',
    ingredients: ['Glass'],
    nutritionalValue: {
      calories: '0 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '0g',
      fiber: '0g',
    },
    shelfLife: 'Indefinite',
    capacity: '350ml',
    material: 'Glass',
  },
  
  
  {
    id: 44,
    imgSrc: '/shop/storage/glass/03.webp',
    title: 'Glass Mason Jar - 500ml',
    slug:'glass-mason-jar-500ml',
    price: '$160',
    category: 'Storage',
    description: 'Airtight, glass mason jar for storing food, spices, or other household items.',
    ingredients: ['Glass'],
    nutritionalValue: {
      calories: '0 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '0g',
      fiber: '0g',
    },
    shelfLife: 'Indefinite',
    capacity: '500ml',
    material: 'Glass',
  },
  
  
  {
    id: 45,
    imgSrc: '/shop/storage/glass/04.webp',
    title: 'Glass Mason Jar - 1 ltr',
    slug:'glass-mason-jar-1ltr',
    price: '$220',
    category: 'Storage',
    description: 'Airtight, glass mason jar for storing food, spices, or other household items.',
    ingredients: ['Glass'],
    nutritionalValue: {
      calories: '0 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '0g',
      fiber: '0g',
    },
    shelfLife: 'Indefinite',
    capacity: '1 ltr',
    material: 'Glass',
  },
  
  
  {
    id: 46,
    imgSrc: '/shop/storage/tote_bag.png',
    title: 'Tote Bag',
    slug:'tote-bag',
    price: '$20',
    category: 'Storage',
    description: 'Reusable, sturdy tote bag for carrying groceries, books, or other items.',
    ingredients: ['Cotton', 'Canvas'],
    nutritionalValue: {
      calories: '0 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '0g',
      fiber: '0g',
    },
    shelfLife: 'Indefinite',
    material: 'Cotton, Canvas',
    dimensions: '40cm x 30cm x 10cm',
  }


  // Add more products...
];

export default products;