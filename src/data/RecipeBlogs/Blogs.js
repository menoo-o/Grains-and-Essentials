const recipes = [
    // Blog 1
    {
      id: 1,
      title: 'Chickpea Lentils and Cabbage Falafels',
      imageUrl: '/recipeblogs/chickpeafalafel.webp',
      intro: "Discover the ultimate trifecta of flavour, nutrition, and versatility with our delectable falafel recipe! Made with protein-rich Split Yellow Mung Lentils and packed with the added crunch of cabbage, these crispy, golden bites are a game-changer for any meal. Whether you're craving a satisfying brunch or a nourishing dinner, falafels are the perfect answer - pair them with your favourite dressing or sauce for a truly unforgettable treat. Indulge in the wholesome goodness and share the love with your loved ones!",
      ingredients: [
        { text: "½ cup ", link: { label: "Mung Beans", url: "/shop" } },
        { text: "1 cup chopped cabbage" },
        { text: "½ cup ", link: { label: "Split Chickpea Lentils", url: "/shop" } },
        { text: "½ cup Split Yellow Mung Lentils" },
        { text: "2 Serrano Pepper" },
        { text: "½ bunch Fresh Cilantro" },
        { text: "5 cloves Garlic" },
        { text: "¼ cup Coriander Seed Whole" },
        { text: "4 tbsp Olive Oil" },
        { text: "1 tbsp Pink Salt" },
        { text: "1 tsp Black Pepper" },
        { text: "2 tsp " , link: { label: "Baking Powder", url: "/shop" } }
      ],
      instructions: [
        { title: 'Step 1: Soak and Drain', description: 'Mix all the beans and lentils, wash, and soak for 4-6 hours. Drain all the water out.' },
        { title: 'Step 2: Blend', description: 'Add the drained mixture to a food processor. Include the following ingredients: Serrano peppers, cabbage, cilantro, garlic, salt, pepper, coriander seeds, baking powder, and 4 tablespoons of olive oil. Then, process the mixture until it is smooth.' },
        { title: 'Step 3: Shape', description: 'Scoop out the mixture and form falafel balls with your hands. Shape them into small patties.' },
        { title: 'Step 4: Fry', description: 'Shallow fry the falafels until crispy and golden brown.' }
      ],
      tips: [
        "For crisper falafels, chill them in the refrigerator for 30 minutes before frying.",
        "Use a thermometer to maintain the ideal frying temperature (350°F/175°C).",
        "Don't overcrowd the pan; fry in batches if necessary.",
        "Experiment with different seasonings, herbs, or spices to create unique flavour profiles.",
        "Serve with your favourite toppings, such as tahini sauce, hummus, or fresh veggies."
        ]
    },
    // Blog2
    {
        id: 2,
        title: 'Kung Pao Chicken with Brown Rice',
        imageUrl: '/recipeblogs/kungpao.webp',
        intro: "Indulge in the bold and savory flavours of our Kung Pao Chicken, expertly paired with the nutty goodness of Brown Rice! This classic Chinese-inspired dish is a masterclass in balancing spices and textures, with juicy chicken, crunchy vegetables, and a hint of smokiness. Perfect for a quick weeknight dinner or a special occasion, this wholesome recipe is sure to satisfy your cravings and leave you wanting more!",
        ingredients: [
          { text: "½ kg boneless skinless chicken breast" },
          { text: "4 tsp sesame oil" },
          { text: "2 tsp Garlic Minced Whole" },
          { text: "1 tsp Ginger Minced Whole" },
          { text: "2 celery ribs" },
          { text: "1 red pepper" },
          { text: "2 tbsp soy sauce" },
          { text: "1 tbsp honey" },
          { text: "1/2 tsp pepper" },
          { text: "1/4 cup peanuts" },
          { text: "2 green onions" },
          { text: "1 cup ", link: { label: "Brown Rice", url: "/shop" } }
          ],
        instructions: [
            {
            title: "Step 1: Cook the Chicken",
            description: "Add sesame oil to a pan and cook the chicken with garlic powder and ginger for 5-7 minutes. Set aside."
            },
            {
            title: "Step 2: Stir-Fry Vegetables",
            description: "Add remaining sesame oil to the pan and cook celery and red pepper for 5-7 minutes."
            },
            {
            title: "Step 3: Prepare the Stir-Fry Sauce",
            description: "Mix together soy sauce, honey, and pepper in a small bowl."
            },
            {
            title: "Step 4: Combine and Cook",
            description: "Add the cooked chicken back to the pan, pour in the stir-fry sauce, and add peanuts. Cook for 2-3 minutes and let it rest."
            },
            {
            title: "Step 5: Garnish and Serve",
            description: "Garnish with green onions and serve with cooked Brown Basmati Rice."
            }
            ],
        tips: [
            "Use fresh ginger for added depth of flavour.",
            "Customize the stir-fry sauce to your taste by adjusting the soy sauce, honey, and pepper ratios.",
            "Add other vegetables like carrots, bell peppers, or mushrooms to the stir-fry for added colour and texture.",
            "For an extra crunchy topping, toast the peanuts in a dry pan before adding them to the dish.",
            "Experiment with different types of protein like shrimp or tofu for a vegetarian option."
            ],
      },

    //   Blog 3
    {
        id: 3,
        title: 'Masoor Lentils Special Kebabs',
        imageUrl: '/recipeblogs/kebab.webp',
        intro: "Transform the humble lentil into a culinary masterpiece with our Masoor Lentils Special Kebabs! These mouth-watering morsels are a testament to the magic that happens when ordinary ingredients meet extraordinary flavour and creativity. Packed with protein, fibre, and nutrients, these kebabs are not only a treat for your taste buds but also a boon for your health. Get ready to delight your senses and nourish your body with this sensational lentil recipe!",
        ingredients: [
          { text: "1 cup ", link: { label: "Masoor Lentils", url: "/singledisplay/red-lentils" } },
          { text: "1 cup yogurt" },
          { text: "2 tbsp olive oil" },
          { text: "1 tsp Cumin Seeds" },
          { text: "1 tsp Pink Salt" },
          { text: "1 tsp Red Chili Powder" },
          { text: "½ tsp Coriander Seed Powder" },
          { text: "1 tsp garlic paste" },
          { text: "Oil to pan fry" }
          ],
        instructions: [
            {
            title: "Step 1: Cook the Lentils",
            description: "Heat olive oil in a pan and add cumin. Cook for 1 minute."
            },
            {
            title: "Step 2: Add Lentils and Salt",
            description: "Add lentils and pink salt. Cook on medium heat for 5 minutes, stirring occasionally."
            },
            {
            title: "Step 3: Grind the Mixture",
            description: "Grind the mixture in a food processor until it forms a dough-like consistency."
            },
            {
            title: "Step 4: Add Spices and Garlic",
            description: "Add all the spices and garlic to the ground paste. Mix well."
            },
            {
            title: "Step 5: Add Yogurt",
            description: "Add yogurt to make the mixture soft and pliable."
            },
            {
            title: "Step 6: Shape the Kebabs",
            description: "Divide the mixture into balls and shape them according to your choice."
            },
            {
            title: "Step 7: Pan-Fry",
            description: "Pan-fry the kebabs in olive oil until golden brown and crispy."
            }
            ],
        tips: [
            "Use red or green lentils as a substitute if Masoor lentils are not available.",
            "Add chopped onions, carrots, or bell peppers to the mixture for added flavour and texture.",
            "Use lemon juice instead of yogurt for a tangier taste.",
            "Experiment with different spice blends, such as cumin-coriander or garam masala, for a unique flavour.",
            "Bake the kebabs in a preheated oven at 375°F (190°C) for a healthier alternative to pan-frying."
            ],
      },
    //   Blog4
    {
        id: 4,
        title: 'Chickpeas With a Guajillo Chile Sauce',
        imageUrl: '/recipeblogs/chickpeasauce.webp',
        intro: "Indulge in the vibrant flavours of Mexico with our Chickpeas in Guajillo Chile Sauce recipe! This fibre-rich dish is a perfect addition to your diet, packed with nutritious chickpeas and a bold, slightly smoky sauce made with Guajillo chilies. Inspired by the warm and aromatic spices of Mexican cuisine, this recipe combines the familiarity of Pakistani flavours with the excitement of international flair. Get ready to savour a refreshing and deliciously spicy twist on traditional chickpea dishes!",
        ingredients: [
          { text: "2 cups cooked ", link: { label: "Chickpeas Beans", url: "/shop" } },
          { text: "2 medium cups medium carrots" },
          { text: "1 medium cup white onion" },
          { text: "2 cloves of minced garlic" },
          { text: "¼ cup of parsley" },
          { text: "¼ cup guajillo chili salsa" },
          { text: "⅛ tsp Black Pepper Powder" },
          { text: "4 tsp olive oil" },
          { text: "Salt to taste" }
          ],
        instructions: [
          {
          title: "Step 1: Prepare the Vegetables",
          description: "Wash and dice the carrots and onion. Finely chop the parsley."
          },
          {
          title: "Step 2: Sauté the Vegetables",
          description: "Heat olive oil in a pan over medium heat. Sauté the diced carrots for 4 minutes, then add the diced onion and garlic and cook for an additional 4 minutes."
          },
          {
          title: "Step 3: Add Chickpeas and Salsa",
          description: "Add the cooked chickpeas and cook for 2 minutes. Then, add the guajillo chili salsa and black pepper. Cook for 2 more minutes, stirring constantly, until the salsa has reduced and coated the chickpeas."
          },
          {
          title: "Step 4: Season and Serve",
          description: "Add salt to taste. Transfer the mixture to a serving dish and garnish with chopped parsley."
          }
          ],
        tips: [
          "Adjust the level of heat in the dish by using more or less guajillo Chile salsa.",
          "Serve with freshly cooked rice, parathas, or use as a filling for tacos or wraps.",
          "Add some diced bell peppers or zucchini to the pan with the carrots and onion for added flavour and nutrients.",
          "For a creamier sauce, add a tablespoon or two of sour cream or Greek yogurt towards the end of cooking.",
          "Experiment with different types of chili peppers or hot sauce for a unique flavour profile."
          ],          
      },
    //   Blog5
    {
        id: 5,
        title: 'One Pot Lentil Soup',
        imageUrl: '/recipeblogs/haleem.webp',
        intro: "Indulge in the comforting warmth of Pakistan's national treasure, Haleem - a slow-cooked stew that harmoniously blends the creaminess of wheat, the tenderness of lentils, and the fragrance of aromatic spices. Traditional Haleem is slow cooked for hours, but this revised recipe simplifies the process while maintaining the flavours. One Pot Lentil Soup is simplified for a quicker and easier preparation without compromising on flavour. As we share this recipe with you, we hope you'll experience the same joy and nourishment that this hearty soup brings to our tables.",
        ingredients: [
          { text: "1 medium onion, finely chopped" },
          { text: "3-4 cloves of garlic, minced" },
          { text: "1-inch piece of ginger, grated" },
          { text: "1 cup uncooked rinsed Haleem mix ", link: { label: "(containing Yellow Mung Bean Lentils, Split Red Masur Lentil, rice, and wheat flour)", url: "/shop" } },
          { text: "1-2 dried red chilies" },
          { text: "2 cups thinly sliced carrots" },
          { text: "1 healthy pinch salt" },
          { text: "1 tbs Haleem Masala" },
          { text: "3 cups Beef or Lamb Broth" },
          { text: "3/4 cup light coconut milk" },
          { text: "2 Tbsp soy sauce" },
          { text: "1/2 cup ghee" }
          ],
        instructions: [
          {
          title: "Step 1: Sauté Aromatics",
          description: "Heat oil in a large pot over medium heat. Add onion powder and sauté for 1 minute."
          },
          {
          title: "Step 2: Add Spices and Vegetables",
          description: "Add garlic, ginger, and pepper. Sauté for 2-3 minutes. Then add carrots and a pinch of salt. Cook for 1-2 minutes, stirring occasionally."
          },
          {
          title: "Step 3: Add Haleem Mix",
          description: "Add the Haleem mix (containing Yellow Mung Bean Lentils, Split Red Masur Lentil, rice, and wheat flour). Stir to combine. Cook for 1-2 minutes."
          },
          {
          title: "Step 4: Add Liquid and Simmer",
          description: "Add vegetable broth and coconut milk. Bring to a low boil, then reduce heat to low and simmer, uncovered, stirring occasionally, for 20-25 minutes."
          },
          {
          title: "Step 5: Season and Finish",
          description: "Add Haleem Masala powder (or a blend of ground cumin, coriander, cinnamon, cardamom, and turmeric). Stir once more. Simmer for an additional 5-10 minutes or until the soup has reached the desired consistency."
          },
          {
          title: "Step 6: Serve",
          description: "Present it hot, garnished with fresh cilantro or ginger, if desired."
          }
          ],
        tips: [
          "Adjust the amount of vegetable broth and coconut milk to achieve your desired consistency.",
          "If using a combination of lentils, rice, and wheat flour, be sure to stir well to prevent lumps from forming.",
          "For added richness, stir in some ghee or heavy cream towards the end of cooking.",
          "Experiment with different spice blends or add a pinch of cayenne pepper for an extra kick."
          ]
      },
    //   Blog 6
    {
        id: 6,
        title: 'Vanilla Cake',
        imageUrl: '/recipeblogs/vanillacake.webp',
        intro: "Cake always brings a big smile. And the freshly baked cake tastes even better. In this recipe of ours, we will try to blend in some goodness into your cake baking with our ingredients. The Vanilla cake is a flavourful mouth-watering recipe which is sure to get your party going.",
        ingredients: [
          { text: "1 cup Refined Flour- ", link: { label: "Maida", url: "/shop" } },
          { text: "1/4 Cup Oil" },
          { text: "1 cup Milk" },
          { text: "1/2 cup Powdered ", link: { label: "White Sugar", url: "/shop" } },
          { text: "1/2 tsp ", link: { label: "Baking Powder", url: "/shop" } },
          { text: "1/4 tsp Baking Soda" },
          { text: "1 tsp ", link: { label: "Vanilla Essence", url: "/shop" } },
          { text: "Mix seeds (Sunflower, melon, & flax seeds each 1 tbsp)" },
          { text: "1 Pinch Salt" }
          ],
        instructions: [
          {
          title: "Step 1: Prepare Dry Ingredients",
          description: "Sieve refined flour, baking soda, baking powder, and salt together. Set aside."
          },
          {
          title: "Step 2: Prepare Wet Ingredients",
          description: "Mix sugar, oil, milk, and vanilla essence in a grinder until smooth."
          },
          {
          title: "Step 3: Combine Mixtures",
          description: "Mix both dry and wet mixtures until well combined. Create a smooth batter."
          },
          {
          title: "Step 4: Prepare Cake Pan",
          description: "Pour batter into a greased pan. Sprinkle 1/4 cup of mixed seeds over the batter and gently press with a spatula."
          },
          {
          title: "Step 5: Remove Air Bubbles",
          description: "Tap the cake pan on a countertop to release any large air bubbles."
          },
          {
          title: "Step 6: Bake",
          description: "Place the cake pan in a preheated pressure cooker and bake for 1 hour. Alternatively, bake in a preheated oven at 180°C (360°F) for about 1 hour."
          }
          ],
        tips: [
          "Consider using brown sugar or jaggery instead of white sugar for a richer flavour and deeper colour.",
          "Baking time may vary, so keep an eye on the cake.",
          "If the batter looks dry, add 2-4 tsp of milk.",
          "Use a toothpick to check for doneness; it should come out clean.",
          "Let the cake cool before slicing and serving.",
          "Experiment with different flavours by adding nuts, chocolate chips, or fruit to the batter.",
          "For a moist cake, don't overmix the batter, and ensure the ingredients are at room temperature."
          ],
      },
    //   Blog 7
    {
        id: 7,
        title: 'Hot Spicy Mexican-Style Kidney Beans',
        imageUrl: '/recipeblogs/spicykidney.webp',
        intro: "Get ready to ignite your taste buds with our Mexican-Style Kidney Beans, a flavourful and nutritious recipe that's perfect for a Sunday treat! This aromatic bowl of goodness is a testament to the shared love of bold spices and flavours between Mexican and Pakistani cuisine. Just like Pakistani dishes, Mexican cuisine relies heavily on a blend of warming spices like cumin, coriander, and chili peppers to create a depth of flavour that's both comforting and exciting. Our recipe combines the best of both worlds, bringing together the familiar warmth of Pakistani spices with the vibrant spirit of Mexican flavours. Try it out and experience the magic for yourself!",
        ingredients: [
          { text: "2 tbsp oil" },
          { text: "1 chopped onion" },
          { text: "1/2 chopped jalapeño" },
          { text: "4 cloves garlic" },
          { text: "1 chopped tomato" },
          { text: "1 tsp salt" },
          { text: "1 tsp red chilli powder" },
          { text: "1 tsp cumin powder" },
          { text: "1 cup ", link: { label: "Kidney Beans", url: "/shop" } },
          { text: "2 cups water" }
          ],
        instructions: [
          {
          title: "Step 1: Sauté Aromatics",
          description: "Heat 2 tbsp oil in a pressure cooker over medium heat. Add 1 chopped onion, 1/2 chopped jalapeño, and 4 cloves garlic. Sauté until the onion is translucent."
          },
          {
          title: "Step 2: Add Tomato and Spices",
          description: "Add 1 chopped tomato and cook for 1-2 minutes. Then, add Salt, Red Chili Ground, and Cumin Ground. Stir well to combine."
          },
          {
          title: "Step 3: Add Kidney Beans and Water",
          description: "Add 1 cup Kidney Beans and 2 cups water. Mix well to ensure the beans are covered with water."
          },
          {
          title: "Step 4: Pressure Cook",
          description: "Pressure cook the beans for 5 whistles or until they are tender."
          },
          {
          title: "Step 5: Serve and Garnish",
          description: "Top with lemon juice and cilantro. Serve hot."
          }
          ],
        tips: [
          "For an extra kick, add diced serrano peppers or more jalapeños to the sauté.",
          "Use fresh cilantro leaves for garnish or add a dollop of sour cream for a creamy contrast.",
          "Serve with tortilla chips, warm flour or corn tortillas, or over Mexican rice.",
          "Add some heat with diced green chilies or a sprinkle of cayenne pepper.",
          "Experiment with different types of beans, such as pinto or black beans, for a varied texture and flavour."
          ]
      },
    //   Blog 8
    {
        id: 8,
        title: 'Kheer: Traditional Pakistan Rice Pudding)',
        imageUrl: '/recipeblogs/kheer.webp',
        intro: "Kheer, a rice pudding, is the quintessential Pakistani sweet dish that everyone grows up eating. Made with flavourful and aromatic ingredients like Super Basmati Rice, kheer is the most common dessert in Pakistani households. Its creamy texture and subtle sweetness make it a favourite among people of all ages. Follow our simple recipe to create this delicious treat and make your celebrations even sweeter.",
        ingredients: [
          { text: "3 tsp ", link: { label: "Super Basmati Rice", url: "/shop" } },
          { text: "¼ cup grated dry coconut" },
          { text: "3 tsp of sugar (or to taste)" },
          { text: "½ tsp of Green Cardamom powder" },
          { text: "2 tsp of almonds and cashew nuts" },
          { text: "1 litre Whole Milk" },
          { text: "10-15 strands of saffron (optional)" },
          { text: "20-25 raisins" }
          ],
        instructions: [
          {
          title: "Step 1: Rinse and Soak Rice",
          description: "Rinse the basmati rice 2-3 times and soak it in ½ cup water for 30 minutes."
          },
          {
          title: "Step 2: Heat Milk",
          description: "Heat milk in a heavy-bottomed pan over medium-high heat, stirring frequently to prevent scorching."
          },
          {
          title: "Step 3: Add Rice and Spices",
          description: "Once milk boils, reduce heat to low. Drain water from rice and add rice, saffron, raisins, and dry coconut to the pan."
          },
          {
          title: "Step 4: Cook Kheer",
          description: "Cook uncovered on low heat for 45-50 minutes, stirring frequently and scraping the sides of the pan. Mash the mixture with the back of a ladle."
          },
          {
          title: "Step 5: Add Sugar and Cardamom",
          description: "Once kheer thickens, add sugar and cardamom powder. Cook for 2 minutes, checking for sugar consistency."
          },
          {
          title: "Step 6: Serve",
          description: "Transfer kheer to small serving bowls. Garnish with almond and cashew nut. Serve hot or chilled."
          }
          ],
        tips: [
          "The perfectly cooked kheer should be thick and creamy like a chunky custard, with rice grains almost incorporated into the milk.",
          "Kheer will thicken a little more once cooled.",
          "You can replace refined sugar with other options like; Brown sugar (adds a caramel-like flavour), Jaggery (adds a rich, earthy flavour) & Honey (adds a distinct flavour, use sparingly)",
          "Remember to adjust the amount of sugar to your taste preferences, as different sweeteners have varying levels of sweetness."
          ]
      },
    {
        id: 9,
        title: 'Chicken Biryani',
        imageUrl: '/recipeblogs/biryani.webp',
        intro: "Writing about Pakistani cuisine without mentioning Chicken Biryani? That's like a culinary sin! This iconic dish is the heart and soul of Pakistani food, with its perfect blend of spices and flavours. But let's be real, the age-old debate still rages on - which city serves the best Chicken Biryani: Lahore or Karachi? The rivalry between these two metropolises is legendary, with each claiming their version is the most authentic and mouth-watering. Well, we won't take sides, but we will give you the secret to making the most scrumptious Chicken Biryani in the comfort of your own home, using Pride of Pakistan's Pakistani Biryani Masala. So, get ready to ignite your taste buds and join the Biryani battle!",
        ingredients: [
          { text: "1 cup whole milk yogurt" },
          { text: "Pink Salt" },
          { text: "2 tsp Red Chili Powder" },
          { text: "1/2 tsp Organic Turmeric Ground" },
          { text: "2 1/2 pounds bone-in skinless chicken thighs" },
          { text: "1 1/2 cups vegetable oil" },
          { text: "2 large onions" },
          { text: "2 cups ", link: { label: "Basmati Rice", url: "/shop" } },
          { text: "8 cloves" },
          { text: "7 Organic Green Cardamom Whole" },
          { text: "1/4 tsp Black Pepper Ground" },
          { text: "2 large pinches Biryani Masala Seasoning" },
          { text: "1/2 Organic Cinnamon Bark" },
          { text: "1 tsp Organic Cumin Seed Whole" },
          { text: "1 tbsp finely grated ginger" },
          { text: "5 cloves garlic" },
          { text: "2 medium tomatoes" },
          { text: "1/2 cup cilantro leaves" }
          ],
        instructions: [
            {
            title: "Step 1: Marinate the Chicken",
            description: "Whisk salt, chilli powder, and turmeric in a bowl. Add the chicken and let it sit for an hour."
            },
            {
            title: "Step 2: Fry the Onions",
            description: "Heat oil in a saucepan. Fry onions until golden brown. Transfer to a baking sheet to drain. Season with salt."
            },
            {
            title: "Step 3: Cook the Rice",
            description: "Wash and rinse the rice. Bring rice, salt, cloves, cardamom pods, bay leaves, black pepper, and 3 quarts of water to a boil in a large pot. Cook for 5 mins. Drain and transfer spices to a bowl."
            },
            {
            title: "Step 4: Prepare the Biryani Masala",
            description: "Preheat oven to 300°F. Heat reserved onion oil in the oven over medium heat. Add cinnamon stick, cumin seeds, remaining cloves, cardamom pods, and bay leaves. Cook until fragrant and brown. Add ginger, garlic, tomatoes, salt, and biryani seasoning. Bring to a boil."
            },
            {
            title: "Step 5: Assemble and Bake",
            description: "Put the chicken on top of the tomatoes. Sprinkle half of the fried onions. Top with rice. Cover the pan and bake until the liquid evaporates."
            },
            {
            title: "Step 6: Serve and Enjoy",
            description: "Transfer the biryani to a large platter. Serve hot with fresh cilantro and mint leaves."
            }
            ],
        tips: [
            "Serve with raita (yogurt sauce), salad, or papadum for a complete meal.",
            "Cool the biryani to room temperature, then refrigerate or freeze for up to 3 days. Reheat in the oven or microwave.",
            "Garnish it with fresh herbs, edible flowers, or pomegranate seeds for added flavour and visual appeal.",
            "Experiment with different spice blends, meats (beef, lamb, or vegetables), or add-ins (nuts, dried fruits, or potatoes) to create your unique biryani recipe."
            ],
      },
    //   Blog 10
    {
        id: 10,
        title: 'Red Lentil Hummus',
        imageUrl: '/recipeblogs/hummuslentil.webp',
        intro: "Get ready to electrify your party with the ultimate game-changer: Red Lentil Hummus! Dips are the secret ingredient to unlocking a memorable bash, adding a thrilling trifecta of tangy, spicy, and savory flavours that will leave your guests craving for more. And the best part? This nutritious delight is incredibly easy to whip up, making it the perfect accompaniment to your festive gatherings with friends and family. So, go ahead and give your party a delicious boost with this mouth-watering Red Lentil Hummus - your taste buds and your guests will thank you!",
        ingredients: [
          { text: "", link: { label: "Split Red Masoor Lentils", url: "/shop" } },
          { text: "Coconut oil" },
          { text: "Tahini" },
          { text: "Lemon" },
          { text: "Ginger" },
          { text: "Garlic" }
          ],
        instructions: [
          {
          title: "Step 1: Cook the Lentils",
          description: "Start by cooking the lentils. Add water to a medium saucepan, bring to a boil, then add the lentils and simmer until tender (about 15 minutes)."
          },
          {
          title: "Step 2: Cool and Blend",
          description: "Drain the cooked lentils and let them cool (10-15 minutes). Once almost at room temperature, add them to a blender with the other ingredients and process until smooth, scraping down the sides as needed."
          },
          {
          title: "Step 3: Adjust Consistency",
          description: "If the hummus gets too thick, stir in some water before serving."
          }
          ],
        tips: [
          "Enjoy your red lentil hummus straight from the blender for the best flavour and texture. Store it in the fridge for up to 4-5 days.",
          "Add a pinch of cumin, paprika, or red pepper flakes to give your hummus an extra kick.",
          "Top your hummus with a sprinkle of sumac, parsley, or a few pomegranate seeds for a pop of colour and freshness.",
          "Serve with crudités, pita chips, or crackers for a satisfying snack.",
          "Prepare the lentils and store them in the fridge for up to a day before blending with the other ingredients."
          ],
      },
    //   Blog 11
    {
        id: 11,
        title: 'Rice Balls',
        imageUrl: '/recipeblogs/riceballs.webp',
        intro: "For all the food loving cute balls out there, we have a perfect blend of flavourful and healthy mix of rice balls for you. With all the festivities around, a homemade piece of soft and moist ball of rice could be a perfect match for an eve of spookiness. This one is going to be a simple and easy to create recipe for people who like to keep it raw and tasty.",
        ingredients: [
          { text: "1 cup ", link: { label: "basmati rice", url: "/shop" } }, // Link to Basmati Rice
          { text: "2 cups carrot juice" },
          { text: "1 cup water" },
          { text: "1/2 tsp. pink rock salt - fine grind" },
          { text: "black olives" },
          { text: "green bell pepper" }
        ],
        instructions: [
          {
          title: "Step 1: Cook the Rice",
          description: "Start with boiling water, carrot juice, rice, and salt for 15 minutes, or until all the liquid is absorbed. Let it cool down to room temperature."
          },
          {
          title: "Step 2: Shape the Rice Balls",
          description: "Make small golf ball-sized balls out of rice, using your hands by pressing firmly. (Note: In case rice starts sticking to your hand, lightly sprinkle some water on hands before rolling.)"
          },
          {
          title: "Step 3: Add the Face",
          description: "Cut the olives into the shape of eyes and mouth and place them over the balls, giving them a gentle press, so they stick on."
          },
          {
          title: "Step 4: Add the Stem",
          description: "Cut a small triangle of green bell pepper and stick it over the top of the rice ball to form the stem."
          },
          {
          title: "Step 5: Plate and Garnish",
          description: "Now, you can start your plating. To add a pop of colour and freshness, garnish with a sprinkle of chopped fresh herbs like parsley, cilantro, or dill. You can also serve with a side of your favourite dipping sauce."
          }
          ],
        tips: [
          "To make the rice balls more vibrant, you can add a few drops of food colouring to the rice mixture before shaping.",
          "Experiment with different seasonings and spices in the rice mixture for unique flavour profiles.",
          "Consider using other ingredients like chopped veggies, cheese, or nuts to add texture and flavour to the rice balls."
          ]
      },
    // Add more recipes...
  ];

  export default recipes