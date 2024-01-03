import { createSlice } from "@reduxjs/toolkit";

import { getCommission } from "./commissionMiddleWare";
import SvgIconeye from "../../../../assets/icons/SvgIconeye";
const initialState = {
    loading: false,
    error: "",
    commissionList: [
        {
            id: 1,
            commissionCode: "Voucher0123",
            product: "Trans00123",
            selectCover: "Cus01123",
            effectiveFrom: "11/12/2023",
            effectiveTo: "11/12/2023",
            status:"true",
            // Amount: "500.00",
            action: <SvgIconeye />,
        },
        {
            id: 2,
            commissionCode: "Voucher0123",
            product: "Trans00123",
            selectCover: "Cus01123",
            effectiveFrom: "11/12/2023",
            effectiveTo: "11/12/2023",
            status:"false",
            // Amount: "500.00",
            action: <SvgIconeye />,
        },
        {
            id: 3,
            commissionCode: "Voucher0123",
            product: "Trans00123",
            selectCover: "Cus01123",
            effectiveFrom: "11/12/2023",
            effectiveTo: "11/12/2023",
            status:"true",
            // Amount: "500.00",
            action: <SvgIconeye />,
        },
        {
            id: 4,
            commissionCode: "Voucher0123",
            product: "Trans00123",
            selectCover: "Cus01123",
            effectiveFrom: "11/12/2023",
            effectiveTo: "11/12/2023",
            status:"false",
            // Amount: "500.00",
            action: <SvgIconeye />,
        },
        
    ],
    
   
};
const commissionReducers = createSlice({
    name: "commission",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCommission.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCommission.fulfilled, (state, action) => {
            state.loading = false;
            state.commissionList = action.payload;
        });
        builder.addCase(getCommission.rejected, (state, action) => {
            state.loading = false;

            state.commissionList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
     

    },
});

export default commissionReducers.reducer;
