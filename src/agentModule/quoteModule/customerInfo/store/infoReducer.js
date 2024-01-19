import { createSlice } from "@reduxjs/toolkit";
import { postinformationMiddleWare,patchinformationMiddleWare} from "./infoMiddleWare";

const initialState = {
    loading: false,
    error: "",
    paymenttabledata:[],
    postcustomerinfodata:
      {
        id: "1",
        StateCode: "SC1",
        StateName: "StateName1",
        Country: "India",
        Modifiedby: "User1",
        ModifiedOn: "2024-01-11",
      },
      
    
    patchinformation:{}
};

const customerInfoReducer = createSlice({
    name: "customerInfoReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {



      //postcustomerInfoReducer

    builder.addCase(postinformationMiddleWare.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(
        postinformationMiddleWare.fulfilled,
        (state, action) => {
          state.loading = false;
          state.postcustomerinfodata = action.payload
        }
      );
      builder.addCase(
        postinformationMiddleWare.rejected,
        (state, action) => {
          state.loading = false;
          state.error = typeof action.payload === "string" ? action.payload : "";
        }
      );


        //patchinformationMiddleWare

    builder.addCase(patchinformationMiddleWare.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchinformationMiddleWare.fulfilled,
      (state, action) => {
        state.loading = false;
        console.log(state.postcustomerinfodata, "state.countryTableList");
              const updatedIndex = state.postcustomerinfodata.findIndex(
                (item) => item.id === action.payload.id
              );
              if (updatedIndex !== -1) {
                const updatedAddDisbursmentTable = [...state.postcustomerinfodata];
                updatedAddDisbursmentTable[updatedIndex] = action.payload;
                state.postcustomerinfodata = updatedAddDisbursmentTable;
              } else {
                state.postcustomerinfodata = [...state.postcustomerinfodata, action.payload];
              }
      }
    );
    builder.addCase(
      patchinformationMiddleWare.rejected,
      (state, action) => {
        state.loading = false;
        state.editList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );
      
    },
});

export default customerInfoReducer.reducer;