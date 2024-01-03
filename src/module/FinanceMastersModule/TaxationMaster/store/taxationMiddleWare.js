
import { createAsyncThunk } from "@reduxjs/toolkit";
import {  GET_TAXATION, GET_TAXATION_BY_ID } from "../../../../redux/actionTypes";


// export const TaxationData = createAsyncThunk(
//     GET_TAXATION,
//     async (payload, { rejectWithValue }) => {
//         try {
           
//             return payload;
//         } catch (error) {
//             return rejectWithValue(error?.response.data.error.message);
//         }
//     },
// );
export const getTaxationData = createAsyncThunk(
    GET_TAXATION_BY_ID,
    async (payload, { rejectWithValue, getState }) => {
        const { taxationMainReducers } = getState();
        const { taxationList } = taxationMainReducers
        const filteredData = taxationList.filter(item => item.id === 1);


        try {
          
            return filteredData[0];
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);

