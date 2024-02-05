import { createAsyncThunk } from "@reduxjs/toolkit";
import { POLICY_LIST_DATA, POLICY_SEARCH_DATA } from "../../../redux/actionTypes";


export const policyListDataMiddleWare = createAsyncThunk(
    POLICY_LIST_DATA,
    async () => {
        try {

        } catch (error) {

        }
    })




export const policyListSerachDataMiddleWare = createAsyncThunk(
    POLICY_SEARCH_DATA,
    async ({ field, value }, { rejectWithValue, getState }) => {
        console.log(field, value, "data find");
        const { policyMainReducers } = getState();
        const { policyListData } = policyMainReducers;
        console.log(policyMainReducers, "policyMainReducers");

        function filterPaymentsByField(data, field, value) {
            const lowercasedValue = value.toLowerCase();
            const outputData = data.filter(item => {

                if (field === 'Policy Number') {
                    return item.PolicyNumber.toLowerCase().includes(lowercasedValue);
                }
                else if (field === 'Claim ID') {
                    return item.ClientId.toLowerCase().includes(lowercasedValue);
                }
                return (
                    (item.PolicyNumber.toLowerCase().includes(lowercasedValue) ||
                        item.ClientId.toLowerCase().includes(lowercasedValue))

                );


            });
            return outputData
        }
        try {
            const filteredPayments = filterPaymentsByField(policyListData, field, value);
            console.log(filteredPayments, "filteredPayments");
            return filteredPayments;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error?.message);
        }
    }
);
