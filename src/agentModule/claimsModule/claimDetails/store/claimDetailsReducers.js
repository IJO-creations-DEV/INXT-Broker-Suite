import { createSlice } from "@reduxjs/toolkit";

import { getClaimDetailsViewData, postClaimDetailsData } from "./claimDetailsMiddleWare";

const initialState = {
    loading: false,
    error: "",
    claimDetailsViewData:
        {
            id: 1,
            InsuranceCompanyName:"bajaj",
            policyNumber: "PN355",
            PolicyHolderName:"ayesha",
            HouseNo: "24",
            Barangay:"ss",
            CountryName: "Philippines",
            Province: "karnataka",
            CityName: "davangere",
            ZipCode: "577004"
           
        },
        claimThirdParty:{}

};

const claimDetailsReducers = createSlice({
    name: "claimDetailsReducers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getClaimDetailsViewData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getClaimDetailsViewData.fulfilled,
            (state, action) => {
                state.loading = false;
                state.claimDetailsViewData = action.payload
            }
        );
        builder.addCase(
            getClaimDetailsViewData.rejected,
            (state, action) => {
                state.loading = false;
                state.claimDetailsViewData = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );
        builder.addCase(postClaimDetailsData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            postClaimDetailsData.fulfilled,
            (state, action) => {
                state.loading = false;
                state.claimThirdParty = action.payload
            }
        );
        builder.addCase(
            postClaimDetailsData.rejected,
            (state, action) => {
                state.loading = false;
                state.claimThirdParty = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );
    },
});

export default claimDetailsReducers.reducer;