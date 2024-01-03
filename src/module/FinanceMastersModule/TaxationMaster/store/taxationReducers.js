import { createSlice } from "@reduxjs/toolkit";
import SvgIconeye from "../../../../assets/icons/SvgIconeye";
import { TaxationData, getTaxationData } from "./taxationMiddleWare";
const initialState = {
    loading: false,
    error: "",
    taxationList: [
        {
            id: 1,
            taxationCode: "Voucher0123",
            taxationName:"Tax",
            taxationRate:'30%',
            effectiveFrom: "11/12/2023",
            effectiveTo: "11/12/2023",
            status:"true",
            action: <SvgIconeye />,
        },
        {
            id: 2,
            taxationCode: "Voucher0123",
            taxationName:"Tax",
            taxationRate:'30%',
            effectiveFrom: "11/12/2023",
            effectiveTo: "11/12/2023",
            status:"true",
            action: <SvgIconeye />,
        },
        {
            id: 3,
            taxationCode: "Voucher0123",
            taxationName:"Tax",
            taxationRate:'30%',
            effectiveFrom: "11/12/2023",
            effectiveTo: "11/12/2023",
            status:"true",
            action: <SvgIconeye />,
        },
        {
            id: 4,
            taxationCode: "Voucher0123",
            taxationName:"Tax",
            taxationRate:'30%',
            effectiveFrom: "11/12/2023",
            effectiveTo: "11/12/2023",
            status:"true",
            action: <SvgIconeye />,
        },
        
    ],
   
    
};
const taxationReducers = createSlice({
    name: "commission",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTaxationData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getTaxationData.fulfilled, (state, action) => {
            state.loading = false;
            state.taxationList = action.payload;
            console.log(state.taxationList,"taxt")
        });
        builder.addCase(getTaxationData.rejected, (state, action) => {
            state.loading = false;

            state.taxationList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
       

    },
});

export default taxationReducers.reducer;
