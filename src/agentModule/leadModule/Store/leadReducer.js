import { createSlice } from "@reduxjs/toolkit";
import { postCreateleadMiddleware,patchLeadEditMiddleWare,getleadtableMiddleware,getPaymentSearchDataMiddleWare} from "./leadMiddleware";

const initialState = {
    loading: false,
    error: "",
    createleaddata:{},
    leadtabledata:[
     
        {
          id: "1",
          Name: "Sophie Clark",
          Category: "Individual",
          Date: "2024-01-26",
          Quotes: "01",
          LeadID: "123456",
          // Svg: <SvgHomeTable />,
          dateSortField:"11001"
        },
        {
          id: "2",
          Name: "John Smith",
          Category: "Individual",
          Date: "2024-02-10",
          Quotes: "02",
          LeadID: "126",
          // Svg: <SvgHomeTable />,
          dateSortField:"11002"
        },
        {
          id: "3",
          Name: "Emma Davis",
          Category: "Individual",
          Date: "2024-03-15",
          Quotes: "02",
          LeadID: "1456",
          // Svg: <SvgHomeTable />,
          dateSortField:"11003"
        },
        {
          id: "4",
          Name: "Michael Johnson",
          Category: "Company",
          Date: "2024-04-20",
          Quotes: "03",
          LeadID: "1236",
          // Svg: <SvgHomeTable />,
          dateSortField:"11004"
        },
        {
          id: "5",
          Name: "Olivia Turner",
          Category: "Individual",
          Date: "2024-05-25",
          Quotes: "04",
          LeadID: "1456",
          // Svg: <SvgHomeTable />,
          dateSortField:"11005"
        },
        {
          id: "6",
          Name: "David Rodriguez",
          Category: "Company",
          Date: "2024-06-30",
          Quotes: "05",
          LeadID: "123116",
          // Svg: <SvgHomeTable />,
          dateSortField:"11006"
        },
        {
          id: "7",
          Name: "Ava Williams",
          Category: "Individual",
          Date: "2024-07-05",
          Quotes: "06",
          LeadID: "123411",
          // Svg: <SvgHomeTable />,
          dateSortField:"11007"
        },
        {
          id: "8",
          Name: "Daniel Brown",
          Category: "Company",
          Date: "2024-08-10",
          Quotes: "01",
          LeadID: "1234000",
          // Svg: <SvgHomeTable />,
          dateSortField:"11008"
        },
        {
          id: "9",
          Name: "Sophia Carter",
          Category: "Individual",
          Date: "2024-09-15",
          Quotes: "02",
          LeadID: "1234555",
          // Svg: <SvgHomeTable />,
          dateSortField:"11009"
        },
        {
          id: "10",
          Name: "Ryan Walker",
          Category: "Company",
          Date: "2024-10-20",
          Quotes: "03",
          LeadID: "1234226",
          // Svg: <SvgHomeTable />,
          dateSortField:"11010"
        },
        
    
    ],
    LeadEditdata:{}
};
const leadReducer = createSlice({
    name: "leadReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

     //postCreateleadMiddleware

    builder.addCase(postCreateleadMiddleware.pending, (state) => {
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


      //getleadtableMiddleware

    builder.addCase(getleadtableMiddleware.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(
        getleadtableMiddleware.fulfilled,
        (state, action) => {
          state.loading = false;
          state.leadtabledata = action.payload
        }
      );
      builder.addCase(
        getleadtableMiddleware.rejected,
        (state, action) => {
          state.loading = false;
          state.error = typeof action.payload === "string" ? action.payload : "";
        }
      );

      //patchLeadEditMiddleWare

    builder.addCase(patchLeadEditMiddleWare.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(
        patchLeadEditMiddleWare.fulfilled,
        (state, action) => {
          state.loading = false;
          state.LeadEditdata =action.payload
        }
      );
      builder.addCase(
        patchLeadEditMiddleWare.rejected,
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

export default leadReducer.reducer;
