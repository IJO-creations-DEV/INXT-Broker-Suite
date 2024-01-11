import { createSlice } from "@reduxjs/toolkit";
import { getCorrectionJVTabelData, getCorrectionJVView, getPatchCorrectionJVEdit, patchCorrectionJVEdit, postCorrectionJVData } from "./correctionJVMiddleWare";

const initialState = {
    loading: false,
    error: "",
    addCorrectionJV: {},
    correctionJVView: {},
    correctionEdit: {},
    correctionJVList: [
        {
            id: 1,
            mainAccount: "main044",
            subAccount: "sub0123",
            branchCode: "branch012",
            currencyCode: "cu123",
            foreignAmount: "5100",
            localAmount: "200",
            entryType: "Credit"
        },
        {
            id: 2,
            mainAccount: "main0123",
            subAccount: "sub0123",
            branchCode: "branch88",
            currencyCode: "cu77",
            foreignAmount: "200",
            localAmount: "5100",
            entryType: "Debit"
        }
    ],
    getCorrectionJVEdit: []
};
let nextId = 2
const correctioneversalJVReducers = createSlice({
    name: "reversalJV",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCorrectionJVTabelData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCorrectionJVTabelData.fulfilled, (state, action) => {
            state.loading = false;
            // state.correctionJVList = action.payload.data;
            // console.log("qqq",action.payload.data)
        });
        builder.addCase(getCorrectionJVTabelData.rejected, (state, action) => {
            state.loading = false;

            state.correctionJVList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

        //post


        builder.addCase(postCorrectionJVData.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(postCorrectionJVData.fulfilled, (state, action) => {
            state.loading = false;
            const newItem = { ...action.payload, id: nextId++ };
            state.correctionJVList = [...state.correctionJVList, newItem];
        })
        builder.addCase(postCorrectionJVData.rejected, (state, action) => {
            state.loading = false;
            state.error = typeof action.payload === "string" ? action.payload : "";
        });


        //view
        builder.addCase(getCorrectionJVView.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCorrectionJVView.fulfilled, (state, action) => {
            state.loading = false;
            state.correctionJVView = action.payload.data;
        });
        builder.addCase(getCorrectionJVView.rejected, (state, action) => {
            state.loading = false;

            state.correctionJVView = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });



        builder.addCase(getPatchCorrectionJVEdit.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getPatchCorrectionJVEdit.fulfilled, (state, action) => {
            state.loading = false;
            state.getCorrectionJVEdit = action.payload.data;
        });
        builder.addCase(getPatchCorrectionJVEdit.rejected, (state, action) => {
            state.loading = false;
            state.getCorrectionJVEdit = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });


        builder.addCase(patchCorrectionJVEdit.pending,
            (state) => {
                state.loading = true;
            }
        );
        builder.addCase(
            patchCorrectionJVEdit.fulfilled, (state, action) => {
                state.loading = false;
                state.correctionJVList = action.payload
            }
        );
        builder.addCase(patchCorrectionJVEdit.rejected, (state, action) => {
            state.loading = false;
            state.error = typeof action.payload === "string" ? action.payload : "";
        }
        );
    },
});

export default correctioneversalJVReducers.reducer;
