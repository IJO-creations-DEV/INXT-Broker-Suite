import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../utility/commonServices";
import { APIROUTES } from "../../../routes/apiRoutes";
import { GET_CORRECTION_JV_LIST, GET_CORRECTION_JV_VIEW, PATCH_CORRECTION_JV_EDIT, POST_CORRECTION_JV } from "../../../redux/actionTypes";



export const getCorrectionJVTabelData = createAsyncThunk(
    GET_CORRECTION_JV_LIST,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const postCorrectionJVData = createAsyncThunk(
    POST_CORRECTION_JV,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const getCorrectionJVView = createAsyncThunk(
    GET_CORRECTION_JV_VIEW,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const patchCorrectionJVEdit = createAsyncThunk(
    PATCH_CORRECTION_JV_EDIT,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);
