import { createSlice } from "@reduxjs/toolkit";
import {
  getInsuranceCompanyListMiddleWare,
  postInsuranceCompanyMiddleWare,
  patchInsuranceCompanyMiddleWare,
  getSearchInsuranceCompanyMiddleware,
  getInsuranceViewMiddleWare,
  getInsurancePatchData,
} from "./insuranceCompanyMiddleware";
const initialState = {
  loading: false,
  error: "",
  InsuranceCompanyList: [
    {
      id: 1,
      modifiedby: "John",
      modifiedOn: "12/12/2023",
      Status: 0,
      insuranceCompanyCode: "001",
      insuranceCompanyName: "Pioneer Insurance and Surety Corp (PISC)",
      email: "contactus@broker.com",
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
      modifiedby: "John",
      modifiedOn: "12/12/2023",
      Status: 1,
      insuranceCompanyCode: "002",
      insuranceCompanyName: "Malayan lnsurance Company, lnc.",
      email: "contactus@broker.com",
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
      modifiedby: "John",
      modifiedOn: "12/12/2023",
      Status: 0,
      insuranceCompanyCode: "003",
      insuranceCompanyName: "Cooperative lnsurance System of the Philippines Life",
      email: "contactus@broker.com",
      phoneNumber: "9874563210",
      action: 3,
      addressLine1: "addressLine1",
      addressLine2: "addressLine2",
      addressLine3: "addressLine3",
      city: "City 1",
      state: "State 1",
      country: "Country 1",
    },
    // {
    //   id: 4,
    //   modifiedby: "John",
    //   modifiedOn: "12/12/2023",
    //   Status: 1,
    //   insuranceCompanyCode: "004",
    //   insuranceCompanyName: "Etiqa Life and General Assurance Philippines,",
    //   email: "contactus@broker.com",
    //   phoneNumber: "9874563210",
    //   action: 4,
    //   addressLine1: "addressLine1",
    //   addressLine2: "addressLine2",
    //   addressLine3: "addressLine3",
    //   city: "City 1",
    //   state: "State 1",
    //   country: "Country 1",
    // },
    // {
    //   id: 5,
    //   modifiedby: "John",
    //   modifiedOn: "12/12/2023",
    //   Status: 0,
    //   insuranceCompanyCode: "005",
    //   insuranceCompanyName: "Paramount Life & General lnsurance Corporation",
    //   email: "contactus@broker.com",
    //   phoneNumber: "9874563210",
    //   action: 5,
    //   addressLine1: "addressLine1",
    //   addressLine2: "addressLine2",
    //   addressLine3: "addressLine3",
    //   city: "City 1",
    //   state: "State 1",
    //   country: "Country 1",
    // },
    // {
    //   id: 6,
    //   modifiedby: "John",
    //   modifiedOn: "12/12/2023",
    //   Status: 1,
    //   insuranceCompanyCode: "006",
    //   insuranceCompanyName: "The Premier Life and General Assurance Corporation",
    //   email: "contactus@broker.com",
    //   phoneNumber: "9874563210",
    //   action: 6,
    //   addressLine1: "addressLine1",
    //   addressLine2: "addressLine2",
    //   addressLine3: "addressLine3",
    //   city: "City 1",
    //   state: "State 1",
    //   country: "Country 1",
    // },
    // {
    //   id: 7,
    //   modifiedby: "John",
    //   modifiedOn: "12/12/2023",
    //   Status: 0,
    //   insuranceCompanyCode: "007",
    //   insuranceCompanyName: "Alliedbankers lnsurance Corporation",
    //   email: "contactus@broker.com",
    //   phoneNumber: "9874563210",
    //   action: 7,
    //   addressLine1: "addressLine1",
    //   addressLine2: "addressLine2",
    //   addressLine3: "addressLine3",
    //   city: "City 1",
    //   state: "State 1",
    //   country: "Country 1",
    // },
    // {
    //   id: 8,
    //   modifiedby: "John",
    //   modifiedOn: "12/12/2023",
    //   Status: 1,
    //   insuranceCompanyCode: "008",
    //   insuranceCompanyName: "Corporate Guarantee and lnsurance Company,",
    //   email: "contactus@broker.com",
    //   phoneNumber: "9874563210",
    //   action: 8,
    //   addressLine1: "addressLine1",
    //   addressLine2: "addressLine2",
    //   addressLine3: "addressLine3",
    //   city: "City 1",
    //   state: "State 1",
    //   country: "Country 1",
    // },
  
   
  ],
  SearchTableList: [],
  getInsuranceView:{},
  getInsurancePatchData:{}
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
        const updatedIndex = state.InsuranceCompanyList.findIndex(
          (item) => item.id === action.payload.id
        );
        console.log(updatedIndex,"updatedIndex");
        if (updatedIndex !== -1) {
          const updatedCurrencyList = [...state.InsuranceCompanyList];
          updatedCurrencyList[updatedIndex] = action.payload;
          state.InsuranceCompanyList = updatedCurrencyList;
        } else {
          state.InsuranceCompanyList = [...state.InsuranceCompanyList, action.payload];
        }
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

    builder.addCase(getInsuranceViewMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getInsuranceViewMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;
        state.getInsuranceView = action.payload;
      }
    );
    builder.addCase(
      getInsuranceViewMiddleWare.rejected,
      (state, action) => {
        state.loading = false;

        state.getInsuranceView = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );


    builder.addCase(getInsurancePatchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getInsurancePatchData.fulfilled,
      (state, action) => {
        state.loading = false;
        state.getInsurancePatchData = action.payload;
      }
    );
    builder.addCase(
      getInsurancePatchData.rejected,
      (state, action) => {
        state.loading = false;

        state.getInsurancePatchData = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
  },
});

export default insuranceManagementCompanyMasterReducer.reducer;
