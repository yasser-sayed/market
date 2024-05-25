import { createSlice } from "@reduxjs/toolkit";

const data = {};

const productSlice = createSlice({
  name: "product",
  initialState: data,
});

export const product = productSlice.reducer;
