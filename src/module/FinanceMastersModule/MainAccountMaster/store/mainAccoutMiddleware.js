
import { createSlice } from "@reduxjs/toolkit";
import {
  getMainAccountList,
  getMainAccountSearchList,
  postMainAccountStatus,
  getAddMainAccount,
  patchMainAccountDetailEdit,
  getMainAccountDetailView,
  getPatchMainAccountDetailEdit
} from "./mainAccountReducer";
const initialState = {
  loading: false,
  error: "",
  MainAccountList: [
    {
      id: "1",
      mainAccountCode: "main123",
      mainAccountName: "mainAccountName",
      description: "description",
      accountType: "Credit",
      openEntry: "No",
      openEntryType: "Credit",
      accountCategoryCode: "acc123",
      companyCode: "cc123",
      currencyCode: "cc112"
    },
    {
      id: "2",
      mainAccountCode: "main999",
      mainAccountName: "mainAccount88",
      description: "description",
      accountType: "Debit",
      openEntry: "Yes",
      openEntryType: "Debit",
      accountCategoryCode: "acc123",
      companyCode: "cc123",
      currencyCode: "cc112"
    }
  ],
  MainAccountSearchList: [],
  MainAccountStatus: {},
  AddMainAccount: {},
  mainAccountDetailEdit: {},
  getMainAccountDetailEdit: {},
  MainAccountDetailView: {}
};
let nextId = 2
const mainAccountMasterReducer = createSlice({
  name: "mainAccountMaster",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    //MainAccountList

    builder.addCase(getMainAccountList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getMainAccountList.fulfilled,
      (state, action) => {
        state.loading = false;
        state.MainAccountList = action.payload;
      }
    );
    builder.addCase(
      getMainAccountList.rejected,
      (state, action) => {
        state.loading = false;

        state.MainAccountList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //MainAccountSearchList

    builder.addCase(getMainAccountSearchList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getMainAccountSearchList.fulfilled,
      (state, action) => {
        state.loading = false;
        state.MainAccountSearchList = action.payload;
      }
    );
    builder.addCase(
      getMainAccountSearchList.rejected,
      (state, action) => {
        state.loading = false;

        state.MainAccountSearchList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //MainAccountStatus

    builder.addCase(postMainAccountStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postMainAccountStatus.fulfilled, (state, action) => {
        state.loading = false;
        const newItem2 = { ...action.payload, id: nextId++ };
        state.MainAccountList = [...state.MainAccountList, newItem2];
        console.log(state.MainAccountList, "kkk")
      }
    );
    builder.addCase(
      postMainAccountStatus.rejected,
      (state, action) => {
        state.loading = false;

        state.MainAccountStatus = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //AddMainAccount

    builder.addCase(getAddMainAccount.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAddMainAccount.fulfilled,
      (state, action) => {
        state.loading = false;
        state.AddMainAccount = action.payload;
      }
    );
    builder.addCase(
      getAddMainAccount.rejected,
      (state, action) => {
        state.loading = false;

        state.AddMainAccount = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //MainAccountDetailEdit

    builder.addCase(patchMainAccountDetailEdit.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchMainAccountDetailEdit.fulfilled,
      (state, action) => {
        state.loading = false;
        const updatedIndex = state.MainAccountList.findIndex(
          (item) => item.id === action.payload.id
        );
        if (updatedIndex !== -1) {
          const updatedCurrencyList = [...state.MainAccountList];
          updatedCurrencyList[updatedIndex] = action.payload;
          state.MainAccountList = updatedCurrencyList;
        } else {
          state.MainAccountList = [...state.MainAccountList, action.payload];

import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../../utility/commonServices";
import { APIROUTES } from "../../../../routes/apiRoutes";
import { GET_MAIN_ACCOUNT_LIST, GET_MAIN_ACCOUNT_SEARCH_LIST, POST_MAIN_ACCOUNT_STATUS, GET_MAIN_ACCOUNT_DETAIL_VIEW, GET_ADD_MAIN_ACCOUNT, PATCH_MAIN_ACCOUNT_DETAIL_EDIT, GET_PATCH_MAIN_ACCOUNT_DETAIL_EDIT } from "../../../../redux/actionTypes";


export const getMainAccountList = createAsyncThunk(
    GET_MAIN_ACCOUNT_LIST,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);

        }
    },
);


export const getMainAccountSearchList = createAsyncThunk(
    GET_MAIN_ACCOUNT_SEARCH_LIST,
    async (payload, { rejectWithValue,getState }) => {
        const textSearch = payload;
        console.log(textSearch, "textSearch")
        const { mainAccoutReducers } = getState();

        const { MainAccountList } = mainAccoutReducers;
        console.log(MainAccountList, "1234")
        try {
            const searchResults = MainAccountList.filter(item => {
                return item.mainAccountCode.toLowerCase().includes(textSearch.toLowerCase());
            });
            console.log(searchResults, "searchResults")
            return searchResults;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);

export const postMainAccountStatus = createAsyncThunk(
    POST_MAIN_ACCOUNT_STATUS,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const getAddMainAccount = createAsyncThunk(
    GET_ADD_MAIN_ACCOUNT,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);

export const getPatchMainAccountDetailEdit = createAsyncThunk(
    GET_PATCH_MAIN_ACCOUNT_DETAIL_EDIT,
    async (payload, { rejectWithValue }) => {
        console.log(payload, "payload")
        try {
            // const { data } = await patchRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);
export const patchMainAccountDetailEdit = createAsyncThunk(
    PATCH_MAIN_ACCOUNT_DETAIL_EDIT,
    async (payload, { rejectWithValue }) => {
        const data = {
            id: payload?.id,
            mainAccountCode: payload?.mainAccountCode,
            mainaccountname: payload?.mainaccountname,
            description: payload?.description,
            accountcategorycode: payload?.accountcategorycode,
            accounttype: payload?.accounttype,
            companyCode: payload?.companyCode,
            currencyCode: payload?.currencyCode,
            openentrytype: payload?.openentrytype
        }
        try {
            return data;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);




export const getMainAccountDetailView = createAsyncThunk(
    GET_MAIN_ACCOUNT_DETAIL_VIEW,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


