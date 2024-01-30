import { createSlice } from "@reduxjs/toolkit";
import { getQuotependingSearchDataMiddleWare, getquotependingtableMiddleware} from "./quotePendingMiddleware";

const initialState = {
    loading: false,
    error: "",
    quotependingtabledata: [
      {
        Name: "John Doe",
        LeadId: "012345",
        QuoteId: "012345",
        Category: "Individual",
        PolicyType:"Motor",
        Date:"01 JAN 2024",
        Actions: "127332",
      },
      {
        Name: "Jane Smith",
        LeadId: "167890",
        QuoteId: "012345",
        Category: "Company",
        PolicyType:"Travel",
        Date:"01 JAN 2024",
        Actions: "1272721",
      },
      {
        Name: "Bob Johnson",
        LeadId: "254321",
        QuoteId: "2024 JAN 10",
        Category: "Individual",
        PolicyType:"Motor",
        Date:"01 JAN 2024",
        Actions: "1270002",
      },
      {
        Name: "Alice Williams",
        LeadId: "398765",
        QuoteId: "2024 JAN 05",
        Category: "Company",
        PolicyType:"Travel",
        Date:"01 JAN 2024",
        Actions: "120002",
      },
      {
        Name: "Mike Davis",
        LeadId: "423456",
        QuoteId: "2024 JAN 18",
        Category: "Company",
        PolicyType:"Motor",
        Date:"01 JAN 2024",
        Actions: "111172",
      },
      {
        Name: "Sara Miller",
        LeadId: "578901",
        QuoteId: "2024 JAN 01",
        Category: "Individual",
        PolicyType:"Motor",
        Date:"01 JAN 2024",
        Actions: "12000",
      },
      {
        Name: "Chris Brown",
        LeadId: "9987634",
        QuoteId: "2024 JAN 12",
        Category: "Company",
        PolicyType:"Motor",
        Date:"01 JAN 2024",
        Actions: "1221112",
      },
      {
        Name: "Emily Taylor",
        LeadId: "012345",
        QuoteId: "2024 JAN 28",
        Category: "Individual",
        PolicyType:"Motor",
        Date:"01 JAN 2024",
        Actions: "12002",
      },
      {
        Name: "David Wilson",
        LeadId: "53628782",
        QuoteId: "2024-08-03",
        Category: "Individual",
        PolicyType:"Travel",
        Date:"01 JAN 2024",
        Actions: "12233",
      },
      {
        Name: "Grace Anderson",
        LeadId: "287654",
        QuoteId: "2024-07-20",
        Category: "Company",
        PolicyType:"Motor",
        Date:"01 JAN 2024",
        Actions: "127272",
      },
    ],
    quotependingSearchList:[],
    
};

const expiringReducer = createSlice({
    name: "expiringReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

         //getquotependingtableMiddleware

    builder.addCase(getquotependingtableMiddleware.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(
        getquotependingtableMiddleware.fulfilled,
        (state, action) => {
          state.loading = false;
          state.quotependingtabledata = [action.payload]
        }
      );
      builder.addCase(
        getquotependingtableMiddleware.rejected,
        (state, action) => {
          state.loading = false;
          state.error = typeof action.payload === "string" ? action.payload : "";
        }
      );



      // getQuotependingSearchDataMiddleWare

      builder.addCase(getQuotependingSearchDataMiddleWare.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(getQuotependingSearchDataMiddleWare.fulfilled, (state, action) => {
        state.loading = false;
        state.quotependingSearchList = action.payload;
      });
      builder.addCase(getQuotependingSearchDataMiddleWare.rejected, (state, action) => {
        state.loading = false;
  
        state.quotependingSearchList = [];
        state.error = typeof action.payload === "string" ? action.payload : "";
      });
      
    },
});

export default expiringReducer.reducer;