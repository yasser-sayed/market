import { createSlice } from "@reduxjs/toolkit";

const data = {
  openNav: false,
};

const configSlice = createSlice({
  name: "config",
  initialState: data,
  reducers: {
    setOpenNav: (state, { payload }) => {
      state.openNav = payload;
    },
  },
});

export const config = configSlice.reducer;

export const { setOpenNav } = configSlice.actions;
