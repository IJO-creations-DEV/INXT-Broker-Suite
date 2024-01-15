import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getRequest } from "../../../utility/commonServices";
// import { APIROUTES } from "../../../routes/apiRoutes";
import {
  GET_STATE_DETAILS,
  GET_STATE_BY_ID,
  POST_ADD_STATE,
  PATCH_STATE_EDIT,
  GET_SERACH_STATE,
 
} from "../../../../../redux/actionTypes";
import { data } from "../../../../Receipts/PolicyReceipts/mock";

export const getStateMiddleware = createAsyncThunk(
  GET_STATE_DETAILS,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const getStateListByIdMiddleware = createAsyncThunk(
  GET_STATE_BY_ID,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const postAddStateMiddleware = createAsyncThunk(
  POST_ADD_STATE,
  async (payload, { rejectWithValue }) => {
    console.log(payload,"postAddStateMiddleware");

    console.log(data,"data");
    try {
      const data={
        id: payload?.id,
        StateCode: payload?.StateCode,
        StateName: payload?.StateName,
        Country: payload?.Country,
        Modifiedby: payload?.ModifiedBy,
        ModifiedOn: payload?.ModifiedOn
      }
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const patchStateEditMiddleware = createAsyncThunk(
  PATCH_STATE_EDIT,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const getSearchStateMiddleware = createAsyncThunk(
  GET_SERACH_STATE,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);


