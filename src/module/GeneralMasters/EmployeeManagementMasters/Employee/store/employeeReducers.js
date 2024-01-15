import { createSlice } from "@reduxjs/toolkit";
import { getEmployeeListMiddleware, getEmployeeListByIdMiddleware, postAddEmployeeMiddleware, patchEmployeeEditMiddleware, getSearchEmployeeMiddleware } from "./employeeMiddleware";
// import SvgIconeye from "../../../assets/icons/SvgIconeye";
const initialState = {
  loading: false,
  error: "",
  employeeList: [
    {
      id: 1,
      employeeCode: "Em00123",
      employeeType: "Agent",
      name: "John Peterson watson",
      designation: "Level to Agent",
      reportingTo: "John Doe",
      modifiedBy: "John",
      modifiedOn: "12/12/2023",

    },
    {
      id: 2,
      employeeCode: "Em00123",
      employeeType: "Agent",
      name: "John Peterson watson",
      designation: "Level to Agent",
      reportingTo: "John Doe",
      modifiedBy: "John",
      modifiedOn: "12/12/2023",

    },
    {
      id: 3,
      employeeCode: "Em00123",
      employeeType: "Agent",
      name: "John Peterson watson",
      designation: "Level to Agent",
      reportingTo: "John Doe",
      modifiedBy: "John",
      modifiedOn: "12/12/2023",

    },
    {
      id: 4,
      employeeCode: "Em00123",
      employeeType: "Agent",
      name: "John Peterson watson",
      designation: "Level to Agent",
      reportingTo: "John Doe",
      modifiedBy: "John",
      modifiedOn: "12/12/2023",

    },
    {
      id: 1,
      employeeCode: "Em00123",
      employeeType: "Agent",
      name: "John Peterson watson",
      designation: "Level to Agent",
      reportingTo: "John Doe",
      modifiedBy: "John",
      modifiedOn: "12/12/2023",

    },
    {
      id: 5,
      employeeCode: "Em00123",
      employeeType: "Agent",
      name: "John Peterson watson",
      designation: "Level to Agent",
      reportingTo: "John Doe",
      modifiedBy: "John",
      modifiedOn: "12/12/2023",

    },
    {
      id: 6,
      employeeCode: "Em00123",
      employeeType: "Agent",
      name: "John Peterson watson",
      designation: "Level to Agent",
      reportingTo: "John Doe",
      modifiedBy: "John",
      modifiedOn: "12/12/2023",

    },
    {
      id: 7,
      employeeCode: "Em00123",
      employeeType: "Agent",
      name: "John Peterson watson",
      designation: "Level to Agent",
      reportingTo: "John Doe",
      modifiedBy: "John",
      modifiedOn: "12/12/2023",

    },
    {
      id: 8,
      employeeCode: "Em00123",
      employeeType: "Agent",
      name: "John Peterson watson",
      designation: "Level to Agent",
      reportingTo: "John Doe",
      modifiedBy: "John",
      modifiedOn: "12/12/2023",

    },



  ]
};
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
    builder.addCase(postAddEmployeeMiddleware.fulfilled, (state, action) => {
      console.log(action.payload, 'find action.payload')
      state.loading = false;
      state.employeeTableList = [...state.receiptsTableList, action.payload];
    });
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

  },
});

export default employeeReducer.reducer;
