import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../utility/commonServices";
import { APIROUTES } from "../../../routes/apiRoutes";
import { GET_PAYMENT_VOUCHER, GET_PAYMENT_VOUCHER_BY_ID } from "../../../redux/actionTypes";



export const getReceiptsListMiddleware = createAsyncThunk(
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
export const getReceiptsListByIdMiddleware = createAsyncThunk(
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
