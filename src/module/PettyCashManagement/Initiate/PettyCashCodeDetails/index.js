import React, { useState, useRef, useEffect } from "react";
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
  const [selectedBankCode, setSelectedBankCode] = useState({});
  const [selectedSubAccountCode, setSelectedSubAccountCode] = useState({});
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState({});

  console.log(
    selectedBankCode.value,
    selectedSubAccountCode,
    "selectedSubAccountCode"
  );
  const { InitiateDetails, loading } = useSelector(
    ({ pettyCashInitiateReducer }) => {
      return {
        loading: pettyCashInitiateReducer?.loading,
        InitiateDetails: pettyCashInitiateReducer?.InitiateDetails,
      };
    }
  );

  console.log(InitiateDetails, "InitiateList");

  const pettycashcodeOptions = [
    {
      label: InitiateDetails?.Pettycashcode,
      value: InitiateDetails?.Pettycashcode,
    },
  ];

  const transcodeOptions = [
    {
      label: InitiateDetails?.TransactionNumber,
      value: InitiateDetails?.TransactionNumber,
    },
  ];

  const branchcodeOptions = [
    {
      label: InitiateDetails?.Branchcode,
      value: InitiateDetails?.Branchcode,
    },
  ];

  const departcodeOptions = [
    {
      label: InitiateDetails?.Departmentcode,
      value: InitiateDetails?.Departmentcode,
    },
  ];

  const bankcode = [{ label: "BANK001", value: "BANK001" }];
  const subAccountCode = [{ label: "SubCode001", value: "SubCode001" }];
  const currency = [{ label: "1000", value: "1000" }];

  useEffect(() => {
    if (bankcode.length > 0) {
      setSelectedBankCode({
        label: bankcode[0].label,
        value: bankcode[0].value,
      });
    }
    if (subAccountCode.length > 0) {
      setSelectedSubAccountCode({
        label: subAccountCode[0].label,
        value: subAccountCode[0].value,
      });
    }
    if (currency.length > 0) {
      setSelectedCurrencyCode({
        label: currency[0].label,
        value: currency[0].value,
      });
    }
  }, []);

  const navigate = useNavigate();
  const items = [
    { label: "Petty Cash", command: () => navigate("/accounts/pettycash/pettycashcodeinitiate") },
    {
      label: "Petty Cash Code Details",
      to: "/accounts/pettycash/PettyCashCodeDetails",
      color: "red",
    },
  ];
  const Initiate = { label: "Accounts" };

  const handleClick = () => {
    navigate("/accounts/pettycash/pettycashcodeinitiate");
  };

  const formik = useFormik({
    initialValues: initialValue,
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
                dropdownIcon={<SvgDropdown color={"#000"} />}
                placeholder="Select"
                disabled={true}
                textColor={"#111927"}
                textSize={"16"}
                textWeight={400}
                optionValue="value"
                optionLabel="label"
                value={InitiateDetails.Pettycashcode}
                options={pettycashcodeOptions}
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Petty Cash description"
                // placeholder="Enter"
                disabled={true}
                value="PC-2"
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
                value={InitiateDetails.Pettycashsize}
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
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={selectedBankCode.value}
                options={bankcode}
                optionValue="value"
                optionLabel="label"
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
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={selectedSubAccountCode.value}
                options={subAccountCode}
                optionValue="value"
                optionLabel="label"
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
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={selectedCurrencyCode.value}
                options={currency}
                optionValue="value"
                optionLabel="label"
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
                value="United states Currency"
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
                dropdownIcon={<SvgDropdown color={"#000"} />}
                optionValue="value"
                optionLabel="label"
                value={InitiateDetails.TransactionNumber}
                options={transcodeOptions}
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
                value="Trans-1"
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
                dropdownIcon={<SvgDropdown color={"#000"} />}
                optionValue="value"
                optionLabel="label"
                value={InitiateDetails.Branchcode}
                options={branchcodeOptions}
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
                value="Branch-1"
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
                dropdownIcon={<SvgDropdown color={"#000"} />}
                optionValue="value"
                optionLabel="label"
                value={InitiateDetails.Departmentcode}
                options={departcodeOptions}
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
                value="Depart-1"
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
                value="10,000"
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
                value="10,000"
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
                value="10,000"
              />
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default PettyCashCodeDetails;
