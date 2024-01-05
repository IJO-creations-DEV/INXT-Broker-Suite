import journalVoucherMainReducers from '../module/JournalVoucher/store/journalVoucherReducer';
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
import pettyCashMainReducers from "../module/FinanceMastersModule/PettyCashMaster/store/pettyCashMasterReducers";
import receiptsTableReducers from "../module/Receipts/store/receiptsReducers";
// import reversalMainReducers from "../module/Reversals/store/reversalReducers"
import receivableTableReducers from "../module/Receipts/store/receiptsReducers";
import editReducers from "../module/Receipts/store/receiptsReducers"
import reversalMainReducers from "../module/Reversals/store/reversalReducers";
import correctionJVMainReducers from "../module/CorrectionJV/store/correctionJVReducers"
const reducers = {
    journalVoucherMainReducers,
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
    reversalMainReducers,
    receivableTableReducers,
    editReducers,
    correctionJVMainReducers,
}

export default reducers;