import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../utility/commonServices";
import { APIROUTES } from "../../../routes/apiRoutes";
import { DELETE_JOURNAL_VOUCHER, GET_JOURNAL_VOUCHER, GET_JOURNAL_VOUCHER_SEARCH_LIST, GET_POST_TABEL_JOURNAL_VOUCHER, PATCH_JOURNAL_VOUCHER_EDIT, POST_ADD_JOURNAL_VOUCHER, POST_JOURNAL_VOUCHER } from "../../../redux/actionTypes";


export const journalVoucherMiddleware = createAsyncThunk(
    GET_JOURNAL_VOUCHER,
    async (payload, { rejectWithValue, getState }) => {
        const { journalVoucherMainReducers } = getState();
        console.log(journalVoucherMainReducers, "dta");
        const { journalVoucherList } = journalVoucherMainReducers
        const filteredData = journalVoucherList.filter(item => item.id === 1);
        console.log(filteredData, "filteredData")
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return filteredData[0];
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
)


export const getJournalVoucherSearchList = createAsyncThunk(
    GET_JOURNAL_VOUCHER_SEARCH_LIST,
    async (payload, { rejectWithValue, getState }) => {
        const { textSearch } = payload;
        const { journalVoucherMainReducers } = getState();

        const { journalVoucherList } = journalVoucherMainReducers;
        console.log(journalVoucherList, "1234")

        try {
            if (textSearch.trim() !== "") {
                const searchResults = journalVoucherList.filter(item => {
                    return item.totalCredit.toLowerCase().includes(textSearch.toLowerCase());
                });
                console.log(searchResults, "searchResults")
                return searchResults;
            } else {
                return journalVoucherList;
            }
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error?.message);
        }
    },
);


export const postTCJournalVoucher = createAsyncThunk(
    POST_JOURNAL_VOUCHER,
    async (payload, { rejectWithValue, getState }) => {
        console.log(payload, "payload");

        let bodyTableData = {
            transationCode: payload?.transationCode,
            totalCredit: payload?.totalCredit,
            totalDebit: payload?.totalDebit,
            transationDescription: payload?.transationDescription,
            date: payload?.date.toLocaleDateString("en-US", {
                month: "numeric",
                day: "2-digit",
                year: "numeric",
            }),

        };
        try {
            console.log(bodyTableData, "find middleware");

            return bodyTableData;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error?.message);
        }
    }
);



// export const patchJVMiddleware = createAsyncThunk(
//     PATCH_JOURNAL_VOUCHER_EDIT,
//     async (payload, { rejectWithValue, getState }) => {
//         try {
//             console.log(payload, "find payload in patch");
//             // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
//             return payload;
//         } catch (error) {
//             return rejectWithValue(error?.response.data.error.message);
//         }
//     }
// );
export const patchJVMiddleware = createAsyncThunk(
    PATCH_JOURNAL_VOUCHER_EDIT,
    async (payload, { rejectWithValue, getState }) => {
        console.log(payload,"payloadpayload")
        const { journalVoucherMainReducers } = getState();
        const { journalVoucherPostTabelData } = journalVoucherMainReducers;
        try {
            const editData = journalVoucherPostTabelData?.map((item) => {
                if (item.id === parseInt(payload?.id)) {
                    return {
                        ...item,
                        mainAccount: payload?.mainAccount,
                        subAccount: payload?.subAccount,
                        branchCode: payload?.branchCode,
                        localAmount:payload?.localAmount,
                        currencyCode: payload?.currencyCode,
                        foreignAmount: payload?.foreignAmount,
                        entryType: payload?.entryType,
                    };
                }
                return item;
            });
            console.log(editData,"editData")
            return editData;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error?.message || "An error occurred");
        }
    }
);


export const getJournalVoucherViewData = createAsyncThunk(
    GET_JOURNAL_VOUCHER,
    async (payload, { rejectWithValue, getState }) => {
        const { journalVoucherMainReducers } = getState();
        console.log(journalVoucherMainReducers, "dta");
        const { journalVoucherList } = journalVoucherMainReducers
        const filteredData = journalVoucherList.filter(item => item.id === 1);
        console.log(filteredData, "filteredData")
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return filteredData[0];
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
)






export const journalVoucherPostTabel = createAsyncThunk(
    GET_POST_TABEL_JOURNAL_VOUCHER,
    async (payload, { rejectWithValue, getState }) => {
        const { journalVoucherMainReducers } = getState();
        const { journalVoucherPostTabelData } = journalVoucherMainReducers;

        const newData = payload;
        try {
            const updatedList = [...journalVoucherPostTabelData, newData];
            return updatedList;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);




export const postAddJournalVoucher = createAsyncThunk(
    POST_ADD_JOURNAL_VOUCHER,
    async (payload, { rejectWithValue, getState }) => {
        // console.log(payload, "payload");

        let bodyTableData = {
            mainAccount: payload?.mainAccount,
            subAccount: payload?.subAccount,
            branchCode: payload?.branchCode,
            currencyCode: payload?.currencyCode,
            foreignAmount: payload?.foreignAmount,
            entryType: payload?.entryType

        };
        try {
            // console.log(bodyTableData, "find middleware");

            return bodyTableData;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error?.message);
        }
    }
);

