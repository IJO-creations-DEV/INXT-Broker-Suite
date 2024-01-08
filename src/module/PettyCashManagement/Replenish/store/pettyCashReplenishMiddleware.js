import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GET_REPLENISH_VOUCHER_LIST,
  GET_REPLENISH_VOUCHER_SEARCH,
  POST_ADD_REPLENISH_VOUCHER,
  GET_ADD_REPLENISH_TABLE_VOUCHER,
  GET_VIEW_REPLENISH_VOUCHER,
} from "../../../../redux/actionTypes";
import { getRequest } from "../../../../utility/commonServices";
import { APIROUTES } from "../../../../routes/apiRoutes";

export const getReplenishListMiddleware = createAsyncThunk(
  GET_REPLENISH_VOUCHER_LIST,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getReplenishSearchMiddleware = createAsyncThunk(
  GET_REPLENISH_VOUCHER_SEARCH,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const postAddReplenishMiddleware = createAsyncThunk(
  POST_ADD_REPLENISH_VOUCHER,
  async (payload, { rejectWithValue }) => {
    console.log(payload, "postAddReplenishMiddleware");
    const currentDate = new Date(); // Get current date
    const formattedDate = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
    const TableData = {
      id: payload?.id,
      Pettycashcode:payload?.PettycashCode?.pettycashcode,
      Branchcode: payload?.BranchCode?.Branchcode,
      Transactioncode: payload?.TransactionCode?.Transcode,
      BankCode: payload.BankCode?.BankAccountCode,
      SubAccount: payload?.SubAccountCode?.SubAccount,
      TransactionNumber: payload?.TransactionCode?.Transcode,
      Date: formattedDate,
    };
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return TableData;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getAddReplenishTableMiddleware = createAsyncThunk(
  GET_ADD_REPLENISH_TABLE_VOUCHER,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getViewReplenishMiddleware = createAsyncThunk(
  GET_VIEW_REPLENISH_VOUCHER,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
