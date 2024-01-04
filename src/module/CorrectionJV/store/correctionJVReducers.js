import { createSlice } from "@reduxjs/toolkit";
import { getReversalJVView, getReversalTabelData, postReversalJVData } from "./reversalMiddleWare";
import { getCorrectionJVTabelData, getCorrectionJVView, patchCorrectionJVEdit, postCorrectionJVData } from "./correctionJVMiddleWare";

const initialState = {
    loading: false,
    error: "",
    addCorrectionJV: {},
    correctionJVView: {},
    correctionEdit:{},
    correctionJVList: [],
};
const correctioneversalJVReducers = createSlice({
    name: "reversalJV",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCorrectionJVTabelData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCorrectionJVTabelData.fulfilled, (state, action) => {
            state.loading = false;
            state.correctionJVList = action.payload.data;
        });
        builder.addCase(getCorrectionJVTabelData.rejected, (state, action) => {
            state.loading = false;

            state.correctionJVList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

        //post

        builder.addCase(postCorrectionJVData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(postCorrectionJVData.fulfilled, (state, action) => {
            state.loading = false;
            state.addCorrectionJV = action.payload.data;
        });
        builder.addCase(postCorrectionJVData.rejected, (state, action) => {
            state.loading = false;

            state.addCorrectionJV = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
        //view
        builder.addCase(getCorrectionJVView.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCorrectionJVView.fulfilled, (state, action) => {
            state.loading = false;
            state.correctionJVView = action.payload.data;
        });
        builder.addCase(getCorrectionJVView.rejected, (state, action) => {
            state.loading = false;

            state.correctionJVView = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

        
        builder.addCase(patchCorrectionJVEdit.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(patchCorrectionJVEdit.fulfilled, (state, action) => {
            state.loading = false;
            state.correctionEdit = action.payload.data;
        });
        builder.addCase(patchCorrectionJVEdit.rejected, (state, action) => {
            state.loading = false;

            state.correctionEdit = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
    },
});

export default correctioneversalJVReducers.reducer;
