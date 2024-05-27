import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  products: [],
  productsLoading: true,
  productsErr: null,
};

export const getProducts = createAsyncThunk(
  "get products",
  async (NU, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const productsData = await axios({
        method: "get",
        url: "https://dummyjson.com/products",
      });

      return productsData.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: data,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.productsLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.productsLoading = false;
      state.products = payload.products;
    });
    builder.addCase(getProducts.rejected, (state, { payload }) => {
      state.productsLoading = false;
      state.productsErr = payload.message;
    });
  },
});

export const product = productSlice.reducer;
