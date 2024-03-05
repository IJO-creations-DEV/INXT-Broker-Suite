import { createSlice } from "@reduxjs/toolkit";
import { postPolicyDetailsMiddleware, postModleDetailsMiddleware, getModleDetailsMiddleware } from "./policyDetailsMiddleware";

const initialState = {
  loading: false,
  error: "",
  PolicyDetails: {},
  TableList: [
    //   {
    //   id: 1,
    //   ParticipantName: "Alpha insurance",
    //   SumInsuredcurrency: "Peso",
    //   Premiumcurrencys: "Peso",
    //   Sharepercentage: "50%",
    // },
  ]
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

    builder.addCase(getModleDetailsMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getModleDetailsMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.TableList = action.payload;
    });
    builder.addCase(getModleDetailsMiddleware.rejected, (state, action) => {
      state.loading = false;
      state.TableList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    builder.addCase(postModleDetailsMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postModleDetailsMiddleware.fulfilled, (state, action) => {
      console.log(action.payload, 'find action.payload')
      state.loading = false;
      state.TableList = [...state.TableList, action.payload];
    });
    builder.addCase(postModleDetailsMiddleware.rejected, (state, action) => {
      state.loading = false;
      //   state.paymentVocherList = state.paymentVocherList;
      state.error = typeof action.payload === "string" ? action.payload : "";
    });


  },
});

export default PolicyDetailsReducer.reducer;
