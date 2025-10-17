import React from 'react';
import { useSelector } from 'react-redux';
import './CartItem.css';

const CartItem = () => {
  const cart = useSelector(state => state.cart.items);

  return (
    <div className="cart-container">
      {cart.map(item => (
        <div className="cart-item" key={item.name}>
          <div>{item.name}</div>
          {/* cost and image missing */}
        </div>
      ))}
    </div>
  );
};

export default CartItem;
 
