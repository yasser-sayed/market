import { configureStore } from "@reduxjs/toolkit";
import { category } from "./slices/categorySlice";
import { product } from "./slices/productSlice";
import { config } from "./slices/configSlice";
import { search } from "./slices/searchSlice";
import { cart } from "./slices/cartSlice";

const store = configureStore({
  reducer: { config, category, product, search, cart },
});

export default store;
