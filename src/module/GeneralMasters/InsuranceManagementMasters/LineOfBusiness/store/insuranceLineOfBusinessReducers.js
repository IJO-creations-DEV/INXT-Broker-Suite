import { createSlice } from "@reduxjs/toolkit";
import {
  getInsurancelineOfBusinessListMiddleWare,
  postInsurancelineOfBusinessMiddleWare,
  patchInsurancelineOfBusinessMiddleWare,
  getSearchInsurancelineOfBusinessMiddleware,
} from "./insuranceLineOfBusinessMiddleware";
const initialState = {
  loading: false,
  error: "",
  InsuranceLineOfBusinessList: [
    {
      id: 1,
      modifiedby: "Johnson",
      modifiedOn: "12/12/2023",
      Status: 0,
      businessCode: "LBC12345",
      LOBName: "Motor",
      description: "description",
      action: 1,
    },
    {
      id: 2,
      modifiedby: "Johnson",
      modifiedOn: "12/12/2023",
      Status: 1,
      businessCode: "LBC12345",
      LOBName: "Non-Life Retail",
      description: "description",
      action: 2,
    },
    {
      id: 3,
      modifiedby: "Johnson",
      modifiedOn: "12/12/2023",
      Status: 0,
      businessCode: "LBC12345",
      LOBName: "Fire",
      description: "description",
      action: 3,
    },
    {
      id: 4,
      modifiedby: "Johnson",
      modifiedOn: "12/12/2023",
      Status: 1,
      businessCode: "LBC12345",
      LOBName: "General Accident",
      description: "description",
      action: 4,
    },
    {
      id: 5,
      modifiedby: "Johnson",
      modifiedOn: "12/12/2023",
      Status: 0,
      businessCode: "LBC12345",
      LOBName: "Engineering",
      description: "description",
      action: 5,
    },
    {
      id: 6,
      modifiedby: "Johnson",
      modifiedOn: "12/12/2023",
      Status: 1,
      businessCode: "LBC12345",
      LOBName: "Liability",
      description: "description",
      action: 6,
    },
    {
      id: 7,
      modifiedby: "Johnson",
      modifiedOn: "12/12/2023",
      Status: 0,
      businessCode: "LBC12345",
      LOBName: "Marine Hull",
      description: "description",
      action: 7,
    },
    {
      id: 8,
      modifiedby: "Johnson",
      modifiedOn: "12/12/2023",
      Status: 1,
      businessCode: "LBC12345",
      LOBName: "Marine Hull",
      description: "description",
      action: 8,
    },
    {
      id: 9,
      modifiedby: "Johnson",
      modifiedOn: "12/12/2023",
      Status: 0,
      businessCode: "LBC12345",
      LOBName: "Aviation",
      description: "description",
      action: 9,
    },
    {
      id: 10,
      modifiedby: "Johnson",
      modifiedOn: "12/12/2023",
      Status: 0,
      businessCode: "LBC12345",
      LOBName: "Medical",
      description: "description",
      action: 10,
    },
  ],
  SearchTableList: [],
};
const insuranceManagementlineOfBusinessMasterReducer = createSlice({
  name: "mainAccountMaster",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getInsurancelineOfBusinessListMiddleWare.pending,
      (state) => {
        state.loading = true;
      }
    );
    builder.addCase(
      getInsurancelineOfBusinessListMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;
        state.InsuranceLineOfBusinessList = action.payload;
      }
    );
    builder.addCase(
      getInsurancelineOfBusinessListMiddleWare.rejected,
      (state, action) => {
        state.loading = false;

        state.InsuranceLineOfBusinessList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //postInsurancelineOfBusiness

    builder.addCase(postInsurancelineOfBusinessMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postInsurancelineOfBusinessMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;
        state.InsuranceLineOfBusinessList = [
          ...state.InsuranceLineOfBusinessList,
          action.payload,
        ];
      }
    );
    builder.addCase(
      postInsurancelineOfBusinessMiddleWare.rejected,
      (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
    //EditInsurancelineOfBusiness
    builder.addCase(patchInsurancelineOfBusinessMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchInsurancelineOfBusinessMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;

        state.InsuranceLineOfBusinessList = action.payload;
      }
    );
    builder.addCase(
      patchInsurancelineOfBusinessMiddleWare.rejected,
      (state, action) => {
        state.loading = false;

        state.editList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
    //searchInsurancelineOfBusiness
    builder.addCase(
      getSearchInsurancelineOfBusinessMiddleware.pending,
      (state) => {
        state.loading = true;
      }
    );
    builder.addCase(
      getSearchInsurancelineOfBusinessMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.SearchTableList = action.payload;
      }
    );
    builder.addCase(
      getSearchInsurancelineOfBusinessMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.SearchTableList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
  },
});

export default insuranceManagementlineOfBusinessMasterReducer.reducer;
