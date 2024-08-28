// ProductPage.jsx
import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import SaleItems from './SaleItems'; // SaleItems will contain CarouselComponent

const ProductPage = () => {
  // Shared state to manage quantities for each item
  const [quantities, setQuantities] = useState({});

  // Function to handle quantity changes
  const handleQuantityChange = (index, newQuantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [index]: newQuantity,
    }));
  };

  // Dummy product data
  const products = [
    { id: 30, imgSrc: '/shop/rice/steamed rice.webp', title: 'Steamed Rice', price: '$29', category: "Rice" },
    { id: 31, imgSrc: '/shop/rice/super basmati.webp', title: 'Super Basmati', price: '$18', category: "Rice" },

    // More product items...
  ];

  return (
    <div>
      <h1>Our Products</h1>
      <ProductGrid 
        products={products} 
        quantities={quantities} 
        onQuantityChange={handleQuantityChange} 
      />
      <SaleItems 
        quantities={quantities} 
        onQuantityChange={handleQuantityChange} 
      />
    </div>
  );
};

export default ProductPage;
