import { createSlice } from "@reduxjs/toolkit";
import { getCityListMiddleware, getCityListByIdMiddleware,postAddCityMiddleware,patchCityEditMiddleware,getSearchCityMiddleware} from "./cityMiddleware";
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
        builder.addCase(getCityListMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCityListMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.cityTableList = action.payload;
        });
        builder.addCase(getCityListMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.userTableList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
        builder.addCase(getCityListByIdMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCityListByIdMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.userDetailList = action.payload;
        });
        builder.addCase(getCityListByIdMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.userDetailList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

        builder.addCase(getSearchCityMiddleware.pending, (state) => {
          state.loading = true;
      });
      builder.addCase(getSearchCityMiddleware.fulfilled, (state, action) => {
          state.loading = false;
          state.userDetailList = action.payload;
      });
      builder.addCase(getSearchCityMiddleware.rejected, (state, action) => {
          state.loading = false;

          state.userDetailList = {};
          state.error = typeof action.payload === "string" ? action.payload : "";
      });
     
     

          builder.addCase(postAddCityMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(postAddCityMiddleware.fulfilled, (state, action) => {
            console.log(action.payload,'find action.payload')
            state.loading = false;
            state.userTableList = [...state.receiptsTableList, action.payload];
          });
          builder.addCase(postAddCityMiddleware.rejected, (state, action) => {
            state.loading = false;
       
            //   state.paymentVocherList = state.paymentVocherList;
            state.error = typeof action.payload === "string" ? action.payload : "";
          });

      
          builder.addCase(patchCityEditMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(
            patchCityEditMiddleware.fulfilled,
            (state, action) => {
              state.loading = false;
            
              state.userTableList = action.payload;
            }
          );
          builder.addCase(
            patchCityEditMiddleware.rejected,
            (state, action) => {
              state.loading = false;
      
              state.editList = {};
              state.error = typeof action.payload === "string" ? action.payload : "";
            }
          );

       

    },
});

export default receiptsReducer.reducer;
