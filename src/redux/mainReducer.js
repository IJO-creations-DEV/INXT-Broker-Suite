import journalVoucherReducers from '../module/JournalVoucher/store/journalVoucherReducer';
import paymentVoucherReducers from '../module/PaymentVoucher/store/paymentVoucherReducer';
import transactionCodeMasterReducer from "../module/FinanceMastersModule/TransactionCodeMaster/store/transactionMasterReducer"
import currencyMasterReducer from '../module/FinanceMastersModule/CurrencyMaster/store/currencyMasterReducer';
import exchangeMasterReducer from '../module/FinanceMastersModule/ExchangeRateMaster/store/exchangeMasterReducer';
import bankMasterReducer from '../module/FinanceMastersModule/BankMaster/store/bankMasterReducer';
import accountCategoryReducer from '../module/FinanceMastersModule/AccountCategoryMaster/store/accountCategoryReducer';
import mainAccoutMiddleware from '../module/FinanceMastersModule/MainAccountMaster/store/mainAccoutMiddleware';
import commissionMianReducers from "../module/GeneralMasters/Commission/store/commissionReducers";
import taxationMainReducers from "../module/FinanceMastersModule/TaxationMaster/store/taxationReducers";
import subAccountMainReducers from "../module/FinanceMastersModule/SubAccountMaster/store/subAccountReducers";
import receiptsTableReducers from "../module/Receipts/store/receiptsReducers"
import pettyCashMainReducers from "../module/FinanceMastersModule/PettyCashMaster/store/pettyCashMasterReducers"
import pettyCashInitiateReducer from '../module/PettyCashManagement/Initiate/store/pettyCashInitiateReducer';
import pettyCashDisbursementReducers from '../module/PettyCashManagement/Disbursement/store/pettyCashDisbursementReducers';
import pettyCashReceiptsReducer from '../module/PettyCashManagement/Receipts/store/pettyCashReceiptsReducer';
import pettyCashReplenishReducer from '../module/PettyCashManagement/Replenish/store/pettyCashReplenishReducer';
import pettyCashRequestReducer from '../module/PettyCashManagement/Request/store/pettyCashRequestReducer'; 

const reducers = {
    journalVoucherReducers,
    paymentVoucherReducers,
    transactionCodeMasterReducer,
    currencyMasterReducer,
    exchangeMasterReducer,
    bankMasterReducer,
    accountCategoryReducer,
    mainAccoutMiddleware,
    commissionMianReducers,
    taxationMainReducers,
    subAccountMainReducers,
    pettyCashMainReducers,
    receiptsTableReducers,
    pettyCashInitiateReducer,
    pettyCashDisbursementReducers,
    pettyCashReceiptsReducer,
    pettyCashReplenishReducer,
    pettyCashRequestReducer
}


export default reducers;