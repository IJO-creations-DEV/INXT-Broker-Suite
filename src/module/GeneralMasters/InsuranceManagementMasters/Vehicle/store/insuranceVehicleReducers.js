import { createSlice } from "@reduxjs/toolkit";
import {
  getInsuranceVehicleMiddleWare,
  postInsuranceVehicleMiddleWare,
  patchInsuranceVehicleMiddleWare,
  getSearchInsuranceVehicleMiddleware,
} from "./insuranceVehicleMiddleware";
const initialState = {
  loading: false,
  error: "",
  InsuranceVehicleList: [
    // {
    //   id: 1,
    //   Status: 0,
    //   vehicleCode: "156",
    //   vehicleName: "ANFRA",
    //   vehicleVariant: "S Series",
    //   vehicleModel: "TRANSFORTER",
    //   vehicleBrand: "Kia",
    //   seatingCapacity: 10,
    //   action: 1,
    // },
    {
      id: 2,
      Status: 1,
      vehicleCode: "006",
      vehicleName: "AUDI",
      vehicleVariant: "3.0 TDI",
      vehicleModel: "Q7 ",
      vehicleBrand: "AUDI",
      seatingCapacity: 10,
      action: 2,
    },
    {
      id: 3,
      Status: 0,
      vehicleCode: "330",
      vehicleName: "Abarth",
      vehicleVariant: "Competizione",
      vehicleModel: "595",
      vehicleBrand: "Abarth",
      seatingCapacity: 10,
      action: 3,
    },
    {
      id: 4,
      Status: 1,
      vehicleCode: "008",
      vehicleName: "BAJAJ",
      vehicleVariant: "4S F",
      vehicleModel: "RE COMPACT ",
      vehicleBrand: "BAJAJ",
      seatingCapacity: 10,
      action: 4,
    },
    {
      id: 5,
      Status: 0,
      vehicleCode: "235",
      vehicleName: "BENELLI",
      vehicleVariant: "MZ40",
      vehicleModel: "PANAREA",
      vehicleBrand: "BENELLI",
      seatingCapacity: 10,
      action: 5,
    },
    {
      id: 6,
      Status: 1,
      vehicleCode: "011",
      vehicleName: "BMW",
      vehicleVariant: "iEssential",
      vehicleModel: "116",
      vehicleBrand: "BMW",
      seatingCapacity: 10,
      action: 6,
    },
    {
      id: 7,
      Status: 0,
      vehicleCode: "252",
      vehicleName: "BYD",
      vehicleVariant: "Base",
      vehicleModel: "S6GS-i ",
      vehicleBrand: "BYD",
      seatingCapacity: 10,
      action: 7,
    },
    {
      id: 8,
      Status: 1,
      vehicleCode: "338",
      vehicleName: "Baic",
      vehicleVariant: "Comfort",
      vehicleModel: "A113 ",
      vehicleBrand: "Baic",
      seatingCapacity: 10,
      action: 8,
    },
    {
      id: 9,
      Status: 0,
      vehicleCode: "346",
      vehicleName: "CHALLENGER",
      vehicleVariant: "Pack R/T HEMI",
      vehicleModel: "ChallengerScat ",
      vehicleBrand: "CHALLENGER",
      seatingCapacity: 10,
      action: 9,
    },
    {
      id: 10,
      Status: 0,
      vehicleCode: "317",
      vehicleName: "CHANA",
      vehicleVariant: "Starlight",
      vehicleModel: " 4500",
      vehicleBrand: "CHANA",
      seatingCapacity: 10,
      action: 10,
    },
  
  ],
  SearchTableList: [],
};
const insuranceManagementVehicleMasterReducer = createSlice({
  name: "mainAccountMaster",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInsuranceVehicleMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getInsuranceVehicleMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;
        state.InsuranceVehicleList = action.payload;
      }
    );
    builder.addCase(getInsuranceVehicleMiddleWare.rejected, (state, action) => {
      state.loading = false;

      state.InsuranceVehicleList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //postInsuranceVehicle

    builder.addCase(postInsuranceVehicleMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postInsuranceVehicleMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;
        state.InsuranceVehicleList = [
          ...state.InsuranceVehicleList,
          action.payload,
        ];
      }
    );
    builder.addCase(
      postInsuranceVehicleMiddleWare.rejected,
      (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
    //EditInsuranceVehicle
    builder.addCase(patchInsuranceVehicleMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchInsuranceVehicleMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;

        state.InsuranceVehicleList = action.payload;
      }
    );
    builder.addCase(
      patchInsuranceVehicleMiddleWare.rejected,
      (state, action) => {
        state.loading = false;

        state.editList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
    //searchInsuranceVehicle
    builder.addCase(getSearchInsuranceVehicleMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getSearchInsuranceVehicleMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.SearchTableList = action.payload;
      }
    );
    builder.addCase(
      getSearchInsuranceVehicleMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.SearchTableList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
  },
});

export default insuranceManagementVehicleMasterReducer.reducer;
