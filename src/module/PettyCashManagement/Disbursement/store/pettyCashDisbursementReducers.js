import { createSlice } from "@reduxjs/toolkit";
import {
  getDisbursmentListMiddleware,
  getDisbursmentSearchMiddleware,
  postAddDisbursmentMiddleware,
  getAddDisbursmentTableMiddleware,
  postEditDisbursmentMiddleware,
  getViewDisbursmentMiddleware
} from "./pettyCashDisbursementMiddleware";
const initialState = {
  loading: false,
  error: "",
  DisbursmentList: [],
  DisbursmentSearch: [],
  AddDisbursment: {},
  AddDisbursmentTable: [],
  EditDisbursment: {},
  ViewDisbursment: {},
};
const PettyCashDisbursementReducer = createSlice({
  name: "pettycashdisbursement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDisbursmentListMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDisbursmentListMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.DisbursmentList = action.payload;
    });
    builder.addCase(getDisbursmentListMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.DisbursmentList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //DisbursmentSearch

    builder.addCase(getDisbursmentSearchMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getDisbursmentSearchMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.DisbursmentSearch = action.payload;
      }
    );
    builder.addCase(
      getDisbursmentSearchMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.DisbursmentSearch = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    // AddDisbursment

    builder.addCase(postAddDisbursmentMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postAddDisbursmentMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.AddDisbursment = action.payload;
    });
    builder.addCase(postAddDisbursmentMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.AddDisbursment = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //AddDisbursmentTable

    builder.addCase(getAddDisbursmentTableMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAddDisbursmentTableMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.AddDisbursmentTable = action.payload;
      }
    );
    builder.addCase(
      getAddDisbursmentTableMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.AddDisbursmentTable = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //EditDisbursment

    builder.addCase(postEditDisbursmentMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
        postEditDisbursmentMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.EditDisbursment = action.payload;
      }
    );
    builder.addCase(
        postEditDisbursmentMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.EditDisbursment = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //ViewDisbursment

    builder.addCase(getViewDisbursmentMiddleware.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(
        getViewDisbursmentMiddleware.fulfilled,
        (state, action) => {
          state.loading = false;
          state.ViewDisbursment = action.payload;
        }
      );
      builder.addCase(
        getViewDisbursmentMiddleware.rejected,
        (state, action) => {
          state.loading = false;
  
          state.ViewDisbursment = {};
          state.error = typeof action.payload === "string" ? action.payload : "";
        }
      );
  },
});

export default PettyCashDisbursementReducer.reducer;
