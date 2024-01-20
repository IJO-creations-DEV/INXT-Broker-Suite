import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  POST_SETTLEMENT_CLAIM_DATA,
} from "../../../../redux/actionTypes";


export const postSettlementClaimMiddleware = createAsyncThunk(
  POST_SETTLEMENT_CLAIM_DATA,
  async (payload, { rejectWithValue, getState }) => {
    console.log(payload, "find claim settlement");

    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);


