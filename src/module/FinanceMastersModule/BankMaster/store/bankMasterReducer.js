import { createSlice } from "@reduxjs/toolkit";
import {
    getBankList,
    getBankSearchList,
    postBankStatus,
    getAddBank,
    patchBankDetailEdit,
    getBankDetailView
} from "./bankMasterMiddleware";
const initialState = {
  loading: false,
  error: "",
  BankList: [],
  BankSearchList:[],
  BankStatus:{},
  AddBank:{},
  BankDetailEdit:{},
  BankDetailView:{}
};
const bankMasterReducer = createSlice({
  name: "bankMaster",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    //BankList

    builder.addCase(getBankList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
        getBankList.fulfilled,
      (state, action) => {
        state.loading = false;
        state.BankList = action.payload;
      }
    );
    builder.addCase(
        getBankList.rejected,
      (state, action) => {
        state.loading = false;

        state.BankList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //BankSearchList

    builder.addCase(getBankSearchList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getBankSearchList.fulfilled,
      (state, action) => {
        state.loading = false;
        state.BankSearchList = action.payload;
      }
    );
    builder.addCase(
      getBankSearchList.rejected,
      (state, action) => {
        state.loading = false;

        state.BankSearchList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //BankStatus
    
    builder.addCase(postBankStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postBankStatus.fulfilled,
      (state, action) => {
        state.loading = false;
        state.BankStatus = action.payload;
      }
    );
    builder.addCase(
      postBankStatus.rejected,
      (state, action) => {
        state.loading = false;

        state.BankStatus = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //AddBank

    builder.addCase(getAddBank.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAddBank.fulfilled,
      (state, action) => {
        state.loading = false;
        state.AddBank = action.payload;
      }
    );
    builder.addCase(
      getAddBank.rejected,
      (state, action) => {
        state.loading = false;

        state.AddBank = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //BankDetailEdit

    builder.addCase(patchBankDetailEdit.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchBankDetailEdit.fulfilled,
      (state, action) => {
        state.loading = false;
        state.BankDetailEdit = action.payload;
      }
    );
    builder.addCase(
      patchBankDetailEdit.rejected,
      (state, action) => {
        state.loading = false;

        state.BankDetailEdit = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //BankDetailView

    builder.addCase(getBankDetailView.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getBankDetailView.fulfilled,
      (state, action) => {
        state.loading = false;
        state.BankDetailView = action.payload;
      }
    );
    builder.addCase(
      getBankDetailView.rejected,
      (state, action) => {
        state.loading = false;

        state.BankDetailView = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
},
});

export default bankMasterReducer.reducer;