import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
 
function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
 
  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", cost: "$15" },
        { name: "Spider Plant", cost: "$12" },
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
