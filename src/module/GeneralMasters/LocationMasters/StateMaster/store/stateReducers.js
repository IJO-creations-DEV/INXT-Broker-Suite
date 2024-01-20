import { createSlice } from "@reduxjs/toolkit";
import { getStateMiddleware, getStateListByIdMiddleware,postAddStateMiddleware,patchStateEditMiddleware,getSearchStateMiddleware } from "./stateMiddleware";

const initialState = {
    loading: false,
    error: "",
    stateTableList: [
      {
        id: "1",
        StateCode: "SC1",
        StateName: "StateName1",
        Country: "India",
        Modifiedby: "User1",
        ModifiedOn: "2024-01-11",
      },
      {
        id: "2",
        StateCode: "SC2",
        StateName: "StateName2",
        Country: "USA",
        Modifiedby: "User2",
        ModifiedOn: "2024-01-12",
      },
      {
        id: "3",
        StateCode: "SC3",
        StateName: "StateName3",
        Country: "Canada",
        Modifiedby: "User3",
        ModifiedOn: "2024-01-13",
      },
      {
        id: "4",
        StateCode: "SC4",
        StateName: "StateName4",
        Country: "Australia",
        Modifiedby: "User4",
        ModifiedOn: "2024-01-14",
      },
      {
        id: "5",
        StateCode: "SC5",
        StateName: "StateName5",
        Country: "UK",
        Modifiedby: "User5",
        ModifiedOn: "2024-01-15",
      },
      {
        id: "6",
        StateCode: "SC6",
        StateName: "StateName6",
        Country: "Germany",
        Modifiedby: "User6",
        ModifiedOn: "2024-01-16",
      },
      {
        id: "7",
        StateCode: "SC7",
        StateName: "StateName7",
        Country: "France",
        Modifiedby: "User7",
        ModifiedOn: "2024-01-17",
      },
      {
        id: "8",
        StateCode: "SC8",
        StateName: "StateName8",
        Country: "Japan",
        Modifiedby: "User8",
        ModifiedOn: "2024-01-18",
      },
      {
        id: "9",
        StateCode: "SC9",
        StateName: "StateName9",
        Country: "Brazil",
        Modifiedby: "User9",
        ModifiedOn: "2024-01-19",
      },
      {
        id: "10",
        StateCode: "SC10",
        StateName: "StateName10",
        Country: "South Africa",
        Modifiedby: "User10",
        ModifiedOn: "2024-01-20",
      }
    ],
    getStateListById:[],
    getSearchState:[],
    postAddState:"",
    patchStateEdit:{}

};
const stateReducer = createSlice({
    name: "employee",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStateMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getStateMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.stateTableList = action.payload;
        });
        builder.addCase(getStateMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.stateTableList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
        builder.addCase(getStateListByIdMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getStateListByIdMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.getStateListById = action.payload;
        });
        builder.addCase(getStateListByIdMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.getStateListById = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

        builder.addCase(getSearchStateMiddleware.pending, (state) => {
          state.loading = true;
      });
      builder.addCase(getSearchStateMiddleware.fulfilled, (state, action) => {
          state.loading = false;
          state.getSearchState = action.payload;
      });
      builder.addCase(getSearchStateMiddleware.rejected, (state, action) => {
          state.loading = false;

          state.getSearchState = {};
          state.error = typeof action.payload === "string" ? action.payload : "";
      });
     
     

          builder.addCase(postAddStateMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(postAddStateMiddleware.fulfilled, (state, action) => {
            console.log(action.payload, 'find action.payload')
            state.loading = false;
            state.stateTableList = [...state.stateTableList, action.payload];
          });
          builder.addCase(postAddStateMiddleware.rejected, (state, action) => {
            state.loading = false;
       
            //   state.paymentVocherList = state.paymentVocherList;
            state.error = typeof action.payload === "string" ? action.payload : "";
          });

      
          builder.addCase(patchStateEditMiddleware.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(
            patchStateEditMiddleware.fulfilled,
            (state, action) => {
              state.loading = false;
              console.log(state.stateTableList, "state.countryTableList");
              const updatedIndex = state.stateTableList.findIndex(
                (item) => item.id === action.payload.id
              );
              if (updatedIndex !== -1) {
                const updatedAddDisbursmentTable = [...state.stateTableList];
                updatedAddDisbursmentTable[updatedIndex] = action.payload;
                state.stateTableList = updatedAddDisbursmentTable;
              } else {
                state.stateTableList = [...state.stateTableList, action.payload];
              }
            }
          );
          builder.addCase(
            patchStateEditMiddleware.rejected,
            (state, action) => {
              state.loading = false;
      
              state.editList = {};
              state.error = typeof action.payload === "string" ? action.payload : "";
            }
          );

        

          
    },
});

export default stateReducer.reducer;
