import { createSlice } from "@reduxjs/toolkit";
import { getpersonalDetailsMiddleware,patchpersonalDetailsMiddleware } from "./personalDetailsMiddleware";

const initialState = {
  loading: false,
  error: "",
  personalDetails: {
    LossandDamagecoverage: "10,000",
    LossandDamagecoverageRate: "1000",
    LossandDamagecoveragepremium: "2000",
    ActsofNatureRate: "100,000",
    ActsofNaturepremium: "1000",
    BodilyInjury: "10,000",
    PreferredName:"leo",
    BodilyInjuryCoveragePremium: "1000",
    PropertyDamage: "1000",
    PropertyDamageCoveragePremium: "1000",
    AutopassengerpersonalAccident: "1000",
    APPATotalCoverage: "2000",
    ActsofNaturepremium: "3000",
    TotalSumInsured: "52,000",
    NETpremium: "1000",
    ValueAddedTax: "1000",
    Others: "10,000",
    DocumentaryStampTax: "10,000",
    LocalGovtTax: "1000",
    Discount: "200",
    Grosspremium: "1000",
    TNVS: "True",
    MotorNumber: "1828",
    ChassisNumber: "2002",
    Mortgage: "FEDERAL LAND",
    CertNumber: "8383",
    PlateNumber: "TN8282",
    MVFileNumber: "9292",
    AuthenCode: "7777",
    VehicleBrand: "Honda",
    ModelYear: "2022",
    ModelVariant: "Sedan",
    VehicleModel: "Camry",
    VehicleColor: "Red",
    SeatingCapacity: "4",
    CompanyName: "Audio",
    TaxNumber: "19292",
    FirstName: "Leo",
    LastName: "Max",
    EmailID: "LEo@gmail.com",
    ContactNumber: "893919042",
    HouseNo: "22",
    Barangay: "BuritRoad",
    Country: "Afghanistan",
    Province: "Alabama",
    City: "Alaba",
    ZIPCode: "800017",
    DateofBirth: "01/01/1999",
    FromDate: "24/01/2024",
    ToDate: "28/01/2024",
    NumberofDays: "4",
    Title: "Agent",
    Declaration: "Agent001",
    OthersPremium:"1000",
    ActsOfNatureRate:"1000"
  },
  personalDetailspatch:{}
};
const personalDetailsReducer = createSlice({
  name: "personalDetailsReducer",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {

    //getpersonalDetailsMiddleware

    builder.addCase(getpersonalDetailsMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getpersonalDetailsMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.personalDetails = action.payload;
    });
    builder.addCase(getpersonalDetailsMiddleware.rejected, (state, action) => {
      state.loading = false;
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    //patchpersonalDetailsMiddleware

    builder.addCase(patchpersonalDetailsMiddleware.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(patchpersonalDetailsMiddleware.fulfilled, (state, action) => {
        state.loading = false;
        state.personalDetailspatch = action.payload;
      });
      builder.addCase(patchpersonalDetailsMiddleware.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      });
  },
});

export default personalDetailsReducer.reducer;
