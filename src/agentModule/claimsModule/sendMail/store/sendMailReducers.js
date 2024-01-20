import { createSlice } from "@reduxjs/toolkit";

import { getClaimDetailsViewData, postClaimDetailsData } from "./claimDetailsMiddleWare";

const initialState = {
    loading: false,
    error: "",
    sendData:{}

};

const sendMailReducers = createSlice({
    name: "sendMailReducers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postSendData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            postSendData.fulfilled,
            (state, action) => {
                state.loading = false;
                state.sendData = action.payload
            }
        );
        builder.addCase(
            postSendData.rejected,
            (state, action) => {
                state.loading = false;
                state.sendData = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );
    },
});

export default sendMailReducers.reducer;