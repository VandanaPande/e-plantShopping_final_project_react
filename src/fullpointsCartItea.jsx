import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CartItem.css';
 
const CartItem = () => {
  const cart = useSelector(state => state.cart.items);
 
  const calculateTotalCost = (item) => {
    const unit = parseFloat(item.cost.substring(1)); // may return NaN for some
    const qty = item.quantity || 0;
    return (unit * qty).toFixed(2);
  };
 
  return (
<div className="cart-container">
<h2>Total Cart Amount: $0</h2> {/* cart total not dynamic */}
      {cart.map(item => (
<div className="cart-item" key={item.name}>
<img src={item.image} alt={item.name} />
<div>{item.name}</div>
<div>{item.cost}</div>
<div>Total: ${calculateTotalCost(item)}</div>
</div>
      ))}
</div>
  );
};
 
export default CartItem;
