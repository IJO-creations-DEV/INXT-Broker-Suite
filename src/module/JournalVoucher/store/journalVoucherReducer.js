import { createSlice } from "@reduxjs/toolkit";
import { getJournalVoucherSearchList, getJournalVoucherViewData, journalVoucherMiddleware, journalVoucherPostTabel, journalVoucherPostTabelData, patchJVMiddleware, postAddJournalVoucher, postJournalVoucher, postTCJournalVoucher } from "./journalVoucherMiddleware";

const initialState = {
  loading: false,
  error: "",
  postAddJV: {},
  addJournalVoucher: {},
  journalVoucherSearchList: [],
  journalVoucherView: {},
  postTCdata: {},
  journalVoucherPostTabelData: [
    {
      id: 1,
      mainAccount: "main0123",
      subAccount: "sub0123",
      branchCode: "branch012",
      currencyCode: "cu123",
      foreignAmount: "500",
      localAmount: '600',
      entryType: "Credit",
      departmentCode: "departmentCode",
      departmentDescription: "departmentDescription",
      Remarks: "qwerty"
    },
    {
      id: 2,
      mainAccount: "main0123",
      subAccount: "sub0123",
      branchCode: "branch88",
      currencyCode: "cu77",
      foreignAmount: "500",
      localAmount: '600',
      entryType: "Debit",
      departmentCode: "departmentCode",
      departmentDescription: "departmentDescription",
      Remarks: "qwerty"
    }
  ],

  journalVoucherList: [
    {
      id: 1,
      transationCode: "0102",
      transactionNumber: 1145,
      totalDebit: "totalDebit",
      transationDescription: "transation123",
      date: '10/10/2023',
    },
    {
      id: 2,
      transationCode: "022",
      transactionNumber: 1245,
      totalDebit: "payload?.totalDebit",
      transationDescription: "transation89",
      date: '10/10/2023',
    },


  ],
};
let transactionNumber = 1345
let nextId = 2;
let nextId2 = 2
const journalVoucherReducer = createSlice({
  name: "journalVocher",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(journalVoucherMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(journalVoucherMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.journalVoucherList = [action.payload];
    });
    builder.addCase(journalVoucherMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.journalVoucherList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    builder.addCase(postTCJournalVoucher.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postTCJournalVoucher.fulfilled, (state, action) => {
      state.loading = false;
      const newItem2 = { ...action.payload, id: nextId2++, transactionNumber: transactionNumber++ };
      state.journalVoucherList = [...state.journalVoucherList, newItem2];
      console.log(state.journalVoucherList, "state.journalVoucherList ");
    });
    builder.addCase(postTCJournalVoucher.rejected, (state, action) => {
      state.loading = false;

      // state.postTCdata = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    // seach

    builder.addCase(getJournalVoucherSearchList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getJournalVoucherSearchList.fulfilled, (state, action) => {
      console.log(state.journalVoucherSearchList, "dataasd")

      state.loading = false;
      state.journalVoucherSearchList = action.payload;
    });
    builder.addCase(getJournalVoucherSearchList.rejected, (state, action) => {
      state.loading = false;

      state.journalVoucherSearchList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //journalVoucherPostTabelData
    builder.addCase(journalVoucherPostTabel.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(journalVoucherPostTabel.fulfilled, (state, action) => {
      state.loading = false;
      state.journalVoucherPostTabelData = [action.payload];
    });
    builder.addCase(journalVoucherPostTabel.rejected, (state, action) => {
      state.loading = false;

      state.journalVoucherPostTabelData = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    builder.addCase(postAddJournalVoucher.pending, (state) => {
      state.loading = true;
    })
      .addCase(postAddJournalVoucher.fulfilled, (state, action) => {
        state.loading = false;
        const newItem = { ...action.payload, id: nextId++, transactionNumber: transactionNumber++ };
        state.journalVoucherPostTabelData = [...state.journalVoucherPostTabelData, newItem];
      })
      .addCase(postAddJournalVoucher.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      });

    builder.addCase(patchJVMiddleware.pending, (state) => {
      state.loading = true;
    }
    );
    builder.addCase(patchJVMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.journalVoucherPostTabelData = action.payload
    }
    );
    builder.addCase(patchJVMiddleware.rejected, (state, action) => {
      state.loading = false;
      state.error = typeof action.payload === "string" ? action.payload : "";
    }
    );


    builder.addCase(getJournalVoucherViewData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getJournalVoucherViewData.fulfilled, (state, action) => {
      state.loading = false;
      state.journalVoucherView = action.payload;
      console.log(state.journalVoucherView, "state.journalVoucherView ")
    });
    builder.addCase(getJournalVoucherViewData.rejected, (state, action) => {
      state.loading = false;

      state.journalVoucherView = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });





  },
});

export default journalVoucherReducer.reducer;
