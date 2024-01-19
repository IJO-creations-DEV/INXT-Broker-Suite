import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    POST_POLICY_DETAILS
} from "../../../../redux/agentActionTypes";

export const postPolicyDetailsMiddleware = createAsyncThunk(
  POST_POLICY_DETAILS,
  async (payload, { rejectWithValue, getState }) => {
    console.log(payload, "find add datas in leo");

    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);