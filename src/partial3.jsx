import React from 'react';
import { useSelector } from 'react-redux';
import './CartItem.css';
 
const CartItem = () => {
  const cart = useSelector(state => state.cart.items);
 
  return (
<div className="cart-container">
      {cart.map((item, index) => (
<div className="cart-item" key={index}>
<img className="cart-item-image" src={item.image} alt={item.name} />
<div>{item.name}</div>
<div>{item.cost}</div>
</div>
      ))}
</div>
  );
};
 
export default CartItem;
