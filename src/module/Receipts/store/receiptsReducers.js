import { createSlice } from "@reduxjs/toolkit";
import { getReceiptsListMiddleware, getReceiptsListByIdMiddleware,getReceiptsReceivableMiddleware,postAddReceiptsMiddleware,postPaymentDetailsMiddleware,patchReceipEditMiddleware } from "./receiptsMiddleware";
import SvgIconeye from "../../../assets/icons/SvgIconeye";
const initialState = {
    loading: false,
    error: "",
    receiptsTableList:[
        {
            id: 1,
            receiptNumber: "01Rep012302",
            transactionCode: "123456",
            transactionNumber: "Transac00123",
            name: "Name",
            customerCode: "CC0102",
            date: "11/12/2023",
            amount: "500.37",
            action: "Action",
          },
          // {
          //   id: 2,
          //   receiptNumber: "01Rep012302",
          //   transactionCode: "123456",
          //   transactionNumber: "Transac00123",
          //   name: "Name",
          //   customerCode: "CC0102",
          //   date: "11/12/2023",
          //   amount: "500.37",
          //   action: "Action",
          // },
          // {
          //   id: 3,
          //   receiptNumber: "01Rep012302",
          //   transactionCode: "123456",
          //   transactionNumber: "Transac00123",
          //   name: "Name",
          //   customerCode: "CC0102",
          //   date: "11/12/2023",
          //   amount: "500.37",
          //   action: "Action",
          // },
          // {
          //   id: 4,
          //   receiptNumber: "01Rep012303",
          //   transactionCode: "123457",
          //   transactionNumber: "Transac00124",
          //   name: "Name",
          //   customerCode: "CC0102",
          //   date: "11/12/2023",
          //   amount: "500.37",
          //   action: "Action",
          // },
          // {
          //   id: 5,
          //   receiptNumber: "01Rep012307",
          //   transactionCode: "123456",
          //   transactionNumber: "Transac00129",
          //   name: "Name",
          //   customerCode: "CC0102",
          //   date: "11/12/2023",
          //   amount: "500.37",
          //   action: "Action",
          // },
          // {
          //   id: 6,
          //   receiptNumber: "01Rep012307",
          //   transactionCode: "123456",
          //   transactionNumber: "Transac00123",
          //   name: "Name",
          //   customerCode: "CC0102",
          //   date: "11/12/2023",
          //   amount: "500.37",
          //   action: "Action",
          // },
          // {
          //   id: 7,
          //   receiptNumber: "01Rep012302",
          //   transactionCode: "123456",
          //   transactionNumber: "Transac00123",
          //   name: "Name",
          //   customerCode: "CC0102",
          //   date: "11/12/2023",
          //   amount: "500.37",
          //   action: "Action",
          // },
          // {
          //   id: 8,
          //   receiptNumber: "01Rep012301",
          //   transactionCode: "123456",
          //   transactionNumber: "Transac00123",
          //   name: "Name",
          //   customerCode: "CC0102",
          //   date: "11/12/2023",
          //   amount: "500.37",
          //   action: "Action",
          // },
          // {
          //   id: 9,
          //   receiptNumber: "01Rep012302",
          //   transactionCode: "123456",
          //   transactionNumber: "Transac00123",
          //   name: "Name",
          //   customerCode: "CC0102",
          //   date: "11/12/2023",
          //   amount: "500.37",
          //   action: "Action",
          // },
          // {
          //   id: 10,
          //   receiptNumber: "01Rep012302",
          //   transactionCode: "123456",
          //   transactionNumber: "Transac00123",
          //   name: "Name",
          //   customerCode: "CC0102",
          //   date: "11/12/2023",
          //   amount: "500.37",
          //   action: "Action",
          // },
    ]
 
};
const receiptsReducer = createSlice({
    name: "receipts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getReceiptsListMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getReceiptsListMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.receiptsTableList = action.payload;
        });
        builder.addCase(getReceiptsListMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.receiptsTableList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
        builder.addCase(getReceiptsListByIdMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getReceiptsListByIdMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.receiptsTableList = action.payload;
        });
        builder.addCase(getReceiptsListByIdMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.receiptsTableList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
        builder.addCase(getReceiptsReceivableMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(
            getReceiptsReceivableMiddleware.fulfilled,
            (state, action) => {
              state.loading = false;
              state.BankDetailView = action.payload;
            }
          );
          builder.addCase(
            getReceiptsReceivableMiddleware.rejected,
            (state, action) => {
              state.loading = false;
      
              state.getReceiptsReceivableMiddleware = {};
              state.error = typeof action.payload === "string" ? action.payload : "";
            }
          );
        
          builder.addCase(postAddReceiptsMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(postAddReceiptsMiddleware.fulfilled, (state, action) => {
            console.log(action.payload,'find action.payload')
            state.loading = false;
            state.receiptsTableList = [...state.receiptsTableList, action.payload];
          });
          builder.addCase(postAddReceiptsMiddleware.rejected, (state, action) => {
            state.loading = false;
       
            //   state.paymentVocherList = state.paymentVocherList;
            state.error = typeof action.payload === "string" ? action.payload : "";
          });

          builder.addCase(postPaymentDetailsMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(
            postPaymentDetailsMiddleware.fulfilled,
            (state, action) => {
              state.loading = false;
              state.BankDetailView = action.payload;
            }
          );
          builder.addCase(
            postPaymentDetailsMiddleware.rejected,
            (state, action) => {
              state.loading = false;
      
              state.postPaymentDetailsMiddleware = {};
              state.error = typeof action.payload === "string" ? action.payload : "";
            }
          );
          builder.addCase(patchReceipEditMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(
            patchReceipEditMiddleware.fulfilled,
            (state, action) => {
              state.loading = false;
              state.BankDetailView = action.payload;
            }
          );
          builder.addCase(
            patchReceipEditMiddleware.rejected,
            (state, action) => {
              state.loading = false;
      
              state.patchReceipEditMiddleware = {};
              state.error = typeof action.payload === "string" ? action.payload : "";
            }
          );

    },
});

export default receiptsReducer.reducer;
