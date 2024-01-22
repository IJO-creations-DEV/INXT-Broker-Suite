import { createSlice } from "@reduxjs/toolkit";
import { getpolicyDetailedMiddleware } from "./policyDetailedMiddleware";

const initialState = {
  loading: false,
  error: "",
  policydetailedlist: { PolicyNumber: "1234",
  Production:"",
  Inception: "",
  IssueDate: "",
  Expiry: "",
}
};

const policyReducer = createSlice({
  name: "policyReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getpolicyDetailedMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getpolicyDetailedMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.policydetailedlist = [action.payload];
    });
    builder.addCase(getpolicyDetailedMiddleware.rejected, (state, action) => {
      state.loading = false;
      state.error = typeof action.payload === "string" ? action.payload : "";
    });
  },
});

export default policyReducer.reducer;
