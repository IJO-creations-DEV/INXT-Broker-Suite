import React from "react";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../assets/icons/SvgDot";
import { Button } from "primereact/button";
import SvgAdd from "../../../assets/icons/SvgAdd";
import CompanyMasterTable from "./CompanyMasterTable";
import "./index.scss";
import { useNavigate } from "react-router";


const CompanyMaster = () => {

  const navigate = useNavigate();

  const items = [{ label: "Company", url: "/master/finance/company" }];
  const Initiate = { label: "Master" };

  const handleClick =()=>{
    navigate('/master/finance/company/addcompany')
  }

  return (
    <div style={{ color: "black" }} className="company__container">
      <div className="grid  m-0">
        <div className="col-12 md:col-6 lg:col-6">
          <div className="pettycash__title">Company Master</div>
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
              label="Add"
              icon={<SvgAdd />}
              className="add__btn"
              onClick={() => {handleClick()}}
            />
          </div>
        </div>
      </div>
      <CompanyMasterTable />
    </div>
  );
};

export default CompanyMaster;
