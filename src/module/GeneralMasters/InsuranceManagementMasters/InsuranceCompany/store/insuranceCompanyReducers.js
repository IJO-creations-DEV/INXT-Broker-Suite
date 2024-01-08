import { createSlice } from "@reduxjs/toolkit";
import {
  getInsuranceCompanyListMiddleWare,
  getSearchInsuranceCompanyMiddleWare,
  postInsuranceCompanyMiddleWare,
  getMainAccountDetailView,
} from "./insuranceCompanyMiddleware";
const initialState = {
  loading: false,
  error: "",
  InsuranceCompanyList: [
    {
      id: 1,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      insuranceCompanyCode: "Inscom00123",
      insuranceCompanyName: "Informative explanation",
      email: "zealinsurance@abc.com",
      phoneNumber: "9874563210",
      action: 1,
    },
    {
      id: 2,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 1,
      insuranceCompanyCode: "Inscom00123",
      insuranceCompanyName: "Informative explanation",
      email: "zealinsurance@abc.com",
      phoneNumber: "9874563210",
      action: 2,
    },
    {
      id: 3,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      insuranceCompanyCode: "Inscom00123",
      insuranceCompanyName: "Informative explanation",
      email: "zealinsurance@abc.com",
      phoneNumber: "9874563210",
      action: 3,
    },
    {
      id: 4,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 1,
      insuranceCompanyCode: "Inscom00123",
      insuranceCompanyName: "Informative explanation",
      email: "zealinsurance@abc.com",
      phoneNumber: "9874563210",
      action: 4,
    },
    {
      id: 5,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      insuranceCompanyCode: "Inscom00123",
      insuranceCompanyName: "Informative explanation",
      email: "zealinsurance@abc.com",
      phoneNumber: "9874563210",
      action: 5,
    },
    {
      id: 6,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 1,
      insuranceCompanyCode: "Inscom00123",
      insuranceCompanyName: "Informative explanation",
      email: "zealinsurance@abc.com",
      phoneNumber: "9874563210",
      action: 6,
    },
    {
      id: 7,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      insuranceCompanyCode: "Inscom00123",
      insuranceCompanyName: "Informative explanation",
      email: "zealinsurance@abc.com",
      phoneNumber: "9874563210",
      action: 7,
    },
    {
      id: 8,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 1,
      insuranceCompanyCode: "Inscom00123",
      insuranceCompanyName: "Informative explanation",
      email: "zealinsurance@abc.com",
      phoneNumber: "9874563210",
      action: 8,
    },
    {
      id: 9,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      insuranceCompanyCode: "Inscom00123",
      insuranceCompanyName: "Informative explanation",
      email: "zealinsurance@abc.com",
      phoneNumber: "9874563210",
      action: 9,
    },
    {
      id: 10,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      insuranceCompanyCode: "Inscom00123",
      insuranceCompanyName: "Informative explanation",
      email: "zealinsurance@abc.com",
      phoneNumber: "9874563210",
      action: 10,
    },
  ],
  MainAccountSearchList: [],
  MainAccountStatus: {},
  AddMainAccount: {},
  MainAccountDetailEdit: {},
  MainAccountDetailView: {},
};
const insuranceCompanyMasterReducer = createSlice({
  name: "mainAccountMaster",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // searchInsutanceCompany
    builder.addCase(getSearchInsuranceCompanyMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getSearchInsuranceCompanyMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;
        // state.InsuranceCompanyList = action.payload;
      }
    );
    builder.addCase(
      getSearchInsuranceCompanyMiddleWare.rejected,
      (state, action) => {
        state.loading = false;

        // state.InsuranceCompanyList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
    //InsuranceCompanyList

    builder.addCase(getInsuranceCompanyListMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getInsuranceCompanyListMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;
        state.InsuranceCompanyList = action.payload;
      }
    );
    builder.addCase(
      getInsuranceCompanyListMiddleWare.rejected,
      (state, action) => {
        state.loading = false;

        state.InsuranceCompanyList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //MainAccountStatus

    builder.addCase(postInsuranceCompanyMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postInsuranceCompanyMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;
        state.InsuranceCompanyList = [
          ...state.InsuranceCompanyList,
          action.payload,
        ];
      }
    );
    builder.addCase(
      postInsuranceCompanyMiddleWare.rejected,
      (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //AddMainAccount

    //MainAccountDetailEdit

    //MainAccountDetailView
  },
});

export default insuranceCompanyMasterReducer.reducer;
