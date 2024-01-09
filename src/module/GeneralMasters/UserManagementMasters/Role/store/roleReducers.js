import { createSlice } from "@reduxjs/toolkit";
import { getRoleListMiddleware, getRoleListByIdMiddleware,postAddRoleMiddleware,patchRoleEditMiddleware,getSearchRoleMiddleware } from "./roleMiddleware";
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
        builder.addCase(getRoleListMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getRoleListMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.roleTableList = action.payload;
        });
        builder.addCase(getRoleListMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.roleTableList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
        builder.addCase(getRoleListByIdMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getRoleListByIdMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.roleDetailList = action.payload;
        });
        builder.addCase(getRoleListByIdMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.roleDetailList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

        builder.addCase(getSearchRoleMiddleware.pending, (state) => {
          state.loading = true;
      });
      builder.addCase(getSearchRoleMiddleware.fulfilled, (state, action) => {
          state.loading = false;
          state.roleDetailList = action.payload;
      });
      builder.addCase(getSearchRoleMiddleware.rejected, (state, action) => {
          state.loading = false;

          state.roleDetailList = {};
          state.error = typeof action.payload === "string" ? action.payload : "";
      });
     
     

          builder.addCase(postAddRoleMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(postAddRoleMiddleware.fulfilled, (state, action) => {
            console.log(action.payload,'find action.payload')
            state.loading = false;
            state.roleTableList = [...state.receiptsTableList, action.payload];
          });
          builder.addCase(postAddRoleMiddleware.rejected, (state, action) => {
            state.loading = false;
       
            //   state.paymentVocherList = state.paymentVocherList;
            state.error = typeof action.payload === "string" ? action.payload : "";
          });

      
          builder.addCase(patchRoleEditMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(
            patchRoleEditMiddleware.fulfilled,
            (state, action) => {
              state.loading = false;
            
              state.roleTableList = action.payload;
            }
          );
          builder.addCase(
            patchRoleEditMiddleware.rejected,
            (state, action) => {
              state.loading = false;
      
              state.editList = {};
              state.error = typeof action.payload === "string" ? action.payload : "";
            }
          );

    },
});

export default receiptsReducer.reducer;
