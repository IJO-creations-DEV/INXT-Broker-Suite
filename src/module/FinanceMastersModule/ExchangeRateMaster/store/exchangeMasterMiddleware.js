import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../../utility/commonServices";
import { APIROUTES } from "../../../../routes/apiRoutes";
import {  GET_EXCHANGE_LIST,GET_EXCHANGE_SEARCH_LIST, POST_EXCHANGE_STATUS ,GET_EXCHANGE_DETAIL_VIEW, GET_ADD_EXCHANGE,PATCH_EXCHANGE_DETAIL_EDIT } from "../../../../redux/actionTypes";


export const getExchangeList = createAsyncThunk(
    GET_EXCHANGE_LIST,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const getExchangeSearchList = createAsyncThunk(
    GET_EXCHANGE_SEARCH_LIST,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);

export const postExchangeStatus = createAsyncThunk(
    POST_EXCHANGE_STATUS,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const getAddExchange = createAsyncThunk(
    GET_ADD_EXCHANGE,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const patchExchangeDetailEdit = createAsyncThunk(
    PATCH_EXCHANGE_DETAIL_EDIT,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await patchRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const getExchangeDetailView = createAsyncThunk(
    GET_EXCHANGE_DETAIL_VIEW,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);
