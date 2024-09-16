import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import slugify from 'slugify';
import products from '../data/productsData';
import '../App.css'; // Assuming CSS will be written in App.css or respective stylesheets

const Singledisplay = () => {
  const { slug } = useParams(); // Get the slug from URL
  const product = products.find((item) => slugify(item.title, { lower: true }) === slug);

  const [selectedWeight, setSelectedWeight] = useState('250g');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleWeightChange = (weight) => {
    setSelectedWeight(weight);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  return (
    <div className="single-product-container">
      <div className="single-product-img">
        <img src={product.imgSrc} alt={product.title} />
      </div>

      <div className="single-product-details">
        <h2>{product.title}</h2>
        <h4>{product.price}</h4>

        <div className="weight-options">
          {['250g', '500g', '1kg'].map((weight) => (
            <button
              key={weight}
              className={`weight-btn ${selectedWeight === weight ? 'active' : ''}`}
              onClick={() => handleWeightChange(weight)}
            >
              {weight}
            </button>
          ))}
        </div>

        <div className="quantity-counter">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <input type="number" value={quantity} readOnly />
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>

        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Singledisplay;
