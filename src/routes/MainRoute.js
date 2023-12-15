import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "../routes/AuthRoute";
import ProtectedLayout from "./ProtectedRoute";
import ResponsiveDrawer from "../components/SideBar";
import CorrectionJV from "../module/CorrectionJV";
import PolicyReceipts from "../module/Receipts/PolicyReceipts";
import OtherReceipts from "../module/Receipts/OtherReceipts"
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
import AddReceiptsEntry from "../module/Receipts/AddReceiptsEntry"
import Receipts from "../module/Receipts";
import Reversalsjv from "../module/Reversals/index";
import Pettycashmanagement from "../module/PettyCashManagement/index";
import Journalvoucher from "../module/JournalVoucher/index";
import SpecificVoucher from "../module/PaymentVoucher/SpecificVoucher";
import Payallvoucher   from "../module/PaymentVoucher/PayAll"
import Paymentvoucher from "../module/PaymentVoucher/index";
import CreateVoucher from "../module/PaymentVoucher/CreateVoucher/index";
import VoucherBankDetails from "../module/PaymentVoucher/VoucherBankDetails/index";



const Maincomponent = () => {

  return (
    <div style={{
      display: 'flex',

    }}>
      <ResponsiveDrawer />
      <div style={{ width: '100%' }}>
        <AuthRoute />
        <Routes>
          <Route element={<ProtectedLayout />}>
            {/* <Route path="/" element={<div>shh</div>} /> */}
            <Route path="/correctionjv" element={<CorrectionJV/>}/>

              {/* Receipts */}

              <Route path="/Receipts" element={<Receipts />} />
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
            {/*
             <Route
              path="/policyreceiptsview"
              element={<PolicyReceiptsView />
            }
            />
           
            
            <Route path="/otherreceipts" element={<OtherReceipts />} />
            
            <Route path="/addpolicyreceipts1" element={<AddPolicyReceipts1 />} />
            */}
            
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

          </Route>
        </Routes>
      </div>
      <AuthRoute />
      <Routes>
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<div>shh</div>}/>
          <Route path="/policyreceipts" element={<PolicyReceipts/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default Maincomponent;
