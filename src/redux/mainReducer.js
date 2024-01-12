import journalVoucherMainReducers from "../module/JournalVoucher/store/journalVoucherReducer";
import paymentVoucherReducers from "../module/PaymentVoucher/store/paymentVoucherReducer";
import transactionCodeMasterReducer from "../module/FinanceMastersModule/TransactionCodeMaster/store/transactionMasterReducer";
import currencyMasterReducer from "../module/FinanceMastersModule/CurrencyMaster/store/currencyMasterReducer";
import exchangeMasterReducer from "../module/FinanceMastersModule/ExchangeRateMaster/store/exchangeMasterReducer";
import bankMasterReducer from "../module/FinanceMastersModule/BankMaster/store/bankMasterReducer";
import accountCategoryReducer from "../module/FinanceMastersModule/AccountCategoryMaster/store/accountCategoryReducer";
import mainAccoutMiddleware from "../module/FinanceMastersModule/MainAccountMaster/store/mainAccoutMiddleware";
import commissionMianReducers from "../module/GeneralMasters/Commission/store/commissionReducers";
import taxationMainReducers from "../module/FinanceMastersModule/TaxationMaster/store/taxationReducers";
import subAccountMainReducers from "../module/FinanceMastersModule/SubAccountMaster/store/subAccountReducers";
import receiptsTableReducers from "../module/Receipts/store/receiptsReducers";
// import pettyCashMainReducers from "../module/FinanceMastersModule/PettyCashMaster/store/pettyCashMasterReducers"
import pettyCashInitiateReducer from "../module/PettyCashManagement/Initiate/store/pettyCashInitiateReducer";
import pettyCashDisbursementReducers from "../module/PettyCashManagement/Disbursement/store/pettyCashDisbursementReducers";
import pettyCashReceiptsReducer from "../module/PettyCashManagement/Receipts/store/pettyCashReceiptsReducer";
import pettyCashReplenishReducer from "../module/PettyCashManagement/Replenish/store/pettyCashReplenishReducer";
import pettyCashRequestReducer from "../module/PettyCashManagement/Request/store/pettyCashRequestReducer";

import pettyCashMainReducers from "../module/FinanceMastersModule/PettyCashMaster/store/pettyCashMasterReducers";
// import receiptsTableReducers from "../module/Receipts/store/receiptsReducers";
// import reversalMainReducers from "../module/Reversals/store/reversalReducers"
import receivableTableReducers from "../module/Receipts/store/receiptsReducers";
import editReducers from "../module/Receipts/store/receiptsReducers";
import reversalMainReducers from "../module/Reversals/store/reversalReducers";
import correctionJVMainReducers from "../module/CorrectionJV/store/correctionJVReducers";
import insuranceCompanyReducers from "../module/GeneralMasters/InsuranceManagementMasters/InsuranceCompany/store/insuranceCompanyReducers";
import hierarchyTableReducers from "../module/GeneralMasters/EmployeeManagementMasters/Hierarchy/store/hierarchyReducers"
import organizationBranchMainReducers from "../module/GeneralMasters/OrganizationMasters/BranchMaster/store/branchReducers"
import organizationCompanyMainReducers from "../module/GeneralMasters/OrganizationMasters/ComapanyMaster/store/companyReducers"
import countryReducers from "../module/GeneralMasters/LocationMasters/CountryMaster/store/countryReducers";
import cityReducers from "../module/GeneralMasters/LocationMasters/CityMaster/store/cityReducers";
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
  pettyCashInitiateReducer,
  pettyCashDisbursementReducers,
  pettyCashReceiptsReducer,
  pettyCashReplenishReducer,
  pettyCashRequestReducer,
  reversalMainReducers,
  receivableTableReducers,
  editReducers,
  correctionJVMainReducers,
  insuranceCompanyReducers,
  hierarchyTableReducers,
  organizationBranchMainReducers,
  organizationCompanyMainReducers,
  countryReducers,
  cityReducers

};

export default reducers;
