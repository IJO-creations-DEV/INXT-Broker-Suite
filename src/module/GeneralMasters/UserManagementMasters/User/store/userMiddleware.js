import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GET_USER_DETAILS, GET_USER_BY_ID,
  POST_ADD_USER,
  PATCH_USER_EDIT,
  GET_SERACH_USER,
  GET_ADD_BRANCH_USER
} from "../../../../../redux/actionTypes";
// import { getRequest } from "../../../utility/commonServices";
// import { APIROUTES } from "../../../routes/apiRoutes";
// import {
//   GET_USER_DETAILS,
//   GET_USER_BY_ID,
//   POST_ADD_USER,
//   PATCH_USER_EDIT,
//   GET_SERACH_USER,
//   GET_ADD_BRANCH_USER
// } from "../../../../../redux/actionTypes";

export const getUserMiddleware = createAsyncThunk(
  GET_USER_DETAILS,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const getUserListByIdMiddleware = createAsyncThunk(
  GET_USER_BY_ID,
  async (payload, { rejectWithValue, getState }) => {
    const { userReducers } = getState();

    const { userList } = userReducers;

    try {
      const filteredData = userList.filter((item) => item.id == payload);
      console.log(filteredData, "dta");

      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return filteredData[0];
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const postAddUserMiddleware = createAsyncThunk(
  POST_ADD_USER,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const patchUserEditMiddleware = createAsyncThunk(
  PATCH_USER_EDIT,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const getSearchUserMiddleware = createAsyncThunk(
  GET_SERACH_USER,
  async (payload, { rejectWithValue, getState }) => {
    const textSearch = payload;
    console.log(textSearch, "textSearch")
    const { userReducers } = getState();

    const { userList } = userReducers;

    try {
      const searchResults = userList.filter(item => {
        return item.userName.toLowerCase().includes(textSearch.toLowerCase());
      });
      console.log(searchResults, "searchResults")
      return searchResults;


    }
    // try {
    //   const { userReducers } = getState();
    //   const { userList } = userReducers;
    //   // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
    //   return payload;
    // } 
    catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getBranchAddUserMiddleware = createAsyncThunk(
  GET_ADD_BRANCH_USER,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
