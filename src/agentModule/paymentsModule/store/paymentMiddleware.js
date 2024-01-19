import { createAsyncThunk } from "@reduxjs/toolkit";
import { POST_PAYMENT_DATA,GET_PAYMENTTABLE_DATA, GET_PAYMENT_SEARCH} from "../../../redux/actionTypes";




export const getpaymenttableMiddleware = createAsyncThunk(
    GET_PAYMENTTABLE_DATA,
    async (payload, { rejectWithValue }) => {

        try {
            // Simulate an API call if needed
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            // return filteredData[0];
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error?.message);
        }
    }
);


export const postpaymentdataMiddleWare = createAsyncThunk(
    POST_PAYMENT_DATA,
    async (payload, { rejectWithValue, getState }) => {
      const bodyTableData = {
        // id: payload?.id,
        policyNumber:'Policy0123',
        production:'12/12/2013',
        issuedDate:'12/12/2012',
        inception:'12/12/2023',
        expiry:'12/12/2023',
        action: 1,
        action: payload?.id,
      };
      console.log(bodyTableData, "find add datas in midd");
  
      try {
        // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
        // return bodyTableData;
      } catch (error) {
        return rejectWithValue(error?.response.data.error.message);
      }
    }
  );


  export const getPaymentSearchDataMiddleWare = createAsyncThunk(
    GET_PAYMENT_SEARCH,
    async ({ field, value }, { rejectWithValue, getState }) => {
      const { agentPaymentMainReducers } = getState();
      const { paymenttabledata } = agentPaymentMainReducers;
      console.log(paymenttabledata, field, value, "dta");
      function filterReceiptsByField(receipts, field, value) {
        const lowercasedValue = value.toLowerCase();
        return receipts.filter(receipt => receipt[field].toLowerCase().startsWith(lowercasedValue));
      }
      try {
        const filteredReceipts = filterReceiptsByField(paymenttabledata, field, value);

        return filteredReceipts;
      } catch (error) {
        return rejectWithValue(error?.response.data.error.message);
      }
    }
  );