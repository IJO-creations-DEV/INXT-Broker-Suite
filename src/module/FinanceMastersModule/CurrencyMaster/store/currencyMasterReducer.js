import { createSlice } from "@reduxjs/toolkit";
import {
    getCurrencyList,
    getCurrencySearchList,
    postCurrencyStatus,
    postAddCurrency,
    patchCurrencyDetailEdit,
    getCurrencyDetailEdit,
    getCurrencyDetailView
} from "./currencyMasterMiddlewar";
const initialState = {
  loading: false,
  error: "",
  CurrencyList: [
    {
      "id": 1,
      "Currencycode": "IND",
      "ISOcode": "ISO-1",
      "CurrencyFormat": "RUPES",
      "SmallestUnit": "RUPES",
      "UnitDescription": "UNI-01",
      "CurrencyName": "Rupes"
    },
    {
      "id": 2,
      "Currencycode": "USD",
      "ISOcode": "ISO-2",
      "CurrencyFormat": "DOLLARS",
      "SmallestUnit": "CENTS",
      "UnitDescription": "CENT-02",
      "CurrencyName": "United States Dollar"
      }
      ,
      {
      "id": 3,
      "Currencycode": "EUR",
      "ISOcode": "ISO-3",
      "CurrencyFormat": "EUROS",
      "SmallestUnit": "CENTIMES",
      "UnitDescription": "CENT-03",
      "CurrencyName": "Euro"
      }
      ,
      {
      "id": 4,
      "Currencycode": "GBP",
      "ISOcode": "ISO-4",
      "CurrencyFormat": "POUNDS",
      "SmallestUnit": "PENCE",
      "UnitDescription": "PENNY",
      "CurrencyName": "British Pound Sterling"
      }
      ,
      {
      "id": 5,
      "Currencycode": "JPY",
      "ISOcode": "ISO-5",
      "CurrencyFormat": "YEN",
      "SmallestUnit": "SEN",
      "UnitDescription": "YEN-01",
      "CurrencyName": "Japanese Yen"
      }
      ,
      {
      "id": 6,
      "Currencycode": "AUD",
      "ISOcode": "ISO-6",
      "CurrencyFormat": "AUSTRALIAN DOLLARS",
      "SmallestUnit": "CENTS",
      "UnitDescription": "AUSSIE CENTS",
      "CurrencyName": "Australian Dollar"
      }
      ,
      {
      "id": 7,
      "Currencycode": "CAD",
      "ISOcode": "ISO-7",
      "CurrencyFormat": "CANADIAN DOLLARS",
      "SmallestUnit": "CENTS",
      "UnitDescription": "CANADIAN CENTS",
      "CurrencyName": "Canadian Dollar"
      }
      ,
      {
      "id": 8,
      "Currencycode": "CHF",
      "ISOcode": "ISO-8",
      "CurrencyFormat": "SWISS FRANCS",
      "SmallestUnit": "RAPPEN",
      "UnitDescription": "RAP",
      "CurrencyName": "Swiss Franc"
      }
      ,
      {
      "id": 9,
      "Currencycode": "CNY",
      "ISOcode": "ISO-9",
      "CurrencyFormat": "YUAN",
      "SmallestUnit": "FEN",
      "UnitDescription": "YUAN-01",
      "CurrencyName": "Chinese Yuan"
      }
      ,
      {
      "id": 10,
      "Currencycode": "PHP",
      "ISOcode": "ISO-10",
      "CurrencyFormat": "RUPEES",
      "SmallestUnit": "PAISE",
      "UnitDescription": "PAISA",
      "CurrencyName": "Indian Rupee"
      }
  ],
  CurrencySearchList:[],
  CurrencyStatus:{},
  AddCurrency:{},
  CurrencyDetailEdit:{},
  getCurrecyDetailEdit:{},
  CurrencyDetailView:{}
};
const currencyMasterReducer = createSlice({
  name: "currencyMaster",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    //CurrencyList

    builder.addCase(getCurrencyList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
        getCurrencyList.fulfilled,
      (state, action) => {
        state.loading = false;
        state.CurrencyList = action.payload;
      }
    );
    builder.addCase(
        getCurrencyList.rejected,
      (state, action) => {
        state.loading = false;

        state.CurrencyList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //CurrencySearchList

    builder.addCase(getCurrencySearchList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getCurrencySearchList.fulfilled,
      (state, action) => {
        state.loading = false;
        state.CurrencySearchList = action.payload;
      }
    );
    builder.addCase(
      getCurrencySearchList.rejected,
      (state, action) => {
        state.loading = false;

        state.CurrencySearchList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //CurrencyStatus
    
    builder.addCase(postCurrencyStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postCurrencyStatus.fulfilled,
      (state, action) => {
        state.loading = false;
        state.CurrencyStatus = action.payload;
      }
    );
    builder.addCase(
      postCurrencyStatus.rejected,
      (state, action) => {
        state.loading = false;

        state.CurrencyStatus = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //postAddCurrency

    builder.addCase(postAddCurrency.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postAddCurrency.fulfilled,
      (state, action) => {
        state.loading = false;
        // state.AddCurrency = action.payload;
        state.CurrencyList = [...state.CurrencyList, action.payload];
      }
    );
    builder.addCase(
      postAddCurrency.rejected,
      (state, action) => {
        state.loading = false;

        state.AddCurrency = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //CurrencyDetailEdit

    builder.addCase(patchCurrencyDetailEdit.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchCurrencyDetailEdit.fulfilled,
      (state, action) => {
        state.loading = false;
        const updatedIndex = state.CurrencyList.findIndex(
          (item) => item.id === action.payload.id
        );
        if (updatedIndex !== -1) {
          const updatedCurrencyList = [...state.CurrencyList];
          updatedCurrencyList[updatedIndex] = action.payload;
          state.CurrencyList = updatedCurrencyList; 
        } else {
          state.CurrencyList = [...state.CurrencyList, action.payload];
        }
      }
    );
    
    builder.addCase(
      patchCurrencyDetailEdit.rejected,
      (state, action) => {
        state.loading = false;

        state.CurrencyDetailEdit = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //getCurrecyDetailEdit
    builder.addCase(getCurrencyDetailEdit.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getCurrencyDetailEdit.fulfilled,
      (state, action) => {
        state.loading = false;
        state.getCurrecyDetailEdit = action.payload;
      }
    );
    builder.addCase(
      getCurrencyDetailEdit.rejected,
      (state, action) => {
        state.loading = false;

        state.getCurrecyDetailEdit = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
    //CurrencyDetailView

    builder.addCase(getCurrencyDetailView.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getCurrencyDetailView.fulfilled,
      (state, action) => {
        state.loading = false;
        state.CurrencyDetailView = action.payload;
      }
    );
    builder.addCase(
      getCurrencyDetailView.rejected,
      (state, action) => {
        state.loading = false;

        state.CurrencyDetailView = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
},
});

export default currencyMasterReducer.reducer;