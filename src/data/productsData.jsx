// src/data/productsData.js

const products = [

  {
    id: 1,
    imgSrc: '/shop/Grains and Flour/barley_flour.webp',
    title: 'Barley Flour',
    price: '$10',
    category: 'Grains & Flour',
    description: 'Our Barley Flour is a wholesome and nutritious ingredient made from high-quality barley grains. It has a light, creamy color and a mild, slightly sweet flavor. Ideal for baking bread, cakes, cookies, and pastries, it can be used as a substitute for wheat flour in many recipes. Barley flour is rich in fiber, protein, and essential minerals like potassium and iron, and is lower in calories and gluten compared to wheat flour.',
    ingredients: ['Organic Barley Flour (100%)'],
    nutritionalValue: {
      calories: '350 kcal',
      protein: '10g',
      fat: '1g',
      carbohydrates: '75g',
      fiber: '17g',
    },
    shelfLife: 'Store in an airtight container in a cool, dry place away from direct sunlight and moisture. This product has a shelf life of 12 months from the packaging date; once bought, use within 3 months for optimal freshness.',
  },

  {
    id: 8,
    imgSrc: '/shop/rice/rice flour.webp',
    title: 'Rice Flour',
    price: '$12',
    category: 'Grains & Flour',
    description: "Our Rice Flour is a fine, gluten-free ingredient made from high-quality rice grains. It has a light, neutral flavor and is perfect for baking gluten-free bread, cakes, cookies, and pastries. Rich in carbohydrates and low in fat, it's an excellent option for those with dietary restrictions.",
    ingredients: ['Organic White Rice Flour 100%'],
    nutritionalValue: {
      calories: '370 kcal',
      protein: '7g',
      fat: '1.3g',
      carbohydrates: '80g',
      fiber: '3g',
    },
    shelfLife: '9 months from packaging date. Store in an airtight container in a cool, dry place away from direct sunlight and moisture. Once opened, use within 3 months for optimal freshness.',
  },

  {
    id: 8,
    imgSrc: '/shop/Grains and Flour/besan.webp',
    title: 'Besan',
    price: '$10',
    category: 'Grains & Flour',
    description: "Our Besan is a high-quality gram flour made from chickpeas or chana dal, ideal for making delicious vegetarian dishes, snacks, and sweets. Rich in protein and fiber, it's a nutritious addition to your kitchen. Perfect for making pakoras, dhoklas, and other Indian recipes.",
    ingredients: ['Chickpea Dal'],
    nutritionalValue: {
      calories: '380 kcal',
      protein: '20g',
      fat: '6g',
      carbohydrates: '60g',
      fiber: '10g',
    },
    shelfLife: '12 months from packaging date. Store in an airtight container in a cool, dry place. Once opened, use within 3 months for optimal freshness.',
  },
  // Chakki Atta
  {
    id: 9,
    imgSrc: '/shop/Grains and Flour/chakki atta.webp',
    title: 'Chakki Atta',
    price: '$250',
    category: 'Grains & Flour',
    description: "Our Chakki Atta is a whole wheat flour made from grinding entire wheat grains, retaining nutrients and fiber. Perfect for making soft chapatis, parathas, and other Indian flatbreads. Rich in dietary fiber, iron, and essential minerals.",
    ingredients: ['Organic Whole Wheat flour 100%'],
    nutritionalValue: {
      calories: '340 kcal',
      protein: '12g',
      fat: '2g',
      carbohydrates: '70g',
      fiber: '10g',
    },
    shelfLife: '6 months from packaging date. Store in an airtight container in a cool, dry place. Once opened, use within 2 months for optimal freshness.',
  },
  // Corn Flour
  {
    id: 10,
    imgSrc: '/shop/Grains and Flour/corn flour.webp',
    title: 'Corn Flour',
    price: '$10',
    description: 'Our Corn Flour is a fine, gluten-free powder made from high-quality corn grains. Ideal for baking, thickening sauces, and coating foods. Rich in carbohydrates and low in fat.',
    ingredients: ['Corn Grain Powder'],
    shelfLife: '12 months from packaging date. Store in an airtight container in a cool, dry place. Once opened, use within 3 months for optimal freshness.',
    category: 'Grains & Flour',
    nutritionalValue: {
      calories: '370 kcal',
      protein: '2g',
      fat: '1g',
      carbohydrates: '85g',
      fiber: '2g',
    },
  },
  
  // Refined Flour
  {
    id: 11,
    imgSrc: '/shop/Grains and Flour/fine atta.webp',
    title: 'Refined Flour',
    price: '$450',
    category: 'Grains & Flour',
    description: 'Our Refined Flour is a fine, soft, and silky flour made from wheat grains, perfect for baking delicate pastries, cakes, and cookies. Low in fiber and rich in carbohydrates.',
    ingredients: ['Wheat Grain Flour'],
    shelfLife: '9 months from packaging date. Store in an airtight container in a cool, dry place. Once opened, use within 2 months for optimal freshness.',
    nutritionalValue: {
      calories: '360 kcal',
      protein: '10g',
      fat: '1g',
      carbohydrates: '75g',
      fiber: '2g',
    },
  },
  // Millet Flour
  {
    id: 12,
    imgSrc: '/shop/Grains and Flour/millet_flour.webp',
    title: 'Millet Flour',
    price: '$10',
    category: 'Grains & Flour',
    description: 'Our Millet Flour is a nutritious and gluten-free flour made from millet grains, perfect for making flatbreads, porridges, and baked goods. Rich in protein, fiber, and essential minerals.',
    ingredients: ['100% Organic Millet Grain Powder'],
    shelfLife: '12 months from packaging date. Store in an airtight container in a cool, dry place. Once opened, use within 3 months for optimal freshness.',
    nutritionalValue: {
      calories: '380 kcal',
      protein: '8g',
      fat: '2g',
      carbohydrates: '70g',
      fiber: '5g',
    },
  },
  
  //Sabudana
  {
    id: 13,
    imgSrc: '/shop/Grains and Flour/sabudana.webp',
    title: 'Sabudana',
    price: '$90',
    category: 'Grains & Flour',
    description: 'Our Sabudana is made from high-quality tapioca pearls derived from cassava root. Perfect for making delicious fasting dishes, desserts, and savory snacks, these pearls are rich in carbohydrates and gluten-free.',
    ingredients: ['Tapioca (Cassava Root) Pearls'],
    shelfLife: '18 months from packaging date. Store in an airtight container in a cool, dry place. Once opened, use within 6 months for optimal freshness.',
    nutritionalValue: {
      calories: '360 kcal',
      protein: '2g',
      fat: '0.5g',
      carbohydrates: '85g',
      fiber: '2g',
    },
    
  },

  // Oats
  {
    id: 14,
    imgSrc: '/shop/Grains and Flour/Oats.webp',
    title: 'Oats',
    price: '$25',
    category: 'Grains & Flour',
    description: 'Our Oats are whole grain, rich in dietary fiber, and perfect for oatmeal, baking, and healthy breakfast options. High in protein and low in cholesterol, they support heart health and digestion.',
    ingredients: ['Whole Grain Rolled Oats'],
    shelfLife: '12 months from packaging date. Store in an airtight container in a cool, dry place. Once opened, use within 3 months for optimal freshness.',
    nutritionalValue: {
      calories: '389 kcal',
      protein: '11g',
      fat: '7g',
      carbohydrates: '66g',
      fiber: '11g',
    },
  },

  //Baking Powder
  {
    id: 1,
    imgSrc: '/shop/Baking/baking powder.webp',
    title: 'Baking Powder',
    price: '$100',
    category: 'Baking',
    description: 'Our Baking Powder is a high-quality leavening agent, perfect for cakes, cookies, and quick breads. Made from baking soda, cream of tartar, and cornstarch, it ensures light and fluffy textures.',
    ingredients: ['Baking Soda, Cream of Tartar, Cornstarch (Halal Certified, Gluten-Free)'],
    shelfLife: '12 months from packaging date. Store in an airtight container in a cool, dry place. Once opened, use within 6 months for optimal freshness.',
    nutritionalValue: {
      calories: '0 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '0g',
      fiber: '0g',
    },
  },

  //Cocoa Powder
  {
    id: 2,
    imgSrc: '/shop/Baking/cocoa powder.webp',
    title: 'Cocoa Powder',
    price: '$75',
    category: 'Baking',
    description: 'Our Dutch-processed Cocoa Powder is rich in antioxidants and flavonoids, perfect for baking, making chocolate desserts, and hot chocolate. Adds intense chocolate flavor and color.',
    ingredients: ['Cocoa Solids (Minimum 80% Cocoa)'],
    shelfLife: '24 months from packaging date. Store in an airtight container in a cool, dry place, away from direct sunlight.',
    nutritionalValue: {
      calories: '120 kcal',
      protein: '2g',
      fat: '7g',
      carbohydrates: '15g',
      fiber: '2g',
    },
    
  },

  //Maida
  {
    id: 4,
    imgSrc: '/shop/Baking/maida.webp',
    title: 'Maida',
    price: '$40',
    category: 'Baking',
    description: 'Our Maida is a refined wheat flour, ideal for making naan, kulfi, cakes, and pastries. Low in fiber and rich in carbohydrates.',
    ingredients: ['Refined Wheat Flour (No Added Preservatives)'],
    shelfLife: '9 months from packaging date. Store in an airtight container in a cool, dry place. Once opened, use within 3 months for optimal freshness.',
    nutritionalValue: {
      calories: '360 kcal',
      protein: '10g',
      fat: '1g',
      carbohydrates: '75g',
      fiber: '2g',
    },    
  },

  //Yeast
  {
    id: 6,
    imgSrc: '/shop/Baking/yeast.webp',
    title: 'Yeast',
    price: '$10',
    category: 'Baking',
    description: 'Our Active Dry Yeast is perfect for making naan, bread, and other baked goods. Halal certified and suitable for Pakistani baking traditions.',
    ingredients: ['Active Dry Yeast (Saccharomyces cerevisiae), No Artificial Preservatives'],
    shelfLife: '2 years from packaging date. Store in a cool, dry place, away from direct sunlight.',
    nutritionalValue: {
      calories: '20 kcal',
      protein: '3g',
      fat: '0g',
      carbohydrates: '4g',
      fiber: '0g',
    },
  },
  
  //Vanilla Extract
  {
    id: 5,
    imgSrc: '/shop/Baking/vanilla essence.webp',
    title: 'Vanilla Extract',
    price: '$5',
    category: 'Baking',
    description: 'Our Pure Vanilla Extract adds a rich, creamy flavor to desserts, ice cream, and baked goods. Suitable for Pakistani sweets like kulfi and falooda.',
    ingredients: ['Vanilla Beans Extract, Ethyl Alcohol (Less than 20%), Halal Certified'],
    shelfLife: '5 years from packaging date. Store in a cool, dry place, away from direct sunlight.',
    nutritionalValue: {
      calories: '12 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '3g',
      fiber: '0g',
    },
  },
  
  //Kewra Extract
  {
    id: 3,
    imgSrc: '/shop/Baking/kewra essence.webp',
    title: 'Kewra Extract',
    price: '$5',
    category: 'Baking',
    description: 'Our Kewra Extract adds a traditional flavor and aroma to Pakistani desserts like Kheer, falooda, and sherbets. Made from screw pine flowers.',
    ingredients: ['Kewra Flowers Extract, Ethyl Alcohol (Less than 20%), Halal Certified'],
    shelfLife: '5 years from packaging date. Store in a cool, dry place, away from direct sunlight.',

    nutritionalValue: {
      calories: '10 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '2g',
      fiber: '0g',
    },
  },

  // Pulses & Beans

  //Chana Daal
  {
    id: 15,
    imgSrc: '/shop/lentils/chana daal.webp',
    title: 'Chana Daal',
    price: '$8',
    category: 'Lentils',
    description: 'Experience the authentic taste of Pakistan with our premium Chana Daal! Perfect for making delicious dal, halwa, and savory curries. A staple in every Pakistani kitchen!',
    ingredients: ['Premium Split Chana Daal'],
    nutritionalValue: {
    calories: '370 kcal',
    protein: '20g',
    fat: '5g',
    carbohydrates: '60g',
    fiber: '10g',
    },
    shelfLife: 'To ensure optimal freshness, store in an airtight container in a cool, dry place. Best consumed within 12 months from packaging date. Once opened, use within 6 months.',
  },
  
  
  //Green Grams
  {
    id: 16,
    imgSrc: '/shop/lentils/green grams.webp',
    title: 'Green Grams',
    price: '$9',
    category: 'Lentils',
    description: 'Unlock the power of greens with our nutritious Green Grams! Whole green gram, rich in protein and fiber, perfect for making healthy salads, stir-fries, and chaat.',
    ingredients: ['100% Organic Whole Green Gram'],
    nutritionalValue: {
      calories: '340 kcal',
      protein: '22g',
      fat: '2g',
      carbohydrates: '55g',
      fiber: '8g',
    },
    shelfLife: 'Store in a dry place, away from direct sunlight. Consume within 12 months from packaging date. For extended freshness, refrigerate after opening.',
  },
  
  //Black Chickpeas
  {
    id: 17,
    imgSrc: '/shop/lentils/kalay chanay.webp',
    title: 'Black Chickpeas',
    price: '$140',
    category: 'Lentils',
    description: "Add a touch of Karachi's street food to your meals with our Black Chickpeas! Whole black chickpeas, rich in protein and fiber, perfect for making crispy chaat, salads, and stews.",
    ingredients: ['100% Organic Whole Black Chickpeas'],
    nutritionalValue: {
      calories: '360 kcal',
      protein: '20g',
      fat: '4g',
      carbohydrates: '60g',
      fiber: '10g',
    },
    shelfLife: 'Keep in an airtight container to maintain crunchiness. Best consumed within 12 months from packaging date. Use within 3 months for optimal flavor.',
  },
  
  //Red Kidney Beans
  {
    id: 18,
    imgSrc: '/shop/lentils/kidney beans.webp',
    title: 'Red Kidney Beans',
    price: '$360',
    category: 'Lentils',
    description: 'Get hooked on our Masala-inspired Kidney Beans! Red kidney beans, rich in protein and fiber, perfect for making flavorful curries, stews, and salads.',
    ingredients: ['Premium Red Kidney Beans'],
    nutritionalValue: {
      calories: '340 kcal',
      protein: '22g',
      fat: '1g',
      carbohydrates: '55g',
      fiber: '8g',
    },
    shelfLife: 'Store in a cool, dry place to preserve nutritional value. Consume within 12 months from packaging date. Refrigerate after opening to maintain freshness.',
  },
  
  
  //Masar Sabit
  {
    id: 19,
    imgSrc: '/shop/lentils/masar daal sabit.webp',
    title: 'Masar Sabit',
    price: '$110',
    category: 'Lentils',
    description: 'Experience the authentic taste of Pakistani dal with our Masar Sabit! Whole masoor dal, rich in protein and fiber, perfect for making hearty stews and comforting dal.',
    ingredients: ['Premium Whole Masoor Dal'],
    nutritionalValue: {
      calories: '350 kcal',
      protein: '20g',
      fat: '2g',
      carbohydrates: '60g',
      fiber: '10g',
    },
    shelfLife: 'Keep away from moisture to maintain quality. Best consumed within 12 months from packaging date. Use within 6 months for optimal flavor.',
  },
  
  //Black Gram
  {
    id: 20,
    imgSrc: '/shop/lentils/mash_black gram.webp',
    title: 'Black Gram',
    price: '$170',
    category: 'Lentils',
    description: 'Discover the versatility of our Black Gram! Whole black gram, rich in protein and fiber, perfect for making crispy pakoras, dal, and savory curries.',
    ingredients: ['Premium Quality Whole Black Gram'],
    nutritionalValue: {
      calories: '360 kcal',
      protein: '20g',
      fat: '4g',
      carbohydrates: '60g',
      fiber: '10g',
    },
    shelfLife: 'Store in an airtight container to preserve nutritional value. Consume within 12 months from packaging date. Refrigerate after opening.',
  },
  
  //Red Lentils
  {
    id: 21,
    imgSrc: '/shop/lentils/red lentils.webp',
    title: 'Red Lentils',
    price: '$50',
    category: 'Lentils',
    description: 'Warm up to our comforting Red Lentils! Split red lentils, perfect for making flavorful dal, stews, and curries, just like dadi’s recipe!',
    ingredients: ['Premium Split Red Lentils'],
    nutritionalValue: {
      calories: '350 kcal',
      protein: '20g',
      fat: '2g',
      carbohydrates: '60g',
      fiber: '10g',
    },
    shelfLife: 'Keep in a dry place to maintain quality. Best consumed within 12 months from packaging date. Use within 6 months for optimal flavor.',
        
  },
  
  //Safaid Channay
  {
    id: 22,
    imgSrc: '/shop/lentils/safaid channay.webp',
    title: 'Safaid Channay',
    price: '$15',
    category: 'Lentils',
    description: 'Experience the creamy delight of our Safaid Channay! White chickpeas, rich in protein and fiber, perfect for making flavorful chaat, salads, and karahi.',
    ingredients: ['Locally Sources Organic White Chickpeas'],
    nutritionalValue: {
      calories: '360 kcal',
      protein: '20g',
      fat: '4g',
      carbohydrates: '60g',
      fiber: '10g',
    },
    shelfLife: 'Store in an airtight container to preserve freshness. Best consumed within 12 months from packaging date.',
  },
  
  //White Lobia
  {
    id: 23,
    imgSrc: '/shop/lentils/white lobia.webp',
    title: 'White Lobia',
    price: '$98',
    category: 'Lentils',
    description: 'Unlock the nutritional power of our White Lobia! White cowpeas, rich in protein and fiber, ideal for making healthy stews, curries, and salads, just like dadi’s recipe!',
    ingredients: ['Premium Quality White Lobia'],
    nutritionalValue: {
      calories: '340 kcal',
      protein: '22g',
      fat: '2g',
      carbohydrates: '55g',
      fiber: '8g',
    },
    shelfLife: 'Keep in a cool, dry place to maintain quality. Consume within 12 months from packaging date.',
  },
  
  //Yellow Lentils
  {
    id: 24,
    imgSrc: '/shop/lentils/yellow lentils.webp',
    title: 'Yellow Lentils',
    price: '$09',
    category: 'Lentils',
    description: 'Warm up to our comforting Yellow Lentils! Split yellow lentils, commonly used in Pakistani cuisine for making flavorful dal, stews, and curries.',
    ingredients: ['Split Yellow Lentils'],
    nutritionalValue: {
      calories: '350 kcal',
      protein: '20g',
      fat: '2g',
      carbohydrates: '60g',
      fiber: '10g',
    },
    shelfLife: 'Store in an airtight container to preserve freshness. Best consumed within 12 months from packaging date.',  
  },

  // Rice Products

  //brown rice
  {
    id: 26,
    imgSrc: '/shop/rice/brown rice.webp',
    title: 'Brown Rice',
    price: '$49',
    category: 'Rice',
    description: 'Experience the wholesome goodness of our Brown Rice! Whole grain, rich in fiber and nutrients, perfect for healthy meals and weight management.',
    ingredients: ['100% Organic Brown Rice'],
    nutritionalValue: {
      calories: '110 kcal',
      protein: '2g',
      fat: '1g',
      carbohydrates: '25g',
      fiber: '3g',
    },
    shelfLife: 'Store in an airtight container to preserve freshness. Best consumed within 18 months from packaging date.',
  },
  
  //long basmati
  {
    id: 27,
    imgSrc: '/shop/rice/extra long basmati.webp',
    title: 'Extra Long Basmati',
    price: '$78',
    category: 'Rice',
    description: 'Elevate your biryani game with our Extra Long Basmati! Aromatic, long-grain basmati rice, perfect for special occasions, weddings, and Eid celebrations.',
    ingredients: ['Premium Quality Basmati Rice'],
    nutritionalValue: {
      calories: '150 kcal',
      protein: '3g',
      fat: '0g',
      carbohydrates: '35g',
      fiber: '0g',
    },
    shelfLife: 'Keep in a cool, dry place to preserve aroma. Best consumed within 24 months from packaging date.',
  },
  
  //sella rice
  {
    id: 29,
    imgSrc: '/shop/rice/sella rice.webp',
    title: 'Sella Rice',
    price: '$39',
    category: 'Rice',
    description: "Make everyday meals nutritious with our Sella Rice! Renowned for its long grain, delicate texture, and subtle aroma, Sella Rice is a versatile ingredient that elevates any meal. Whether you're cooking biryani, pulao, or simply enjoying a bowl of steamed rice, Sella Rice offers a delightful culinary experience.",
    ingredients: ['Locally Sourced Premium Sella Rice'],
    nutritionalValue: {
      calories: '130 kcal',
      protein: '2g',
      fat: '0g',
      carbohydrates: '30g',
      fiber: '1g',
    },
    shelfLife: 'Store in an airtight container to maintain freshness. Best consumed within 18 months from packaging date.',    
  },
  
  //steamed rice
  {
    id: 30,
    imgSrc: '/shop/rice/steamed rice.webp',
    title: 'Steamed Rice',
    price: '$29',
    category: 'Rice',
    description: "Indulge in the ultimate rice experience with our Steamed Basmati Rice. This premium variety is carefully steamed during production, enhancing its natural flavors and aroma. Enjoy the delicate texture, subtle floral scent, and exquisite taste that sets Steamed Basmati apart. Perfect for pilaf, biryani, or simply steamed, this rice is a luxurious addition to any meal.",
    ingredients: ['Premium Steamed Basmati'],
    nutritionalValue: {
      calories: '120 kcal',
      protein: '2g',
      fat: '0g',
      carbohydrates: '25g',
      fiber: '0g',
    },
    shelfLife: 'Store in a cool, dry place to preserve freshness. Best consumed within 12 months from packaging date.',
  },
  
  //super basmati
  {
    id: 31,
    imgSrc: '/shop/rice/super basmati.webp',
    title: 'Super Basmati',
    price: '$18',
    category: 'Rice',
    description: 'Experience the signature flavor of Pakistan with our Super Basmati! Premium, aromatic basmati rice, perfect for biryani, pulao, and special occasions.',
    ingredients: ['Locally Sourced Super Basmati Rice'],
    nutritionalValue: {
      calories: '150 kcal',
      protein: '3g',
      fat: '0g',
      carbohydrates: '35g',
      fiber: '0g',
    },
    shelfLife: 'Keep in an airtight container to preserve aroma. Best consumed within 24 months from packaging date.',
  },

  // Sugar
  {
    id: 32,
    imgSrc: '/shop/sugar/brown-sugar.webp',
    title: 'Brown Sugar',
    price: '$58',
    category: 'Sugar',
    description: 'Add a hint of caramel magic to your baked goods! Our Brown Sugar is unrefined, soft, and perfect for cookies, cakes, and desserts.',
    ingredients: ['Sugar Cane', 'Molasses'],
    nutritionalValue: {
      calories: '380 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '99g',
      fiber: '0g',
    },
    shelfLife: 'Store in an airtight container. Best consumed within 24 months.',
  },
  
  
  //gurr
  {
    id: 33,
    imgSrc: '/shop/sugar/gurr.webp',
    title: 'Gurr',
    price: '$1000',
    category: 'Sugar',
    description: 'Experience the traditional taste of Pakistan! Our Gurr is unrefined, crude sugar made from pure sugarcane juice, perfect for cooking, medicine, and cultural rituals.',
    ingredients: ['100% Organic Sugarcane Juice'],
    nutritionalValue: {
      calories: '380 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '99g',
      fiber: '0g',
    },
    shelfLife: 'Keep in a cool, dry place. Best consumed within 12 months.',
  },
  

  //honey
  {
    id: 34,
    imgSrc: '/shop/sugar/honey.webp',
    title: 'Honey',
    price: '$98',
    category: 'Sugar',
    description: "Sweeten your life with nature's nectar! Our pure Honey is packed with antibacterial properties, perfect for cooking, baking, and wellness.",
    ingredients: ['100% Organic Honey'],
    nutritionalValue: {
      calories: '330 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '82g',
      fiber: '0g',
    },
    shelfLife: 'Indefinite, store in a cool, dry place.',
  },
  
  //icing sugar
  {
    id: 35,
    imgSrc: '/shop/sugar/icing sugar.webp',
    title: 'Icing Sugar',
    price: '$74',
    category: 'Sugar',
    description: 'Decorate your desserts like a pro! Our finely powdered Icing Sugar is perfect for cakes, pastries, and sweet treats.',
    ingredients: ['White Refined Sugar'],
    nutritionalValue: {
      calories: '380 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '99g',
      fiber: '0g',
    },
    shelfLife: 'Store in an airtight container. Best consumed within 24 months.',
    
  },
  
  //shakar
  {
    id: 36,
    imgSrc: '/shop/sugar/shakar.webp',
    title: 'Shakar',
    price: '$51',
    category: 'Sugar',
    description: 'Add a touch of tradition to your cooking! Our unrefined Shakar is crystalline sugar, commonly used in Indian cooking and medicine.',
    ingredients: ['Organic Sugarcane Juice'],
    nutritionalValue: {
      calories: '380 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '99g',
      fiber: '0g',
    },
    shelfLife: 'Keep in a cool, dry place. Best consumed within 12 months.',    
  },
  
  //white sugar
  {
    id: 37,
    imgSrc: '/shop/sugar/sugar.webp',
    title: 'White Sugar',
    price: '$200',
    category: 'Sugar',
    description: 'Sweeten your daily life with our pure White Sugar! Refined, granulated, and perfect for cooking, baking, and everyday use.',
    ingredients: ['Sugar Cane', 'Sugar Beets'],
    nutritionalValue: {
      calories: '380 kcal',
      protein: '0g',
      fat: '0g',
      carbohydrates: '99g',
      fiber: '0g',
    },
    shelfLife: 'Store in an airtight container. Best consumed within 24 months.',
  },

  // storage

  {
    id: 38,
    imgSrc: '/shop/storage/plastic/01.webp',
    title: 'Plastic Round Jar - 100ml',
    price: '$45',
    category: 'Storage',
    description: 'Food-grade, BPA-free plastic jar for storing lentils, rice, spices, or other small pantry items.',
    capacity: '100ml',
    material: 'BPA-free plastic',
    careInstructions: 'Hand wash only. Not suitable for microwave use.'
  },
  
  {
    id: 39,
    imgSrc: '/shop/storage/plastic/02.webp',
    title: 'Plastic Round Jar - 200ml',
    price: '$65',
    category: 'Storage',
    description: 'Food-grade, BPA-free plastic jar for storing lentils, rice, or small grains.',
    capacity: '200ml',
    material: 'BPA-free plastic',
    careInstructions: 'Dishwasher safe (top rack). Avoid high heat.'
  },
  
  {
    id: 40,
    imgSrc: '/shop/storage/plastic/03.webp',
    title: 'Plastic Round Jar - 300ml',
    price: '$85',
    category: 'Storage',
    description: 'Durable plastic jar ideal for storing lentils, rice, and pantry essentials.',
    capacity: '300ml',
    material: 'BPA-free plastic',
    careInstructions: 'Hand wash recommended to maintain clarity. Do not microwave.'
  },
  
  {
    id: 41,
    imgSrc: '/shop/storage/plastic/04.webp',
    title: 'Plastic Round Jar - 500ml',
    price: '$100',
    category: 'Storage',
    description: 'Large, BPA-free plastic jar perfect for storing lentils, rice, grains, and other kitchen staples.',
    capacity: '500ml',
    material: 'BPA-free plastic',
    careInstructions: 'Dishwasher safe. Keep away from direct heat.'
  },
  
  {
    id: 42,
    imgSrc: '/shop/storage/plastic/05.webp',
    title: 'Plastic Round Jar - 1 ltr',
    price: '$120',
    category: 'Storage',
    description: 'Spacious plastic jar ideal for storing larger quantities of rice, lentils, or grains.',
    capacity: '1 ltr',
    material: 'BPA-free plastic',
    careInstructions: 'Dishwasher safe. Do not expose to direct sunlight for prolonged periods.'
  },
  
  {
    id: 43,
    imgSrc: '/shop/storage/glass/01.webp',
    title: 'Glass Mini Jar',
    price: '$120',
    category: 'Storage',
    description: 'Small, decorative glass jar for storing spices, herbs, or lentils in small quantities.',
    capacity: '100ml',
    material: 'Glass',
    careInstructions: 'Hand wash recommended. Not microwave safe.'
  },
  
  {
    id: 44,
    imgSrc: '/shop/storage/glass/02.webp',
    title: 'Glass Mason Jar - 350ml',
    price: '$140',
    category: 'Storage',
    description: 'Airtight glass mason jar for keeping lentils, grains, or spices fresh.',
    capacity: '350ml',
    material: 'Glass with metal lid',
    careInstructions: 'Dishwasher safe. Avoid freezing.'
  },
  
  {
    id: 45,
    imgSrc: '/shop/storage/glass/03.webp',
    title: 'Glass Mason Jar - 500ml',
    price: '$160',
    category: 'Storage',
    description: 'Airtight, versatile glass jar for storing pantry staples like rice and lentils.',
    capacity: '500ml',
    material: 'Glass with metal lid',
    careInstructions: 'Hand wash for lid; jar is dishwasher safe.'
  },
  
  {
    id: 46,
    imgSrc: '/shop/storage/glass/04.webp',
    title: 'Glass Mason Jar - 1 ltr',
    price: '$220',
    category: 'Storage',
    description: 'Large glass mason jar perfect for storing bulk quantities of grains or lentils.',
    capacity: '1 ltr',
    material: 'Glass with metal lid',
    careInstructions: 'Jar is dishwasher safe. Avoid exposing metal lid to moisture for extended periods.'
  },
  
  {
    id: 47,
    imgSrc: '/shop/storage/tote_bag.png',
    title: 'Tote Bag',
    price: '$20',
    category: 'Storage',
    description: 'Reusable, sturdy tote bag for carrying groceries, grains, lentils, or other items.',
    material: ['Cotton', 'Canvas'],
    careInstructions: 'Machine wash cold. Air dry to prevent shrinkage.'
  }
  
  
  
  
    // { id: 38, imgSrc: '/shop/storage/plastic/01.webp', title: 'Plastic Round Jar - 100ml', price: '$45', category: "Storage" },
    // { id: 39, imgSrc: '/shop/storage/plastic/02.webp', title: 'Plastic Round Jar - 200ml', price: '$65', category: "Storage" },
    // { id: 40, imgSrc: '/shop/storage/plastic/03.webp', title: 'Plastic Round Jar - 300ml', price: '$85', category: "Storage" },
    // { id: 41, imgSrc: '/shop/storage/plastic/04.webp', title: 'Plastic Round Jar - 500ml', price: '$100', category: "Storage" },
    // { id: 42, imgSrc: '/shop/storage/plastic/05.webp', title: 'Plastic Round Jar - 1 ltr', price: '$120', category: "Storage" },

    // { id: 43, imgSrc: '/shop/storage/glass/01.webp', title: 'Glass Mini Jar', price: '$120', category: "Storage" },
    // { id: 44, imgSrc: '/shop/storage/glass/02.webp', title: 'Glass Mason Jar - 350ml', price: '$140', category: "Storage" },
    // { id: 45, imgSrc: '/shop/storage/glass/03.webp', title: 'Glass Mason Jar - 500ml', price: '$160', category: "Storage" },
    // { id: 46, imgSrc: '/shop/storage/glass/04.webp', title: 'Glass Mason Jar - 1 ltr', price: '$220', category: "Storage" },

    // { id: 47, imgSrc: '/shop/storage/tote bag.png', title: 'Tote Bag', price: '$20', category: "Storage" },




   


    // Add more items as needed
  ];
  
  export default products;
  