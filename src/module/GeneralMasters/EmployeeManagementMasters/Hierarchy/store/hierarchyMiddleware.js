import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../../../utility/commonServices";
import { APIROUTES } from "../../../../../routes/apiRoutes";
import {
  GET_HIERARCHY_DETAILS,
  GET_HIERARCHY_BY_ID,
  POST_ADD_HIERARCHY,
  PATCH_HIERARCHY_EDIT,
  GET_SERACH_HIERARCHY,
} from "../../../../../redux/actionTypes";

export const getHirarchyListMiddleware = createAsyncThunk(
  GET_HIERARCHY_DETAILS,
  async (payload, { rejectWithValue, getState }) => {
    const { hierarchyTableReducers } = getState();
    console.log(hierarchyTableReducers, "dta");
    const { receiptsTableList } = hierarchyTableReducers;
    const filteredData = receiptsTableList.filter((item) => item.id === 1);

    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return filteredData[0];
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const getHirarchyListByIdMiddleware = createAsyncThunk(
  GET_HIERARCHY_BY_ID,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const postAddHirarchyMiddleware = createAsyncThunk(
  POST_ADD_HIERARCHY,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const patchHirarchyEditMiddleware = createAsyncThunk(
  PATCH_HIERARCHY_EDIT,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const getSearchHirarchyMiddleware = createAsyncThunk(
  GET_SERACH_HIERARCHY,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

