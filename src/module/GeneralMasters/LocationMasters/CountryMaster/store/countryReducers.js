import { createSlice } from "@reduxjs/toolkit";
import { getCountryListMiddleware, getCountryListByIdMiddleware,postAddCountryMiddleware,patchCountryEditMiddleware,getSearchCountryMiddleware } from "./countryMiddleware";
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
        builder.addCase(getCountryListMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCountryListMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.countryTableList = action.payload;
        });
        builder.addCase(getCountryListMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.countryTableList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
        builder.addCase(getCountryListByIdMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCountryListByIdMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.countryDetailList = action.payload;
        });
        builder.addCase(getCountryListByIdMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.countryDetailList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

        builder.addCase(getSearchCountryMiddleware.pending, (state) => {
          state.loading = true;
      });
      builder.addCase(getSearchCountryMiddleware.fulfilled, (state, action) => {
          state.loading = false;
          state.countryDetailList = action.payload;
      });
      builder.addCase(getSearchCountryMiddleware.rejected, (state, action) => {
          state.loading = false;

          state.countryDetailList = {};
          state.error = typeof action.payload === "string" ? action.payload : "";
      });
     
     

          builder.addCase(postAddCountryMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(postAddCountryMiddleware.fulfilled, (state, action) => {
            console.log(action.payload,'find action.payload')
            state.loading = false;
            state.countryTableList = [...state.receiptsTableList, action.payload];
          });
          builder.addCase(postAddCountryMiddleware.rejected, (state, action) => {
            state.loading = false;
       
            //   state.paymentVocherList = state.paymentVocherList;
            state.error = typeof action.payload === "string" ? action.payload : "";
          });

      
          builder.addCase(patchCountryEditMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(
            patchCountryEditMiddleware.fulfilled,
            (state, action) => {
              state.loading = false;
            
              state.countryTableList = action.payload;
            }
          );
          builder.addCase(
            patchCountryEditMiddleware.rejected,
            (state, action) => {
              state.loading = false;
      
              state.editList = {};
              state.error = typeof action.payload === "string" ? action.payload : "";
            }
          );

      

    },
});

export default receiptsReducer.reducer;
