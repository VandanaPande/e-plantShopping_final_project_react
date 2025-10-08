/**
 * ProductList.jsx — 2 Points Version
 * ---------------------------------
 * Notes on scoring for Question 6:
 * 1. At least six unique houseplants per category ✔
 * 2. Plants grouped into 3 categories with headings ✔
 * 3. Add to Cart buttons exist for each plant ✔
 * 4. Clicking Add to Cart dispatches product for some plants only (partial) ✔
 * 5. Buttons disable properly after adding ✔
 * 6. Cart icon count is hardcoded to 0 (not dynamic) ✘
 * 7. Navbar shows on both Product List and Cart page ✔
 * 8. Cart icon does NOT show total items dynamically ✘
 */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./redux/cartSlice";

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
        image:
          "https://cdn.pixabay.com/photo/2019/10/22/06/35/spider-plant-4569126_1280.jpg",
        cost: "$12",
      },
      {
        name: "Peace Lily",
        image:
          "https://cdn.pixabay.com/photo/2017/07/31/14/44/peace-lily-2569440_1280.jpg",
        cost: "$18",
      },
      {
        name: "Boston Fern",
        image:
          "https://cdn.pixabay.com/photo/2017/03/24/15/07/fern-2167263_1280.jpg",
        cost: "$20",
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
        name: "Orchid",
        image:
          "https://cdn.pixabay.com/photo/2018/03/20/11/29/orchid-3245967_1280.jpg",
        cost: "$30",
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
    ],
  },
  {
    category: "Succulent Plants",
    plants: [
      {
        name: "Aloe Vera",
        image:
          "https://cdn.pixabay.com/photo/2016/10/18/21/22/aloe-vera-1756064_1280.jpg",
        cost: "$14",
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
        name: "Haworthia",
        image:
          "https://cdn.pixabay.com/photo/2017/08/02/18/32/haworthia-2562543_1280.jpg",
        cost: "$11",
      },
    ],
  },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});
  const [showCart, setShowCart] = useState(false);

  // Partial dispatch: only dispatch for Snake Plant and Rose (others do nothing)
  const handleAddToCart = (plant) => {
    if (plant.name === "Snake Plant" || plant.name === "Rose") {
      dispatch(addItem(plant));
      setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
    }
  };

  // Hardcoded total count 0, not dynamic
  const totalQuantity = 0;

  const handleHomeClick = () => setShowCart(false);
  const handlePlantsClick = () => setShowCart(false);
  const handleCartClick = () => setShowCart(true);

  return (
    <>
      {/* Navbar always visible */}
      <nav className="navbar">
        <div className="nav-home" onClick={handleHomeClick}>
          Paradise Nursery
        </div>
        <div className="nav-plants" onClick={handlePlantsClick}>
          Plants
        </div>
        <div className="nav-cart" onClick={handleCartClick}>
          Cart ({totalQuantity})
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, idx) => (
            <div key={idx} className="category-section">
              <h2>{category.category}</h2>
              <div className="plants-list">
                {category.plants.map((plant) => (
                  <div key={plant.name} className="plant-card">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      width="150"
                      height="150"
                    />
                    <h3>{plant.name}</h3>
                    <p>{plant.cost}</p>
                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name]
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="cart-page">
          <h2>Your Cart</h2>
          {/* Cart page contents here */}
        </div>
      )}
    </>
  );
}
