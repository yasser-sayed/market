import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  categoryList: [],
  listLoading: true,
  listErr: null,
};

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

const categorySlice = createSlice({
  name: "category",
  initialState: data,
  extraReducers: (builder) => {
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
  },
});

export const category = categorySlice.reducer;
