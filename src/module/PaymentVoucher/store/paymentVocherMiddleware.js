import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../utility/commonServices";
import { APIROUTES } from "../../../routes/apiRoutes";
import {
  GET_PAYMENT_VOUCHER,
  GET_CHECK_BOOK_DETAILS,
  GET_PAYMENT_VOUCHER_BY_ID,
  PATCH_PAYMENT_STATUS_BY_ID,
  POST_PAYMENT_VOUCHER_CREATE_DATA,
  GET_PAYMENT_CHECKBOK_DETAILS,
  PATCH_INVOICE_LIST_DETAILS,
  SEARCH_PAYMENT_VOUCHER,
} from "../../../redux/actionTypes";

export const paymentVocherMiddleware = createAsyncThunk(
  GET_PAYMENT_VOUCHER,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const chequebookdetailsMiddleware = createAsyncThunk(
  GET_CHECK_BOOK_DETAILS,
  async (payload, { rejectWithValue }) => {
    // console.log(payload, "find chequebookdetailsMiddleware payload");
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const getpaymentVocherByIdMiddleware = createAsyncThunk(
  GET_PAYMENT_VOUCHER_BY_ID,
  async (payload, { rejectWithValue, getState }) => {
    const { paymentVoucherReducers } = getState();

    const { paymentVocherList } = paymentVoucherReducers;
    const filteredData = paymentVocherList.filter(
      (item) => item.id === parseInt(payload)
    );
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return filteredData;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const patchpaymentStatusByIdMiddleware = createAsyncThunk(
  PATCH_PAYMENT_STATUS_BY_ID,
  async (payload, { rejectWithValue, getState }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const postpaymentVocherCreateDataMiddleware = createAsyncThunk(
  POST_PAYMENT_VOUCHER_CREATE_DATA,
  async (payload, { rejectWithValue, getState }) => {
    const bodyTableData = {
      id: payload?.id,
      VoucherNumber: `Voucher${payload?.id}`,
      TransactionNumber: payload?.Transactioncode?.name,
      CustomerCode: payload?.CustomerCode?.name,
      VoucheDate: payload?.VoucherDate.toLocaleDateString("en-US", {
        month: "numeric",
        day: "2-digit",
        year: "numeric",
      }),
      Amount: "500.00",
      action: payload?.id,
    };
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return bodyTableData;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const getpaymentCheckbookDetailsMiddleware = createAsyncThunk(
  GET_PAYMENT_CHECKBOK_DETAILS,
  async (payload, { rejectWithValue, getState }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const patchpaymentVocherInvoiceListMiddleware = createAsyncThunk(
  PATCH_INVOICE_LIST_DETAILS,
  async (payload, { rejectWithValue, getState }) => {
    try {
      console.log(payload, "find payload in patch");
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const getPaymentVocherListBySearchMiddleware = createAsyncThunk(
  SEARCH_PAYMENT_VOUCHER,
  async ({ field, value }, { rejectWithValue, getState }) => {
    const { paymentVoucherReducers } = getState();
    const { paymentVocherList } = paymentVoucherReducers;
    console.log(paymentVocherList, field, value, "dta");
    function filterReceiptsByField(receipts, field, value) {
      const lowercasedValue = value.toLowerCase();
      return receipts.filter(receipt => receipt[field].toLowerCase().startsWith(lowercasedValue));
    }

    // Example usage:

    // const filteredData = paymentVocherList.filter((item) => item.id === 1);
    try {
      const filteredReceipts = filterReceiptsByField(paymentVocherList, field, value);

      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return filteredReceipts;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);