import { createAsyncThunk } from "@reduxjs/toolkit";
import { CLAIM_SEARCH_DATA, CLIAM_LIST_DATA } from "../../../redux/actionTypes";

export const claimListDatMiddleWare = createAsyncThunk(
    CLIAM_LIST_DATA,
    async () => {
        try {

        } catch (error) {

        }
    })



export const claimListSearchDataDatMiddleWare = createAsyncThunk(
    CLAIM_SEARCH_DATA,
    async ({ field, value }, { rejectWithValue, getState }) => {
        console.log(field, value, "data find");
        const { claimsMainReducers } = getState();
        const { claimsTabelList } = claimsMainReducers;
        console.log(claimsMainReducers, "claimsMainReducers");

        function filterPaymentsByField(data, field, value) {
            const lowercasedValue = value.toLowerCase();
            const outputData = data.filter(item => {

                if (field === 'Policy Number') {
                    return item.policyNumber.toLowerCase().includes(lowercasedValue);
                } 
                else if (field === 'Claim Number') {
                    return item.claimNumber.toLowerCase().includes(lowercasedValue);
                }
                return (
                    (item.policyNumber.toLowerCase().includes(lowercasedValue) ||
                        item.claimNumber.toLowerCase().includes(lowercasedValue))

                );


            });
            return outputData
        }
        try {
            const filteredPayments = filterPaymentsByField(claimsTabelList, field, value);
            console.log(filteredPayments, "filteredPayments");
            return filteredPayments;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error?.message);
        }
    }
);

