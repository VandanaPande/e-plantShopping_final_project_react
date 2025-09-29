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
      const { name, image, cost } = action.payload;
   
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Removes the item entirely from the cart based on name
    removeItem: (state, action) => {
       
    },

    // Updates the quantity of an existing item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export action creators
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer for store
export default CartSlice.reducer;
