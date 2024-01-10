import { createSlice } from "@reduxjs/toolkit";
import SvgIconeye from "../../../../assets/icons/SvgIconeye";
import { getPatchPettyCashEdit, getPettyCashSearchList, getPettyCashView, patchPettyCashEdit, pettyCashMaster, postAddPettyCash } from "./pettyCashMasterMiddleWare";
const initialState = {
    loading: false,
    error: "",
    addPettyCash: {},
    pettyCashSearchList: [],
    pettyCashView: {},
    pettyCashEdit: {},
    getPettyCashEdit: {},
    pettyCashList: [
        {
            id: 1,
            pettycashcode: "petty123",
            pettycashname: "petty",
            pettycashsize: "23",
            minicashbox: "222",
            transactionlimit: "500.00",
            availabelCash: "777",
            status: "true",
            action: <SvgIconeye />,
        },
        {
            id: 2,
            pettycashcode: "petty777",
            pettycashname: "petty",
            pettycashsize: "77",
            minicashbox: "99",
            transactionlimit: "800.00",
            availabelCash: "00",
            status: "true",
            action: <SvgIconeye />,
        },

    ],

};
let nextId = 3
const pettyCashMasterReducers = createSlice({
    name: "pettyCashMaster",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(pettyCashMaster.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(pettyCashMaster.fulfilled, (state, action) => {
            state.loading = false;
            state.pettyCashList = action.payload;
        });
        builder.addCase(pettyCashMaster.rejected, (state, action) => {
            state.loading = false;
            state.pettyCashList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

        //postAddPettyCash
        builder.addCase(postAddPettyCash.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            postAddPettyCash.fulfilled, (state, action) => {
                state.loading = false;
                const newItem = { ...action.payload, id: nextId++ };
                state.pettyCashList = [...state.pettyCashList, newItem];
                console.log(state.pettyCashList, "newItem")
            }
        );
        builder.addCase(
            postAddPettyCash.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );

        //getPettyCashSearchList

        builder.addCase(getPettyCashSearchList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getPettyCashSearchList.fulfilled, (state, action) => {
                state.loading = false;
                state.pettyCashSearchList = [action.payload];
            }
        );
        builder.addCase(
            getPettyCashSearchList.rejected, (state, action) => {
                state.loading = false;
                state.pettyCashSearchList = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );


        // patchPettyCashEdit

        builder.addCase(patchPettyCashEdit.pending, (state) => {
            state.loading = true;
        });
       
        builder.addCase(
            patchPettyCashEdit.fulfilled,
            (state, action) => {
              state.loading = false;
              const updatedIndex = state.pettyCashList.findIndex(
                (item) => item.id === action.payload.id
              );
              if (updatedIndex !== -1) {
                const updatedCurrencyList = [...state.pettyCashList];
                updatedCurrencyList[updatedIndex] = action.payload;
                state.pettyCashList = updatedCurrencyList;
              } else {
                state.pettyCashList = [...state.pettyCashList, action.payload];
              }
            }
          );
          builder.addCase(patchPettyCashEdit.rejected, (state, action) => {
            state.loading = false;
            state.pettyCashEdit = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        }
        );
      

        builder.addCase(getPatchPettyCashEdit.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getPatchPettyCashEdit.fulfilled, (state, action) => {
            state.loading = false;
            state.getPettyCashEdit = action.payload;
        }
        );
        builder.addCase(getPatchPettyCashEdit.rejected, (state, action) => {
            state.loading = false;
            state.getPettyCashEdit = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        }
        );

        //getPettyCashView

        builder.addCase(getPettyCashView.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getPettyCashView.fulfilled, (state, action) => {
                state.loading = false;
                state.pettyCashView = action.payload;

            }
        );
        builder.addCase(
            getPettyCashView.rejected, (state, action) => {
                state.loading = false;
                state.pettyCashView = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );


    },
});

export default pettyCashMasterReducers.reducer;