// src/contexts/CartContext.jsx

import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, weight, quantity) => {
    console.log('Adding item to cart:', item);
    
    // Compute the correct price based on the weight
    const basePrice = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    let priceMultiplier = 1;
    
    if (weight === '500g') priceMultiplier = 2;
    if (weight === '1kg') priceMultiplier = 4;

    const totalPrice = (basePrice * priceMultiplier).toFixed(2);

    setCartItems((prevItems) => {
      // Check if the item with the same id and weight already exists in the cart
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id && cartItem.weight === weight
      );

      if (existingItemIndex >= 0) {
        // If item exists, update the quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity; // Increment the quantity
        return updatedItems;
      } else {
        // If item doesn't exist, add it as a new item
        const newItem = {
          ...item,
          weight,
          quantity,
          totalPrice: `$${totalPrice}`,  // Store as a string with a currency symbol
          price: totalPrice, // Store the raw numeric price for calculations
        };
        return [...prevItems, newItem];
      }
    });
  };

  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const updateItemQuantity = (index, quantity) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity = quantity;
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
