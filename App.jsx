const products= [
    {
    "id": 1,
    "rating": 2.56,
    "title": "Essence Mascara Lash Princess",
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "price": 9.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
  },
  {
    "id": 2,
    "rating": 2.86,
    "title": "Eyeshadow Palette with Mirror",
    "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    "price": 19.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
  },
  {
    "id": 3,
    "rating": 4.64,
    "title": "Powder Canister",
    "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    "price": 14.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
  },
  {
    "id": 4,
    "rating": 4.36,
    "title": "Red Lipstick",
    "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    "price": 12.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
  },
  {
    "id": 5,
    "rating": 4.32,
    "title": "Red Nail Polish",
    "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    "price": 8.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp"
  },
  {
    "id": 6,
    "rating": 4.37,
    "title": "Calvin Klein CK One",
    "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    "price": 49.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"
  },
  {
    "id": 7,
    "rating": 4.26,
    "title": "Chanel Coco Noir Eau De",
    "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    "price": 129.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp"
  },
  {
    "id": 8,
    "rating": 3.8,
    "title": "Dior J'adore",
    "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    "price": 89.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp"
  },
  {
    "id": 9,
    "rating": 3.96,
    "title": "Dolce Shine Eau de",
    "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    "price": 69.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp"
  },
  {
    "id": 10,
    "rating": 2.74,
    "title": "Gucci Bloom Eau de",
    "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    "price": 79.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp"
  },
  {
    "id": 11,
    "rating": 4.77,
    "title": "Annibale Colombo Bed",
    "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    "price": 1899.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp"
  },
  {
    "id": 12,
    "rating": 3.92,
    "title": "Annibale Colombo Sofa",
    "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
    "price": 2499.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
  },
  {
    "id": 13,
    "rating": 2.87,
    "title": "Bedside Table African Cherry",
    "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
    "price": 299.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp"
  },
  {
    "id": 14,
    "rating": 4.88,
    "title": "Knoll Saarinen Executive Conference Chair",
    "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    "price": 499.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp"
  },
  {
    "id": 15,
    "rating": 3.59,
    "title": "Wooden Bathroom Sink With Mirror",
    "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
    "price": 799.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp"
  },
  {
    "id": 16,
    "rating": 4.19,
    "title": "Apple",
    "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
    "price": 1.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp"
  },
  {
    "id": 17,
    "rating": 4.47,
    "title": "Beef Steak",
    "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
    "price": 12.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp"
  },
  {
    "id": 18,
    "rating": 3.13,
    "title": "Cat Food",
    "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
    "price": 8.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp"
  },
  {
    "id": 19,
    "rating": 3.19,
    "title": "Chicken Meat",
    "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
    "price": 9.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp"
  },
  {
    "id": 20,
    "rating": 4.8,
    "title": "Cooking Oil",
    "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
    "price": 4.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp"
  },
  {
    "id": 21,
    "rating": 4.07,
    "title": "Cucumber",
    "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
    "price": 1.49,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp"
  },
  {
    "id": 22,
    "rating": 4.55,
    "title": "Dog Food",
    "description": "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
    "price": 10.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp"
  },
  {
    "id": 23,
    "rating": 2.53,
    "title": "Eggs",
    "description": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
    "price": 2.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp"
  },
  {
    "id": 24,
    "rating": 3.78,
    "title": "Fish Steak",
    "description": "Quality fish steak, suitable for grilling, baking, or pan-searing.",
    "price": 14.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp"
  },
  {
    "id": 25,
    "rating": 3.25,
    "title": "Green Bell Pepper",
    "description": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
    "price": 1.29,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp"
  },
  {
    "id": 26,
    "rating": 3.66,
    "title": "Green Chili Pepper",
    "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
    "price": 0.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp"
  },
  {
    "id": 27,
    "rating": 3.97,
    "title": "Honey Jar",
    "description": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
    "price": 6.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp"
  },
  {
    "id": 28,
    "rating": 3.39,
    "title": "Ice Cream",
    "description": "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
    "price": 5.49,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp"
  },
  {
    "id": 29,
    "rating": 3.94,
    "title": "Juice",
    "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
    "price": 3.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp"
  },
  {
    "id": 30,
    "rating": 4.93,
    "title": "Kiwi",
    "description": "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
    "price": 2.49,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp"
  },
  {
    "id": 31,
    "rating": 3.53,
    "title": "Lemon",
    "description": "Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.",
    "price": 0.79,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/lemon/thumbnail.webp"
  },
  {
    "id": 32,
    "rating": 2.61,
    "title": "Milk",
    "description": "Fresh and nutritious milk, a staple for various recipes and daily consumption.",
    "price": 3.49,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/milk/thumbnail.webp"
  },
  {
    "id": 33,
    "rating": 4.95,
    "title": "Mulberry",
    "description": "Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals.",
    "price": 4.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/mulberry/thumbnail.webp"
  },
  {
    "id": 34,
    "rating": 4.82,
    "title": "Nescafe Coffee",
    "description": "Quality coffee from Nescafe, available in various blends for a rich and satisfying cup.",
    "price": 7.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/nescafe-coffee/thumbnail.webp"
  },
  {
    "id": 35,
    "rating": 4.81,
    "title": "Potatoes",
    "description": "Versatile and starchy potatoes, great for roasting, mashing, or as a side dish.",
    "price": 2.29,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/potatoes/thumbnail.webp"
  },
  {
    "id": 36,
    "rating": 4.18,
    "title": "Protein Powder",
    "description": "Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins.",
    "price": 19.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/protein-powder/thumbnail.webp"
  },
  {
    "id": 37,
    "rating": 4.2,
    "title": "Red Onions",
    "description": "Flavorful and aromatic red onions, perfect for adding depth to your savory dishes.",
    "price": 1.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/red-onions/thumbnail.webp"
  },
  {
    "id": 38,
    "rating": 3.18,
    "title": "Rice",
    "description": "High-quality rice, a staple for various cuisines and a versatile base for many dishes.",
    "price": 5.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/rice/thumbnail.webp"
  },
  {
    "id": 39,
    "rating": 4.75,
    "title": "Soft Drinks",
    "description": "Assorted soft drinks in various flavors, perfect for refreshing beverages.",
    "price": 1.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/soft-drinks/thumbnail.webp"
  },
  {
    "id": 40,
    "rating": 3.08,
    "title": "Strawberry",
    "description": "Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.",
    "price": 3.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/strawberry/thumbnail.webp"
  },
  {
    "id": 41,
    "rating": 2.69,
    "title": "Tissue Paper Box",
    "description": "Convenient tissue paper box for everyday use, providing soft and absorbent tissues.",
    "price": 2.49,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/thumbnail.webp"
  },
  {
    "id": 42,
    "rating": 4.96,
    "title": "Water",
    "description": "Pure and refreshing bottled water, essential for staying hydrated throughout the day.",
    "price": 0.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/water/thumbnail.webp"
  },
  {
    "id": 43,
    "rating": 3.16,
    "title": "Decoration Swing",
    "description": "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
    "price": 59.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/thumbnail.webp"
  },
  {
    "id": 44,
    "rating": 4.53,
    "title": "Family Tree Photo Frame",
    "description": "The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.",
    "price": 29.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/thumbnail.webp"
  },
  {
    "id": 45,
    "rating": 4.67,
    "title": "House Showpiece Plant",
    "description": "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
    "price": 39.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/thumbnail.webp"
  },
  {
    "id": 46,
    "rating": 3.01,
    "title": "Plant Pot",
    "description": "The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.",
    "price": 14.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/thumbnail.webp"
  },
  {
    "id": 47,
    "rating": 3.55,
    "title": "Table Lamp",
    "description": "The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.",
    "price": 49.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/thumbnail.webp"
  },
  {
    "id": 48,
    "rating": 3.27,
    "title": "Bamboo Spatula",
    "description": "The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.",
    "price": 7.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/thumbnail.webp"
  },
  {
    "id": 49,
    "rating": 4.46,
    "title": "Black Aluminium Cup",
    "description": "The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.",
    "price": 5.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/thumbnail.webp"
  },
  {
    "id": 50,
    "rating": 3.9,
    "title": "Black Whisk",
    "description": "The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.",
    "price": 9.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/thumbnail.webp"
  },
  {
    "id": 51,
    "rating": 4.56,
    "title": "Boxed Blender",
    "description": "The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.",
    "price": 39.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/thumbnail.webp"
  },
  {
    "id": 52,
    "rating": 4.05,
    "title": "Carbon Steel Wok",
    "description": "The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.",
    "price": 29.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/thumbnail.webp"
  },
  {
    "id": 53,
    "rating": 3.7,
    "title": "Chopping Board",
    "description": "The Chopping Board is an essential kitchen accessory for food preparation. Made from durable material, it provides a safe and hygienic surface for cutting and chopping.",
    "price": 12.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/thumbnail.webp"
  },
  {
    "id": 54,
    "rating": 4.63,
    "title": "Citrus Squeezer Yellow",
    "description": "The Citrus Squeezer in Yellow is a handy tool for extracting juice from citrus fruits. Its vibrant color adds a cheerful touch to your kitchen gadgets.",
    "price": 8.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/citrus-squeezer-yellow/thumbnail.webp"
  },
  {
    "id": 55,
    "rating": 3.09,
    "title": "Egg Slicer",
    "description": "The Egg Slicer is a convenient tool for slicing boiled eggs evenly. It's perfect for salads, sandwiches, and other dishes where sliced eggs are desired.",
    "price": 6.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/thumbnail.webp"
  },
  {
    "id": 56,
    "rating": 4.11,
    "title": "Electric Stove",
    "description": "The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.",
    "price": 49.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/thumbnail.webp"
  },
  {
    "id": 57,
    "rating": 3.04,
    "title": "Fine Mesh Strainer",
    "description": "The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.",
    "price": 9.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/fine-mesh-strainer/thumbnail.webp"
  },
  {
    "id": 58,
    "rating": 3.11,
    "title": "Fork",
    "description": "The Fork is a classic utensil for various dining and serving purposes. Its durable and ergonomic design makes it a reliable choice for everyday use.",
    "price": 3.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/fork/thumbnail.webp"
  },
  {
    "id": 59,
    "rating": 4.02,
    "title": "Glass",
    "description": "The Glass is a versatile and elegant drinking vessel suitable for a variety of beverages. Its clear design allows you to enjoy the colors and textures of your drinks.",
    "price": 4.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/glass/thumbnail.webp"
  },
  {
    "id": 60,
    "rating": 3.21,
    "title": "Grater Black",
    "description": "The Grater in Black is a handy kitchen tool for grating cheese, vegetables, and more. Its sleek design and sharp blades make food preparation efficient and easy.",
    "price": 10.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/thumbnail.webp"
  },
  {
    "id": 61,
    "rating": 3.86,
    "title": "Hand Blender",
    "description": "The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.",
    "price": 34.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/hand-blender/thumbnail.webp"
  },
  {
    "id": 62,
    "rating": 4.71,
    "title": "Ice Cube Tray",
    "description": "The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.",
    "price": 5.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/thumbnail.webp"
  },
  {
    "id": 63,
    "rating": 3.09,
    "title": "Kitchen Sieve",
    "description": "The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.",
    "price": 7.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/thumbnail.webp"
  },
  {
    "id": 64,
    "rating": 3.26,
    "title": "Knife",
    "description": "The Knife is an essential kitchen tool for chopping, slicing, and dicing. Its sharp blade and ergonomic handle make it a reliable choice for food preparation.",
    "price": 14.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/thumbnail.webp"
  },
  {
    "id": 65,
    "rating": 4.93,
    "title": "Lunch Box",
    "description": "The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.",
    "price": 12.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/lunch-box/thumbnail.webp"
  },
  {
    "id": 66,
    "rating": 4.82,
    "title": "Microwave Oven",
    "description": "The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.",
    "price": 89.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/thumbnail.webp"
  },
  {
    "id": 67,
    "rating": 2.64,
    "title": "Mug Tree Stand",
    "description": "The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.",
    "price": 15.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/thumbnail.webp"
  },
  {
    "id": 68,
    "rating": 2.79,
    "title": "Pan",
    "description": "The Pan is a versatile and essential cookware item for frying, sautéing, and cooking various dishes. Its non-stick coating ensures easy food release and cleanup.",
    "price": 24.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/pan/thumbnail.webp"
  },
  {
    "id": 69,
    "rating": 3.65,
    "title": "Plate",
    "description": "The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.",
    "price": 3.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/plate/thumbnail.webp"
  },
  {
    "id": 70,
    "rating": 4.42,
    "title": "Red Tongs",
    "description": "The Red Tongs are versatile kitchen tongs suitable for various cooking and serving tasks. Their vibrant color adds a pop of excitement to your kitchen utensils.",
    "price": 6.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/red-tongs/thumbnail.webp"
  },
  {
    "id": 71,
    "rating": 3.22,
    "title": "Silver Pot With Glass Cap",
    "description": "The Silver Pot with Glass Cap is a stylish and functional cookware item for boiling, simmering, and preparing delicious meals. Its glass cap allows you to monitor cooking progress.",
    "price": 39.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/silver-pot-with-glass-cap/thumbnail.webp"
  },
  {
    "id": 72,
    "rating": 3.4,
    "title": "Slotted Turner",
    "description": "The Slotted Turner is a kitchen utensil designed for flipping and turning food items. Its slotted design allows excess liquid to drain, making it ideal for frying and sautéing.",
    "price": 8.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/slotted-turner/thumbnail.webp"
  },
  {
    "id": 73,
    "rating": 4.87,
    "title": "Spice Rack",
    "description": "The Spice Rack is a convenient organizer for your spices and seasonings. Keep your kitchen essentials within reach and neatly arranged with this stylish spice rack.",
    "price": 19.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/spice-rack/thumbnail.webp"
  },
  {
    "id": 74,
    "rating": 4.03,
    "title": "Spoon",
    "description": "The Spoon is a versatile kitchen utensil for stirring, serving, and tasting. Its ergonomic design and durable construction make it an essential tool for every kitchen.",
    "price": 4.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/spoon/thumbnail.webp"
  },
  {
    "id": 75,
    "rating": 4.62,
    "title": "Tray",
    "description": "The Tray is a functional and decorative item for serving snacks, appetizers, or drinks. Its stylish design makes it a versatile accessory for entertaining guests.",
    "price": 16.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/tray/thumbnail.webp"
  },
  {
    "id": 76,
    "rating": 2.92,
    "title": "Wooden Rolling Pin",
    "description": "The Wooden Rolling Pin is a classic kitchen tool for rolling out dough for baking. Its smooth surface and sturdy handles make it easy to achieve uniform thickness.",
    "price": 11.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/wooden-rolling-pin/thumbnail.webp"
  },
  {
    "id": 77,
    "rating": 4.24,
    "title": "Yellow Peeler",
    "description": "The Yellow Peeler is a handy tool for peeling fruits and vegetables with ease. Its bright yellow color adds a cheerful touch to your kitchen gadgets.",
    "price": 5.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/kitchen-accessories/yellow-peeler/thumbnail.webp"
  },
  {
    "id": 78,
    "rating": 3.65,
    "title": "Apple MacBook Pro 14 Inch Space Grey",
    "description": "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
    "price": 1999.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp"
  },
  {
    "id": 79,
    "rating": 3.95,
    "title": "Asus Zenbook Pro Dual Screen Laptop",
    "description": "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
    "price": 1799.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/thumbnail.webp"
  },
  {
    "id": 80,
    "rating": 4.98,
    "title": "Huawei Matebook X Pro",
    "description": "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
    "price": 1399.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/thumbnail.webp"
  },
  {
    "id": 81,
    "rating": 2.86,
    "title": "Lenovo Yoga 920",
    "description": "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
    "price": 1099.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/thumbnail.webp"
  },
  {
    "id": 82,
    "rating": 2.67,
    "title": "New DELL XPS 13 9300 Laptop",
    "description": "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
    "price": 1499.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp"
  },
  {
    "id": 83,
    "rating": 3.64,
    "title": "Blue & Black Check Shirt",
    "description": "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
    "price": 29.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp"
  },
  {
    "id": 84,
    "rating": 3.18,
    "title": "Gigabyte Aorus Men Tshirt",
    "description": "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
    "price": 24.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/thumbnail.webp"
  },
  {
    "id": 85,
    "rating": 3.46,
    "title": "Man Plaid Shirt",
    "description": "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
    "price": 34.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/thumbnail.webp"
  },
  {
    "id": 86,
    "rating": 2.9,
    "title": "Man Short Sleeve Shirt",
    "description": "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
    "price": 19.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp"
  },
  {
    "id": 87,
    "rating": 2.72,
    "title": "Men Check Shirt",
    "description": "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.",
    "price": 27.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/thumbnail.webp"
  },
  {
    "id": 88,
    "rating": 4.77,
    "title": "Nike Air Jordan 1 Red And Black",
    "description": "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.",
    "price": 149.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp"
  },
  {
    "id": 89,
    "rating": 3.88,
    "title": "Nike Baseball Cleats",
    "description": "Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.",
    "price": 79.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/thumbnail.webp"
  },
  {
    "id": 90,
    "rating": 4.9,
    "title": "Puma Future Rider Trainers",
    "description": "The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.",
    "price": 89.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp"
  },
  {
    "id": 91,
    "rating": 4.77,
    "title": "Sports Sneakers Off White & Red",
    "description": "The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.",
    "price": 119.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/thumbnail.webp"
  },
  {
    "id": 92,
    "rating": 4.69,
    "title": "Sports Sneakers Off White Red",
    "description": "Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.",
    "price": 109.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/thumbnail.webp"
  },
  {
    "id": 93,
    "rating": 4.19,
    "title": "Brown Leather Belt Watch",
    "description": "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
    "price": 89.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/thumbnail.webp"
  },
  {
    "id": 94,
    "rating": 3.87,
    "title": "Longines Master Collection",
    "description": "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
    "price": 1499.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/thumbnail.webp"
  },
  {
    "id": 95,
    "rating": 4.97,
    "title": "Rolex Cellini Date Black Dial",
    "description": "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
    "price": 8999.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/thumbnail.webp"
  },
  {
    "id": 96,
    "rating": 2.58,
    "title": "Rolex Cellini Moonphase",
    "description": "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
    "price": 12999.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/thumbnail.webp"
  },
  {
    "id": 97,
    "rating": 3.66,
    "title": "Rolex Datejust",
    "description": "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
    "price": 10999.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/thumbnail.webp"
  },
  {
    "id": 98,
    "rating": 2.69,
    "title": "Rolex Submariner Watch",
    "description": "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
    "price": 13999.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/thumbnail.webp"
  },
  {
    "id": 99,
    "rating": 4.99,
    "title": "Amazon Echo Plus",
    "description": "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
    "price": 99.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/thumbnail.webp"
  },
  {
    "id": 100,
    "rating": 4.15,
    "title": "Apple Airpods",
    "description": "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
    "price": 129.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp"
  },
  {
    "id": 101,
    "rating": 3.47,
    "title": "Apple AirPods Max Silver",
    "description": "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
    "price": 549.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp"
  },
  {
    "id": 102,
    "rating": 3.68,
    "title": "Apple Airpower Wireless Charger",
    "description": "The Apple AirPower Wireless Charger provides a convenient way to charge your compatible Apple devices wirelessly. Simply place your devices on the charging mat for effortless charging.",
    "price": 79.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpower-wireless-charger/thumbnail.webp"
  },
  {
    "id": 103,
    "rating": 4.62,
    "title": "Apple HomePod Mini Cosmic Grey",
    "description": "The Apple HomePod Mini in Cosmic Grey is a compact smart speaker that delivers impressive audio and integrates seamlessly with the Apple ecosystem for a smart home experience.",
    "price": 99.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-homepod-mini-cosmic-grey/thumbnail.webp"
  },
  {
    "id": 104,
    "rating": 4.15,
    "title": "Apple iPhone Charger",
    "description": "The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.",
    "price": 19.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/thumbnail.webp"
  },
  {
    "id": 105,
    "rating": 3.62,
    "title": "Apple MagSafe Battery Pack",
    "description": "The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.",
    "price": 99.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/thumbnail.webp"
  },
  {
    "id": 106,
    "rating": 2.74,
    "title": "Apple Watch Series 4 Gold",
    "description": "The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.",
    "price": 349.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/thumbnail.webp"
  },
  {
    "id": 107,
    "rating": 4.24,
    "title": "Beats Flex Wireless Earphones",
    "description": "The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.",
    "price": 49.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/thumbnail.webp"
  },
  {
    "id": 108,
    "rating": 3.62,
    "title": "iPhone 12 Silicone Case with MagSafe Plum",
    "description": "The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.",
    "price": 29.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/thumbnail.webp"
  },
  {
    "id": 109,
    "rating": 4.43,
    "title": "Monopod",
    "description": "The Monopod is a versatile camera accessory for stable and adjustable shooting. Perfect for capturing selfies, group photos, and videos with ease.",
    "price": 19.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/thumbnail.webp"
  },
  {
    "id": 110,
    "rating": 3.55,
    "title": "Selfie Lamp with iPhone",
    "description": "The Selfie Lamp with iPhone is a portable and adjustable LED light designed to enhance your selfies and video calls. Attach it to your iPhone for well-lit photos.",
    "price": 14.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-lamp-with-iphone/thumbnail.webp"
  },
  {
    "id": 111,
    "rating": 3.88,
    "title": "Selfie Stick Monopod",
    "description": "The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.",
    "price": 12.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-stick-monopod/thumbnail.webp"
  },
  {
    "id": 112,
    "rating": 2.78,
    "title": "TV Studio Camera Pedestal",
    "description": "The TV Studio Camera Pedestal is a professional-grade camera support system for smooth and precise camera movements in a studio setting. Ideal for broadcast and production.",
    "price": 499.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/tv-studio-camera-pedestal/thumbnail.webp"
  },
  {
    "id": 113,
    "rating": 4.91,
    "title": "Generic Motorcycle",
    "description": "The Generic Motorcycle is a versatile and reliable bike suitable for various riding preferences. With a balanced design, it provides a comfortable and efficient riding experience.",
    "price": 3999.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/thumbnail.webp"
  },
  {
    "id": 114,
    "rating": 3.98,
    "title": "Kawasaki Z800",
    "description": "The Kawasaki Z800 is a powerful and agile sportbike known for its striking design and performance. It's equipped with advanced features, making it a favorite among motorcycle enthusiasts.",
    "price": 8999.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/thumbnail.webp"
  },
  {
    "id": 115,
    "rating": 2.97,
    "title": "MotoGP CI.H1",
    "description": "The MotoGP CI.H1 is a high-performance motorcycle inspired by MotoGP racing technology. It offers cutting-edge features and precision engineering for an exhilarating riding experience.",
    "price": 14999.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/thumbnail.webp"
  },
  {
    "id": 116,
    "rating": 2.53,
    "title": "Scooter Motorcycle",
    "description": "The Scooter Motorcycle is a practical and fuel-efficient bike ideal for urban commuting. It features a step-through design and user-friendly controls for easy maneuverability.",
    "price": 2999.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/thumbnail.webp"
  },
  {
    "id": 117,
    "rating": 3.94,
    "title": "Sportbike Motorcycle",
    "description": "The Sportbike Motorcycle is designed for speed and agility, with a sleek and aerodynamic profile. It's suitable for riders looking for a dynamic and thrilling riding experience.",
    "price": 7499.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/thumbnail.webp"
  },
  {
    "id": 118,
    "rating": 3.19,
    "title": "Attitude Super Leaves Hand Soap",
    "description": "Attitude Super Leaves Hand Soap is a natural and nourishing hand soap enriched with the goodness of super leaves. It cleanses and moisturizes your hands, leaving them feeling fresh and soft.",
    "price": 8.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/thumbnail.webp"
  },
  {
    "id": 119,
    "rating": 4.51,
    "title": "Olay Ultra Moisture Shea Butter Body Wash",
    "description": "Olay Ultra Moisture Shea Butter Body Wash is a luxurious body wash that hydrates and nourishes your skin with the moisturizing power of shea butter. Enjoy a rich lather and silky-smooth skin.",
    "price": 12.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/thumbnail.webp"
  },
  {
    "id": 120,
    "rating": 3.16,
    "title": "Vaseline Men Body and Face Lotion",
    "description": "Vaseline Men Body and Face Lotion is a specially formulated lotion designed to provide long-lasting moisture to men's skin. It absorbs quickly and helps keep the skin hydrated and healthy.",
    "price": 9.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/thumbnail.webp"
  },
  {
    "id": 121,
    "rating": 2.83,
    "title": "iPhone 5s",
    "description": "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
    "price": 199.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/thumbnail.webp"
  },
  {
    "id": 122,
    "rating": 3.41,
    "title": "iPhone 6",
    "description": "The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.",
    "price": 299.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/thumbnail.webp"
  },
  {
    "id": 123,
    "rating": 4.12,
    "title": "iPhone 13 Pro",
    "description": "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.",
    "price": 1099.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp"
  },
  {
    "id": 124,
    "rating": 2.51,
    "title": "iPhone X",
    "description": "The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.",
    "price": 899.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/thumbnail.webp"
  },
  {
    "id": 125,
    "rating": 3.94,
    "title": "Oppo A57",
    "description": "The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.",
    "price": 249.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/thumbnail.webp"
  },
  {
    "id": 126,
    "rating": 3.51,
    "title": "Oppo F19 Pro Plus",
    "description": "The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.",
    "price": 399.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/thumbnail.webp"
  },
  {
    "id": 127,
    "rating": 4.25,
    "title": "Oppo K1",
    "description": "The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.",
    "price": 299.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/thumbnail.webp"
  },
  {
    "id": 128,
    "rating": 4.2,
    "title": "Realme C35",
    "description": "The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.",
    "price": 149.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/thumbnail.webp"
  },
  {
    "id": 129,
    "rating": 3.7,
    "title": "Realme X",
    "description": "The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.",
    "price": 299.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/realme-x/thumbnail.webp"
  },
  {
    "id": 130,
    "rating": 4.58,
    "title": "Realme XT",
    "description": "The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.",
    "price": 349.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/thumbnail.webp"
  },
  {
    "id": 131,
    "rating": 3.3,
    "title": "Samsung Galaxy S7",
    "description": "The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.",
    "price": 299.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/thumbnail.webp"
  },
  {
    "id": 132,
    "rating": 4.4,
    "title": "Samsung Galaxy S8",
    "description": "The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.",
    "price": 499.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/thumbnail.webp"
  },
  {
    "id": 133,
    "rating": 3.06,
    "title": "Samsung Galaxy S10",
    "description": "The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.",
    "price": 699.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/thumbnail.webp"
  },
  {
    "id": 134,
    "rating": 3.5,
    "title": "Vivo S1",
    "description": "The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.",
    "price": 249.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/thumbnail.webp"
  },
  {
    "id": 135,
    "rating": 3.6,
    "title": "Vivo V9",
    "description": "The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.",
    "price": 299.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/thumbnail.webp"
  },
  {
    "id": 136,
    "rating": 4.26,
    "title": "Vivo X21",
    "description": "The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.",
    "price": 499.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/thumbnail.webp"
  },
  {
    "id": 137,
    "rating": 4.91,
    "title": "American Football",
    "description": "The American Football is a classic ball used in American football games. It is designed for throwing and catching, making it an essential piece of equipment for the sport.",
    "price": 19.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sports-accessories/american-football/thumbnail.webp"
  },
  {
    "id": 138,
    "rating": 2.57,
    "title": "Baseball Ball",
    "description": "The Baseball Ball is a standard baseball used in baseball games. It features a durable leather cover and is designed for pitching, hitting, and fielding in the game of baseball.",
    "price": 8.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-ball/thumbnail.webp"
  },
  {
    "id": 139,
    "rating": 3.96,
    "title": "Baseball Glove",
    "description": "The Baseball Glove is a protective glove worn by baseball players. It is designed to catch and field the baseball, providing players with comfort and control during the game.",
    "price": 24.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/thumbnail.webp"
  },
  {
    "id": 140,
    "rating": 4.66,
    "title": "Basketball",
    "description": "The Basketball is a standard ball used in basketball games. It is designed for dribbling, shooting, and passing in the game of basketball, suitable for both indoor and outdoor play.",
    "price": 14.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sports-accessories/basketball/thumbnail.webp"
  },
  {
    "id": 141,
    "rating": 4.6,
    "title": "Basketball Rim",
    "description": "The Basketball Rim is a sturdy hoop and net assembly mounted on a basketball backboard. It provides a target for shooting and scoring in the game of basketball.",
    "price": 39.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sports-accessories/basketball-rim/thumbnail.webp"
  },
  {
    "id": 142,
    "rating": 3.53,
    "title": "Cricket Ball",
    "description": "The Cricket Ball is a hard leather ball used in the sport of cricket. It is bowled and batted in the game, and its hardness and seam contribute to the dynamics of cricket play.",
    "price": 12.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-ball/thumbnail.webp"
  },
  {
    "id": 143,
    "rating": 3.17,
    "title": "Cricket Bat",
    "description": "The Cricket Bat is an essential piece of cricket equipment used by batsmen to hit the cricket ball. It is made of wood and comes in various sizes and designs.",
    "price": 29.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-bat/thumbnail.webp"
  },
  {
    "id": 144,
    "rating": 4.69,
    "title": "Cricket Helmet",
    "description": "The Cricket Helmet is a protective headgear worn by cricket players, especially batsmen and wicketkeepers. It provides protection against fast bowling and bouncers.",
    "price": 44.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/thumbnail.webp"
  },
  {
    "id": 145,
    "rating": 4.73,
    "title": "Cricket Wicket",
    "description": "The Cricket Wicket is a set of three stumps and two bails, forming a wicket used in the sport of cricket. Batsmen aim to protect the wicket while scoring runs.",
    "price": 29.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-wicket/thumbnail.webp"
  },
  {
    "id": 146,
    "rating": 2.85,
    "title": "Feather Shuttlecock",
    "description": "The Feather Shuttlecock is used in the sport of badminton. It features natural feathers and is designed for high-speed play, providing stability and accuracy during matches.",
    "price": 5.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sports-accessories/feather-shuttlecock/thumbnail.webp"
  },
  {
    "id": 147,
    "rating": 3.28,
    "title": "Football",
    "description": "The Football, also known as a soccer ball, is the standard ball used in the sport of football (soccer). It is designed for kicking and passing in the game.",
    "price": 17.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sports-accessories/football/thumbnail.webp"
  },
  {
    "id": 148,
    "rating": 4.3,
    "title": "Golf Ball",
    "description": "The Golf Ball is a small ball used in the sport of golf. It features dimples on its surface, providing aerodynamic lift and distance when struck by a golf club.",
    "price": 9.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sports-accessories/golf-ball/thumbnail.webp"
  },
  {
    "id": 149,
    "rating": 4.41,
    "title": "Iron Golf",
    "description": "The Iron Golf is a type of golf club designed for various golf shots. It features a solid metal head and is used for approach shots, chipping, and other golfing techniques.",
    "price": 49.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sports-accessories/iron-golf/thumbnail.webp"
  },
  {
    "id": 150,
    "rating": 4.66,
    "title": "Metal Baseball Bat",
    "description": "The Metal Baseball Bat is a durable and lightweight baseball bat made from metal alloys. It is commonly used in baseball games for hitting and batting practice.",
    "price": 29.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sports-accessories/metal-baseball-bat/thumbnail.webp"
  },
  {
    "id": 151,
    "rating": 4.06,
    "title": "Tennis Ball",
    "description": "The Tennis Ball is a standard ball used in the sport of tennis. It is designed for bouncing and hitting with tennis rackets during matches or practice sessions.",
    "price": 6.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-ball/thumbnail.webp"
  },
  {
    "id": 152,
    "rating": 4.03,
    "title": "Tennis Racket",
    "description": "The Tennis Racket is an essential piece of equipment used in the sport of tennis. It features a frame with strings and a grip, allowing players to hit the tennis ball.",
    "price": 49.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-racket/thumbnail.webp"
  },
  {
    "id": 153,
    "rating": 3.84,
    "title": "Volleyball",
    "description": "The Volleyball is a standard ball used in the sport of volleyball. It is designed for passing, setting, and spiking over the net during volleyball matches.",
    "price": 11.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sports-accessories/volleyball/thumbnail.webp"
  },
  {
    "id": 154,
    "rating": 4.41,
    "title": "Black Sun Glasses",
    "description": "The Black Sun Glasses are a classic and stylish choice, featuring a sleek black frame and tinted lenses. They provide both UV protection and a fashionable look.",
    "price": 29.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/thumbnail.webp"
  },
  {
    "id": 155,
    "rating": 3.86,
    "title": "Classic Sun Glasses",
    "description": "The Classic Sun Glasses offer a timeless design with a neutral frame and UV-protected lenses. These sunglasses are versatile and suitable for various occasions.",
    "price": 24.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/thumbnail.webp"
  },
  {
    "id": 156,
    "rating": 4.55,
    "title": "Green and Black Glasses",
    "description": "The Green and Black Glasses feature a bold combination of green and black colors, adding a touch of vibrancy to your eyewear collection. They are both stylish and eye-catching.",
    "price": 34.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/thumbnail.webp"
  },
  {
    "id": 157,
    "rating": 2.79,
    "title": "Party Glasses",
    "description": "The Party Glasses are designed to add flair to your party outfit. With unique shapes or colorful frames, they're perfect for adding a playful touch to your look during celebrations.",
    "price": 19.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/thumbnail.webp"
  },
  {
    "id": 158,
    "rating": 3.02,
    "title": "Sunglasses",
    "description": "The Sunglasses offer a classic and simple design with a focus on functionality. These sunglasses provide essential UV protection while maintaining a timeless look.",
    "price": 22.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/thumbnail.webp"
  },
  {
    "id": 159,
    "rating": 3.18,
    "title": "iPad Mini 2021 Starlight",
    "description": "The iPad Mini 2021 in Starlight is a compact and powerful tablet from Apple. Featuring a stunning Retina display, powerful A-series chip, and a sleek design, it offers a premium tablet experience.",
    "price": 499.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/thumbnail.webp"
  },
  {
    "id": 160,
    "rating": 4.68,
    "title": "Samsung Galaxy Tab S8 Plus Grey",
    "description": "The Samsung Galaxy Tab S8 Plus in Grey is a high-performance Android tablet by Samsung. With a large AMOLED display, powerful processor, and S Pen support, it's ideal for productivity and entertainment.",
    "price": 599.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/thumbnail.webp"
  },
  {
    "id": 161,
    "rating": 3.72,
    "title": "Samsung Galaxy Tab White",
    "description": "The Samsung Galaxy Tab in White is a sleek and versatile Android tablet. With a vibrant display, long-lasting battery, and a range of features, it offers a great user experience for various tasks.",
    "price": 349.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/thumbnail.webp"
  },
  {
    "id": 162,
    "rating": 4.17,
    "title": "Blue Frock",
    "description": "The Blue Frock is a charming and stylish dress for various occasions. With a vibrant blue color and a comfortable design, it adds a touch of elegance to your wardrobe.",
    "price": 29.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/tops/blue-frock/thumbnail.webp"
  },
  {
    "id": 163,
    "rating": 4.77,
    "title": "Girl Summer Dress",
    "description": "The Girl Summer Dress is a cute and breezy dress designed for warm weather. With playful patterns and lightweight fabric, it's perfect for keeping cool and stylish during the summer.",
    "price": 19.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/thumbnail.webp"
  },
  {
    "id": 164,
    "rating": 2.72,
    "title": "Gray Dress",
    "description": "The Gray Dress is a versatile and chic option for various occasions. With a neutral gray color, it can be dressed up or down, making it a wardrobe staple for any fashion-forward individual.",
    "price": 34.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/tops/gray-dress/thumbnail.webp"
  },
  {
    "id": 165,
    "rating": 3.23,
    "title": "Short Frock",
    "description": "The Short Frock is a playful and trendy dress with a shorter length. Ideal for casual outings or special occasions, it combines style and comfort for a fashionable look.",
    "price": 24.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/tops/short-frock/thumbnail.webp"
  },
  {
    "id": 166,
    "rating": 4.05,
    "title": "Tartan Dress",
    "description": "The Tartan Dress features a classic tartan pattern, bringing a timeless and sophisticated touch to your wardrobe. Perfect for fall and winter, it adds a hint of traditional charm.",
    "price": 39.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/tops/tartan-dress/thumbnail.webp"
  },
  {
    "id": 167,
    "rating": 4.05,
    "title": "300 Touring",
    "description": "The 300 Touring is a stylish and comfortable sedan, known for its luxurious features and smooth performance.",
    "price": 28999.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/vehicle/300-touring/thumbnail.webp"
  },
  {
    "id": 168,
    "rating": 2.58,
    "title": "Charger SXT RWD",
    "description": "The Charger SXT RWD is a powerful and sporty rear-wheel-drive sedan, offering a blend of performance and practicality.",
    "price": 32999.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/thumbnail.webp"
  },
  {
    "id": 169,
    "rating": 2.65,
    "title": "Dodge Hornet GT Plus",
    "description": "The Dodge Hornet GT Plus is a compact and agile hatchback, perfect for urban driving with a touch of sportiness.",
    "price": 24999.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/thumbnail.webp"
  },
  {
    "id": 170,
    "rating": 4.07,
    "title": "Durango SXT RWD",
    "description": "The Durango SXT RWD is a spacious and versatile SUV, known for its strong performance and family-friendly features.",
    "price": 36999.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/thumbnail.webp"
  },
  {
    "id": 171,
    "rating": 3.62,
    "title": "Pacifica Touring",
    "description": "The Pacifica Touring is a stylish and well-equipped minivan, offering comfort and convenience for family journeys.",
    "price": 31999.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/thumbnail.webp"
  },
  {
    "id": 172,
    "rating": 2.92,
    "title": "Blue Women's Handbag",
    "description": "The Blue Women's Handbag is a stylish and spacious accessory for everyday use. With a vibrant blue color and multiple compartments, it combines fashion and functionality.",
    "price": 49.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/thumbnail.webp"
  },
  {
    "id": 173,
    "rating": 4.92,
    "title": "Heshe Women's Leather Bag",
    "description": "The Heshe Women's Leather Bag is a luxurious and high-quality leather bag for the sophisticated woman. With a timeless design and durable craftsmanship, it's a versatile accessory.",
    "price": 129.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/thumbnail.webp"
  },
  {
    "id": 174,
    "rating": 2.71,
    "title": "Prada Women Bag",
    "description": "The Prada Women Bag is an iconic designer bag that exudes elegance and luxury. Crafted with precision and featuring the Prada logo, it's a statement piece for fashion enthusiasts.",
    "price": 599.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/thumbnail.webp"
  },
  {
    "id": 175,
    "rating": 3.36,
    "title": "White Faux Leather Backpack",
    "description": "The White Faux Leather Backpack is a trendy and practical backpack for the modern woman. With a sleek white design and ample storage space, it's perfect for both casual and on-the-go styles.",
    "price": 39.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/thumbnail.webp"
  },
  {
    "id": 176,
    "rating": 2.89,
    "title": "Women Handbag Black",
    "description": "The Women Handbag in Black is a classic and versatile accessory that complements various outfits. With a timeless black color and functional design, it's a must-have in every woman's wardrobe.",
    "price": 59.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/thumbnail.webp"
  },
  {
    "id": 177,
    "rating": 3.64,
    "title": "Black Women's Gown",
    "description": "The Black Women's Gown is an elegant and timeless evening gown. With a sleek black design, it's perfect for formal events and special occasions, exuding sophistication and style.",
    "price": 129.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/thumbnail.webp"
  },
  {
    "id": 178,
    "rating": 3.05,
    "title": "Corset Leather With Skirt",
    "description": "The Corset Leather With Skirt is a bold and edgy ensemble that combines a stylish corset with a matching skirt. Ideal for fashion-forward individuals, it makes a statement at any event.",
    "price": 89.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/thumbnail.webp"
  },
  {
    "id": 179,
    "rating": 4.52,
    "title": "Corset With Black Skirt",
    "description": "The Corset With Black Skirt is a chic and versatile outfit that pairs a fashionable corset with a classic black skirt. It offers a trendy and coordinated look for various occasions.",
    "price": 79.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/thumbnail.webp"
  },
  {
    "id": 180,
    "rating": 4.88,
    "title": "Dress Pea",
    "description": "The Dress Pea is a stylish and comfortable dress with a pea pattern. Perfect for casual outings, it adds a playful and fun element to your wardrobe, making it a great choice for day-to-day wear.",
    "price": 49.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/thumbnail.webp"
  },
  {
    "id": 181,
    "rating": 4.48,
    "title": "Marni Red & Black Suit",
    "description": "The Marni Red & Black Suit is a sophisticated and fashion-forward suit ensemble. With a combination of red and black tones, it showcases a modern design for a bold and confident look.",
    "price": 179.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/thumbnail.webp"
  },
  {
    "id": 182,
    "rating": 3.96,
    "title": "Green Crystal Earring",
    "description": "The Green Crystal Earring is a dazzling accessory that features a vibrant green crystal. With a classic design, it adds a touch of elegance to your ensemble, perfect for formal or special occasions.",
    "price": 29.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/thumbnail.webp"
  },
  {
    "id": 183,
    "rating": 3.57,
    "title": "Green Oval Earring",
    "description": "The Green Oval Earring is a stylish and versatile accessory with a unique oval shape. Whether for casual or dressy occasions, its green hue and contemporary design make it a standout piece.",
    "price": 24.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/thumbnail.webp"
  },
  {
    "id": 184,
    "rating": 4.4,
    "title": "Tropical Earring",
    "description": "The Tropical Earring is a fun and playful accessory inspired by tropical elements. Featuring vibrant colors and a lively design, it's perfect for adding a touch of summer to your look.",
    "price": 19.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/thumbnail.webp"
  },
  {
    "id": 185,
    "rating": 2.53,
    "title": "Black & Brown Slipper",
    "description": "The Black & Brown Slipper is a comfortable and stylish choice for casual wear. Featuring a blend of black and brown colors, it adds a touch of sophistication to your relaxation.",
    "price": 19.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/thumbnail.webp"
  },
  {
    "id": 186,
    "rating": 4.92,
    "title": "Calvin Klein Heel Shoes",
    "description": "Calvin Klein Heel Shoes are elegant and sophisticated, designed for formal occasions. With a classic design and high-quality materials, they complement your stylish ensemble.",
    "price": 79.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/thumbnail.webp"
  },
  {
    "id": 187,
    "rating": 3.26,
    "title": "Golden Shoes Woman",
    "description": "The Golden Shoes for Women are a glamorous choice for special occasions. Featuring a golden hue and stylish design, they add a touch of luxury to your outfit.",
    "price": 49.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/thumbnail.webp"
  },
  {
    "id": 188,
    "rating": 3.05,
    "title": "Pampi Shoes",
    "description": "Pampi Shoes offer a blend of comfort and style for everyday use. With a versatile design, they are suitable for various casual occasions, providing a trendy and relaxed look.",
    "price": 29.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/thumbnail.webp"
  },
  {
    "id": 189,
    "rating": 3.25,
    "title": "Red Shoes",
    "description": "The Red Shoes make a bold statement with their vibrant red color. Whether for a party or a casual outing, these shoes add a pop of color and style to your wardrobe.",
    "price": 34.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/thumbnail.webp"
  },
  {
    "id": 190,
    "rating": 2.93,
    "title": "IWC Ingenieur Automatic Steel",
    "description": "The IWC Ingenieur Automatic Steel watch is a durable and sophisticated timepiece. With a stainless steel case and automatic movement, it combines precision and style for watch enthusiasts.",
    "price": 4999.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/thumbnail.webp"
  }
]


import { useState } from "react";

import Navbar from "./components/Navbar"

import "./App.css";



export default function Groceries() {

  const [groceries, setGroceries] = useState(products);
  const [itemvisible, setitemvisible] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [CartVisible, setCartVisible] = useState(false);
  const [Cart, setCart] = useState([]);


  function handleClick() {
    setitemvisible(prev => !prev)
  }

  function handleDetails(product) {
    setSelectedDetail(product);
  }

  function closeDetails() {
    setSelectedDetail(null);
  }

  function closeCart() {
    setCartVisible(false);
  }

  function clearCart() {
    setCart([])
  }

  return (

    <>
      <Navbar />

      <button onClick={handleClick} className="btn">{!itemvisible ? <p>I am very Busy!</p> : <p>I am free now!</p>}</button>

      <button onClick={() => setCartVisible(true)} className="btn4">Cart ({Cart.length})</button>

      {!itemvisible &&

        <div className="container">

          {groceries.map((product) => (

            <div key={product.id} className="item">

              <img src={product.thumbnail} alt={product.title} />

              <h2>{product.title}</h2>

              <p>Price: <strong>${product.price}</strong></p>

              <p>Rating: <strong>{product.rating}</strong></p>

              <button className="btn1" onClick={() => { setCart([...Cart, product]) }}>Add to Cart</button>

              <button className="btn2" onClick={() => handleDetails(product)}>View Details</button>

            </div>

          ))}


          {selectedDetail &&

            <div className="details">

              <div key={selectedDetail.id} className="item1">

                <img src={selectedDetail.thumbnail} alt={selectedDetail.title} />

                <h2>{selectedDetail.title}</h2>

                <p>Price: <strong>${selectedDetail.price}</strong></p>

                <p>Rating: <strong>{selectedDetail.rating}</strong></p>

                <p>Description: {selectedDetail.description}</p>

                <button className="btn2" onClick={closeDetails}>Close</button>

              </div>

            </div>

          }

        </div>

      }

      {CartVisible &&

        <div onClick={() => setCartVisible(false)} className="cartitems">

          <button onClick={closeCart} className="closebtn">Close</button>

          <button onClick={() =>setCart([]) className="closebtn">Clear Cart</button>



          <div onClick={(e) => e.stopPropagation()}>



            {Cart.length === 0 ?

              (
                <div className="empty-cart">
                  <h2>Your cart is empty</h2>
                </div>

              ) : (

                Cart.map((cartitem) =>

                  <div key={cartitem.id} className="cart-item">

                    <img src={cartitem.thumbnail} alt={cartitem.title} />

                    <h2>{cartitem.title}</h2>

                    <p>Price: <strong>${cartitem.price}</strong></p>

                    <p>Rating: <strong>{cartitem.rating}</strong></p>

                  </div>

                ))

            }

          </div>

        </div>
      }
    </>
  )

}

