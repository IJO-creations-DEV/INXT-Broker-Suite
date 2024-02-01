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
import { useSelector, useDispatch } from "react-redux";
import { postAddReceiptsMiddleware } from "../store/receiptsMiddleware";

function BranchAdding() {
  const [errors, setErrors] = useState("");
  const addReceiptsList = useSelector((state) => state.addReceiptsList);
  const { receiptDetailList, loading, total, receiptsTableList } = useSelector(
    ({ receiptsTableReducers }) => {
      return {
        loading: receiptsTableReducers?.loading,
        receiptDetailList: receiptsTableReducers?.receiptDetailList,
        total: receiptsTableReducers,
        receiptsTableList: receiptsTableReducers?.receiptsTableList,
      };
    }
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const items = [
    { label: "Receipts", command: () => navigate("/accounts/receipts") },
    { label: "Add Receipts", to: "/accounts/receipts/addreceipts" },
  ];
  const home = { label: "Accounts " };
  const item = [
    { name: "Premium", code: "PR" },
    { name: "Endorsement", code: "ER" },
  ];
  const item1 = [
    { name: "PHP001", code: "PH1" },
    { name: "PHP002", code: "PH2" },
    { name: "PHP003", code: "PH3" },
  ];
  const item2 = [
    { name: "FIN", code: "FN" },
    { name: "MKT", code: "MK" },
    { name: "IT", code: "I" },
    { name: "SLS", code: "SL" },
  ];
  const item3 = [
    { name: "CL001", code: "C1" },
    { name: "CL002", code: "C2" },
    { name: "INS001", code: "IN1" },
    { name: "INS002", code: "IN2" },
  ];
  const item4 = [
    { name: "PHP", code: "IR" },
    { name: "USD", code: "US" },
  ];
  const item5 = [
    { name: "PRM", code: "PR" },
    { name: "COMM", code: "CM" },
    { name: "REMT", code: "RT" },
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
  const generateRandomName = () => {
    const names = ["Ayesha", "Sindhu", "John", "Doe", "Alice", "Bob"];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  const generateRandomTransaction = () => {
    const transactions = ["Transaction1", "Transaction2", "Transaction3"];
    const randomIndex = Math.floor(Math.random() * transactions.length);
    return { name: transactions[randomIndex] };
  };

  const generateRandomAmount = () => {
    return (Math.random() * 1000).toFixed(2);
  };

  const handleSubmit = (values) => {
    const dataa = {
      transactionCode: generateRandomTransaction(),
      name: generateRandomName(),
      amount: generateRandomAmount(),
    };
    const formErrors = validate(formik.values);
    setErrors(formErrors);
    console.log(formErrors, "iiiii");

    const valueWithId = {
      ...formik.values,
      id: receiptsTableList.length + 1,

      // transactionCode: dataa.transactionCode,
      // name: dataa.name,
      // amount: dataa.amount
    };

    dispatch(postAddReceiptsMiddleware(valueWithId));

    navigate("/accounts/receipts/addreceiptedit");
  };
  console.log(addReceiptsList, "find valueWithId");

  const formik = useFormik({
    initialValues: initialValue,
    validate,
    onSubmit: handleSubmit,
  });

  return (
    <div className="overall_add_policy_receipts_container">
      <div>
        <span onClick={() => navigate(-1)}>
          <SvgBack />
        </span>
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
              disabled={true}
            />
            {formik.touched.receiptDate && formik.errors.receiptDate && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.receiptDate}
              </div>
            )}
          </div>
        </div>
        <div class="grid">
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
              <InputField
                value={formik.values.receiptNumber}
                onChange={formik.handleChange("receiptNumber")}
                // error={formik.errors.receiptNumber}
                classNames="field__container"
                label="Receipt Number"
                // placeholder={"Enter"}
                type="numeric"
                disabled={true}
              />
              {formik.touched.receiptNumber && formik.errors.receiptNumber && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.receiptNumber}
                </div>
              )}
            </div>
          </div>
          <div class="sm-col-12  md:col-3 lg-col-4">
            <div>
              <DropDowns
                value={formik.values.receiptType}
                onChange={formik.handleChange("receiptType")}
                // error={formik.errors.receiptType}
                className="dropdown__container"
                label="Receipt Type"
                options={item}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
              {formik.touched.receiptType && formik.errors.receiptType && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.receiptType}
                </div>
              )}
            </div>
          </div>
          <div class="sm-col-12  md:col-3 lg-col-4">
            <div>
              <DropDowns
                value={formik.values.branchCode}
                onChange={formik.handleChange("branchCode")}
                // error={formik.errors.branchCode}
                className="dropdown__container"
                label="Branch Code"
                options={item1}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
              {formik.touched.branchCode && formik.errors.branchCode && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.branchCode}
                </div>
              )}
            </div>
          </div>
          <div class="sm-col-12  md:col-3 lg-col-4">
            <div>
              <DropDowns
                value={formik.values.departmentCode}
                onChange={formik.handleChange("departmentCode")}
                // error={formik.errors.departmentCode}
                className="dropdown__container"
                label="Department Code"
                options={item2}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
              {formik.touched.departmentCode &&
                formik.errors.departmentCode && (
                  <div style={{ fontSize: 12, color: "red" }}>
                    {formik.errors.departmentCode}
                  </div>
                )}
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="col-3 md:col-3 lg-col-3">
            <DropDowns
              value={formik.values.customerCode}
              onChange={formik.handleChange("customerCode")}
              // error={formik.errors.customerCode}
              className="dropdown__container"
              label="Customer Code"
              options={item3}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            {formik.touched.customerCode && formik.errors.customerCode && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.customerCode}
              </div>
            )}
          </div>
          <div class="col-3 md:col-3 lg-col-3">
            <DropDowns
              value={formik.values.currencyCode}
              onChange={formik.handleChange("currencyCode")}
              // error={formik.errors.currencyCode}
              className="dropdown__container"
              label="Currency Code"
              options={item4}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            {formik.touched.currencyCode && formik.errors.currencyCode && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.currencyCode}
              </div>
            )}
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <DropDowns
              value={formik.values.transactionCode}
              onChange={formik.handleChange("transactionCode")}
              // error={formik.errors.transactionCode}
              className="dropdown__container"
              label="Transaction Code"
              options={item5}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            {formik.touched.transactionCode &&
              formik.errors.transactionCode && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.transactionCode}
                </div>
              )}
          </div>
        </div>
        <div class="grid">
          <div class="col-6 md:col-6 lg-col-6">
            <div>
              <InputField
                value={formik.values.remarks}
                onChange={formik.handleChange("remarks")}
                // error={formik.errors.remarks}
                classNames="field__container"
                label="Remarks (Optional)"
                placeholder={"Enter"}
              />
              {formik.touched.remarks && formik.errors.remarks && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.remarks}
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>

      <div className="next_container">
        <div className="exit_print_buttons">
          <Button
            label="Next"
            className="print"
            onClick={formik.handleSubmit}
            disabled={!formik.isValid}
          />
        </div>
      </div>
    </div>
  );
}

export default BranchAdding;
