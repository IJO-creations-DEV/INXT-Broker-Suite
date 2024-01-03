import { createSlice } from "@reduxjs/toolkit";
import {
  getRequestListMiddleware,
  getRequestSearchMiddleware,
  postAddRequestMiddleware,
  getAddRequestTableMiddleware,
  postEditRequestMiddleware,
} from "./pettyCashRequestMiddleware";
import SvgIconeye from "../../../../assets/icons/SvgIconeye";
const initialState = {
  loading: false,
  error: "",
  RequestList: [],
  RequestSearch: [],
  AddRequest: {},
  AddRequestTable: [],
  EditRequest: {},
};
const PettyCashRequestReducer = createSlice({
  name: "pettycashrequest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRequestListMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRequestListMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.RequestList = action.payload;
    });
    builder.addCase(getRequestListMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.RequestList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //RequestSearch

    builder.addCase(getRequestSearchMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRequestSearchMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.RequestSearch = action.payload;
    });
    builder.addCase(getRequestSearchMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.DisbursmentSearch = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    // AddRequest

    builder.addCase(postAddRequestMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postAddRequestMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.AddRequest = action.payload;
    });
    builder.addCase(postAddRequestMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.AddRequest = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //AddRequestTable

    builder.addCase(getAddRequestTableMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAddRequestTableMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.AddRequestTable = action.payload;
    });
    builder.addCase(getAddRequestTableMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.AddRequestTable = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //EditRequest

    builder.addCase(postEditRequestMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postEditRequestMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.EditRequest = action.payload;
    });
    builder.addCase(postEditRequestMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.EditRequest = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });
  },
});

export default PettyCashRequestReducer.reducer;
