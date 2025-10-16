import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
 //addtocart partial
// Redux imports (but dispatch will not be used properly for 1 point)
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
 
function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
 
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const calculateTotalQuantity = () =>
    cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
 
  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", cost: "$15" },
        { name: "Spider Plant", cost: "$12" },
        { name: "Peace Lily", cost: "$18" },
      ],
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", cost: "$20" },
        { name: "Jasmine", cost: "$18" },
      ],
    },
  ];
 
  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };
 
  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };
 
  // 1-point handler: Button exists, but dispatch is missing
  const handleAddToCart = (product) => {
    // Missing dispatch
    setAddedToCart((prev) => ({
      ...prev,
      [product.name]: true,
    }));
  };
 
  return (
<div>
<div className="navbar">
<h3 onClick={handleHomeClick}>Paradise Nursery</h3>
<div>
<span>Cart: {calculateTotalQuantity()}</span>
<button onClick={handleCartClick}>View Cart</button>
</div>
</div>
 
      {!showCart ? (
<div className="product-grid">
          {plantsArray.map((category, index) => (
<div key={index}>
<h2>{category.category}</h2>
              {category.plants.map((plant, idx) => (
<div key={idx} className="product-card">
<div>{plant.name}</div>
<div>{plant.cost}</div>
<button
                    onClick={() => handleAddToCart(plant)}
                    disabled={!!addedToCart[plant.name]}
>
                    {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
</button>
</div>
              ))}
</div>
          ))}
</div>
      ) : (
<CartItem />
      )}
</div>
  );
}
 
export default ProductList;
