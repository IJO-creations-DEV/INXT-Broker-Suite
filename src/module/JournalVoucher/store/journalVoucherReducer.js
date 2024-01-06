import { createSlice } from "@reduxjs/toolkit";
import { getJournalVoucherSearchList, journalVoucherMiddleware, journalVoucherPostTabel, journalVoucherPostTabelData, patchJVMiddleware, postAddJournalVoucher, postJournalVoucher, postTCJournalVoucher } from "./journalVoucherMiddleware";

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
      entryType: "credit"
    },
    {
      id: 2,
      mainAccount: "main0123",
      subAccount: "sub0123",
      branchCode: "branch88",
      currencyCode: "cu77",
      foreignAmount: "800",
      localAmount: '600',
      entryType: "debit"
    }
  ],

  journalVoucherList: [
    {
      id: 1,
      transationCode: "0102",
      totalCredit: "ayesha",
      totalDebit: "payload?.totalDebit",
      transationDescription: " payload?.transationDescription",
      date: '10/10/2023',
    },
    {
      id: 2,
      transationCode: "022",
      totalCredit: "sindhu",
      totalDebit: "payload?.totalDebit",
      transationDescription: " payload?.transationDescription",
      date: '10/10/2023',
    }

  ],
};
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
      const newItem2 = { ...action.payload, id: nextId2++ };
      state.journalVoucherList = [...state.journalVoucherList, newItem2];
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
      state.loading = false;
      state.journalVoucherSearchList = action.payload;
      console.log(state.journalVoucherSearchList, "data")
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
        const newItem = { ...action.payload, id: nextId++ };
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





  },
});

export default journalVoucherReducer.reducer;
