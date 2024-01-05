import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GET_DISBURSMENT_VOUCHER_LIST,
  GET_DISBURSMENT_VOUCHER_SEARCH,
  POST_ADD_DISBURSMENT_VOUCHER,
  GET_ADD_DISBURSMENT_TABLE_VOUCHER,
  POST_EDIT_DISBURSMENT_VOUCHER,
  GET_VIEW_DISBURSMENT_VOUCHER,
} from "../../../../redux/actionTypes";
import { getRequest } from "../../../../utility/commonServices";
import { APIROUTES } from "../../../../routes/apiRoutes";

export const getDisbursmentListMiddleware = createAsyncThunk(
  GET_DISBURSMENT_VOUCHER_LIST,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getDisbursmentSearchMiddleware = createAsyncThunk(
  GET_DISBURSMENT_VOUCHER_SEARCH,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const postAddDisbursmentMiddleware = createAsyncThunk(
  POST_ADD_DISBURSMENT_VOUCHER,
  async (payload, { rejectWithValue }) => {
    console.log(payload, "postdisbursment");

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
    const randomTotalAmount = Math.floor(Math.random() * 50000) + 10000;

    const TableData = {
      id: payload?.id,
      PettycashCode: payload.PettyCashCode.pettycashcode,
      Transactioncode: payload.TransactionCode.Transcode,
      TransactionNumber: randomTotalAmount.toString(),
      Branchcode: payload.BranchCode.Branchcode,
      Departmentcode: payload.DepartmentCode.Departcode,
      Date: formattedDate,
    };

    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return TableData;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getAddDisbursmentTableMiddleware = createAsyncThunk(
  GET_ADD_DISBURSMENT_TABLE_VOUCHER,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const postEditDisbursmentMiddleware = createAsyncThunk(
  POST_EDIT_DISBURSMENT_VOUCHER,
  async (payload, { rejectWithValue }) => {
    console.log(payload, "payload");
    const VATin = (payload.VAT / 100) * 100;
    const EWTin = (payload.EWT / 100) * 100;
    const TotalAmount = parseFloat(payload?.TotalAmount) || 0;
    const EWTinAdd = parseFloat(EWTin) || 0;
    const VATinAdd = parseFloat(VATin) || 0;
    const Totalin =TotalAmount+EWTinAdd+VATinAdd
    const TableData = {
      id: payload?.id,
      RequestNumber: payload.RequestNumber,
      RequesterName: payload.Requester,
      Amount: payload.Amount,
      VAT: VATin,
      EWT: EWTin,
      MainAccount: payload.MainAccountCode.Maincode,
      SubAccount: payload?.SubAccountCode?.SubAccount,
      TotalAmount: Totalin,
      Remarks: payload.Remarks,
    };
    console.log(TableData, "TableData");
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return TableData;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getViewDisbursmentMiddleware = createAsyncThunk(
  GET_VIEW_DISBURSMENT_VOUCHER,
  async (payload, { rejectWithValue }) => {
    try {
      // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
      return payload;
    } catch (error) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
