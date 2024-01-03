
import { createAsyncThunk } from "@reduxjs/toolkit";
import {  GET_SUB__ACCOUNT, GET_SUB__ACCOUNT_BY_ID} from "../../../../redux/actionTypes";


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

