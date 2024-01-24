import React, { useState, useRef, useEffect } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import InputField from "../../../../../components/InputField";
import SubmitButton from "../../../../../components/SubmitButton";
import SvgDot from "../../../../../assets/icons/SvgDot";
import DropDowns from "../../../../../components/DropDowns";
import SvgDropdown from "../../../../../assets/icons/SvgDropdown";
import { Button } from "primereact/button";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../../../../components/NavBar";
import SvgBackicon from "../../../../../assets/icons/SvgBackicon";
import { Card } from "primereact/card";
import DatePicker from "../../../../../components/DatePicker";
import { Calendar } from "primereact/calendar";
import LabelWrapper from "../../../../../components/LabelWrapper";
import { useFormik } from "formik";
import { Toast } from "primereact/toast";
import CustomToast from "../../../../../components/Toast";
import { InputText } from "primereact/inputtext";
import { FileUpload } from "primereact/fileupload";
import DepartMentList from "../../BranchMaster/AddBranch/DepartMentList";
import SvgUploadCancelIcon from "../../../../../assets/icons/SvgUploadCancelIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  patchCompanyEditMiddleware,
  postAddCompanyMiddleware,
} from "../store/companyMiddleware";

function AddCompany({ action }) {
  console.log(action, "find action");
  const { companyView, loading } = useSelector(
    ({ organizationCompanyMainReducers }) => {
      return {
        loading: organizationCompanyMainReducers?.loading,
        companyView: organizationCompanyMainReducers?.companyTableList,
      };
    }
  );
  console.log(companyView, "find companyView");
  const dispatch = useDispatch();
  const toastRef = useRef(null);
  const { id } = useParams();
  const [date, setDate] = useState(null);
  const Navigate = useNavigate();
  const organizationBranchView = {};
  const currencyCode = [
    {
      label: action === "add" ? "INR" : companyView?.CompanyName,
      value: action === "add" ? "NY" : companyView?.CompanyName,
    },
  ];

  const cityOptionsList = [
    { label: "Option 1", value: "Channai" },
    { label: "Option 2", value: "Channai 2" },
    { label: "Option 3", value: "Channai 3" },
    { label: "Option 4", value: "Channai 4" },
  ];
  const State = [
    { label: "Option 1", value: "TamilNadu" },
    { label: "Option 2", value: "TamilNadu 2" },
    { label: "Option 3", value: "TamilNadu 3" },
    { label: "Option 4", value: "TamilNadu 4" },
  ];
  const Country = [
    { label: "Option 1", value: "India" },
    { label: "Option 2", value: "India 2" },
    { label: "Option 3", value: "India 3" },
    { label: "Option 4", value: "India 4" },
  ];

  const home = { label: "Master" };
  const items = [
    { label: "Company", url: "/master/generals/organization/companymaster" },
    {
      label: `${
        action === "add"
          ? " Add Company"
          : action === "edit"
          ? "Edit Company"
          : "Company details"
      }`,
    },
  ];

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  useEffect(() => {
    if (action === "edit" || action === "view") {
      if (id != null) {
        const filteredcompanyList = companyView?.filter(
          (data) => parseInt(data.id) === parseInt(id)
        );
        setFormikValues(filteredcompanyList);
        console.log(filteredcompanyList, "find filteredcompanyList");
      }
    }
  }, [action]);

  const setFormikValues = (data) => {
    console.log(data, "data");
    const id = parseInt(data[0]?.id);
    const CompanyCode = data[0]?.CompanyCode;
    const CompanyName = data[0]?.CompanyName;
    const Description = data[0]?.Description;
    const AddressLine1 = data[0]?.AddressLine1;
    const AddressLine2 = data[0]?.AddressLine2;
    const AddressLine3 = data[0]?.AddressLine3;
    const Websitelink = data[0]?.Websitelink;
    const PinCode = data[0]?.PinCode;
    const City = { label: "Option 1", value: data[0]?.City };
    const State = { label: "Option 1", value: data[0]?.State };
    const Country = { label: "Option 1", value: data[0]?.Country };
    const EmailID = data[0]?.EmailID;
    const PhoneNumber = data[0]?.PhoneNumber;
    const LicenseNumber = data[0]?.LicenseNumber;
    const Fax = data[0]?.Fax;

    const updatedValues = {
      CompanyCode: `${CompanyCode}`,
      CompanyName: `${CompanyName}`,
      Description: `${Description}`,
      AddressLine1: `${AddressLine1}`,
      AddressLine2: `${AddressLine2}`,
      AddressLine3: `${AddressLine3}`,
      City: `${City.value}`,
      State: `${State.value}`,
      Country: `${Country.value}`,
      EmailID: `${EmailID}`,
      PhoneNumber: `${PhoneNumber}`,
      LicenseNumber,
      PinCode,
      Fax,
      Websitelink,
      id,
    };

    formik.setValues({ ...formik.values, ...updatedValues });
  };

  const initialValues = {
    id: "",
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
    Fax: "",
  };
  const handleSubmit = (values) => {
    if (action === "add") {
      console.log(values, "find values");
      dispatch(postAddCompanyMiddleware(formik.values));
      toastRef.current.showToast();

      setTimeout(() => {
        Navigate("/master/generals/organization/companymaster");
      }, 3000);
    }
    if (action === "edit") {
      dispatch(patchCompanyEditMiddleware(values));
      Navigate("/master/generals/organization/companymaster");
    }
  };

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
    if (!values.PhoneNumber) {
      errors.PhoneNumber = "This field is required";
    }
    if (!values.Fax) {
      errors.Fax = "This field is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate: customValidation,

    onSubmit: handleSubmit,
  });

  return (
    <div className="overall__addcompany__container">
      <CustomToast ref={toastRef} message="Company code CC1234 added" />
      <div>
        <span onClick={() => Navigate(-1)}>
          <SvgBackicon />
        </span>
        <label className="label_header">
          {action === "add"
            ? " Add Company"
            : action === "edit"
            ? "Edit Company"
            : "Company details"}
        </label>
      
      
      <BreadCrumb
        model={items}
        home={home}
        className="breadcrumbs_container"
        separatorIcon={<SvgDot color={"#000"} />}
      />
   </div>

      <Card style={{marginTop:"20px"}}>
        <div class="grid">
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Company Code"
              placeholder={"Enter"}
              //   value={formik.values.CurrencyDescription}
              value={formik.values.CompanyCode}
              onChange={formik.handleChange("CompanyCode")}
              disabled={action === "view" ? true: false}
            />
            {formik.touched.CompanyCode && formik.errors.CompanyCode && (
              <div style={{ fontSize: 12, color: "red" }}>
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
              value={formik.values.CompanyName}
              onChange={formik.handleChange("CompanyName")}
              disabled={action === "view" ? true: false}
            />
            {formik.touched.CompanyName && formik.errors.CompanyName && (
              <div style={{ fontSize: 12, color: "red" }}>
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
              value={formik.values.LicenseNumber}
              onChange={formik.handleChange("LicenseNumber")}
              disabled={action === "view" ? true: false}
            />
            {formik.touched.LicenseNumber && formik.errors.LicenseNumber && (
              <div style={{ fontSize: 12, color: "red" }}>
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
              value={formik.values.EmailID}
              onChange={formik.handleChange("EmailID")}
              disabled={action === "view" ? true: false}
            />
            {formik.touched.EmailID && formik.errors.EmailID && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.EmailID}
              </div>
            )}
          </div>
        </div>

        <div class="grid">
          <div class="sm-col-12 col-12 md:col-3 lg-col-3">
            <label className="uploadtext_container">Logo</label>

            <span className="p-input-icon-right">
              <i>
                {
                  <>
                    {action === "view" && (
                      <FileUpload
                        mode="basic"
                        name="demo[]"
                        url="/api/upload"
                        accept="image/*"
                        maxFileSize={1000000}
                        // onUpload={onUpload}
                        chooseLabel="Upload"
                        className={
                          action === "view"
                            ? "uploadbutton_container_invisible"
                            : "uploadbutton_container"
                        }
                      ></FileUpload>
                    )}
                    {action === "edit" && (
                      <div className="cancel__icon__container">
                        <SvgUploadCancelIcon />
                      </div>
                    )}
                  </>
                }
              </i>

              <InputText className="field__container" disabled={action === "view" ? true: false}/>
            </span>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-3">
            <div>
              <InputField
                classNames="field__container"
                label="Website link"
                placeholder={"Enter"}
                //   value={formik.values.CurrencyDescription}
                value={formik.values.Websitelink}
                onChange={formik.handleChange("Websitelink")}
                disabled={action === "view" ? true: false}
              />
              {formik.touched.Websitelink && formik.errors.Websitelink && (
                <div style={{ fontSize: 12, color: "red" }}>
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
                value={formik.values.Description}
                onChange={formik.handleChange("Description")}
                disabled={action === "view" ? true: false}
              />
              {formik.touched.Description && formik.errors.Description && (
                <div style={{ fontSize: 12, color: "red" }}>
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
              value={formik.values.AddressLine1}
              onChange={formik.handleChange("AddressLine1")}
              disabled={action === "view" ? true: false}
            />
            {formik.touched.AddressLine1 && formik.errors.AddressLine1 && (
              <div style={{ fontSize: 12, color: "red" }}>
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
              value={formik.values.AddressLine2}
              onChange={formik.handleChange("AddressLine2")}
              disabled={action === "view" ? true: false}
            />
            {formik.touched.AddressLine2 && formik.errors.AddressLine2 && (
              <div style={{ fontSize: 12, color: "red" }}>
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
              value={formik.values.AddressLine3}
              onChange={formik.handleChange("AddressLine3")}
              disabled={action === "view" ? true: false}
            />
            {formik.touched.AddressLine3 && formik.errors.AddressLine3 && (
              <div style={{ fontSize: 12, color: "red" }}>
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
              value={formik.values.PinCode}
              onChange={formik.handleChange("PinCode")}
              disabled={action === "view" ? true: false}
            />
            {formik.touched.PinCode && formik.errors.PinCode && (
              <div style={{ fontSize: 12, color: "red" }}>
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
              onChange={(e) => formik.setFieldValue("City", e.value)}
              options={cityOptionsList}
              optionLabel="value"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
              disabled={action === "view" ? true: false}
            />
            {formik.touched.City && formik.errors.City && (
              <div style={{ fontSize: 12, color: "red" }}>
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
              onChange={(e) => formik.setFieldValue("State", e.value)}
              options={State}
              optionLabel="value"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
              disabled={action === "view" ? true: false}
            />
            {formik.touched.State && formik.errors.State && (
              <div style={{ fontSize: 12, color: "red" }}>
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
              onChange={(e) => formik.setFieldValue("Country", e.value)}
              options={Country}
              optionLabel="value"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
              disabled={action === "view" ? true: false}
            />
            {formik.touched.Country && formik.errors.Country && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.Country}
              </div>
            )}
          </div>
          <div class="col-3 md:col-3 lg-col-3">
            <label className="label_text">Phone Number</label>
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <div>+91</div>
                <i className={<SvgDropdown />}></i>
              </span>
              <InputText
                placeholder="Enter"
                value={formik.values.PhoneNumber}
                onChange={formik.handleChange("PhoneNumber")}
                disabled={action === "view" ? true: false}
              />
            </div>
            {formik.touched.PhoneNumber && formik.errors.PhoneNumber && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.PhoneNumber}
              </div>
            )}
          </div>
        </div>

        <div class="grid">
          <div class="col-3 md:col-3 lg-col-3">
            <label className="label_text">Fax</label>
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <div>+91</div>
                <i className={<SvgDropdown />}></i>
              </span>
              <InputText
                placeholder="Enter"
                value={formik.values.Fax}
                onChange={formik.handleChange("Fax")}
                disabled={action === "view" ? true: false}
              />
            </div>
            {formik.touched.Fax && formik.errors.Fax && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.Fax}
              </div>
            )}
          </div>
        </div>
      </Card>

      <div className="next_container">
        {action === "add" && (
          <Button
            className="submit_button p-0"
            label="Save"
            disabled={!formik.isValid}
            onClick={formik.handleSubmit}
          />
        )}
      </div>
      <div className="next_container">
        {action === "edit" && (
          <Button
            className="submit_button p-0"
            label="update"
            disabled={!formik.isValid}
            onClick={formik.handleSubmit}
            // onClick={()=>{formik.handleSubmit();}}
          />
        )}
      </div>
    </div>
  );
}

export default AddCompany;
