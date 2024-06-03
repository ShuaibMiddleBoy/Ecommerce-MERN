import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api/api.js";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchSearchResults = createAsyncThunk(
  "fetchSearchResults",
  async (searchkey) => {
    const res = await axiosInstance.get(`products/search/${searchkey}`);
    return res.data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSearchResults.pending, (state, n) => {
      state.status = "Loading..";
    });
    builder.addCase(fetchSearchResults.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.products = action.payload;
    });
    builder.addCase(fetchSearchResults.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const selectAllProducts = (state) => state.search.products;
export const getSearchStatus = (state) => state.search.status;
export const getSearchError = (state) => state.search.error;

export default searchSlice.reducer;
