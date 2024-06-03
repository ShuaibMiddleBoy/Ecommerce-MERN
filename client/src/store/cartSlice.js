import { createSlice } from "@reduxjs/toolkit";

const updateLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
let initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const cartItem = state.findIndex(
        (itemIndex) => itemIndex.id === action.payload.id
      );
      if (cartItem !== -1) {
        state[cartItem].quantity++;
        state[cartItem].totalPrice += action.payload.price;
        updateLocalStorage(state);
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
        updateLocalStorage(state);
      }
    },
    removeFromCart(state, action) {
      const updatedState = state.filter((item) => item.id !== action.payload);
      updateLocalStorage(updatedState);
      return updatedState;
    },

    decreamentCartItems(state, action) {
      const cartItem = state.find((item) => item.id === action.payload);
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--;
        cartItem.totalPrice -= cartItem.price;
        updateLocalStorage(state);
      }
    },
    increamentCartItems(state, action) {
      const cartItem = state.find((item) => item.id === action.payload);
      if (cartItem) {
        cartItem.quantity++;
        cartItem.totalPrice += cartItem.price;
        updateLocalStorage(state);
      }
    },
  },
});

export const totalQuantity = (state) =>
  state.cart.reduce((total, item) => (total += item.quantity), 0);

export const totalPrice = (state) =>
  state.cart.reduce((total, item) => (total += item.totalPrice), 0);

export const {
  addToCart,
  removeFromCart,
  increamentCartItems,
  decreamentCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
