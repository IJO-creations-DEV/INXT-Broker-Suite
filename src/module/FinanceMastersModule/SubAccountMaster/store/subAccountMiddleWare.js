
import { createAsyncThunk } from "@reduxjs/toolkit";
import {  GET_SUB_ACCOUNT_SEARCH_LIST, GET_SUB__ACCOUNT, GET_SUB__ACCOUNT_BY_ID, GET_SUB__ACCOUNT_VIEW, PATCH_SUB__ACCOUNT_EDIT, POST_SUB__ACCOUNT} from "../../../../redux/actionTypes";


// export const subAccountData = createAsyncThunk(
//     GET_SUB__ACCOUNT,
//     async (payload, { rejectWithValue }) => {
//         try {
           
//             return payload;
//         } catch (error) {
//             return rejectWithValue(error?.response.data.error.message);
//         }
//     },
// );
export const getSubAccount = createAsyncThunk(
    GET_SUB__ACCOUNT_BY_ID,
    async (payload, { rejectWithValue, getState }) => {
        const { subAccountMainReducers } = getState();
      
        const { subAccountList } = subAccountMainReducers
        const filteredData = subAccountList.filter(item => item.id === 1);


        try {
          
            return filteredData[0];
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);
export const postSubAccount = createAsyncThunk(
    POST_SUB__ACCOUNT,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },)



export const getSubAccountSearchList = createAsyncThunk(
    GET_SUB_ACCOUNT_SEARCH_LIST,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },)

export const getSubAccountView = createAsyncThunk(
    GET_SUB__ACCOUNT_VIEW,

    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },)
export const patchSubAccountEdit = createAsyncThunk(
PATCH_SUB__ACCOUNT_EDIT,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },)

