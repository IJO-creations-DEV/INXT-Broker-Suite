import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GET_USER_DETAILS, GET_USER_BY_ID,
  POST_ADD_USER,
  PATCH_USER_EDIT,
  GET_SERACH_USER,
  GET_ADD_BRANCH_USER,
  GET_USER_DATA_VIEW,
  GET_USER_DATA_EDIT,
  GET_MAIN_BRANCH_ACCESS_VIEW,
  GET_MAIN_BRANCH_VIEW,
  POST_MAIN_BRANCH_VIEW,
  GET_ADDITIONAL_ROLE_TABEL,
  GET_ADDITIONAL_ROLE_VIEW,
  POST_ADDITIONAL_ROLE
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
    const data = {

      id: payload?.id,
      userName: payload?.userName,
      employeeCode: payload?.employeeCode,
      assignedRole: payload?.assignedRole,
      email: payload?.email,
      phoneNumber: payload?.phoneNumber,
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: "",

    }
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const patchUserEditMiddleware = createAsyncThunk(
  PATCH_USER_EDIT,
  async (payload, { rejectWithValue }) => {
    const data = {
      id: payload?.id,
      userName: payload?.userName,
      employeeCode: payload?.employeeCode,
      email: payload?.email,
      phoneNumber: payload?.phoneNumber,
      assignedRole: payload?.assignedRole,
      modifiedBy: payload?.modifiedBy,
      modifiedOn: "01/12/2023",
    }
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return data;
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

export const getUserViewDataMiddleWare = createAsyncThunk(
  GET_USER_DATA_VIEW,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const getUserEditDataMiddleWare = createAsyncThunk(
  GET_USER_DATA_EDIT,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getMainBranchAccessMiddleWare = createAsyncThunk(
  GET_MAIN_BRANCH_ACCESS_VIEW,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getViewMainBranchUser = createAsyncThunk(
  GET_MAIN_BRANCH_VIEW,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const postViewMainBranchUser = createAsyncThunk(
  POST_MAIN_BRANCH_VIEW,
  async (payload, { rejectWithValue }) => {
    console.log(payload, "payload");
    const data = {
      branchCode: payload?.branchCode,
      branchName: "branchName",
      TransactionNofrom: "TransactionNofrom",
      departmentCode: payload?.departmentCode,
      departmentName: "departmentName",
    }
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);



export const getAdditionalRoleTabelMiddleWare = createAsyncThunk(
  GET_ADDITIONAL_ROLE_TABEL,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getAdditionalRoleViewMiddleWare = createAsyncThunk(
  GET_ADDITIONAL_ROLE_VIEW,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const postAdditionalRoleViewMiddleWare = createAsyncThunk(
  POST_ADDITIONAL_ROLE,
  async (payload, { rejectWithValue }) => {
    console.log(payload, "payload");
    const data = {
      id: payload?.id,
      RoleCode: payload?.RoleCode,
      RoleName: payload?.RoleName,
      ActiveHours: payload?.ActiveHours,
    }
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

