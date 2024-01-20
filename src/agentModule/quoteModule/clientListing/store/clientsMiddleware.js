import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_CLIENTS_LIST } from "../../../../redux/agentActionTypes";



export const getClientTableMiddleware = createAsyncThunk(
    GET_CLIENTS_LIST,
    async (_a, { rejectWithValue }) => {

        try {
            // Simulate an API call if needed
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            // return filteredData[0];
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error?.message);
        }
    }
);
