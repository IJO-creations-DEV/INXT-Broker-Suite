import React from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import PolicyDetailsCard from "./policyDetailsCard";
import { useNavigate } from "react-router-dom";

const PolicyDetails = ({ action, flow }) => {
  const navigate = useNavigate();
  const handleLeadNavigation = () => {
    navigate("/agent/leadlisting");
  };
  return (
    <div className="policy__container">
      <div className="policy__container__title">
        {flow === "lead" ? "Leads" : "Clients"}
      </div>
      <div
        onClick={handleLeadNavigation}
        className="policy__container__back__btn__container mt-3 cursor-pointer"
      >
        <SvgLeftArrow />
        <div className="policy__container__back__btn__title">
          {flow === "lead" ? "Lead ID" : " Carson Darrin / Client ID"} :
          1234567
        </div>
      </div>
      <PolicyDetailsCard action={action} flow={flow} />
    </div>
  );
};

export default PolicyDetails;
