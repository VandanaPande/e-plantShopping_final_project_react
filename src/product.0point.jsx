/**
 * ProductList.jsx — 0 Points Version
 * ---------------------------------
 * Notes on scoring for Question 6:
 * 1. plantsArray contains categories and plants but no JSX rendering of name/image/price ✘
 * 2. Less than 3 categories or no headings ✘
 * 3. No Add to Cart button or click does nothing ✘
 * 4. No dispatch or handler ✘
 * 5. No disabled prop on buttons (buttons missing) ✘
 * 6. No cart icon or count ✘
 * 7. No Navbar or Navbar missing ✘
 */

import React from "react";

const plantsArray = [
  {
    category: "Only Category",
    plants: [
      {
        name: "Plant 1",
        image: "plant1.jpg",
        cost: "$10",
      },
      {
        name: "Plant 2",
        image: "plant2.jpg",
        cost: "$12",
      },
    ],
  },
];

export default function ProductList() {
  return (
    <div>
      {/* No JSX rendering of plants */}
      <p>This is a placeholder, no products rendered.</p>
    </div>
  );
}
