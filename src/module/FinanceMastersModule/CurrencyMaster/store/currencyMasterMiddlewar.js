import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../../utility/commonServices";
import { APIROUTES } from "../../../../routes/apiRoutes";
import {  GET_CURRENCY_LIST,GET_CURRENCY_SEARCH_LIST, POST_CURRENCY_STATUS ,GET_CURRENCY_DETAIL_VIEW, POST_ADD_CURRENCY,PATCH_CURRENCY_DETAIL_EDIT, GET_CURRENCY_DETAIL_EDIT } from "../../../../redux/actionTypes";


export const getCurrencyList = createAsyncThunk(
    GET_CURRENCY_LIST,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const getCurrencySearchList = createAsyncThunk(
    GET_CURRENCY_SEARCH_LIST,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);

export const postCurrencyStatus = createAsyncThunk(
    POST_CURRENCY_STATUS,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const postAddCurrency = createAsyncThunk(
    POST_ADD_CURRENCY,
    async (payload, { rejectWithValue }) => {
        console.log(payload,"payload")

        const Tabledata = {
            "id": payload,
            "Currencycode": payload?.CurrencyCode,
            "ISOcode": payload?.ISOcode.name,
            "CurrencyFormat": payload?.CurrencyFormat,
            "SmallestUnit": payload?.SmallestUnit,
            "UnitDescription": payload?.UnitDescription,
            "CurrencyName": payload?.CurrencyName
        }
        try {
            // const { data } = await postRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return Tabledata;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);

export const getCurrencyDetailEdit = createAsyncThunk(
    GET_CURRENCY_DETAIL_EDIT,
    async (payload, { rejectWithValue }) => {
        console.log(payload,"getCurrencyDetailEdit")
        try {
            // const { data } = await patchRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);

export const patchCurrencyDetailEdit = createAsyncThunk(
    PATCH_CURRENCY_DETAIL_EDIT,
    async (payload, { rejectWithValue }) => {
        console.log(payload,"patchCurrencyDetailEdit")
        const Tabledata ={
            "id": payload.id,
            "Currencycode": payload?.CurrencyCode,
            "ISOcode": payload?.ISOcode,
            "CurrencyFormat": payload?.CurrencyFormat,
            "SmallestUnit": payload?.SmallestUnit,
            "UnitDescription": payload?.UnitDescription,
            "CurrencyName": payload?.CurrencyName
        }
        try {
            // const { data } = await patchRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return Tabledata;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const getCurrencyDetailView = createAsyncThunk(
    GET_CURRENCY_DETAIL_VIEW,
    async (payload, { rejectWithValue }) => {
        console.log(payload,"payload")
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);
