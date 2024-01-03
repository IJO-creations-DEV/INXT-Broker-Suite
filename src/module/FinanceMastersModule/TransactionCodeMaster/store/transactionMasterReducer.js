import { createSlice } from "@reduxjs/toolkit";
import {
  getTransactioncodeListMiddleware,
  getTransactioncodeListsearch,
  postAddTransaction,
  postStatus,
  getTransactionCodeSetup,
  getUserGroupAccess,
  postAddTransactionCodeSetup,
  postAddUserGroupAccess,
  getTrascationcodeDetailsView,
  patchTrascationcodeDetailsEdit,
} from "./transactionCodeMasterMiddleware";
const initialState = {
  loading: false,
  error: "",
  TransactioncodeList: [],
  TransactioncodeListsearch: {},
  AddTransaction: {},
  Status: {},
  TransactionCodeSetup: [],
  UserGroupAccess: [],
  AddTransactionCodeSetup: {},
  AddUserGroupAccess: {},
  TrascationcodeDetailsView: {},
  TrascationcodeDetailsEdit: {},
};
const transactionCodeMasterReducer = createSlice({
  name: "transactioncodeList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //TransactioncodeList

    builder.addCase(getTransactioncodeListMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getTransactioncodeListMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.TransactioncodeList = action.payload;
      }
    );
    builder.addCase(
      getTransactioncodeListMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.TransactioncodeList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //TransactioncodeListsearch

    builder.addCase(getTransactioncodeListsearch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTransactioncodeListsearch.fulfilled, (state, action) => {
      state.loading = false;
      state.TransactioncodeListsearch = action.payload;
    });
    builder.addCase(getTransactioncodeListsearch.rejected, (state, action) => {
      state.loading = false;

      state.TransactioncodeListsearch = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //Status

    builder.addCase(postStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.Status = action.payload;
    });
    builder.addCase(postStatus.rejected, (state, action) => {
      state.loading = false;

      state.Status = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //AddTransaction

    builder.addCase(postAddTransaction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postAddTransaction.fulfilled, (state, action) => {
      state.loading = false;
      state.AddTransaction = action.payload;
    });
    builder.addCase(postAddTransaction.rejected, (state, action) => {
      state.loading = false;

      state.AddTransaction = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //TransactionCodeSetup

    builder.addCase(getTransactionCodeSetup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTransactionCodeSetup.fulfilled, (state, action) => {
      state.loading = false;
      state.TransactionCodeSetup = action.payload;
    });
    builder.addCase(getTransactionCodeSetup.rejected, (state, action) => {
      state.loading = false;

      state.TransactionCodeSetup = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    // UserGroupAccess

    builder.addCase(getUserGroupAccess.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserGroupAccess.fulfilled, (state, action) => {
      state.loading = false;
      state.UserGroupAccess = action.payload;
    });
    builder.addCase(getUserGroupAccess.rejected, (state, action) => {
      state.loading = false;

      state.UserGroupAccess = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //AddTransactionCodeSetup

    builder.addCase(postAddTransactionCodeSetup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postAddTransactionCodeSetup.fulfilled, (state, action) => {
      state.loading = false;
      state.AddTransactionCodeSetup = action.payload;
    });
    builder.addCase(postAddTransactionCodeSetup.rejected, (state, action) => {
      state.loading = false;

      state.AddTransactionCodeSetup = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //postAddUserGroupAccess

    builder.addCase(postAddUserGroupAccess.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postAddUserGroupAccess.fulfilled, (state, action) => {
      state.loading = false;
      state.AddUserGroupAccess = action.payload;
    });
    builder.addCase(postAddUserGroupAccess.rejected, (state, action) => {
      state.loading = false;

      state.AddUserGroupAccess = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //TrascationcodeDetailsView

    builder.addCase(getTrascationcodeDetailsView.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTrascationcodeDetailsView.fulfilled, (state, action) => {
      state.loading = false;
      state.TrascationcodeDetailsView = action.payload;
    });
    builder.addCase(getTrascationcodeDetailsView.rejected, (state, action) => {
      state.loading = false;

      state.TrascationcodeDetailsView = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //TrascationcodeDetailsEdit

    builder.addCase(patchTrascationcodeDetailsEdit.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchTrascationcodeDetailsEdit.fulfilled,
      (state, action) => {
        state.loading = false;
        state.TrascationcodeDetailsEdit = action.payload;
      }
    );
    builder.addCase(
      patchTrascationcodeDetailsEdit.rejected,
      (state, action) => {
        state.loading = false;

        state.TrascationcodeDetailsEdit = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
  },
});

export default transactionCodeMasterReducer.reducer;
