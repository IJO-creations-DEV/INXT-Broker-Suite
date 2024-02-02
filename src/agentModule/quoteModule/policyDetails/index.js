import React from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import PolicyDetailsCard from "./policyDetailsCard";

const PolicyDetails = ({ action, flow }) => {
  return (
    <div className="policy__container">
      <div className="policy__container__title">
        {flow === "lead" ? "Leads" : "Clients"}
      </div>
      <div className="policy__container__back__btn__container mt-3">
        <SvgLeftArrow />
        <div className="policy__container__back__btn__title">
          Carson Darrin/ {flow === "lead" ? "Lead ID" : "Client ID"} : 12345678
        </div>
      </div>
      <PolicyDetailsCard action={action} flow={flow} />
    </div>
  );
};

export default PolicyDetails;
