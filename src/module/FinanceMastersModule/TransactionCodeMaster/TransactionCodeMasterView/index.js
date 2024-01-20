import React, { useRef } from "react";
import "./index.scss";
import { useFormik } from "formik";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../../assets/icons/SvgDot";
import { useNavigate } from "react-router";
import SvgBackArrow from "../../../../assets/icons/SvgBackArrow";
import { Card } from "primereact/card";
import InputField from "../../../../components/InputField";
import DropDowns from "../../../../components/DropDowns";
import SvgDropdown from "../../../../assets/icons/SvgDropdown";
import { Button } from "primereact/button";
import CustomToast from "../../../../components/Toast";
import TransactionCodeMasterViewTable from "./TransactionCodeMasterViewTable";
import NavBar from "../../../../components/NavBar";
import { useDispatch } from "react-redux";
import { postAddTransaction } from "../store/transactionCodeMasterMiddleware";

const initialValue = {
  TransactionCode: "",
  TransactionName: "",
  TransactionDescription: "",
  TransactionBasis: "",
  MainAccountCode: "",
  MainAccountDescription: "",
  SubAccountCode: "",
  SubAccountDescription: "",
  BranchCode: "",
  BranchDescription: "",
  Department: "",
  DepartmentDescription: "",
};

const BankAccountCode = [
  { label: "Trans00123", value: "Trans00123" },
  { label: "Trans00124", value: "Trans00124" },
];
const MainAccountCode = [
  { label: "Trans00123", value: "Trans00123" },
  { label: "Trans00124", value: "Trans00124" },
];
const BranchCode = [
  { label: "Trans00123", value: "Trans00123" },
  { label: "Trans00124", value: "Trans00124" },
];
const Department = [
  { label: "Depart00123", value: "NY" },
  { label: "Depart001234", value: "RM" },
];
const SubAccountCode = [
  { label: "Trans00123", value: "Trans00123" },
  { label: "Trans00124", value: "Trans00124" },
];

const TransactionCodeMasterView = () => {
  const toastRef = useRef(null);
  const navigate = useNavigate();
  const items = [
    {
      label: "Transaction code",
      url: "/master/finance/transactioncode",
    },
    {
      label: "Add Transaction Code",
      url: "/master/finance/transactioncode/addtransactioncode",
    },
  ];
  const Initiate = { label: "Master" };

  const handleClick = () => {
    // navigate("/master/finance/transactioncode");
    navigate(-1);
  };

  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(postAddTransaction(formik.values));
    toastRef.current.showToast();
    // {
    setTimeout(() => {
      navigate("/master/finance/transactioncode");
    }, 3000);
  };

  const customValidation = (values) => {
    const errors = {};

    if (!values.TransactionCode) {
      errors.TransactionCode = "This field Code is required";
    }
    if (!values.TransactionName) {
      errors.TransactionName = "This field is required";
    }
    if (!values.TransactionDescription) {
      errors.TransactionDescription = "This field is required";
    }
    if (!values.TransactionBasis) {
      errors.TransactionBasis = "This field is required";
    }
    if (!values.MainAccountCode) {
      errors.MainAccountCode = "This field is required";
    }

    // if (!values.MainAccountDescription) {
    //   errors.MainAccountDescription = "This field is required";
    // }
    if (!values.SubAccountCode) {
      errors.SubAccountCode = "This field is required";
    }
    // if (!values.SubAccountDescription) {
    //   errors.SubAccountDescription = "This field is required";
    // }
    if (!values.Department) {
      errors.Department = "This field is required";
    }
    // if (!values. DepartmentDescription) {
    //   errors. DepartmentDescription= "This field is required";
    // }
    if (!values.BranchCode) {
      errors.BranchCode = "This field is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: initialValue,
    validate: customValidation,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <div className="transactioncode__master__view">
      {/* <CustomToast ref={toastRef} message="Petty Cash Initiated Successfully"/> */}
      <CustomToast ref={toastRef} message="Save Successfully" />
      <div className="grid  m-0">
        <div className="col-12 md:col-12 lg:col-12">
          <div
            className="Transaction__Code__Master__title"
            onClick={() => {
              handleClick();
            }}
          >
            <SvgBackArrow />
            Add Transaction Code
          </div>
          <div className="mt-3">
            <BreadCrumb
              model={items}
              home={Initiate}
              className="breadCrums"
              separatorIcon={<SvgDot color={"#000"} />}
            />
          </div>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Card className="mt-4">
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <InputField
                classNames="input__filed"
                label="Transaction Code"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.TransactionCode}
                onChange={formik.handleChange("TransactionCode")}
                error={
                  formik.touched.TransactionCode &&
                  formik.errors.TransactionCode
                }
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Transaction Name"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.TransactionName}
                onChange={formik.handleChange("TransactionName")}
                error={
                  formik.touched.TransactionName &&
                  formik.errors.TransactionName
                }
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Description"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.TransactionDescription}
                onChange={formik.handleChange("TransactionDescription")}
                error={
                  formik.touched.TransactionDescription &&
                  formik.errors.TransactionDescription
                }
              />
            </div>
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Transaction Basis"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.TransactionBasis}
                options={BankAccountCode}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("TransactionBasis", e.value);
                  // handleAccountcode(e.value);
                }}
                optionLabel="label"
                error={
                  formik.touched.TransactionBasis &&
                  formik.errors.TransactionBasis
                }
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Main Account Code"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.MainAccountCode}
                options={MainAccountCode}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("MainAccountCode", e.value);
                  // handleAccountcode(e.value.);
                }}
                optionLabel="label"
                error={
                  formik.touched.MainAccountCode &&
                  formik.errors.MainAccountCode
                }
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Main Account Description"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={
                  formik.values.MainAccountCode
                    ? `MainAccountCode ${formik.values.MainAccountDescription}`
                    : ""
                }
                //value={formik.values.MainAccountDescription}
                onChange={formik.handleChange("MainAccountDescription")}
                // error={
                //   formik.touched.MainAccountDescription &&
                //   formik.errors.MainAccountDescription
                // }
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Sub Account Code"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.SubAccountCode}
                options={SubAccountCode}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("SubAccountCode", e.value);
                  // handleAccountcode(e.value.);
                }}
                optionLabel="label"
                error={
                  formik.touched.SubAccountCode && formik.errors.SubAccountCode
                }
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Sub Account Description"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                // value={formik.values.SubAccountDescription}
                value={
                  formik.values.SubAccountCode
                    ? `MainAccountCode ${formik.values.SubAccountDescription}`
                    : ""
                }
                onChange={formik.handleChange("SubAccountDescription")}
                // error={
                //   formik.touched.SubAccountDescription &&
                //   formik.errors.SubAccountDescription
                // }
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Branch Code"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.BranchCode}
                options={BranchCode}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("BranchCode", e.value);
                  // handleAccountcode(e.value.);
                }}
                optionLabel="label"
                error={formik.touched.BranchCode && formik.errors.BranchCode}
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Branch Description"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                // value={formik.values.BranchDescription}
                value={
                  formik.values.BranchCode
                    ? `BranchCode ${formik.values.BranchDescription}`
                    : ""
                }
                onChange={formik.handleChange("BranchDescription")}
                // error={
                //   formik.touched.BranchDescription &&
                //   formik.errors.BranchDescription
                // }
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Department"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.Department}
                options={Department}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("Department", e.value);
                  // handleAccountcode(e.value.);
                }}
                optionLabel="label"
                error={formik.touched.Department && formik.errors.Department}
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Department Description"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                // value={formik.values.DepartmentDescription}
                value={
                  formik.values.Department
                    ? `BranchCode ${formik.values.DepartmentDescription}`
                    : ""
                }
                onChange={formik.handleChange("DepartmentDescription")}
                // error={
                //   formik.touched.DepartmentDescription &&
                //   formik.errors.DepartmentDescription
                // }
              />
            </div>
          </div>
        </Card>
      </form>
      <TransactionCodeMasterViewTable />
      <div className="btn__container">
        <Button
          label="Save"
          className="add__btn"
          onClick={() => {
            formik.handleSubmit();
          }}
          disabled={!formik.isValid}
        />
      </div>
    </div>
  );
};

export default TransactionCodeMasterView;
