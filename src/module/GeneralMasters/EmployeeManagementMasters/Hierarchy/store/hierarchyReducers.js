import { createSlice } from "@reduxjs/toolkit";
import { getHirarchyListMiddleware, getHirarchyListByIdMiddleware,postAddHirarchyMiddleware,patchHirarchyEditMiddleware,getSearchHirarchyMiddleware } from "./hierarchyMiddleware";
import SvgIconeye from "../../../assets/icons/SvgIconeye";
const initialState = {
    loading: false,
    error: "",
};
const receiptsReducer = createSlice({
    name: "designation",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHirarchyListMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getHirarchyListMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.hierarchyTableList = action.payload;
        });
        builder.addCase(getHirarchyListMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.hierarchTableList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
        builder.addCase(getHirarchyListByIdMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getHirarchyListByIdMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.hierarchyDetailList = action.payload;
        });
        builder.addCase(getHirarchyListByIdMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.designationDetailList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

        builder.addCase(getSearchHirarchyMiddleware.pending, (state) => {
          state.loading = true;
      });
      builder.addCase(getSearchHirarchyMiddleware.fulfilled, (state, action) => {
          state.loading = false;
          state.hierarchyDetailList = action.payload;
      });
      builder.addCase(getSearchHirarchyMiddleware.rejected, (state, action) => {
          state.loading = false;

          state.hierarchyDetailList = {};
          state.error = typeof action.payload === "string" ? action.payload : "";
      });
     
     

          builder.addCase(postAddHirarchyMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(postAddHirarchyMiddleware.fulfilled, (state, action) => {
            console.log(action.payload,'find action.payload')
            state.loading = false;
            state.hierarchyTableList = [...state.receiptsTableList, action.payload];
          });
          builder.addCase(postAddHirarchyMiddleware.rejected, (state, action) => {
            state.loading = false;
       
            //   state.paymentVocherList = state.paymentVocherList;
            state.error = typeof action.payload === "string" ? action.payload : "";
          });

      
          builder.addCase(patchHirarchyEditMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(
            patchHirarchyEditMiddleware.fulfilled,
            (state, action) => {
              state.loading = false;
            
              state.hierarchyTableList = action.payload;
            }
          );
          builder.addCase(
            patchHirarchyEditMiddleware.rejected,
            (state, action) => {
              state.loading = false;
      
              state.editList = {};
              state.error = typeof action.payload === "string" ? action.payload : "";
            }
          );

    },
});

export default receiptsReducer.reducer;
