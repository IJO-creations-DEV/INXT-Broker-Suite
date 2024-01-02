import React, { useState } from "react";
import "./index.scss";
import NavBar from "../../../../components/NavBar";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../../assets/icons/SvgDot";
import InputField from "../../../../components/InputField";
import { useFormik } from "formik";
import DropDowns from "../../../../components/DropDowns";
import SvgDropdown from "../../../../assets/icons/SvgDropdown";
import { MultiSelect } from "primereact/multiselect";
import LabelWrapper from "../../../../components/LabelWrapper";
import { Button } from "primereact/button";
import { SelectButton } from "primereact/selectbutton";
import { useNavigate } from "react-router-dom";

const ViewMainAccount = () => {
  const navigation = useNavigate();
  const items = [
    {
      label: "Main Account",
      url: "/master/finance/mainaccount",
    },
    {
      label: "Main Account Details",
      url: "/master/finance/mainaccount/viewmainaccount",
    },
  ];
  const selectSwitchoptions = ["Yes", "No"];
  const [selectSwitch, setselectSwitch] = useState(selectSwitchoptions[0]);
  const EntrySwitchoptions = ["Yes", "No"];
  const [entrySwitch, setentrySwitch] = useState(EntrySwitchoptions[0]);

  const codeOptionsType = [
    { label: "Option 1", value: "Income" },
    { label: "Option 2", value: "Expense" },
    { label: "Option 3", value: "Asset" },
    { label: "Option 4", value: "Liability" },
  ];
  const categoryOptionsCode = [
    { label: "Option 1", value: "Debtor" },
    { label: "Option 2", value: "Debtor" },
  ];
  const companyCodeDatas = [
    { name: "Option 1", value: "Comp00123" },
    { name: "Option 2", value: "Comp00124" },
    { name: "Option 3", value: "Comp00125" },
  ];
  const currencyCodeDatas = [
    { name: "EUR - Euro", value: "INR" },
    { name: "ISK - Iceland Krona", value: "ISK" },
    { name: "AUD - Australian Dollar", value: "AUS" },
  ];

  const home = { label: "Master" };
  const customValidation = (values) => {
    const errors = {};
    return errors;
  };
  const handleSubmit = (values) => {
    // Handle form submission
    navigation("/master/finance/mainaccount", {
      state: { tableView: true },
    });
    console.log(values, "find values");
  };
  const formik = useFormik({
    initialValues: {
      mainaccountode: "",
      mainaccountname: "",
      description: "",
      accountcategorycode: "",
      accounttype: "",
      companyCode: [],
      currencyCode: [],
      openentrytype: "",
    },
    validate: customValidation,
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
    },
  });
  return (
    <div className="add__main__container">
      <div className="grid m-0 top-container">
        <div className="col-12 p-0">
          <NavBar />
        </div>
        <div className="col-12 p-0">
          <div className="main__account__title">Main Account Details</div>
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
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Main Account Code"
              value={formik.values.mainaccountode}
              onChange={(e) =>
                formik.setFieldValue("mainaccountode", e.target.value)
              }
            />
            {formik.touched.mainaccountode && formik.errors.mainaccountode && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.mainaccountode}
              </div>
            )}
          </div>
          <div className="col-12 md:col-6 lg:col-6 xl:col-6 ">
            <InputField
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Main Account Name"
              value={formik.values.mainaccountname}
              onChange={(e) =>
                formik.setFieldValue("mainaccountname", e.target.value)
              }
            />
            {formik.touched.mainaccountname &&
              formik.errors.mainaccountname && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.mainaccountname}
                </div>
              )}
          </div>
        </div>
        <div className="grid m-0 p-0">
          <div className="col-12 md:col-8 lg:col-6 xl:col-6 ">
            <InputField
              classNames="input__field__corrections"
              className="input__label__corrections"
              placeholder="Enter"
              label="Description"
              value={formik.values.description}
              onChange={(e) =>
                formik.setFieldValue("description", e.target.value)
              }
            />
            {formik.touched.description && formik.errors.description && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.description}
              </div>
            )}
          </div>
          <div className="col-12 md:col-4 lg:col-3 xl:col-3">
            <DropDowns
              className="input__field__corrections"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              placeholder="Select "
              classNames="select__label__corrections"
              optionLabel="value"
              label="Account Type"
              value={formik.values.accounttype}
              onChange={(e) => formik.setFieldValue("accounttype", e.value)}
              options={codeOptionsType}
            />
            {formik.touched.accounttype && formik.errors.accounttype && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.accounttype}
              </div>
            )}
          </div>
        </div>
        <div className="grid m-0 p-0">
          <div className="col-12 md:col-4 lg:col-3 xl:col-3">
            <LabelWrapper
              label="Open Entry"
              classNames="input__label__corrections"
            />
            <SelectButton
              className="mt-2 select__switch__option"
              value={selectSwitch}
              onChange={(e) => setselectSwitch(e.value)}
              options={selectSwitchoptions}
            />
          </div>
          <div className="col-12 md:col-4 lg:col-3 xl:col-3">
            <DropDowns
              disabled={selectSwitch === "Yes" ? true : false}
              className="input__field__corrections"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              placeholder="Select "
              classNames={
                selectSwitch === "Yes"
                  ? "select__label__corrections__inactive"
                  : "select__label__corrections"
              }
              optionLabel="value"
              label="Open Entry type"
              value={formik.values.openentrytype}
              onChange={(e) => formik.setFieldValue("openentrytype", e.value)}
              options={codeOptionsType}
            />
          </div>
          <div className="col-12 md:col-4 lg:col-3 xl:col-3">
            <LabelWrapper
              label="Is this only a main account?"
              classNames="input__label__corrections"
            />
            <SelectButton
              className="mt-2 select__switch__option"
              value={entrySwitch}
              onChange={(e) => setentrySwitch(e.value)}
              options={selectSwitchoptions}
            />
          </div>
        </div>
        <div className="grid m-0 p-0">
          <div className="col-12 md:col-4 lg:col-3 xl:col-3">
            <DropDowns
              className="input__field__corrections"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              placeholder="Select "
              classNames="select__label__corrections"
              optionLabel="value"
              label="Account Category Code"
              value={formik.values.accountcategorycode}
              onChange={(e) =>
                formik.setFieldValue("accountcategorycode", e.value)
              }
              options={categoryOptionsCode}
            />
            {formik.touched.accountcategorycode &&
              formik.errors.accountcategorycode && (
                <div
                  style={{ fontSize: 12, color: "red" }}
                  className="formik__errror__JV"
                >
                  {formik.errors.accountcategorycode}
                </div>
              )}
          </div>
          <div className="col-12 md:col-8 lg:col-6 xl:col-6 ">
            <InputField
              disabled={true}
              classNames="input__field__corrections__inactive"
              className="input__label__corrections"
              label="Description"
              value={
                formik.values.accountcategorycode
                  ? `descrption ${formik.values.accountcategorycode}`
                  : ""
              }
            />
          </div>
        </div>
        <div className="grid m-0 p-0">
          <div className="col-12 md:col-6 lg:col-6 xl:col-6">
            <LabelWrapper
              label="Company Code"
              classNames="input__label__corrections"
            />
            <div className="selected__data__view mt-2">
              {companyCodeDatas?.map((item, index) => {
                return <div className="data__content">{item.value}</div>;
              })}
            </div>
          </div>
          {entrySwitch === "Yes" && (
            <div className="col-12 md:col-6 lg:col-6 xl:col-6">
              <LabelWrapper
                label="Currency"
                classNames={
                  entrySwitch === "No"
                    ? "select__label__corrections__inactive"
                    : "input__label__corrections"
                }
              />
              <div className="selected__data__view mt-2">
                {currencyCodeDatas?.map((item, index) => {
                  return <div className="data__content">{item.value}</div>;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewMainAccount;
