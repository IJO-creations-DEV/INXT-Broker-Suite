import { createSlice } from "@reduxjs/toolkit";
import { postCreateleadMiddleware, patchLeadEditMiddleWare,
  getleadcompanydataMiddleware, getleadtableMiddleware, getPaymentSearchDataMiddleWare, getLeadDataMiddleware, getLeadEditDataMiddleWare } from "./leadMiddleware";
import SvgMotorTable from "../../../assets/agentIcon/SvgMotorTable";
import SvgHomeTable from "../../../assets/agentIcon/SvgHomeTable";
import SvgTravlesTable from "../../../assets/agentIcon/SvgTravlesTable";

const initialState = {
  loading: false,
  error: "",

  leadtabledata: [
    {
      id: "1",
      CompanyName: "Zealye",
      TaxNumber: "123",
      FirstName: "David Rodriguez",
      LastName: "john",
      PreferredName: "tommy",
      EmailID: "Daniel@gmail.com",
      ContactNumber: "9736355562",
      HouseNo: "21",
      Barangay: "Philiphines",
      Country: "Philiphines",
      Province: "Philiphines",
      City: "Philiphines",
      ZIPCode: "91",
      DateofBirth: "01/26/2024",
      category: "Individual",
      gender: "Male",
      Quotes: "01",
      LeadID: "877",
      Svg: <SvgMotorTable />,
      Type: "Motor"
    },

    {
      id: "2",
      CompanyName: "Zealye",
      TaxNumber: "123",
      FirstName: "Daniel Brown",
      LastName: "john",
      PreferredName: "tommy",
      EmailID: "Daniel@gmail.com",
      ContactNumber: "9736355562",
      HouseNo: "21",
      Barangay: "Philiphines",
      Country: "Philiphines",
      Province: "Philiphines",
      City: "Philiphines",
      ZIPCode: "91",
      DateofBirth: "01/26/2024",
      category: "Company",
      gender: "Male",
      Quotes: "01",
      LeadID: "999",
      Svg: <SvgMotorTable />,
      Type: "Property"
    },
    {
      id: "3",
      CompanyName: "Zealye",
      TaxNumber: "123",
      FirstName: "Emma Davis",
      LastName: "john",
      PreferredName: "tommy",
      EmailID: "Daniel@gmail.com",
      ContactNumber: "9736355562",
      HouseNo: "21",
      Barangay: "Philiphines",
      Country: "Philiphines",
      Province: "Philiphines",
      City: "Philiphines",
      ZIPCode: "91",
      DateofBirth: "01/26/2024",
      category: "Individual",
      gender: "Male",
      Quotes: "01",
      LeadID: "877",
      Svg: <SvgMotorTable />,
      Type: "Travel"
    },
    {
      id: "4",
      CompanyName: "Zealye",
      TaxNumber: "123",
      FirstName: "Michael Johnson",
      LastName: "john",
      PreferredName: "tommy",
      EmailID: "Daniel@gmail.com",
      ContactNumber: "9736355562",
      HouseNo: "21",
      Barangay: "Philiphines",
      Country: "Philiphines",
      Province: "Philiphines",
      City: "Philiphines",
      ZIPCode: "91",
      DateofBirth: "01/26/2024",
      category: "Company",
      gender: "Male",
      Quotes: "01",
      LeadID: "877",
      Svg: <SvgMotorTable />,
      Type: "Motor"
    },
    {
      id: "5",
      CompanyName: "Zealye",
      TaxNumber: "123",
      FirstName: "Olivia Turner",
      LastName: "john",
      PreferredName: "tommy",
      EmailID: "Daniel@gmail.com",
      ContactNumber: "9736355562",
      HouseNo: "21",
      Barangay: "Philiphines",
      Country: "Philiphines",
      Province: "Philiphines",
      City: "Philiphines",
      ZIPCode: "91",
      DateofBirth: "01/26/2024",
      category: "Individual",
      gender: "Male",
      Quotes: "01",
      LeadID: "877",
      Svg: <SvgMotorTable />,
      Type: "Travel"
    },
    {
      id: "6",
      CompanyName: "Zealye",
      TaxNumber: "123",
      FirstName: "Brown",
      LastName: "john",
      PreferredName: "tommy",
      EmailID: "Daniel@gmail.com",
      ContactNumber: "9736355562",
      HouseNo: "21",
      Barangay: "Philiphines",
      Country: "Philiphines",
      Province: "Philiphines",
      City: "Philiphines",
      ZIPCode: "91",
      DateofBirth: "01/26/2024",
      category: "Company",
      gender: "Male",
      Quotes: "01",
      LeadID: "999",
      Svg: <SvgMotorTable />,
      Type: "Property"
    },


  ],
  createleaddata: {},
  LeadEditdata: {},
  getEditLeadData: {},
  leadcompanydata: {}
};

const leadReducer = createSlice({
  name: "leadReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getLeadDataMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getLeadDataMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.leadtabledata = action.payload

      }
    );

    builder.addCase(
      getLeadDataMiddleware.rejected,
      (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );


    //getcompany
    builder.addCase(getleadcompanydataMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getleadcompanydataMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.leadcompanydata = action.payload

      }
    );

    builder.addCase(
      getleadcompanydataMiddleware.rejected,
      (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //postCreateleadMiddleware

    builder.addCase(postCreateleadMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postCreateleadMiddleware.fulfilled, (state, action) => {
      console.log(action.payload, 'find action.payload')
      state.loading = false;
      state.leadtabledata = [...state.leadtabledata, action.payload];
    });
    builder.addCase(
      postCreateleadMiddleware.rejected,
      (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
    //getleadtableMiddleware

    builder.addCase(getleadtableMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getleadtableMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.leadtabledata = action.payload
      }
    );
    builder.addCase(
      getleadtableMiddleware.rejected,
      (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    //patchLeadEditMiddleWare

    builder.addCase(patchLeadEditMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchLeadEditMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;
        const updatedIndex = state.leadtabledata.findIndex(
          (item) => item.id === action.payload.id
        );
        if (updatedIndex !== -1) {
          const updatedCurrencyList = [...state.leadtabledata];
          updatedCurrencyList[updatedIndex] = action.payload;
          state.leadtabledata = updatedCurrencyList;
        } else {
          state.leadtabledata = [...state.leadtabledata, action.payload];
        }
      }
    );
    builder.addCase(
      patchLeadEditMiddleWare.rejected,
      (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

    builder.addCase(getPaymentSearchDataMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPaymentSearchDataMiddleWare.fulfilled, (state, action) => {
      state.loading = false;
      state.paymentSearchList = action.payload;
    });
    builder.addCase(getPaymentSearchDataMiddleWare.rejected, (state, action) => {
      state.loading = false;

      state.paymentSearchList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    builder.addCase(getLeadEditDataMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLeadEditDataMiddleWare.fulfilled, (state, action) => {
      console.log(action.payload, 'find action.payload');
      state.loading = false;
      state.getEditLeadData = action.payload;
    });
    builder.addCase(
      getLeadEditDataMiddleWare.rejected,
      (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
  },
});

export default leadReducer.reducer;
