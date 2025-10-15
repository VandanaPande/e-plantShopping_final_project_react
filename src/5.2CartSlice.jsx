import { createSlice } from '@reduxjs/toolkit';
//removed partial code
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add a new plant or bump its quantity if it already exists
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
     
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Remove a plant by name
    removeItem: (state, action) => {
      

    // Update quantity of a specific plant
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
    
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
