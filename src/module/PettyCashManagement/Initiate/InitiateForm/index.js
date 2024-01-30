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
  Departcode, TransactionCode
} from "../../mock";
import {
  postInitiateMiddleware,
} from "../store/pettyCashInitiateMiddleware";
import { useDispatch, useSelector } from "react-redux";
import { Calendar } from "primereact/calendar";
import LabelWrapper from "../../../../components/LabelWrapper";

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
  MaxLimit: "",
  MinimumCashbox: "",
  TransactionDate: new Date(),
  TransactionCode: "",
  TransactionNumber: "",
  mainaccountcode: "",
  BankCode: "",
  MainAccountCode: "",
  BankAccountCode:""
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

    if (!values.BankCode) {
      errors.BankCode = "Bank Code is required";
    }

    if (!values.BankAccountCode) {
      errors.BankAccountCode = "Bank Account Code is required";
    }

    if (!values.MainAccountCode) {
      errors.MainAccountCode = "Currency is required";
    }

    // if (!values.TransactionCode) {
    //   errors.TransactionCode = "Transaction Code is required";
    // }

    // if (!values.BranchCode) {
    //   errors.BranchCode = "Branch Code is required";
    // }

    // if (!values.DepartmentCode) {
    //   errors.DepartmentCode = "Department Code is required";
    // }
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
    console.log("first",valueWithId)
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
    console.log("first", value.pettycashcode)
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
    formik.setFieldValue("MaxLimit", translimit);
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


      <Card className="mt-4">


        <div class="grid" style={{ flexDirection: "row-reverse" }}>
          {/* <div class="col-12 md:col-6 lg:col-3">
        <div class="text-center p-3 border-round-sm bg-primary font-bold">col-12 md:col-6 lg:col-3</div>
    </div> */}
          <div class="col-12 md:col-6 lg:col-3">
            <InputField
              disabled={true}
              classNames="field__container"
              label="Transaction Number"
              // placeholder={"Enter"}
              // value={formik.values.TransactionDescription}
              value={
                formik.values.TransactionNumber

              }
              // value={formik.values.Transactioncode}

              onChange={formik.handleChange("TransactionNumber")}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <DropDowns
              className="dropdown__container"
              label="Transaction Code"
              // value={departmentcode}
              // onChange={(e) => setDepartmentCode(e.value)}
              value={formik.values.TransactionCode}
              onChange={(e) =>
                formik.setFieldValue("TransactionCode", e.value)
              }
              options={TransactionCode}
              optionLabel="Branchcode"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />

          </div>
          <div className="calender__container col-12 md:col-3 lg-col-3 ">
            <LabelWrapper className="calenderlable__container">
              Transaction Date
            </LabelWrapper>
            <Calendar
              showIcon
              placeholder="Select"
              className="calendar_container"
              value={formik.values.TransactionDate}

              onChange={(e) => {
                formik.setFieldValue("TransactionDate", e.target.value);
              }}
              dateFormat="yy-mm-dd"
              error={formik.errors.TransactionDate}

            />
          </div>
        </div>


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
                formik.setFieldValue("PettyCashCode", e.value).then(() => {
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
              label="Bank Code"
              placeholder="Select"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              dropdownIcon={<SvgDropdown color={"#000"} />}
              value={formik.values.BankCode}
              options={BankAccountCode}
              onChange={(e) => {
                console.log(e.value);
                formik.setFieldValue("BankCode", e.value).then(() => {
                  handleAccountcode(e.value.BankCode);
                })

              }}
              optionLabel="BankAccountCode"
              error={
                formik.touched.BankCode &&
                formik.errors.BankCode
              }
            />
          </div>
          <div className="col-12 md:col-3 lg-col-3 input__view">
            <DropDowns
              className="input__filed"
              label="Bank Account Code"
              placeholder="Select"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              dropdownIcon={<SvgDropdown color={"#000"} />}
              value={formik.values.BankAccountCode}
              options={SubAccount}
              onChange={(e) => {
                console.log(e.value);
                formik.setFieldValue("BankAccountCode", e.value);
              }}
              optionLabel="SubAccount"
              error={
                formik.touched.BankAccountCode && formik.errors.BankAccountCode
              }
            />
          </div>
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
              options={CurrencyType}
              onChange={(e) => {
                console.log(e.value);
                formik.setFieldValue("MainAccountCode", e.value).then(() => {
                  handlecurrency(e.value);
                })

              }}
              optionLabel="CurrencyType"
              error={formik.touched.MainAccountCode && formik.errors.MainAccountCode}
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
        </div>
        <div className="grid mt-1">
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
                formik.setFieldValue("Currency", e.value).then(() => {
                  handlecurrency(e.value);
                })

              }}
              optionLabel="CurrencyType"
              error={formik.touched.Currency && formik.errors.Currency}
            />
          </div>
          <div className="col-12 md:col-6 lg-col-6 input__view">
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
                formik.setFieldValue("BranchCode", e.value).then(() => {
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
                formik.setFieldValue("DepartmentCode", e.value).then(() => {
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
              label="Max Limit"
              // placeholder="Enter"
              disabled={true}
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              value={formik.values.MaxLimit}
              onChange={formik.handleChange("MaxLimit")}
              error={
                formik.touched.MaxLimit &&
                formik.errors.MaxLimit
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
