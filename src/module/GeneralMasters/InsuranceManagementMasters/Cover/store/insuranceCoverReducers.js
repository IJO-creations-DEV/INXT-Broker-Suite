import { createSlice } from "@reduxjs/toolkit";
import {
  getInsuranceCoverMiddleWare,
  postInsuranceCoverMiddleWare,
  patchInsuranceCoverMiddleWare,
  getSearchInsuranceCoverMiddleware,
} from "./insuranceCoverMiddleware";
const initialState = {
  loading: false,
  error: "",
  InsuranceCoverList: [
    {
      id: 1,
      modifiedby: "John",
      modifiedOn: "12/12/2023",
      Status: 0,
      coverCode: "01",
      coverName: "CTPL",
      coverDescription: "CTPL",
      policyType: "Policy Type",
      action: 1,
    },
    {
      id: 2,
      modifiedby: "John",
      modifiedOn: "12/12/2023",
      Status: 1,
      coverCode: "02",
      coverName: "Comprehensive",
      coverDescription: "Comprehensive",
      policyType: "Policy Type",
      action: 2,
    },
    {
      id: 3,
      modifiedby: "John",
      modifiedOn: "12/12/2023",
      Status: 0,
      coverCode: "03",
      coverName: "Comprehensive with SRCC",
      coverDescription: "Comprehensive with SRCC",
      policyType: "Policy Type",
      action: 3,
    },
    {
      id: 4,
      modifiedby: "John",
      modifiedOn: "12/12/2023",
      Status: 1,
      coverCode: "04",
      coverName: "Excess BIPD",
      coverDescription: "Excess BIPD",
      policyType: "Policy Type",
      action: 4,
    },
    {
      id: 5,
      modifiedby: "John",
      modifiedOn: "12/12/2023",
      Status: 1,
      coverCode: "05",
      coverName: "OD and Theft",
      coverDescription: "OD and Theft",
      policyType: "Policy Type",
      action: 4,
    }
  ],
  SearchTableList: [],
};
const insuranceManagementCoverMasterReducer = createSlice({
  name: "mainAccountMaster",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInsuranceCoverMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getInsuranceCoverMiddleWare.fulfilled, (state, action) => {
      state.loading = false;
      state.InsuranceCoverList = action.payload;
    });
    builder.addCase(getInsuranceCoverMiddleWare.rejected, (state, action) => {
      state.loading = false;

      state.InsuranceCoverList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //postInsuranceCover

    builder.addCase(postInsuranceCoverMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postInsuranceCoverMiddleWare.fulfilled, (state, action) => {
      state.loading = false;
      state.InsuranceCoverList = [...state.InsuranceCoverList, action.payload];
    });
    builder.addCase(postInsuranceCoverMiddleWare.rejected, (state, action) => {
      state.loading = false;
      state.error = typeof action.payload === "string" ? action.payload : "";
    });
    //EditInsuranceCover
    builder.addCase(patchInsuranceCoverMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchInsuranceCoverMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;

        state.InsuranceCoverList = action.payload;
      }
    );
    builder.addCase(patchInsuranceCoverMiddleWare.rejected, (state, action) => {
      state.loading = false;

      state.editList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });
    //searchInsuranceCover
    builder.addCase(getSearchInsuranceCoverMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getSearchInsuranceCoverMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.SearchTableList = action.payload;
      }
    );
    builder.addCase(
      getSearchInsuranceCoverMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.SearchTableList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
  },
});

export default insuranceManagementCoverMasterReducer.reducer;
