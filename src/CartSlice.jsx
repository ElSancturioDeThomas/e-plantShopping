import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      if (!product?.name) return;

      const existing = state.items.find((i) => i.name === product.name);
      if (existing) {
        existing.quantity = (existing.quantity || 0) + 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const payload = action.payload;
      const name = typeof payload === 'string' ? payload : payload?.name;
      if (!name) return;
      state.items = state.items.filter((i) => i.name !== name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload || {};
      if (!name || typeof quantity !== 'number') return;
      const item = state.items.find((i) => i.name === name);
      if (!item) return;
      item.quantity = Math.max(1, quantity);
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

