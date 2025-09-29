// CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Cart items array
  },
  reducers: {
    // Adds a new item or increments quantity if it exists
    addItem: (state, action) => {
     

    // Removes the item entirely from the cart based on name
    removeItem: (state, action) => {
       
    },

    // Updates the quantity of an existing item
    updateQuantity: (state, action) => {
     
      }
    },
  },
});

// Export action creators
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer for store
export default CartSlice.reducer;
