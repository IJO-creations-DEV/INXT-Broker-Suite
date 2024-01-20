import { createSlice } from "@reduxjs/toolkit";
import { getEndrosementViewData } from "./endrosementViewMiddleWare";

const initialState = {
    loading: false,
    error: "",
    endrosementViewData:
        {
            id: 1,
            policyNumber: "PN355",
            endrosementNumber: "EN123",
            production: "01/12/12",
            issuedDate: "10/12/12",
            expiry:"13/12/12",
            inception: "20/12/12",
           
        },

};

const endrosementReducers = createSlice({
    name: "endrosementReducers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEndrosementViewData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getEndrosementViewData.fulfilled,
            (state, action) => {
                state.loading = false;
                state.endrosementViewData = action.payload
            }
        );
        builder.addCase(
            getEndrosementViewData.rejected,
            (state, action) => {
                state.loading = false;
                state.endrosementViewData = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );
    },
});

export default endrosementReducers.reducer;