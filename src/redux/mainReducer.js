import journalVoucherReducers from '../module/JournalVoucher/store/journalVoucherReducer';

import paymentVoucherReducers from '../module/PaymentVoucher/store/paymentVoucherReducer';
import commissionMianReducers from "../module/GeneralMasters/Commission/store/commissionReducers";
import taxationMainReducers from "../module/FinanceMastersModule/TaxationMaster/store/taxationReducers";
import subAccountMainReducers from "../module/FinanceMastersModule/SubAccountMaster/store/subAccountReducers";
import pettyCashMainReducers from "../module/FinanceMastersModule/PettyCashMaster/store/pettyCashMasterReducers"


const reducers = {
    journalVoucherReducers,
    paymentVoucherReducers,
    commissionMianReducers,
    taxationMainReducers,
    subAccountMainReducers,
    pettyCashMainReducers

}


export default reducers;