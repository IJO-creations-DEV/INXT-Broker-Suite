import React, { useState, useEffect } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import InputField from "../../../components/InputField";
import SvgDot from "../../../assets/icons/SvgDot";
import { Button } from "primereact/button";
import NavBar from "../../../components/NavBar";
import { DataTable } from "primereact/datatable";
import { useNavigate } from "react-router-dom";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import SvgBack from "../../../assets/icons/SvgBack";
import SvgDropdown from "../../../assets/icons/SvgDropdown";
import DropDowns from "../../../components/DropDowns";
import { useFormik } from "formik";

function PolicyReceipts() {
  const [selectedProducts, setSelectedProducts] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  const initialValue = {
    totalPayment: 1600,
    bankcode: "",
    bankName: "Money Bank",
    bankAccount: "",
    bankAccountName: "Business Account",
    paymentType: "",
    cardNumber: "1234 5678 9874 5632",
  };
  const validate = (values) => {
    console.log(values, "sss");
    const errors = {};

    if (!values.bankcode) {
      errors.bankcode = "Bank code is required";
    }
    if (!values.bankAccount) {
      errors.bankAccount = "Account number is required";
    }
    if (!values.paymentType) {
      errors.paymentType = "Payment type is required";
    }

    return errors;
  };
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const handleSubmit = () => {
    const formErrors = validate(formik.values);
    setErrors(formErrors);
    console.log(formErrors, "iiiii");
    
  };

  const formik = useFormik({
    initialValues: initialValue,
    validate,
    onSubmit: handleSubmit,
  });
  const items = [
    { label: "Receipts", url: "/accounts/receipts" },
    { label: "Add Receipts", url: "/accounts/receipts/addreceipts" },
  ];

  const home = { label: "Accounts " };
  const template2 = {
    layout:
      "RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",
    RowsPerPageDropdown: (options) => {
      const dropdownOptions = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 120, value: 120 },
      ];

      return (
        <React.Fragment>
          <span
            className="mx-1"
            style={{ color: "var(--text-color)", userSelect: "none" }}
          >
            Row count :{" "}
          </span>
          <Dropdown
            value={options.value}
            className="pagedropdown_container"
            options={dropdownOptions}
            onChange={options.onChange}
          />
        </React.Fragment>
      );
    },
  };
  const data = [
    { name: "Bank00123", code: "B1" },
    { name: "Bank00256", code: "B2" },
    { name: "Bank00134", code: "B3" },
  ];
  const data1 = [
    { name: "678945678902", code: "01" },
    { name: "678934562345", code: "02" },
    { name: "987645345672", code: "03" },
  ];
  const data2 = [
    { name: "Card", code: "C1" },
    { name: "Card1", code: "C2" },
    { name: "Card2", code: "C3" },
  ];

  const headerStyle = {
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    color: "#000",
    border: "none",
    textalign: "center",
  };

  return (
    <div className="overall__payment_details_container">
      <NavBar />
      <SvgBack />
      <label className="label_header">Payment Details</label>
      <BreadCrumb
        model={items}
        home={home}
        className="breadcrumbs_container"
        separatorIcon={<SvgDot color={"#000"} />}
      />

      <Card>
        <div class="grid">
          <div class="col-4 md:col-4 lg-col-4">
            <div>
              <InputField
                value={formik.values.totalPayment}
                onChange={formik.handleChange("totalPayment")}
                error={formik.errors.totalPayment}
                classNames="field__policy "
                label="Total Payment"
                
              />
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="col-4 md:col-4 lg-col-4">
            <div>
              <DropDowns
                value={formik.values.bankcode}
                onChange={formik.handleChange("bankcode")}
                error={formik.errors.bankcode}
                className="dropdown__container"
                label="Bank code"
                options={data}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
          </div>
          <div class="col-4 md:col-4 lg-col-4">
            <div>
              <InputField
                value={formik.values.bankName}
                onChange={formik.handleChange("bankName")}
                error={formik.errors.bankName}
                classNames="field__policy "
                label="Bank Name"
                // value={"Money bank"}
              />
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col-4 md:col-4 lg-col-4">
            <div>
              <DropDowns
                value={formik.values.bankAccount}
                onChange={formik.handleChange("bankAccount")}
                error={formik.errors.bankAccount}
                className="dropdown__container"
                label="Bank Account"
                options={data1}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
          </div>
          <div class="col-4 md:col-4 lg-col-4">
            <div>
              <InputField
                value={formik.values.bankAccountName}
                onChange={formik.handleChange("bankAccountName")}
                error={formik.errors.bankAccountName}
                classNames="field__policy"
                label="Bank Account Name"
                // value={"Business Account"}
              />
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col-4 md:col-4 lg-col-4">
            <div>
              <DropDowns
                value={formik.values.paymentType}
                onChange={formik.handleChange("paymentType")}
                error={formik.errors.paymentType}
                className="dropdown__container"
                label="Payment Type"
                options={data2}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
          </div>
          <div class="col-4 md:col-4 lg-col-4">
            <div>
              <InputField
                value={formik.values.cardNumber}
                onChange={formik.handleChange("cardNumber")}
                error={formik.errors.cardNumber}
                classNames="field__policy "
                label="Card Number"
                // value={"1234 5678 9874 5632"}
              />
            </div>
          </div>
        </div>
      </Card>
      <div className="exit_print_buttons">
        <Button
          label={selectedProducts?.status === "Approved" ? "Print" : "Approve"}
          className="print"
          onClick={() => {
            formik.handleSubmit();
          }}
          disabled={!formik.isValid}
        />
      </div>
    </div>
  );
}

export default PolicyReceipts;
