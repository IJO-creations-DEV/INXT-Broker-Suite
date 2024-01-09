import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../../../utility/commonServices";
import { APIROUTES } from "../../../../../routes/apiRoutes";
import {
  GET_INSURANCE_COMPANY_SEARCH_LIST,
  GET_INSURANCE_COMPANY_LIST,
  POST_INSURANCE_COMPANY_DATA,
} from "../../../../../redux/actionTypes";

export const getInsuranceCompanyListMiddleWare = createAsyncThunk(
  GET_INSURANCE_COMPANY_LIST,
  async (payload, { rejectWithValue, getState }) => {
    const { insuranceCompanyReducers } = getState();
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const getSearchInsuranceCompanyMiddleWare = createAsyncThunk(
  GET_INSURANCE_COMPANY_SEARCH_LIST,
  async (payload, { rejectWithValue, getState }) => {
    const { insuranceCompanyReducers } = getState();
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const postInsuranceCompanyMiddleWare = createAsyncThunk(
  POST_INSURANCE_COMPANY_DATA,
  async (payload, { rejectWithValue, getState }) => {
    const bodyTableData = {
      id: payload?.id,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      insuranceCompanyCode: payload?.insuranceCompanyCode,
      insuranceCompanyName: payload?.insuranceCompanyName,
      email: payload?.email,
      phoneNumber: payload?.phoneNumber,
      action: payload?.id,
    };
    console.log(bodyTableData, "find add datas in midd");

    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return bodyTableData;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
