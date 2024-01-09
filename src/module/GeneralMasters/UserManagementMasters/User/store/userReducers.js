import { createSlice } from "@reduxjs/toolkit";
import { getUserListMiddleware, getUserListByIdMiddleware,postAddUserMiddleware,patchUserEditMiddleware,getSearchUserMiddleware,getBranchAddUserMiddleware } from "./userMiddleware";
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
        builder.addCase(getUserListMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getUserListMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.userTableList = action.payload;
        });
        builder.addCase(getUserListMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.userTableList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
        builder.addCase(getUserListByIdMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getUserListByIdMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.userDetailList = action.payload;
        });
        builder.addCase(getUserListByIdMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.userDetailList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

        builder.addCase(getSearchUserMiddleware.pending, (state) => {
          state.loading = true;
      });
      builder.addCase(getSearchUserMiddleware.fulfilled, (state, action) => {
          state.loading = false;
          state.userDetailList = action.payload;
      });
      builder.addCase(getSearchUserMiddleware.rejected, (state, action) => {
          state.loading = false;

          state.userDetailList = {};
          state.error = typeof action.payload === "string" ? action.payload : "";
      });
     
     

          builder.addCase(postAddUserMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(postAddUserMiddleware.fulfilled, (state, action) => {
            console.log(action.payload,'find action.payload')
            state.loading = false;
            state.userTableList = [...state.receiptsTableList, action.payload];
          });
          builder.addCase(postAddUserMiddleware.rejected, (state, action) => {
            state.loading = false;
       
            //   state.paymentVocherList = state.paymentVocherList;
            state.error = typeof action.payload === "string" ? action.payload : "";
          });

      
          builder.addCase(patchUserEditMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(
            patchUserEditMiddleware.fulfilled,
            (state, action) => {
              state.loading = false;
            
              state.userTableList = action.payload;
            }
          );
          builder.addCase(
            patchUserEditMiddleware.rejected,
            (state, action) => {
              state.loading = false;
      
              state.editList = {};
              state.error = typeof action.payload === "string" ? action.payload : "";
            }
          );

          builder.addCase(getBranchAddUserMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(
            getBranchAddUserMiddleware.fulfilled,
            (state, action) => {
              state.loading = false;
            
              state.userTableList = action.payload;
            }
          );
          builder.addCase(
            getBranchAddUserMiddleware.rejected,
            (state, action) => {
              state.loading = false;
      
              state.editList = {};
              state.error = typeof action.payload === "string" ? action.payload : "";
            }
          );

    },
});

export default receiptsReducer.reducer;
