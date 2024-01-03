import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getRequest } from "../../../utility/commonServices";
// import { APIROUTES } from "../../../routes/apiRoutes";
import { GET_COMMISSION, GET_COMMISSION_BY_ID } from "../../../../redux/actionTypes";




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
