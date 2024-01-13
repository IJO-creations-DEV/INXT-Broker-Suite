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
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      coverCode: "Cover Code",
      coverName: "Cover Name",
      coverDescription: "coverDescription",
      policyType: "Policy Type",
      action: 1,
    },
    {
      id: 2,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 1,
      coverCode: "Cover Code",
      coverName: "Cover Name",
      coverDescription: "coverDescription",
      policyType: "Policy Type",
      action: 2,
    },
    {
      id: 3,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      coverCode: "Cover Code",
      coverName: "Cover Name",
      coverDescription: "coverDescription",
      policyType: "Policy Type",
      action: 3,
    },
    {
      id: 4,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 1,
      coverCode: "Cover Code",
      coverName: "Cover Name",
      coverDescription: "coverDescription",
      policyType: "Policy Type",
      action: 4,
    },
    {
      id: 5,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      coverCode: "Cover Code",
      coverName: "Cover Name",
      coverDescription: "coverDescription",
      policyType: "Policy Type",
      action: 5,
    },
    {
      id: 6,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 1,
      coverCode: "Cover Code",
      coverName: "Cover Name",
      coverDescription: "coverDescription",
      policyType: "Policy Type",
      action: 6,
    },
    {
      id: 7,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      coverCode: "Cover Code",
      coverName: "Cover Name",
      coverDescription: "coverDescription",
      policyType: "Policy Type",
      action: 7,
    },
    {
      id: 8,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 1,
      coverCode: "Cover Code",
      coverName: "Cover Name",
      coverDescription: "coverDescription",
      policyType: "Policy Type",
      action: 8,
    },
    {
      id: 9,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      coverCode: "Cover Code",
      coverName: "Cover Name",
      coverDescription: "coverDescription",
      policyType: "Policy Type",
      action: 9,
    },
    {
      id: 10,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      coverCode: "Cover Code",
      coverName: "Cover Name",
      coverDescription: "coverDescription",
      policyType: "Policy Type",
      action: 10,
    },
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
