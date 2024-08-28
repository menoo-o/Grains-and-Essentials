import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext'; // Import CartContext

const Cart = () => {
  const { cartItems, removeItem, updateItemQuantity } = useContext(CartContext); // Use CartContext

  const calculateTotal = (price, qty) => {
    const numericPrice = parseFloat(price.replace(/[^\d\.]/g, ''));
    return (numericPrice * qty).toFixed(2);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((subtotal, item) => {
      const itemTotal = parseFloat(calculateTotal(item.totalPrice, item.quantity));
      return subtotal + itemTotal;
    }, 0).toFixed(2);
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
                <p>Size: {item.weight}</p>
                <button onClick={() => removeItem(index)} className="remove-btn">
                  Remove
                </button>
              </div>
            </div>
            <div className="cart-item cart-price">{item.totalPrice}</div>
            <div className="cart-item cart-qty">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateItemQuantity(index, Number(e.target.value))}
                className="quantity-input"
              />
            </div>
            <div className="cart-item cart-total">
              ${calculateTotal(item.totalPrice, item.quantity)}
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
