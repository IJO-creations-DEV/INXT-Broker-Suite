import React,{useState,useRef} from 'react';
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
import { useFormik } from "formik";
import { Toast } from 'primereact/toast';
import CustomToast from "../../../components/Toast";

const initialValues ={
  VoucherDate: new Date(),
  DepartmentCode:"",
  BranchCode:"",
  PayeeType:"",
  Criteria:"",
  CustomerCode:"",
  Transactioncode:"",
  TransactionDescription:"",
  SelectInstrumentCurrency:"",
  Remarks:""
}

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
    
    const home = { label: "Accounts" };
    const items = [
        { label: 'Payment Voucher' ,url:'/paymentvoucher'},
        { label: 'Create Voucher' ,url:'/paymentvoucher/createvoucher'},
    ];

const handleSubmit=(value)=>{
  
    Navigate("/paymentvoucher/SpecificVoucher")
}

// const toastRef = useRef(null);

// const handleSubmit = (values) => {
//   // Handle form submission
//   console.log(values, "find values");
  
//   // toastRef.current.showToast();
//   // {
//   //   setTimeout(() => {
//       Navigate("/accounts/pettycash/pettycashcodeinitiate");
//     // }, 3000);
//   }
  
// };

const customValidation = (values) => {
  const errors = {};

  if (!values.DepartmentCode) {
    errors.DepartmentCode = "This field Code is required";
  }
  if (!values.BranchCode) {
    errors.BranchCode = "This field is required";
  }
  if (!values.PayeeType) {
    errors.PayeeType = "This field is required";
  }
  if (!values.Criteria) {
    errors.Criteria = "This field is required";
  }
  if (!values.CustomerCode) {
    errors.CustomerCode = "This field is required";
  }
  if (!values.Transactioncode) {
    errors.Transactioncode = "This field is required";
  }
  // if (!values.TransactionDescription) {
  //   errors.TransactionDescription = "This field is required";
  // }
  if (!values.SelectInstrumentCurrency) {
    errors.SelectInstrumentCurrency = "This field is required";
  }
  return errors;
};

const formik = useFormik({
  initialValues:initialValues,
  validate: customValidation,
  // onSubmit: (values) => {
  //   // Handle form submission
  //    handleSubmit(values);
    
  // },
   onSubmit:handleSubmit
});

    return (
        <div className='overall__createvoucher__container'>

            <NavBar/>
            {/* <CustomToast ref={toastRef} 
            // detail="Some detail text"
            // content={"Voucher Details Save Successfully"}
            /> */}
            <div>
                <SvgBackicon/>
            <label className='label_header'>Create</label>
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
               showIcon
              value={formik.values.VoucherDate ? new Date(formik.values.VoucherDate) : null}
                onChange={(e) => {
                  formik.handleChange("VoucherDate")(
                    e.value.toISOString().split("T")[0]
                  );
                }}
                dateFormat="yy-mm-dd"
              
              />

          </div>
        </div>
        <div class="grid">
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
               <DropDowns
              className="dropdown__container"
              label="Department Code"
              // value={departmentcode}
              // onChange={(e) => setDepartmentCode(e.value)}
              value={formik.values.DepartmentCode}
              onChange={(e) =>
                formik.setFieldValue("DepartmentCode", e.value)
              }

              options={DepartmentCode}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
             { formik.touched.DepartmentCode && formik.errors.DepartmentCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.DepartmentCode}
              </div>
            )}
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
            <DropDowns
              className="dropdown__container"
              label="Branch Code"
              value={formik.values.BranchCode}
              onChange={(e) =>
                formik.setFieldValue("BranchCode", e.value)
              }
              options={BranchCode}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            { formik.touched.BranchCode && formik.errors.BranchCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.BranchCode}
              </div>
            )}
            </div>
          </div>
          <div class="sm-col-12  md:col-3 lg-col-4">
            <div>
            <DropDowns
              className="dropdown__container"
              label="Payee Type"
              value={formik.values.PayeeType}
              onChange={(e) =>
                formik.setFieldValue("PayeeType", e.value)
              }
              options={PayeeType}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
             { formik.touched.PayeeType && formik.errors.PayeeType && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.PayeeType}
              </div>
            )}
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
            <DropDowns
              className="dropdown__container"
              label="Criteria"
              value={formik.values.Criteria}
              onChange={(e) =>
                formik.setFieldValue("Criteria", e.value)
              }
              options={Criteria}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            {formik.touched.Criteria && formik.errors.Criteria && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.Criteria}
              </div>
            )}
            </div>
          </div>
        </div>

        

        <div class="grid">
          <div class="col-3 md:col-3 lg-col-3">
           
             <DropDowns
              className="dropdown__container"
              label="Customer Code"
              value={formik.values.CustomerCode}
              onChange={(e) =>
                formik.setFieldValue("CustomerCode", e.value)
              }
              options={CustomerCode}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            {formik.touched.CustomerCode &&formik.errors.CustomerCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.CustomerCode}
              </div>
            )}
          </div>
          <div class="col-3 md:col-3 lg-col-3">
          <DropDowns
              className="dropdown__container"
              label="Transaction code"
              value={formik.values.Transactioncode}
              onChange={(e) =>
                formik.setFieldValue("Transactioncode", e.value)
              }
              options={Transactioncode}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
             {formik.touched.Transactioncode && formik.errors.Transactioncode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.Transactioncode}
              </div>
            )}
          </div>
          <div class="sm-col-12 col-12 md:col-6 lg-col-6">
          

          <InputField
              classNames="field__container"
              label="Transaction Description"
              // placeholder={"Enter"}
              // value={formik.values.TransactionDescription}
              value={
                formik.values.Transactioncode
                  ? `Transaction Description ${formik.values.TransactionDescription}`
                  : ""
              }
              // value={formik.values.Transactioncode}

              onChange={formik.handleChange("TransactionDescription")}
            />
            {/* {formik.touched.TransactionDescription && formik.errors.TransactionDescription && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.TransactionDescription}
              </div>
            )} */}
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
              value={formik.values.SelectInstrumentCurrency}
              onChange={(e) =>
                formik.setFieldValue("SelectInstrumentCurrency", e.value)
              }
              options={SelectInstrumentCurrency}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
             {formik.touched.SelectInstrumentCurrency && formik.errors.SelectInstrumentCurrency && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.SelectInstrumentCurrency}
              </div>
            )}
          </div>
          <div class="sm-col-12  md:col-6 lg-col-6">
            <InputField
              classNames="field__container"
              label="Remarks (Optional)"
              placeholder={"Enter"}
              value={formik.values.Remarks}
              onChange={formik.handleChange("Remarks")}
              
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
                <Button className="submit_button p-0" label="Next"  disabled={!formik.isValid}
                onClick={()=>{formik.handleSubmit();}} 
                />
            </div>







        </div>
    );
}

export default Createvoucher;
