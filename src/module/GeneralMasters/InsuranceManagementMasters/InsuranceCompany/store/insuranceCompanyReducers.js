import { createSlice } from "@reduxjs/toolkit";
import {
  getInsuranceCompanyListMiddleWare,
  postInsuranceCompanyMiddleWare,
  patchInsuranceCompanyMiddleWare,
  getSearchInsuranceCompanyMiddleware,
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
      addressLine1: "addressLine1",
      addressLine2: "addressLine2",
      addressLine3: "addressLine3",
      city: "City 1",
      state: "State 1",
      country: "Country 1",
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
      addressLine1: "addressLine1",
      addressLine2: "addressLine2",
      addressLine3: "addressLine3",
      city: "City 1",
      state: "State 1",
      country: "Country 1",
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
      addressLine1: "addressLine1",
      addressLine2: "addressLine2",
      addressLine3: "addressLine3",
      city: "City 1",
      state: "State 1",
      country: "Country 1",
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
      addressLine1: "addressLine1",
      addressLine2: "addressLine2",
      addressLine3: "addressLine3",
      city: "City 1",
      state: "State 1",
      country: "Country 1",
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
      addressLine1: "addressLine1",
      addressLine2: "addressLine2",
      addressLine3: "addressLine3",
      city: "City 1",
      state: "State 1",
      country: "Country 1",
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
      addressLine1: "addressLine1",
      addressLine2: "addressLine2",
      addressLine3: "addressLine3",
      city: "City 1",
      state: "State 1",
      country: "Country 1",
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
      addressLine1: "addressLine1",
      addressLine2: "addressLine2",
      addressLine3: "addressLine3",
      city: "City 1",
      state: "State 1",
      country: "Country 1",
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
      addressLine1: "addressLine1",
      addressLine2: "addressLine2",
      addressLine3: "addressLine3",
      city: "City 1",
      state: "State 1",
      country: "Country 1",
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
      addressLine1: "addressLine1",
      addressLine2: "addressLine2",
      addressLine3: "addressLine3",
      city: "City 1",
      state: "State 1",
      country: "Country 1",
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
      addressLine1: "addressLine1",
      addressLine2: "addressLine2",
      addressLine3: "addressLine3",
      city: "City 1",
      state: "State 1",
      country: "Country 1",
    },
  ],
  SearchTableList: [],
};
const insuranceManagementCompanyMasterReducer = createSlice({
  name: "mainAccountMaster",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

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

    //postInsuranceCompany

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
    //EditInsuranceCompany
    builder.addCase(patchInsuranceCompanyMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchInsuranceCompanyMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;

        state.InsuranceCompanyList = action.payload;
      }
    );
    builder.addCase(
      patchInsuranceCompanyMiddleWare.rejected,
      (state, action) => {
        state.loading = false;

        state.editList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
    //searchInsuranceCompany
    builder.addCase(getSearchInsuranceCompanyMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getSearchInsuranceCompanyMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.SearchTableList = action.payload;
      }
    );
    builder.addCase(
      getSearchInsuranceCompanyMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.SearchTableList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
  },
});

export default insuranceManagementCompanyMasterReducer.reducer;
