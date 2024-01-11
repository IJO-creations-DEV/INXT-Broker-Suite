import React, { useState, useEffect, useRef } from "react";
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
import CustomToast from "../../../components/Toast";
import { useSelector } from "react-redux";


function PolicyReceipts() {
  const toastRef = useRef(null);
  const [selectedProducts, setSelectedProducts] = useState(false);
  const [products, setProducts] = useState("Approve");
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  const { paymentDetails, loading, total } = useSelector(({ receiptsTableReducers }) => {
    return {
      loading: receiptsTableReducers?.loading,
      paymentDetails: receiptsTableReducers?.paymentDetails,
      total: receiptsTableReducers

    };
  });
  console.log(paymentDetails[0].bankAccount, "paymentDetails")
  const initialValue = {
    totalPayment: 1600,
    bankcode: "",
    bankName: "Money Bank",
    bankAccount: "",
    bankAccountName: "Business Account",
    paymentType: "",
    cardNumber: "",
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
    toastRef.current.showToast();
    // navigate('')
    setProducts("Print")
    if (products == "Print") {
      navigate("/accounts/receipts")
    }
  };
  // const handleSubmit2 = () => {
  //   const formErrors = validate(formik.values);
  //   setErrors(formErrors);
  //   console.log(formErrors, "iiiii");
  //   toastRef.current.showToast();
  //   // navigate('')
  //   // setProducts("Print")
  // };

  const formik = useFormik({
    initialValues: initialValue,
    validate,
    // onSubmit: handleSubmit,handleSubmit2
    onSubmit: () => {
      handleSubmit();
      //  handleSubmit2()
    }
  });
  const items = [
    { label: "Receipts", command: () => navigate("/accounts/receipts") },
    { label: "Add Receipts", to: "/accounts/receipts/addreceipts" },
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
  // const dataa= [
  //   { label:paymentDetails[0].bankcode, value:paymentDetails[0].bankcode},

  // ];
  // const data1 = [
  //   { label: paymentDetails[0].bankAccount, value:paymentDetails[0].bankAccount},

  // ];
  // const data2 = [
  //   { label:paymentDetails[0].paymentType, value: paymentDetails[0].paymentType },

  // ];
  const dataa = [
    { label: "bank123", value: "bank123" },
    { label: "bank7844", value: "bank7844" },

  ];
  const data1 = [
    { label: "ICIC", value: "ICIC" },
    { label: "SBI", value: "SBI" },

  ];
  const data2 = [
    { label: "Credit Card", value: "Credit Card" },
    { label: "Debit Card", value: "Debit Card" },

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


      <CustomToast ref={toastRef} message={products == "Approve" ? "Approved Successfully" : "Printed Successfully"} />
      <span onClick={() => navigate(-1)}>
        <SvgBack />
      </span>
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
                value={paymentDetails[0].totalPayment}
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
                // error={formik.errors.bankcode}
                className="dropdown__container"
                label="Bank code"
                options={dataa}
                optionLabel="value"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
              {formik.touched.bankcode && formik.errors.bankcode && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.bankcode}
                </div>
              )}
            </div>
          </div>
          <div class="col-4 md:col-4 lg-col-4">
            <div>
              <InputField
                value={
                  formik.values.bankcode
                    ? `1234${formik.values.bankcode}`
                    : ""
                }
                // value={paymentDetails[0].bankcode && paymentDetails[0].bankName}
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
                // error={formik.errors.bankAccount}
                className="dropdown__container"
                label="Bank Account"
                options={data1}
                optionLabel="value"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
              {formik.touched.bankAccount && formik.errors.bankAccount && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.bankAccount}
                </div>
              )}
            </div>
          </div>
          <div class="col-4 md:col-4 lg-col-4">
            <div>
              <InputField
                value={
                  formik.values.bankAccount
                    ? `654${formik.values.bankAccount}`
                    : ""
                }
                // value={paymentDetails[0].bankAccount && paymentDetails[0].bankAccountName}
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
                // error={formik.errors.paymentType}
                className="dropdown__container"
                label="Payment Type"
                options={data2}
                optionLabel="value"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
              {formik.touched.paymentType && formik.errors.paymentType && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.paymentType}
                </div>
              )}
            </div>
          </div>
          <div class="col-4 md:col-4 lg-col-4">
            <div>
              <InputField
                // value={paymentDetails[0].paymentType && paymentDetails[0].cardNumber}
                value={
                  formik.values.cardNumber
                }
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
      {/* <div className="exit_print_buttons">
        <Button
          label={selectedProducts?.status === "Approved" ? "Print" : "Approve"}
          className="print"
          onClick={() => {
            formik.handleSubmit();
          }}
          disabled={!formik.isValid}
        />
      </div> */}

      <div className="exit_print_buttons">
        {products == "Print" ? (<Button
          // label={selectedProducts?.status === "Approved" ? "Print" : "Approve"}
          label="Print"
          className="print"
          onClick={() => {
            formik.handleSubmit();
          }}
          disabled={!formik.isValid}
        />) : <Button
          // label={selectedProducts?.status === "Approved" ? "Print" : "Approve"}
          label="Approve"
          className="print"
          onClick={() => {
            formik.handleSubmit();
          }}
          disabled={!formik.isValid}
        />
        }

      </div>

    </div>
  );
}

export default PolicyReceipts;
