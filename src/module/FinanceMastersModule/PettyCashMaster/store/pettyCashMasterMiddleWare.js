import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_PETTY_CASH_BY_ID } from "../../../../redux/actionTypes";



export const pettyCashMaster = createAsyncThunk(
    GET_PETTY_CASH_BY_ID,
    async (payload, { rejectWithValue, getState }) => {
        const { pettyCashMainReducers } = getState();
        console.log(pettyCashMainReducers, "dta");
        const { pettyCashList } = pettyCashMainReducers
        const filteredData = pettyCashList.filter(item => item.id === 1);
        console.log(filteredData,"filteredData")



        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return filteredData[0];
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
  )
