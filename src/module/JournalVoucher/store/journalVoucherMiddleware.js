import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../utility/commonServices";
import { APIROUTES } from "../../../routes/apiRoutes";
import { DELETE_JOURNAL_VOUCHER, GET_JOURNAL_VOUCHER, GET_JOURNAL_VOUCHER_SEARCH_LIST, GET_POST_TABEL_JOURNAL_VOUCHER, POST_ADD_JOURNAL_VOUCHER, POST_JOURNAL_VOUCHER } from "../../../redux/actionTypes";


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
                    return item.tn.toLowerCase().includes(textSearch.toLowerCase());
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

    // export const jvDeleteData = createAsyncThunk(
    //     DELETE_JOURNAL_VOUCHER,
    //     async (payload, { rejectWithValue, getState }) => {
    //         console.log(payload,"payloadd")
    //         const { journalVoucherMainReducers } = getState();
    //         console.log(journalVoucherMainReducers, "dta");
    //         const { journalVoucherList } = journalVoucherMainReducers
    //         const filteredData = journalVoucherList.filter(item => item.id === 1);
    //         console.log(filteredData, "filteredData")
    //         try {
    //             // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
    //             return filteredData[0];
    //         } catch (error) {
    //             return rejectWithValue(error?.response.data.error.message);
    //         }
    //     },
    // )
    



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



const postJV = async (formData) => {
    console.log(formData, "formData")
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { success: true, data: formData };
};
export const postJournalVoucher = createAsyncThunk(
    POST_JOURNAL_VOUCHER,
    async (payload, { rejectWithValue }) => {
        console.log(payload, "values")
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            const response = await postJV(payload);
            return response;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },)

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



// const postAddJV = async (formData) => {
//     console.log(formData, "formData")
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return { success: true, data: formData };
// };
// export const postAddJournalVoucher = createAsyncThunk(
//     POST_ADD_JOURNAL_VOUCHER,
//     async (payload, { rejectWithValue }) => {
//         console.log(payload, "values")
//         try {
//             // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
//             const response = await postAddJV(payload);
//             return response;
//         } catch (error) {
//             return rejectWithValue(error?.response.data.error.message);
//         }
//     },)
export const postAddJournalVoucher = createAsyncThunk(
    POST_ADD_JOURNAL_VOUCHER,
    async (payload, { rejectWithValue, getState }) => {
        console.log(payload, "payload");

        let bodyTableData = {
            mainAccount: payload?.mainAccount,
            subAccount: payload?.subAccount,
            branchCode: payload?.branchCode,
            currencyCode:payload?.currencyCode,
            foreignAmount:payload?.foreignAmount,
            entryType:payload?.entryType
            
        };
        try {
            console.log(bodyTableData, "find middleware");

            return bodyTableData;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error?.message);
        }
    }
);

