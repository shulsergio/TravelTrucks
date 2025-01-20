import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const LIMIT = 5;
const dataURL = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export const fetchTrucks = createAsyncThunk(
  "campers/fetchAll",
  async ({ pageNumber }, thunkApi) => {
    try {
      const response = await dataURL.get(
        `/campers?page=${pageNumber}&limit=${LIMIT}`
      );
      console.log("fetchTrucks response.data-", response.data);
      console.log("fetchTrucks response.data.items-", response.data.items);
      return response.data.items;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const fetchTrucksDetails = createAsyncThunk(
  "campers/fetchTrucksDetails",
  async (id, thunkApi) => {
    try {
      const response = await dataURL.get(`/campers/${id}`);
      console.log("fetchTrucks response.data-", response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
