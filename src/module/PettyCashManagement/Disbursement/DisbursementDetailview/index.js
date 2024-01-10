import React, { useState, useRef } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../../assets/icons/SvgDot";
import { useNavigate } from "react-router";
import SvgBackArrow from "../../../../assets/icons/SvgBackArrow";
import DropDowns from "../../../../components/DropDowns";
import SvgDropdown from "../../../../assets/icons/SvgDropdown";
// import CustomToast from "../../../../components/Toast";
import InputField from "../../../../components/InputField";
import { Card } from "primereact/card";
import DisbursementDetailviewTable from "./DisbursementDetailviewTable";
import { useSelector } from "react-redux";
import { useFormik } from "formik";

// const initialValue = {
//   PettyCashCode: "",
//   TransactionCode: "",
//   BranchCode: "",
//   DepartmentCode: "",
// };

const DisbursementDetailview = () => {
  const navigate = useNavigate();
  // const toastRef = useRef(null);
  const { ViewDisbursment, loading } = useSelector(
    ({ pettyCashDisbursementReducers }) => {
      return {
        loading: pettyCashDisbursementReducers?.loading,
        ViewDisbursment: pettyCashDisbursementReducers?.ViewDisbursment,
      };
    }
  );

  console.log(ViewDisbursment, "ViewDisbursment");

  const items = [
    { label: "Petty Cash", command: () => navigate("/accounts/pettycash/disbursement") },
    {
      label: "Disbursement Detail view",
      to: "/accounts/pettycash/disbursementdetailview",
    },
  ];
  const Initiate = { label: "Accounts" };

  const handleBack = () => {
    navigate("/accounts/pettycash/disbursement");
  };

  // const formik = useFormik({
  //   initialValues: initialValue,
  // });

  const PettycashCodetOptions = [
    {
      label: ViewDisbursment?.PettycashCode,
      value: ViewDisbursment?.PettycashCode,
    },
  ];

  const TransactioncodeOptions = [
    {
      label: ViewDisbursment?.Transactioncode,
      value: ViewDisbursment?.Transactioncode,
    },
  ];

  const BranchcodeOptions = [
    {
      label: ViewDisbursment?.Branchcode,
      value: ViewDisbursment?.Branchcode,
    },
  ];

  const DepartmentcodeOptions = [
    {
      label: ViewDisbursment?.Departmentcode,
      value: ViewDisbursment?.Departmentcode,
    },
  ];

  return (
    <div className="add__disbursement__view__container">
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
            Disbursement Detail view
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
      <Card className="mt-3">
        <div className="grid mt-1">
          <div className="col-12 md:col-3 lg-col-3 input__view">
            <DropDowns
              className="input__filed"
              label="Petty Cash Code"
              placeholder="Select"
              textColor={"#111927"}
              textSize={"16"}
              disabled={true}
              textWeight={400}
              dropdownIcon={<SvgDropdown color={"#000"} />}
              optionValue="value"
              optionLabel="label"
              value={ViewDisbursment?.PettycashCode}
              options={PettycashCodetOptions}
            />
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
              value={"PettyCashDescription"}
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
              disabled={true}
              textSize={"16"}
              textWeight={400}
              dropdownIcon={<SvgDropdown color={"#000"} />}
              optionValue="value"
              optionLabel="label"
              value={ViewDisbursment?.Transactioncode}
              options={TransactioncodeOptions}
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
              value={"TransactionDescription"}
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
              disabled={true}
              textSize={"16"}
              textWeight={400}
              dropdownIcon={<SvgDropdown color={"#000"} />}
              optionValue="value"
              optionLabel="label"
              value={ViewDisbursment?.Branchcode}
              options={BranchcodeOptions}
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
              value={"BranchDescription"}
            />
          </div>
        </div>
        <div className="grid mt-1">
          <div className="col-12 md:col-3 lg-col-3 input__view">
            <DropDowns
              className="input__filed"
              label="Department Code"
              placeholder="Select"
              disabled={true}
              textColor={"#111927"}
              textSize={"16"}
              textWeight={400}
              dropdownIcon={<SvgDropdown color={"#000"} />}
              optionValue="value"
              optionLabel="label"
              value={ViewDisbursment?.Departmentcode}
              options={DepartmentcodeOptions}
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
              value={"DepartmentDescription"}
            />
          </div>
        </div>
      </Card>
      <Card className="mt-3">
        <DisbursementDetailviewTable />
      </Card>
    </div>
  );
};

export default DisbursementDetailview;
