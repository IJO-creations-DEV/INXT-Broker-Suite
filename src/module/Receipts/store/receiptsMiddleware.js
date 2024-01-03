import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../utility/commonServices";
import { APIROUTES } from "../../../routes/apiRoutes";
import { GET_RECEIPT_DETAILS, GET_RECEIPT_DETAILS_BY_ID,GET_RECEIVABLE_TABLE,POST_ADD_RECEIPTS,POST_PAYMENT_DETAILS,PATCH_RECEIPT_EDIT} from "../../../redux/actionTypes";



export const getReceiptsListMiddleware = createAsyncThunk(
    GET_RECEIPT_DETAILS,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);
export const getReceiptsListByIdMiddleware = createAsyncThunk(
    GET_RECEIPT_DETAILS_BY_ID ,
    async (payload, { rejectWithValue, getState }) => {
        const { receiptsTableReducers } = getState();
        console.log(receiptsTableReducers, "dta");
        const { receiptsTableList } = receiptsTableReducers
        const filteredData = receiptsTableList.filter(item => item.id === 1);


        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return filteredData[0];
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);
export const getReceiptsReceivableMiddleware = createAsyncThunk(
    GET_RECEIVABLE_TABLE,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);
export const postAddReceiptsMiddleware = createAsyncThunk(
    POST_ADD_RECEIPTS,
    async (payload, { rejectWithValue }) => {
        console.log(payload,"ytytyyyttyty")
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } 
        catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
      
    },
);
export const postPaymentDetailsMiddleware = createAsyncThunk(
    POST_PAYMENT_DETAILS,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);
export const patchReceipEditMiddleware = createAsyncThunk(
    PATCH_RECEIPT_EDIT,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);