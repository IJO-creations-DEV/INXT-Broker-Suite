import { createSlice } from "@reduxjs/toolkit";
import { getBranchListMiddleware, getBranchListByIdMiddleware, postAddBranchMiddleware, patchBranchEditMiddleware, getSearchBranchMiddleware, getOrganizationBranchView, getDepartmentListMiddleware, postAddDepartment, getDepatmentView } from "./branchMiddleware";

const initialState = {
  loading: false,
  error: "",
  branchTableList: [
    {
      id: "1",
      BranchCode: "Zealeye88",
      BranchName: "Nandanum",
      CompanyName: "Zealeye",
      EmailID: "testZealeye@gmail.com",
      Description: "test purpose",
      AddressLine1: "Channai",
      AddressLine2: "Hydrabad",
      AddressLine3: "Delhi",
      City: "Channai",
      State: "TamilNadu",
      Country: "India",
      PhoneNumber: "8296571254",
      Fax: "99",
    },
    {
      id: "2",
      BranchCode: "Irota23",
      BranchName: "Nandanum",
      CompanyName: "Irota",
      EmailID: "testIrota@gmail.com",
      Description: "test purpose",
      AddressLine1: "Channai",
      AddressLine2: "Hydrabad",
      AddressLine3: "Delhi",
      City: "Channai",
      State: "TamilNadu",
      Country: "India",
      PhoneNumber: "8296571254",
      Fax: "99",
    },

  ],
  branchTabelSearchList: [],
  organizationBranchView: {},
  departmentList: [
    {
      id: "1",
      DepartmentCode: "Irota23",
      DepartmentName: "Irota",
      Status: "Credit",
      Description: "test purpose",
    },
    {
      id: "2",
      DepartmentCode: "Irota23",
      DepartmentName: "Irota",
      Status: "Credit",
      Description: "test purpose",
    }
  ],
  depatmentView: {}
};
let nextId = 3
let nextId2 = 3
const organizationBranchReducers = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBranchListMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBranchListMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.branchTableList = [action.payload];
    });
    builder.addCase(getBranchListMiddleware.rejected, (state, action) => {
      state.loading = false;
      state.branchTableList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });


    builder.addCase(getBranchListByIdMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBranchListByIdMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.branchDetailList = action.payload;
    });
    builder.addCase(getBranchListByIdMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.branchDetailList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    builder.addCase(getSearchBranchMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getSearchBranchMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.branchTabelSearchList = action.payload;
      }
    );
    builder.addCase(
      getSearchBranchMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.branchTabelSearchList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );



    builder.addCase(postAddBranchMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postAddBranchMiddleware.fulfilled, (state, action) => {
        state.loading = false;
        const newItem2 = { ...action.payload, id: nextId++ };
        state.branchTableList = [...state.branchTableList, newItem2];
        console.log(state.branchTableList, "branchTableList")
      }
    );
    builder.addCase(postAddBranchMiddleware.rejected, (state, action) => {
      state.loading = false;
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //organizationBranchView

    builder.addCase(getOrganizationBranchView.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getOrganizationBranchView.fulfilled,
      (state, action) => {
        state.loading = false;
        state.organizationBranchView = action.payload;
      }
    );
    builder.addCase(
      getOrganizationBranchView.rejected,
      (state, action) => {
        state.loading = false;
        state.organizationBranchView = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    builder.addCase(getDepartmentListMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDepartmentListMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.departmentList = [action.payload];
    });
    builder.addCase(getDepartmentListMiddleware.rejected, (state, action) => {
      state.loading = false;
      state.departmentList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });


    builder.addCase(postAddDepartment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postAddDepartment.fulfilled, (state, action) => {
        state.loading = false;
        const newItem2 = { ...action.payload, id: nextId2++ };
        state.departmentList = [...state.departmentList, newItem2];
        console.log(state.departmentList, "departmentList")
      }
    );
    builder.addCase(postAddDepartment.rejected, (state, action) => {
      state.loading = false;
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    builder.addCase(getDepatmentView.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getDepatmentView.fulfilled,
      (state, action) => {
        state.loading = false;
        state.depatmentView = action.payload;
      }
    );
    builder.addCase(
      getDepatmentView.rejected,
      (state, action) => {
        state.loading = false;
        state.depatmentView = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );



    builder.addCase(patchBranchEditMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchBranchEditMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;

        state.branchTableList = action.payload;
      }
    );
    builder.addCase(
      patchBranchEditMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.branchList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

  },
});

export default organizationBranchReducers.reducer;
