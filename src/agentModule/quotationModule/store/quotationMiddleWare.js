import { createAsyncThunk } from "@reduxjs/toolkit";
import { QUOTATION_LIST_DATA, QUOTATION_SEARCH_DATA } from "../../../redux/actionTypes";

export const quotationListDataMiddleWare = createAsyncThunk(
    QUOTATION_LIST_DATA,
    async () => {
        try {

        } catch (error) {

        }
    })

export const quotationSearchListDataMiddleWare = createAsyncThunk(
    QUOTATION_SEARCH_DATA,
    async ({ field, value }, { rejectWithValue, getState }) => {
        console.log(field, value, "data find");
        const { quotationMainReducers } = getState();
        const { quotationListData } = quotationMainReducers;
        console.log(quotationMainReducers, "quotationMainReducers");

        function filterPaymentsByField(data, field, value) {
            const lowercasedValue = value.toLowerCase();
            const outputData = data.filter(item => {

                if (field === 'Quote Id') {
                    return item.QuoteId.toLowerCase().includes(lowercasedValue);
                }
                else if (field === 'Lead Name') {
                    return item.LeadName.toLowerCase().includes(lowercasedValue);
                }
                return (
                    (item.QuoteId.toLowerCase().includes(lowercasedValue) ||
                        item.LeadName.toLowerCase().includes(lowercasedValue))

                );


            });
            return outputData
        }
        try {
            const filteredPayments = filterPaymentsByField(quotationListData, field, value);
            console.log(filteredPayments, "filteredPayments");
            return filteredPayments;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error?.message);
        }
    }
);