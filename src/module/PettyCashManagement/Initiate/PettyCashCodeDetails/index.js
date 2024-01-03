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
import { useSelector } from "react-redux";

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

const PettyCashCodeDetails = () => {
  const validate = () => {};

  const { InitiateDetails, loading } = useSelector(
    ({ pettyCashInitiateReducer }) => {
      return {
        loading: pettyCashInitiateReducer?.loading,
        InitiateDetails: pettyCashInitiateReducer?.InitiateDetails,
      };
    }
  );

  console.log(InitiateDetails,"InitiateList")

  const navigate = useNavigate();
  const items = [
    { label: "Petty Cash", url: "Petty Cash Management" },
    {
      label: "Petty Cash Code Details",
      url: "/accounts/pettycash/PettyCashCodeDetails",
      color:"red"
    },
  ];
  const Initiate = { label: "Accounts" };

  const handleClick = () => {
    navigate("/accounts/pettycash/pettycashcodeinitiate");
  };

  const formik = useFormik({
    initialValues: initialValue,
    validate,
  });

  return (
    <div className="pettycash__form">
      <div className="grid  m-0">
        <div className="col-12 md:col-6 lg:col-6">
          <div
            className="pettycash__title"
            onClick={() => {
              handleClick();
            }}
          >
            <SvgBackArrow />
            Petty Cash code Details
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
        <form>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Petty Cash Code"
                placeholder="Select"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={400}
                optionLabel="name"
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Petty Cash description"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
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
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Bank Account Code"
                placeholder="Select"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={400}
                optionLabel="name"
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Sub Account Code"
                placeholder="Select"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={400}
                optionLabel="name"
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Currency"
                placeholder="Select"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={400}
                optionLabel="name"
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <InputField
                classNames="input__filed"
                label="Currency description"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Transaction Code"
                placeholder="Select"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={400}
                optionLabel="name"
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Transaction description"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Branch Code"
                placeholder="Select"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={400}
                optionLabel="name"
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Branch description"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Department Code"
                // placeholder="Select"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={400}
                optionLabel="name"
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Department description"
                // placeholder="Enter"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
              />
            </div>
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Available Cash"
                placeholder="Select"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={400}
                optionLabel="name"
                dropdownIcon={<SvgDropdown color={"#000"} />}
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
              />
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default PettyCashCodeDetails;
