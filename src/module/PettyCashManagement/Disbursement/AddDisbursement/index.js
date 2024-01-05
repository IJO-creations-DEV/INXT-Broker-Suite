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
  Transcode,
  Branchcode,
  Departcode,
} from "../../mock";
import { useDispatch, useSelector } from "react-redux";
import { postAddDisbursmentMiddleware } from "../store/pettyCashDisbursementMiddleware";


const initialValue = {
  PettyCashCode: "",
  TransactionCode: "",
  BranchCode: "",
  DepartmentCode: "",
};

const AddDisbursement = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const toastRef = useRef(null);

  const { AddDisbursment, loading } = useSelector(({ pettyCashDisbursementReducers }) => {
    return {
      loading: pettyCashDisbursementReducers?.loading,
      AddDisbursment: pettyCashDisbursementReducers?.AddDisbursment,
    };
  });

  const items = [
    { label: "Petty Cash", url: "/accounts/pettycash/adddisbursement" },
    {
      label: "Add Disbursement",
      url: "/accounts/pettycash/adddisbursement",
    },
  ];
  const Initiate = { label: "Accounts" };

  const handleBack = () => {
    navigate("/accounts/pettycash/disbursement");
  };
  const handleSubmit = (value) => {

    const valueWithId = {
      ...value,
      id: AddDisbursment?.length + 1,
    };
    dispatch(postAddDisbursmentMiddleware(valueWithId));
    // toastRef.current.showToast();
    // {
    //   setTimeout(() => {
        navigate("/accounts/pettycash/adddisbursementtable");
    //   }, 3000);
    // }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.PettyCashCode) {
      errors.PettyCashCode = "Petty Cash Code is required";
    }

    if (!values.TransactionCode) {
      errors.TransactionCode = "Bank Account Number is required";
    }

    if (!values.BranchCode) {
      errors.BranchCode = "Sub Account Code is required";
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
    formik.setFieldValue("PettyCashdescription", description);
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
  const handleBranch = (value) => {
    let Branch = "";
    switch (value) {
      case "Branch00322":
        Branch = "Branch-1";
        break;
      case "Branch00123":
        Branch = "Branch-2";
        break;
      case "Branch00923":
        Branch = "Branch-3";
        break;
      case "Branch00123":
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

  return (
    <div className="add__disbursement__container">
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
            Add Disbursement
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
                formik.setFieldValue("PettyCashCode", e.value);
                handlePettyCashDescribtion(e.value)
              }}
              optionLabel="pettycashcode"
              error={
                formik.touched.PettyCashCode && formik.errors.PettyCashCode
              }
            />
          </div>
          <div className="col-12 md:col-6 lg-col-6 input__view">
            <InputField
              classNames="input__filed"
              label="Petty Cash description"
              // placeholder="Enter"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              disabled={true}
              value={formik.values.PettyCashdescription}
              onChange={formik.handleChange("PettyCashdescription")}
              error={
                formik.touched.PettyCashdescription &&
                formik.errors.PettyCashdescription
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
                handleTrans(e.value.Transcode)
              }}
              optionLabel="Transcode"
              error={
                formik.touched.TransactionCode && formik.errors.TransactionCode
              }
            />
          </div>
          <div className="col-12 md:col-6 lg-col-6 input__view">
            <InputField
              classNames="input__filed"
              label="Transaction description"
              // placeholder="Enter"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              disabled={true}
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
                handleBranch(e.value.Branchcode)
              }}
              optionLabel="Branchcode"
              error={
                formik.touched.BranchCode && formik.errors.BranchCode
              }
            />
          </div>
          <div className="col-12 md:col-6 lg-col-6 input__view">
            <InputField
              classNames="input__filed"
              label="Branch description"
              // placeholder="Enter"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              disabled={true}
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
                handleDepart(e.value.Departcode)
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
              label="Department description"
              // placeholder="Enter"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              disabled={true}
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

export default AddDisbursement;
