import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GET_DISBURSMENT_VOUCHER_LIST,
  GET_DISBURSMENT_VOUCHER_SEARCH,
  POST_ADD_DISBURSMENT_VOUCHER,
  GET_ADD_DISBURSMENT_TABLE_VOUCHER,
  POST_EDIT_DISBURSMENT_VOUCHER,
  GET_VIEW_DISBURSMENT_VOUCHER,
} from "../../../../redux/actionTypes";
import { getRequest } from "../../../../utility/commonServices";
import { APIROUTES } from "../../../../routes/apiRoutes";

export const getDisbursmentListMiddleware = createAsyncThunk(
  GET_DISBURSMENT_VOUCHER_LIST,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getDisbursmentSearchMiddleware = createAsyncThunk(
  GET_DISBURSMENT_VOUCHER_SEARCH,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const postAddDisbursmentMiddleware = createAsyncThunk(
  POST_ADD_DISBURSMENT_VOUCHER,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getAddDisbursmentTableMiddleware = createAsyncThunk(
  GET_ADD_DISBURSMENT_TABLE_VOUCHER,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const postEditDisbursmentMiddleware = createAsyncThunk(
  POST_EDIT_DISBURSMENT_VOUCHER,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getViewDisbursmentMiddleware = createAsyncThunk(
  GET_VIEW_DISBURSMENT_VOUCHER,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
