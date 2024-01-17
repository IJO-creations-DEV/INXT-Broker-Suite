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
            status: true,
            action: <SvgIconeye />,
          },
          {
            id: 2,
            pettycashcode: "petty456",
            pettycashname: "anotherPetty",
            pettycashsize: "45",
            minicashbox: "333",
            transactionlimit: "1000.00",
            availabelCash: "888",
            status: false,
            action: <SvgIconeye />,
          },
          {
            id: 3,
            pettycashcode: "petty789",
            pettycashname: "yetAnotherPetty",
            pettycashsize: "67",
            minicashbox: "444",
            transactionlimit: "750.00",
            availabelCash: "999",
            status: true,
            action: <SvgIconeye />,
          },
          {
            id: 4,
            pettycashcode: "petty1012",
            pettycashname: "Petty4",
            pettycashsize: "89",
            minicashbox: "555",
            transactionlimit: "1200.00",
            availabelCash: "1111",
            status: false,
            action: <SvgIconeye />,
          },
          {
            id: 5,
            pettycashcode: "petty1315",
            pettycashname: "Petty5",
            pettycashsize: "10",
            minicashbox: "666",
            transactionlimit: "900.00",
            availabelCash: "1234",
            status: true,
            action: <SvgIconeye />,
          },
          {
            id: 6,
            pettycashcode: "petty1618",
            pettycashname: "Petty6",
            pettycashsize: "12",
            minicashbox: "777",
            transactionlimit: "1500.00",
            availabelCash: "5678",
            status: false,
            action: <SvgIconeye />,
          },
          {
            id: 7,
            pettycashcode: "petty1921",
            pettycashname: "Petty7",
            pettycashsize: "14",
            minicashbox: "888",
            transactionlimit: "1100.00",
            availabelCash: "9876",
            status: true,
            action: <SvgIconeye />,
          },
          {
            id: 8,
            pettycashcode: "petty2224",
            pettycashname: "Petty8",
            pettycashsize: "16",
            minicashbox: "999",
            transactionlimit: "1800.00",
            availabelCash: "5432",
            status: false,
            action: <SvgIconeye />,
          },
          {
            id: 9,
            pettycashcode: "petty2527",
            pettycashname: "Petty9",
            pettycashsize: "18",
            minicashbox: "1010",
            transactionlimit: "1300.00",
            availabelCash: "8765",
            status: true,
            action: <SvgIconeye />,
          },
          {
            id: 10,
            pettycashcode: "petty2830",
            pettycashname: "Petty10",
            pettycashsize: "20",
            minicashbox: "1111",
            transactionlimit: "1600.00",
            availabelCash: "4321",
            status: false,
            action: <SvgIconeye />,
          }

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
                state.pettyCashSearchList = action.payload;
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
              console.log(updatedIndex,"updatedIndex");
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