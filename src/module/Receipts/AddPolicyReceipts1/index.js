import React, { useState } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import InputField from "../../../components/InputField";
import SvgDot from "../../../assets/icons/SvgDot";
import { Button } from "primereact/button";
import SvgDropdown from "../../../assets/icons/SvgDropdown";
import DropDowns from "../../../components/DropDowns";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import SvgBack from "../../../assets/icons/SvgBack";
import { useFormik } from "formik";
import { Calendar } from "primereact/calendar";
import LabelWrapper from "../../../components/LabelWrapper";

function BranchAdding() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItem1, setSelectedItem1] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);
  const [selectedItem3, setSelectedItem3] = useState(null);
  const [selectedItem4, setSelectedItem4] = useState(null);
  const [selectedItem5, setSelectedItem5] = useState(null);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [errors, setErrors] = useState("");

  // const handleClick =()=>{
  //   navigate("/addpolicyedit")
  // }

  const navigate = useNavigate();
  const items = [{ label: "Receipts",url:"policyreceipts" }, { label: "Add Receipts" }];
  const home = { label: "Accounts " };
  const item = [
    { name: "Policy", code: "PL" },
    { name: "Policy1", code: "P1" },
    { name: "Policy2", code: "P2" },
  ];
  const item1 = [
    { name: "Branch00123", code: "BH" },
    { name: "Branch00345", code: "B1" },
    { name: "Branch00678", code: "B2" },
  ];
  const item2 = [
    { name: "Depart00123", code: "DP" },
    { name: "Depart00345", code: "D1" },
    { name: "Depart00678", code: "D2" },
  ];
  const item3 = [
    { name: "00123", code: "C1" },
    { name: "00345", code: "C2" },
    { name: "00678", code: "C3" },
  ];
  const item4 = [
    { name: "INR", code: "IR" },
    { name: "INR1", code: "IR1" },
    { name: "INR2", code: "IR2" },
  ];
  const item5 = [
    { name: "Trans0123", code: "TR1" },
    { name: "Trans345", code: "TR2" },
    { name: "Trans456", code: "TR3" },
  ];

  const initialValue = {
    receiptDate: new Date(),
    receiptNumber: "",
    receiptType: "",
    branchCode: "",
    departmentCode: "",
    customerCode: "",
    currencyCode: "",
    transactionCode: "",
    remarks: "",
  };
  const validate = (values) => {
    console.log(values, "sss");
    const errors = {};
    console.log(values, errors, "values");
    if (!values.receiptDate) {
      errors.receiptDate = "Date is required";
    }
    if (!values.receiptNumber) {
      errors.receiptNumber = "Receipt number is required";
    }
    if (!values.receiptType) {
      errors.receiptType = "Receipt type is required";
    }
    if (!values.branchCode) {
      errors.branchCode = "Branch code is required";
    }
    if (!values.departmentCode) {
      errors.departmentCode = "Department code is required";
    }
    if (!values.customerCode) {
      errors.customerCode = "Customer code is required";
    }
    if (!values.currencyCode) {
      errors.currencyCode = "Currency code is required";
    }
    if (!values.transactionCode) {
      errors.transactionCode = "Transaction code is required";
    }
    return errors;
  };
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const handleSubmit = () => {
    const formErrors = validate(formik.values);
    setErrors(formErrors);
    console.log(formErrors, "iiiii");
    navigate("/addpolicyedit");
  };

  const formik = useFormik({
    initialValues: initialValue,
    validate,
    onSubmit: handleSubmit,
  });
  return (
    <div className="overall_add_policy_receipts_container">
      <NavBar />
      <div>
        <SvgBack />
        <label className="label_header">Add Receipts</label>
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
              Receipt Date
            </LabelWrapper>
            <Calendar
              classNames="calender__container"
              showIcon
              value={formik.values.receiptDate}
          minDate={minDate}
 
              onChange={(e) => {
                formik.setFieldValue("receiptDate", e.target.value);
              }}
              dateFormat="yy-mm-dd"
              error={formik.errors.receiptDate}
            />
          </div>
        </div>
        <div class="grid">
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
              <InputField
                value={formik.values.receiptNumber}
                onChange={formik.handleChange("receiptNumber")}
                error={formik.errors.receiptNumber}
                classNames="field__container"
                label="Receipt Number"
                placeholder={"Enter"}
              />
            </div>
          </div>
          <div class="sm-col-12  md:col-3 lg-col-4">
            <div>
              <DropDowns
                value={formik.values.receiptType}
                onChange={formik.handleChange("receiptType")}
                error={formik.errors.receiptType}
                className="dropdown__container"
                label="Receipt Type"
                options={item}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
          </div>
          <div class="sm-col-12  md:col-3 lg-col-4">
            <div>
              <DropDowns
                value={formik.values.branchCode}
                onChange={formik.handleChange("branchCode")}
                error={formik.errors.branchCode}
                className="dropdown__container"
                label="Branch Code"
                options={item1}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
          </div>
          <div class="sm-col-12  md:col-3 lg-col-4">
            <div>
              <DropDowns
                value={formik.values.departmentCode}
                onChange={formik.handleChange("departmentCode")}
                error={formik.errors.departmentCode}
                className="dropdown__container"
                label="Department Code"
                options={item2}
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
              value={formik.values.customerCode}
              onChange={formik.handleChange("customerCode")}
              error={formik.errors.customerCode}
              className="dropdown__container"
              label="Customer Code"
              options={item3}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
          <div class="col-3 md:col-3 lg-col-3">
            <DropDowns
              value={formik.values.currencyCode}
              onChange={formik.handleChange("currencyCode")}
              error={formik.errors.currencyCode}
              className="dropdown__container"
              label="Currency Code"
              options={item4}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <DropDowns
              value={formik.values.transactionCode}
              onChange={formik.handleChange("transactionCode")}
              error={formik.errors.transactionCode}
              className="dropdown__container"
              label="Transaction Code"
              options={item5}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
        </div>
        <div class="grid">
          <div class="col-6 md:col-6 lg-col-6">
            <div>
              <InputField
                value={formik.values.remarks}
                onChange={formik.handleChange("remarks")}
                error={formik.errors.remarks}
                classNames="field__container"
                label="Remarks (Optional)"
                placeholder={"Enter"}
              />
            </div>
          </div>
        </div>
      </Card>

      <div className="next_container">
        <div className="exit_print_buttons">
          <Button label="Next" className="print"  onClick={()=>{formik.handleSubmit();}} disabled={!formik.isValid}/>
        </div>
      </div>
    </div>
  );
}

export default BranchAdding;
