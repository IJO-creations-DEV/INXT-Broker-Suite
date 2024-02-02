import React from "react";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import "./index.scss";
import PolicyApprovalCard from "./policyApprovalCard";
import { useNavigate } from "react-router-dom";

const PolicyApproval = () => {
  const navigate = useNavigate();
  const handleLeadNavigation = () => {
    navigate("/agent/leadlisting");
  };
  return (
    <div className="policy__approval__container">
      <div className="policy__approval__container__title">Leads</div>
      <div className="grid mt-3">
        <div className="policy__approval__back__btn__container col-12 md:col-6 lg:col-6">
          <div
            className="cursor-pointer navigation-controller"
            onClick={handleLeadNavigation}
          >
            <SvgLeftArrow />
            <div className="policy__approval__back__btn__container__title">
              Lead ID: 12345678
            </div>
          </div>
        </div>
        <div className="policy__approval__quote__container col-12 md:col-6 lg:col-6">
          <div className="policy__approval__back__btn__container__title">
            Quote ID : 12345678
          </div>
        </div>
      </div>
      <PolicyApprovalCard />
    </div>
  );
};

export default PolicyApproval;
