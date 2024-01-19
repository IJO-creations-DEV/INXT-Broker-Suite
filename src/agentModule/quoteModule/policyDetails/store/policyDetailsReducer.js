import { createSlice } from "@reduxjs/toolkit";
import { postPolicyDetailsMiddleware } from "./policyDetailsMiddleware";

const initialState = {
  loading: false,
  error: "",
  PolicyDetails: {},
};
const PolicyDetailsReducer = createSlice({
  name: "PolicyDetailsReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    //postPolicyDetailsMiddleware

    builder.addCase(postPolicyDetailsMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postPolicyDetailsMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.PolicyDetails = action.payload;
    });
    builder.addCase(postPolicyDetailsMiddleware.rejected, (state, action) => {
      state.loading = false;
      state.error = typeof action.payload === "string" ? action.payload : "";
    });
  },
});

export default PolicyDetailsReducer.reducer;
