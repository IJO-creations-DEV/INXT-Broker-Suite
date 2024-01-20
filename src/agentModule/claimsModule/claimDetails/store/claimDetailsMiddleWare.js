import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_CLAIM_DETAILS_VIEW_DATA, POST_CLAIM_DETAILS_DATA } from "../../../../redux/actionTypes";



export const getClaimDetailsViewData = createAsyncThunk(
  GET_CLAIM_DETAILS_VIEW_DATA,
  async (payload, { rejectWithValue }) => {
    console.log(payload, "payload");

    try {
      return payload
    } catch (error) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const postClaimDetailsData = createAsyncThunk(
  POST_CLAIM_DETAILS_DATA,
  async (payload, { rejectWithValue }) => {
    console.log(payload, "payload");
    const data = {
      InsuranceCompanyN: payload?.InsuranceCompanyN,
      name: payload?.InsuranceCompanyN,
      contactNumber: payload?.InsuranceCompanyN,
      plateNumber: payload?.InsuranceCompanyN,
      unit: payload?.InsuranceCompanyN,
      shop: payload?.InsuranceCompanyN,
    }

    try {
      return data
    } catch (error) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);