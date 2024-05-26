import { createSlice } from "@reduxjs/toolkit";

const data = {
  openNav: false,
  theme: true,
};

const configSlice = createSlice({
  name: "config",
  initialState: data,
  reducers: {
    setOpenNav: (state, { payload }) => {
      state.openNav = payload;
    },
    setTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

export const config = configSlice.reducer;

export const { setOpenNav, setTheme } = configSlice.actions;
