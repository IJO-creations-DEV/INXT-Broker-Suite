import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../utility/commonServices";
import { APIROUTES } from "../../../routes/apiRoutes";
import {
  GET_RECEIPT_DETAILS,
  GET_RECEIPT_DETAILS_BY_ID,
  GET_RECEIVABLE_TABLE,
  POST_ADD_RECEIPTS,
  POST_PAYMENT_DETAILS,
  PATCH_RECEIPT_EDIT,
} from "../../../redux/actionTypes";

export const getReceiptsListMiddleware = createAsyncThunk(
  GET_RECEIPT_DETAILS,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const getReceiptsListByIdMiddleware = createAsyncThunk(
  GET_RECEIPT_DETAILS_BY_ID,
  async (payload, { rejectWithValue, getState }) => {
    const { receiptsTableReducers } = getState();
    console.log(receiptsTableReducers, "dta");
    const { receiptsTableList } = receiptsTableReducers;
    const filteredData = receiptsTableList.filter((item) => item.id === 1);

    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return filteredData[0];
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const getReceiptsReceivableMiddleware = createAsyncThunk(
  GET_RECEIVABLE_TABLE,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const postAddReceiptsMiddleware = createAsyncThunk(
  POST_ADD_RECEIPTS,
  async (payload, { rejectWithValue, getState }) => {
    // id: 1,
    // receiptNumber: "01Rep012302",
    // transactionCode: "123456",
    // transactionNumber: "Transac00123",
    // name: "Name",
    // customerCode: "CC0102",
    // date: "11/12/2023",
    // amount: "500.37",
    // action: "Action",
    let bodyTableData = {
      id: 8,
      receiptNumber: `Rep${8}`,
      transactionNumber: payload?.transactionNumber?.name,
      transactionCode:payload?.transactionCode?.name,
      customerCode: payload?.customerCode?.name,
      name: payload?.name,
      date: payload?.receiptDate.toLocaleDateString("en-US", {
        month: "numeric",
        day: "2-digit",
        year: "numeric",
      }),
      amount: "500.00",
      action: 8,
    };
    try {
        console.log(bodyTableData, "find middleware");

      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return bodyTableData;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const postPaymentDetailsMiddleware = createAsyncThunk(
  POST_PAYMENT_DETAILS,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const patchReceipEditMiddleware = createAsyncThunk(
  PATCH_RECEIPT_EDIT,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
