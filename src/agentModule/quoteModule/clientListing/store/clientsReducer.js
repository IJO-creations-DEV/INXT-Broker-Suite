import { createSlice } from "@reduxjs/toolkit";
import { getClientEditMiddleWare, getClientTableMiddleware, getClientTableSearchListMiddleware, getPaymentSearchDataMiddleWare, patchClientEditMiddleWare } from "./clientsMiddleware";


const initialState = {
    loading: false,
    error: "",
    clientListTable: [
        {
            id: "1",
            CompanyName: "Zealye",
            TaxNumber: "123",
            FirstName: "John Clark",
            LastName: "john",
            PreferredName: "tommy",
            EmailID: "Daniel@gmail.com",
            ContactNumber: "9736355562",
            HouseNo: "21",
            Barangay: "Philiphines",
            Country: "Philiphines",
            Province: "Philiphines",
            City: "Philiphines",
            ZIPCode: "91",
            DateofBirth: "2024-01-26",
            category: "Individual",
            gender: "Male",
            Quotes: "01",
            LeadID: "877",
            type: "motor",
            ProductDescription: "Motor Comprensive",
            // Svg: <SvgMotorTable />,
        },
        {
            id: "2",
            CompanyName: "Zealye",
            TaxNumber: "123",
            FirstName: "Sophie Clark",
            LastName: "john",
            PreferredName: "tommy",
            EmailID: "Daniel@gmail.com",
            ContactNumber: "9736355562",
            HouseNo: "21",
            Barangay: "Philiphines",
            Country: "Philiphines",
            Province: "Philiphines",
            City: "Philiphines",
            ZIPCode: "91",
            DateofBirth: "2024-01-26",
            category: "Company",
            gender: "Male",
            Quotes: "01",
            LeadID: "877",
            type: "motor",
            ProductDescription: "Motor Comprensive",
            // Svg: <SvgTravlesTable />,
        },
      

    ],
    leadtabledata: [],
    LeadEditdata: {},
    ClientTableSearchList: [],
    getClientEditData: {}
};
const clientReducer = createSlice({
    name: "clientReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        //postCreateleadMiddleware

        builder.addCase(getClientTableMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getClientTableMiddleware.fulfilled,
            (state, action) => {
                state.loading = false;
                state.clientListTable = action.payload

            }
        );
        builder.addCase(
            getClientTableMiddleware.rejected,
            (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );

        builder.addCase(getClientTableSearchListMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getClientTableSearchListMiddleware.fulfilled,
            (state, action) => {
                state.loading = false;
                state.ClientTableSearchList = action.payload

            }
        );
        builder.addCase(
            getClientTableSearchListMiddleware.rejected,
            (state, action) => {
                state.loading = false;
                state.ClientTableSearchList = {};
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


        builder.addCase(getClientEditMiddleWare.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getClientEditMiddleWare.fulfilled, (state, action) => {
            state.loading = false;
            state.getClientEditData = action.payload;
        });
        builder.addCase(getClientEditMiddleWare.rejected, (state, action) => {
            state.loading = false;

            state.getClientEditData = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

        builder.addCase(patchClientEditMiddleWare.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(
            patchClientEditMiddleWare.fulfilled,
            (state, action) => {
              state.loading = false;
              const updatedIndex = state.clientListTable.findIndex(
                (item) => item.id === action.payload.id
              );
              if (updatedIndex !== -1) {
                const updatedCurrencyList = [...state.clientListTable];
                updatedCurrencyList[updatedIndex] = action.payload;
                state.clientListTable = updatedCurrencyList;
              } else {
                state.clientListTable = [...state.clientListTable, action.payload];
              }
            }
          );
          builder.addCase(
            patchClientEditMiddleWare.rejected,
            (state, action) => {
              state.loading = false;
              state.error = typeof action.payload === "string" ? action.payload : "";
            }
          );
    }


});

export default clientReducer.reducer