import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../../utility/commonServices";
import { APIROUTES } from "../../../../routes/apiRoutes";
import {  GET_TRANSACTION_CODE_LIST,GET_TRANSACTION_CODE_LIST_SEARCH,POST_STATUS,POST_ADD_TRANSACTION,GET_TRANSACTION_CODE_SETUP,GET_USER_GROUP_ACCESS,POST_ADD_TRANSACTION_CODE_SETUP,POST_ADD_USER_GROUP_ACCESS,PATCH_TRANSACTION_CODE_DETAILS_EDIT,GET_TRANSACTION_CODE_DETAILS_VIEW } from "../../../../redux/actionTypes";


export const getTransactioncodeListMiddleware = createAsyncThunk(
    GET_TRANSACTION_CODE_LIST,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const getTransactioncodeListsearch = createAsyncThunk(
    GET_TRANSACTION_CODE_LIST_SEARCH,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const postStatus = createAsyncThunk(
    POST_STATUS,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await postRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);

export const postAddTransaction = createAsyncThunk(
    POST_ADD_TRANSACTION ,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await postRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);



export const getTransactionCodeSetup = createAsyncThunk(
    GET_TRANSACTION_CODE_SETUP,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const getUserGroupAccess = createAsyncThunk(
    GET_USER_GROUP_ACCESS,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);

export const postAddTransactionCodeSetup = createAsyncThunk(
    POST_ADD_TRANSACTION_CODE_SETUP,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await postRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const postAddUserGroupAccess = createAsyncThunk(
    POST_ADD_USER_GROUP_ACCESS,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await postRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const getTrascationcodeDetailsView = createAsyncThunk(
    GET_TRANSACTION_CODE_DETAILS_VIEW,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);



export const patchTrascationcodeDetailsEdit = createAsyncThunk(
    PATCH_TRANSACTION_CODE_DETAILS_EDIT,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await patchRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);