import { createSlice } from "@reduxjs/toolkit";
import { getExpiringSearchDataMiddleWare, getexpiringtableMiddleware} from "./expiringMiddleware";

const initialState = {
    loading: false,
    error: "",
    expiringtabledata: [
      {
        AssuredName: "John Doe",
        PolicyNumber: "P12345",
        ExpiryDate: "2025 JAN 15",
        policyIssued:"2025 JAN 15",
        gross:"1000",
        Expiry: "30 Days",
        Actions: "127332",
      },
      {
        AssuredName: "Jane Smith",
        PolicyNumber: "P67890",
        ExpiryDate: "2025 JAN 22",
        policyIssued:"2025 JAN 15",
        gross:"1000",
        Expiry: "Expired",
        Actions: "1272721",
      },
      {
        AssuredName: "Bob Johnson",
        PolicyNumber: "P54321",
        ExpiryDate: "2025 JAN 10",
        policyIssued:"2025 JAN 15",
        gross:"1000",
        Expiry: "45 Days",
        Actions: "1270002",
      },
      {
        AssuredName: "Alice Williams",
        PolicyNumber: "P98765",
        ExpiryDate: "2025 JAN 05",
        policyIssued:"2025 JAN 15",
        gross:"1000",
        Expiry: "10 Days",
        Actions: "120002",
      },
      {
        AssuredName: "Mike Davis",
        PolicyNumber: "P23456",
        ExpiryDate: "2025 JAN 18",
        policyIssued:"2025 JAN 15",
        gross:"1000",
        Expiry: "25 Days",
        Actions: "111172",
      },
      {
        AssuredName: "Sara Miller",
        PolicyNumber: "P78901",
        ExpiryDate: "2025 JAN 01",
        policyIssued:"2025 JAN 15",
        Expiry: "20 Days",
        Actions: "12000",
      },
      {
        AssuredName: "Chris Brown",
        PolicyNumber: "P65432",
        ExpiryDate: "2025 JAN 12",
        policyIssued:"2025 JAN 15",
        gross:"1000",
        Expiry: "35 Days",
        Actions: "1221112",
      },
      {
        AssuredName: "Emily Taylor",
        PolicyNumber: "P12398",
        ExpiryDate: "2025 JAN 28",
        policyIssued:"2025 JAN 15",
        gross:"1000",
        Expiry: "28 Days",
        Actions: "12002",
      },
      {
        AssuredName: "David Wilson",
        PolicyNumber: "P56789",
        ExpiryDate: "2025-08-03",
        policyIssued:"2025 JAN 15",
        gross:"1000",
        Expiry: "40 Days",
        Actions: "12233",
      },
      {
        AssuredName: "Grace Anderson",
        PolicyNumber: "P87654",
        ExpiryDate: "2025-07-20",
        policyIssued:"2025 JAN 15",
        gross:"1000",
        Expiry: "12 Days",
        Actions: "127272",
      },
    ],
    expiringSearchList:[],
    
};

const expiringReducer = createSlice({
    name: "expiringReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

         //getexpiringtableMiddleware

    builder.addCase(getexpiringtableMiddleware.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(
        getexpiringtableMiddleware.fulfilled,
        (state, action) => {
          state.loading = false;
          state.expiringtabledata = [action.payload]
        }
      );
      builder.addCase(
        getexpiringtableMiddleware.rejected,
        (state, action) => {
          state.loading = false;
          state.error = typeof action.payload === "string" ? action.payload : "";
        }
      );



      // getExpiringSearchDataMiddleWare

      builder.addCase(getExpiringSearchDataMiddleWare.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(getExpiringSearchDataMiddleWare.fulfilled, (state, action) => {
        state.loading = false;
        state.expiringSearchList = action.payload;
      });
      builder.addCase(getExpiringSearchDataMiddleWare.rejected, (state, action) => {
        state.loading = false;
  
        state.expiringSearchList = [];
        state.error = typeof action.payload === "string" ? action.payload : "";
      });
      
    },
});

export default expiringReducer.reducer;