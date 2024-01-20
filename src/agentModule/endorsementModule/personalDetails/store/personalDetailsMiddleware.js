import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  PATCH_PERSONAL_DETAILS,
  GET_PERSONAL_DETAILS,
} from "../../../../redux/agentActionTypes";

export const getpersonalDetailsMiddleware = createAsyncThunk(
  GET_PERSONAL_DETAILS,
  async (payload, { rejectWithValue, getState }) => {
    console.log(payload, "find add datas in leomax");

    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const patchpersonalDetailsMiddleware = createAsyncThunk(
  PATCH_PERSONAL_DETAILS,
  async (payload, { rejectWithValue, getState }) => {
    console.log(payload, "find add datas in leomax");

    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);
