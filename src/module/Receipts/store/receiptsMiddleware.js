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
  GET_RECEIPT_SEARCH,
  GET_PAYMENT_DETAILS,
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
export const getPaymentDetails = createAsyncThunk(
  GET_PAYMENT_DETAILS,
  async (payload, { rejectWithValue }) => {
    console.log(payload, "payload");
    const data = {
      totalPayment: payload?.totalPayment,
      bankcode: payload?.bankcode,
      bankName: payload?.bankName,
      bankAccount: payload?.bankAccount,
      bankAccountName: payload?.bankAccountName,
      paymentType: payload?.paymentType,
      cardNumber: payload?.cardNumber,
    }
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const getReceiptsListBySearchMiddleware = createAsyncThunk(
  GET_RECEIPT_SEARCH,
  async ({ field, value }, { rejectWithValue, getState }) => {
    const { receiptsTableReducers } = getState();
    const { receiptsTableList } = receiptsTableReducers;
    console.log(receiptsTableList, field, value, "dta");
    function filterReceiptsByField(receipts, field, value) {
      const lowercasedValue = value.toLowerCase();
      return receipts.filter(receipt => receipt[field].toLowerCase().startsWith(lowercasedValue));
    }

    // Example usage:

    // const filteredData = receiptsTableList.filter((item) => item.id === 1);
    try {
      const filteredReceipts = filterReceiptsByField(receiptsTableList, field, value);

      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return filteredReceipts;
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
  async (payload, { rejectWithValue, getState }) => {
    const { receivableTableReducers } = getState();
    console.log(receivableTableReducers, "dta");
    const { receivableTableList } = receivableTableReducers;
    const filteredData = receivableTableList.filter((item) => item.id === 1);
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return filteredData[0];
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const postAddReceiptsMiddleware = createAsyncThunk(
  POST_ADD_RECEIPTS,
  async (payload, { rejectWithValue, getState }) => {
    console.log(payload, "find payloadpayload");

    const generateRandomName = () => {
      const names = ['Ayesha', 'Sindhu', 'John', 'Doe', 'Alice', 'Bob'];
      const randomIndex = Math.floor(Math.random() * names.length);
      return names[randomIndex];
    };


    const generateRandomTransaction = () => {
      const randomCode = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit code
      return { code: randomCode.toString() };
    };

    const generateRandomTransactionCode = () => {
      const randomCode = Math.floor(10000 + Math.random() * 90000); // Generates a 6-digit code
      return { code: randomCode.toString() };
    };
    const generateRandomTransactionnum = () => {
      const transactions = ['02Rep012303', '03Rep012302', '02Rep0103'];
      const randomIndex = Math.floor(Math.random() * transactions.length);
      return { name: transactions[randomIndex] };
    };

    const generateRandomAmount = () => {
      return (Math.random() * 1000).toFixed(2);
    };
    let bodyTableData = {
      id: payload.id,
      receiptNumber: generateRandomTransactionnum().name,
      transactionCode: generateRandomTransactionCode().code,
      customerCode: payload?.customerCode.code,
      date: payload?.receiptDate.toLocaleDateString("en-US", {
        month: "numeric",
        day: "2-digit",
        year: "numeric",
      }),
      transactionNumber: generateRandomTransaction().code,
      name: generateRandomName(),
      amount: generateRandomAmount(),
      action: 8,
    };
    try {
      console.log(bodyTableData, "find bodyTableData");

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

  async (payload, { rejectWithValue, getState }) => {
    console.log(payload, "find payloadsss")
    const { editReducers } = getState();
    console.log(editReducers, "edit1");
    const { receivableTableList } = editReducers;
    console.log(receivableTableList, 'find t data')
    const updateTable = receivableTableList?.map((item) => {
      if (item.id === parseInt(payload?.id)) {
        return {
          ...item,
          policies: payload?.policy,
          netPremium: payload?.netPremium,
          paid: payload?.paid,
          unPaid: payload?.unPaid,
          discounts: payload.discounts,
          dst: payload.dst,
          lgt: payload.lgt,
          vat: payload.vat,
          other: payload.other,
          fcAmount: payload.fcAmount,
          lcAmount: payload.lcAmount

        };
      }
      return item;
    });
    console.log(updateTable, 'find updateTable')


    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return updateTable;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
