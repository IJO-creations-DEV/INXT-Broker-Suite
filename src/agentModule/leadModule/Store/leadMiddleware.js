import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  POST_CREATELEAD_DATA,
  GET_LEADTABLE_DATA,
  PATCH_LEADEDIT_DATA,
  GET_PAYMENT_SEARCH 
} from "../../../redux/actionTypes";

export const getleadtableMiddleware = createAsyncThunk(
  GET_LEADTABLE_DATA,
  async (_a, { rejectWithValue }) => {
    try {
      // Simulate an API call if needed
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      // return filteredData[0];
    } catch (error) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const postCreateleadMiddleware = createAsyncThunk(
  POST_CREATELEAD_DATA,
  async (payload, { rejectWithValue, getState }) => {
    console.log(payload, "find add datas in midd");

    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const patchLeadEditMiddleWare = createAsyncThunk(
  PATCH_LEADEDIT_DATA,
  async (payload, { rejectWithValue, getState }) => {
    console.log(payload, "find edit load");
    //   const { insuranceVehicleReducers } = getState();
    //   const { InsuranceVehicleList } = insuranceVehicleReducers;
    //   console.log(InsuranceVehicleList, "find original data");
    //   const updatedData = InsuranceVehicleList?.map((item) => {
    //     if (parseInt(item.id) === parseInt(payload?.id)) {
    //       return {
    //         ...item,
    //         vehicleCode: payload?.vehicleCode,
    //         vehicleName: payload?.vehicleName,
    //         vehicleVariant: payload?.vehicleVariant,
    //         vehicleModel: payload?.vehicleModel,
    //         vehicleBrand: payload?.vehicleBrand,
    //         seatingCapacity: payload?.seatingCapacity,
    //       };
    //     }
    //     return item;
    //   });
    //   console.log(updatedData, "find updatedData");

    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      // return updatedData;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
export const getPaymentSearchDataMiddleWare = createAsyncThunk(
  GET_PAYMENT_SEARCH,
  async ({ field, value }, { rejectWithValue, getState }) => {
      console.log(field, value, "data find");
      const { leadReducers } = getState();
      const { leadtabledata } = leadReducers;
      console.log(leadReducers,"leadReducers");
      
      function filterPaymentsByField(data, field, value) {
          const lowercasedValue = value.toLowerCase();
          const outputData = data.filter(item => {

              if (field === 'Name') {
                  return item.Name.toLowerCase().includes(lowercasedValue);
              } else if (field === 'LeadID') {
                  return item.LeadID.toLowerCase().includes(lowercasedValue);
              }
              return (
                  (item.Name.toLowerCase().includes(lowercasedValue) ||
                      item.LeadID.toLowerCase().includes(lowercasedValue))

              );


          });
          return outputData
      }
      try {
          const filteredPayments = filterPaymentsByField(leadtabledata, field, value);
          console.log(filteredPayments, "filteredPayments");
          return filteredPayments;
      } catch (error) {
          return rejectWithValue(error?.response?.data?.error?.message);
      }
  }
);
