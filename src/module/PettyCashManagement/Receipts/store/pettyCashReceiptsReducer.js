import { createSlice } from "@reduxjs/toolkit";
import {
    getReceiptListMiddleware,
  getReceiptSearchMiddleware,
  postAddReceiptMiddleware,
  getAddReceiptTableMiddleware,
  getViewReceiptMiddleware,
} from "./pettyCashReceiptsMiddleware";
import SvgIconeye from "../../../../assets/icons/SvgIconeye";
const initialState = {
  loading: false,
  error: "",
  ReceiptList: [],
  ReceiptSearch: [],
  AddReceipt: {},
  AddReceiptTable: [],
  ViewReceipt: {},
};
const PettyCashReceiptsReducer = createSlice({
  name: "pettycashreceipts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
        builder.addCase(getReceiptListMiddleware.pending, (state) => {
          state.loading = true;
        });
        builder.addCase(getReceiptListMiddleware.fulfilled, (state, action) => {
          state.loading = false;
          state.ReceiptList = action.payload;
        });
        builder.addCase(getReceiptListMiddleware.rejected, (state, action) => {
          state.loading = false;
    
          state.ReceiptList = {};
          state.error = typeof action.payload === "string" ? action.payload : "";
        });
    
        //RequestSearch
    
        builder.addCase(getReceiptSearchMiddleware.pending, (state) => {
          state.loading = true;
        });
        builder.addCase(getReceiptSearchMiddleware.fulfilled, (state, action) => {
          state.loading = false;
          state.ReceiptSearch = action.payload;
        });
        builder.addCase(getReceiptSearchMiddleware.rejected, (state, action) => {
          state.loading = false;
    
          state.ReceiptSearch = {};
          state.error = typeof action.payload === "string" ? action.payload : "";
        });
    
        // AddReceipt
    
        builder.addCase(postAddReceiptMiddleware.pending, (state) => {
          state.loading = true;
        });
        builder.addCase(postAddReceiptMiddleware.fulfilled, (state, action) => {
          state.loading = false;
          state.AddRequest = action.payload;
        });
        builder.addCase(postAddReceiptMiddleware.rejected, (state, action) => {
          state.loading = false;
    
          state.AddRequest = {};
          state.error = typeof action.payload === "string" ? action.payload : "";
        });
    
        //AddReceiptTable
    
        builder.addCase(getAddReceiptTableMiddleware.pending, (state) => {
          state.loading = true;
        });
        builder.addCase(getAddReceiptTableMiddleware.fulfilled, (state, action) => {
          state.loading = false;
          state.AddReceiptTable = action.payload;
        });
        builder.addCase(getAddReceiptTableMiddleware.rejected, (state, action) => {
          state.loading = false;
    
          state.AddReceiptTable = {};
          state.error = typeof action.payload === "string" ? action.payload : "";
        });
    
        //ViewReceipt
    
        builder.addCase(getViewReceiptMiddleware.pending, (state) => {
          state.loading = true;
        });
        builder.addCase(getViewReceiptMiddleware.fulfilled, (state, action) => {
          state.loading = false;
          state.ViewReceipt = action.payload;
        });
        builder.addCase(getViewReceiptMiddleware.rejected, (state, action) => {
          state.loading = false;
    
          state.ViewReceipt = {};
          state.error = typeof action.payload === "string" ? action.payload : "";
        });
  },
});

export default PettyCashReceiptsReducer.reducer;
