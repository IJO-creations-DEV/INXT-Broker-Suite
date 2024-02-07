import { createSlice } from "@reduxjs/toolkit";
import { getAdditionalRoleTabelMiddleWare, getAdditionalRoleViewMiddleWare, getMainBranchAccessMiddleWare, getSearchUserMiddleware, getUserEditDataMiddleWare, getUserListByIdMiddleware, getUserMiddleware, getUserViewDataMiddleWare, getViewMainBranchUser, patchUserEditMiddleware, postAddUserMiddleware, postAdditionalRoleViewMiddleWare, postViewMainBranchUser } from "./userMiddleware";
// import SvgIconeye from "../../../assets/icons/SvgIconeye";
const initialState = {
  loading: false,
  error: "",
  userList: [
    {
      id: 1,
      userName: "JOHN12",
      employeeCode: "100021",
      assignedRole: "AGENT_MOTOR ",
      email: "contactus@broker.com",
      phoneNumber: "+67-654859632",
      modifiedBy: "JOHNSON",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
    {
      id: 2,
      userName: "NOEL123",
      employeeCode: "100023",
      assignedRole: "AGENT_MOTOR ",
      email: "contactus@broker.com",
      phoneNumber: "+67-654859632",
      modifiedBy: "JOHNSON",
      modifiedOn: "2/1/24",
      status: "",
      action: ""
    }
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
      action: ""
    }
  ],
  mainUserViewData: {},
  postUserViewData: {},
  mainAdditionalTableList: [
    {
      id: 1,
      RoleCode: "RoleCode",
      RoleName: "RoleName",
      ActiveHours: "ActiveHours",
      Action: "Action"
    }
  ],
  postAdditionalViewData: {},
  mainAdditionalViewData: {}
};
let nextId2 = 2
let nextId3 = 2
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
        console.log(state.userList, "state.countryTableList");
        const updatedIndex = state.userList.findIndex(
          (item) => item.id === action.payload.id
        );
        if (updatedIndex !== -1) {
          const updatedAddDisbursmentTable = [...state.userList];
          updatedAddDisbursmentTable[updatedIndex] = action.payload;
          state.userList = updatedAddDisbursmentTable;
        } else {
          state.userList = [...state.userList, action.payload];
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

    builder.addCase(getViewMainBranchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getViewMainBranchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.mainUserViewData = action.payload;
    });
    builder.addCase(getViewMainBranchUser.rejected, (state, action) => {
      state.loading = false;

      state.mainUserViewData = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    builder.addCase(postViewMainBranchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postViewMainBranchUser.fulfilled, (state, action) => {
        state.loading = false;
        const newItem2 = { ...action.payload, id: nextId2++ };
        state.mainBranchAccessTableList = [...state.mainBranchAccessTableList, newItem2];
        console.log(state.mainBranchAccessTableList, "mainBranchAccessTableList")
      }
    );
    builder.addCase(postViewMainBranchUser.rejected, (state, action) => {
      state.loading = false;

      state.postUserViewData = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });



    builder.addCase(getAdditionalRoleTabelMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAdditionalRoleTabelMiddleWare.fulfilled, (state, action) => {
      state.loading = false;
      state.mainAdditionalTableList = action.payload;
    });
    builder.addCase(getAdditionalRoleTabelMiddleWare.rejected, (state, action) => {
      state.loading = false;

      state.mainAdditionalTableList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    builder.addCase(getAdditionalRoleViewMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAdditionalRoleViewMiddleWare.fulfilled, (state, action) => {
      state.loading = false;
      state.mainAdditionalViewData = action.payload;
    });
    builder.addCase(getAdditionalRoleViewMiddleWare.rejected, (state, action) => {
      state.loading = false;

      state.mainAdditionalViewData = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    builder.addCase(postAdditionalRoleViewMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postAdditionalRoleViewMiddleWare.fulfilled, (state, action) => {
        state.loading = false;
        const newItem2 = { ...action.payload, id: nextId3++ };
        state.mainAdditionalTableList = [...state.mainAdditionalTableList, newItem2];
        console.log(state.mainAdditionalTableList, "mainAdditionalTableList")
      }
    );
    builder.addCase(postAdditionalRoleViewMiddleWare.rejected, (state, action) => {
      state.loading = false;
      state.postAdditionalViewData = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

  },
});

export default usersReducer.reducer;
