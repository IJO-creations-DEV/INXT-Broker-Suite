import { createSlice } from "@reduxjs/toolkit";
import { getInitiateListMiddleware, getInitiateByIdMiddleware } from "./pettyCashInitiateMiddleware";
import SvgIconeye from "../../../../assets/icons/SvgIconeye";
const initialState = {
    loading: false,
    error: "",
    paymentVocherList: [
        {
            id: 1,
            VoucherNumber: "Voucher0123",
            TransactionNumber: "Trans00123",
            CustomerCode: "Cus01123",
            VoucheDate: "11/12/2023",
            Amount: "500.00",
            action: <SvgIconeye />,
        },
        {
            id: 2,
            VoucherNumber: "Voucher0124",
            CustomerCode: "Cus01123",
            TransactionNumber: "Trans00124",
            VoucheDate: "12/12/2023",
            Amount: "600.00",
            action: <SvgIconeye />,
        },
        {
            id: 3,
            VoucherNumber: "Voucher0125",
            TransactionNumber: "Trans00125",
            CustomerCode: "Cus01123",
            VoucheDate: "13/12/2023",
            Amount: "700.00",
            action: <SvgIconeye />,
        },
        {
            id: 4,
            VoucherNumber: "Voucher0126",
            TransactionNumber: "Trans00126",
            CustomerCode: "Cus01123",
            VoucheDate: "14/12/2023",
            Amount: "800.00",
            action: <SvgIconeye />,
        },
        {
            id: 5,
            VoucherNumber: "Voucher0127",
            TransactionNumber: "Trans00127",
            VoucheDate: "15/12/2023",
            CustomerCode: "Cus01123",
            Amount: "900.00",
            action: <SvgIconeye />,
        },
        {
            id: 6,
            VoucherNumber: "Voucher0128",
            TransactionNumber: "Trans00128",
            VoucheDate: "16/12/2023",
            CustomerCode: "Cus01123",
            Amount: "1000.00",
            action: <SvgIconeye />,
        },
        {
            id: 7,
            VoucherNumber: "Voucher0129",
            TransactionNumber: "Trans00129",
            VoucheDate: "17/12/2023",
            CustomerCode: "Cus01123",
            Amount: "1100.00",
            action: <SvgIconeye />,
        },
        {
            id: 8,
            VoucherNumber: "Voucher0130",
            TransactionNumber: "Trans00130",
            VoucheDate: "18/12/2023",
            CustomerCode: "Cus01123",
            Amount: "1200.00",
            action: <SvgIconeye />,
        },
        {
            id: 9,
            VoucherNumber: "Voucher0131",
            TransactionNumber: "Trans00131",
            VoucheDate: "19/12/2023",
            CustomerCode: "Cus01123",
            Amount: "1300.00",
            action: <SvgIconeye />,
        },
        {
            id: 10,
            VoucherNumber: "Voucher0132",
            TransactionNumber: "Trans00132",
            VoucheDate: "20/12/2023",
            CustomerCode: "Cus01123",
            Amount: "1400.00",
            action: <SvgIconeye />,
        }
    ],
    invoiceList: [
        {
            id: 1,
            VoucherNumber: "Voucher0123",
            TransactionNumber: "Trans00123",
            CustomerCode: "Cus01123",
            VoucheDate: "11/12/2023",
            Amount: "500.00",
            action: <SvgIconeye />,
        },
        {
            id: 2,
            VoucherNumber: "Voucher0124",
            CustomerCode: "Cus01123",
            TransactionNumber: "Trans00124",
            VoucheDate: "12/12/2023",
            Amount: "600.00",
            action: <SvgIconeye />,
        },
        {
            id: 3,
            VoucherNumber: "Voucher0125",
            TransactionNumber: "Trans00125",
            CustomerCode: "Cus01123",
            VoucheDate: "13/12/2023",
            Amount: "700.00",
            action: <SvgIconeye />,
        },
        {
            id: 4,
            VoucherNumber: "Voucher0126",
            TransactionNumber: "Trans00126",
            CustomerCode: "Cus01123",
            VoucheDate: "14/12/2023",
            Amount: "800.00",
            action: <SvgIconeye />,
        },
        {
            id: 5,
            VoucherNumber: "Voucher0127",
            TransactionNumber: "Trans00127",
            VoucheDate: "15/12/2023",
            CustomerCode: "Cus01123",
            Amount: "900.00",
            action: <SvgIconeye />,
        },
        {
            id: 6,
            VoucherNumber: "Voucher0128",
            TransactionNumber: "Trans00128",
            VoucheDate: "16/12/2023",
            CustomerCode: "Cus01123",
            Amount: "1000.00",
            action: <SvgIconeye />,
        },
        {
            id: 7,
            VoucherNumber: "Voucher0129",
            TransactionNumber: "Trans00129",
            VoucheDate: "17/12/2023",
            CustomerCode: "Cus01123",
            Amount: "1100.00",
            action: <SvgIconeye />,
        },
        {
            id: 8,
            VoucherNumber: "Voucher0130",
            TransactionNumber: "Trans00130",
            VoucheDate: "18/12/2023",
            CustomerCode: "Cus01123",
            Amount: "1200.00",
            action: <SvgIconeye />,
        },
        {
            id: 9,
            VoucherNumber: "Voucher0131",
            TransactionNumber: "Trans00131",
            VoucheDate: "19/12/2023",
            CustomerCode: "Cus01123",
            Amount: "1300.00",
            action: <SvgIconeye />,
        },
        {
            id: 10,
            VoucherNumber: "Voucher0132",
            TransactionNumber: "Trans00132",
            VoucheDate: "20/12/2023",
            CustomerCode: "Cus01123",
            Amount: "1400.00",
            action: <SvgIconeye />,
        }
    ],
    individualVoucher: {}
};
const PettyCashInitiateReducer = createSlice({
    name: "pettycashinitiate",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getInitiateListMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getInitiateListMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.paymentVocherList = action.payload;
        });
        builder.addCase(getInitiateListMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.paymentVocherList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });
        builder.addCase(getInitiateByIdMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getInitiateByIdMiddleware.fulfilled, (state, action) => {
            state.loading = false;
            state.individualVoucher = action.payload;
        });
        builder.addCase(getInitiateByIdMiddleware.rejected, (state, action) => {
            state.loading = false;

            state.paymentVocherList = {};
            state.error = typeof action.payload === "string" ? action.payload : "";
        });

    },
});

export default PettyCashInitiateReducer.reducer;
