import { createSlice } from "@reduxjs/toolkit";
import { getCompanyListMiddleware, getCompanyListByIdMiddleware,postAddCompanyMiddleware,patchCompanyEditMiddleware,getSearchCompanyMiddleware } from "./companyMiddleware";
import SvgIconeye from "../../../assets/icons/SvgIconeye";
const initialState = {
    loading: false,
    error: "",
};
const receiptsReducer = createSlice({
    name: "employee",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCompanyListMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCompanyListMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.companyTableList = action.payload;
        });
        builder.addCase(getCompanyListMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.companyTableList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
        builder.addCase(getCompanyListByIdMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCompanyListByIdMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.companyDetailList = action.payload;
        });
        builder.addCase(getCompanyListByIdMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.companyDetailList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

        builder.addCase(getSearchCompanyMiddleware.pending, (state) => {
          state.loading = true;
      });
      builder.addCase(getSearchCompanyMiddleware.fulfilled, (state, action) => {
          state.loading = false;
          state.companyDetailList = action.payload;
      });
      builder.addCase(getSearchCompanyMiddleware.rejected, (state, action) => {
          state.loading = false;

          state.companuDetailList = {};
          state.error = typeof action.payload === "string" ? action.payload : "";
      });
     
     

          builder.addCase(postAddCompanyMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(postAddCompanyMiddleware.fulfilled, (state, action) => {
            console.log(action.payload,'find action.payload')
            state.loading = false;
            state.companyTableList = [...state.receiptsTableList, action.payload];
          });
          builder.addCase(postAddCompanyMiddleware.rejected, (state, action) => {
            state.loading = false;
       
            //   state.paymentVocherList = state.paymentVocherList;
            state.error = typeof action.payload === "string" ? action.payload : "";
          });

      
          builder.addCase(patchCompanyEditMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(
            patchCompanyEditMiddleware.fulfilled,
            (state, action) => {
              state.loading = false;
            
              state.companyTableList = action.payload;
            }
          );
          builder.addCase(
            patchCompanyEditMiddleware.rejected,
            (state, action) => {
              state.loading = false;
      
              state.editList = {};
              state.error = typeof action.payload === "string" ? action.payload : "";
            }
          );

    },
});

export default receiptsReducer.reducer;
