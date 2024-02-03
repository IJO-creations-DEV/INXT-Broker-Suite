import React from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import CoverageDetailsCard from "./coverageDetailsCard";
import { act } from "react-dom/test-utils";
import { useNavigate } from "react-router-dom";

const CoverageDeatails = ({ action, flow }) => {
  const navigate = useNavigate();
  const handleLeadNavigation = () => {
    navigate("/agent/leadlisting");
  };
  return (
    <div className="coverage__container">
      <div className="coverage__container__titles">Leads</div>
      <div
        onClick={handleLeadNavigation}
        className="coverage__container__back__btn mt-3 cursor-pointer"
      >
        <SvgLeftArrow />
        <div className="coverage__container__back__btn__title">
          Lead ID: 12345678
        </div>
      </div>
      <CoverageDetailsCard action={action} flow={flow} />
    </div>
  );
};

export default CoverageDeatails;
