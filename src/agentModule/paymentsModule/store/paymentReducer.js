import { createSlice } from "@reduxjs/toolkit";
import { getPaymentSearchDataMiddleWare, getpaymenttableMiddleware,postpaymentdataMiddleWare} from "./paymentMiddleware";

const initialState = {
    loading: false,
    error: "",
    paymenttabledata:[
      {
        id: 1,
        grosspremium: "355",
        clintid:"123",
        date:"13/12/12",
        name:"sindhu",
        subtitle:"policy no : 12345",
        status:"PAID"
      },
      {
        id: 2,
        grosspremium: "655",
        clintid:"456",
        date:"13/12/12",
        name:"ayesha",
        subtitle:"policy no : 12345",
        status:"PAID"
      },
      {
        id: 1,
        grosspremium: "677",
        clintid:"789",
        date:"13/12/12",
        name:"youraj",
        subtitle:"policy no : 12345",
        status:"PENDING"
      },
      {
        id: 2,
        grosspremium: "788",
        clintid:"912",
        date:"13/12/12",
        name:"pandiyan",
        subtitle:"policy no : 12345",
        status:"PENDING"
      },
      {
        id: 1,
        grosspremium: "888",
        clintid:"812",
        date:"13/12/12",
        name:"manoj",
        subtitle:"policy no : 888",
        status:"REVIEWING"
      },
      {
        id: 2,
        grosspremium: "988",
        clintid:"765",
        date:"13/12/12",
        name:"sudarshan",
        subtitle:"policy no : 988",
        status:"REVIEWING"
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