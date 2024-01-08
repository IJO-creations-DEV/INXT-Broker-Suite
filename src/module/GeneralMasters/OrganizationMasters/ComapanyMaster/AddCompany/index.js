import React, { useState, useRef } from 'react';
import './index.scss';
import { BreadCrumb } from 'primereact/breadcrumb';
import InputField from '../../../../../components/InputField';
import SubmitButton from '../../../../../components/SubmitButton'
import SvgDot from '../../../../../assets/icons/SvgDot';
import DropDowns from '../../../../../components/DropDowns';
import SvgDropdown from '../../../../../assets/icons/SvgDropdown';
import { Button } from 'primereact/button';
import { useNavigate, useParams } from 'react-router-dom';
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
import DepartMentList from '../../BranchMaster/AddBranch/DepartMentList';

const initialValues = {
  CompanyCode: "",
  CompanyName: "",
  LicenseNumber: "",
  EmailID: "",
  Logo: "",
  Websitelink: "",
  Description: "",
  AddressLine1: "",
  AddressLine2: "",
  AddressLine3: "",
  PinCode: "",
  City: "",
  State: "",
  Country: "",
  PhoneNumber: "",
  Fax: ""
}

function AddCompany({ action }) {
  const toastRef = useRef(null);
  const { id } = useParams();
  const [date, setDate] = useState(null);
  const Navigate = useNavigate()


  const currencyCode = [
    { name: "INR", code: "NY" },
    { name: "USD", code: "RM" },
  ];
  const State = [
    { name: "Davio", code: "NY" },
    { name: "Albay", code: "RM" },
  ];
  const City = [
    { name: "Camalig", code: "NY" },
    { name: "cama", code: "RM" },
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
    { label: 'Company', url: '/master/generals/organization/companymaster' },
    {
      label: `${action === "add"
        ? " Add Company"
        : action === "edit"
          ? "Edit Company"
          : "Company details"}`
    }
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

    if (!values.CompanyCode) {
      errors.CompanyCode = "This field Code is required";
    }
    if (!values.CompanyName) {
      errors.CompanyName = "This field is required";
    }
    if (!values.LicenseNumber) {
      errors.LicenseNumber = "This field is required";
    }
    if (!values.EmailID) {
      errors.EmailID = "This field is required";
    }
    if (!values.Logo) {
      errors.Logo = "This field is required";
    }
    if (!values.Websitelink) {
      errors.Websitelink = "This field is required";
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
    if (!values.PinCode) {
      errors.PinCode = "This field is required";
    }
    if (!values.City) {
      errors.City = "This field is required";
    }
    if (!values.State) {
      errors.State = "This field is required";
    }
    if (!values.Country) {
      errors.Country = "This field is required";
    }
    // if (!values.PhoneNumber) {
    //   errors.PhoneNumber = "This field is required";
    // }
    // if (!values.Fax) {
    //   errors.Fax = "This field is required";
    // }

    return errors;
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate: customValidation,
    // onSubmit: (values) => {
    //   // Handle form submission
    //    handleSubmit(values);

    // },
    onSubmit: handleSubmit
  });

  return (
    <div className='overall__addcompany__container'>

      <NavBar />
      {/* <CustomToast ref={toastRef} 
            // detail="Some detail text"
            // content={"Voucher Details Save Successfully"}
            /> */}
      <CustomToast ref={toastRef} message="Exchange Rate ER1234 is added" />
      <div>
        <span onClick={() => Navigate(-1)}>
          <SvgBackicon /></span>
        <label className='label_header'>
          {action === "add"
            ? " Add Company"
            : action === "edit"
              ? "Edit Company"
              : "Company details"}
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
              label="Company Code"
              placeholder={"Enter"}
              //   value={formik.values.CurrencyDescription}
              value={formik.values.CompanyCode}
              onChange={formik.handleChange("CompanyCode")}
            />
             {formik.touched.CompanyCode && formik.errors.CompanyCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.CompanyCode}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Company Name"
              placeholder={"Enter"}
              //   value={formik.values.CurrencyDescription}
              value={
                formik.values.CompanyName

              }
              onChange={formik.handleChange("CompanyName")}

            />
            {formik.touched.CompanyName && formik.errors.CompanyName && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.CompanyName}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="License Number"
              placeholder={"Enter"}
              //   value={formik.values.CurrencyDescription}
              value={
                formik.values.LicenseNumber

              }
              onChange={formik.handleChange("LicenseNumber")}

            />
            {formik.touched.LicenseNumber && formik.errors.LicenseNumber && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.LicenseNumber}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Email ID"
              placeholder={"Enter"}
              //   value={formik.values.CurrencyDescription}
              value={
                formik.values.EmailID

              }
              onChange={formik.handleChange("EmailID")}

            />
            {formik.touched.EmailID && formik.errors.EmailID && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.EmailID}
              </div>
            )}
          </div>
        </div>




        <div class="grid">
          <div class="sm-col-12 col-12 md:col-3 lg-col-3">
            <label className='uploadtext_container'>Logo</label>
            {/* <div className="p-inputgroup flex-1">
              <InputText value="hello" classNames="field_extra__container">img</InputText>
              <span className="p-inputgroup-addon">
                <FileUpload
                  mode="basic"
                  name="demo[]"
                  url="/api/upload"
                  accept="image/*"
                  maxFileSize={1000000}
                  // onUpload={onUpload}
                  emptyTemplate={<p>wer</p>}
                  chooseLabel="Upload"
                />
              </span>

            </div> */}
            <span className="p-input-icon-right">
            <i >{  <FileUpload
          mode="basic"
          name="demo[]"
          url="/api/upload"
          accept="image/*"
          maxFileSize={1000000}
          // onUpload={onUpload}
          chooseLabel="Upload"
          className='uploadbutton_container'
        ></FileUpload>}</i>
       
      
        <InputText  className="field__container" />
      </span>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-3">
            <div>
              <InputField
                classNames="field__container"
                label="Website link"
                placeholder={"Enter"}
                //   value={formik.values.CurrencyDescription}
                value={
                  formik.values.Websitelink

                }
                onChange={formik.handleChange("Websitelink")}

              />
              { formik.touched.Websitelink && formik.errors.Websitelink && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.Websitelink}
              </div>
            )}
            </div>
          </div>
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
              { formik.touched.Description && formik.errors.Description && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.Description}
              </div>
            )}

            </div>
          </div>
        </div>


        <div class="grid">
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Address Line 1"
              placeholder={"Enter"}
              //   value={formik.values.CurrencyDescription}
              value={
                formik.values.AddressLine1

              }
              onChange={formik.handleChange("AddressLine1")}

            />
            { formik.touched.AddressLine1 && formik.errors.AddressLine1 && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.AddressLine1}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Address Line 2"
              placeholder={"Enter"}
              //   value={formik.values.CurrencyDescription}
              value={
                formik.values.AddressLine2

              }
              onChange={formik.handleChange("AddressLine2")}

            />
            { formik.touched.AddressLine2 && formik.errors.AddressLine2 && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.AddressLine2}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Address Line 3"
              placeholder={"Enter"}
              //   value={formik.values.CurrencyDescription}
              value={
                formik.values.AddressLine3

              }
              onChange={formik.handleChange("AddressLine3")}

            />
            { formik.touched.AddressLine3 && formik.errors.AddressLine3 && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.AddressLine3}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Pin Code"
              placeholder={"Enter"}
              //   value={formik.values.CurrencyDescription}
              value={
                formik.values.PinCode

              }
              onChange={formik.handleChange("PinCode")}

            />
            { formik.touched.PinCode && formik.errors.PinCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.PinCode}
              </div>
            )}
          </div>
        </div>


        <div class="grid">
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

              options={City}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            { formik.touched.City && formik.errors.City && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.City}
              </div>
            )}
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

              options={State}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            { formik.touched.State && formik.errors.State && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.State}
              </div>
            )}
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
            { formik.touched.Country && formik.errors.Country && (
              <div
                style={{ fontSize: 12, color: "red" }}
                
              >
                {formik.errors.Country}
              </div>
            )}
          </div>
          <div class="col-3 md:col-3 lg-col-3">
            <label className='label_text'>Phone Number</label>
            <div className="p-inputgroup flex-1">

              <span className="p-inputgroup-addon">
                <div>+91</div>
                <i className={<SvgDropdown />}></i>
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


        <div class="grid">
          <div class="col-3 md:col-3 lg-col-3">
            <label className='label_text'>Tax</label>
            <div className="p-inputgroup flex-1">

              <span className="p-inputgroup-addon">
                <div>+91</div>
                <i className={<SvgDropdown />}></i>
              </span>
              <InputText placeholder="enter"
                value={formik.values.Tax}
                onChange={formik.handleChange("Tax")}
              />
            </div>
            {formik.touched.Tax && formik.errors.Tax && (
              <div
                style={{ fontSize: 12, color: "red" }}

              >
                {formik.errors.Tax}
              </div>
            )}
          </div>
        </div>






      </Card>







      <div className="next_container">
        {action === "add" && (
          <Button className="submit_button p-0" label="Save" disabled={!formik.isValid}
            onClick={() => { formik.handleSubmit(); }}
          />
        )}
      </div>
      <div className="next_container">
        {action === "edit" && (
          <Button className="submit_button p-0" label="update" disabled={!formik.isValid}
          // onClick={()=>{formik.handleSubmit();}} 
          />
        )}
      </div>







    </div>
  );
}

export default AddCompany;
