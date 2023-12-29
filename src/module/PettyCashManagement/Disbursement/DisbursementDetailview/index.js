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

const DisbursementDetailview = () => {
  const navigate = useNavigate();
  // const toastRef = useRef(null);
  const items = [
    { label: "Petty Cash", url: "/accounts/pettycash/disbursementdetailview" },
    {
      label: "Disbursement Detail view",
      url: "/accounts/pettycash/disbursementdetailview",
    },
  ];
  const Initiate = { label: "Accounts" };

  const handleBack = () => {
    navigate("/accounts/pettycash/disbursement");
  };

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
              optionLabel="name"
              dropdownIcon={<SvgDropdown color={"#000"} />}
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
              optionLabel="name"
              dropdownIcon={<SvgDropdown color={"#000"} />}
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
              optionLabel="name"
              dropdownIcon={<SvgDropdown color={"#000"} />}
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
              optionLabel="name"
              dropdownIcon={<SvgDropdown color={"#000"} />}
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
            />
          </div>
        </div>
      </Card>
      <Card className="mt-3">
        <DisbursementDetailviewTable/>
      </Card>
    </div>
  );
};

export default DisbursementDetailview;
