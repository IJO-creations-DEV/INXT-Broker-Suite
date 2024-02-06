import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  POST_CREATELEAD_DATA,
  GET_LEADTABLE_DATA,
  PATCH_LEADEDIT_DATA,
  GET_PAYMENT_SEARCH,
  GET_LEAD_EDIT_DATA,
  GET_LEAD_LIST_DATA
} from "../../../redux/actionTypes";

export const getleadtableMiddleware = createAsyncThunk(
  GET_LEADTABLE_DATA,
  async (_a, { rejectWithValue }) => {
    try {
      // Simulate an API call if needed
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      // return filteredData[0];

    } catch (error) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);
export const getLeadDataMiddleware = createAsyncThunk(
  GET_LEAD_LIST_DATA,
  async () => {
    try {

    } catch (error) {

    }
  })

export const postCreateleadMiddleware = createAsyncThunk(
  POST_CREATELEAD_DATA,
  async (payload, { rejectWithValue, getState }) => {
    console.log(payload, "find add datas in midd");
    const category = payload.category === 'Individual' ? 'Individual' : 'Company';
    const type = payload.Type === "Motor" ? 'Motor' : payload.Type === "Travel" ? "Travel" : 'Property';
    const randomQuotesNumber = Math.floor(Math.random() * 10);

    const data = {
      id: payload?.id,
      CompanyName: payload?.CompanyName,
      TaxNumber: payload?.TaxNumber,
      FirstName: payload?.FirstName,
      LastName: payload?.LastName,
      PreferredName: payload?.PreferredName,
      EmailID: payload?.EmailID,
      ContactNumber: payload?.ContactNumber,
      HouseNo: payload?.HouseNo,
      Barangay: payload?.Barangay,
      Country: payload?.Country,
      Province: payload?.Province,
      City: payload?.City,
      ZIPCode: payload?.ZIPCode,
      // DateofBirth: payload?.DateofBirth,
      DateofBirth: payload?.DateofBirth.toLocaleDateString("en-US", {
        month: "numeric",
        day: "2-digit",
        year: "numeric",
      }),
      Quotes: randomQuotesNumber,
      category: category,
      gender: "Male",
      Type:type
    }

    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const patchLeadEditMiddleWare = createAsyncThunk(
  PATCH_LEADEDIT_DATA,
  async (payload, { rejectWithValue, getState }) => {
    console.log(payload, "find edit load");
    const category = payload.category === 'Individual' ? 'Individual' : 'Company';
    const type = payload.Type === "Motor" ? 'Motor' : payload.Type === "Travel" ? "Travel" : 'Property';
    console.log(type, "type");
    const data = {
      id: payload?.id,
      CompanyName: payload?.CompanyName,
      TaxNumber: payload?.TaxNumber,
      FirstName: payload?.FirstName,
      LastName: payload?.LastName,
      PreferredName: payload?.PreferredName,
      EmailID: payload?.EmailID,
      ContactNumber: payload?.ContactNumber,
      HouseNo: payload?.HouseNo,
      Barangay: payload?.Barangay,
      Country: payload?.Country,
      Province: payload?.Province,
      City: payload?.City,
      Quotes: "123",
      ZIPCode: payload?.ZIPCode,
      // DateofBirth: payload?.DateofBirth,
      DateofBirth: payload?.DateofBirth.toLocaleDateString("en-US", {
        month: "numeric",
        day: "2-digit",
        year: "numeric",
      }),
      category: category,
      gender: "Male",
      Type: type,
    }

    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const getPaymentSearchDataMiddleWare = createAsyncThunk(
  GET_PAYMENT_SEARCH,
  async ({ field, value }, { rejectWithValue, getState }) => {
    console.log(field, value, "data find");
    const { leadReducers } = getState();
    const { leadtabledata } = leadReducers;
    console.log(leadReducers, "leadReducers");

    function filterPaymentsByField(data, field, value) {
      const lowercasedValue = value.toLowerCase();
      const outputData = data.filter(item => {

        if (field === 'Name') {
          return item.FirstName.toLowerCase().includes(lowercasedValue);
        } else if (field === 'LeadID') {
          return item.LeadID.toLowerCase().includes(lowercasedValue);
        }
        return (
          (item.FirstName.toLowerCase().includes(lowercasedValue) ||
            item.LeadID.toLowerCase().includes(lowercasedValue))

        );


      });
      return outputData
    }
    try {
      const filteredPayments = filterPaymentsByField(leadtabledata, field, value);
      console.log(filteredPayments, "filteredPayments");
      return filteredPayments;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);



export const getLeadEditDataMiddleWare = createAsyncThunk(
  GET_LEAD_EDIT_DATA,
  async (payload, { rejectWithValue }) => {
    console.log(payload, "payload");
    try {
      return payload

    } catch (error) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);