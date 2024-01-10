import React, { useState, useRef } from "react";
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
import {
  PettyCashCode,
  BankAccountCode,
  SubAccount,
  CurrencyType,
  Transcode,
  Branchcode,
  Departcode,
} from "../../mock";
import {
  postInitiateMiddleware,
} from "../store/pettyCashInitiateMiddleware";
import { useDispatch, useSelector } from "react-redux";

const initialValue = {
  PettyCashCode: "",
  PettyCashdescription: "",
  PettyCashSize: "",
  BankAccountNumber: "",
  SubAccountCode: "",
  Currency: "",
  Currencydescription: "",
  TransactionCode: "",
  Transactiondescription: "",
  BranchCode: "",
  Branchdescription: "",
  DepartmentCode: "",
  Departmentdescription: "",
  AvailableCash: "",
  TransactionLimit: "",
  MinimumCashbox: "",
};

const InitiateForm = () => {
  const toastRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};

    if (!values.PettyCashCode) {
      errors.PettyCashCode = "Petty Cash Code is required";
    }

    if (!values.BankAccountNumber) {
      errors.BankAccountNumber = "Bank Account Number is required";
    }

    if (!values.SubAccountCode) {
      errors.SubAccountCode = "Sub Account Code is required";
    }

    if (!values.Currency) {
      errors.Currency = "Currency is required";
    }

    if (!values.TransactionCode) {
      errors.TransactionCode = "Transaction Code is required";
    }

    if (!values.BranchCode) {
      errors.BranchCode = "Branch Code is required";
    }

    if (!values.DepartmentCode) {
      errors.DepartmentCode = "Department Code is required";
    }
    return errors;
  };

  const { InitiateList, loading } = useSelector(
    ({ pettyCashInitiateReducer }) => {
      return {
        loading: pettyCashInitiateReducer?.loading,
        InitiateList: pettyCashInitiateReducer?.InitiateList,
      };
    }
  );

  const handleSubmit = (value) => {
    const valueWithId = {
      ...value,
      id: InitiateList?.length + 1,
    };
    dispatch(postInitiateMiddleware(valueWithId));
    toastRef.current.showToast();
    setTimeout(() => {
      navigate("/accounts/pettycash/pettycashcodeinitiate");
    }, 2000);
  };
  const items = [
    { label: "Petty Cash", command: () => navigate("/accounts/pettycash/pettycashcodeinitiate") },
    {
      label: "Petty Cash Code Initiate",
      command: () => navigate("/accounts/pettycash/pettycashcodeinitiate"),
    },
    {
      label: "Initiate",
      to: "/accounts/pettycash/pettycashcodeinitiate/initiate",
    },
  ];
  const Initiate = { label: "Accounts" };

  const handleClick = () => {
    navigate("/accounts/pettycash/pettycashcodeinitiate");
  };

  const formik = useFormik({
    initialValues: initialValue,
    validate,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handlePettyCashDescribtion = (value) => {
    console.log("first",value.pettycashcode)
    let description = "";
    let pettycashsize = "";
    switch (value.pettycashcode) {
      case "PC001":
        description = "PC-1";
        break;
      case "PC002":
        description = "PC-2";
        break;
      case "PC003":
        description = "PC-3";
        break;
      case "PC004":
        description = "PC-4";
        break;
      default:
        description = "Unknown";
        break;
    }
    switch (value.pettycashcode) {
      case "PC001":
        pettycashsize = "1000";
        break;
      case "PC002":
        pettycashsize = "2000";
        break;
      case "PC003":
        pettycashsize = "3000";
        break;
      case "PC004":
        pettycashsize = "4000";
        break;
      default:
        pettycashsize = "Unknown";
        break;
    }
    formik.setFieldValue("PettyCashSize", pettycashsize);
    formik.setFieldValue("PettyCashdescription", description);
  };
  const handlecurrency = (value) => {
    let currency = "";
    switch (value.CurrencyType) {
      case "INR":
        currency = "Indian Currency";
        break;
      case "US":
        currency = "United states Currency";
        break;
      case "USD":
        currency = "United States Currency";
        break;
      case "AD":
        currency = "Andorra Currency";
        break;
      default:
        currency = "Unknown";
        break;
    }
    formik.setFieldValue("Currencydescription", currency);
  };

  const handleTrans = (value) => {
    let Trans = "";
    switch (value.Transcode) {
      case "PRM":
        Trans = "Trans-1";
        break;
      case "COMM":
        Trans = "Trans-2";
        break;
      case "REMT":
        Trans = "Trans-3";
        break;
      // case "Trans00123":
      //   Trans = "Trans-4";
      //   break;
      default:
        Trans = "Unknown";
        break;
    }
    formik.setFieldValue("Transactiondescription", Trans);
  };
  const handleBranch = (value) => {
    let Branch = "";
    switch (value) {
      case "PHP001":
        Branch = "Branch-1";
        break;
      case "PHP002":
        Branch = "Branch-2";
        break;
      case "PHP003":
        Branch = "Branch-3";
        break;
      case "PHP004":
        Branch = "Branch-4";
        break;
      default:
        Branch = "Unknown";
        break;
    }
    formik.setFieldValue("Branchdescription", Branch);
  };
  const handleDepart = (value) => {
    let Depart = "";
    switch (value) {
      case "FIN":
        Depart = "Depart-1";
        break;
      case "MKT":
        Depart = "Depart-2";
        break;
      case "IT":
        Depart = "Depart-3";
        break;
      case "SLS":
        Depart = "Depart-4";
        break;
      default:
        Depart = "Unknown";
        break;
    }
    formik.setFieldValue("Departmentdescription", Depart);
  };
  const handleAccountcode = (value) => {
    let Availablecash = "";
    let translimit = "";
    let maxlimit = "";
    switch (value) {
      case "Bk001":
        Availablecash = "10,000";
        break;
      case "Bk002":
        Availablecash = "20,000";
        break;
      case "Bk003":
        Availablecash = "30,000";
        break;
      // case "1818810131":
      //   Availablecash = "40,000";
      //   break;
      default:
        Availablecash = "Unknown";
        break;
    }
    switch (value) {
      case "Bk001":
        maxlimit = "1000";
        break;
      case "Bk002":
        maxlimit = "2000";
        break;
      case "Bk003":
        maxlimit = "3000";
        break;
      // case "1818810131":
      //   maxlimit = "4000";
      //   break;
      default:
        maxlimit = "Unknown";
        break;
    }
    switch (value) {
      case "Bk001":
        translimit = "10,000";
        break;
      case "Bk002":
        translimit = "20,000";
        break;
      case "Bk003":
        translimit = "30,000";
        break;
      // case "1818810131":
      //   translimit = "40,000";
      //   break;
      default:
        translimit = "Unknown";
        break;
    }
    formik.setFieldValue("AvailableCash", Availablecash);
    formik.setFieldValue("TransactionLimit", translimit);
    formik.setFieldValue("MinimumCashbox", maxlimit);
  };
  return (
    <div className="pettycash__form">
      <CustomToast ref={toastRef} message="Petty Cash Initiated Successfully" />
      <div className="grid  m-0">
        <div className="col-12 md:col-6 lg:col-6">
          <div
            className="pettycash__title"
            onClick={() => {
              handleClick();
            }}
          >
            <SvgBackArrow />
            Initiate
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
              <DropDowns
                className="input__filed"
                label="Petty Cash Code"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.PettyCashCode}
                options={PettyCashCode}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("PettyCashCode", e.value).then(()=>{
                    handlePettyCashDescribtion(e.value);
                  })
                 
                }}
                optionLabel="pettycashcode"
                error={
                  formik.touched.PettyCashCode && formik.errors.PettyCashCode
                }
              />
              {/* {formik.touched.PettyCashCode &&
              formik.errors.PettyCashCode && (
                <div style={{ fontSize: 8, color: "red",marginTop:4 }}>
                  {formik.errors.PettyCashCode}
                </div>
              )} */}

            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Petty Cash Description"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.PettyCashdescription}
                onChange={formik.handleChange("PettyCashdescription")}
              // error={
              //   formik.touched.PettyCashdescription &&
              //   formik.errors.PettyCashdescription
              // }
              />
            </div>
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <InputField
                classNames="input__filed"
                label="Petty Cash Size"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.PettyCashSize}
                onChange={formik.handleChange("PettyCashSize")}
                error={
                  formik.touched.PettyCashSize && formik.errors.PettyCashSize
                }
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Bank Account Number"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.BankAccountNumber}
                options={BankAccountCode}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("BankAccountNumber", e.value).then(()=>{
                    handleAccountcode(e.value.BankAccountCode);
                  })
                 
                }}
                optionLabel="BankAccountCode"
                error={
                  formik.touched.BankAccountNumber &&
                  formik.errors.BankAccountNumber
                }
              />
            </div>
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
                options={SubAccount}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("SubAccountCode", e.value);
                }}
                optionLabel="SubAccount"
                error={
                  formik.touched.SubAccountCode && formik.errors.SubAccountCode
                }
              />
            </div>
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Currency"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.Currency}
                options={CurrencyType}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("Currency", e.value).then(()=>{
                    handlecurrency(e.value);
                  })
                 
                }}
                optionLabel="CurrencyType"
                error={formik.touched.Currency && formik.errors.Currency}
              />
            </div>
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <InputField
                classNames="input__filed"
                label="Currency Description"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.Currencydescription}
                onChange={formik.handleChange("Currencydescription")}
                error={
                  formik.touched.Currencydescription &&
                  formik.errors.Currencydescription
                }
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Transaction Code"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.TransactionCode}
                options={Transcode}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("TransactionCode", e.value).then(()=>{
                    handleTrans(e.value);
                  })
                  
                }}
                optionLabel="Transcode"
                error={
                  formik.touched.TransactionCode &&
                  formik.errors.TransactionCode
                }
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Transaction Description"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.Transactiondescription}
                onChange={formik.handleChange("Transactiondescription")}
                error={
                  formik.touched.Transactiondescription &&
                  formik.errors.Transactiondescription
                }
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
                options={Branchcode}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("BranchCode", e.value).then(()=>{
                    handleBranch(e.value.Branchcode);
                  })
                 
                }}
                optionLabel="Branchcode"
                error={formik.touched.BranchCode && formik.errors.BranchCode}
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Branch Description"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.Branchdescription}
                onChange={formik.handleChange("Branchdescription")}
                error={
                  formik.touched.Branchdescription &&
                  formik.errors.Branchdescription
                }
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Department Code"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.DepartmentCode}
                options={Departcode}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("DepartmentCode", e.value).then(()=>{
                    handleDepart(e.value.Departcode);
                  })
                  
                }}
                optionLabel="Departcode"
                error={
                  formik.touched.DepartmentCode && formik.errors.DepartmentCode
                }
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Department Description"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.Departmentdescription}
                onChange={formik.handleChange("Departmentdescription")}
                error={
                  formik.touched.Departmentdescription &&
                  formik.errors.Departmentdescription
                }
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <InputField
                classNames="input__filed"
                label="Available Cash"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.AvailableCash}
                onChange={formik.handleChange("AvailableCash")}
                error={
                  formik.touched.AvailableCash && formik.errors.AvailableCash
                }
              />
            </div>
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <InputField
                classNames="input__filed"
                label="Transaction Limit"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.TransactionLimit}
                onChange={formik.handleChange("TransactionLimit")}
                error={
                  formik.touched.TransactionLimit &&
                  formik.errors.TransactionLimit
                }
              />
            </div>
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <InputField
                classNames="input__filed"
                label="Minimum Cash box"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.MinimumCashbox}
                onChange={formik.handleChange("MinimumCashbox")}
                error={
                  formik.touched.MinimumCashbox && formik.errors.MinimumCashbox
                }
              />
            </div>
          </div>
        </Card>
      </form>
      <div className="grid  mt-4">
        <div className="col-12 md:col-12 lg:col-12">
          <div className="btn__container">
            <Button
              label="Approve"
              className="add__btn"
              onClick={() => {
                formik.handleSubmit();
              }}
              disabled={!formik.isValid}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitiateForm;
