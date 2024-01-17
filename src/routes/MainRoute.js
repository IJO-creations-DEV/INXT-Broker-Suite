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
import TaxationEdit from "../module/FinanceMastersModule/TaxationMaster/TaxationEdit";
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
import Initiate from "../module/PettyCashManagement/Initiate";
import Disbursement from "../module/PettyCashManagement/Disbursement";
import SubAccountEdit from "../module/FinanceMastersModule/SubAccountMaster/SubAccountEdit";
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
import TransactioncodeEdit from "../module/FinanceMastersModule/TransactionCodeMaster/TransactionCodeMasterEdit/index";
import ViewExchange from "../module/FinanceMastersModule/ExchangeRateMaster/ViewExchange";
import BankMaster from "../module/FinanceMastersModule/BankMaster";
import AddBankMaster from "../module/FinanceMastersModule/BankMaster/AddBankMaster";
import Accountdataview from "../module/FinanceMastersModule/BankMaster/AccountDataView/index";
import AddAccountDetail from "../module/FinanceMastersModule/BankMaster/AccountDataView/AddAccountDetail/index";
import ViewAccountDetail from "../module/FinanceMastersModule/BankMaster/AccountDataView/ViewAccountData";
import EditAccountDetail from "../module/FinanceMastersModule/BankMaster/AccountDataView/EditAccountData";
import CompanyMasters from "../module/GeneralMasters/OrganizationMasters/ComapanyMaster";
import BranchMasters from "../module/GeneralMasters/OrganizationMasters/BranchMaster";
import InsuranceCompany from "../module/GeneralMasters/InsuranceManagementMasters/InsuranceCompany";
import LineOfBusiness from "../module/GeneralMasters/InsuranceManagementMasters/LineOfBusiness";
import ProductMaster from "../module/GeneralMasters/InsuranceManagementMasters/ProductMaster";
import PolicyType from "../module/GeneralMasters/InsuranceManagementMasters/PolicyTypeMaster";
import Cover from "../module/GeneralMasters/InsuranceManagementMasters/Cover";
import Signatories from "../module/GeneralMasters/InsuranceManagementMasters/SignatoriesMaster";
import Vahicle from "../module/GeneralMasters/InsuranceManagementMasters/Vehicle";
import Country from "../module/GeneralMasters/LocationMasters/CountryMaster";
import State from "../module/GeneralMasters/LocationMasters/StateMaster";
import City from "../module/GeneralMasters/LocationMasters/CityMaster";
import InsuranceDetailsAction from "../module/GeneralMasters/InsuranceManagementMasters/InsuranceCompany/InsuranceDetailsAction";
import LineBusinessDetailsAction from "../module/GeneralMasters/InsuranceManagementMasters/LineOfBusiness/LineBusinessDetailsAction";
import ProductMatserDetailsAction from "../module/GeneralMasters/InsuranceManagementMasters/ProductMaster/ProductMasterDetailsAction";
import PolicyTypeDetailsAction from "../module/GeneralMasters/InsuranceManagementMasters/PolicyTypeMaster/PolicyTypeDetailsAction";
import CoverDetailsAction from "../module/GeneralMasters/InsuranceManagementMasters/Cover/CoverDetailsAction";
import SignatoriesDetailsAction from "../module/GeneralMasters/InsuranceManagementMasters/SignatoriesMaster/SignatoriesAction";
import VehicleDetailsAction from "../module/GeneralMasters/InsuranceManagementMasters/Vehicle/VehicleDetailsAction";

import Designation from "../module/GeneralMasters/EmployeeManagementMasters/Designation/DesignationMaster";
import AddDesignation from "../module/GeneralMasters/EmployeeManagementMasters/Designation/AddDesignation";
import Employee from "../module/GeneralMasters/EmployeeManagementMasters/Employee/EmployeeMaster";
import AddEmployee from "../module/GeneralMasters/EmployeeManagementMasters/Employee/AddEmployee";
import User from "../module/GeneralMasters/UserManagementMasters/User/UserMaster";
import AddUser from "../module/GeneralMasters/UserManagementMasters/User/AddUser";
import Role from "../module/GeneralMasters/UserManagementMasters/Role/RoleMaster";
import AddRole from "../module/GeneralMasters/UserManagementMasters/Role/AddRole";
import HierarchyMaster from "../module/GeneralMasters/EmployeeManagementMasters/Hierarchy/HierarchyMaster";
import AddHierarchy from "../module/GeneralMasters/EmployeeManagementMasters/Hierarchy/AddHierarchy";
import UserEdit from "../module/GeneralMasters/UserManagementMasters/User/EditUser"



import AddCompany from "../module/GeneralMasters/OrganizationMasters/ComapanyMaster/AddCompany";
import AddBranch from "../module/GeneralMasters/OrganizationMasters/BranchMaster/AddBranch";
import AddCountry from "../module/GeneralMasters/LocationMasters/CountryMaster/AddCountry/index"
import AddCity from "../module/GeneralMasters/LocationMasters/CityMaster/AddCity";
import AddState from "../module/GeneralMasters/LocationMasters/StateMaster/AddState";
import Dashboard from "../agentModule/dashBoardModule/home";
import AgentViewProfile from "../agentModule/dashBoardModule/agentViewProfile";
import AgentEditProfile from "../agentModule/dashBoardModule/agentEditProfile";
import Notification from "../agentModule/dashBoardModule/notification";
import LeadCreation from "../agentModule/leadModule/leadCreation";
import LeadListing from "../agentModule/leadModule/leadListing";
import CoverageDeatails from "../agentModule/quoteModule/coverageDetails";
import PolicyDetails from "../agentModule/quoteModule/policyDetails";
import Accessories from "../agentModule/quoteModule/accessories";
import OrderSummary from "../agentModule/quoteModule/orderSummary";
import QuoteDetailView from "../agentModule/quoteModule/quoteDetailView";
import QuoteListing from "../agentModule/quoteModule/quoteListing";
import CustomerInfo from "../agentModule/quoteModule/customerInfo";
import QuoteComparisonView from "../agentModule/quoteModule/quoteComparisonView";
import UploadVehiclePhotos from "../agentModule/quoteModule/uploadVehiclePhotos";
import CoverageDetailedVew from "../agentModule/quoteModule/coverageDetailedVew";
import PolicyApproval from "../agentModule/quoteModule/policyApproval";
import UploadPolicy from "../agentModule/quoteModule/uploadPolicy";
import PolicyDetailedView from "../agentModule/quoteModule/policyDetailedView";
import PaymentConfirmation from "../agentModule/quoteModule/paymentConfirmation";
import PaymentOptions from "../agentModule/quoteModule/paymentOptions";
import PaymentApproval from "../agentModule/quoteModule/paymentApproval";
import PaymentError from "../agentModule/quoteModule/paymentError";
import ClientListing from "../agentModule/quoteModule/clientListing";
import ClaimDetails from "../agentModule/claimsModule/claimDetails";
import SendMail from "../agentModule/claimsModule/sendMail";
import RequestApproval from "../agentModule/claimsModule/requestApproval";
import AdjusterSubmission from "../agentModule/claimsModule/adjusterSubmission";
import SettlementApproval from "../agentModule/claimsModule/settlementApproval";
import SettlementDetails from "../agentModule/claimsModule/settlementDetails";
import PersonalDetails from "../agentModule/endorsementModule/personalDetails";
import CoverageDetails from "../agentModule/endorsementModule/coveragedetails";
import EndorsementApproval from "../agentModule/endorsementModule/endorsementApproval";
import UploadEndorsement from "../agentModule/endorsementModule/uploadEndorsement";
import EndorsementDetailedView from "../agentModule/endorsementModule/endorsementDetailedView";
import PaymentOptionsEndorsement from "../agentModule/endorsementModule/paymentOptions";
import PaymentConfirmationEndorsement from "../agentModule/endorsementModule/paymentConfirmation";
import Endorsementpaymentapproval from "../agentModule/endorsementModule/paymentApprovalEndorsement";
import PaymentErrorEndorsment from "../agentModule/endorsementModule/paymentErrorEndorsement";
import Payments from "../agentModule/paymentsModule";
import OpenItems from "../agentModule/openItems/openItems";
import UpcomingEvents from "../agentModule/openItems/upcomingEvents";
import ExpiringPolicy from "../agentModule/openItems/expiringPolicy";
import AgenSideBar from "../components/AgentSideBar";

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
            <Route
              path="/accounts/correctionsjv/correctionsjvdetails"
              element={<CorrectionJV />}
            />

            {/* Receipts */}

            {/* <Route path="/accounts/receipts" element={<Receipts />} /> */}

            <Route
              path="/accounts/receipts/addpolicyreceipts"
              element={<AddPolicyReceipts />}
            />

            <Route
              path="/accounts/receipts/policyreceiptsview"
              element={<PolicyReceiptsView />}
            />

            {/* <Route path="/accounts/receipts/addreceipt" element={<AddPolicyReceipts1 />} /> */}

            <Route path="/accounts/receipts" element={<PolicyReceipts />} />
            <Route
              path="/accounts/receipts/addreceiptedit"
              element={<AddPolicyEdit />}
            />
            <Route
              path="/accounts/receipts/receiptdetailview"
              element={<PolicyReceiptsView />}
            />
            <Route
              path="/accounts/receipts/paymentdetails"
              element={<PaymentDetails />}
            />

            <Route
              path="/accounts/receipts/addreceipts"
              element={<AddPolicyReceipts1 />}
            />
            <Route
              path="/accounts/receipts/policyreceipts"
              element={<PolicyReceipts />}
            />

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


            {/* General Master */}

            {/* Organization Master */}
            <Route
              path="master/generals/organization/companymaster"
              element={<CompanyMasters />}
            />


            <Route
              path="master/generals/organization/companymaster/add/:id"
              element={<AddCompany action="add" />}
            />
            <Route
              path="master/generals/organization/companymaster/edit/:id"
              element={<AddCompany action="edit" />}
            />
            <Route
              path="master/generals/organization/companymaster/view/:id"
              element={<AddCompany action="view" />}
            />

            {/* Branch master */}
            <Route
              path="master/generals/organization/branchmaster"
              element={<BranchMasters />}
            />
            <Route
              path="master/generals/organization/branchmaster/add/:id"
              element={<AddBranch action="add" />}
            />
            <Route
              path="master/generals/organization/branchmaster/edit/:id"
              element={<AddBranch action="edit" />}
            />
            <Route
              path="master/generals/organization/branchmaster/view/:id"
              element={<AddBranch action="view" />}
            />
            {/* Insurance Management Masters */}
            <Route
              path="master/generals/insurancemanagement/insurancecompany"
              element={<InsuranceCompany />}
            />
            <Route
              path="master/generals/insurancemanagement/insurancecompany/add/:id"
              element={<InsuranceDetailsAction action="add" />}
            />
            <Route
              path="master/generals/insurancemanagement/insurancecompany/edit/:id"
              element={<InsuranceDetailsAction action="edit" />}
            />
            <Route
              path="master/generals/insurancemanagement/insurancecompany/view/:id"
              element={<InsuranceDetailsAction action="view" />}
            />

            <Route
              path="master/generals/insurancemanagement/lineofbusiness"
              element={<LineOfBusiness />}
            />
            <Route
              path="master/generals/insurancemanagement/lineofbusiness/add/:id"
              element={<LineBusinessDetailsAction action="add" />}
            />
            <Route
              path="master/generals/insurancemanagement/lineofbusiness/edit/:id"
              element={<LineBusinessDetailsAction action="edit" />}
            />
            <Route
              path="master/generals/insurancemanagement/lineofbusiness/view/:id"
              element={<LineBusinessDetailsAction action="view" />}
            />
            <Route
              path="master/generals/insurancemanagement/productmaster"
              element={<ProductMaster />}
            />
            <Route
              path="master/generals/insurancemanagement/productmaster/add/:id"
              element={<ProductMatserDetailsAction action="add" />}
            />
            <Route
              path="master/generals/insurancemanagement/productmaster/edit/:id"
              element={<ProductMatserDetailsAction action="edit" />}
            />
            <Route
              path="master/generals/insurancemanagement/productmaster/view/:id"
              element={<ProductMatserDetailsAction action="view" />}
            />
            <Route
              path="master/generals/insurancemanagement/policytype"
              element={<PolicyType />}
            />
            <Route
              path="master/generals/insurancemanagement/policytype/add/:id"
              element={<PolicyTypeDetailsAction action="add" />}
            />
            <Route
              path="master/generals/insurancemanagement/policytype/edit/:id"
              element={<PolicyTypeDetailsAction action="edit" />}
            />
            <Route
              path="master/generals/insurancemanagement/policytype/view/:id"
              element={<PolicyTypeDetailsAction action="view" />}
            />
            <Route
              path="master/generals/insurancemanagement/cover"
              element={<Cover />}
            />
            <Route
              path="master/generals/insurancemanagement/cover/add/:id"
              element={<CoverDetailsAction action="add" />}
            />
            <Route
              path="master/generals/insurancemanagement/cover/edit/:id"
              element={<CoverDetailsAction action="edit" />}
            />
            <Route
              path="master/generals/insurancemanagement/cover/view/:id"
              element={<CoverDetailsAction action="view" />}
            />
            <Route
              path="master/generals/insurancemanagement/signatories"
              element={<Signatories />}
            />
            <Route
              path="master/generals/insurancemanagement/signatories/add/:id"
              element={<SignatoriesDetailsAction action="add" />}
            />
            <Route
              path="master/generals/insurancemanagement/signatories/edit/:id"
              element={<SignatoriesDetailsAction action="edit" />}
            />
            <Route
              path="master/generals/insurancemanagement/signatories/view/:id"
              element={<SignatoriesDetailsAction action="view" />}
            />
            <Route
              path="master/generals/insurancemanagement/vehicle"
              element={<Vahicle />}
            />
            <Route
              path="master/generals/insurancemanagement/vehicle/add/:id"
              element={<VehicleDetailsAction action="add" />}
            />
            <Route
              path="master/generals/insurancemanagement/vehicle/edit/:id"
              element={<VehicleDetailsAction action="edit" />}
            />
            <Route
              path="master/generals/insurancemanagement/vehicle/view/:id"
              element={<VehicleDetailsAction action="view" />}
            />

            {/* Location */}

            {/* {Country} */}
            <Route
              path="master/generals/location/country"
              element={<Country />}
            />
            <Route
              path="master/generals/location/country/edit"
              element={<AddCountry action="edit" />}
            />
            <Route
              path="master/generals/location/country/view"
              element={<AddCountry action="view" />}
            />
            <Route
              path="master/generals/location/country/add"
              element={<AddCountry action="add" />}
            />

            {/* {State} */}
            <Route path="master/generals/location/state" element={<State />} />

            <Route
              path="master/generals/location/state/edit"
              element={<AddState action="edit" />}
            />
            <Route
              path="master/generals/location/state/view"
              element={<AddState action="view" />}
            />
            <Route
              path="master/generals/location/state/add"
              element={<AddState action="add" />} />



            {/* {City} */}
            <Route path="master/generals/location/city" element={<City />} />

            <Route
              path="master/generals/location/city/edit"
              element={<AddCity action="edit" />}
            />
            <Route
              path="master/generals/location/city/view"
              element={<AddCity action="view" />}
            />
            <Route
              path="master/generals/location/city/add"
              element={<AddCity action="add" />} />

            {/* Employee Management */}


            {/* Hierarchy */}

            <Route path="master/generals/employeemanagement/hierarchy" element={<HierarchyMaster />} />
            <Route
              path="master/generals/employeemanagement/hierarchy/add"
              element={<AddHierarchy action="add" />}
            />
            <Route
              path="master/generals/employeemanagement/hierarchy/edit/:id"
              element={<AddHierarchy action="edit" />}
            />
            <Route
              path="master/generals/employeemanagement/hierarchy/view/:id"
              element={<AddHierarchy action="view" />}
            />
            <Route path="master/generals/employeemanagement/:id" element={<AddHierarchy />} />

            <Route
              path="master/generals/employeemanagement/designation"
              element={<Designation />}
            />
            <Route
              path="master/generals/employeemanagement/designation/add/:id"
              element={<AddDesignation action="add" />}
            />
            <Route
              path="master/generals/employeemanagement/designation/edit/:id"
              element={<AddDesignation action="edit" />}
            />
            <Route
              path="master/generals/employeemanagement/designation/view/:id"
              element={<AddDesignation action="view" />}
            />

            <Route
              path="master/generals/employeemanagement/adddesignation"
              element={<AddDesignation />}
            />
            <Route
              path="master/generals/employeemanagement/employee"
              element={<Employee />}
            />
            <Route
              path="master/generals/employeemanagement/employee/add/:id"
              element={<AddEmployee action="add" />}
            />
            <Route
              path="master/generals/employeemanagement/employee/edit/:id"
              element={<AddEmployee action="edit" />}
            />
            <Route
              path="master/generals/employeemanagement/employee/view/:id"
              element={<AddEmployee action="view" />}
            />
            <Route
              path="master/generals/employeemanagement/addemployee"
              element={<AddEmployee />}
            />

            {/* User Management */}
            <Route
              path="master/generals/usermanagement/user"
              element={<User />}
            />
            <Route
              path="master/generals/usermanagement/useredit"
              element={<UserEdit />}
            />
            <Route
              path="master/generals/usermanagement/user/add"
              element={<AddUser action="add" />}
            />
            <Route
              path="master/generals/usermanagement/user/edit/:id"
              element={<AddUser action="edit" />}
            />
            <Route
              path="master/generals/usermanagement/user/view/:id"
              element={<AddUser action="view" />}
            />
            <Route

              path="master/generals/usermanagement/adduser"
              element={<AddUser />}
            />
            <Route
              path="master/generals/usermanagement/role"
              element={<Role />}
            />
            <Route
              path="master/generals/usermanagement/role/add/:id"
              element={<AddRole action="add" />}
            />
            <Route
              path="master/generals/usermanagement/role/edit/:id"
              element={<AddRole action="edit" />}
            />
            <Route
              path="master/generals/usermanagement/role/view/:id"
              element={<AddRole action="view" />}
            />
            {/* <Route
              path="master/generals/usermanagement/addrole"
              element={<AddRole />}
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
              path="master/finance/pettycash/pettycashdetail/:id"
              element={<PettyCashdetails />}
            />


            <Route path="master/finance/pettycash/editpettycash/:id" element={<EditPettyCash />} />

            <Route />
            <Route path="master/finance/company" element={<CompanyMaster />} />
            <Route
              path="master/finance/currency"
              element={<CurrencyMaster />}
            />

            {/* Bank */}

            <Route path="master/finance/bank" element={<BankMaster />} />
            <Route
              path="master/finance/bank/addbankmaster"
              element={<AddBankMaster />}
            />
            <Route
              path="master/finance/bank/accountdataview"
              element={<Accountdataview />}
            />
            <Route
              path="master/finance/bank/accountdataview/addaccountdetail"
              element={<AddAccountDetail />}
            />
            <Route
              path="master/finance/bank/accountdataview/viewaccountdetail"
              element={<ViewAccountDetail />}
            />
            <Route
              path="master/finance/bank/accountdataview/editaccountdetail"
              element={<EditAccountDetail />}
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
              element={<ViewExchange />}
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
              path="master/finance/transactioncode/transactioncodeedit"
              element={<TransactioncodeEdit />}
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
            <Route path="master/generals/commission" element={<Commission />} />
            <Route path="master/generals/commission/addcommission" element={<AddCommission />} />
            <Route path="master/generals/commission/editcommission" element={<EditCommission />} />
            <Route path="master/generals/commission/viewcommission/:id" element={<ViewCommission />} />

            <Route element={<ProtectedLayout />}>
              {/* <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} /> */}
              {/* // Agent Dashboard, Notification & agent profile */}
              <Route path="/agent/home" element={<Dashboard />} />
              <Route path="/agent/notification" element={<Notification />} />
              <Route path="/agent/viewprofile" element={<AgentViewProfile />} />
              <Route path="/agent/editprofile" element={<AgentEditProfile />} />
              {/* // Lead Creation, edit lead & Lead listing */}
              <Route path="/agent/createlead" element={<LeadCreation />} />
              <Route path="/agent/leadlisting" element={<LeadListing />} />
              {/* // Quote Creation, Policy conversion & Client listing */}
              <Route
                path="/agent/createquote/policydetails"
                element={<PolicyDetails />}
              />
              <Route
                path="/agent/createquote/coveragedetails"
                element={<CoverageDeatails />}
              />
              <Route
                path="/agent/createquote/accessories"
                element={<Accessories />}
              />
              <Route
                path="/agent/createquote/ordersummary"
                element={<OrderSummary />}
              />
              <Route path="/agent/quotedetailview" element={<QuoteDetailView />} />
              <Route path="/agent/quotelisting" element={<QuoteListing />} />
              <Route
                path="/agent/quotecomparisonview"
                element={<QuoteComparisonView />}
              />
              <Route
                path="/agent/convertpolicy/customerinfo"
                element={<CustomerInfo />}
              />
              <Route
                path="/agent/convertpolicy/uploadvehiclephotos"
                element={<UploadVehiclePhotos />}
              />
              <Route
                path="/agent/coveragedetailedview"
                element={<CoverageDetailedVew />}
              />
              <Route path="/agent/policyapproval" element={<PolicyApproval />} />
              <Route path="/agent/uploadpolicy" element={<UploadPolicy />} />
              <Route
                path="/agent/policydetailedview"
                element={<PolicyDetailedView />}
              />
              <Route
                path="/agent/policy/paymentconfirmation"
                element={<PaymentConfirmation />}
              />
              <Route
                path="/agent/policy/paymentoptions"
                element={<PaymentOptions />}
              />
              <Route
                path="/agent/policy/paymentapproval"
                element={<PaymentApproval />}
              />
              <Route
                path="/agent/policy/paymenterror"
                element={<PaymentError />}
              />
              <Route path="/agent/clientlisting/:id" element={<ClientListing />} />
              {/* // Claims */}
              <Route
                path="/agent/claimrequest/claimdetails"
                element={<ClaimDetails />}
              />
              <Route path="/agent/claimrequest/sendmail" element={<SendMail />} />
              <Route
                path="/agent/claimrequest/requestapproval/:id"
                element={<RequestApproval />}
              />
              <Route
                path="/agent/claimrequest/adjustersubmission"
                element={<AdjusterSubmission />}
              />
              <Route
                path="/agent/claimrequest/settlementapproval"
                element={<SettlementApproval />}
              />
              <Route
                path="/agent/claimrequest/settlementdetails"
                element={<SettlementDetails />}
              />
              <Route
                path="/agent/claimdetailedview"
                element={<SettlementDetails />}
              />
              {/* // Endorsement */}
              <Route
                path="/agent/endorsement/personaldetails"
                element={<PersonalDetails />}
              />
              <Route
                path="/agent/endorsement/coveragedetails"
                element={<CoverageDetails />}
              />
              <Route
                path="/agent/endorsementapproval"
                element={<EndorsementApproval />}
              />
              <Route
                path="/agent/uploadendorsement"
                element={<UploadEndorsement />}
              />
              <Route
                path="/agent/endorsementdetailedview"
                element={<EndorsementDetailedView />}
              />
              <Route
                path="/agent/endorsement/paymentconfirmation"
                element={<PaymentConfirmationEndorsement />}
              />
              <Route
                path="/agent/endorsement/paymentoptions"
                element={<PaymentOptionsEndorsement />}
              />
              <Route
                path="/agent/endorsement/paymentapproval"
                element={<Endorsementpaymentapproval />}
              />
              <Route
                path="/agent/endorsement/paymenterror"
                element={<PaymentErrorEndorsment />}
              />
              {/* // Payments */}
              <Route path="/agent/payments" element={<Payments />} />
              {/* // Open items */}
              <Route path="/agent/openitems" element={<OpenItems />} />
              <Route
                path="/agent/openitems/upcomingevents"
                element={<UpcomingEvents />}
              />
              <Route
                path="/agent/openitems/expiringpolicy"
                element={<ExpiringPolicy />}
              />
            </Route>
          </Route>
        </Routes>
      </div>
      <AuthRoute />

    </div>
  );
};

export default Maincomponent;
