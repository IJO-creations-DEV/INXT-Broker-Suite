import React, { useState, useRef } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../../assets/icons/SvgDot";
import { useNavigate } from "react-router";
import SvgBackArrow from "../../../../assets/icons/SvgBackArrow";
import CustomToast from "../../../../components/Toast";
import SvgAdd from "../../../../assets/icons/SvgAdd";
import { Button } from "primereact/button";

const AddRequestTable = () => {
  const toastRef = useRef(null);
  const navigate = useNavigate();
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
      url: "/accounts/pettycash/addrequesttable",
    },
  ];
  const Initiate = { label: "Accounts" };

  const handleClick = () => {
    navigate("/accounts/pettycash/addrequest");
  };
  return (
    <div className="add__request__table">
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
      <div className="sub__container grid  mt-3">
        <div className="sub__container__title col-12 md:col-6 lg:col-6">
          <div className="sub__request__title">Request List</div>
        </div>
        <div className="col-12 md:col-6 lg:col-6">
        <div className="btn__container">
            <Button
              label="Add"
              icon={<SvgAdd />}
              className="add__btn"
              onClick={() => {
                handleClick();
              }}
            />
          </div>
        </div>
      </div>
      <div className="table__container">
      </div>
      <div className="grid  mt-4">
        <div className="col-12 md:col-12 lg:col-12">
          <div className="btn__container">
            <Button
              label="Approve"
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

export default AddRequestTable;
