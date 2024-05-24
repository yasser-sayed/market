import { createSlice } from "@reduxjs/toolkit";

const data = {
  test: "yasser",
};

const testSlice = createSlice({
  name: "test",
  initialState: data,
});

export const test = testSlice.reducer;
