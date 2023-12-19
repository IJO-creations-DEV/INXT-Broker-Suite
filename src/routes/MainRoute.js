import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "../routes/AuthRoute";
import ProtectedLayout from "./ProtectedRoute";
import ResponsiveDrawer from "../components/SideBar";
import CorrectionJV from "../module/CorrectionJV";
import PolicyReceipts from "../module/Receipts/PolicyReceipts";
import OtherReceipts from "../module/Receipts/OtherReceipts";
import { DataTable } from "primereact/datatable";
// import PendingEndorsementScreen from "../module/EndorsementModule/EndorsementPendingScreen/index";

// import PolicyReceipts from "../module/";
// import OtherReceipts from "../src/module/Receipts/OtherReceipts/index";
// import Correctionsjv from "../src/module/CorrectionsJV/index";
import PolicyReceiptsView from "../module/Receipts/PolicyReceiptsView";
import OtherReceiptsView from "../module/Receipts/OtherReceiptsView";
import AddOtherReceipts from "../module/Receipts/AddOtherReceipts";
import AddPolicyReceipts1 from "../module/Receipts/AddPolicyReceipts1";
// import AddPolicyReceipts1 from "../src/module/Receipts/AddReceipts/AddPolicyReceipts1";
import AddReceiptsEntry from "../module/Receipts/AddReceiptsEntry";
import Receipts from "../module/Receipts";
import Reversalsjv from "../module/Reversals/index";
import Pettycashmanagement from "../module/PettyCashManagement/index";
import Journalvoucher from "../module/JournalVoucher/index";
import SpecificVoucher from "../module/PaymentVoucher/SpecificVoucher";
import Payallvoucher from "../module/PaymentVoucher/PayAll";
import Paymentvoucher from "../module/PaymentVoucher/index";
import CreateVoucher from "../module/PaymentVoucher/CreateVoucher/index";
import VoucherBankDetails from "../module/PaymentVoucher/VoucherBankDetails/index";
import AddPolicyReceipts from "../module/Receipts/AddPolicyReceipts";
import AccountCategoryMaster from "../module/FinanceMastersModule/AccountCategoryMaster";
import BankAccountMaster from "../module/FinanceMastersModule/BankAccountMaster";
import BankChequeMaster from "../module/FinanceMastersModule/BankChequeMaster";
import BankMaster from "../module/FinanceMastersModule/BankMaster";
import BranchMaster from "../module/FinanceMastersModule/BranchMaster";
import CompanyMaster from "../module/FinanceMastersModule/CompanyMaster";
import CurrencyMaster from "../module/FinanceMastersModule/CurrencyMaster";
import DepartmentMaster from "../module/FinanceMastersModule/DepartmentMaster";
import ExchangeRateMaster from "../module/FinanceMastersModule/ExchangeRateMaster";
import MainAccountMaster from "../module/FinanceMastersModule/MainAccountMaster";
import PettyCashMaster from "../module/FinanceMastersModule/PettyCashMaster";
import SubAccountMaster from "../module/FinanceMastersModule/SubAccountMaster";
import TaxationMaster from "../module/FinanceMastersModule/TaxationMaster";
import TransactionCodeMaster from "../module/FinanceMastersModule/TransactionCodeMaster";


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
            <Route path="/correctionjv" element={<CorrectionJV />} />

            {/* Receipts */}

            <Route path="/Receipts" element={<Receipts />} />

            <Route path="/addpolicyreceipts" element={<AddPolicyReceipts />} />
             <Route path="/otherreceipts" element={<OtherReceipts />} />
            <Route

              path="/policyreceiptsview"
              element={<PolicyReceiptsView />
            }
            />
             <Route path="/otherreceiptsview" element={<OtherReceiptsView />} />
             <Route path="/addpolicyreceipt1" element={<AddPolicyReceipts1 />} />
             <Route path="/addotherreceipt" element={<AddOtherReceipts />} />
             <Route path="/addreceiptsentry" element={<AddReceiptsEntry />} /> 
            
             <Route

              path="/policyreceiptsview"
              element={<PolicyReceiptsView />
            }
            />
           
            
            <Route path="/otherreceipts" element={<OtherReceipts />} />
            
            <Route path="/addpolicyreceipts1" element={<AddPolicyReceipts1 />} />
            <Route path="/policyreceipts" element={<PolicyReceipts />} />

            {/* Payment Vouchers */}

            <Route path="/paymentvoucher" element={<Paymentvoucher />} />
            <Route path="/createvoucher" element={<CreateVoucher />} />
            <Route
              path="/voucherbankdetails"
              element={<VoucherBankDetails />}
            />

            <Route path="/payallvoucher" element={<Payallvoucher />} />
            <Route path="/SpecificVoucher" element={<SpecificVoucher />} />

            {/* Journal voucher */}

            <Route path="/journalvoucher" element={<Journalvoucher />} />

            {/* Corrections JV */}

            {/* Reversals JV */}

            <Route path="/reversaljv" element={<Reversalsjv />} />

            {/* Petty Cash Management */}

            <Route
              path="/pettycashmanagement"
              element={<Pettycashmanagement />}
            />
            {/* Finacel Master Route*/}
            <Route
              path="master/finance/accountcate"
              element={<AccountCategoryMaster />}
            />
            <Route path="master/finance/bankaccount" element={<BankAccountMaster />} />
            <Route path="master/finance/bankcheque" element={<BankChequeMaster />} />
            <Route path="master/finance/bank" element={<BankMaster />} />
            <Route path="master/finance/company" element={<CompanyMaster />} />
            <Route path="master/finance/currency" element={<CurrencyMaster />} />
            <Route path="master/finance/department" element={<DepartmentMaster />} />
            <Route path="master/finance/exchangerate" element={<ExchangeRateMaster />} />
            <Route path="master/finance/mainaccount" element={<MainAccountMaster />} />
            <Route path="master/finance/pettycash" element={<PettyCashMaster />} />
            <Route path="master/finance/branch" element={<BranchMaster />} />
            <Route path="master/finance/subaccount" element={<SubAccountMaster />} />
            <Route path="master/finance/taxation" element={<TaxationMaster />} />
            <Route path="master/finance/transactioncode" element={<TransactionCodeMaster />} />
          </Route>
        </Routes>
      </div>
      <AuthRoute />


      <Routes>
        <Route element={<ProtectedLayout />}>
          {/* <Route path="/" element={<div>shh</div>} />
          <Route path="/policyreceipts" element={<PolicyReceipts />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default Maincomponent;
