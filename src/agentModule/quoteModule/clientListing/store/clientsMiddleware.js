import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_CLIENTS_LIST, GET_CLIENTS_SEARCH_LIST ,GET_PAYMENT_SEARCH} from "../../../../redux/agentActionTypes";



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
export const getPaymentSearchDataMiddleWare = createAsyncThunk(
    GET_PAYMENT_SEARCH,
    async ({ field, value }, { rejectWithValue, getState }) => {
        console.log(field, value, "data find");
        const { clientsReducers } = getState();
        const { clientListTable } = clientsReducers;
        console.log(clientsReducers,"clientsReducers");
        
        function filterPaymentsByField(data, field, value) {
            const lowercasedValue = value.toLowerCase();
            const outputData = data.filter(item => {

                if (field === 'Name') {
                    return item.Name.toLowerCase().includes(lowercasedValue);
                } else if (field === 'ClientID') {
                    return item.LeadID.toLowerCase().includes(lowercasedValue);
                }
                return (
                    (item.Name.toLowerCase().includes(lowercasedValue) ||
                        item.LeadID.toLowerCase().includes(lowercasedValue))

                );


            });
            return outputData
        }
        try {
            const filteredPayments = filterPaymentsByField(clientListTable, field, value);
            console.log(filteredPayments, "filteredPayments");
            return filteredPayments;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error?.message);
        }
    }
);
