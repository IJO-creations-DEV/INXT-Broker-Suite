import { createSlice } from "@reduxjs/toolkit";
import {
  getReplenishListMiddleware,
  getReplenishSearchMiddleware,
  postAddReplenishMiddleware,
  getAddReplenishTableMiddleware,
  getViewReplenishMiddleware,
} from "./pettyCashReplenishMiddleware";
const initialState = {
  loading: false,
  error: "",
  ReplenishList: [],
  ReplenishSearch: [],
  AddReplenish: {},
  AddReplenishTable: [],
  ViewReplenish: {},
};
const PettyCashReplenishReducer = createSlice({
  name: "pettycashreplenish",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReplenishListMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getReplenishListMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.ReplenishList = action.payload;
    });
    builder.addCase(getReplenishListMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.ReplenishList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //ReplenishSearch

    builder.addCase(getReplenishSearchMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getReplenishSearchMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.ReplenishSearch = action.payload;
    });
    builder.addCase(getReplenishSearchMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.ReplenishSearch = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    // AddReplenish

    builder.addCase(postAddReplenishMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postAddReplenishMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.AddReplenish = action.payload;
    });
    builder.addCase(postAddReplenishMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.AddReplenish = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //AddReplenishTable

    builder.addCase(getAddReplenishTableMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAddReplenishTableMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.AddReplenishTable = action.payload;
      }
    );
    builder.addCase(
      getAddReplenishTableMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.AddReplenishTable = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //ViewReplenish

    builder.addCase(getViewReplenishMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getViewReplenishMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.ViewReplenish = action.payload;
    });
    builder.addCase(getViewReplenishMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.ViewReplenish = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });
  },
});

export default PettyCashReplenishReducer.reducer;
