import { createSlice } from "@reduxjs/toolkit";
import { postSettlementClaimMiddleware} from "./leadMiddleware";

const initialState = {
    loading: false,
    error: "",
    createleaddata:{},
    leadtabledata:[],
    LeadEditdata:{}
};
const leadReducer = createSlice({
    name: "claimReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

     //postCreateleadMiddleware

    builder.addCase(postSettlementClaimMiddleware.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(
        postCreateleadMiddleware.fulfilled,
        (state, action) => {
          state.loading = false;
          state.createleaddata = action.payload
          
        }
      );
      builder.addCase(
        postCreateleadMiddleware.rejected,
        (state, action) => {
          state.loading = false;
          state.error = typeof action.payload === "string" ? action.payload : "";
        }
      );



    

    },
});

export default leadReducer.reducer;
