import { createSlice } from "@reduxjs/toolkit";
import { claimListDatMiddleWare, claimListSearchDataDatMiddleWare } from "./claimMiddleWare";
import SvgArrow from "../../../assets/icons/SvgArrow";

const initialState = {
    loading: false,
    error: "",
    claimsTabelList: [
        {
            id: "1",
            claimNumber: "CL001",
            ClientName: "Carson Darrin",
            policyNumber: "Policy0123",
            Date: "01 JAN 2024",
            ProductDescription: "Motor Comprensive",
            Status: "Processing",
            Actions: <SvgArrow />,
        },
        {
            id: "2",
            claimNumber: "CL002",
            ClientName: "Carson Darrin",
            policyNumber: "Policy0124",
            Date: "01 JAN 2024",
            ProductDescription: "Motor Comprensive",
            Status: "Processing",
            Actions: <SvgArrow />,
        },
    ],
    claimSeachData: []
}

const claimReducers = createSlice({
    name: "claims",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(claimListDatMiddleWare.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(claimListDatMiddleWare.fulfilled, (state, action) => {
            state.loading = false;
            state.claimsTabelList = action.payload;
        });
        builder.addCase(claimListDatMiddleWare.rejected, (state, action) => {
            state.loading = false;
            state.claimsTabelList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });


        builder.addCase(claimListSearchDataDatMiddleWare.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(claimListSearchDataDatMiddleWare.fulfilled, (state, action) => {
            state.loading = false;
            state.claimSeachData = action.payload;
        });
        builder.addCase(claimListSearchDataDatMiddleWare.rejected, (state, action) => {
            state.loading = false;
            state.claimSeachData = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
    }
})

export default claimReducers.reducer