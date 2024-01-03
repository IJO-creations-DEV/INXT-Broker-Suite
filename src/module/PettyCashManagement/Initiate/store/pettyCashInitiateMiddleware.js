import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GET_PETTY_CASH_VOUCHER_INITIAT_TABLE,
  GET_PETTY_CASH_VOUCHER_INITIAT_SEARCH,
  POST_PETTY_CASH_VOUCHER_INITIAT,
  GET_PETTY_CASH_VOUCHER_INITIAT_VIEW,
} from "../../../../redux/actionTypes";
import { getRequest } from "../../../../utility/commonServices";
import { APIROUTES } from "../../../../routes/apiRoutes";

export const getInitiateListMiddleware = createAsyncThunk(
  GET_PETTY_CASH_VOUCHER_INITIAT_TABLE,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const getInitiateListSearchMiddleware = createAsyncThunk(
  GET_PETTY_CASH_VOUCHER_INITIAT_SEARCH,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const postInitiateMiddleware = createAsyncThunk(
  POST_PETTY_CASH_VOUCHER_INITIAT,
  async (payload, { rejectWithValue }) => {
    console.log(payload, "leomaxvj");

    const TableData = {
      id: payload?.id,
      Pettycashcode: payload?.PettyCashCode?.pettycashcode,
      Pettycashsize: payload?.PettyCashSize,
      TransactionNumber: payload?.TransactionCode?.Transcode,
      TransactionLimit: payload?.TransactionLimit,
      Branchcode: payload?.BranchCode?.Branchcode,
      Departmentcode: payload?.DepartmentCode?.Departcode,
      Date: Date.now(),
    };

    try {
      console.log(TableData, "TableData");
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return TableData;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getInitiateDetailsMiddleware = createAsyncThunk(
  GET_PETTY_CASH_VOUCHER_INITIAT_VIEW,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
