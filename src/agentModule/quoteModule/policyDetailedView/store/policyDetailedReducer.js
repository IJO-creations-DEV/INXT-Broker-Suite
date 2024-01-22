import { createSlice } from "@reduxjs/toolkit";
import { getpolicyDetailedMiddleware } from "./policyDetailedMiddleware";

const initialState = {
  loading: false,
  error: "",
  policydetailedlist: { PolicyNumber: "1234",
  Production:"20/01/2024",
  Inception: "19/01/2024",
  IssueDate: "2/01/2024",
  Expiry: "22/01/2024",
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
