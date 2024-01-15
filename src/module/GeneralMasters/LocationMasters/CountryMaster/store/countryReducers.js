import { createSlice } from "@reduxjs/toolkit";
import { getCountryMiddleware, getCountryListByIdMiddleware, postAddCountryMiddleware, patchCountryEditMiddleware, getSearchCountryMiddleware } from "./countryMiddleware";
// import SvgIconeye from "../../../assets/icons/SvgIconeye";
const initialState = {
  loading: false,
  error: "",
  countryTableList: [
    {
      "CountryName": "United States",
      "ISOCode": "US",
      "PhoneCode": "+1",
      "Modifiedby": "Admin1",
      "ModifiedOn": "2024-01-12"
    },
    {
      "CountryName": "Canada",
      "ISOCode": "CA",
      "PhoneCode": "+1",
      "Modifiedby": "Admin2",
      "ModifiedOn": "2024-01-12"
    },
    {
      "CountryName": "United Kingdom",
      "ISOCode": "GB",
      "PhoneCode": "+44",
      "Modifiedby": "Admin3",
      "ModifiedOn": "2024-01-12"
    },
    {
      "CountryName": "Germany",
      "ISOCode": "DE",
      "PhoneCode": "+49",
      "Modifiedby": "Admin4",
      "ModifiedOn": "2024-01-12"
    },
    {
      "CountryName": "Australia",
      "ISOCode": "AU",
      "PhoneCode": "+61",
      "Modifiedby": "Admin5",
      "ModifiedOn": "2024-01-12"
    },
    {
      "CountryName": "India",
      "ISOCode": "IN",
      "PhoneCode": "+91",
      "Modifiedby": "Admin6",
      "ModifiedOn": "2024-01-12"
    },
    {
      "CountryName": "Brazil",
      "ISOCode": "BR",
      "PhoneCode": "+55",
      "Modifiedby": "Admin7",
      "ModifiedOn": "2024-01-12"
    },
    {
      "CountryName": "Japan",
      "ISOCode": "JP",
      "PhoneCode": "+81",
      "Modifiedby": "Admin8",
      "ModifiedOn": "2024-01-12"
    },
    {
      "CountryName": "South Africa",
      "ISOCode": "ZA",
      "PhoneCode": "+27",
      "Modifiedby": "Admin9",
      "ModifiedOn": "2024-01-12"
    },
    {
      "CountryName": "Mexico",
      "ISOCode": "MX",
      "PhoneCode": "+52",
      "Modifiedby": "Admin10",
      "ModifiedOn": "2024-01-12"
    }
  ]
  ,
  countryDetailList: {},
  postAddCountry: "",
  getSearchCountry:"",
  patchCountry:""
};
const countryReducer = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountryMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCountryMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.countryTableList = action.payload;
    });
    builder.addCase(getCountryMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.countryTableList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });
    builder.addCase(getCountryListByIdMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCountryListByIdMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.countryDetailList = action.payload;
    });
    builder.addCase(getCountryListByIdMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.countryDetailList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    builder.addCase(getSearchCountryMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSearchCountryMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.getSearchCountry = action.payload;
    });
    builder.addCase(getSearchCountryMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.getSearchCountry = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    builder.addCase(postAddCountryMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postAddCountryMiddleware.fulfilled, (state, action) => {
      console.log(action.payload, 'find action.payload')
      state.loading = false;
      state.countryTableList = [...state.countryTableList, action.payload];
    });
    builder.addCase(postAddCountryMiddleware.rejected, (state, action) => {
      state.loading = false;

      //   state.paymentVocherList = state.paymentVocherList;
      state.error = typeof action.payload === "string" ? action.payload : "";
    });


    builder.addCase(patchCountryEditMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchCountryEditMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        console.log(state.countryTableList, "state.countryTableList");
        const updatedIndex = state.countryTableList.findIndex(
          (item) => item.id === action.payload.id
        );
        if (updatedIndex !== -1) {
          const updatedAddDisbursmentTable = [...state.countryTableList];
          updatedAddDisbursmentTable[updatedIndex] = action.payload;
          state.countryTableList = updatedAddDisbursmentTable;
        } else {
          state.countryTableList = [...state.countryTableList, action.payload];
        }
      }
    );
    builder.addCase(
      patchCountryEditMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.editList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );



  },
});

export default countryReducer.reducer;
