import { createSlice } from "@reduxjs/toolkit";
import { getJournalVoucherSearchList, journalVoucherMiddleware, journalVoucherPostTabel, journalVoucherPostTabelData, postAddJournalVoucher, postJournalVoucher } from "./journalVoucherMiddleware";

const initialState = {
  loading: false,
  error: "",
  postAddJV: {},
  addJournalVoucher: {},
  journalVoucherSearchList: [],
  journalVoucherView: {},
  journalVoucherPostTabelData: [
    {
      id: 1,
      mainAccount: "main0123",
      subAccount: "sub0123",
      branchCode: "branch012",
      currencyCode: "cu123",
      foreignAmount: "500",
      entryType: "credit"
    }
  ],

  journalVoucherList: [
    {
      id: 1,
      tc: '0102',
      tn: 'ayesha',
      date: '10/10/2023',
      view: ''
    },
    {
      id: 2,
      tc: '0102',
      tn: 'sindhu',
      date: '10/10/2023',
      view: ''
    },
    {
      id: 3,
      tc: '0102',
      tn: 'manoj',
      date: '10/10/2023',
      view: ''
    },
    {
      id: 4,
      tc: '0102',
      tn: 'youraj',
      date: '10/10/2023',
      view: ''
    },
    {
      id: 5,
      tc: '0102',
      tn: 'paniyan',
      date: '10/10/2023',
      view: ''
    },
    {
      id: 6,
      tc: '0102',
      tn: 'Johnson',
      date: '10/10/2023',
      view: ''
    },
  ],
};
let nextId = 2;
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
      state.journalVoucherList = action.payload.data;
    });
    builder.addCase(journalVoucherMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.journalVoucherList = {};
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


    //post

    builder.addCase(postJournalVoucher.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postJournalVoucher.fulfilled, (state, action) => {
      state.loading = false;
      state.addJournalVoucher = action.payload.data;
    });
    builder.addCase(postJournalVoucher.rejected, (state, action) => {
      state.loading = false;

      state.addJournalVoucher = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });
  },
});

export default journalVoucherReducer.reducer;
