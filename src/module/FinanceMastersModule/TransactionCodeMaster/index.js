import React from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../assets/icons/SvgDot";
import { Button } from "primereact/button";
import SvgAdd from "../../../assets/icons/SvgAdd";
import { useNavigate } from "react-router";
import SvgUploade from "../../../assets/icons/SvgUploade";
import TransactionCodeMasterTable from "./TransactionCodeMasterTable";
import NavBar from "../../../components/NavBar";

const TransactionCodeMaster = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "Transaction code",
      url: "/master/finance/transactioncode",
    },
  ];
  const Initiate = { label: "Master" };

  const handleClick = () => {
    navigate("/master/finance/transactioncode/addtransactioncode");
  };

  return (
    <div className="Transaction__Code__Master__container">
      <NavBar/>
      <div className="grid  m-0">
        <div className="col-12 md:col-6 lg:col-6">
          <div className="Transaction__Code__Master__title">
            Transaction Code Master
          </div>
          <div>
            <BreadCrumb
              model={items}
              home={Initiate}
              className="breadCrums"
              separatorIcon={<SvgDot color={"#000"} />}
            />
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-6">
          <div className="btn__container">
          <Button
              label="Upload"
              icon={<SvgUploade color={"#fff"} />}
              className="upload__btn"
              onClick={() => {
                handleClick();
              }}
            />
            <Button
              label="Add"
              icon={<SvgAdd color={"#fff"} />}
              className="add__btn"
              onClick={() => {
                handleClick();
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <TransactionCodeMasterTable/>
      </div>
    </div>
  );
};

export default TransactionCodeMaster;
