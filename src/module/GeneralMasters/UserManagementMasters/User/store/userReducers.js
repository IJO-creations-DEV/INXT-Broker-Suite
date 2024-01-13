import { createSlice } from "@reduxjs/toolkit";
import { getSearchUserMiddleware, getUserListByIdMiddleware, getUserMiddleware, patchUserEditMiddleware, postAddUserMiddleware } from "./userMiddleware";
// import SvgIconeye from "../../../assets/icons/SvgIconeye";
const initialState = {
  loading: false,
  error: "",
  userList: [
    {
      id: 1,
      userName: "Johnson99",
      employeeCode: "EC12345",
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
      employeeCode: "EC12345",
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
      employeeCode: "EC12345",
      assignedRole: "Role",
      email: "johnson@gmail.com",
      phoneNumber: "63-1234567",
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
    {
      id: 4,
      userName: "Johnson99",
      employeeCode: "EC12345",
      assignedRole: "Role",
      email: "johnson@gmail.com",
      phoneNumber: "63-1234567",
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
    {
      id: 5,
      userName: "Johnson99",
      employeeCode: "EC12345",
      assignedRole: "Role",
      email: "johnson@gmail.com",
      phoneNumber: "63-1234567",
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
    {
      id: 6,
      userName: "Johnson99",
      employeeCode: "EC12345",
      assignedRole: "Role",
      email: "johnson@gmail.com",
      phoneNumber: "63-1234567",
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
    {
      id: 7,
      userName: "Johnson99",
      employeeCode: "EC12345",
      assignedRole: "Role",
      email: "johnson@gmail.com",
      phoneNumber: "63-1234567",
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
    {
      id: 8,
      userName: "Johnson99",
      employeeCode: "EC12345",
      assignedRole: "Role",
      email: "johnson@gmail.com",
      phoneNumber: "63-1234567",
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
    {
      id: 9,
      userName: "Johnson99",
      employeeCode: "EC12345",
      assignedRole: "Role",
      email: "johnson@gmail.com",
      phoneNumber: "63-1234567",
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
    {
      id: 10,
      userName: "Johnson99",
      employeeCode: "EC12345",
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
  userDetailList: {}
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

        state.userTableList = action.payload;
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

    // builder.addCase(getBranchAddUserMiddleware.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(
    //   getBranchAddUserMiddleware.fulfilled,
    //   (state, action) => {
    //     state.loading = false;

    //     state.userTableList = action.payload;
    //   }
    // );
    // builder.addCase(
    //   getBranchAddUserMiddleware.rejected,
    //   (state, action) => {
    //     state.loading = false;

    //     state.editList = {};
    //     state.error = typeof action.payload === "string" ? action.payload : "";
    //   }
    // );

  },
});

export default usersReducer.reducer;
