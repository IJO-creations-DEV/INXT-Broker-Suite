import { createSlice } from "@reduxjs/toolkit";
import { getQuoteSearchDataMiddleWare, getquotetableMiddleware} from "./quoteMiddleware";

const initialState = {
    loading: false,
    error: "",
    quotetabledata:[
      
     
        {
          id: "1",
          Company: "Alpha Insurance",
          QuoteID: "19292",
          PolicyType: "CV",
          Grosspremium: "0.000",
          Date: "01 JAN 2024",
          Status: "Processing",
        },
        {
          id: "2",
          Company: "Beta Insurance",
          QuoteID: "83746",
          PolicyType: "CV",
          Grosspremium: "1200.50",
          Date: "15 FEB 2024",
          Status: "Draft",
        },
        {
          id: "3",
          Company: "Gamma Insurance",
          QuoteID: "54928",
          PolicyType: "CV",
          Grosspremium: "750.00",
          Date: "05 MAR 2024",
          Status: "Draft",
        },
        {
          id: "4",
          Company: "Delta Insurance",
          QuoteID: "67381",
          PolicyType: "CV",
          Grosspremium: "1500.75",
          Date: "22 APR 2024",
          Status: "Processing",
        },
        {
          id: "5",
          Company: "Epsilon Insurance",
          QuoteID: "91827",
          PolicyType: "CV",
          Grosspremium: "3000.20",
          Date: "10 MAY 2024",
          Status: "Processing",
        },
        {
          id: "6",
          Company: "Zeta Insurance",
          QuoteID: "36472",
          PolicyType: "CV",
          Grosspremium: "0.000",
          Date: "18 JUN 2024",
          Status: "Draft",
        },
        {
          id: "7",
          Company: "Eta Insurance",
          QuoteID: "50293",
          PolicyType: "CV",
          Grosspremium: "850.30",
          Date: "07 JUL 2024",
          Status: "Processing",
        },
        {
          id: "8",
          Company: "Theta Insurance",
          QuoteID: "74625",
          PolicyType: "CV",
          Grosspremium: "1200.00",
          Date: "25 AUG 2024",
          Status: "Processing",
        },
        {
          id: "9",
          Company: "Iota Insurance",
          QuoteID: "15934",
          PolicyType: "CV",
          Grosspremium: "2000.50",
          Date: "14 SEP 2024",
          Status: "Processing",
        },
        {
          id: "10",
          Company: "Kappa Insurance",
          QuoteID: "80347",
          PolicyType: "CV",
          Grosspremium: "4000.10",
          Date: "03 OCT 2024",
          Status: "Draft",
        },
    
    ],
    quoteSearchList:[],
    
};

const quoteReducer = createSlice({
    name: "quoteReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

         //getquotetableMiddleware

    builder.addCase(getquotetableMiddleware.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(
        getquotetableMiddleware.fulfilled,
        (state, action) => {
          state.loading = false;
          state.quotetabledata = [action.payload]
        }
      );
      builder.addCase(
        getquotetableMiddleware.rejected,
        (state, action) => {
          state.loading = false;
          state.error = typeof action.payload === "string" ? action.payload : "";
        }
      );



      // getQuoteSearchDataMiddleWare

      builder.addCase(getQuoteSearchDataMiddleWare.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(getQuoteSearchDataMiddleWare.fulfilled, (state, action) => {
        state.loading = false;
        state.quoteSearchList = action.payload;
      });
      builder.addCase(getQuoteSearchDataMiddleWare.rejected, (state, action) => {
        state.loading = false;
  
        state.quoteSearchList = [];
        state.error = typeof action.payload === "string" ? action.payload : "";
      });
      
    },
});

export default quoteReducer.reducer;