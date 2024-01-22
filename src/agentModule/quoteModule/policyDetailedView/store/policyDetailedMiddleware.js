import { createAsyncThunk } from "@reduxjs/toolkit";
import {GET_POLICY_DETAILED_DATA} from "../../../../redux/actionTypes";

export const getpolicyDetailedMiddleware = createAsyncThunk(
  GET_POLICY_DETAILED_DATA,
  async (payload, { rejectWithValue }) => {
    console.log(payload,"find policy11")

    try {
      // Simulate an API call if needed
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      // return filteredData[0];
    } catch (error) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);



