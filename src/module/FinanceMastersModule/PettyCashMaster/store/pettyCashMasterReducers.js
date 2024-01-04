import { createSlice } from "@reduxjs/toolkit";
import SvgIconeye from "../../../../assets/icons/SvgIconeye";
import { getPettyCashSearchList, getPettyCashView, patchPettyCashEdit, pettyCashMaster, postAddPettyCash } from "./pettyCashMasterMiddleWare";
const initialState = {
    loading: false,
    error: "",
    addPettyCash: {},
    pettyCashSearchList: [],
    pettyCashView: {},
    pettyCashEdit: {},
    pettyCashList: [
        {
            id: 1,
            pettycashcode: "petty123",
            pettycashname: "petty",
            pettycashsize: "23",
            minicashbox: "222",
            transactionlimit: "500.00",
            status: "true",
            action: <SvgIconeye />,
        },
        {
            id: 2,
            pettycashcode: "petty123",
            pettycashname: "petty",
            pettycashsize: "23",
            minicashbox: "222",
            transactionlimit: "500.00",
            status: "true",
            action: <SvgIconeye />,
        },
        {
            id: 3,
            pettycashcode: "petty123",
            pettycashname: "petty",
            pettycashsize: "23",
            minicashbox: "222",
            transactionlimit: "500.00",
            status: "true",
            action: <SvgIconeye />,
        },
        {
            id: 4,
            pettycashcode: "petty123",
            pettycashname: "petty",
            pettycashsize: "23",
            minicashbox: "222",
            transactionlimit: "500.00",
            status: "true",
            action: <SvgIconeye />,
        },
        {
            id: 5,
            pettycashcode: "petty123",
            pettycashname: "petty",
            pettycashsize: "23",
            minicashbox: "222",
            transactionlimit: "500.00",
            status: "true",
            action: <SvgIconeye />,
        },
    ],

};
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
                state.addPettyCash = action.payload;
            }
        );
        builder.addCase(
            postAddPettyCash.rejected, (state, action) => {
                state.loading = false;
                state.addPettyCash = {};
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


        //patchPettyCashEdit

        // builder.addCase(patchPettyCashEdit.pending, (state) => {
        //     state.loading = true;
        // });
        // builder.addCase(
        //     patchPettyCashEdit.fulfilled, (state, action) => {
        //         state.loading = false;
        //         state.pettyCashEdit = action.payload;
        //     }
        // );
        // builder.addCase(
        //     patchPettyCashEdit.rejected, (state, action) => {
        //         state.loading = false;
        //         state.pettyCashEdit = {};
        //         state.error = typeof action.payload === "string" ? action.payload : "";
        //     }
        // );

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