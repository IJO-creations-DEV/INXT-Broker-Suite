import { createSlice } from "@reduxjs/toolkit";
import {
  getDisbursmentListMiddleware,
  getDisbursmentSearchMiddleware,
  postAddDisbursmentMiddleware,
  getAddDisbursmentTableMiddleware,
  postEditDisbursmentMiddleware,
  getViewDisbursmentMiddleware,
} from "./pettyCashDisbursementMiddleware";
const initialState = {
  loading: false,
  error: "",
  DisbursmentList: [
    {
      id: 1,
      PettycashCode: "PCC0234",
      Transactioncode: "Trans00123",
      TransactionNumber: "00234",
      Branchcode: "Branch00234",
      Departmentcode: "Depart00234",
      Date: "14/04/2023",
    },
    {
      id: 2,
      PettycashCode: "PCC0456",
      Transactioncode: "Trans00456",
      TransactionNumber: "00456",
      Branchcode: "Branch00456",
      Departmentcode: "Depart00456",
      Date: "15/09/2023",
    },
    {
      id: 3,
      PettycashCode: "PCC0789",
      Transactioncode: "Trans00789",
      TransactionNumber: "00789",
      Branchcode: "Branch00789",
      Departmentcode: "Depart00789",
      Date: "02/05/2023",
    },
    {
      id: 4,
      PettycashCode: "PCC0987",
      Transactioncode: "Trans00987",
      TransactionNumber: "00987",
      Branchcode: "Branch00987",
      Departmentcode: "Depart00987",
      Date: "19/11/2023",
    },
    {
      id: 5,
      PettycashCode: "PCC0654",
      Transactioncode: "Trans00654",
      TransactionNumber: "00654",
      Branchcode: "Branch00654",
      Departmentcode: "Depart00654",
      Date: "28/07/2023",
    },
    {
      id: 6,
      PettycashCode: "PCC0321",
      Transactioncode: "Trans00321",
      TransactionNumber: "00321",
      Branchcode: "Branch00321",
      Departmentcode: "Depart00321",
      Date: "30/10/2023",
    },
    {
      id: 7,
      PettycashCode: "PCC0543",
      Transactioncode: "Trans00543",
      TransactionNumber: "00543",
      Branchcode: "Branch00543",
      Departmentcode: "Depart00543",
      Date: "08/02/2023",
    },
    {
      id: 8,
      PettycashCode: "PCC0765",
      Transactioncode: "Trans00765",
      TransactionNumber: "00765",
      Branchcode: "Branch00765",
      Departmentcode: "Depart00765",
      Date: "25/06/2023",
    },
    {
      id: 9,
      PettycashCode: "PCC0890",
      Transactioncode: "Trans00890",
      TransactionNumber: "00890",
      Branchcode: "Branch00890",
      Departmentcode: "Depart00890",
      Date: "12/01/2023",
    },
    {
      id: 10,
      PettycashCode: "PCC0123",
      Transactioncode: "Trans00123",
      TransactionNumber: "00123",
      Branchcode: "Branch00123",
      Departmentcode: "Depart00123",
      Date: "21/12/2023",
    },
  ],
  DisbursmentSearch: [],
  AddDisbursment: {},
  AddDisbursmentTable: [
    {
      id: 1,
      PettycashCode: "PCC0123",
      RequestNumber: "10000",
      RequesterName: "Shanmu",
      Branchcode: "Branch00123",
      Departmentcode: "Depart00123",
      TotalAmount: "100",
      Date: "21/12/2023",
    },
    {
      id: 2,
      PettycashCode: "PCC0456",
      RequestNumber: "20000",
      RequesterName: "Mani",
      Branchcode: "Branch00456",
      Departmentcode: "Depart00456",
      TotalAmount: "100",
      Date: "15/11/2023",
    },
  ],
  EditDisbursment: {},
  ViewDisbursment: {},
};
const PettyCashDisbursementReducer = createSlice({
  name: "pettycashdisbursement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDisbursmentListMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDisbursmentListMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.DisbursmentList = action.payload;
    });
    builder.addCase(getDisbursmentListMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.DisbursmentList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //DisbursmentSearch

    builder.addCase(getDisbursmentSearchMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getDisbursmentSearchMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.DisbursmentSearch = action.payload;
      }
    );
    builder.addCase(
      getDisbursmentSearchMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.DisbursmentSearch = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    // AddDisbursment

    builder.addCase(postAddDisbursmentMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postAddDisbursmentMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      // state.AddDisbursment = action.payload;
      state.DisbursmentList = [...state.DisbursmentList, action.payload];
    });
    builder.addCase(postAddDisbursmentMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.AddDisbursment = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //AddDisbursmentTable

    builder.addCase(getAddDisbursmentTableMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAddDisbursmentTableMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.AddDisbursmentTable = action.payload;
      }
    );
    builder.addCase(
      getAddDisbursmentTableMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.AddDisbursmentTable = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //EditDisbursment

    builder.addCase(postEditDisbursmentMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postEditDisbursmentMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        console.log(state.AddDisbursmentTable, "state.AddDisbursmentTable");
        const updatedIndex = state.AddDisbursmentTable.findIndex(
          (item) => item.id === action.payload.id
        );
        if (updatedIndex !== -1) {
          const updatedAddDisbursmentTable = [...state.AddDisbursmentTable];
          updatedAddDisbursmentTable[updatedIndex] = action.payload;
          state.AddDisbursmentTable = updatedAddDisbursmentTable;
        } else {
          state.AddDisbursmentTable = [...state.AddDisbursmentTable, action.payload];
        }
      }
    );

    builder.addCase(postEditDisbursmentMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.EditDisbursment = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //ViewDisbursment

    builder.addCase(getViewDisbursmentMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getViewDisbursmentMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.ViewDisbursment = action.payload;
    });
    builder.addCase(getViewDisbursmentMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.ViewDisbursment = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });
  },
});

export default PettyCashDisbursementReducer.reducer;
