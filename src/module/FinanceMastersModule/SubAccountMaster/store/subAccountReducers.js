import { createSlice } from "@reduxjs/toolkit";
import SvgIconeye from "../../../../assets/icons/SvgIconeye";
import { getSubAccount, getSubAccountEdit, getSubAccountSearchList, getSubAccountView, patchSubAccountEdit, postSubAccount } from "./subAccountMiddleWare";
const initialState = {
    loading: false,
    error: "",
    addSubAccount: {},
    subAccountSearchList: [],
    subAccountView: {},
    subAccountEdit: {},
    subAccountList: [
        {
            id: 1,
            subAccountCode: "sub123",
            description: "SubAccount",
            subAccountName: "ayesha",
            mainAccount: "m123",
            currencyCode: "cd123",
            status: "true",
            action: <SvgIconeye />,
        },


    ],
    getSubDetailEdit: {}


};
let nextId = 2
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
            state.subAccountList = [action.payload];

        });
        builder.addCase(getSubAccount.rejected, (state, action) => {
            state.loading = false;

            state.subAccountList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });


        //addCommission
        builder.addCase(postSubAccount.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            postSubAccount.fulfilled, (state, action) => {
                state.loading = false;
                const newItem2 = { ...action.payload, id: nextId++ };
                state.subAccountList = [...state.subAccountList, newItem2];
                console.log(state.subAccountList, "kkk")
            }
        );
        builder.addCase(
            postSubAccount.rejected, (state, action) => {
                state.loading = false;

                state.subAccountList = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );
        // //subAccountSearchList

        builder.addCase(getSubAccountSearchList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getSubAccountSearchList.fulfilled, (state, action) => {
                state.loading = false;
                state.subAccountSearchList = action.payload;
            }
        );
        builder.addCase(
            getSubAccountSearchList.rejected, (state, action) => {
                state.loading = false;

                state.subAccountSearchList = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );



        builder.addCase(patchSubAccountEdit.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            patchSubAccountEdit.fulfilled,
            (state, action) => {
                state.loading = false;
                const updatedIndex = state.subAccountList.findIndex(
                    (item) => item.id === action.payload.id
                );
                if (updatedIndex !== -1) {
                    const updatedCurrencyList = [...state.subAccountList];
                    updatedCurrencyList[updatedIndex] = action.payload;
                    state.subAccountList = updatedCurrencyList;
                    console.log(state.subAccountList, "state.subAccountList")
                } else {
                    state.subAccountList = [...state.subAccountList, action.payload];
                }
            }
        );

        builder.addCase(
            patchSubAccountEdit.rejected,
            (state, action) => {
                state.loading = false;

                state.subAccountEdit = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );

        //getCurrecyDetailEdit
        builder.addCase(getSubAccountEdit.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getSubAccountEdit.fulfilled,
            (state, action) => {
                state.loading = false;
                state.getSubDetailEdit = action.payload;
            }
        );
        builder.addCase(
            getSubAccountEdit.rejected,
            (state, action) => {
                state.loading = false;

                state.getSubDetailEdit = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );

        builder.addCase(getSubAccountView.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getSubAccountView.fulfilled, (state, action) => {
                state.loading = false;
                state.subAccountView = action.payload;
            }
        );
        builder.addCase(
            getSubAccountView.rejected, (state, action) => {
                state.loading = false;

                state.subAccountView = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );

    },
});

export default subAccaountReducers.reducer;
