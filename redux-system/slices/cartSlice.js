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
      let newCartItem = state.cartItems.map((cartItem) =>
        cartItem.id == item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : item
      );

      state.cartItems = newCartItem;
    },
  },
});

export const cart = cartSlice.reducer;

export const { addToCart, inc } = cartSlice.actions;
