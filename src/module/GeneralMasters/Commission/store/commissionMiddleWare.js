import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getRequest } from "../../../utility/commonServices";
// import { APIROUTES } from "../../../routes/apiRoutes";
import { GET_COMMISSION, GET_COMMISSION_BY_ID, GET_COMMISSION_SEARCH_LIST, GET_COMMISSION_SHARING, GET_COMMISSION_VIEW, PATCH_COMMISSION_EDIT, POST_ADD_SHARINGRATE_COMMISSION, POST_COMMISSION } from "../../../../redux/actionTypes";




export const CommissionData = createAsyncThunk(
    GET_COMMISSION,
    async (payload, { rejectWithValue }) => {
        try {

            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);
export const getCommission = createAsyncThunk(
    GET_COMMISSION_BY_ID,
    async (payload, { rejectWithValue, getState }) => {
        const { commissionMianReducers } = getState();
        const { commissionList } = commissionMianReducers
        const filteredData = commissionList.filter(item => item.id === 1);


        try {

            return filteredData[0];
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


// export const postAddCommission = createAsyncThunk(
//     POST_COMMISSION,
//     async (payload, { rejectWithValue }) => {
//         try {
//             // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
//             return payload;
//         } catch (error) {
//             return rejectWithValue(error?.response.data.error.message);
//         }
//     },
// )
export const postAddCommission = createAsyncThunk(
    POST_COMMISSION,
    async (payload, { rejectWithValue, getState }) => {
        console.log(payload, "payload");

        let bodyTableData = {
            // reversalJVTransactionCode: payload?.reversalJVTransactionCode,
            // transactionNumber: payload?.transactionNumber,
            // transactionCode: payload?.transactionCode,
            commissionCode: payload?.commissionCode,
            product: payload?.product,
            selectCover: payload?.product,
            effectiveFrom: payload?.effectiveFrom,
            effectiveTo: payload?.effectiveTo,
            status: payload?.status,

        };
        try {
            console.log(bodyTableData, "find middleware");

            return bodyTableData;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error?.message);
        }
    }
);

export const getCommissionSearchList = createAsyncThunk(
    GET_COMMISSION_SEARCH_LIST,
    async (payload, { rejectWithValue, getState }) => {
        const { textSearch } = payload;
        const { commissionMianReducers } = getState();

        const { commissionList } = commissionMianReducers;
        console.log(commissionList, "1234")

        try {
            if (textSearch.trim() !== "") {
                const searchResults = commissionList.filter(item => {
                    return item.product.toLowerCase().includes(textSearch.toLowerCase());
                });
                console.log(searchResults, "searchResults")
                return searchResults;
            } else {
                return commissionList;
            }
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error?.message);
        }
    },
);
// export const getCommissionSearchList = createAsyncThunk(
//     GET_COMMISSION_SEARCH_LIST,
//     async (payload, { rejectWithValue }) => {
//         try {
//             // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
//             return payload;
//         } catch (error) {
//             return rejectWithValue(error?.response.data.error.message);
//         }
//     },
// )

export const getCommissionView = createAsyncThunk(
    GET_COMMISSION_VIEW,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
)
export const patchCommissionEdit = createAsyncThunk(
    PATCH_COMMISSION_EDIT,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
)
export const getLevelCommissionSharing = createAsyncThunk(
    GET_COMMISSION_SHARING,
    async (payload, { rejectWithValue, getState }) => {
        const { commissionMianReducers } = getState();
        const { addLevelCommissionSharing } = commissionMianReducers
        const filteredData = addLevelCommissionSharing.filter(item => item.id === 1);
        try {
            return filteredData[0];
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);
export const postAddLevelShareRatingCommission = createAsyncThunk(
    POST_ADD_SHARINGRATE_COMMISSION,
    async (payload, { rejectWithValue, getState }) => {
        console.log(payload, "payload");

        let bodyTableData = {
            // reversalJVTransactionCode: payload?.reversalJVTransactionCode,
            // transactionNumber: payload?.transactionNumber,
            // transactionCode: payload?.transactionCode,
            // commissionCode: payload?.commissionCode,
            // product: payload?.product,
            // selectCover: payload?.product,
            // effectiveFrom: payload?.effectiveFrom,
            // effectiveTo: payload?.effectiveTo,
            // status: payload?.status,
            level: payload?.level,
            commissionCode: payload?.commissionCode,
            sharingRate: payload?.sharingRate,

        };
        try {
            console.log(bodyTableData, "find middleware");

            return bodyTableData;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error?.message);
        }
    }
);

