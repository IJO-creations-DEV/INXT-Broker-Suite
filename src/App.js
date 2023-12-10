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

function App() {
  return (
    <div>
      {/* <Sidebar/> */}
      <BrowserRouter>
      <Routes>

        {/* Receipts */}
        <Route path="/policyreceipts" element={<PolicyReceipts />}/>
        <Route path="/otherreceipts" element={<OtherReceipts />}/>
        <Route path="/policyreceiptsview" element={<div></div>}/>
        <Route path="/otherreceiptsview" element={<div></div>}/>
        <Route path="/addpolicyreceipt" element={<div></div>}/>
        <Route path="/addotherreceipt" element={<div></div>}/>
        <Route path="/otherreceipts" element={<div></div>}/>

        {/* Payment Vouchers */}
        
        <Route path="/paymentvoucher" element={<Paymentvoucher />}/>
        <Route path="/createvoucher" element={<div></div>}/>
        <Route path="/voucherbankdetails" element={<div></div>}/>
       

       {/* Journal voucher */}

       <Route path="/journalvoucher" element={<Journalvoucher />}/>

       {/* Corrections JV */}

       <Route path="/correctionsjv" element={<Correctionsjv />}/>

        {/* Reversals JV */}

        <Route path="/reversaljv" element={<Reversalsjv />}/>

        {/* Petty Cash Management */}

        <Route path="/pettycashmanagement" element={<Pettycashmanagement />}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
