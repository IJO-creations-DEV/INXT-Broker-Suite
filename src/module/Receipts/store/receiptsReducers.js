import { createSlice } from "@reduxjs/toolkit";
import { getReceiptsListMiddleware, getReceiptsListByIdMiddleware, getReceiptsReceivableMiddleware, postAddReceiptsMiddleware, postPaymentDetailsMiddleware, patchReceipEditMiddleware, getReceiptsListBySearchMiddleware, getPaymentDetails } from "./receiptsMiddleware";
import SvgIconeye from "../../../assets/icons/SvgIconeye";
const initialState = {
  loading: false,
  error: "",
  receiptsTableList: [
    {
      id: 1,
      receiptNumber: "01Rep012302",
      transactionCode: "123456",
      transactionNumber: 1145,
      name: "John",
      customerCode: "CC0102",
      date: "11/12/2023",
      amount: "500.37",
      action: "Action",
    },
    {
      id: 2,
      receiptNumber: "01Rep012302",
      transactionCode: "123456",
      transactionNumber: 1245,
      name: "John",
      customerCode: "CC0102",
      date: "11/12/2023",
      amount: "500.37",
      action: "Action",
    },

  ],
  receiptsSearchTable: [],
  receivableTableList: [
    {
      id: 1,
      policies: "Motor",
      netPremium: "4000.00",
      paid: "000.00",
      unPaid: "4000.00",
      discounts: "200.00",
      dst: "200.00",
      lgt: "200.00",
      vat: "200.00",
      other: "200.00",
      fcAmount: "00.00",
      lcAmount: "00.00"
    },
    {
      id: 2,
      policies: "Motor",
      netPremium: "4000.00",
      paid: "100.00",
      unPaid: "4000.00",
      discounts: "200.00",
      dst: "200.00",
      lgt: "200.00",
      vat: "200.00",
      other: "200.00",
      fcAmount: "00.00",
      lcAmount: "00.00"
    },

  ],
  receiptDetailList: [
    {
      id: 1,
      policies: "Motor",
      netPremium: "4000.00",
      paid: "000.00",
      unPaid: "4000.00",
      discounts: "200.00",
      dst: "200.00",
      lgt: "200.00",
      vat: "200.00",
      ewt: "200.00",
      fcAmount: "00.00",
      lcAmount: "00.00"
    },
    {
      id: 2,
      policies: "Motor",
      netPremium: "4000.00",
      paid: "000.00",
      unPaid: "4000.00",
      discounts: "200.00",
      dst: "200.00",
      lgt: "200.00",
      vat: "200.00",
      ewt: "200.00",
      fcAmount: "00.00",
      lcAmount: "00.00"
    },
  ],
  paymentDetails: {}
  //   // {
  //   //   id: "",
  //   //   totalPayment: "",
  //   //   bankcode: "",
  //   //   bankName: "",
  //   //   bankAccount: "bandAccount123",
  //   //   bankAccountName: "Business Account",
  //   //   paymentType: "Card",
  //   //   cardNumber: "1234 5678 9874 5632",
  //   // }
  // ]
};
let nextId = 3
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
    builder.addCase(getReceiptsListBySearchMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getReceiptsListBySearchMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.receiptsSearchTable = action.payload;
    });
    builder.addCase(getReceiptsListBySearchMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.receiptsSearchTable = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });
    builder.addCase(getReceiptsListByIdMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getReceiptsListByIdMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.receiptDetailList = action.payload;
    });
    builder.addCase(getReceiptsListByIdMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.receiptDetailList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });
    builder.addCase(getReceiptsReceivableMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getReceiptsReceivableMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.receivableTableList = action.payload;
      }
    );
    builder.addCase(
      getReceiptsReceivableMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.receivableTableList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );


    builder.addCase(postAddReceiptsMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postAddReceiptsMiddleware.fulfilled, (state, action) => {
      console.log(action.payload, 'find action.payload')
      state.loading = false;
      const newItem2 = { ...action.payload, id: nextId++ };
      state.receiptsTableList = [...state.receiptsTableList, newItem2];
      console.log(state.receiptsTableList, "paylll")
      // state.receiptsTableList = [...state.receiptsTableList, action.payload];
      // console.log(state.receiptsTableList, "lll");
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

        state.receivableTableList = action.payload;
      }
    );
    builder.addCase(
      patchReceipEditMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.editList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    builder.addCase(getPaymentDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getPaymentDetails.fulfilled,
      (state, action) => {
        state.loading = false;

        state.paymentDetails = action.payload;
      }
    );
    builder.addCase(
      getPaymentDetails.rejected,
      (state, action) => {
        state.loading = false;

        state.paymentDetails = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

  },
});

export default receiptsReducer.reducer;
