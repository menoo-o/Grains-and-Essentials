import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { NavLink } from 'react-router-dom';
import '../App.css'; // Import your CSS file for styles

const CartCard = ({ item }) => {
  return (
    <div className="cart-card">
      {/* Row 1: Heading */}
      <h3 className="cart-card-heading">Just added to your cart</h3>

      {/* Row 2: Item details */}
      <div className="cart-card-item">
        <img src={item.imgSrc} alt={item.title} className="cart-card-img" />
        <div className="cart-card-details">
          <h4 className="cart-card-title">{item.title}</h4>
          <p className="cart-card-qty">Qty: {item.quantity}</p>
          <p className="cart-card-size">Weight: {item.weight}</p> {/* Changed to use 'weight' */}
        </div>
      </div>

      {/* Row 3: View Cart Button */}
      <NavLink to="/cart" className="cart-card-view-cart-btn">
        View Cart
      </NavLink>

      {/* Row 4: Continue Shopping */}
      <NavLink to="/shop" className="cart-card-continue-shopping-btn">
        Continue Shopping
      </NavLink>
    </div>
  );
};

// Define propTypes for the component
CartCard.propTypes = {
  item: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,   // Image source for the product
    title: PropTypes.string.isRequired,    // Title of the product
    quantity: PropTypes.number.isRequired, // Quantity of the product added
    weight: PropTypes.string.isRequired,   // Weight of the product (was previously 'size')
  }).isRequired,
};

export default CartCard;
