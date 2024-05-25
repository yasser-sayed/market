import { createSlice } from "@reduxjs/toolkit";

const data = {};

const searchSlice = createSlice({
  name: "search",
  initialState: data,
});

export const search = searchSlice.reducer;
