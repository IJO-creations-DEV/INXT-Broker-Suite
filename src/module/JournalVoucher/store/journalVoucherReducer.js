import { createSlice } from "@reduxjs/toolkit";
import { journalVoucherMiddleware } from "./journalVoucherMiddleware";

const initialState = {
  loading: false,
  error: "",
  journalVoucherList: [
    {
      id: 1,
      tc: '0102',
      tn: 'Johnson',
      date: '10/10/2023',
      view: ''
    },
    {
      id: 2,
      tc: '0102',
      tn: 'Johnson',
      date: '10/10/2023',
      view: ''
    },
    {
      id: 3,
      tc: '0102',
      tn: 'Johnson',
      date: '10/10/2023',
      view: ''
    },
    {
      id: 4,
      tc: '0102',
      tn: 'Johnson',
      date: '10/10/2023',
      view: ''
    },
    {
      id: 5,
      tc: '0102',
      tn: 'Johnson',
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
  },
});

export default journalVoucherReducer.reducer;
