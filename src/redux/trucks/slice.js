import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks, fetchTrucksDetails } from "./operations.js";

const initialState = {
  items: [],
  truck: null,
  isLoading: false,
  error: null,
};

const trucksSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTrucks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTrucks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchTrucks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchTrucksDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTrucksDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.truck = action.payload;
    });
    builder.addCase(fetchTrucksDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const trucksReducer = trucksSlice.reducer;
