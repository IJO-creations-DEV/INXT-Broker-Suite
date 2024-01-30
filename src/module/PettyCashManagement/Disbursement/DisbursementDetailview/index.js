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
    {
      label: "Petty Cash",
      command: () => navigate("/accounts/pettycash/disbursement"),
    },
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
          <div className="col-12 md:col-6 lg:col-3 xl:col-3 input__view">
            <InputField
              classNames="input__filed"
              label="Date"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              value="24/01/2024"
            />
          </div>
          <div className="col-12 md:col-6 lg:col-3 xl:col-3 input__view">
            <InputField
              classNames="input__filed"
              label="Transaction Number"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              value=""
            />
          </div>

          <div className="col-12 md:col-3 lg:col-3 input__view">
            <DropDowns
              className="input__filed"
              label="Petty Cash Code*"
              placeholder="Select"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              dropdownIcon={<SvgDropdown color={"#000"} />}
              // value="PC00123"
              options={[]}
              // optionLabel="pettycashcode"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3 input__view">
            <DropDowns
              className="input__filed"
              label="Criteria*"
              placeholder="Select"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              dropdownIcon={<SvgDropdown color={"#000"} />}
              // value="PC00123"
              options={[]}
              // optionLabel="pettycashcode"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3 input__view">
            <DropDowns
              className="input__filed"
              label="VAT Main Account"
              placeholder="Select"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              dropdownIcon={<SvgDropdown color={"#000"} />}
              // value="PC00123"
              options={[]}
              // optionLabel="pettycashcode"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3 input__view">
            <DropDowns
              className="input__filed"
              label="VAT Sub Account"
              placeholder="Select"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              dropdownIcon={<SvgDropdown color={"#000"} />}
              // value="PC00123"
              options={[]}
              // optionLabel="pettycashcode"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3 input__view">
            <DropDowns
              className="input__filed"
              label="WHT Main Account"
              placeholder="Select"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              dropdownIcon={<SvgDropdown color={"#000"} />}
              // value="PC00123"
              options={[]}
              // optionLabel="pettycashcode"
            />
          </div>
          <div className="col-12 md:col-3 lg:col-3 input__view">
            <DropDowns
              className="input__filed"
              label="WHT Sub Account"
              placeholder="Select"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              dropdownIcon={<SvgDropdown color={"#000"} />}
              // value="PC00123"
              options={[]}
              // optionLabel="pettycashcode"
            />
          </div>
          <div className="col-12 md:col-6 lg:col-6 input__view">
            <InputField
              classNames="input__filed"
              label="Remarks"
              placeholder="Enter remarks"
              textColor={"#111927"}
              textSize={"16"}
              textWeight={500}
              value="Remarks are entered here"
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
