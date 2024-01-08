import React from "react";
import "./index.scss";
import { useFormik } from "formik";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../../assets/icons/SvgDot";
import { useNavigate } from "react-router";
import SvgBackArrow from "../../../../assets/icons/SvgBackArrow";
import DropDowns from "../../../../components/DropDowns";
import SvgDropdown from "../../../../assets/icons/SvgDropdown";
// import CustomToast from "../../../../components/Toast";
import { Button } from "primereact/button";
import InputField from "../../../../components/InputField";
import { Card } from "primereact/card";
import {
  PettyCashCode,
  BankAccountCode,
  SubAccount,
  Transcode,
  Branchcode,
  Departcode,
} from "../../mock";
import { useDispatch, useSelector } from "react-redux";
import { postAddReplenishMiddleware } from "../store/pettyCashReplenishMiddleware";

const initialValue = {
  PettycashCode: "",
  PettycashDescription: "",
  BankCode: "",
  BankAccountName: "",
  SubAccountCode: "",
  SubAccountDescription: "",
  TransactionCode: "",
  Transactiondescription: "",
  BranchCode: "",
  Branchdescription: "",
  DepartmentCode: "",
  Departmentdescription: "",
};

const AddReplenish = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const toastRef = useRef(null);

  const { ReplenishList, loading } = useSelector(
    ({ pettyCashReplenishReducer }) => {
      return {
        loading: pettyCashReplenishReducer?.loading,
        ReplenishList: pettyCashReplenishReducer?.ReplenishList,
      };
    }
  );
  const items = [
    { label: "Petty Cash", url: "/accounts/pettycash/addreplenish" },
    {
      label: "Add Replenish",
      url: "/accounts/pettycash/addreplenish",
    },
  ];
  const Initiate = { label: "Accounts" };

  const handleBack = () => {
    navigate("/accounts/pettycash/replenish");
  };
  const handleSubmit = (value) => {
    const valueWithId = {
      ...value,
      id: ReplenishList?.length + 1,
    };
    dispatch(postAddReplenishMiddleware(valueWithId));
    // toastRef.current.showToast();
    // {
    //   setTimeout(() => {
    navigate("/accounts/pettycash/addreplenishtable");
    //   }, 3000);
    // }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.PettycashDescription) {
      errors.PettycashDescription = "Receipt Number is required";
    }

    if (!values.BankCode) {
      errors.BankCode = "Bank Code is required";
    }

    if (!values.SubAccountCode) {
      errors.SubAccountCode = "Sub Account Code is required";
    }
    if (!values.TransactionCode) {
      errors.TransactionCode = "Transaction Code is required";
    }
    if (!values.BranchCode) {
      errors.BranchCode = "Branch Code is required";
    }
    if (!values.DepartmentCode) {
      errors.DepartmentCode = "Currency is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: initialValue,
    validate,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handlePettyCashDescribtion = (value) => {
    let description = "";
    switch (value.pettycashcode) {
      case "PC0128":
        description = "PC-1";
        break;
      case "PC0129":
        description = "PC-2";
        break;
      case "PC0130":
        description = "PC-3";
        break;
      case "PC0131":
        description = "PC-4";
        break;
      default:
        description = "Unknown";
        break;
    }
    formik.setFieldValue("PettycashDescription", description);
  };

  const handleTrans = (value) => {
    let Trans = "";
    switch (value) {
      case "Trans00322":
        Trans = "Trans-1";
        break;
      case "Trans00123":
        Trans = "Trans-2";
        break;
      case "Trans00923":
        Trans = "Trans-3";
        break;
      case "Trans00123":
        Trans = "Trans-4";
        break;
      default:
        Trans = "Unknown";
        break;
    }
    formik.setFieldValue("Transactiondescription", Trans);
  };
  const handleBankcode = (value) => {
    let Branch = "";
    switch (value) {
      case "1929920128":
        Branch = "Bank-1";
        break;
      case "8299201291":
        Branch = "Bank-1";
        break;
      case "9920010130":
        Branch = "Bank-1";
        break;
      case "1818810131":
        Branch = "Bank-1";
        break;
      default:
        Branch = "Unknown";
        break;
    }
    formik.setFieldValue("BankAccountName", Branch);
  };
  const handleDepart = (value) => {
    let Depart = "";
    switch (value) {
      case "Depart00322":
        Depart = "Depart-1";
        break;
      case "Depart00123":
        Depart = "Depart-2";
        break;
      case "Depart00923":
        Depart = "Depart-3";
        break;
      case "Depart00123":
        Depart = "Depart-4";
        break;
      default:
        Depart = "Unknown";
        break;
    }
    formik.setFieldValue("Departmentdescription", Depart);
  };
  const handleBranch = (value) => {
    let Depart = "";
    switch (value) {
      case "Branch00322":
        Depart = "Branch-1";
        break;
      case "Branch00123":
        Depart = "Branch-2";
        break;
      case "Branch00923":
        Depart = "Branch-3";
        break;
      case "Branch00123":
        Depart = "Branch-4";
        break;
      default:
        Depart = "Unknown";
        break;
    }
    formik.setFieldValue("Branchdescription", Depart);
  };
  const handleSubAccount = (value) => {
    let Depart = "";
    switch (value) {
      case "Sub1929920":
        Depart = "Sub-1";
        break;
      case "Sub8299201":
        Depart = "Sub-2";
        break;
      case "Sub9920010":
        Depart = "Sub-3";
        break;
      case "Sub1818811":
        Depart = "Sub-4";
        break;
      default:
        Depart = "Unknown";
        break;
    }
    formik.setFieldValue("SubAccountDescription", Depart);
  };

  return (
    <div className="add__replenish__container">
      {/* <CustomToast ref={toastRef} /> */}
      <div className="grid  m-0">
        <div className="col-12 md:col-6 lg:col-6">
          <div
            className="pettycash__title"
            onClick={() => {
              handleBack();
            }}
          >
            <SvgBackArrow />
            Add Replenish
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
        <Card className="mt-3">
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Petty cash Code"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.PettycashCode}
                options={PettyCashCode}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("PettycashCode", e.value);
                  handlePettyCashDescribtion(e.value);
                }}
                optionLabel="pettycashcode"
                error={
                  formik.touched.PettycashCode &&
                  formik.errors.PettycashCode
                }
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Petty cash Description"
                //   placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.PettycashDescription}
                onChange={formik.handleChange("PettycashDescription")}
                error={
                  formik.touched.PettycashDescription &&
                  formik.errors.PettycashDescription
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
                  formik.setFieldValue("BankCode", e.value);
                  handleBankcode(e.value.BankAccountCode);
                }}
                optionLabel="BankAccountCode"
                error={formik.touched.BankCode && formik.errors.BankCode}
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Bank Account Name"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.BankAccountName}
                onChange={formik.handleChange("BankAccountName")}
                error={
                  formik.touched.BankAccountName &&
                  formik.errors.BankAccountName
                }
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
                options={SubAccount}
                onChange={(e) => {
                  console.log(e.value);
                  formik.setFieldValue("SubAccountCode", e.value);
                  handleSubAccount(e.value.SubAccount);
                }}
                optionLabel="SubAccount"
                error={
                  formik.touched.SubAccountCode && formik.errors.SubAccountCode
                }
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Sub Account Description"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.SubAccountDescription}
                onChange={formik.handleChange("SubAccountDescription")}
                error={
                  formik.touched.SubAccountDescription &&
                  formik.errors.SubAccountDescription
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
                  formik.setFieldValue("TransactionCode", e.value);
                  handleTrans(e.value.Transcode);
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
                  formik.setFieldValue("BranchCode", e.value);
                  handleBranch(e.value.Branchcode);
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
                  formik.setFieldValue("DepartmentCode", e.value);
                  handleDepart(e.value.Departcode);
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
        </Card>
      </form>
      <div className="grid  mt-4">
        <div className="col-12 md:col-12 lg:col-12">
          <div className="btn__container">
            <Button
              label="Next"
              className="add__btn"
              onClick={() => {
                formik.handleSubmit();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReplenish;
