import { createSlice } from "@reduxjs/toolkit";
import {
    getCurrencyList,
    getCurrencySearchList,
    postCurrencyStatus,
    getAddCurrency,
    patchCurrencyDetailEdit,
    getCurrencyDetailView
} from "./currencyMasterMiddlewar";
const initialState = {
  loading: false,
  error: "",
  CurrencyList: [],
  CurrencySearchList:[],
  CurrencyStatus:{},
  AddCurrency:{},
  CurrencyDetailEdit:{},
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

    //AddCurrency

    builder.addCase(getAddCurrency.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAddCurrency.fulfilled,
      (state, action) => {
        state.loading = false;
        state.AddCurrency = action.payload;
      }
    );
    builder.addCase(
      getAddCurrency.rejected,
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
        state.CurrencyDetailEdit = action.payload;
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