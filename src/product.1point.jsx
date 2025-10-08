/**
 * ProductList.jsx — 1 Point Version
 * ---------------------------------
 * Notes on scoring for Question 6:
 * 1. 6 plants per category but some duplicates or missing images ✘
 * 2. 3 categories with headings ✔
 * 3. Add to Cart button exists for each plant ✔
 * 4. Dispatch missing or incorrectly implemented (no dispatch at all) ✘
 * 5. Disabled prop only on some plants (partial) ✔
 * 6. Cart icon may or may not exist ✔
 * 7. Navbar exists but placed inside conditional (only on product listing) ✘
 * 8. Cart icon count may or may not exist ✘
 */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        name: "Snake Plant",
        image:
          "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
        cost: "$15",
      },
      {
        name: "Spider Plant",
        image: "", // Missing image
        cost: "$12",
      },
      {
        name: "Peace Lily",
        image:
          "https://cdn.pixabay.com/photo/2017/07/31/14/44/peace-lily-2569440_1280.jpg",
        cost: "$18",
      },
      {
        name: "Spider Plant", // Duplicate name
        image:
          "https://cdn.pixabay.com/photo/2019/10/22/06/35/spider-plant-4569126_1280.jpg",
        cost: "$12",
      },
      {
        name: "Areca Palm",
        image:
          "https://cdn.pixabay.com/photo/2016/03/27/22/22/palm-1282984_1280.jpg",
        cost: "$25",
      },
      {
        name: "Rubber Plant",
        image:
          "https://cdn.pixabay.com/photo/2016/10/18/21/22/rubber-plant-1756065_1280.jpg",
        cost: "$22",
      },
    ],
  },
  {
    category: "Flowering Plants",
    plants: [
      {
        name: "Rose",
        image:
          "https://cdn.pixabay.com/photo/2014/07/31/23/16/rose-407703_1280.jpg",
        cost: "$10",
      },
      {
        name: "Tulip",
        image:
          "https://cdn.pixabay.com/photo/2017/05/31/22/18/tulip-2366184_1280.jpg",
        cost: "$8",
      },
      {
        name: "Daisy",
        image:
          "https://cdn.pixabay.com/photo/2016/04/30/23/51/daisy-1363553_1280.jpg",
        cost: "$7",
      },
      {
        name: "Marigold",
        image:
          "https://cdn.pixabay.com/photo/2015/05/07/11/02/marigold-756211_1280.jpg",
        cost: "$5",
      },
      {
        name: "Sunflower",
        image:
          "https://cdn.pixabay.com/photo/2018/08/24/10/41/sunflower-3625813_1280.jpg",
        cost: "$12",
      },
      {
        name: "Rose", // Duplicate name
        image:
          "https://cdn.pixabay.com/photo/2014/07/31/23/16/rose-407703_1280.jpg",
        cost: "$10",
      },
    ],
  },
  {
    category: 
    plants: [
      {
      
      },
      {
        name: "Jade Plant",
        image:
          "https://cdn.pixabay.com/photo/2016/01/25/11/15/jade-plant-1165029_1280.jpg",
        cost: "$16",
      },
      {
        name: "Echeveria",
        image:
          "https://cdn.pixabay.com/photo/2017/07/16/10/11/echeveria-2500449_1280.jpg",
        cost: "$13",
      },
      {
        name: "Zebra Cactus",
        image:
          "https://cdn.pixabay.com/photo/2016/10/18/21/22/zebra-cactus-1756059_1280.jpg",
        cost: "$10",
      },
      {
        name: "Sedum",
        image:
          "https://cdn.pixabay.com/photo/2016/10/18/21/22/sedum-1756058_1280.jpg",
        cost: "$9",
      },
      {
        name: "Sedum", // Duplicate name
        image:
          "https://cdn.pixabay.com/photo/2016/10/18/21/22/sedum-1756058_1280.jpg",
        cost: "$9",
      },
    ],
  },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    // Dispatch is missing, so clicking does nothing except disable button sometimes
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  const totalQuantity = 0;

  const [showCart, setShowCart] = useState(false);

  return (
    <>
      {!showCart ? (
        <>
          {/* Navbar inside conditional — only shows on product page */}
          <nav className="navbar">
            <div className="nav-home" onClick={() => setShowCart(false)}>
              Paradise Nursery
            </div>
            <div className="nav-plants" onClick={() => setShowCart(false)}>
              Plants
            </div>
            <div className="nav-cart" onClick={() => setShowCart(true)}>
              Cart ({totalQuantity})
            </div>
          </nav>

          <div className="product-grid">
            {plantsArray.map((category, idx) => (
              <div key={idx} className="category-section">
                <h2>{category.category}</h2>
                <div className="plants-list">
                  {category.plants.map((plant) => (
                    <div key={plant.name} className="plant-card">
                      {plant.image ? (
                        <img
                          src={plant.image}
                          alt={plant.name}
                          width="150"
                          height="150"
                        />
                      ) : (
                        <div
                          style={{
                            width: 150,
                            height: 150,
                            backgroundColor: "#ddd",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#666",
                          }}
                        >
                          No Image
                        </div>
                      )}
                      <h3>{plant.name}</h3>
                      <p>{plant.cost}</p>
                      <button
                        onClick={() => handleAddToCart(plant)}
                        // Disabled only for plants named "Snake Plant"
                        disabled={plant.name === "Snake Plant" && addedToCart[plant.name]}
                      >
                        {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="cart-page">
          <h2>Your Cart</h2>
          {/* Cart page contents */}
        </div>
      )}
    </>
  );
}
