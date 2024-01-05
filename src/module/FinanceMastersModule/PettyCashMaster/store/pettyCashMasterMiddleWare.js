import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_PETTY_CASH_BY_ID, GET_PETTY_CASH_SEARCH_LIST, GET_PETTY_CASH_VIEW, PATCH_PETTY_CASH_EDIT, POST_ADD_PETTY_CASH } from "../../../../redux/actionTypes";



export const pettyCashMaster = createAsyncThunk(
    GET_PETTY_CASH_BY_ID,
    async (payload, { rejectWithValue, getState }) => {
        const { pettyCashMainReducers } = getState();
        console.log(pettyCashMainReducers, "dta");
        const { pettyCashList } = pettyCashMainReducers
        const filteredData = pettyCashList.filter(item => item.id === 1);
        console.log(filteredData, "filteredData")
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return filteredData[0];
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
)




    const postPetty = async (formData) => {
        console.log(formData, "formData")
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return { success: true, data: formData };
    };
    export const postAddPettyCash = createAsyncThunk(
        POST_ADD_PETTY_CASH,
        async (payload, { rejectWithValue }) => {
            console.log(payload, "values")
            try {
                // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
                const response = await postPetty(payload);
                return response;
            } catch (error) {
                return rejectWithValue(error?.response.data.error.message);
            }
        },)




export const getPettyCashSearchList = createAsyncThunk(
    GET_PETTY_CASH_SEARCH_LIST,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },)

export const getPettyCashView = createAsyncThunk(
    GET_PETTY_CASH_VIEW,

    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },)
export const patchPettyCashEdit = createAsyncThunk(
    PATCH_PETTY_CASH_EDIT,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },)
