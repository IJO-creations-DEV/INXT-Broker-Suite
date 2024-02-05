import { createSlice } from "@reduxjs/toolkit";
import { policyListDataMiddleWare, policyListSerachDataMiddleWare } from "./policyMiddleWare";
import SvgMotorTable from "../../../assets/agentIcon/SvgMotorTable";
import SvgDot from "../../../assets/icons/SvgDot";

const initialState = {
    loading: false,
    error: "",
    policyListData: [
        {
            id: "1",
            ClientId:"CL001",
            ClientName:"Carson Darrin",
            PolicyNumber: "Policy0123",
            PolicyIssued:"12/12/2024",
            PolicyExpiry:"12/12/2024",
            ProductDescription:"Motor Comprensive",
            GrossPremium: "7000.00",
            Payment: "Pending",
            Actions: <SvgDot />,
            Svg: <SvgMotorTable />,
          },
          {
            id: "2",
            ClientId:"CL002",
            ClientName:"Carson Darrin",
            PolicyNumber: "Policy0122",
            PolicyIssued:"12/12/2024",
            PolicyExpiry:"12/12/2024",
            ProductDescription:"Motor Comprensive",
            GrossPremium: "5000.00",
            Payment: "Completed",
            Actions: <SvgDot />,
            Svg: <SvgMotorTable />,
          },
    ],
    policyListSearchData: []
}

const policyReducers = createSlice({
    name: "policy",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(policyListDataMiddleWare.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(policyListDataMiddleWare.fulfilled, (state, action) => {
            state.loading = false;
            state.policyListData = action.payload;
        });
        builder.addCase(policyListDataMiddleWare.rejected, (state, action) => {
            state.loading = false;
            state.policyListData = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });


        builder.addCase(policyListSerachDataMiddleWare.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(policyListSerachDataMiddleWare.fulfilled, (state, action) => {
            state.loading = false;
            state.policyListSearchData = action.payload;
        });
        builder.addCase(policyListSerachDataMiddleWare.rejected, (state, action) => {
            state.loading = false;
            state.policyListSearchData = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
    }
})

export default policyReducers.reducer