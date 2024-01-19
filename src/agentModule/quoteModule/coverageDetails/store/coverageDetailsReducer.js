import { createSlice } from "@reduxjs/toolkit";
import { postcoverageDetailsMiddleware } from "./coverageDetailsMiddleware";

const initialState = {
  loading: false,
  error: "",
  CoverageDetails: {},
};
const CoverageDetailsReducer = createSlice({
  name: "CoverageDetailsReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    //postPolicyDetailsMiddleware

    builder.addCase(postcoverageDetailsMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postcoverageDetailsMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.CoverageDetails = action.payload;
    });
    builder.addCase(postcoverageDetailsMiddleware.rejected, (state, action) => {
      state.loading = false;
      state.error = typeof action.payload === "string" ? action.payload : "";
    });
  },
});

export default CoverageDetailsReducer.reducer;
