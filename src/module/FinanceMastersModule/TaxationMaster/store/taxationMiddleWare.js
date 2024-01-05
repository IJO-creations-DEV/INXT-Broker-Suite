
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_TAXATION, GET_TAXATION_BY_ID, GET_TAXATION_SEARCH_LIST, GET_TAXATION_VIEW, PATCH_TAXATION_EDIT, POST_TAXATION } from "../../../../redux/actionTypes";

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


export const postAddTaxationMiddileware = createAsyncThunk(
    POST_TAXATION,
    async (payload, { rejectWithValue }) => {
        let bodyTableData = {
            id: 8,
            taxationCode: `Tax${8}`,
            taxationName: payload?.taxationName?.name,
            taxationRate:payload?.taxationRate?.name,
            effectiveFrom: payload?.effectiveFrom?.name,
            effectiveTo: payload?.effectiveTo?.name,
           
            status: "500.00",
            action: 8,
          };
          console.log(payload?.taxationName?.name,"find tax")
        try {
            console.log(bodyTableData, "find middleware taxation");

            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return bodyTableData;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },)



export const getTaxationSearchList = createAsyncThunk(
    GET_TAXATION_SEARCH_LIST,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },)

export const getTaxationView = createAsyncThunk(
    GET_TAXATION_VIEW,

    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },)
export const patchTaxationEdit = createAsyncThunk(
    PATCH_TAXATION_EDIT,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },)

