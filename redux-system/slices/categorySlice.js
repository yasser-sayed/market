import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  //category list
  categoryList: [],
  listLoading: true,
  listErr: null,

  //category products
  categoryProds: [],
  prodsLoading: true,
  prodsErr: null,
};

//get category list
export const getCatList = createAsyncThunk(
  "getcategoryList",
  async (UN, thunckAPI) => {
    const { rejectWithValue } = thunckAPI;

    try {
      const categoryData = await axios({
        method: "get",
        url: "https://dummyjson.com/products/category-list",
      });

      return categoryData.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//get category products
export const getCatProds = createAsyncThunk(
  "getcategoryProds",
  async (categName, thunckAPI) => {
    const { rejectWithValue } = thunckAPI;

    try {
      const categoryData = await axios({
        method: "get",
        url: `https://dummyjson.com/products/category/${categName}`,
      });

      return categoryData.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: data,
  extraReducers: (builder) => {
    //category list handler
    builder.addCase(getCatList.pending, (state) => {
      state.listLoading = true;
    });
    builder.addCase(getCatList.fulfilled, (state, { payload }) => {
      state.listLoading = false;
      state.categoryList = payload;
    });
    builder.addCase(getCatList.rejected, (state, { payload }) => {
      state.listLoading = false;
      state.listErr = payload.message;
    });

    //category products handler
    builder.addCase(getCatProds.pending, (state) => {
      state.prodsLoading = true;
    });
    builder.addCase(getCatProds.fulfilled, (state, { payload }) => {
      state.prodsLoading = false;
      state.categoryProds = payload.products;
    });
    builder.addCase(getCatProds.rejected, (state, { payload }) => {
      state.prodsLoading = false;
      state.prodsErr = payload.message;
    });
  },
});

export const category = categorySlice.reducer;
