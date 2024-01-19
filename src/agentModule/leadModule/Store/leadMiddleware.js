import { createAsyncThunk } from "@reduxjs/toolkit";
import { POST_CREATELEAD_DATA ,GET_LEADTABLE_DATA,PATCH_LEADEDIT_DATA} from "../../../redux/actionTypes";




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
      const bodyData = {
        firstName:'qwerty',
        lastName:'p',
        preferredName:'manoj',
        dateofBirth:"03/06/2001",
            emailid:"qwerty@gmail.com",
           contactNumber:345678144,
            street:"",
            barangay:"",
            country:"",
            city:"",
            province:'',
            zipcode:'',

        // action: 1,
         action: payload?.id,
      };
      console.log(bodyData, "find add datas in midd");
  
      try {
        // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
        return bodyData;
      } catch (error) {
        return rejectWithValue(error?.response.data.error.message);
      }
    }
  );


  export const  patchLeadEditMiddleWare= createAsyncThunk(
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
