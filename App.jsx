const products = [
  {
    "id": 1,
    "rating": 2.56,
    "title": "Essence Mascara Lash Princess",
    "price": 9.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula."
  },
  {
    "id": 2,
    "rating": 2.86,
    "title": "Eyeshadow Palette with Mirror",
    "price": 19.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application."
  },
  {
    "id": 3,
    "rating": 4.64,
    "title": "Powder Canister",
    "price": 14.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish."
  },
  {
    "id": 4,
    "rating": 4.36,
    "title": "Red Lipstick",
    "price": 12.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
    "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish."
  },
  {
    "id": 5,
    "rating": 4.32,
    "title": "Red Nail Polish",
    "price": 8.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
    "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home."
  },
  {
    "id": 6,
    "rating": 4.37,
    "title": "Calvin Klein CK One",
    "price": 49.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
    "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear."
  },
  {
    "id": 7,
    "rating": 4.26,
    "title": "Chanel Coco Noir Eau De",
    "price": 129.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
    "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions."
  },
  {
    "id": 8,
    "rating": 3.8,
    "title": "Dior J'adore",
    "price": 89.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
    "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication."
  },
  {
    "id": 9,
    "rating": 3.96,
    "title": "Dolce Shine Eau de",
    "price": 69.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
    "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent."
  },
  {
    "id": 10,
    "rating": 2.74,
    "title": "Gucci Bloom Eau de",
    "price": 79.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
    "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent."
  },
  {
    "id": 11,
    "rating": 4.77,
    "title": "Annibale Colombo Bed",
    "price": 1899.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
    "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom."
  },
  {
    "id": 12,
    "rating": 3.92,
    "title": "Annibale Colombo Sofa",
    "price": 2499.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
    "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room."
  },
  {
    "id": 13,
    "rating": 2.87,
    "title": "Bedside Table African Cherry",
    "price": 299.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp",
    "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance."
  },
  {
    "id": 14,
    "rating": 4.88,
    "title": "Knoll Saarinen Executive Conference Chair",
    "price": 499.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp",
    "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design."
  },
  {
    "id": 15,
    "rating": 3.59,
    "title": "Wooden Bathroom Sink With Mirror",
    "price": 799.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp",
    "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror."
  },
  {
    "id": 16,
    "rating": 4.19,
    "title": "Apple",
    "price": 1.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
    "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes."
  },
  {
    "id": 17,
    "rating": 4.47,
    "title": "Beef Steak",
    "price": 12.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp",
    "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness."
  },
  {
    "id": 18,
    "rating": 3.13,
    "title": "Cat Food",
    "price": 8.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp",
    "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend."
  },
  {
    "id": 19,
    "rating": 3.19,
    "title": "Chicken Meat",
    "price": 9.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp",
    "description": "Fresh and tender chicken meat, suitable for various culinary preparations."
  },
  {
    "id": 20,
    "rating": 4.8,
    "title": "Cooking Oil",
    "price": 4.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp",
    "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications."
  },
  {
    "id": 21,
    "rating": 4.07,
    "title": "Cucumber",
    "price": 1.49,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp",
    "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side."
  },
  {
    "id": 22,
    "rating": 4.55,
    "title": "Dog Food",
    "price": 10.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp",
    "description": "Specially formulated dog food designed to provide essential nutrients for your canine companion."
  },
  {
    "id": 23,
    "rating": 2.53,
    "title": "Eggs",
    "price": 2.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
    "description": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast."
  },
  {
    "id": 24,
    "rating": 3.78,
    "title": "Fish Steak",
    "price": 14.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp",
    "description": "Quality fish steak, suitable for grilling, baking, or pan-searing."
  },
  {
    "id": 25,
    "rating": 3.25,
    "title": "Green Bell Pepper",
    "price": 1.29,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp",
    "description": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes."
  },
  {
    "id": 26,
    "rating": 3.66,
    "title": "Green Chili Pepper",
    "price": 0.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp",
    "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes."
  },
  {
    "id": 27,
    "rating": 3.97,
    "title": "Honey Jar",
    "price": 6.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",
    "description": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food."
  },
  {
    "id": 28,
    "rating": 3.39,
    "title": "Ice Cream",
    "price": 5.49,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp",
    "description": "Creamy and delicious ice cream, available in various flavors for a delightful treat."
  },
  {
    "id": 29,
    "rating": 3.94,
    "title": "Juice",
    "price": 3.99,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp",
    "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated."
  },
  {
    "id": 30,
    "rating": 4.93,
    "title": "Kiwi",
    "price": 2.49,
    "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp",
    "description": "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes."
  }
]

import { useState } from "react";
import Navbar from "./assets/components/Navbar"
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
    setCart()
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
          <button onClick={setCart} className="closebtn">Clear Cart</button>

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
