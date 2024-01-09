import { createSlice } from "@reduxjs/toolkit";
import { getBranchListMiddleware, getBranchListByIdMiddleware,postAddBranchMiddleware,patchBranchEditMiddleware,getSearchBranchMiddleware } from "./branchMiddleware";
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
        builder.addCase(getBranchListMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getBranchListMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.branchTableList = action.payload;
        });
        builder.addCase(getBranchListMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.roleTableList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
        builder.addCase(getBranchListByIdMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getBranchListByIdMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.branchDetailList = action.payload;
        });
        builder.addCase(getBranchListByIdMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.branchDetailList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

        builder.addCase(getSearchBranchMiddleware.pending, (state) => {
          state.loading = true;
      });
      builder.addCase(getSearchBranchMiddleware.fulfilled, (state, action) => {
          state.loading = false;
          state.branchDetailList = action.payload;
      });
      builder.addCase(getSearchBranchMiddleware.rejected, (state, action) => {
          state.loading = false;

          state.branchDetailList = {};
          state.error = typeof action.payload === "string" ? action.payload : "";
      });
     
     

          builder.addCase(postAddBranchMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(postAddBranchMiddleware.fulfilled, (state, action) => {
            console.log(action.payload,'find action.payload')
            state.loading = false;
            state.branchTableList = [...state.receiptsTableList, action.payload];
          });
          builder.addCase(postAddBranchMiddleware.rejected, (state, action) => {
            state.loading = false;
       
            //   state.paymentVocherList = state.paymentVocherList;
            state.error = typeof action.payload === "string" ? action.payload : "";
          });

      
          builder.addCase(patchBranchEditMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(
            patchBranchEditMiddleware.fulfilled,
            (state, action) => {
              state.loading = false;
            
              state.branchTableList = action.payload;
            }
          );
          builder.addCase(
            patchBranchEditMiddleware.rejected,
            (state, action) => {
              state.loading = false;
      
              state.branchList = {};
              state.error = typeof action.payload === "string" ? action.payload : "";
            }
          );

    },
});

export default receiptsReducer.reducer;
