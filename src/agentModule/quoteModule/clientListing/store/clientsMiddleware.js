import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_CLIENTS_LIST, GET_CLIENTS_SEARCH_LIST } from "../../../../redux/agentActionTypes";



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


export const getClientTableSearchListMiddleware = createAsyncThunk(
    GET_CLIENTS_SEARCH_LIST,
    async (payload, { rejectWithValue, getState }) => {
        const textSearch = payload;
        console.log(textSearch, "textSearch")
        const { clientsReducers } = getState();

        const { clientListTable } = clientsReducers;
        console.log(clientListTable, "1234")
        try {
            const searchResults = clientListTable.filter(item => {
                return item?.Category.toLowerCase().includes(textSearch.toLowerCase());
            });
            console.log(searchResults, "searchResults")
            return searchResults;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },)