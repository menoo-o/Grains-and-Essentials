import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

const initialCartItems = [
  {
    id: 1,
    imgSrc: 'https://via.placeholder.com/80',
    title: 'Organic Almonds',
    price: '$15.00',
    size: '500g'
  },
  {
    id: 2,
    imgSrc: 'https://via.placeholder.com/80',
    title: 'Whole Wheat Flour',
    price: '$8.00',
    size: '1kg'
  },
  {
    id: 3,
    imgSrc: 'https://via.placeholder.com/80',
    title: 'Quinoa Seeds',
    price: '$12.00',
    size: '250g'
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [quantities, setQuantities] = useState(cartItems.map(() => 1));

  const handleQuantityChange = (index, newQty) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = Math.max(1, newQty); // Validate quantity
    setQuantities(updatedQuantities);
  };

  const calculateTotal = (price, qty) => {
    const numericPrice = parseFloat(price.replace(/[^\d\.]/g, ''));
    return (numericPrice * qty).toFixed(2);
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item, index) => {
      subtotal += parseFloat(calculateTotal(item.price, quantities[index]));
    });
    return subtotal.toFixed(2);
  };

  const removeItem = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
    setQuantities(updatedItems.map(() => 1));
  };

  return (
    <>
      <div className="cart-heading">
            <h2>Your Cart</h2>
            <NavLink to='/shop' className='cart-shopping-link'>Continue Shopping</NavLink>
        </div>
    <div className="cart-container">
      <div className="cart-header">
        <div className="cart-column">Product</div>
        <div className="cart-column">Price</div>
        <div className="cart-column">Qty</div>
        <div className="cart-column">Total</div>
      </div>
      {cartItems.map((item, index) => (
        <div key={item.id} className="cart-item-row">
          <div className="cart-item cart-product">
            <img src={item.imgSrc} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.title}</h4>
              <p>Size: {item.size}</p>
              <button onClick={() => removeItem(index)} className="remove-btn">
                Remove
              </button>
            </div>
          </div>
          <div className="cart-item cart-price">{item.price}</div>
          <div className="cart-item cart-qty">
            <input
              type="number"
              min="1"
              value={quantities[index]}
              onChange={(e) =>
                handleQuantityChange(index, Number(e.target.value))
              }
              className="quantity-input"
            />
          </div>
          <div className="cart-item cart-total">
            ${calculateTotal(item.price, quantities[index])}
          </div>
        </div>
      ))}

      <div className="cart-subtotal">
        <div className="cart-column">Subtotal:</div>
        <div className="cart-column"></div>
        <div className="cart-column"></div>
        <div className="cart-column">${calculateSubtotal()}</div>
      </div>
    </div>
    </>
  );
};

export default Cart;
