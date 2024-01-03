import { createSlice } from "@reduxjs/toolkit";
import SvgIconeye from "../../../../assets/icons/SvgIconeye";
import { getSubAccount } from "./subAccountMiddleWare";
const initialState = {
    loading: false,
    error: "",
    subAccountList: [
        {
            id: 1,
            subAccountCode: "sub123",
            description:"SubAccount",
            status:"true",
            action: <SvgIconeye />,
        },
        {
            id: 2,
            subAccountCode: "sub123",
            description:"SubAccount",
            status:"true",
            action: <SvgIconeye />
        },
        {
            id: 3,
            subAccountCode: "sub123",
            description:"SubAccount",
            status:"true",
            action: <SvgIconeye />
        },
        {
            id: 4,
            subAccountCode: "sub123",
            description:"SubAccount",
            status:"true",
            action: <SvgIconeye />
        },
        
    ],
   
    
};
const subAccaountReducers = createSlice({
    name: "subAccount",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSubAccount.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getSubAccount.fulfilled, (state, action) => {
            state.loading = false;
            state.subAccountList = action.payload;
           
        });
        builder.addCase(getSubAccount.rejected, (state, action) => {
            state.loading = false;

            state.subAccountList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
       

    },
});

export default subAccaountReducers.reducer;
