import { createSlice } from "@reduxjs/toolkit";
import { getCommission, getCommissionSearchList, getCommissionView, getLevelCommissionSharing, getPatchCommissionEdit, getPatchCommissionEditMiddleware, patchCommissionEdit, postAddCommission, postAddLevelShareRatingCommission } from "./commissionMiddleWare";
import SvgIconeye from "../../../../assets/icons/SvgIconeye";
const initialState = {
    loading: false,
    error: "",
    addCommission: {},
    commissionSearchList: [],
    commissionView: {},
    CommissionEdit: {},
    getCommissionEdit: {},
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
    addLevelCommissionSharing: [
        {
            id: 1,
            level: "11",
            commissionCode: "CC123",
            sharingRate: "S123",
        },
        {
            id: 2,
            level: "11",
            commissionCode: "CC123",
            sharingRate: "S123",
        }
    ]



};
let nextId = 2
let nextIdd = 3
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

        builder.addCase(getLevelCommissionSharing.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getLevelCommissionSharing.fulfilled, (state, action) => {
            state.loading = false;
            state.addLevelCommissionSharing = [action.payload];
        });
        builder.addCase(getLevelCommissionSharing.rejected, (state, action) => {
            state.loading = false;
            state.addLevelCommissionSharing = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

        builder.addCase(postAddLevelShareRatingCommission.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            postAddLevelShareRatingCommission.fulfilled,
            (state, action) => {
                state.loading = false;
                const newItem = { ...action.payload, id: nextIdd++ };
                state.addLevelCommissionSharing = [...state.addLevelCommissionSharing, newItem];
            }
        );
        builder.addCase(
            postAddLevelShareRatingCommission.rejected,
            (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );


        //CommissionDetail

        builder.addCase(getPatchCommissionEditMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getPatchCommissionEditMiddleware.fulfilled,
            (state, action) => {
                state.loading = false;
                state.getCommissionEdit = action.payload;
            }
        );
        builder.addCase(
            getPatchCommissionEditMiddleware.rejected,
            (state, action) => {
                state.loading = false;

                state.getCommissionEdit = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );

        builder.addCase(patchCommissionEdit.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(
            patchCommissionEdit.fulfilled,
            (state, action) => {
                state.loading = false;
                const updatedIndex = state.commissionList.findIndex(
                    (item) => item.id === action.payload.id
                );
                if (updatedIndex !== -1) {
                    const updatedCurrencyList = [...state.commissionList];
                    updatedCurrencyList[updatedIndex] = action.payload;
                    state.commissionList = updatedCurrencyList;
                } else {
                    state.commissionList = [...state.commissionList, action.payload];
                }
            }
        );
        builder.addCase(
            patchCommissionEdit.rejected,
            (state, action) => {
                state.loading = false;
                state.CommissionEdit = {};
                state.error = typeof action.payload === "string" ? action.payload : "";

            }
        );


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
