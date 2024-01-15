import { createSlice } from "@reduxjs/toolkit";
import { getCityMiddleware, getCityListByIdMiddleware, postAddCityMiddleware, patchCityEditMiddleware, getSearchCityMiddleware } from "./cityMiddleware";

const initialState = {
  loading: false,
  error: "",
  cityTableList: [
    {
      id: 1,
      "Citycode": "C001",
      "CityName": "New York",
      "State": "NY",
      "Modifiedby": "Admin1",
      "ModifiedOn": "2024-01-12"
    },
    {
      id: 2,
      "Citycode": "C002",
      "CityName": "Los Angeles",
      "State": "CA",
      "Modifiedby": "Admin2",
      "ModifiedOn": "2024-01-12"
    },
    {
      id: 3,
      "Citycode": "C003",
      "CityName": "London",
      "State": "ENG",
      "Modifiedby": "Admin3",
      "ModifiedOn": "2024-01-12"
    },
    {
      id: 4,
      "Citycode": "C004",
      "CityName": "Berlin",
      "State": "BE",
      "Modifiedby": "Admin4",
      "ModifiedOn": "2024-01-12"
    },
    {
      id: 5,
      "Citycode": "C005",
      "CityName": "Sydney",
      "State": "NSW",
      "Modifiedby": "Admin5",
      "ModifiedOn": "2024-01-12"
    },
    {
      id: 6,
      "Citycode": "C006",
      "CityName": "Mumbai",
      "State": "MH",
      "Modifiedby": "Admin6",
      "ModifiedOn": "2024-01-12"
    },
    {
      id: 7,
      "Citycode": "C007",
      "CityName": "Rio de Janeiro",
      "State": "RJ",
      "Modifiedby": "Admin7",
      "ModifiedOn": "2024-01-12"
    },
    {
      id: 8,
      "Citycode": "C008",
      "CityName": "Tokyo",
      "State": "13",
      "Modifiedby": "Admin8",
      "ModifiedOn": "2024-01-12"
    },
    {
      id: 9,
      "Citycode": "C009",
      "CityName": "Cape Town",
      "State": "WC",
      "Modifiedby": "Admin9",
      "ModifiedOn": "2024-01-12"
    },
    {
      id: 10,
      "Citycode": "C010",
      "CityName": "Mexico City",
      "State": "CMX",
      "Modifiedby": "Admin10",
      "ModifiedOn": "2024-01-12"
    }
  ]
  ,
  CityListById: "",
  SearchCity: "",
  CityEdit: ""
};
const cityReducer = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCityMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCityMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.cityTableList = action.payload;
    });
    builder.addCase(getCityMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.userTableList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });
    builder.addCase(getCityListByIdMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCityListByIdMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.CityListById = action.payload;
    });
    builder.addCase(getCityListByIdMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.CityListById = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    builder.addCase(getSearchCityMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSearchCityMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.SearchCity = action.payload;
    });
    builder.addCase(getSearchCityMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.SearchCity = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    builder.addCase(postAddCityMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postAddCityMiddleware.fulfilled, (state, action) => {
      console.log(action.payload, 'find action.payload')
      state.loading = false;
      state.cityTableList = [...state.cityTableList, action.payload];
    });
    builder.addCase(postAddCityMiddleware.rejected, (state, action) => {
      state.loading = false;

      //   state.paymentVocherList = state.paymentVocherList;
      state.error = typeof action.payload === "string" ? action.payload : "";
    });


    builder.addCase(patchCityEditMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchCityEditMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        console.log(state.cityTableList, "state.countryTableList");
        const updatedIndex = state.cityTableList.findIndex(
          (item) => item.id === action.payload.id
        );
        if (updatedIndex !== -1) {
          const updatedAddDisbursmentTable = [...state.cityTableList];
          updatedAddDisbursmentTable[updatedIndex] = action.payload;
          state.cityTableList = updatedAddDisbursmentTable;
        } else {
          state.cityTableList = [...state.cityTableList, action.payload];
        }
      }
    );
    builder.addCase(
      patchCityEditMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.CityEdit = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );



  },
});

export default cityReducer.reducer;
