import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_CLIENTS_LIST, GET_CLIENTS_SEARCH_LIST, GET_CLIENT_EDIT_DATA, GET_PAYMENT_SEARCH, PATCH_CLIENTEDIT_DATA } from "../../../../redux/agentActionTypes";



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
    async ({ field, value, status }, { rejectWithValue, getState }) => {
        console.log(field, value, status, "data find");
        const { clientsReducers } = getState();
        const { clientListTable } = clientsReducers;
        console.log(clientsReducers, "clientsReducers");

        function filterPaymentsByField(data, field, value) {
            const lowercasedValue = value.toLowerCase();
            const outputData = data.filter(item => {

                if (field === 'Name') {
                    return item.FirstName.toLowerCase().includes(lowercasedValue);
                } else if (field === 'ClientID') {
                    return item.LeadID.toLowerCase().includes(lowercasedValue);
                }
                return (
                    (item.FirstName.toLowerCase().includes(lowercasedValue) ||
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


export const getClientEditMiddleWare = createAsyncThunk(
    GET_CLIENT_EDIT_DATA,
    async (payload, { rejectWithValue }) => {
        try {
            return payload
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    })

export const patchClientEditMiddleWare = createAsyncThunk(
    PATCH_CLIENTEDIT_DATA,
    async (payload, { rejectWithValue, getState }) => {
        console.log(payload, "find edit load");
        const category = payload.category === 'Individual' ? 'Individual' : 'Company';
        console.log(category, "category");
        const randomQuotesNumber = Math.floor(Math.random() * 10);
        const data = {
            id: payload?.id,
            CompanyName: payload?.CompanyName,
            TaxNumber: payload?.TaxNumber,
            FirstName: payload?.FirstName,
            LastName: payload?.LastName,
            PreferredName: payload?.PreferredName,
            EmailID: payload?.EmailID,
            ContactNumber: payload?.ContactNumber,
            HouseNo: payload?.HouseNo,
            Barangay: payload?.Barangay,
            Country: payload?.Country,
            Province: payload?.Province,
            City: payload?.City,
            Quotes: randomQuotesNumber,
            ZIPCode: payload?.ZIPCode,
            DateofBirth: payload?.DateofBirth.toLocaleDateString("en-US", {
                month: "numeric",
                day: "2-digit",
                year: "numeric",
            }),
            category: category,
            gender: "Male",
            ProductDescription: "Motor Comprensive"
        }

        try {
            console.log(data, "jhhjj");
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return data;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    }
);

