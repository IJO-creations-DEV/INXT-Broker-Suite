import { createSlice } from "@reduxjs/toolkit";
import { getMainBranchAccessMiddleWare, getSearchUserMiddleware, getUserEditDataMiddleWare, getUserListByIdMiddleware, getUserMiddleware, getUserViewDataMiddleWare, patchUserEditMiddleware, postAddUserMiddleware } from "./userMiddleware";
// import SvgIconeye from "../../../assets/icons/SvgIconeye";
const initialState = {
  loading: false,
  error: "",
  userList: [
    {
      id: 1,
      userName: "Johnson99",
      employeeCode: "Emp001",
      assignedRole: "Role",
      email: "johnson@gmail.com",
      phoneNumber: "63-1234567",
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
    {
      id: 2,
      userName: "Johnson99",
      employeeCode: "Emp002",
      assignedRole: "Role",
      email: "johnson@gmail.com",
      phoneNumber: "63-1234567",
      modifiedBy: "Johnson",
      modifiedOn: "2/1/24",
      status: "",
      action: ""
    }, {
      id: 3,
      userName: "Johnson99",
      employeeCode: "Emp003",
      assignedRole: "Role",
      email: "johnson@gmail.com",
      phoneNumber: "63-1234567",
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
  ],
  userSearchList: [],
  userDetailList: {},
  userViewData: {},
  userEditData: {},
  mainBranchAccessTableList: [
    {
      id: 1,
      branchCode: "branchCode",
      branchName: "branchName",
      TransactionNofrom: "TransactionNofrom",
      departmentCode: "departmentCode",
      departmentName: "departmentName",
      action:""
    }
  ]
};
const usersReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.userTableList = action.payload;
    });
    builder.addCase(getUserMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.userTableList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });
    builder.addCase(getUserListByIdMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserListByIdMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.userDetailList = action.payload;
    });
    builder.addCase(getUserListByIdMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.userDetailList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    builder.addCase(getSearchUserMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSearchUserMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.userSearchList = action.payload;
    });
    builder.addCase(getSearchUserMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.userSearchList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });



    builder.addCase(postAddUserMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postAddUserMiddleware.fulfilled, (state, action) => {
      console.log(action.payload, 'find action.payload')
      state.loading = false;
      state.userList = [...state.userList, action.payload];
    });
    builder.addCase(postAddUserMiddleware.rejected, (state, action) => {
      state.loading = false;

      //   state.paymentVocherList = state.paymentVocherList;
      state.error = typeof action.payload === "string" ? action.payload : "";
    });


    builder.addCase(patchUserEditMiddleware.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      patchUserEditMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        console.log(state.userTableList, "state.countryTableList");
        const updatedIndex = state.userTableList.findIndex(
          (item) => item.id === action.payload.id
        );
        if (updatedIndex !== -1) {
          const updatedAddDisbursmentTable = [...state.userTableList];
          updatedAddDisbursmentTable[updatedIndex] = action.payload;
          state.userTableList = updatedAddDisbursmentTable;
        } else {
          state.userTableList = [...state.userTableList, action.payload];
        }
      }
    );
    builder.addCase(
      patchUserEditMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.editList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );


    builder.addCase(getUserViewDataMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getUserViewDataMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;

        state.userViewData = action.payload;
      }
    );
    builder.addCase(
      getUserViewDataMiddleWare.rejected,
      (state, action) => {
        state.loading = false;

        state.userViewData = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );


    builder.addCase(getUserEditDataMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getUserEditDataMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;

        state.userEditData = action.payload;
      }
    );
    builder.addCase(
      getUserEditDataMiddleWare.rejected,
      (state, action) => {
        state.loading = false;

        state.userEditData = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    builder.addCase(getMainBranchAccessMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMainBranchAccessMiddleWare.fulfilled, (state, action) => {
      state.loading = false;
      state.mainBranchAccessTableList = action.payload;
    });
    builder.addCase(getMainBranchAccessMiddleWare.rejected, (state, action) => {
      state.loading = false;

      state.mainBranchAccessTableList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

  },
});

export default usersReducer.reducer;
