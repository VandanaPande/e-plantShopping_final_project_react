import React from 'react';
import { useSelector } from 'react-redux';
import './CartItem.css';

const CartItem = () => {
  const cart = useSelector(state => state.cart.items);

  return (
    <div className="cart-container">
      {cart.map(item => (
        <div className="cart-item" key={item.name}>
          <img src={item.image} alt={item.name} />
          {/* name and cost missing */}
        </div>
      ))}
    </div>
  );
};

export default CartItem;
 
