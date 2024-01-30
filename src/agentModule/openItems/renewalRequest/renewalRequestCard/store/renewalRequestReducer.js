import { createSlice } from "@reduxjs/toolkit";
import { getrenewalrequestSearchDataMiddleWare, getrenewalrequesttableMiddleware} from "./renewalRequestMiddleware";

const initialState = {
    loading: false,
    error: "",
    renewalrequesttabledata: [
      {
        Name: "John Doe",
        ClientId: "012345",
        PolicyNumber: "012345",
        PolicyType:"Motor",
        Date:"01 JAN 2024",
        Actions: "127332",
      },
      {
        Name: "Jane Smith",
        ClientId: "167890",
        PolicyNumber: "012345",
        PolicyType:"Travel",
        Date:"01 JAN 2024",
        Actions: "1272721",
      },
      {
        Name: "Bob Johnson",
        ClientId: "254321",
        PolicyNumber: "2024 JAN 10",
        
        PolicyType:"Motor",
        Date:"01 JAN 2024",
        Actions: "1270002",
      },
      {
        Name: "Alice Williams",
        ClientId: "398765",
        PolicyNumber: "2024 JAN 05",
        
        PolicyType:"Travel",
        Date:"01 JAN 2024",
        Actions: "120002",
      },
      {
        Name: "Mike Davis",
        ClientId: "423456",
        PolicyNumber: "2024 JAN 18",
        
        PolicyType:"Motor",
        Date:"01 JAN 2024",
        Actions: "111172",
      },
      {
        Name: "Sara Miller",
        ClientId: "578901",
        PolicyNumber: "2024 JAN 01",
        Category: "Individual",
        PolicyType:"Motor",
        Date:"01 JAN 2024",
        Actions: "12000",
      },
      {
        Name: "Chris Brown",
        ClientId: "9987634",
        PolicyNumber: "2024 JAN 12",
       
        PolicyType:"Motor",
        Date:"01 JAN 2024",
        Actions: "1221112",
      },
      {
        Name: "Emily Taylor",
        ClientId: "012345",
        PolicyNumber: "2024 JAN 28",
        Category: "Individual",
        PolicyType:"Motor",
        Date:"01 JAN 2024",
        Actions: "12002",
      },
      {
        Name: "David Wilson",
        ClientId: "53628782",
        PolicyNumber: "2024-08-03",
        Category: "Individual",
        PolicyType:"Travel",
        Date:"01 JAN 2024",
        Actions: "12233",
      },
      {
        Name: "Grace Anderson",
        ClientId: "287654",
        PolicyNumber: "2024-07-20",
        
        PolicyType:"Motor",
        Date:"01 JAN 2024",
        Actions: "127272",
      },
    ],
    renewalrequestSearchList:[],
    
};

const expiringReducer = createSlice({
    name: "expiringReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

         //getrenewalrequesttableMiddleware

    builder.addCase(getrenewalrequesttableMiddleware.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(
        getrenewalrequesttableMiddleware.fulfilled,
        (state, action) => {
          state.loading = false;
          state.renewalrequesttabledata = [action.payload]
        }
      );
      builder.addCase(
        getrenewalrequesttableMiddleware.rejected,
        (state, action) => {
          state.loading = false;
          state.error = typeof action.payload === "string" ? action.payload : "";
        }
      );



      // getrenewalrequestSearchDataMiddleWare

      builder.addCase(getrenewalrequestSearchDataMiddleWare.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(getrenewalrequestSearchDataMiddleWare.fulfilled, (state, action) => {
        state.loading = false;
        state.renewalrequestSearchList = action.payload;
      });
      builder.addCase(getrenewalrequestSearchDataMiddleWare.rejected, (state, action) => {
        state.loading = false;
  
        state.renewalrequestSearchList = [];
        state.error = typeof action.payload === "string" ? action.payload : "";
      });
      
    },
});

export default expiringReducer.reducer;