import { createSlice } from "@reduxjs/toolkit";
import { getEmployeeListMiddleware, getEmployeeListByIdMiddleware, postAddEmployeeMiddleware, patchEmployeeEditMiddleware, getSearchEmployeeMiddleware, getEmployeViewMiddleWare, getEmployeEditMiddleWare } from "./employeeMiddleware";
// import SvgIconeye from "../../../assets/icons/SvgIconeye";
const initialState = {
  loading: false,
  error: "",
  employeeTableList: [
    {
      id: 1,
      employeeCode: "RC1234",
      firstName: "John",
      middleName: "Peterson",
      lastName: "Watson",
      employeeType: "Agent",
      designation: "Level 2 Agent",
      reportingto: "John Doe",
      branchCode: "Branch0123",
      departmentCode: "Depart123",
      idProofType: "Driving License",
      idNumber: "12345678",
      addressLine1: "Enter",
      city: "Chennai",
      state: "Tamil nadu",
      country: "India",
      modifiedBy: "John",
      modifiedOn: "12/12/2023",

    },
    {
      id: 2,
      employeeCode: "RC1234",
      firstName: "John",
      middleName: "Peterson",
      lastName: "Watson",
      employeeType: "Agent",
      designation: "Level 2 Agent",
      reportingto: "John Doe",
      branchCode: "Branch0123",
      departmentCode: "Depart123",
      idProofType: "Driving License",
      idNumber: "12345678",
      addressLine1: "Enter",
      city: "Chennai",
      state: "Tamil nadu",
      country: "India",
      modifiedBy: "John",
      modifiedOn: "12/12/2023",

    },




  ],
  employeeEditData: {},
  employeeViewData: {}
};
let nextId1 = 4
const employeeReducer = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmployeeListMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEmployeeListMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.employeeTableList = action.payload;
    });
    builder.addCase(getEmployeeListMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.employeeTableList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });
    builder.addCase(getEmployeeListByIdMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEmployeeListByIdMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.employeeDetailList = action.payload;
    });
    builder.addCase(getEmployeeListByIdMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.employeeDetailList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    builder.addCase(getSearchEmployeeMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSearchEmployeeMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.employeeDetailList = action.payload;
    });
    builder.addCase(getSearchEmployeeMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.employeeDetailList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });



    builder.addCase(postAddEmployeeMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postAddEmployeeMiddleware.fulfilled, (state, action) => {
        state.loading = false;
        const newItem2 = { ...action.payload, id: nextId1++ };
        state.employeeTableList = [...state.employeeTableList, newItem2];
        console.log(state.employeeTableList, "departmentList")
      }
    );
    builder.addCase(postAddEmployeeMiddleware.rejected, (state, action) => {
      state.loading = false;

      //   state.paymentVocherList = state.paymentVocherList;
      state.error = typeof action.payload === "string" ? action.payload : "";
    });


    builder.addCase(patchEmployeeEditMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchEmployeeEditMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;

        state.employeeTableList = action.payload;
      }
    );
    builder.addCase(
      patchEmployeeEditMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.editList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );


    builder.addCase(getEmployeViewMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getEmployeViewMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;

        state.employeeViewData = action.payload;
      }
    );
    builder.addCase(
      getEmployeViewMiddleWare.rejected,
      (state, action) => {
        state.loading = false;

        state.employeeViewData = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );


    builder.addCase(getEmployeEditMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getEmployeEditMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;

        state.employeeEditData = action.payload;
      }
    );
    builder.addCase(
      getEmployeEditMiddleWare.rejected,
      (state, action) => {
        state.loading = false;

        state.employeeEditData = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );


  },
});

export default employeeReducer.reducer;
