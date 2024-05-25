import { configureStore } from "@reduxjs/toolkit";
import { category } from "./slices/categorySlice";
import { product } from "./slices/productSlice";
import { config } from "./slices/configSlice";
import { search } from "./slices/searchSlice";

const store = configureStore({
  reducer: { config, category, product, search },
});

export default store;
