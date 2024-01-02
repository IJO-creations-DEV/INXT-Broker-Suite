import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_PAYMENT_VOUCHER, GET_PAYMENT_VOUCHER_BY_ID } from "../../../../redux/actionTypes";
import { getRequest } from "../../../../utility/commonServices";
import { APIROUTES } from "../../../../routes/apiRoutes";



export const getDisbursmentListMiddleware = createAsyncThunk(
    GET_PAYMENT_VOUCHER,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);
export const getDisbursmentByIdMiddleware = createAsyncThunk(
    GET_PAYMENT_VOUCHER_BY_ID,
    async (payload, { rejectWithValue, getState }) => {
        const { paymentVoucherReducers } = getState();
        console.log(paymentVoucherReducers, "dta");
        const { paymentVocherList } = paymentVoucherReducers
        const filteredData = paymentVocherList.filter(item => item.id === 1);


        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return filteredData[0];
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);
