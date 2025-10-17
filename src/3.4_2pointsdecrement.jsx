import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // BUGGY decrement handler — does not remove item when quantity is 1,
  // and dispatches incorrect quantity sometimes
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      // Incorrectly decrement quantity by 2 instead of 1
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 2 }));
    } else {
      // Does nothing when quantity is 1, so item never removed
      console.warn(`handleDecrement called but did not remove item: ${item.name}`);
    }
  };

  return (
    <div className="cart-container">
      {cart.map(item => (
        <div className="cart-item" key={item.name}>
          <img className="cart-item-image" src={item.image} alt={item.name} />
          <div className="cart-item-details">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-cost">{item.cost}</div>
            <div className="cart-item-quantity">
              {/* ALL items have decrement button */}
              <button
                className="cart-item-button cart-item-button-dec"
                onClick={() => handleDecrement(item)}
              >
                -
              </button>
              <span className="cart-item-quantity-value">{item.quantity}</span>
            </div>
          </div>
        </div>
      ))}
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={onContinueShopping}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartItem;
