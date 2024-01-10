import { createSlice } from "@reduxjs/toolkit";
import {
  getMainAccountList,
  getMainAccountSearchList,
  postMainAccountStatus,
  getAddMainAccount,
  patchMainAccountDetailEdit,
  getMainAccountDetailView,
  getPatchMainAccountDetailEdit
} from "./mainAccountReducer";
const initialState = {
  loading: false,
  error: "",
  MainAccountList: [
    {
      id: "1",
      mainAccountCode: "main123",
      mainAccountName: "mainAccountName",
      description: "description",
      accountType: "Credit",
      openEntry: "123",
      openEntryType: "credit",
      accountCategoryCode: "acc123",
      companyCode: "cc123",
      currencyCode: "cc112"
    }
  ],
  MainAccountSearchList: [],
  MainAccountStatus: {},
  AddMainAccount: {},
  mainAccountDetailEdit: {},
  getMainAccountDetailEdit: {},
  MainAccountDetailView: {}
};
let nextId = 2
const mainAccountMasterReducer = createSlice({
  name: "mainAccountMaster",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    //MainAccountList

    builder.addCase(getMainAccountList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getMainAccountList.fulfilled,
      (state, action) => {
        state.loading = false;
        state.MainAccountList = action.payload;
      }
    );
    builder.addCase(
      getMainAccountList.rejected,
      (state, action) => {
        state.loading = false;

        state.MainAccountList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //MainAccountSearchList

    builder.addCase(getMainAccountSearchList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getMainAccountSearchList.fulfilled,
      (state, action) => {
        state.loading = false;
        state.MainAccountSearchList = action.payload;
      }
    );
    builder.addCase(
      getMainAccountSearchList.rejected,
      (state, action) => {
        state.loading = false;

        state.MainAccountSearchList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //MainAccountStatus

    builder.addCase(postMainAccountStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postMainAccountStatus.fulfilled, (state, action) => {
        state.loading = false;
        const newItem2 = { ...action.payload, id: nextId++ };
        state.MainAccountList = [...state.MainAccountList, newItem2];
        console.log(state.MainAccountList, "kkk")
      }
    );
    builder.addCase(
      postMainAccountStatus.rejected,
      (state, action) => {
        state.loading = false;

        state.MainAccountStatus = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //AddMainAccount

    builder.addCase(getAddMainAccount.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAddMainAccount.fulfilled,
      (state, action) => {
        state.loading = false;
        state.AddMainAccount = action.payload;
      }
    );
    builder.addCase(
      getAddMainAccount.rejected,
      (state, action) => {
        state.loading = false;

        state.AddMainAccount = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //MainAccountDetailEdit

    builder.addCase(patchMainAccountDetailEdit.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchMainAccountDetailEdit.fulfilled,
      (state, action) => {
        state.loading = false;
        const updatedIndex = state.MainAccountList.findIndex(
          (item) => item.id === action.payload.id
        );
        if (updatedIndex !== -1) {
          const updatedCurrencyList = [...state.MainAccountList];
          updatedCurrencyList[updatedIndex] = action.payload;
          state.MainAccountList = updatedCurrencyList;
        } else {
          state.MainAccountList = [...state.MainAccountList, action.payload];
        }
      }
    );

    builder.addCase(
      patchMainAccountDetailEdit.rejected,
      (state, action) => {
        state.loading = false;

        state.mainAccountDetailEdit = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //getPatchMainAccountDetailEdit
    builder.addCase(getPatchMainAccountDetailEdit.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getPatchMainAccountDetailEdit.fulfilled,
      (state, action) => {
        state.loading = false;
        state.getMainAccountDetailEdit = action.payload;
        console.log(state.getMainAccountDetailEdit, "ll")
      }
    );
    builder.addCase(
      getPatchMainAccountDetailEdit.rejected,
      (state, action) => {
        state.loading = false;

        state.getMainAccountDetailEdit = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //MainAccountDetailView

    builder.addCase(getMainAccountDetailView.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getMainAccountDetailView.fulfilled,
      (state, action) => {
        state.loading = false;
        state.MainAccountDetailView = action.payload;
      }
    );
    builder.addCase(
      getMainAccountDetailView.rejected,
      (state, action) => {
        state.loading = false;

        state.MainAccountDetailView = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
  },
});

export default mainAccountMasterReducer.reducer;