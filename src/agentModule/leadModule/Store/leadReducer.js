import { createSlice } from "@reduxjs/toolkit";
import { postCreateleadMiddleware,patchLeadEditMiddleWare,getleadtableMiddleware} from "./leadMiddleware";

const initialState = {
    loading: false,
    error: "",
    createleaddata:{},
    leadtabledata:[],
    LeadEditdata:{}
};
const leadReducer = createSlice({
    name: "leadReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

     //postCreateleadMiddleware

    builder.addCase(postCreateleadMiddleware.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(
        postCreateleadMiddleware.fulfilled,
        (state, action) => {
          state.loading = false;
          state.createleaddata = action.payload
          
        }
      );
      builder.addCase(
        postCreateleadMiddleware.rejected,
        (state, action) => {
          state.loading = false;
          state.error = typeof action.payload === "string" ? action.payload : "";
        }
      );


      //getleadtableMiddleware

    builder.addCase(getleadtableMiddleware.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(
        getleadtableMiddleware.fulfilled,
        (state, action) => {
          state.loading = false;
          state.leadtabledata = action.payload
        }
      );
      builder.addCase(
        getleadtableMiddleware.rejected,
        (state, action) => {
          state.loading = false;
          state.error = typeof action.payload === "string" ? action.payload : "";
        }
      );

      //patchLeadEditMiddleWare

    builder.addCase(patchLeadEditMiddleWare.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(
        patchLeadEditMiddleWare.fulfilled,
        (state, action) => {
          state.loading = false;
          state.LeadEditdata =action.payload
        }
      );
      builder.addCase(
        patchLeadEditMiddleWare.rejected,
        (state, action) => {
          state.loading = false;
          state.error = typeof action.payload === "string" ? action.payload : "";
        }
      );

    },
});

export default leadReducer.reducer;
