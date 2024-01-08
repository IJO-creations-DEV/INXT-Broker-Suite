import { createSlice } from "@reduxjs/toolkit";
import { getStateListMiddleware, getStateListByIdMiddleware,postAddStateMiddleware,patchStateEditMiddleware,getSearchStateMiddleware } from "./stateMiddleware";
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
        builder.addCase(getStateListMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getStateListMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.stateTableList = action.payload;
        });
        builder.addCase(getStateListMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.stateTableList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
        builder.addCase(getStateListByIdMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getStateListByIdMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.stateDetailList = action.payload;
        });
        builder.addCase(getStateListByIdMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.stateDetailList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

        builder.addCase(getSearchStateMiddleware.pending, (state) => {
          state.loading = true;
      });
      builder.addCase(getSearchStateMiddleware.fulfilled, (state, action) => {
          state.loading = false;
          state.stateDetailList = action.payload;
      });
      builder.addCase(getSearchStateMiddleware.rejected, (state, action) => {
          state.loading = false;

          state.stateDetailList = {};
          state.error = typeof action.payload === "string" ? action.payload : "";
      });
     
     

          builder.addCase(postAddStateMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(postAddStateMiddleware.fulfilled, (state, action) => {
            console.log(action.payload,'find action.payload')
            state.loading = false;
            state.stateTableList = [...state.receiptsTableList, action.payload];
          });
          builder.addCase(postAddStateMiddleware.rejected, (state, action) => {
            state.loading = false;
       
            //   state.paymentVocherList = state.paymentVocherList;
            state.error = typeof action.payload === "string" ? action.payload : "";
          });

      
          builder.addCase(patchStateEditMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(
            patchStateEditMiddleware.fulfilled,
            (state, action) => {
              state.loading = false;
            
              state.stateTableList = action.payload;
            }
          );
          builder.addCase(
            patchStateEditMiddleware.rejected,
            (state, action) => {
              state.loading = false;
      
              state.editList = {};
              state.error = typeof action.payload === "string" ? action.payload : "";
            }
          );

        

    },
});

export default receiptsReducer.reducer;
