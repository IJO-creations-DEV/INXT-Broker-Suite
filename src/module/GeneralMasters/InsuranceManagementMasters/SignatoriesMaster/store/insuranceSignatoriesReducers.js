import { createSlice } from "@reduxjs/toolkit";
import {
  getInsuranceSignatoriesMiddleWare,
  postInsuranceSignatoriesMiddleWare,
  patchInsuranceSignatoriesMiddleWare,
  getSearchInsuranceSignatoriesMiddleware,
} from "./insuranceSignatoriesMiddleware";
const initialState = {
  loading: false,
  error: "",
  InsuranceSignatoriesList: [
    {
      id: 1,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      signatoriesCode: "Signatory0123",
      signatoryName: "Signatory",
      signatoryDescription: "signatoryDescription",
      action: 1,
    },
    {
      id: 2,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 1,
      signatoriesCode: "Signatory0123",
      signatoryName: "Signatory",
      signatoryDescription: "signatoryDescription",
      action: 2,
    },
    {
      id: 3,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      signatoriesCode: "Signatory0123",
      signatoryName: "Signatory",
      signatoryDescription: "signatoryDescription",
      action: 3,
    },
    {
      id: 4,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 1,
      signatoriesCode: "Signatory0123",
      signatoryName: "Signatory",
      signatoryDescription: "signatoryDescription",
      action: 4,
    },
    {
      id: 5,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      signatoriesCode: "Signatory0123",
      signatoryName: "Signatory",
      signatoryDescription: "signatoryDescription",
      action: 5,
    },
    {
      id: 6,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 1,
      signatoriesCode: "Signatory0123",
      signatoryName: "Signatory",
      signatoryDescription: "signatoryDescription",
      action: 6,
    },
    {
      id: 7,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      signatoriesCode: "Signatory0123",
      signatoryName: "Signatory",
      signatoryDescription: "signatoryDescription",
      action: 7,
    },
    {
      id: 8,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 1,
      signatoriesCode: "Signatory0123",
      signatoryName: "Signatory",
      signatoryDescription: "signatoryDescription",
      action: 8,
    },
    {
      id: 9,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      signatoriesCode: "Signatory0123",
      signatoryName: "Signatory",
      signatoryDescription: "signatoryDescription",
      action: 9,
    },
    {
      id: 10,
      modifiedby: "Name",
      modifiedOn: "12/12/2023",
      Status: 0,
      signatoriesCode: "Signatory0123",
      signatoryName: "Signatory",
      signatoryDescription: "signatoryDescription",
      action: 10,
    },
  ],
  SearchTableList: [],
};
const insuranceManagementSignatoriesMasterReducer = createSlice({
  name: "mainAccountMaster",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInsuranceSignatoriesMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getInsuranceSignatoriesMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;
        state.InsuranceSignatoriesList = action.payload;
      }
    );
    builder.addCase(
      getInsuranceSignatoriesMiddleWare.rejected,
      (state, action) => {
        state.loading = false;

        state.InsuranceSignatoriesList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //postInsuranceSignatories

    builder.addCase(postInsuranceSignatoriesMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postInsuranceSignatoriesMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;
        state.InsuranceSignatoriesList = [
          ...state.InsuranceSignatoriesList,
          action.payload,
        ];
      }
    );
    builder.addCase(
      postInsuranceSignatoriesMiddleWare.rejected,
      (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
    //EditInsuranceSignatories
    builder.addCase(patchInsuranceSignatoriesMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchInsuranceSignatoriesMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;

        state.InsuranceSignatoriesList = action.payload;
      }
    );
    builder.addCase(
      patchInsuranceSignatoriesMiddleWare.rejected,
      (state, action) => {
        state.loading = false;

        state.editList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
    //searchInsuranceSignatories
    builder.addCase(
      getSearchInsuranceSignatoriesMiddleware.pending,
      (state) => {
        state.loading = true;
      }
    );
    builder.addCase(
      getSearchInsuranceSignatoriesMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.SearchTableList = action.payload;
      }
    );
    builder.addCase(
      getSearchInsuranceSignatoriesMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.SearchTableList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
  },
});

export default insuranceManagementSignatoriesMasterReducer.reducer;
