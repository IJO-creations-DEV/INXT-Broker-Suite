import React, { useState, useRef, useEffect } from "react";
import "./index.scss";
import NavBar from "../../../../../components/NavBar";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../../../assets/icons/SvgDot";
import InputField from "../../../../../components/InputField";
import { useFormik } from "formik";
import DropDowns from "../../../../../components/DropDowns";
import SvgDropdown from "../../../../../assets/icons/SvgDropdown";
import { MultiSelect } from "primereact/multiselect";
import LabelWrapper from "../../../../../components/LabelWrapper";
import { Button } from "primereact/button";
import { SelectButton } from "primereact/selectbutton";
import { useNavigate, useParams } from "react-router-dom";
import CustomToast from "../../../../../components/Toast";
import SvgDropdownicon from "../../../../../assets/icons/SvgDropdownicon";
import SvgBackicon from "../../../../../assets/icons/SvgBackicon";

const InsuranceDetailsAction = ({ action }) => {
  console.log(action, "find action");
  const { id } = useParams();
  console.log(id, "find route id");
  const toastRef = useRef(null);
  const navigation = useNavigate();

  useEffect(() => {
    if (action === "edit" || action === "view") {
      setFormikValues();
    }
  }, [action]);
  
  const items = [
    {
      label: "Insurance Management",
      url: "/master/generals/insurancemanagement/insurancecompany",
    },
    {
      label: "Insurance Company",
      url: "/master/generals/insurancemanagement/insurancecompany",
    },
    {
      label: `${
        action === "add"
          ? "Add Insurance Company"
          : action === "edit"
          ? "Edit Insurance Company"
          : "Insurance Company details"
      }`,
    },
  ];
  const home = { label: "Master" };

  const cityOptionsList = [
    { label: "Option 1", value: "City 1" },
    { label: "Option 2", value: "City 2" },
    { label: "Option 3", value: "City 3" },
    { label: "Option 4", value: "City 4" },
  ];
  const stateOptionsList = [
    { label: "Option 1", value: "State 1" },
    { label: "Option 2", value: "State 2" },
    { label: "Option 3", value: "State 3" },
    { label: "Option 4", value: "State 4" },
  ];
  const countryOptionsList = [
    { label: "Option 1", value: "Country 1" },
    { label: "Option 2", value: "Country 2" },
    { label: "Option 3", value: "Country 3" },
    { label: "Option 4", value: "Country 4" },
  ];

  const customValidation = (values) => {
    const errors = {};

    if (!values.insuranceCompanyCode) {
      errors.insuranceCompanyCode = "This field is required";
    }
    if (!values.insuranceCompanyName) {
      errors.insuranceCompanyName = "This field is required";
    }
    if (!values.insuranceCompanyDescription) {
      errors.insuranceCompanyDescription = "This field is required";
    }

    if (!values.addressLine1) {
      errors.addressLine1 = "This field is required";
    }
    if (!values.addressLine2) {
      errors.addressLine2 = "This field is required";
    }
    if (!values.addressLine3) {
      errors.addressLine3 = "This field is required";
    }
    if (!values.addressLine3) {
      errors.addressLine3 = "This field is required";
    }
    if (!values.city) {
      errors.city = "This field is required";
    }
    if (!values.state) {
      errors.state = "This field is required";
    }
    if (!values.country) {
      errors.country = "This field is required";
    }
    if (!values.email) {
      errors.email = "This field is required";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "This field is required";
    }

    return errors;
  };
  const handleSubmit = (values) => {
    // Handle form submission
    if (action === "add") {
      toastRef.current.showToast();

      {
        setTimeout(() => {
          navigation("/master/generals/insurancemanagement/insurancecompany");
          formik.resetForm();
        }, 3000);
      }
    } else {
      navigation("/master/generals/insurancemanagement/insurancecompany");
    }

    console.log(values, "find values");
  };
  const setFormikValues = () => {
    const insuranceCompanyCode = "Inscom00123";
    const insuranceCompanyName = "Zeal Insurance";
    const insuranceCompanyDescription = "Insurance Company Description";
    const addressLine1 = "addressLine1";
    const addressLine2 = "addressLine2";
    const addressLine3 = "addressLine3";
    const city = { label: "Option 1", value: "City 1" };
    const state = { label: "Option 1", value: "State 1" };
    const country = { label: "Option 1", value: "Country 1" };
    const email = "email";
    const phoneNumber = "phoneNumber";
    const modifiedBy = "modifiedBy";
    const modifiedOn = "modifiedOn";

    const updatedValues = {
      insuranceCompanyCode: `${insuranceCompanyCode}`,
      insuranceCompanyName: `${insuranceCompanyName}`,
      insuranceCompanyDescription: `${insuranceCompanyDescription}`,
      addressLine1: `${addressLine1}`,
      addressLine2: `${addressLine2}`,
      addressLine3: `${addressLine3}`,
      city: `${city.value}`,
      state: `${state.value}`,
      country: `${country.value}`,
      email: `${email}`,
      phoneNumber: `${phoneNumber}`,
      modifiedBy: `${modifiedBy}`,
      modifiedOn: `${modifiedOn}`,
    };
    formik.setValues({ ...formik.values, ...updatedValues });
  };
  const formik = useFormik({
    initialValues: {
      insuranceCompanyCode: "",
      insuranceCompanyName: "",
      insuranceCompanyDescription: "",
      addressLine1: "",
      addressLine2: "",
      addressLine3: "",
      city: "",
      state: "",
      country: "",
      email: "",
      phoneNumber: "",
      modifiedBy: "",
      modifiedOn: "",
    },
    validate: customValidation,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <div className="action__insurance__company_container">
      <div className="grid m-0 top-container">
        <CustomToast
          ref={toastRef}
          message="Insurance Company Code CC1234 
          is added"
        />
        <div className="col-12 p-0">
          <NavBar />
        </div>
        <div className="col-12 p-0">
          <div className="svgback_container">
            <span onClick={() => navigation(-1)}>
              <SvgBackicon />
            </span>
            <div className="main__account__title">
              {action === "add"
                ? "Add Insurance Company"
                : action === "edit"
                ? "Edit Insurance Company"
                : "Insurance Company details"}
            </div>
          </div>
        </div>
        <div className="col-12 p-0">
          <BreadCrumb
            home={home}
            className="breadCrums__view__reversal"
            model={items}
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>
      <div className="card__container">
        <div className="grid m-0 p-0">
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={action === "view" ? true : false}
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Insurance Company Code"
              value={formik.values.insuranceCompanyCode}
              onChange={(e) =>
                formik.setFieldValue("insuranceCompanyCode", e.target.value)
              }
            />
            {formik.touched.insuranceCompanyCode &&
              formik.errors.insuranceCompanyCode && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.insuranceCompanyCode}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={action === "view" ? true : false}
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Insurance Company Name"
              value={formik.values.insuranceCompanyName}
              onChange={(e) =>
                formik.setFieldValue("insuranceCompanyName", e.target.value)
              }
            />
            {formik.touched.insuranceCompanyName &&
              formik.errors.insuranceCompanyName && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.insuranceCompanyName}
                </div>
              )}
          </div>
          <div className="col-12 md:col-6 lg:col-6 xl:col-6 ">
            <InputField
              disabled={action === "view" ? true : false}
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Insurance Company Description"
              value={formik.values.insuranceCompanyDescription}
              onChange={(e) =>
                formik.setFieldValue(
                  "insuranceCompanyDescription",
                  e.target.value
                )
              }
            />
            {formik.touched.insuranceCompanyDescription &&
              formik.errors.insuranceCompanyDescription && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.insuranceCompanyDescription}
                </div>
              )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={action === "view" ? true : false}
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Address Line 1"
              value={formik.values.addressLine1}
              onChange={(e) =>
                formik.setFieldValue("addressLine1", e.target.value)
              }
            />
            {formik.touched.addressLine1 && formik.errors.addressLine1 && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.addressLine1}
              </div>
            )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={action === "view" ? true : false}
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Address Line 2"
              value={formik.values.addressLine2}
              onChange={(e) =>
                formik.setFieldValue("addressLine2", e.target.value)
              }
            />
            {formik.touched.addressLine2 && formik.errors.addressLine2 && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.addressLine2}
              </div>
            )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={action === "view" ? true : false}
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Address Line 3"
              value={formik.values.addressLine3}
              onChange={(e) =>
                formik.setFieldValue("addressLine3", e.target.value)
              }
            />
            {formik.touched.addressLine3 && formik.errors.addressLine3 && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.addressLine3}
              </div>
            )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3">
            <DropDowns
              disabled={action === "view" ? true : false}
              className="input__field__corrections"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              placeholder="Select "
              classNames="select__label__corrections"
              optionLabel="value"
              label="City"
              value={formik.values.city}
              onChange={(e) => formik.setFieldValue("city", e.value)}
              options={cityOptionsList}
            />
            {formik.touched.city && formik.errors.city && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.city}
              </div>
            )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3">
            <DropDowns
              disabled={action === "view" ? true : false}
              className="input__field__corrections"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              placeholder="Select "
              classNames="select__label__corrections"
              optionLabel="value"
              label="State"
              value={formik.values.state}
              onChange={(e) => formik.setFieldValue("state", e.value)}
              options={stateOptionsList}
            />
            {formik.touched.state && formik.errors.state && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.state}
              </div>
            )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3">
            <DropDowns
              disabled={action === "view" ? true : false}
              className="input__field__corrections"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              placeholder="Select "
              classNames="select__label__corrections"
              optionLabel="value"
              label="Country"
              value={formik.values.country}
              onChange={(e) => formik.setFieldValue("country", e.value)}
              options={countryOptionsList}
            />
            {formik.touched.country && formik.errors.country && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.country}
              </div>
            )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={action === "view" ? true : false}
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Phone Number"
              value={formik.values.phoneNumber}
              onChange={(e) =>
                formik.setFieldValue("phoneNumber", e.target.value)
              }
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.phoneNumber}
              </div>
            )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={action === "view" ? true : false}
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Email"
              value={formik.values.email}
              onChange={(e) => formik.setFieldValue("email", e.target.value)}
            />
            {formik.touched.email && formik.errors.email && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={true}
              classNames="input__field__corrections"
              className="input__label__corrections"
              label="Modified By"
              value={formik.values.modifiedBy}
              onChange={(e) =>
                formik.setFieldValue("modifiedBy", e.target.value)
              }
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
            <InputField
              disabled={true}
              classNames="input__field__corrections"
              className="input__label__corrections"
              label="Modified On"
              value={formik.values.modifiedOn}
              onChange={(e) =>
                formik.setFieldValue("modifiedOn", e.target.value)
              }
            />
          </div>
        </div>
      </div>
      <div className="flex justify-content-end mt-5">
        {action === "add" && (
          <Button
            className="save__action"
            disabled={!formik.isValid}
            onClick={formik.handleSubmit}
          >
            Save
          </Button>
        )}
        {action === "edit" && (
          <Button
            className="save__action"
            disabled={!formik.isValid}
            onClick={formik.handleSubmit}
          >
            Update
          </Button>
        )}
      </div>
    </div>
  );
};

export default InsuranceDetailsAction;
