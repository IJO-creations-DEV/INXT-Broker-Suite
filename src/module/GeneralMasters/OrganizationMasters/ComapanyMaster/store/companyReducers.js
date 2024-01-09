import { createSlice } from "@reduxjs/toolkit";
import { getCompanyListMiddleware, getCompanyListByIdMiddleware, postAddCompanyMiddleware, patchCompanyEditMiddleware, getSearchCompanyMiddleware, getComapnyListByIdMiddleware, getCompanyView, getCompanyViewMiddleWare } from "./companyMiddleware";

const initialState = {
  loading: false,
  error: "",
  companyTableList: [
    {
      id: "1",
      CompanyCode: "Zealeye123",
      CompanyName: "Zealeye",
      LicenseNumber: "7642",
      EmailID: "test@gmail.com",
      Logo: "13",
      Websitelink: "zealeye.com",
      Description: "test purpose",
      AddressLine1: "channai",
      AddressLine2: "hydrabad",
      AddressLine3: "banglore",
      PinCode: "577004",
      City: "Channai",
      State: "TamilNadu",
      Country: "India",
      PhoneNumber: "8296571254",
      Fax: "77",
    },
    {
      id: "2",
      CompanyCode: "Zealeye123",
      CompanyName: "Zealeye",
      LicenseNumber: "7642",
      EmailID: "test@gmail.com",
      Logo: "13",
      Websitelink: "zealeye.com",
      Description: "test purpose",
      AddressLine1: "channai",
      AddressLine2: "hydrabad",
      AddressLine3: "banglore",
      PinCode: "577004",
      City: "Channai",
      State: "TamilNadu",
      Country: "India",
      PhoneNumber: "8296571254",
      Fax: "77",
    }
  ]
};
let nextId = 3
const receiptsReducer = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompanyListMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCompanyListMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.companyTableList = [action.payload];
    });
    builder.addCase(getCompanyListMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.companyTableList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });
    builder.addCase(getComapnyListByIdMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getComapnyListByIdMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.companyDetailList = action.payload;
    });
    builder.addCase(getComapnyListByIdMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.companyDetailList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    builder.addCase(getSearchCompanyMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSearchCompanyMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.companyDetailList = action.payload;
    });
    builder.addCase(getSearchCompanyMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.companuDetailList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });



    builder.addCase(postAddCompanyMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postAddCompanyMiddleware.fulfilled, (state, action) => {
        state.loading = false;
        const newItem2 = { ...action.payload, id: nextId++ };
        state.companyTableList = [...state.companyTableList, newItem2];
        console.log(state.companyTableList, "companyTableList")
      }
    );
    builder.addCase(postAddCompanyMiddleware.rejected, (state, action) => {
      state.loading = false;

      //   state.paymentVocherList = state.paymentVocherList;
      state.error = typeof action.payload === "string" ? action.payload : "";
    });


    builder.addCase(getCompanyViewMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getCompanyViewMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;
        state.companyView = action.payload;
      }
    );
    builder.addCase(
      getCompanyViewMiddleWare.rejected,
      (state, action) => {
        state.loading = false;
        state.companyView = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
    builder.addCase(patchCompanyEditMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchCompanyEditMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;

        state.companyTableList = action.payload;
      }
    );
    builder.addCase(
      patchCompanyEditMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.editList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

  },
});

export default receiptsReducer.reducer;
