import React,{useState} from 'react';
import './index.scss';
import { BreadCrumb } from 'primereact/breadcrumb';
import InputField from '../../../components/InputField';
import SubmitButton from '../../../components/SubmitButton'
import SvgDot from '../../../assets/icons/SvgDot';
import DropDowns from '../../../components/DropDowns';
import SvgDropdown from '../../../assets/icons/SvgDropdown';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../../components/NavBar';
import SvgBackicon from '../../../assets/icons/SvgBackicon';
import { Card } from "primereact/card";
import DatePicker from '../../../components/DatePicker';
import { Calendar } from 'primereact/calendar';
import LabelWrapper from '../../../components/LabelWrapper';

function Createvoucher() {
    const [date, setDate] = useState(null);
    const Navigate=useNavigate()
    const [departmentcode, setDepartmentCode] = useState(null);
    const [branchcode, setBranchCode] = useState(null);
    const [payeetype, setPayeeType] = useState(null);
    const [criteria, setCriteria] = useState(null);
    const [customercode, setCustomerCode] = useState(null);
    const [transactioncode, setTransactioncode] = useState(null);
    const [selectinstrumentcurrency, setSelectInstrumentCurrency] = useState(null);
    
    const DepartmentCode = [
        { name: "Doc00123", code: "NY" },
        { name: "Doc001234", code: "RM" },
      ];
      const BranchCode = [
        { name: "Branch00123", code: "NY" },
        { name: "Branch001234", code: "RM" },
      ];
      const PayeeType = [
        { name: "Customer", code: "NY" },
        { name: "owner", code: "RM" },
      ];
      const Criteria = [
        { name: "Specific", code: "NY" },
        { name: "payall", code: "RM" },
      ];
      const CustomerCode = [
        { name: "Cus00123", code: "NY" },
        { name: "Cus001234", code: "RM" },
      ];
      const Transactioncode = [
        { name: "Trans00123", code: "NY" },
        { name: "Trans001234", code: "RM" },
      ];
      const SelectInstrumentCurrency = [
        { name: "INR", code: "NY" },
        { name: "CSE", code: "RM" },
      ];
    
    const home = { label: "Dashboard" };
    const items = [
        { label: 'Accounts' },
        { label: 'Payment Voucher' },
    ];

const handleNavigation=()=>{
    Navigate("/SpecificVoucher")
}

    return (
        <div className='overall__createvoucher__container'>
            <NavBar/>
            <div>
                <SvgBackicon/>
            <label className='label_header'>Create Voucher</label>
            </div>
            <BreadCrumb
                model={items}
                home={home}
                className='breadcrumbs_container'
                separatorIcon={<SvgDot color={"#000"} />} />


            


<Card>
        <div class="grid">
          <div class="sm-col-12  md:col-3 lg-col-4 col-offset-9">
          

             
              <LabelWrapper className="calenderlable__container">Voucher Date</LabelWrapper>
             <Calendar 
             classNames="calender__container"
              value={date} onChange={(e) => setDate(e.value)} showIcon />

          </div>
        </div>
        <div class="grid">
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
               <DropDowns
              className="dropdown__container"
              label="Department Code"
              value={departmentcode}
              onChange={(e) => setDepartmentCode(e.value)}
              options={DepartmentCode}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
            <DropDowns
              className="dropdown__container"
              label="Branch Code"
              value={branchcode}
              onChange={(e) => setBranchCode(e.value)}
              options={BranchCode}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            </div>
          </div>
          <div class="sm-col-12  md:col-3 lg-col-4">
            <div>
            <DropDowns
              className="dropdown__container"
              label="Payee Type"
              value={payeetype}
              onChange={(e) => setPayeeType(e.value)}
              options={PayeeType}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
            <DropDowns
              className="dropdown__container"
              label="Criteria"
              value={criteria}
              onChange={(e) => setCriteria(e.value)}
              options={Criteria}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            </div>
          </div>
        </div>

        

        <div class="grid">
          <div class="col-3 md:col-3 lg-col-3">
           
             <DropDowns
              className="dropdown__container"
              label="Customer Code"
              value={customercode}
              onChange={(e) => setCustomerCode(e.value)}
              options={CustomerCode}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
          <div class="col-3 md:col-3 lg-col-3">
          <DropDowns
              className="dropdown__container"
              label="Transaction code"
              value={transactioncode}
              onChange={(e) => setTransactioncode(e.value)}
              options={Transactioncode}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
          <div class="sm-col-12 col-12 md:col-6 lg-col-6">
          

          <InputField
              classNames="field__container"
              label="Transaction Description"
              placeholder={"Enter"}
            />
          </div>
          {/* <div class="sm-col-12  md:col-3 lg-col-4">
            <InputField
              classNames="field__container"
              label="Currency Description"
              placeholder={"Enter"}
            />
          </div> */}
        </div>
        <div class="grid">
          

          <div class="sm-col-12  md:col-3 lg-col-4">
          <DropDowns
              className="dropdown__container"
              label="Select Instrument Currency"
              value={selectinstrumentcurrency}
              onChange={(e) => setSelectInstrumentCurrency(e.value)}
              options={SelectInstrumentCurrency}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
          <div class="sm-col-12  md:col-6 lg-col-6">
            <InputField
              classNames="field__container"
              label="Remarks (Optional)"
              placeholder={"Enter"}
            />
          </div>
        </div>
      </Card>


            <div className="next_container">
                {/* <SubmitButton label="Next"
                    className="submit_button p-0"
                    navigation="/voucherbankdetails"
                // handleSubmit={handleSubmit}
                // setVisiblechange={setVisiblechange}
                // visiblechange={visiblechange}


                /> */}
                <Button className="submit_button p-0" label="Next"
                onClick={handleNavigation}
                />
            </div>







        </div>
    );
}

export default Createvoucher;
