import { createSlice } from "@reduxjs/toolkit";
import {
  getMainAccountList,
  getMainAccountSearchList,
  postMainAccountStatus,
  getAddMainAccount,
  patchMainAccountDetailEdit,
  getMainAccountDetailView,
  getPatchMainAccountDetailEdit
} from "./mainAccoutMiddleware";
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
    },
    {
      id: "2",
      mainAccountCode: "main456",
      mainAccountName: "anotherAccountName",
      description: "another description",
      accountType: "Debit",
      openEntry: "456",
      openEntryType: "debit",
      accountCategoryCode: "acc456",
      companyCode: "cc456",
      currencyCode: "cc223"
    },
    {
      id: "3",
      mainAccountCode: "main789",
      mainAccountName: "yetAnotherAccountName",
      description: "yet another description",
      accountType: "Credit",
      openEntry: "789",
      openEntryType: "credit",
      accountCategoryCode: "acc789",
      companyCode: "cc789",
      currencyCode: "cc334"
    },
    {
      id: "4",
      mainAccountCode: "main101",
      mainAccountName: "accountName4",
      description: "description4",
      accountType: "Debit",
      openEntry: "101",
      openEntryType: "debit",
      accountCategoryCode: "acc101",
      companyCode: "cc101",
      currencyCode: "cc445"
    },
    {
      id: "5",
      mainAccountCode: "main202",
      mainAccountName: "accountName5",
      description: "description5",
      accountType: "Credit",
      openEntry: "202",
      openEntryType: "credit",
      accountCategoryCode: "acc202",
      companyCode: "cc202",
      currencyCode: "cc556"
    },

);
export const patchMainAccountDetailEdit = createAsyncThunk(
    PATCH_MAIN_ACCOUNT_DETAIL_EDIT,
    async (payload, { rejectWithValue }) => {
        console.log(payload,"accountType");
        const data = {
            id: payload?.id,
            mainAccountCode: payload?.mainAccountCode,
            mainaccountname: payload?.mainaccountname,
            description: payload?.description,
            accountCategoryCode: payload?.accountCategoryCode,
            accountType: payload?.accountType, 
            companyCode: payload?.companyCode,
            currencyCode: payload?.currencyCode,
            openEntryType: payload?.openEntryType ,
            openEntry:payload?.openEntry
        };
        try {
            return data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error?.message);
        }

    {
      id: "6",
      mainAccountCode: "main303",
      mainAccountName: "accountName6",
      description: "description6",
      accountType: "Debit",
      openEntry: "303",
      openEntryType: "debit",
      accountCategoryCode: "acc303",
      companyCode: "cc303",
      currencyCode: "cc667"
    },
    {
      id: "7",
      mainAccountCode: "main404",
      mainAccountName: "accountName7",
      description: "description7",
      accountType: "Credit",
      openEntry: "404",
      openEntryType: "credit",
      accountCategoryCode: "acc404",
      companyCode: "cc404",
      currencyCode: "cc778"
    },
    {
      id: "8",
      mainAccountCode: "main505",
      mainAccountName: "accountName8",
      description: "description8",
      accountType: "Debit",
      openEntry: "505",
      openEntryType: "debit",
      accountCategoryCode: "acc505",
      companyCode: "cc505",
      currencyCode: "cc889"

    },
    {
      id: "9",
      mainAccountCode: "main606",
      mainAccountName: "accountName9",
      description: "description9",
      accountType: "Credit",
      openEntry: "606",
      openEntryType: "credit",
      accountCategoryCode: "acc606",
      companyCode: "cc606",
      currencyCode: "cc990"
    },
    {
      id: "10",
      mainAccountCode: "main707",
      mainAccountName: "accountName10",
      description: "description10",
      accountType: "Debit",
      openEntry: "707",
      openEntryType: "debit",
      accountCategoryCode: "acc707",
      companyCode: "cc707",
      currencyCode: "cc111"
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



export const getMainAccountDetailView = createAsyncThunk(
    GET_MAIN_ACCOUNT_DETAIL_VIEW,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);

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