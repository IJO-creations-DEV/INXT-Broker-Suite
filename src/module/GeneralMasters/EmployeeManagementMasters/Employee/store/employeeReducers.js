import { createSlice } from "@reduxjs/toolkit";
import { getEmployeeListMiddleware, getEmployeeListByIdMiddleware,postAddEmployeeMiddleware,patchEmployeeEditMiddleware,getSearchEmployeeMiddleware } from "./employeeMiddleware";
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
        builder.addCase(getEmployeeListMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getEmployeeListMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.employeeTableList = action.payload;
        });
        builder.addCase(getEmployeeListMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.employeeTableList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
        builder.addCase(getEmployeeListByIdMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getEmployeeListByIdMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.employeeDetailList = action.payload;
        });
        builder.addCase(getEmployeeListByIdMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.employeeDetailList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

        builder.addCase(getSearchEmployeeMiddleware.pending, (state) => {
          state.loading = true;
      });
      builder.addCase(getSearchEmployeeMiddleware.fulfilled, (state, action) => {
          state.loading = false;
          state.employeeDetailList = action.payload;
      });
      builder.addCase(getSearchEmployeeMiddleware.rejected, (state, action) => {
          state.loading = false;

          state.employeeDetailList = {};
          state.error = typeof action.payload === "string" ? action.payload : "";
      });
     
     

          builder.addCase(postAddEmployeeMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(postAddEmployeeMiddleware.fulfilled, (state, action) => {
            console.log(action.payload,'find action.payload')
            state.loading = false;
            state.employeeTableList = [...state.receiptsTableList, action.payload];
          });
          builder.addCase(postAddEmployeeMiddleware.rejected, (state, action) => {
            state.loading = false;
       
            //   state.paymentVocherList = state.paymentVocherList;
            state.error = typeof action.payload === "string" ? action.payload : "";
          });

      
          builder.addCase(patchEmployeeEditMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(
            patchEmployeeEditMiddleware.fulfilled,
            (state, action) => {
              state.loading = false;
            
              state.employeeTableList = action.payload;
            }
          );
          builder.addCase(
            patchEmployeeEditMiddleware.rejected,
            (state, action) => {
              state.loading = false;
      
              state.editList = {};
              state.error = typeof action.payload === "string" ? action.payload : "";
            }
          );

    },
});

export default receiptsReducer.reducer;
