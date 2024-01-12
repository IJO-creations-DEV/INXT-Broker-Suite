import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../../utility/commonServices";
import { APIROUTES } from "../../../../routes/apiRoutes";
import { GET_BANK_LIST, GET_BANK_SEARCH_LIST, POST_BANK_STATUS, GET_BANK_DETAIL_VIEW, GET_ADD_BANK, PATCH_BANK_DETAIL_EDIT, POST_ADD_BANK } from "../../../../redux/actionTypes";
import SvgEye from "../../../../assets/icons/SvgEye";
import SvgArrow from "../../../../assets/icons/SvgArrow";


export const getBankList = createAsyncThunk(
    GET_BANK_LIST,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const getBankSearchList = createAsyncThunk(
    GET_BANK_SEARCH_LIST,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);

export const postBankStatus = createAsyncThunk(
    POST_BANK_STATUS,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const getAddBank = createAsyncThunk(
    GET_ADD_BANK,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const postAddBank = createAsyncThunk(
    POST_ADD_BANK,
    async (payload, { rejectWithValue }) => {
        console.log(payload,"postAddBank");
        const tabledata = {
            id: payload.id,
            bankCode: payload.BankCode,
            // code: <SvgArrow />,
            bankName: payload?.BankName,
            bankBranch: payload?.BankBranch,
            ifscCode:payload?.IFSCCode,
            email: payload?.EmailID,
            status: true,
            mobile: payload?.PhoneNumber

        }
        console.log(payload, "leo________");
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return tabledata;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const patchBankDetailEdit = createAsyncThunk(
    PATCH_BANK_DETAIL_EDIT,
    async (payload, { rejectWithValue, getState }) => {
        // const { bankMasterReducer } = getState();


        // const { correctionJVList } = correctionJVMainReducers;
        // const filteredData = correctionJVList.filter((item) => item.id === 1);

        try {
            // const { BankList } = bankMasterReducer;
            // const updatedObject = BankList.findIndex(item => item.bankCode === payload?.bankCode);
            // let newArr = [...BankList]
            // newArr[updatedObject] = {
            //     bankBranch: payload?.bankBranch,
            //     bankCode: payload?.bankCode,
            //     bankName: payload?.bankName,


            //     email
            //         :
            //         payload?.email,
            //     ifscCode
            //         :
            //         payload?.ifscCode,
            //     mobile
            //         :
            //         payload?.mobile,
            //     status
            //         :
            //         true
            // }
            // const { data } = await patchRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);


export const getBankDetailView = createAsyncThunk(
    GET_BANK_DETAIL_VIEW,
    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
);
