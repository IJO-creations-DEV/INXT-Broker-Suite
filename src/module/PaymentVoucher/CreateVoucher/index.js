import React, { useState, useRef } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import InputField from "../../../components/InputField";
import SubmitButton from "../../../components/SubmitButton";
import SvgDot from "../../../assets/icons/SvgDot";
import DropDowns from "../../../components/DropDowns";
import SvgDropdown from "../../../assets/icons/SvgDropdown";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import SvgBackicon from "../../../assets/icons/SvgBackicon";
import { Card } from "primereact/card";
import DatePicker from "../../../components/DatePicker";
import { Calendar } from "primereact/calendar";
import LabelWrapper from "../../../components/LabelWrapper";
import { useFormik } from "formik";
import { Toast } from "primereact/toast";

import { useDispatch, useSelector } from "react-redux";
import { postpaymentVocherCreateDataMiddleware } from "../store/paymentVocherMiddleware";
const initialValues = {
  VoucherDate: new Date(),
  DepartmentCode: "",
  BranchCode: "",
  PayeeType: "",
  Criteria: "",
  CustomerCode: "",
  Transactioncode: "",
  TransactionDescription: "",
  SelectInstrumentCurrency: "",
  Remarks: "",
};

function Createvoucher() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const DepartmentCode = [
    { name: "FIN", code: "FI" },
    { name: "MKT", code: "MK" },
    { name: "IT", code: "IT" },
    { name: "SLS", code: "SL" },
  ];
  const BranchCode = [
    { name: "PHP001", code: "PH" },
    { name: "PHP002", code: "PH2" },
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
    { name: "CL001", code: "CL" },
    { name: "CL002", code: "CL2" },
    { name: "INS001", code: "IS" },
    { name: "INS002", code: "IN" },
  ];
  const Transactioncode = [
    { name: "PRM", code: "NY" },
    { name: "COMM", code: "RM" },
    { name: "REMT", code: "RM" },
  ];
  const SelectInstrumentCurrency = [
    { name: "700001234", code: "NY" },
    { name: "700001235", code: "RM" },
    { name: "700001236", code: "RM" },
  ];

  const home = { label: "Accounts" };
  const items = [
    { label: "Payment Voucher", url: "/accounts/paymentvoucher" },
    { label: "Create Voucher", url: "/accounts/paymentvoucher/createvoucher" },
  ];

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const { paymentVocherList, loading } = useSelector(
    ({ paymentVoucherReducers }) => {
      return {
        loading: paymentVoucherReducers?.loading,
        paymentVocherList: paymentVoucherReducers?.paymentVocherList,
      };
    }
  );
  const handleSubmit = (value) => {
    const valueWithId = {
      ...value,
      id: paymentVocherList?.length + 1,
    };
    dispatch(postpaymentVocherCreateDataMiddleware(valueWithId));
    Navigate("/accounts/paymentvoucher/SpecificVoucher");
  };

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
    // if (!values.CustomerCode) {
    //   errors.CustomerCode = "This field is required";
    // }
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
    initialValues: initialValues,
    validate: customValidation,
    onSubmit: handleSubmit,
  });
console.log("first", formik.values.Criteria?.name)
  return (
    <div className="overall__createvoucher__container">
      <NavBar />

      <div>
        <span onClick={() => Navigate(-1)}>
          <SvgBackicon />
        </span>
        <label className="label_header">Create</label>
      </div>
      <BreadCrumb
        model={items}
        home={home}
        className="breadcrumbs_container"
        separatorIcon={<SvgDot color={"#000"} />}
      />

      <Card>
        <div class="grid">
          <div class="sm-col-12  md:col-3 lg-col-4 col-offset-9">
            <LabelWrapper className="calenderlable__container">
              Voucher Date
            </LabelWrapper>
            <Calendar
              classNames="calender__container"
              showIcon
              // value={formik.values.VoucherDate ? new Date(formik.values.VoucherDate) : null}
              //   onChange={(e) => {
              //     formik.handleChange("VoucherDate")(
              //       e.value.toISOString().split("T")[0]
              //     );
              //   }}

              value={formik.values.VoucherDate}
              minDate={minDate}
              onChange={(e) => {
                formik.setFieldValue("VoucherDate", e.target.value);
              }}
              dateFormat="yy-mm-dd"
              disabled={true}
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
              {formik.touched.DepartmentCode &&
                formik.errors.DepartmentCode && (
                  <div style={{ fontSize: 12, color: "red" }}>
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
                onChange={(e) => formik.setFieldValue("BranchCode", e.value)}
                options={BranchCode}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
              {formik.touched.BranchCode && formik.errors.BranchCode && (
                <div style={{ fontSize: 12, color: "red" }}>
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
                onChange={(e) => formik.setFieldValue("PayeeType", e.value)}
                options={PayeeType}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
              {formik.touched.PayeeType && formik.errors.PayeeType && (
                <div style={{ fontSize: 12, color: "red" }}>
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
                onChange={(e) => formik.setFieldValue("Criteria", e.value)}
                options={Criteria}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
              {formik.touched.Criteria && formik.errors.Criteria && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.Criteria}
                </div>
              )}
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="col-3 md:col-3 lg-col-3">
           { formik.values.Criteria == "" || formik.values.Criteria?.name == "Specific"  ? 
           <DropDowns
           className="dropdown__container"
           label="Customer Code"
           value={formik.values.CustomerCode}
           onChange={(e) => formik.setFieldValue("CustomerCode", e.value)}
           options={CustomerCode}
           optionLabel="name"
           placeholder={"Select"}
           dropdownIcon={<SvgDropdown color={"#000"} />}
         /> : null
           } 
            {/* {formik.touched.CustomerCode && formik.errors.CustomerCode && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.CustomerCode}
              </div>
            )} */}
          </div>
          <div class="col-3 md:col-3 lg-col-3">
            <DropDowns
              className="dropdown__container"
              label="Transaction code"
              value={formik.values.Transactioncode}
              onChange={(e) => formik.setFieldValue("Transactioncode", e.value)}
              options={Transactioncode}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            {formik.touched.Transactioncode &&
              formik.errors.Transactioncode && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.Transactioncode}
                </div>
              )}
          </div>
          <div class="sm-col-12 col-12 md:col-6 lg-col-6">
            <InputField
              disabled={true}
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
            {formik.touched.SelectInstrumentCurrency &&
              formik.errors.SelectInstrumentCurrency && (
                <div style={{ fontSize: 12, color: "red" }}>
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
        {/*  */}
        <Button
          className="submit_button p-0"
          label="Next"
          disabled={!formik.isValid}
          onClick={() => {
            formik.handleSubmit();
          }}
        />
      </div>
    </div>
  );
}

export default Createvoucher;
