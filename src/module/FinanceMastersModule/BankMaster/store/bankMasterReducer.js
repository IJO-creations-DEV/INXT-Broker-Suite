import { createSlice } from "@reduxjs/toolkit";
import {
  getBankList,
  getBankSearchList,
  postBankStatus,
  getAddBank,
  patchBankDetailEdit,
  getBankDetailView,
  postAddBank
} from "./bankMasterMiddleware";
import SvgArrow from "../../../../assets/icons/SvgArrow";
const initialState = {
  loading: false,
  error: "",
  BankList: [
    {
      id: 1,
      bankCode: 'Bank42588',
      // code: <SvgArrow />,
      bankName: 'Johnson Finance',
      bankBranch: 'East Sarahburgh',
      ifscCode: 'mb78901',
      email: 'justin@gmail.com',
      status: true,
      mobile: 9791669887
    },
    {
      id: 2,
      bankCode: 'Bank12345',
      // code: <SvgArrow />,
      bankName: 'Miller Investments',
      bankBranch: 'Port Karlibury',
      ifscCode: 'mb23456',
      email: 'alex@example.com',
      status: false,
      mobile: 9791669887

    },
    {
      id: 3,
      bankCode: 'Bank78901',
      // code: <SvgArrow />,
      bankName: 'Smith and Sons Banking',
      bankBranch: 'New Danielhaven',
      ifscCode: 'mb56789',
      email: 'emma@gmail.com',
      status: true,
      mobile: 9791669887

    },
    {
      id: 3,
      bankCode: 'Bank23456',
      // code: <SvgArrow />,
      bankName: 'Johnson Finance',
      bankBranch: 'West Alexfort',
      ifscCode: 'mb12345',
      email: 'john@example.com',
      status: false,
      mobile: 9791669887

    },
    {
      id: 4,
      bankCode: 'Bank67890',
      // code: <SvgArrow />,
      bankName: 'Miller Investments',
      bankBranch: 'East Sarahburgh',
      ifscCode: 'mb34567',
      email: 'lisa@gmail.com',
      status: true,
      mobile: 9791669887

    },
    {
      id: 5,
      bankCode: 'Bank78912',
      // code: <SvgArrow />,
      bankName: 'Smith and Sons Banking',
      bankBranch: 'Port Karlibury',
      ifscCode: 'mb89012',
      email: 'michael@example.com',
      status: false, mobile: 9791669887

    },
    {
      id: 6,
      bankCode: 'Bank34567',
      // code: <SvgArrow />,
      bankName: 'Johnson Finance',
      bankBranch: 'West Alexfort',
      ifscCode: 'mb45678',
      email: 'olivia@gmail.com',
      status: true,
      mobile: 9791669887

    },
    {
      id: 7,
      bankCode: 'Bank89012',
      // code: <SvgArrow />,
      bankName: 'Miller Investments',
      bankBranch: 'New Danielhaven',
      ifscCode: 'mb56789',
      email: 'sophia@example.com',
      status: false, mobile: 9791669887


    },
    {
      id: 8,
      bankCode: 'Bank45678',
      // code: <SvgArrow />,
      bankName: 'Smith and Sons Banking',
      bankBranch: 'East Sarahburgh',
      ifscCode: 'mb23456',
      email: 'william@gmail.com',
      status: true,
      mobile: 9791669887

    },
    {
      id: 9,
      bankCode: 'Bank56789',
      // code: <SvgArrow />,
      bankName: 'Johnson Finance',
      bankBranch: 'Port Karlibury',
      ifscCode: 'mb78901',
      email: 'ava@example.com',
      status: false,
      mobile: 9791669887

    },
    {
      id: 10,
      bankCode: 'Bank89012',
      // code: <SvgArrow />,
      bankName: 'Miller Investments',
      bankBranch: 'West Alexfort',
      ifscCode: 'mb34567',
      email: 'james@gmail.com',
      status: true,
      mobile: 9791669887

    },
  ]
  ,
  BankAccountList: [

  ],
  BankSearchList: [],
  BankStatus: {},
  AddBank: {},
  PostAddBank: {},
  BankDetailEdit: {},
  BankDetailView: {}
};
const bankMasterReducer = createSlice({
  name: "bankMaster",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    //BankList

    builder.addCase(getBankList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getBankList.fulfilled,
      (state, action) => {
        state.loading = false;
        state.BankList = action.payload;
      }
    );
    builder.addCase(
      getBankList.rejected,
      (state, action) => {
        state.loading = false;

        state.BankList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //BankSearchList

    builder.addCase(getBankSearchList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getBankSearchList.fulfilled,
      (state, action) => {
        state.loading = false;
        state.BankSearchList = action.payload;
      }
    );
    builder.addCase(
      getBankSearchList.rejected,
      (state, action) => {
        state.loading = false;

        state.BankSearchList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //BankStatus

    builder.addCase(postBankStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postBankStatus.fulfilled,
      (state, action) => {
        state.loading = false;
        state.BankStatus = action.payload;
      }
    );
    builder.addCase(
      postBankStatus.rejected,
      (state, action) => {
        state.loading = false;

        state.BankStatus = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //AddBank

    builder.addCase(getAddBank.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAddBank.fulfilled,
      (state, action) => {
        state.loading = false;
        // state.AddBank = action.payload;
        state.BankList = [...state.BankList, action.payload];
      }
    );
    builder.addCase(
      getAddBank.rejected,
      (state, action) => {
        state.loading = false;

        state.AddBank = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //PostAdd

    builder.addCase(postAddBank.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postAddBank.fulfilled,
      (state, action) => {
        state.loading = false;
        state.BankList = [...state.BankList, action.payload];
      }
    );
    builder.addCase(
      postAddBank.rejected,
      (state, action) => {
        state.loading = false;

        state.PostAddBank = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //BankDetailEdit

    builder.addCase(patchBankDetailEdit.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchBankDetailEdit.fulfilled,
      (state, action) => {
        state.loading = false;
        console.log(state.BankList, "state.BankList");
        const updatedIndex = state.BankList.findIndex(
          (item) => item.id === action.payload.id // The comparison here might need adjustment
        );
        if (updatedIndex !== -1) {
          const updatedBankList = [...state.BankList];
          updatedBankList[updatedIndex] = action.payload;
          state.BankList = updatedBankList;
        } else {
          state.BankList = [...state.BankList, action.payload];
        }
      }
    );

    builder.addCase(
      patchBankDetailEdit.rejected,
      (state, action) => {
        state.loading = false;

        state.BankDetailEdit = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //BankDetailView

    builder.addCase(getBankDetailView.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getBankDetailView.fulfilled,
      (state, action) => {
        state.loading = false;
        state.BankDetailView = action.payload;
      }
    );
    builder.addCase(
      getBankDetailView.rejected,
      (state, action) => {
        state.loading = false;

        state.BankDetailView = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
  },
});

export default bankMasterReducer.reducer;