import { createSlice } from "@reduxjs/toolkit";
import { getPaymentSearchDataMiddleWare, getpaymenttableMiddleware,postpaymentdataMiddleWare} from "./paymentMiddleware";

const initialState = {
    loading: false,
    error: "",
    paymenttabledata:[
      {
        id: 1,
        type:"Policy",
        name:"CarsonDarrin",
        clintid:"123",
        policyNo:"999",
        grosspremium: "355",
        policyIssued:"13/12/12",
        policyExpird:"13/12/12",
        status:"PAID"
      },
      {
        id: 2,
        type:"Renewal Policy",
        name:"Carson Darrin",
        clintid:"456",
        policyNo:"98456",
        grosspremium: "655",
        policyIssued:"13/12/12",
        policyExpird:"13/12/12",
        status:"PAID"
      },
      {
        id: 3,
        type:"Renewal Policy",
        name:"Carson Darrin",
        clintid:"566",
        policyNo:"123456",
        grosspremium: "655",
        policyIssued:"13/12/12",
        policyExpird:"13/12/12",
        status:"PAID"
      },
      {
        id: 4,
        type:"Renewal Policy",
        name:"Carson Darrin",
        clintid:"786",
        policyNo:"67856",
        grosspremium: "655",
        policyIssued:"13/12/12",
        policyExpird:"13/12/12",
        status:"PAID"
      },

    ],
    paymentSearchList:[],
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
          state.paymenttabledata = [action.payload]
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

      builder.addCase(getPaymentSearchDataMiddleWare.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(getPaymentSearchDataMiddleWare.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentSearchList = action.payload;
      });
      builder.addCase(getPaymentSearchDataMiddleWare.rejected, (state, action) => {
        state.loading = false;
  
        state.paymentSearchList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      });
      
    },
});

export default paymentReducer.reducer;