import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Sidebar from "./components/sidebar";
import PolicyReceipts from "../src/module/Receipts/PolicyReceipts/index";
import OtherReceipts from '../src/module/Receipts/OtherReceipts/index'
import Correctionsjv from '../src/module/CorrectionsJV/index'
import Reversalsjv from '../src/module/Reversals/index'
import Pettycashmanagement from '../src/module/PettyCashManagement/index'
import Journalvoucher from '../src/module/JournalVoucher/index'
import Paymentvoucher from '../src/module/PaymentVoucher/index'
import PolicyReceiptsView from '../src/module/Receipts/ReceiptsView/PolicyReceiptsView'
import OtherReceiptsView from '../src/module/Receipts/ReceiptsView/OtherReceiptsView'
import AddOtherReceipts from '../src/module/Receipts/AddReceipts/AddOtherReceipts/index'
import AddPolicyReceipts from '../src/module/Receipts/AddReceipts/AddPolicyReceipts'
import CreateVoucher from '../src/module/PaymentVoucher/createVoucher';
import VoucherBankDetails from '../src/module/PaymentVoucher/BankDetails';
function App() {
  return (
    <div>
      <Sidebar>
        <BrowserRouter>
          <Routes>

            {/* Receipts */}
            <Route path="/policyreceipts" element={<PolicyReceipts />} />
            <Route path="/otherreceipts" element={<OtherReceipts />} />
            <Route path="/policyreceiptsview" element={<PolicyReceiptsView />} />
            <Route path="/otherreceiptsview" element={<OtherReceiptsView />} />
            <Route path="/addpolicyreceipt" element={<AddPolicyReceipts />} />
            <Route path="/addotherreceipt" element={<AddOtherReceipts />} />
            <Route path="/otherreceipts" element={<OtherReceipts />} />

            {/* Payment Vouchers */}

            <Route path="/paymentvoucher" element={<Paymentvoucher />} />
            <Route path="/createvoucher" element={<CreateVoucher />} />
            <Route path="/voucherbankdetails" element={<VoucherBankDetails />} />


            {/* Journal voucher */}

            <Route path="/journalvoucher" element={<Journalvoucher />} />

            {/* Corrections JV */}

            <Route path="/correctionsjv" element={<Correctionsjv />} />

            {/* Reversals JV */}

            <Route path="/reversaljv" element={<Reversalsjv />} />

            {/* Petty Cash Management */}

            <Route path="/pettycashmanagement" element={<Pettycashmanagement />} />

          </Routes>
        </BrowserRouter>
      </Sidebar>
    </div>
  );
}

export default App;
