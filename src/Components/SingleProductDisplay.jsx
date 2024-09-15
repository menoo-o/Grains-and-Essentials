import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import slugify from 'slugify';
import products from '../data/productsData';

const SingleProductDisplay = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const product = products.find((item) => slugify(item.title, { lower: true }) === slug); // Find product by slug

  // State for expanding Nutrition and Shelf Life sections
  const [showNutrition, setShowNutrition] = useState(false);
  const [showShelfLife, setShowShelfLife] = useState(false);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className='single-product-pg-container'>
      <div className='single-product-img'>
        <img src={product.imgSrc} alt={product.title} />
      </div>

      <div className='single-product-info'>
        <h2>{product.title}</h2>
        <h4>{product.price}</h4>

        {/* Weight and Quantity Selector */}
        <div className='single-product-weight-cart'>
          <select>
            {['250g', '500g', '1kg'].map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <div className='quantity-selector'>
            <button>-</button>
            <input type="number" value="1" readOnly />
            <button>+</button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="add-to-cart-btn">Add to Cart</button>

        {/* Product Description */}
        <div className="product-description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>

        {/* Ingredients */}
        <div className="product-ingredients">
          <h3>Ingredients</h3>
          <ul>
            {product.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Expandable Nutrition Section */}
        <div className="product-nutrition">
          <h3 onClick={() => setShowNutrition(!showNutrition)} style={{ cursor: 'pointer' }}>
            Nutritional Value {showNutrition ? '-' : '+'}
          </h3>
          {showNutrition && (
            <ul>
              {Object.entries(product.nutritionalValue).map(([key, value], index) => (
                <li key={index}>
                  <strong>{key}: </strong>{value}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Expandable Shelf Life Section */}
        <div className="product-shelf-life">
          <h3 onClick={() => setShowShelfLife(!showShelfLife)} style={{ cursor: 'pointer' }}>
            Shelf Life {showShelfLife ? '-' : '+'}
          </h3>
          {showShelfLife && (
            <p>{product.shelfLife}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProductDisplay;
