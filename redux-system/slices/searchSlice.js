import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  // search
  srchResult: [],
  srchLoading: true,
  srchErr: null,
};

//get search products
export const getSrchResult = createAsyncThunk(
  "get search result",
  async (srchWord, thunckAPI) => {
    const { rejectWithValue } = thunckAPI;

    try {
      const categoryData = await axios({
        method: "get",
        url: `https://dummyjson.com/products/search?q=${srchWord}`,
      });

      return categoryData.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: data,
  extraReducers: (builder) => {
    //search products handler
    builder.addCase(getSrchResult.pending, (state) => {
      state.srchLoading = true;
    });
    builder.addCase(getSrchResult.fulfilled, (state, { payload }) => {
      state.srchLoading = false;
      state.srchResult = payload.products;
    });
    builder.addCase(getSrchResult.rejected, (state, { payload }) => {
      state.srchLoading = false;
      state.srchErr = payload.message;
    });
  },
});

export const search = searchSlice.reducer;
