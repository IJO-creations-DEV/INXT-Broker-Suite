import { createSlice } from "@reduxjs/toolkit";
import SvgIconeye from "../../../../assets/icons/SvgIconeye";
import { getTaxationData, getTaxationSearchList, getTaxationView, patchTaxationEdit, postAddTaxation } from "./taxationMiddleWare";
const initialState = {
    loading: false,
    error: "",
    addTaxation: {},
    taxationSearchList: [],
    taxationView: {},
    taxationEdit: {},
    taxationList: [
        {
            id: 1,
            taxationCode: "Voucher0123",
            taxationName: "Tax",
            taxationRate: '30%',
            effectiveFrom: "11/12/2023",
            effectiveTo: "11/12/2023",
            status: "true",
            action: <SvgIconeye />,
        },
        {
            id: 2,
            taxationCode: "Voucher0123",
            taxationName: "Tax",
            taxationRate: '30%',
            effectiveFrom: "11/12/2023",
            effectiveTo: "11/12/2023",
            status: "true",
            action: <SvgIconeye />,
        },
        {
            id: 3,
            taxationCode: "Voucher0123",
            taxationName: "Tax",
            taxationRate: '30%',
            effectiveFrom: "11/12/2023",
            effectiveTo: "11/12/2023",
            status: "true",
            action: <SvgIconeye />,
        },
        {
            id: 4,
            taxationCode: "Voucher0123",
            taxationName: "Tax",
            taxationRate: '30%',
            effectiveFrom: "11/12/2023",
            effectiveTo: "11/12/2023",
            status: "true",
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
            console.log(state.taxationList, "taxt")
        });
        builder.addCase(getTaxationData.rejected, (state, action) => {
            state.loading = false;

            state.taxationList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });


        //addCommission
        builder.addCase(postAddTaxation.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            postAddTaxation.fulfilled,(state, action) => {
                state.loading = false;
                state.addTaxation = action.payload;
            }
        );
        builder.addCase(
            postAddTaxation.rejected,(state, action) => {
                state.loading = false;
                state.addTaxation = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );
        //getTaxationSearchList

        builder.addCase(getTaxationSearchList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getTaxationSearchList.fulfilled,(state, action) => {
                state.loading = false;
                state.taxationSearchList = action.payload;
            }
        );
        builder.addCase(
            getTaxationSearchList.rejected,(state, action) => {
                state.loading = false;

                state.taxationSearchList = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );


        //patchTaxationEdit

        // builder.addCase(patchTaxationEdit.pending, (state) => {
        //     state.loading = true;
        // });
        // builder.addCase(
        //     patchTaxationEdit,(state, action) => {
        //         state.loading = false;
        //         state.taxationEdit = action.payload;
        //     }
        // );
        // builder.addCase(
        //     patchTaxationEdit.rejected,(state, action) => {
        //         state.loading = false;

        //         state.taxationEdit = {};
        //         state.error = typeof action.payload === "string" ? action.payload : "";
        //     }
        // );

        //getTaxationView

        builder.addCase(getTaxationView.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getTaxationView.fulfilled,
            (state, action) => {
                state.loading = false;
                state.taxationView = action.payload;
            }
        );
        builder.addCase(
            getTaxationView.rejected,(state, action) => {
                state.loading = false;

                state.taxationView = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );


    },
});

export default taxationReducers.reducer;
