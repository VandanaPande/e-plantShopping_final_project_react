import React from 'react';
import { useSelector } from 'react-redux';
import './CartItem.css';

const CartItem = () => {
  const cart = useSelector(state => state.cart.items);

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: $0</h2> {/* static */}
      {cart.map(item => (
        <div className="cart-item" key={item.name}>
          <img src={item.image} alt={item.name} />
          <div>{item.name}</div>
          {/* cost missing */}
        </div>
      ))}
    </div>
  );
};

export default CartItem;
 
