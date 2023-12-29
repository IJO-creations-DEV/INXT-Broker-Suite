import React from "react";
import "../../PettyCashManagement/index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../assets/icons/SvgDot";
import RequestTable from "./RequestTable";
import { Button } from "primereact/button";
import SvgAdd from "../../../assets/icons/SvgAdd";
import { useNavigate } from "react-router";

const PettyCashRequest = () => {
  const navigate = useNavigate();
  const items = [
    { label: "Petty Cash", url: "/accounts/pettycash/pettycashrequest" },
    {
      label: "Petty Cash Request",
      url: "/accounts/pettycash/pettycashrequest",
    },
  ];
  const Initiate = { label: "Accounts" };

  const handleClick = () => {
    navigate("/accounts/pettycash/addrequest");
  };

  return (
    <div className="pettycash__management">
      <div className="grid  m-0">
        <div className="col-12 md:col-6 lg:col-6">
          <div className="pettycash__title">Petty Cash Request</div>
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
              icon={<SvgAdd color={"#fff"}/>}
              className="add__btn"
              onClick={() => {
                handleClick();
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <RequestTable />
      </div>
    </div>
  );
};

export default PettyCashRequest;
