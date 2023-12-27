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
import { TriStateCheckbox } from "primereact/tristatecheckbox";

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
const RequestForm = () => {
  const [value, setValue] = useState(null);
  const toastRef = useRef(null);
  const navigate = useNavigate();
  const validate = () => {};
  const handleSubmit = () => {
    toastRef.current.showToast();
    {
      setTimeout(() => {
        navigate("/accounts/pettycash/addrequesttable");
      }, 3000);
    }
  };

  const items = [
    { label: "Petty Cash", url: "/" },
    {
      label: "Add Request",
      url: "/accounts/pettycash/addrequest",
    }
  ];
  const Initiate = { label: "Accounts" };

  const handleClick = () => {
    navigate("/accounts/pettycash/pettycashrequest");
  };

  const formik = useFormik({
    initialValues: initialValue,
    validate,
    handleSubmit: handleSubmit,
  });

  return (
    <div className="request__form">
      <CustomToast ref={toastRef} />
      <div className="grid  m-0">
        <div className="col-12 md:col-6 lg:col-6">
          <div
            className="pettycash__title"
            onClick={() => {
              handleClick();
            }}
          >
            <SvgBackArrow />
            Add Request
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
                textWeight={400}
                optionLabel="name"
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
            <div className="col-12 md:col-6 lg-col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Petty Cash description"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
              />
            </div>
            <div className="col-12 md:col-3 lg-col-3 input__view">
              <InputField
                classNames="input__filed"
                label="Request number"
                placeholder="Enter"
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
                label="Requester Name"
                placeholder="Select"
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
                label="Branch Code"
                placeholder="Select"
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
                placeholder="Enter"
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
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
              />
            </div>
            <div className="col-12 md:col-3 lg-col-3 check__box__container">
            <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
            <div className="check__box__text">Cash in advance</div>
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
                handleSubmit();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
