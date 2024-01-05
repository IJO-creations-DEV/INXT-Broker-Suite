import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "../routes/AuthRoute";
import ProtectedLayout from "./ProtectedRoute";
import ResponsiveDrawer from "../components/SideBar";
import CorrectionJV from "../module/CorrectionJV";
import PolicyReceipts from "../module/Receipts/PolicyReceipts";
import { DataTable } from "primereact/datatable";
// import PendingEndorsementScreen from "../module/EndorsementModule/EndorsementPendingScreen/index";

// import PolicyReceipts from "../module/";
// import OtherReceipts from "../src/module/Receipts/OtherReceipts/index";
// import Correctionsjv from "../src/module/CorrectionsJV/index";
import PolicyReceiptsView from "../module/Receipts/PolicyReceiptsView";
import AddPolicyReceipts1 from "../module/Receipts/AddPolicyReceipts1";
// import AddPolicyReceipts1 from "../src/module/Receipts/AddReceipts/AddPolicyReceipts1";
import AddPolicyEdit from "../module/Receipts/AddPolicyReceiptEdit";
import Receipts from "../module/Receipts";
import Reversalsjv from "../module/Reversals/index";
import Pettycashmanagement from "../module/PettyCashManagement/index";
import Journalvoucher from "../module/JournalVoucher/index";
import SpecificVoucher from "../module/PaymentVoucher/SpecificVoucher";
import Payallvoucher from "../module/PaymentVoucher/PayAll";
import Paymentvoucher from "../module/PaymentVoucher/index";
import CreateVoucher from "../module/PaymentVoucher/CreateVoucher/index";
import Detailview from "../module/PaymentVoucher/DetailView/index";
import AddPolicyReceipts from "../module/Receipts/AddPolicyReceipts";
// import AccountCategoryMaster from "../module/FinanceMastersModule/AccountCategoryMaster";
import BankAccountMaster from "../module/FinanceMastersModule/BankAccountMaster";
import BankChequeMaster from "../module/FinanceMastersModule/BankChequeMaster";
import BranchMasterInitial from "../module/FinanceMastersModule/BranchMaster/BranchMasterInitial";
// import BranchMaster from "../module/FinanceMastersModule/BranchMaster/BranchAdding";
import BranchAdding from "../module/FinanceMastersModule/BranchMaster/BranchAdding";
import BranchDetailsView from "../module/FinanceMastersModule/BranchMaster/BranchDetailsView";
import CompanyMaster from "../module/FinanceMastersModule/CompanyMaster";
import CurrencyMaster from "../module/FinanceMastersModule/CurrencyMaster";
import ExchangeRateMaster from "../module/FinanceMastersModule/ExchangeRateMaster";
import MainAccountMaster from "../module/FinanceMastersModule/MainAccountMaster";
import PettyCashMaster from "../module/FinanceMastersModule/PettyCashMaster";
import PaymentDetails from "../module/Receipts/PaymentDetails";
import SubAccountMaster from "../module/FinanceMastersModule/SubAccountMaster";
import TaxationMaster from "../module/FinanceMastersModule/TaxationMaster";
import TransactionCodeMaster from "../module/FinanceMastersModule/TransactionCodeMaster";
import DepartmentMasterInitial from "../module/FinanceMastersModule/DepartmentMaster/DepartmentMasterInitial";
import DepartmentAdding from "../module/FinanceMastersModule/DepartmentMaster/DepartmentAdding";
import DepartmentDetailsView from "../module/FinanceMastersModule/DepartmentMaster/DepartmentDetailsView";
import AccountCategoryMaster from "../module/FinanceMastersModule/AccountCategoryMaster";
// import SubAdd from "../module/FinanceMastersModule/SubAccountMaster/SubAdd";
// import SaveAndEdit from "../module/FinanceMastersModule/SubAccountMaster/SaveAndEdit";
import CategoryMasterInitial from "../module/FinanceMastersModule/AccountCategoryMaster/CategoryMasterInitial";
import CategoryAdding from "../module/FinanceMastersModule/AccountCategoryMaster/CategoryAdding";
import CategoryDetailsView from "../module/FinanceMastersModule/AccountCategoryMaster/CategoryDetailsView";
import SubAccountDetails from "../module/FinanceMastersModule/SubAccountMaster/SubAccountDetails";
import SaveAndEdit from "../module/FinanceMastersModule/SubAccountMaster/SubAccountEdit";
import AddCurrency from "../module/FinanceMastersModule/CurrencyMaster/AddCurrency";
import SaveAndEditCurrency from "../module/FinanceMastersModule/CurrencyMaster/ViewCurrency";
import AddTaxation from "../module/FinanceMastersModule/TaxationMaster/AddTaxation";
import TaxationDetails from "../module/FinanceMastersModule/TaxationMaster/TaxationDetails";
import TaxationEdit from "../module/FinanceMastersModule/TaxationMaster/TaxationEdit"
import AddExchange from "../module/FinanceMastersModule/ExchangeRateMaster/AddExchange";
import SaveAndEditExchange from "../module/FinanceMastersModule/ExchangeRateMaster/SaveAndEditExchange";

// import AddCompany from "../module/FinanceMastersModule/CompanyMaster/AddCompany";

import AddBankAccount from "../module/FinanceMastersModule/BankAccountMaster/AddBankAccount";
import BankAccountdetails from "../module/FinanceMastersModule/BankAccountMaster/BankAccountdetails";
import AddBankCheque from "../module/FinanceMastersModule/BankChequeMaster/AddBankCheque";
import BankChequeDetails from "../module/FinanceMastersModule/BankChequeMaster/BankChequeDetails";
import AddPettyCash from "../module/FinanceMastersModule/PettyCashMaster/AddPettyCash";
import PettyCashdetails from "../module/FinanceMastersModule/PettyCashMaster/PettyCashdetails";
import AddJournalVoucture from "../module/JournalVoucher/AddJournalVoucture";
import DetailsJournalVocture from "../module/JournalVoucher/DetailsJournalVocture";

import Bankdetailselection from "../module/PaymentVoucher/Bankdetailselection";
// import DepartmentMasterInitial from "../module/FinanceMastersModule/DepartmentMaster/DepartmentMasterInitial";
// import DepartmentAdding from "../module/FinanceMastersModule/DepartmentMaster/DepartmentAdding";
// import DepartmentDetailsView from "../module/FinanceMastersModule/DepartmentMaster/DepartmentDetailsView";
// import CategoryMasterInitial from "../module/FinanceMastersModule/AccountCategoryMaster/CategoryMasterInitial";
// import CategoryAdding from "../module/FinanceMastersModule/AccountCategoryMaster/CategoryAdding";
// import CategoryDetailsView from "../module/FinanceMastersModule/AccountCategoryMaster/CategoryDetailsView";
// import CompanyDetailsView from "../module/FinanceMastersModule/CompanyMaster/CompanyDetailsView"
// import AddCompany from "../module/FinanceMastersModule/CompanyMaster/AddCompany";
import Initiate from "../module/PettyCashManagement/Initiate";
import Disbursement from "../module/PettyCashManagement/Disbursement";
import SubAccountEdit from "../module/FinanceMastersModule/SubAccountMaster/SubAccountEdit"
import Request from "../module/PettyCashManagement/Request";
import PettyCashReceipts from "../module/PettyCashManagement/Receipts";
import PettyCashReplenish from "../module/PettyCashManagement/Replenish";
import InitiateForm from "../module/PettyCashManagement/Initiate/InitiateForm";
import PettyCashCodeDetails from "../module/PettyCashManagement/Initiate/PettyCashCodeDetails";
import PettyCashRequest from "../module/PettyCashManagement/Request";
import RequestForm from "../module/PettyCashManagement/Request/RequestForm";
import AddRequestTable from "../module/PettyCashManagement/Request/AddRequestTable";
import AddDisbursement from "../module/PettyCashManagement/Disbursement/AddDisbursement";
import AddDisbursementTable from "../module/PettyCashManagement/Disbursement/AddDisbursementTable";
import DisbursementDetailview from "../module/PettyCashManagement/Disbursement/DisbursementDetailview";
import AddReceipts from "../module/PettyCashManagement/Receipts/AddReceipt";
import AddReceiptsTable from "../module/PettyCashManagement/Receipts/AddReceiptTable";
import ReceiptList from "../module/PettyCashManagement/Receipts/ReceiptList";
import AddReplenish from "../module/PettyCashManagement/Replenish/AddReplenish";
import AddReplenishTable from "../module/PettyCashManagement/Replenish/AddReplenishTable";
import ReplenishtDetailView from "../module/PettyCashManagement/Replenish/ReplenishDetailview";
import TransactionCodeMasterView from "../module/FinanceMastersModule/TransactionCodeMaster/TransactionCodeMasterView";
import TransactionCodeDetails from "../module/FinanceMastersModule/TransactionCodeMaster/TransactionCodeDetails";
import ViewCurrency from "../module/FinanceMastersModule/CurrencyMaster/ViewCurrency";
import EditCurrency from "../module/FinanceMastersModule/CurrencyMaster/EditCurrency";
import AddMainAccount from "../module/FinanceMastersModule/MainAccountMaster/AddMainAccount";
import EditMainAccount from "../module/FinanceMastersModule/MainAccountMaster/EditMainAccount";
import ViewMainAccount from "../module/FinanceMastersModule/MainAccountMaster/ViewMainAccount";
import Commission from "../module/GeneralMasters/Commission";
import AddCommission from "../module/GeneralMasters/Commission/AddCommission";
import EditCommission from "../module/GeneralMasters/Commission/EditCommission";
import ViewCommission from "../module/GeneralMasters/Commission/ViewCommission";
import EditPettyCash from "../module/FinanceMastersModule/PettyCashMaster/EditPettyCash";

import ViewExchange from "../module/FinanceMastersModule/ExchangeRateMaster/ViewExchange";
import BankMaster from "../module/FinanceMastersModule/BankMaster";
import AddBankMaster from "../module/FinanceMastersModule/BankMaster/AddBankMaster";
import Accountdataview from '../module/FinanceMastersModule/BankMaster/AccountDataView/index';
import AddAccountDetail from '../module/FinanceMastersModule/BankMaster/AccountDataView/AddAccountDetail/index'
import ViewAccountDetail from "../module/FinanceMastersModule/BankMaster/AccountDataView/ViewAccountData";
import EditAccountDetail from "../module/FinanceMastersModule/BankMaster/AccountDataView/EditAccountData";
const Maincomponent = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <ResponsiveDrawer />
      <div style={{ width: "100%" }}>
        <AuthRoute />
        <Routes>
          <Route element={<ProtectedLayout />}>
            {/* <Route path="/" element={<div>shh</div>} /> */}
            <Route
              path="/accounts/correctionsjv/correctionsjvdetails"
              element={<CorrectionJV />}
            />

            {/* Receipts */}

            {/* <Route path="/accounts/receipts" element={<Receipts />} /> */}

            <Route path="/accounts/receipts/addpolicyreceipts" element={<AddPolicyReceipts />} />

            <Route
              path="/accounts/receipts/policyreceiptsview"
              element={<PolicyReceiptsView />}
            />

            {/* <Route path="/accounts/receipts/addreceipt" element={<AddPolicyReceipts1 />} /> */}

            <Route path="/accounts/receipts" element={<PolicyReceipts />} />
            <Route path="/accounts/receipts/addreceiptedit" element={<AddPolicyEdit />} />
            <Route
              path="/accounts/receipts/receiptdetailview"
              element={<PolicyReceiptsView />}
            />
            <Route path="/accounts/receipts/paymentdetails" element={<PaymentDetails />} />

            <Route
              path="/accounts/receipts/addreceipts"
              element={<AddPolicyReceipts1 />}
            />
            <Route path="/accounts/receipts/policyreceipts" element={<PolicyReceipts />} />

            {/* Payment Vouchers */}

            <Route
              path="accounts/paymentvoucher"
              element={<Paymentvoucher />}
            />
            <Route
              path="accounts/paymentvoucher/createvoucher"
              element={<CreateVoucher />}
            />
            <Route
              path="accounts/paymentvoucher/detailview/:id"
              element={<Detailview />}
            />  
            <Route
              path="accounts/paymentvoucher/bankdetailselection"
              element={<Bankdetailselection />}
            />

            {/* <Route path="/payallvoucher" element={<Payallvoucher />} /> */}
            <Route
              path="accounts/paymentvoucher/SpecificVoucher"
              element={<SpecificVoucher />}
            />

            {/* Journal voucher */}

            <Route
              path="/accounts/journalvoucher"
              element={<Journalvoucher />}
            />
            <Route
              path="/accounts/journalvoucher/addjournalvoucture"
              element={<AddJournalVoucture />}
            />
            <Route
              path="/accounts/journalvoucher/detailsjournalvocture/:id"
              element={<DetailsJournalVocture />}
            />

            {/* Corrections JV */}

            {/* Reversals JV */}

            <Route
              path="/accounts/reversaljv/reversaljvdetails"
              element={<Reversalsjv />}
            />

            {/* Petty Cash Management */}
            <Route
              path="accounts/pettycash/pettycashcodeinitiate"
              element={<Initiate />}
            />
            <Route
              path="accounts/pettycash/pettycashcodeinitiate/initiate"
              element={<InitiateForm />}
            />
            <Route
              path="accounts/pettycash/PettyCashCodeDetails"
              element={<PettyCashCodeDetails />}
            />
            <Route
              path="accounts/pettycash/pettycashrequest"
              element={<PettyCashRequest />}
            />
            <Route
              path="accounts/pettycash/addrequest"
              element={<RequestForm />}
            />
            <Route
              path="accounts/pettycash/addrequesttable"
              element={<AddRequestTable />}
            />
            <Route
              path="accounts/pettycash/disbursement"
              element={<Disbursement />}
            />
            <Route
              path="accounts/pettycash/adddisbursement"
              element={<AddDisbursement />}
            />
            <Route
              path="accounts/pettycash/adddisbursementtable"
              element={<AddDisbursementTable />}
            />
            <Route
              path="accounts/pettycash/disbursementdetailview"
              element={<DisbursementDetailview />}
            />
            <Route path="accounts/pettycash/request" element={<Request />} />
            <Route
              path="accounts/pettycash/receipts"
              element={<PettyCashReceipts />}
            />
            <Route
              path="accounts/pettycash/addreceipts"
              element={<AddReceipts />}
            />
            <Route
              path="accounts/pettycash/addreceiptstable"
              element={<AddReceiptsTable />}
            />
            <Route
              path="accounts/pettycash/receiptlist"
              element={<ReceiptList />}
            />
            <Route
              path="accounts/pettycash/replenish"
              element={<PettyCashReplenish />}
            />
            <Route
              path="accounts/pettycash/addreplenish"
              element={<AddReplenish />}
            />
            <Route
              path="accounts/pettycash/addreplenishtable"
              element={<AddReplenishTable />}
            />
            <Route
              path="accounts/pettycash/replenishtdetailview"
              element={<ReplenishtDetailView />}
            />
            {/* <Route
              path="/pettycashmanagement"
              element={<Pettycashmanagement />}
            /> */}
            {/* Finacel Master Route*/}
            {/* <Route
              path="master/finance/accountcate"
              element={<AccountCategoryMaster />}
            /> */}

            {/* Branch Master Module */}
            <Route
              path="master/finance/branch/branchadding"
              element={<BranchAdding />}
            />
            <Route
              path="master/finance/branch/branchdetailsview"
              element={<BranchDetailsView />}
            />
            <Route
              path="master/finance/branch"
              element={<BranchMasterInitial />}
            />

            {/* Department Master Module */}
            <Route
              path="master/finance/department/departmentadding"
              element={<DepartmentAdding />}
            />
            <Route
              path="master/finance/department/departmentdetailsview"
              element={<DepartmentDetailsView />}
            />
            <Route
              path="master/finance/department"
              element={<DepartmentMasterInitial />}
            />

            {/* Main Account Master */}

            {/* Account Category Master */}

            <Route
              path="master/finance/accountcategory"
              element={<AccountCategoryMaster />}
            />

            <Route
              path="master/finance/bankaccount"
              element={<BankAccountMaster />}
            />
            <Route
              path="master/finance/bankcheque"
              element={<BankChequeMaster />}
            />

            {/* bankacountmaster */}
            <Route
              path="master/finance/bankaccount"
              element={<BankAccountMaster />}
            />
            <Route
              path="master/finance/bankaccount/addbankaccount"
              element={<AddBankAccount />}
            />
            <Route
              path="master/finance/bankaccount/bankaccountdetails"
              element={<BankAccountdetails />}
            />

            {/* bankchequemaster */}
            <Route
              path="master/finance/bankcheque"
              element={<BankChequeMaster />}
            />
            <Route
              path="master/finance/bankcheque/addbankcheque"
              element={<AddBankCheque />}
            />
            <Route
              path="master/finance/bankcheque/bankchequedetails"
              element={<BankChequeDetails />}
            />

            {/* pettycash */}
            <Route
              path="master/finance/pettycash"
              element={<PettyCashMaster />}
            />
            <Route
              path="master/finance/pettycash/addpettycash"
              element={<AddPettyCash />}
            />
            <Route
              path="master/finance/pettycash/pettycashdetail"
              element={<PettyCashdetails />}
            />


            <Route path="master/finance/pettycash/editpettycash" element={<EditPettyCash />} />

            <Route />
            <Route path="master/finance/company" element={<CompanyMaster />} />
            <Route
              path="master/finance/currency"
              element={<CurrencyMaster />}
            />


            {/* Bank */}

            <Route
              path="master/finance/bank"
              element={<BankMaster/>}
            />
            <Route
              path="master/finance/bank/addbankmaster"
              element={<AddBankMaster/>}
            />
             <Route
              path="master/finance/bank/accountdataview"
              element={<Accountdataview/>}
            />
            <Route
              path="master/finance/bank/accountdataview/addaccountdetail"
              element={<AddAccountDetail/>}
            />
            <Route
              path="master/finance/bank/accountdataview/viewaccountdetail"
              element={<ViewAccountDetail/>}
            />
            <Route
              path="master/finance/bank/accountdataview/editaccountdetail"
              element={<EditAccountDetail/>}
            />



{/* exchangeRate */}
            <Route
              path="master/finance/exchangerate"
              element={<ExchangeRateMaster />}
            />
            <Route
              path="master/finance/exchangerate/addexchange"
              element={<AddExchange />}
            />
            <Route
              path="master/finance/exchangerate/saveandeditexchange"
              element={<SaveAndEditExchange />}
            />
            <Route
              path="master/finance/exchangerate/viewexchange"
              element={<ViewExchange/>}
            />
            


{/*  */}

            <Route
              path="master/finance/mainaccount"
              element={<MainAccountMaster />}
            />
            <Route
              path="master/finance/mainaccount/addmainaccount"
              element={<AddMainAccount />}
            />
            <Route
              path="master/finance/mainaccount/editmainaccount"
              element={<EditMainAccount />}
            />
            <Route
              path="master/finance/mainaccount/viewmainaccount"
              element={<ViewMainAccount />}
            />

            <Route
              path="master/finance/subaccount"
              element={<SubAccountMaster />}
            />
            <Route
              path="master/finance/taxation"
              element={<TaxationMaster />}
            />
            <Route
              path="master/finance/taxation/addtaxation"
              element={<AddTaxation />}
            />
            <Route
              path="master/finance/taxation/taxationedit"
              element={<TaxationEdit />}
            />
             <Route
              path="master/finance/taxation/taxationdetails"
              element={<TaxationDetails />}
            />

            {/* Transactioncode */}

            <Route
              path="master/finance/transactioncode"
              element={<TransactionCodeMaster />}
            />
            <Route
              path="master/finance/transactioncode/addtransactioncode"
              element={<TransactionCodeMasterView />}
            />
                                    <Route
              path="master/finance/transactioncode/transactioncodedetails"
              element={<TransactionCodeDetails />}
            />
            
            <Route
              path="master/finance/subaccount/subaccountdetails"
              element={<SubAccountDetails />}
            />
            <Route
              path="master/finance/subaccount/subaccountedit"
              element={<SubAccountEdit />}
            />
            <Route
              path="master/finance/currency/addcurrency"
              element={<AddCurrency />}
            />
            <Route
              path="master/finance/currency/editcurrency"
              element={<EditCurrency />}
            />
                        <Route
              path="master/finance/currency/viewcurrency"
              element={<ViewCurrency />}
            />
            <Route path="master/generals/commission" element={<Commission/>} />
            <Route path="master/generals/commission/addcommission" element={<AddCommission/>} />
            <Route path="master/generals/commission/editcommission" element={<EditCommission />} />
            <Route path="master/generals/commission/viewcommission" element={<ViewCommission />} />
          </Route>
        </Routes>
      </div>
      <AuthRoute />

      <Routes>
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<div>shh</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default Maincomponent;
