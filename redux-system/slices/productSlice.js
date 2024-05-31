import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  //all products
  products: [],
  productsLoading: true,
  productsErr: null,

  // product details
  prodDet: null,
  prodDetLoading: true,
  prodDetErr: null,
};

//get all products
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

//get  product details
export const getProdDet = createAsyncThunk(
  "get product details",
  async (prodId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const productsData = await axios({
        method: "get",
        url: `https://dummyjson.com/products/${prodId}`,
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
    //all products handler
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

    //product details handler
    builder.addCase(getProdDet.pending, (state) => {
      state.prodDetLoading = true;
    });
    builder.addCase(getProdDet.fulfilled, (state, { payload }) => {
      state.prodDetLoading = false;
      state.prodDet = payload;
    });
    builder.addCase(getProdDet.rejected, (state, { payload }) => {
      state.prodDetLoading = false;
      state.prodDetErr = payload.message;
    });
  },
});

export const product = productSlice.reducer;
