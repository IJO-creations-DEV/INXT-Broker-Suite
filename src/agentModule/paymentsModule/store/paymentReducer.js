import { createSlice } from "@reduxjs/toolkit";
import { getpaymenttableMiddleware,postpaymentdataMiddleWare} from "./paymentMiddleware";

const initialState = {
    loading: false,
    error: "",
    paymenttabledata:[],
    postpaymentdata:{}
};

const paymentReducer = createSlice({
    name: "paymentReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

         //getpaymenttableMiddleware

    builder.addCase(getpaymenttableMiddleware.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(
        getpaymenttableMiddleware.fulfilled,
        (state, action) => {
          state.loading = false;
          state.paymenttabledata = action.payload
        }
      );
      builder.addCase(
        getpaymenttableMiddleware.rejected,
        (state, action) => {
          state.loading = false;
          state.error = typeof action.payload === "string" ? action.payload : "";
        }
      );



      //postpaymentdataMiddleWare

    builder.addCase(postpaymentdataMiddleWare.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(
        postpaymentdataMiddleWare.fulfilled,
        (state, action) => {
          state.loading = false;
          state.postpaymentdata = action.payload
        }
      );
      builder.addCase(
        postpaymentdataMiddleWare.rejected,
        (state, action) => {
          state.loading = false;
          state.error = typeof action.payload === "string" ? action.payload : "";
        }
      );
      
    },
});

export default paymentReducer.reducer;