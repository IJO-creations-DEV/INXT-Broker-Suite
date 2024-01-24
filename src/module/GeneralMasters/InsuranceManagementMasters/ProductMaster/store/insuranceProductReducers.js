import { createSlice } from "@reduxjs/toolkit";
import {
  getInsuranceProductListMiddleWare,
  postInsuranceProductMiddleWare,
  patchInsuranceProductMiddleWare,
  getSearchInsuranceProductMiddleware,
} from "./insuranceProductMiddleware";
const initialState = {
  loading: false,
  error: "",
  InsuranceProductList: [
    {
      id: 1,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      productCode: "1001",
      productName: "Comprehensive Motor Insurance",
      lineofBusiness: "Motor",
      commissionCode: "Com00123",
      description: "description",
      action: 1,
    },
    {
      id: 2,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 1,
      productCode: "1002",
      productName: "Compulsory Third Party Liability (CTPL)",
      lineofBusiness: "Fire",
      commissionCode: "Com00123",
      description: "description",
      action: 2,
    },
    {
      id: 3,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      productCode: "1003",
      productName: "Motor Protect  Motorcycle Insurance",
      lineofBusiness: "General Accident",
      commissionCode: "Com00123",
      description: "description",
      action: 3,
    },
    {
      id: 4,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 1,
      productCode: "2001",
      productName: "Fire & Allied Perils",
      lineofBusiness: "Liability",
      commissionCode: "Com00123",
      description: "description",
      action: 4,
    },
    {
      id: 5,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      productCode: "2002",
      productName: "Loss of Profit",
      lineofBusiness: "Engineering",
      commissionCode: "Com00123",
      description: "description",
      action: 5,
    },
    {
      id: 6,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 1,
      productCode: "2003",
      productName: "Property All Risk Insurance",
      lineofBusiness: "Marine",
      commissionCode: "Com00123",
      description: "description",
      action: 6,
    },
    {
      id: 7,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      productCode: "2004",
      productName: "Home Care cover",
      lineofBusiness: "Marine",
      commissionCode: "Com00123",
      description: "description",
      action: 7,
    },
    {
      id: 8,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 1,
      productCode: "2005",
      productName: "Burglary",
      lineofBusiness: "Life",
      commissionCode: "Com00123",
      description: "description",
      action: 8,
    },
    {
      id: 9,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      productCode: "2006",
      productName: "Sabotage and Terrorism",
      lineofBusiness: "Liability",
      commissionCode: "Com00123",
      description: "description",
      action: 9,
    },
    {
      id: 10,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      productCode: "2007",
      productName: "Office Multi cover",
      lineofBusiness: "Marine",
      commissionCode: "Com00123",
      description: "description",
      action: 10,
    },
  ],
  SearchTableList: [],
};
const insuranceManagementProductMasterReducer = createSlice({
  name: "mainAccountMaster",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInsuranceProductListMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getInsuranceProductListMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;
        state.InsuranceProductList = action.payload;
      }
    );
    builder.addCase(
      getInsuranceProductListMiddleWare.rejected,
      (state, action) => {
        state.loading = false;

        state.InsuranceProductList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //postInsuranceProduct

    builder.addCase(postInsuranceProductMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postInsuranceProductMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;
        state.InsuranceProductList = [
          ...state.InsuranceProductList,
          action.payload,
        ];
      }
    );
    builder.addCase(
      postInsuranceProductMiddleWare.rejected,
      (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
    //EditInsuranceProduct
    builder.addCase(patchInsuranceProductMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchInsuranceProductMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;

        state.InsuranceProductList = action.payload;
      }
    );
    builder.addCase(
      patchInsuranceProductMiddleWare.rejected,
      (state, action) => {
        state.loading = false;

        state.editList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
    //searchInsuranceProduct
    builder.addCase(getSearchInsuranceProductMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getSearchInsuranceProductMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.SearchTableList = action.payload;
      }
    );
    builder.addCase(
      getSearchInsuranceProductMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.SearchTableList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
  },
});

export default insuranceManagementProductMasterReducer.reducer;
