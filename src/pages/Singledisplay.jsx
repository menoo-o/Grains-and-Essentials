import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import slugify from 'slugify';
import { useCart } from '../contexts/CartContext';
import products from '../data/productsData';
import CartCard from '../Components/CartAlert';
import Accordion from '../Components/Accordion'; // Import the Accordion component
import '../App.css'; // Assuming CSS will be written in App.css or respective stylesheets

const Singledisplay = () => {
  const { slug } = useParams();
  const product = products.find((item) => slugify(item.title, { lower: true }) === slug);

  const { addItem, showCartAlert, cartItems } = useCart();

  const [selectedWeight, setSelectedWeight] = useState('250g');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleWeightChange = (weight) => {
    setSelectedWeight(weight);
    setQuantity(1); // Reset quantity when weight changes
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  const handleAddToCart = () => {
    addItem(product, selectedWeight, quantity);
  };

  const computePrice = (basePrice, weight) => {
    const numericPrice = parseFloat(basePrice.replace(/[^0-9.]/g, ''));
    let multiplier = 1;
    if (weight === '500g') multiplier = 2;
    if (weight === '1kg') multiplier = 4;
    return `$${(numericPrice * multiplier).toFixed(2)}`;
  };

  return (
    <div className="single-product-container">
      <div className="single-product-img">
        <img src={product.imgSrc} alt={product.title} />
      </div>

      <div className="single-product-details">
        <h2>{product.title}</h2>
        <h4>{computePrice(product.price, selectedWeight)}</h4>

        <p>{product.description}</p>

        <div className="weight-options">
          {(product.category !== 'storage' && product.id !== 3 && product.id !== 5) && (
            ['250g', '500g', '1kg'].map((weight) => (
              <button
                key={weight}
                className={`weight-btn-single ${selectedWeight === weight ? 'active' : ''}`}
                onClick={() => handleWeightChange(weight)}
              >
                {weight}
              </button>
            ))
          )}
        </div>

        <div className="quantity-counter">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <input type="number" value={quantity} readOnly />
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>

        <button className="single-add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>

        {/* Accordion Section */}
        <div className="product-additional-info">
          <Accordion title="Ingredients">
            <ul>
              {product.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </Accordion>

          <Accordion title="Nutritional Information">
            <ul>
              <li>Serving Size: {product.nutritionalValue.servingSize}</li>
              <li>Calories: {product.nutritionalValue.calories}</li>
              <li>Protein: {product.nutritionalValue.protein}</li>
              <li>Fat: {product.nutritionalValue.fat}</li>
              <li>Carbohydrates: {product.nutritionalValue.carbohydrates}</li>
              <li>Fiber: {product.nutritionalValue.fiber}</li>
            </ul>
          </Accordion>

          <Accordion title="Shelf Life">
            <p>{product.shelfLife}</p>
          </Accordion>
        </div>
      </div>

      {showCartAlert && cartItems.length > 0 && (
        <div className="cart-alert">
          <CartCard item={cartItems[cartItems.length - 1]} /> {/* Show the last added item */}
        </div>
      )}
    </div>
  );
};

export default Singledisplay;
