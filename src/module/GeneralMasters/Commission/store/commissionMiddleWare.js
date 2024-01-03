import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getRequest } from "../../../utility/commonServices";
// import { APIROUTES } from "../../../routes/apiRoutes";
import { GET_COMMISSION, GET_COMMISSION_BY_ID, GET_COMMISSION_SEARCH_LIST, GET_COMMISSION_VIEW, PATCH_COMMISSION_EDIT, POST_COMMISSION } from "../../../../redux/actionTypes";




export const CommissionData = createAsyncThunk(
    GET_COMMISSION,
    async (payload, { rejectWithValue }) => {
        try {

            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);
export const getCommission = createAsyncThunk(
    GET_COMMISSION_BY_ID,
    async (payload, { rejectWithValue, getState }) => {
        const { commissionMianReducers } = getState();
        const { commissionList } = commissionMianReducers
        const filteredData = commissionList.filter(item => item.id === 1);


        try {

            return filteredData[0];
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);

export const postAddCommission = createAsyncThunk(
    POST_COMMISSION,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
)

export const getCommissionSearchList = createAsyncThunk(
    GET_COMMISSION_SEARCH_LIST,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
)

export const getCommissionView=createAsyncThunk(
    GET_COMMISSION_VIEW,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
)
export const patchCommissionEdit=createAsyncThunk(
    PATCH_COMMISSION_EDIT,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
)

