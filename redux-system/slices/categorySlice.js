import { createSlice } from "@reduxjs/toolkit";

const data = {};

const categorySlice = createSlice({
  name: "category",
  initialState: data,
});

export const category = categorySlice.reducer;
