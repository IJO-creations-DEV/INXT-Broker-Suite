
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../../utility/commonServices";
import { APIROUTES } from "../../../../routes/apiRoutes";
import { GET_MAIN_ACCOUNT_LIST, GET_MAIN_ACCOUNT_SEARCH_LIST, POST_MAIN_ACCOUNT_STATUS, GET_MAIN_ACCOUNT_DETAIL_VIEW, GET_ADD_MAIN_ACCOUNT, PATCH_MAIN_ACCOUNT_DETAIL_EDIT, GET_PATCH_MAIN_ACCOUNT_DETAIL_EDIT, GET_MAIN_ACCOUNT_VIEW } from "../../../../redux/actionTypes";


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
    GET_MAIN_ACCOUNT_VIEW,
    async (payload, { rejectWithValue }) => {
        console.log(payload,"payloadpayload");
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


