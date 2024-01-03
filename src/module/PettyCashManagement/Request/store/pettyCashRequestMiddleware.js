import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GET_REQUEST_VOUCHER_LIST,
  GET_REQUEST_VOUCHER_SEARCH,
  POST_ADD_REQUEST_VOUCHER,
  GET_ADD_REQUEST_TABLE_VOUCHER,
  POST_EDIT_REQUEST_VOUCHER,
} from "../../../../redux/actionTypes";
import { getRequest } from "../../../../utility/commonServices";
import { APIROUTES } from "../../../../routes/apiRoutes";

export const getRequestListMiddleware = createAsyncThunk(
  GET_REQUEST_VOUCHER_LIST,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getRequestSearchMiddleware = createAsyncThunk(
  GET_REQUEST_VOUCHER_SEARCH,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const postAddRequestMiddleware = createAsyncThunk(
  POST_ADD_REQUEST_VOUCHER,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getAddRequestTableMiddleware = createAsyncThunk(
  GET_ADD_REQUEST_TABLE_VOUCHER,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const postEditRequestMiddleware = createAsyncThunk(
  POST_EDIT_REQUEST_VOUCHER,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
