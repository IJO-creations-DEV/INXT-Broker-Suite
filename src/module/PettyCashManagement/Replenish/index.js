import React from "react";
import "../../PettyCashManagement/index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../assets/icons/SvgDot";
import { Button } from "primereact/button";
import SvgAdd from "../../../assets/icons/SvgAdd";
import { useNavigate } from "react-router";
import PettyCashReplenishTable from "./ReplenishTable";
import NavBar from "../../../components/NavBar";

const PettyCashReplenish = () => {
  const navigate = useNavigate();
  const items = [
    { label: "Petty Cash", to: "/accounts/pettycash/replenish" },
    {
      label: "Petty Cash Replenish",
      to: "/accounts/pettycash/replenish",
    },
  ];
  const Initiate = { label: "Accounts" };

  const handleClick = () => {
    navigate("/accounts/pettycash/addreplenish");
  };

  return (
    <div className="pettycash__management">
      <div className="grid  m-0">
        <div className="col-12 md:col-6 lg:col-6">
          <div className="pettycash__title">Add Replenish</div>
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
        <PettyCashReplenishTable />
      </div>
    </div>
  );
};

export default PettyCashReplenish;
