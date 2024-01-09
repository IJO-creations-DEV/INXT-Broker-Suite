import React, { useState, useRef } from "react";
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
import DepartMentList from "./DepartMentList";
import { useDispatch, useSelector } from "react-redux";
import { postAddBranchMiddleware } from "../store/branchMiddleware";

const initialValues = {
  BranchCode: "",
  BranchName: "",
  CompanyName: "",
  EmailID: "",
  Description: "",
  AddressLine1: "",
  AddressLine2: "",
  AddressLine3: "",
  City: "",
  State: "",
  Country: "",
  PhoneNumber: "",
  Fax: "",
};

function AddBranch({ action }) {

  const { organizationBranchView, loading } = useSelector(({ organizationBranchMainReducers }) => {
    return {
      loading: organizationBranchMainReducers?.loading,
      organizationBranchView: organizationBranchMainReducers?.organizationBranchView,

    };
  });
  console.log(organizationBranchView, "organizationBranchView");
  const toastRef = useRef(null);
  const [date, setDate] = useState(null);
  const Navigate = useNavigate();
  const { id } = useParams();
  const [departmentcode, setDepartmentCode] = useState(null);
  const [branchcode, setBranchCode] = useState(null);
  const [payeetype, setPayeeType] = useState(null);
  const [criteria, setCriteria] = useState(null);
  const [customercode, setCustomerCode] = useState(null);
  const [transactioncode, setTransactioncode] = useState(null);
  const [selectinstrumentcurrency, setSelectInstrumentCurrency] =
    useState(null);



  const home = { label: "Master" };
  const items = [
    { label: "Branch", url: "/master/generals/organization/branchmaster" },
    {
      label: `${action === "add"
        ? "Add Branch"
        : action === "edit"
          ? "Edit Branch"
          : "Branch details"
        }`,
    },
  ];
  const currencyCode = [
    {
      label: action === 'add' ? "INR" : organizationBranchView.CompanyName,
      value: action === 'add' ? "NY" : organizationBranchView.CompanyName,
    }
  ];

  const City = [
    {
      label: action === 'add' ? "INR" : organizationBranchView.City,
      value: action === 'add' ? "NY" : organizationBranchView.City,
    }

  ];
  const State = [
    {
      label: action === 'add' ? "INR" : organizationBranchView.State,
      value: action === 'add' ? "NY" : organizationBranchView.State,
    }
  ];
  const Country = [
    {
      label: action === 'add' ? "INR" : organizationBranchView.Country,
      value: action === 'add' ? "NY" : organizationBranchView.Country,
    }

  ];

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);


  const dispatch = useDispatch()
  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values, "find values");
    dispatch(postAddBranchMiddleware(formik.values))
    toastRef.current.showToast();
    // {
    setTimeout(() => {
      Navigate("/master/generals/organization/branchmaster");
    }, 3000);
  };

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
      errors.State = "This field is required";
    }
    if (!values.Country) {
      errors.Country = "This field is required";
    }


    return errors;
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate: customValidation,
    onSubmit: handleSubmit,
  });

  return (
    <div className="overall__addbranch__container">
      <NavBar />
      <CustomToast ref={toastRef} message="Branch code BC1234 added" />
      <div>
        <span onClick={() => Navigate(-1)}>
          <SvgBackicon />
        </span>
        <label className="label_header">
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
        className="breadcrumbs_container"
        separatorIcon={<SvgDot color={"#000"} />}
      />

      <Card>
        <div class="grid">
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Branch Code"
              placeholder={"Enter"}
              value={action == "add" ? formik.values.BranchCode : organizationBranchView.BranchCode}
              onChange={formik.handleChange("BranchCode")}
            />
            {formik.touched.BranchCode && formik.errors.BranchCode && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.BranchCode}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              classNames="field__container"
              label="Branch Name"
              placeholder={"Enter"}
              //   value={formik.values.CurrencyDescription}
              value={action == "add" ? formik.values.BranchName : organizationBranchView.BranchName}
              onChange={formik.handleChange("BranchName")}
            />
            {formik.touched.BranchName && formik.errors.BranchName && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.BranchName}
              </div>
            )}
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <DropDowns
              className="dropdown__container"
              label="Company Name"
              value={action == "add" ? formik.values.CompanyName : organizationBranchView.CompanyName}
              onChange={(e) => formik.setFieldValue("CompanyName", e.value)}
              options={currencyCode}
              optionLabel="label"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
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
              label="Email ID (Branch Email ID)"
              placeholder={"Enter"}
              //   value={formik.values.CurrencyDescription}
              value={action == "add" ? formik.values.EmailID : organizationBranchView.EmailID}
              onChange={formik.handleChange("EmailID")}
            />
            {formik.touched.EmailID && formik.errors.EmailID && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.EmailID}
              </div>
            )}
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
                value={action == "add" ? formik.values.Description : organizationBranchView.Description}
                onChange={formik.handleChange("Description")}
              />
              {formik.touched.Description && formik.errors.Description && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.Description}
                </div>
              )}
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-3">
            <div>
              <InputField
                classNames="field__container"
                label="Address Line 1"
                placeholder={"Enter"}
                value={action == "add" ? formik.values.AddressLine1 : organizationBranchView.AddressLine1}
                onChange={formik.handleChange("AddressLine1")}
              />
              {formik.touched.AddressLine1 && formik.errors.AddressLine1 && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.AddressLine1}
                </div>
              )}

            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-3">
            <div>
              <InputField
                classNames="field__container"
                label="Address Line 2"
                placeholder={"Enter"}
                value={action == "add" ? formik.values.AddressLine2 : organizationBranchView?.AddressLine2}
                onChange={formik.handleChange("AddressLine2")}
              />
              {formik.touched.AddressLine2 && formik.errors.AddressLine2 && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.AddressLine2}
                </div>
              )}
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
                value={action == "add" ? formik.values.AddressLine3 : organizationBranchView.AddressLine3}
                onChange={formik.handleChange("AddressLine3")}
              />
              {formik.touched.AddressLine3 && formik.errors.AddressLine3 && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.AddressLine3}
                </div>
              )}
            </div>
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <DropDowns
              className="dropdown__container"
              label="City"
              value={action == "add" ? formik.values.City : organizationBranchView.City}
              onChange={(e) => formik.setFieldValue("City", e.value)}
              options={City}
              optionLabel="value"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
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
              value={action == "add" ? formik.values.State : organizationBranchView.State}
              onChange={(e) => formik.setFieldValue("State", e.value)}
              options={State}
              optionLabel="value"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
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
              optionLabel="value"
              value={action == "add" ? formik.values.Country : organizationBranchView.Country}
              onChange={(e) => formik.setFieldValue("Country", e.value)}
              options={Country}
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            {formik.touched.Country && formik.errors.Country && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.Country}
              </div>
            )}
          </div>
        </div>

        <div class="grid">
          <div class="col-3 md:col-3 lg-col-3">
            <label className="label_text">Phone Number</label>
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <div>+91</div>
                <i className={<SvgDropdown />}></i>
              </span>
              <InputText
                placeholder="enter"
                value={action == "add" ? formik.values.PhoneNumber : organizationBranchView.PhoneNumber}
                onChange={formik.handleChange("PhoneNumber")}
              />
              {formik.touched.PhoneNumber && formik.errors.PhoneNumber && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.PhoneNumber}
                </div>
              )}
            </div>

          </div>
          <div class="col-3 md:col-3 lg-col-3">
            <label className="label_text">Fax</label>
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <div>020</div>
                <i className={<SvgDropdown />}></i>
              </span>
              <InputText
                placeholder="enter"
                value={action == "add" ? formik.values.Fax : organizationBranchView.Fax}
                onChange={formik.handleChange("Fax")}
              />
              {formik.touched.Fax && formik.errors.Fax && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.Fax}
                </div>
              )}
            </div>

          </div>
        </div>
      </Card>

      {action != "add" && <DepartMentList />}

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
            label="Update"
            disabled={!formik.isValid}

          />
        )}
      </div>
    </div>
  );
}

export default AddBranch;
