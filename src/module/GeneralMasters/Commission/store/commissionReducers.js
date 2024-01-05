import { createSlice } from "@reduxjs/toolkit";
import { getCommission, getCommissionSearchList, getCommissionView, patchCommissionEdit, postAddCommission } from "./commissionMiddleWare";
import SvgIconeye from "../../../../assets/icons/SvgIconeye";
const initialState = {
    loading: false,
    error: "",
    addCommission: {},
    commissionSearchList: [],
    commissionView: {},
    CommissionEdit: {},
    commissionList: [
        {
            id: 1,
            commissionCode: "Voucher0123",
            product: "Trans00123",
            selectCover: "Cus01123",
            effectiveFrom: "11/12/2023",
            effectiveTo: "11/12/2023",
            status: "true",
            // Amount: "500.00",
            action: <SvgIconeye />,
        },


    ],



};
let nextId=2
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
            state.commissionList = [action.payload];
        });
        builder.addCase(getCommission.rejected, (state, action) => {
            state.loading = false;

            state.commissionList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

        //addCommission
        builder.addCase(postAddCommission.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            postAddCommission.fulfilled,
            (state, action) => {
                state.loading = false;
                const newItem = { ...action.payload, id: nextId++ };
                state.commissionList = [...state.commissionList, newItem];
            }
        );
        builder.addCase(
            postAddCommission.rejected,
            (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );
        //commissionSearchList

        builder.addCase(getCommissionSearchList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getCommissionSearchList.fulfilled,
            (state, action) => {
                state.loading = false;
                state.commissionSearchList = action.payload;
            }
        );
        builder.addCase(
            getCommissionSearchList.rejected,
            (state, action) => {
                state.loading = false;

                state.commissionSearchList = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );


        //CommissionDetail

        // builder.addCase(patchCommissionEdit.pending, (state) => {
        //     state.loading = true;
        // });
        // builder.addCase(
        //     patchCommissionEdit,
        //     (state, action) => {
        //         state.loading = false;
        //         state.CommissionEdit = action.payload;
        //     }
        // );
        // builder.addCase(
        //     patchCommissionEdit.rejected,
        //     (state, action) => {
        //         state.loading = false;

        //         state.CommissionEdit = {};
        //         state.error = typeof action.payload === "string" ? action.payload : "";
        //     }
        // );

        //getCommissionView

        builder.addCase(getCommissionView.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getCommissionView.fulfilled,
            (state, action) => {
                state.loading = false;
                state.commissionView = action.payload;
            }
        );
        builder.addCase(
            getCommissionView.rejected,
            (state, action) => {
                state.loading = false;

                state.commissionView = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );

    },
});

export default commissionReducers.reducer;
