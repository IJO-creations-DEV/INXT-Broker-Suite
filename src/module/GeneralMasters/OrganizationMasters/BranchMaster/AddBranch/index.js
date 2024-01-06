import React,{useState,useRef} from 'react';
import './index.scss';
import { BreadCrumb } from 'primereact/breadcrumb';
import InputField from '../../../../../components/InputField';
import SubmitButton from '../../../../../components/SubmitButton'
import SvgDot from '../../../../../assets/icons/SvgDot';
import DropDowns from '../../../../../components/DropDowns';
import SvgDropdown from '../../../../../assets/icons/SvgDropdown';
import { Button } from 'primereact/button';
import { useNavigate,useParams } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar';
import SvgBackicon from '../../../../../assets/icons/SvgBackicon';
import { Card } from "primereact/card";
import DatePicker from '../../../../../components/DatePicker';
import { Calendar } from 'primereact/calendar';
import LabelWrapper from '../../../../../components/LabelWrapper';
import { useFormik } from "formik";
import { Toast } from 'primereact/toast';
import CustomToast from "../../../../../components/Toast";
import { InputText } from "primereact/inputtext";
import { FileUpload } from "primereact/fileupload";
import DepartMentList from './DepartMentList';

const initialValues ={
  BranchCode:"",
  BranchName:"",
  CompanyName:"",
  EmailID:"",
  Description:"",
  AddressLine1:"",
  AddressLine2:"",
  AddressLine3:"",
  City:"",
  State:"",
  Country:"",
  PhoneNumber:"",
  Fax:""
 
}

function AddBranch({ action }) {
    const toastRef = useRef(null);
    const [date, setDate] = useState(null);
    const Navigate=useNavigate()
    const { id } = useParams();
    const [departmentcode, setDepartmentCode] = useState(null);
    const [branchcode, setBranchCode] = useState(null);
    const [payeetype, setPayeeType] = useState(null);
    const [criteria, setCriteria] = useState(null);
    const [customercode, setCustomerCode] = useState(null);
    const [transactioncode, setTransactioncode] = useState(null);
    const [selectinstrumentcurrency, setSelectInstrumentCurrency] = useState(null);
    
    const currencyCode = [
        { name: "INR", code: "NY" },
        { name: "USD", code: "RM" },
      ];
      const ToCurrencyCode = [
        { name: "INR", code: "NY" },
        { name: "USD", code: "RM" },
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
    
    const home = { label: "Master" };
    const items = [
        { label: 'Branch' ,url:'/master/generals/organization/branchmaster'},
        { label: `${action === "add"
        ? "Add Branch"
        : action === "edit"
        ? "Edit Branch"
        : "Branch details"}`}
    ];

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);

// const handleSubmit=(value)=>{
  
//     Navigate("/master/finance/exchangerate")
// }

// const toastRef = useRef(null);

const handleSubmit = (values) => {
  // Handle form submission
  console.log(values, "find values");
  
  toastRef.current.showToast();
  // {
    setTimeout(() => {
    Navigate("/master/finance/exchangerate")
    }, 3000);
  }
  
// };

const customValidation = (values) => {
  const errors = {};

  if (!values.BranchCode) {
    errors.BranchCode = "This field Code is required";
  }
  if (!values.BranchName) {
    errors.BranchName = "This field is required";
  }
  if (!values.CompanyName) {
    errors.CompanyName = "This field is required";
  }
  if (!values.EmailID) {
    errors.EmailID = "This field is required";
  }
  if (!values.Description) {
    errors.Description = "This field is required";
  }
  if (!values.AddressLine1) {
    errors.AddressLine1 = "This field is required";
  }
  if (!values.AddressLine2) {
    errors.AddressLine2 = "This field is required";
  }
 
  if (!values.AddressLine3) {
    errors.AddressLine3 = "This field is required";
  }
  if (!values.City) {
    errors.City = "This field is required";
  }
  if (!values.State) {
    errors.State= "This field is required";
  }
  if (!values.Country) {
    errors.Country = "This field is required";
  }
  if (!values.PhoneNumber) {
    errors.PhoneNumber = "This field is required";
  }
  if (!values.Fax) {
    errors.Fax = "This field is required";
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
        <div className='overall__addbranch__container'>

            <NavBar/>
            {/* <CustomToast ref={toastRef} 
            // detail="Some detail text"
            // content={"Voucher Details Save Successfully"}
            /> */}
            <CustomToast ref={toastRef} message="Exchange Rate ER1234 is added"/>
            <div>
              <span onClick={() => Navigate(-1)}>
                <SvgBackicon/></span>
            <label className='label_header'>
            {action === "add"
                ? "Add Branch"
                : action === "edit"
                ? "Edit Branch"
                : "Branch details"}
              </label>
            </div>
            <BreadCrumb
                model={items}
                home={home}
                className='breadcrumbs_container'
                separatorIcon={<SvgDot color={"#000"} />} />


            


<Card>


<div class="grid">
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="Branch Code"
              placeholder={"Enter"}
            //   value={formik.values.CurrencyDescription}
            value={  formik.values.BranchCode}
              onChange={formik.handleChange("BranchCode")}
              
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="Branch Name"
              placeholder={"Enter"}
            //   value={formik.values.CurrencyDescription}
            value={
                formik.values.BranchName
                
              }
              onChange={formik.handleChange("BranchName")}
              
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <DropDowns
              className="dropdown__container"
              label="Company Name"
              // value={departmentcode}
              // onChange={(e) => setDepartmentCode(e.value)}
              value={formik.values.CompanyName}
              onChange={(e) =>
                formik.setFieldValue("CompanyName", e.value)
              }

              options={currencyCode}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <InputField
              classNames="field__container"
              label="Email ID (Branch Email ID)"
              placeholder={"Enter"}
            //   value={formik.values.CurrencyDescription}
            value={
                formik.values.EmailID
                
              }
              onChange={formik.handleChange("EmailID")}
              
            />
    </div>
</div>



        
        <div class="grid">
        <div class="sm-col-12 col-12 md:col-6 lg-col-6">
            <div>
            <InputField
              classNames="field__container"
              label="Description"
              placeholder={"Enter"}
            //   value={formik.values.CurrencyDescription}
            value={
                formik.values.Description
                
              }
              onChange={formik.handleChange("Description")}
              
            />
           
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-3">
            <div>
            <InputField
              classNames="field__container"
              label="Address Line 1"
              placeholder={"Enter"}
            //   value={formik.values.CurrencyDescription}
            value={
                formik.values.Websitelink
                
              }
              onChange={formik.handleChange("Websitelink")}
              
            />
             {/* { formik.touched.CurrencyCode && formik.errors.CurrencyCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.CurrencyCode}
              </div>
            )} */}
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-3">
            <div>
            <InputField
              classNames="field__container"
              label="Address Line 2"
              placeholder={"Enter"}
            //   value={formik.values.CurrencyDescription}
            value={
                formik.values.Websitelink
                
              }
              onChange={formik.handleChange("Websitelink")}
              
            />
             {/* { formik.touched.CurrencyCode && formik.errors.CurrencyCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.CurrencyCode}
              </div>
            )} */}
            </div>
          </div>
          
        </div>




<div class="grid">
<div class="sm-col-12 col-12 md:col-3 lg-col-3">
            <div>
            <InputField
              classNames="field__container"
              label="Address Line 3"
              placeholder={"Enter"}
            //   value={formik.values.CurrencyDescription}
            value={
                formik.values.Websitelink
                
              }
              onChange={formik.handleChange("Websitelink")}
              
            />
             {/* { formik.touched.CurrencyCode && formik.errors.CurrencyCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.CurrencyCode}
              </div>
            )} */}
            </div>
          </div>
    <div class="col-12 md:col-6 lg:col-3">
    <DropDowns
              className="dropdown__container"
              label="City"
              // value={departmentcode}
              // onChange={(e) => setDepartmentCode(e.value)}
              value={formik.values.City}
              onChange={(e) =>
                formik.setFieldValue("City", e.value)
              }

              options={currencyCode}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <DropDowns
              className="dropdown__container"
              label="State"
              // value={departmentcode}
              // onChange={(e) => setDepartmentCode(e.value)}
              value={formik.values.State}
              onChange={(e) =>
                formik.setFieldValue("State", e.value)
              }

              options={currencyCode}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-3">
    <DropDowns
              className="dropdown__container"
              label="Country"
              // value={departmentcode}
              // onChange={(e) => setDepartmentCode(e.value)}
              value={formik.values.Country}
              onChange={(e) =>
                formik.setFieldValue("Country", e.value)
              }

              options={currencyCode}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
    </div>
    
</div>


<div class="grid">
<div class="col-3 md:col-3 lg-col-3">
            <label className='label_text'>Phone Number</label>
          <div className="p-inputgroup flex-1">
            
        <span className="p-inputgroup-addon">
          <div>+91</div>
          <i className={<SvgDropdown/>}></i>
        </span>
        <InputText placeholder="enter"
        value={formik.values.PhoneNumber}
        onChange={formik.handleChange("PhoneNumber")}
        />
      </div>
             {formik.touched.PhoneNumber && formik.errors.PhoneNumber && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.PhoneNumber}
              </div>
            )}
          </div>
          <div class="col-3 md:col-3 lg-col-3">
            <label className='label_text'>Fax</label>
          <div className="p-inputgroup flex-1">
            
        <span className="p-inputgroup-addon">
          <div>020</div>
          <i className={<SvgDropdown/>}></i>
        </span>
        <InputText placeholder="enter"
        value={formik.values.PhoneNumber}
        onChange={formik.handleChange("PhoneNumber")}
        />
      </div>
             {formik.touched.PhoneNumber && formik.errors.PhoneNumber && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.PhoneNumber}
              </div>
            )}
          </div>
    </div>

        
       


       
      </Card>


      {action != "add" && (
<DepartMentList/>
      )}

            <div className="next_container">
            {action === "add" && (
                <Button className="submit_button p-0" label="Save"  disabled={!formik.isValid}
                onClick={()=>{formik.handleSubmit();}} 
                />
            )}
            </div>
            <div className="next_container">
            {action === "edit" && (
                <Button className="submit_button p-0" label="Update"  disabled={!formik.isValid}
                // onClick={()=>{formik.handleSubmit();}} 
                />
            )}
            </div>







        </div>
    );
}

export default AddBranch;
