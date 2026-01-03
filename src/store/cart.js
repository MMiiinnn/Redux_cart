import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  item: [],
  price: 6,
  totalQuantity: 0,
  isShowItem: false,
};

const cartSlice = createSlice({
  name: "Cart Slide",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.item.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.item.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
      state.totalQuantity++;
      state.isShowItem = true;
    },
    removeItem(state) {
      if (state.quantity >= 1) {
        state.quantity--;
      }
      if (state.quantity === 0) {
        state.isShowItem = false;
      }
    },
    total(state) {
      state.total = state.price * state.quantity;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
