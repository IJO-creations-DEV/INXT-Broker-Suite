import { createSlice } from "@reduxjs/toolkit";
import SvgIconeye from "../../../../assets/icons/SvgIconeye";
import { pettyCashMaster } from "./pettyCashMasterMiddleWare";
const initialState = {
    loading: false,
    error: "",
    pettyCashList: [
        {
            id: 1,
            pettycashcode: "petty123",
            pettycashname: "petty",
            pettycashsize: "23",
            minicashbox: "222",
            transactionlimit: "500.00",
            status:"true",
            action: <SvgIconeye />,
        },
        {
            id: 2,
            pettycashcode: "petty123",
            pettycashname: "petty",
            pettycashsize: "23",
            minicashbox: "222",
            transactionlimit: "500.00",
            status:"true",
            action: <SvgIconeye />,
        },
        {
            id: 3,
            pettycashcode: "petty123",
            pettycashname: "petty",
            pettycashsize: "23",
            minicashbox: "222",
            transactionlimit: "500.00",
            status:"true",
            action: <SvgIconeye />,
        },
        {
            id: 4,
            pettycashcode: "petty123",
            pettycashname: "petty",
            pettycashsize: "23",
            minicashbox: "222",
            transactionlimit: "500.00",
            status:"true",
            action: <SvgIconeye />,
        },
        {
            id: 5,
            pettycashcode: "petty123",
            pettycashname: "petty",
            pettycashsize: "23",
            minicashbox: "222",
            transactionlimit: "500.00",
            status:"true",
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
        

    },
});

export default pettyCashMasterReducers.reducer;