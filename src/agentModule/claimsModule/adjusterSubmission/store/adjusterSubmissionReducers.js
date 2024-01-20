import { createSlice } from "@reduxjs/toolkit";
import { postAdjusterSubmission } from "./adjusterSubmissionMiddleWare";

const initialState = {
    loading: false,
    error: "",
    adjusterSubmission:{}

};

const adjusterSubmissionReducers = createSlice({
    name: "claimDetailsReducers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      
        builder.addCase(postAdjusterSubmission.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            postAdjusterSubmission.fulfilled,
            (state, action) => {
                state.loading = false;
                state.adjusterSubmission = action.payload
            }
        );
        builder.addCase(
            postAdjusterSubmission.rejected,
            (state, action) => {
                state.loading = false;
                state.adjusterSubmission = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );
    },
});

export default adjusterSubmissionReducers.reducer;