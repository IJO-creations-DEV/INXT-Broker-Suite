import { createSlice } from "@reduxjs/toolkit";
import {
  getBankList,
  getBankSearchList,
  postBankStatus,
  getAddBank,
  patchBankDetailEdit,
  getBankDetailView,
  postAddBank,
  postAddBankMiddleware,
  postAddAccountDetails,
  getAccountDetailsView,
  getPatchAccountDetailsView,
  postPatchAccountDetailEdit
} from "./bankMasterMiddleware";
import SvgArrow from "../../../../assets/icons/SvgArrow";
const initialState = {
  loading: false,
  error: "",
  BankList: [
    {
      id: 1,
      bankCode: "Bank42588",
      bankName: "Johnson Finance",
      bankBranch: "East Sarahburgh",
      ifscCode: "mb78901",
      AddressLine1: "hydrabad",
      AddressLine2: "channai",
      AddressLine3: "banglore",
      city: "channai",
      state:"Tamil Nadu",
      status: true,
      Country: "india",
      mobile: "9791669887",
      Fax: "",
      email: "justin@gmail.com"
    
    },
    {
      id: 2,
      bankCode: "Bank42588",
      bankName: "Johnson Finance",
      bankBranch: "East Sarahburgh",
      ifscCode: "mb78901",
      AddressLine1: "hydrabad",
      AddressLine2: "channai",
      AddressLine3: "banglore",
      City: "channai",
      state:"Tamil Nadu",
      status: true,
      Country: "india",
      mobile: "9791669887",
      Fax: "",
      email: "justin@gmail.com"

    },
    // {
    //   id:3,
    //   bankCode: 'Bank78901',
    //   // code: <SvgArrow />,
    //   bankName: 'Smith and Sons Banking',
    //   bankBranch: 'New Danielhaven',
    //   ifscCode: 'mb56789',
    //   email: 'emma@gmail.com',
    //   status: true,
    //   mobile: 9791669887

    // },
    // {
    //   bankCode: 'Bank23456',
    //   // code: <SvgArrow />,
    //   bankName: 'Johnson Finance',
    //   bankBranch: 'West Alexfort',
    //   ifscCode: 'mb12345',
    //   email: 'john@example.com',
    //   status: false,
    //   mobile: 9791669887

    // },
    // {
    //   bankCode: 'Bank67890',
    //   // code: <SvgArrow />,
    //   bankName: 'Miller Investments',
    //   bankBranch: 'East Sarahburgh',
    //   ifscCode: 'mb34567',
    //   email: 'lisa@gmail.com',
    //   status: true,
    //   mobile: 9791669887

    // },
    // {
    //   bankCode: 'Bank78912',
    //   // code: <SvgArrow />,
    //   bankName: 'Smith and Sons Banking',
    //   bankBranch: 'Port Karlibury',
    //   ifscCode: 'mb89012',
    //   email: 'michael@example.com',
    //   status: false, mobile: 9791669887

    // },
    // {
    //   bankCode: 'Bank34567',
    //   // code: <SvgArrow />,
    //   bankName: 'Johnson Finance',
    //   bankBranch: 'West Alexfort',
    //   ifscCode: 'mb45678',
    //   email: 'olivia@gmail.com',
    //   status: true,
    //   mobile: 9791669887

    // },
    // {
    //   bankCode: 'Bank89012',
    //   // code: <SvgArrow />,
    //   bankName: 'Miller Investments',
    //   bankBranch: 'New Danielhaven',
    //   ifscCode: 'mb56789',
    //   email: 'sophia@example.com',
    //   status: false, mobile: 9791669887


    // },
    // {
    //   bankCode: 'Bank45678',
    //   // code: <SvgArrow />,
    //   bankName: 'Smith and Sons Banking',
    //   bankBranch: 'East Sarahburgh',
    //   ifscCode: 'mb23456',
    //   email: 'william@gmail.com',
    //   status: true,
    //   mobile: 9791669887

    // },
    // {
    //   bankCode: 'Bank56789',
    //   // code: <SvgArrow />,
    //   bankName: 'Johnson Finance',
    //   bankBranch: 'Port Karlibury',
    //   ifscCode: 'mb78901',
    //   email: 'ava@example.com',
    //   status: false,
    //   mobile: 9791669887

    // },
    // {
    //   bankCode: 'Bank89012',
    //   // code: <SvgArrow />,
    //   bankName: 'Miller Investments',
    //   bankBranch: 'West Alexfort',
    //   ifscCode: 'mb34567',
    //   email: 'james@gmail.com',
    //   status: true,
    //   mobile: 9791669887

    // },
    // {
    //   bankCode: 'Bank12345',
    //   // code: <SvgArrow />,
    //   bankName: 'Smith and Sons Banking',
    //   bankBranch: 'New Danielhaven',
    //   ifscCode: 'mb89012',
    //   email: 'mia@example.com',
    //   status: false,
    //   mobile: 9791669887

    // },
    // {
    //   bankCode: 'Bank23456',
    //   // code: <SvgArrow />,
    //   bankName: 'Johnson Finance',
    //   bankBranch: 'East Sarahburgh',
    //   ifscCode: 'mb45678',
    //   email: 'benjamin@gmail.com',
    //   status: true,
    //   mobile: 9791669887

    // },
    // {
    //   bankCode: 'Bank78901',
    //   // code: <SvgArrow />,
    //   bankName: 'Miller Investments',
    //   bankBranch: 'Port Karlibury',
    //   ifscCode: 'mb12345',
    //   email: 'emma@example.com',
    //   status: false,
    //   mobile: 9791669887

    // },
    // {
    //   bankCode: 'Bank34567',
    //   // code: <SvgArrow />,
    //   bankName: 'Smith and Sons Banking',
    //   bankBranch: 'West Alexfort',
    //   ifscCode: 'mb56789',
    //   email: 'oliver@gmail.com',
    //   status: true,
    //   mobile: 9791669887

    // },
    // {
    //   bankCode: 'Bank89012',
    //   // code: <SvgArrow />,
    //   bankName: 'Johnson Finance',
    //   bankBranch: 'New Danielhaven',
    //   ifscCode: 'mb23456',
    //   email: 'amelia@example.com',
    //   status: false,
    //   mobile: 9791669887

    // },
    // {
    //   bankCode: 'Bank45678',
    //   // code: <SvgArrow />,
    //   bankName: 'Miller Investments',
    //   bankBranch: 'East Sarahburgh',
    //   ifscCode: 'mb78901',
    //   email: 'henry@gmail.com',
    //   status: true,
    //   mobile: 9791669887

    // },
    // {
    //   bankCode: 'Bank56789',
    //   // code: <SvgArrow />,
    //   bankName: 'Smith and Sons Banking',
    //   bankBranch: 'Port Karlibury',
    //   ifscCode: 'mb34567',
    //   email: 'ava@example.com',
    //   status: false,
    //   mobile: 9791669887

    // },
    // {
    //   bankCode: 'Bank12345',
    //   // code: <SvgArrow />,
    //   bankName: 'Johnson Finance',
    //   bankBranch: 'West Alexfort',
    //   ifscCode: 'mb45678',
    //   email: 'jackson@gmail.com',
    //   status: true,
    //   mobile: 9791669887

    // }
  ]
  ,
  AccountDetailsList:[
    {
      id:1,
      AccountNumber: "124",
      AccountName: "ayesha",
      AccountType: "Credit",
      MainAccount: "Main123",
      MainAccountDescription: "MainAccountDescription",
      TransactionLimit: "0",
    },
    {
      id:2,
      AccountNumber: "124",
      AccountName: "ayesha",
      AccountType: "Credit",
      MainAccount: "Main123",
      MainAccountDescription: "MainAccountDescription",
      TransactionLimit: "0",
    }
  ],

  BankAccountList: [

  ],
  accountDetailsView:{},
  BankSearchList: [],
  BankStatus: {},
  AddBank: {},
  PostAddBank: {},
  BankDetailEdit: {},
  BankDetailView: {},
  AccountPatchDetailView:{}
};
let nextId = 3;
let nextId1 = 3;

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

    builder.addCase(postAddBankMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postAddBankMiddleware.fulfilled, (state, action) => {
        state.loading = false;
        const newItem2 = { ...action.payload, id: nextId++ };
        state.BankList = [...state.BankList, newItem2];
        console.log(state.BankList, "BankList")
      }
    );
    builder.addCase(
      postAddBankMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.BankStatus = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );


    builder.addCase(postAddAccountDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postAddAccountDetails.fulfilled, (state, action) => {
        state.loading = false;
        const newItem2 = { ...action.payload, id: nextId1++ };
        state.AccountDetailsList = [...state.AccountDetailsList, newItem2];
        console.log(state.AccountDetailsList, "BankList")
      }
    );
    builder.addCase(
      postAddAccountDetails.rejected,
      (state, action) => {
        state.loading = false;

        // state.BankStatus = {};
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
          (item) => item.id === action.payload.id 
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


    builder.addCase(postPatchAccountDetailEdit.pending, (state) => {
      state.loading = true;
    });
    // builder.addCase(
    //   postPatchAccountDetailEdit.fulfilled,
    //   (state, action) => {
    //     state.loading = false;
    //     console.log(state.AccountDetailsList, "state.BankList");
    //     const updatedIndex = state.AccountDetailsList.findIndex(
    //       (item) => item.id === action.payload.id // The comparison here might need adjustment
    //     );
    //     if (updatedIndex !== -1) {
    //       const updatedBankList = [...state.AccountDetailsList];
    //       updatedBankList[updatedIndex] = action.payload;
    //       state.AccountDetailsList = updatedBankList;
    //     } else {
    //       state.AccountDetailsList = [...state.AccountDetailsList, action.payload];
    //     }
    //   }
    // );
    builder.addCase(
      postPatchAccountDetailEdit.fulfilled,
      (state, action) => {
        state.loading = false;
        const updatedIndex = state.AccountDetailsList.findIndex(
          (item) => item.id === action.payload.id
        );
        if (updatedIndex !== -1) {
          const updatedCurrencyList = [...state.AccountDetailsList];
          updatedCurrencyList[updatedIndex] = action.payload;
          state.AccountDetailsList = updatedCurrencyList;
        } else {
          state.AccountDetailsList = [...state.AccountDetailsList, action.payload];
        }
      }
    );

    builder.addCase(
      postPatchAccountDetailEdit.rejected,
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
    builder.addCase(getPatchAccountDetailsView.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getPatchAccountDetailsView.fulfilled,
      (state, action) => {
        state.loading = false;
        state.AccountPatchDetailView = action.payload;
      }
    );
    builder.addCase(
      getPatchAccountDetailsView.rejected,
      (state, action) => {
        state.loading = false;

        state.AccountPatchDetailView = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    builder.addCase(getAccountDetailsView.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAccountDetailsView.fulfilled,
      (state, action) => {
        state.loading = false;
        state.accountDetailsView = action.payload;
      }
    );
    builder.addCase(
      getAccountDetailsView.rejected,
      (state, action) => {
        state.loading = false;

        state.accountDetailsView = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
  },
});

export default bankMasterReducer.reducer;