import { createSlice } from "@reduxjs/toolkit";
import { getDesinationListMiddleware, getDesignationListByIdMiddleware,postAddDesignationMiddleware,patchDesignationEditMiddleware,getSearchDesignationMiddleware } from "./designationMiddleware";
import SvgIconeye from "../../../assets/icons/SvgIconeye";
const initialState = {
    loading: false,
    error: "",
    // receiptsTableList:[
    //     {
    //         id: 1,
    //         receiptNumber: "01Rep012302",
    //         transactionCode: "123456",
    //         transactionNumber: "Transac00123",
    //         name: "Name",
    //         customerCode: "CC0102",
    //         date: "11/12/2023",
    //         amount: "500.37",
    //         action: "Action",
    //       },
    //       {
    //         id: 2,
    //         receiptNumber: "01Rep012302",
    //         transactionCode: "123456",
    //         transactionNumber: "Transac00123",
    //         name: "Name",
    //         customerCode: "CC0102",
    //         date: "11/12/2023",
    //         amount: "500.37",
    //         action: "Action",
    //       },
    //       {
    //         id: 3,
    //         receiptNumber: "01Rep012302",
    //         transactionCode: "123456",
    //         transactionNumber: "Transac00123",
    //         name: "Name",
    //         customerCode: "CC0102",
    //         date: "11/12/2023",
    //         amount: "500.37",
    //         action: "Action",
    //       },
    //       {
    //         id: 4,
    //         receiptNumber: "01Rep012303",
    //         transactionCode: "123457",
    //         transactionNumber: "Transac00124",
    //         name: "Name",
    //         customerCode: "CC0102",
    //         date: "11/12/2023",
    //         amount: "500.37",
    //         action: "Action",
    //       },
    //       {
    //         id: 5,
    //         receiptNumber: "01Rep012307",
    //         transactionCode: "123456",
    //         transactionNumber: "Transac00129",
    //         name: "Name",
    //         customerCode: "CC0102",
    //         date: "11/12/2023",
    //         amount: "500.37",
    //         action: "Action",
    //       },
    //       {
    //         id: 6,
    //         receiptNumber: "01Rep012307",
    //         transactionCode: "123456",
    //         transactionNumber: "Transac00123",
    //         name: "Name",
    //         customerCode: "CC0102",
    //         date: "11/12/2023",
    //         amount: "500.37",
    //         action: "Action",
    //       },
    //       {
    //         id: 7,
    //         receiptNumber: "01Rep012302",
    //         transactionCode: "123456",
    //         transactionNumber: "Transac00123",
    //         name: "Name",
    //         customerCode: "CC0102",
    //         date: "11/12/2023",
    //         amount: "500.37",
    //         action: "Action",
    //       },
    //       {
    //         id: 8,
    //         receiptNumber: "01Rep012301",
    //         transactionCode: "123456",
    //         transactionNumber: "Transac00123",
    //         name: "Name",
    //         customerCode: "CC0102",
    //         date: "11/12/2023",
    //         amount: "500.37",
    //         action: "Action",
    //       },
    //       {
    //         id: 9,
    //         receiptNumber: "01Rep012302",
    //         transactionCode: "123456",
    //         transactionNumber: "Transac00123",
    //         name: "Name",
    //         customerCode: "CC0102",
    //         date: "11/12/2023",
    //         amount: "500.37",
    //         action: "Action",
    //       },
    //       {
    //         id: 10,
    //         receiptNumber: "01Rep012302",
    //         transactionCode: "123456",
    //         transactionNumber: "Transac00123",
    //         name: "Name",
    //         customerCode: "CC0102",
    //         date: "11/12/2023",
    //         amount: "500.37",
    //         action: "Action",
    //       },
    // ],
};
const receiptsReducer = createSlice({
    name: "designation",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDesinationListMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getDesinationListMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.designationTableList = action.payload;
        });
        builder.addCase(getDesinationListMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.receiptsTableList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
        builder.addCase(getDesignationListByIdMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getDesignationListByIdMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.designationDetailList = action.payload;
        });
        builder.addCase(getDesignationListByIdMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.designationDetailList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

        builder.addCase(getSearchDesignationMiddleware.pending, (state) => {
          state.loading = true;
      });
      builder.addCase(getSearchDesignationMiddleware.fulfilled, (state, action) => {
          state.loading = false;
          state.designationDetailList = action.payload;
      });
      builder.addCase(getSearchDesignationMiddleware.rejected, (state, action) => {
          state.loading = false;

          state.designationDetailList = {};
          state.error = typeof action.payload === "string" ? action.payload : "";
      });
     
     

          builder.addCase(postAddDesignationMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(postAddDesignationMiddleware.fulfilled, (state, action) => {
            console.log(action.payload,'find action.payload')
            state.loading = false;
            state.designationTableList = [...state.receiptsTableList, action.payload];
          });
          builder.addCase(postAddDesignationMiddleware.rejected, (state, action) => {
            state.loading = false;
       
            //   state.paymentVocherList = state.paymentVocherList;
            state.error = typeof action.payload === "string" ? action.payload : "";
          });

      
          builder.addCase(patchDesignationEditMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(
            patchDesignationEditMiddleware.fulfilled,
            (state, action) => {
              state.loading = false;
            
              state.designationTableList = action.payload;
            }
          );
          builder.addCase(
            patchDesignationEditMiddleware.rejected,
            (state, action) => {
              state.loading = false;
      
              state.editList = {};
              state.error = typeof action.payload === "string" ? action.payload : "";
            }
          );

    },
});

export default receiptsReducer.reducer;
