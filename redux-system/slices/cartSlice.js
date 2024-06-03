import { createSlice } from "@reduxjs/toolkit";

const data = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: data,
  reducers: {
    //add to cart
    addToCart: (state, { payload: { item, quantity } }) => {
      const findItem = state.cartItems.find(
        (cartItem) => cartItem.id == item.id
      );

      if (findItem) {
        findItem.quantity += quantity;
      } else {
        let newItem = { ...item, quantity };
        state.cartItems = [...state.cartItems, newItem];
      }
    },

    //increment quantity
    inc: (state, { payload: { item } }) => {
      let findItem = state.cartItems.find((cartItem) => cartItem.id == item.id);

      findItem += 1;
    },

    //decrement quantity
    dec: (state, { payload: { item } }) => {
      let findItem = state.cartItems.find((cartItem) => cartItem.id == item.id);

      findItem -= 1;
    },

    //delete item
    delItem: (state, { payload: { item } }) => {
      let newCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== item.id
      );

      state.cartItems = newCartItems;
    },
  },
});

export const cart = cartSlice.reducer;

export const { addToCart, inc, dec, delItem } = cartSlice.actions;
