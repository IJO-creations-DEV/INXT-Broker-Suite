import journalVoucherMainReducers from "../module/JournalVoucher/store/journalVoucherReducer";
import paymentVoucherReducers from "../module/PaymentVoucher/store/paymentVoucherReducer";
import transactionCodeMasterReducer from "../module/FinanceMastersModule/TransactionCodeMaster/store/transactionMasterReducer";
import currencyMasterReducer from "../module/FinanceMastersModule/CurrencyMaster/store/currencyMasterReducer";
import exchangeMasterReducer from "../module/FinanceMastersModule/ExchangeRateMaster/store/exchangeMasterReducer";
import bankMasterReducer from "../module/FinanceMastersModule/BankMaster/store/bankMasterReducer";
import accountCategoryReducer from "../module/FinanceMastersModule/AccountCategoryMaster/store/accountCategoryReducer";
import mainAccoutReducers from "../module/FinanceMastersModule/MainAccountMaster/store/mainAccountReducer";
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
import hierarchyTableReducers from "../module/GeneralMasters/EmployeeManagementMasters/Hierarchy/store/hierarchyReducers";
import designationMainReducers from "../module/GeneralMasters/EmployeeManagementMasters/Designation/store/designationReducers"
import organizationBranchMainReducers from "../module/GeneralMasters/OrganizationMasters/BranchMaster/store/branchReducers";
import organizationCompanyMainReducers from "../module/GeneralMasters/OrganizationMasters/ComapanyMaster/store/companyReducers";
import countryReducers from "../module/GeneralMasters/LocationMasters/CountryMaster/store/countryReducers";
import cityReducers from "../module/GeneralMasters/LocationMasters/CityMaster/store/cityReducers";
import employeeReducers from "../module/GeneralMasters/EmployeeManagementMasters/Employee/store/employeeReducers";
import userReducers from "../module/GeneralMasters/UserManagementMasters/User/store/userReducers";
import roleMainReducers from "../module/GeneralMasters/UserManagementMasters/Role/store/roleReducers";
import insuranceLineOfBusinessReducers from "../module/GeneralMasters/InsuranceManagementMasters/LineOfBusiness/store/insuranceLineOfBusinessReducers";
import insuranceProductReducers from "../module/GeneralMasters/InsuranceManagementMasters/ProductMaster/store/insuranceProductReducers";
import insurancePolicyTypeReducers from "../module/GeneralMasters/InsuranceManagementMasters/PolicyTypeMaster/store/insurancePolicyTypeReducers";
import insuranceCoverReducers from "../module/GeneralMasters/InsuranceManagementMasters/Cover/store/insuranceCoverReducers";
import insuranceSignatoriesReducers from "../module/GeneralMasters/InsuranceManagementMasters/SignatoriesMaster/store/insuranceSignatoriesReducers";
import insuranceVehicleReducers from "../module/GeneralMasters/InsuranceManagementMasters/Vehicle/store/insuranceVehicleReducers";
import stateReducers from "../module/GeneralMasters/LocationMasters/StateMaster/store/stateReducers";
import agentPaymentMainReducers from "../agentModule/paymentsModule/store/paymentReducer";
// import endrosementViewMainReducers from "../agentModule/endorsementModule/endorsementDetailedView/store/endrosementViewReducers";
// import claimSettlementReducer from "../agentModule/claimsModule/settlementDetails/Store/claimSettlementReducer";
// import endrosementViewMainReducers from "../agentModule/endorsementModule/endorsementDetailedView/store/endrosementViewReducers"
// import claimDetailsMainReducers from "../agentModule/claimsModule/claimDetails/store/claimDetailsReducers";
// import claimTabelMainReducers from "../agentModule/quoteModule/clientView/clientViewCard/ClientListingViewClaimTable/store/getClaimTabelDataReducers"
import claimSettleMainReducers from "../agentModule/claimsModule/claimSettlement/store/claimSettleReducers"
import claimDocumentUploadMainReducers from "../agentModule/claimsModule/claimDocumentUpload/store/claimDocumentUploadReducers"
import endrosementViewMainReducers from "../agentModule/endorsementModule/uploadEndorsement/store/uploadEndrosmentReducers";
import claimSettlementReducer from "../agentModule/claimsModule/settlementDetails/Store/claimSettlementReducer";
import claimDetailsMainReducers from "../agentModule/claimsModule/claimDetails/store/claimDetailsReducers";
import claimTabelMainReducers from "../agentModule/quoteModule/clientView/clientViewCard/ClientListingViewClaimTable/store/getClaimTabelDataReducers";
import policyDetailedViewMainReducers from "../agentModule/quoteModule/policyDetailedView/store/policyDetailedReducer"
import clientsReducers from "../agentModule/quoteModule/clientListing/store/clientsReducer"
import leadReducers from "../agentModule/leadModule/Store/leadReducer"
import agentQuoteMainReducers from "../agentModule/quoteModule/quoteListing/quoteListingCard/store/quoteReducer"
import endorsementTabelMainReducers from "../agentModule/quoteModule/clientView/clientViewCard/ClientListingViewEndorsementTable/store/getEndorsementTabelDataReducers"
import policyTabelMainReducers from "../agentModule/quoteModule/clientView/clientViewCard/ClientListingViewPolicyTable/store/getPolicyTabelDataReducers"
import renewalTabelMainReducers from "../agentModule/quoteModule/clientView/clientViewCard/ClientListingViewRenewaleTable/store/getRenewalTabelDataReducers"
import agentExpiringMainReducers from "../agentModule/openItems/expiringPolicy/expiringPolicyCard/store/expiringReducer"
import agentQuotependingMainReducers from "../agentModule/openItems/quotePending/quotePendingCard/store/quotePendingReducer"
import agentRenewalrequestMainReducers from "../agentModule/openItems/renewalRequest/renewalRequestCard/store/renewalRequestReducer"

const reducers = {
  journalVoucherMainReducers,
  paymentVoucherReducers,
  transactionCodeMasterReducer,
  currencyMasterReducer,
  exchangeMasterReducer,
  bankMasterReducer,
  accountCategoryReducer,
  mainAccoutReducers,
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
  cityReducers,
  employeeReducers,
  userReducers,
  roleMainReducers,
  insuranceLineOfBusinessReducers,
  insuranceProductReducers,
  insurancePolicyTypeReducers,
  insuranceCoverReducers,
  insuranceSignatoriesReducers,
  insuranceVehicleReducers,
  stateReducers,
  agentPaymentMainReducers,
  endrosementViewMainReducers,
  claimSettlementReducer,
  claimDetailsMainReducers,
  claimTabelMainReducers,
  claimSettleMainReducers,
  claimDocumentUploadMainReducers,
  // claimTabelMainReducers
  policyDetailedViewMainReducers,
  clientsReducers,
  leadReducers,
  agentQuoteMainReducers,
  endorsementTabelMainReducers,
  policyTabelMainReducers,
  renewalTabelMainReducers,
  agentExpiringMainReducers,
  agentQuotependingMainReducers,
  agentRenewalrequestMainReducers,
  designationMainReducers
  // openitemTabelMainReducers

};

export default reducers;
