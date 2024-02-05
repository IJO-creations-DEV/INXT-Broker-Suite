import { createSlice } from "@reduxjs/toolkit";
import { quotationListDataMiddleWare, quotationSearchListDataMiddleWare } from "./quotationMiddleWare";
import SvgArrow from "../../../assets/icons/SvgArrow";

const initialState = {
    loading: false,
    error: "",
    quotationListData: [
        {
            id: "1",
            QuoteId: "QI001",
            LeadName: "Carson Darrin",
            PolicyType: "PC",
            GrossPremium: "4000.00",
            Date: "01 JAN 2024",
            Status: "Draft",
            Actions: <SvgArrow />,
        },
        {
            id: "2",
            QuoteId: "QI002",
            LeadName: "Carson Darrin",
            PolicyType: "CV",
            GrossPremium: "5000.00",
            Date: "01 JAN 2024",
            Status: "Completed",
            Actions: <SvgArrow />,
        },
    ],
    quotationListSearchData: []
}

const quotationReducers = createSlice({
    name: "quotation",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(quotationListDataMiddleWare.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(quotationListDataMiddleWare.fulfilled, (state, action) => {
            state.loading = false;
            state.quotationListData = action.payload;
        });
        builder.addCase(quotationListDataMiddleWare.rejected, (state, action) => {
            state.loading = false;
            state.quotationListData = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });


        builder.addCase(quotationSearchListDataMiddleWare.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(quotationSearchListDataMiddleWare.fulfilled, (state, action) => {
            state.loading = false;
            state.quotationListSearchData = action.payload;
        });
        builder.addCase(quotationSearchListDataMiddleWare.rejected, (state, action) => {
            state.loading = false;
            state.quotationListSearchData = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
    }

})
export default quotationReducers.reducer