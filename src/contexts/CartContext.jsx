// src/contexts/CartContext.jsx

import React, { createContext, useState, useContext } from 'react';

// Create the context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    console.log('Adding item to cart:', item); 
    setCartItems((prevItems) => [...prevItems, item]);
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

// Custom hook for using the cart context
export const useCart = () => useContext(CartContext);
