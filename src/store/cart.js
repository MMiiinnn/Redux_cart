import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  price: 6,
  quantity: 0,
  total: 0,
  isShowCart: false,
  isShowItem: false,
};

const cartSlice = createSlice({
  name: "Cart Slide",
  initialState: initialCartState,
  reducers: {
    addItem(state) {
      state.quantity++;
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
    showCart(state) {
      state.isShowCart = !state.isShowCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
