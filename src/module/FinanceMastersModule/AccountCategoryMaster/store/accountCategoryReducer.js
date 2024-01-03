import { createSlice } from "@reduxjs/toolkit";
import {
    getAccountCategoryList,
    getAccountCategorySearchList,
    postAccountCategoryStatus,
    getAddAccountCategory,
    patchAccountCategoryDetailEdit,
    getAccountCategoryDetailView
} from "./accountCategoryMeddleware";
const initialState = {
  loading: false,
  error: "",
  AccountCategoryList: [],
  AccountCategorySearchList:[],
  AccountCategoryStatus:{},
  AddAccountCategory:{},
  AccountCategoryDetailEdit:{},
  AccountCategoryDetailView:{}
};
const accountCategoryMasterReducer = createSlice({
  name: "accountCategoryMaster",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    //AccountCategoryList

    builder.addCase(getAccountCategoryList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
        getAccountCategoryList.fulfilled,
      (state, action) => {
        state.loading = false;
        state.AccountCategoryList = action.payload;
      }
    );
    builder.addCase(
        getAccountCategoryList.rejected,
      (state, action) => {
        state.loading = false;

        state.AccountCategoryList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //AccountCategorySearchList

    builder.addCase(getAccountCategorySearchList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAccountCategorySearchList.fulfilled,
      (state, action) => {
        state.loading = false;
        state.AccountCategorySearchList = action.payload;
      }
    );
    builder.addCase(
      getAccountCategorySearchList.rejected,
      (state, action) => {
        state.loading = false;

        state.AccountCategorySearchList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //AccountCategoryStatus
    
    builder.addCase(postAccountCategoryStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postAccountCategoryStatus.fulfilled,
      (state, action) => {
        state.loading = false;
        state.AccountCategoryStatus = action.payload;
      }
    );
    builder.addCase(
      postAccountCategoryStatus.rejected,
      (state, action) => {
        state.loading = false;

        state.AccountCategoryStatus = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //AddAccountCategory

    builder.addCase(getAddAccountCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAddAccountCategory.fulfilled,
      (state, action) => {
        state.loading = false;
        state.AddBank = action.payload;
      }
    );
    builder.addCase(
      getAddAccountCategory.rejected,
      (state, action) => {
        state.loading = false;

        state.AddAccountCategory = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //AccountCategoryDetailEdit

    builder.addCase(patchAccountCategoryDetailEdit.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchAccountCategoryDetailEdit.fulfilled,
      (state, action) => {
        state.loading = false;
        state.AccountCategoryDetailEdit = action.payload;
      }
    );
    builder.addCase(
      patchAccountCategoryDetailEdit.rejected,
      (state, action) => {
        state.loading = false;

        state.AccountCategoryDetailEdit = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //AccountCategoryDetailView

    builder.addCase(getAccountCategoryDetailView.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAccountCategoryDetailView.fulfilled,
      (state, action) => {
        state.loading = false;
        state.BankDetailView = action.payload;
      }
    );
    builder.addCase(
      getAccountCategoryDetailView.rejected,
      (state, action) => {
        state.loading = false;

        state.AccountCategoryDetailView = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
},
});

export default accountCategoryMasterReducer.reducer;