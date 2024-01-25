import React from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import PolicyDetailedViewCard from "./policyDetailViewCard";

const PolicyDetailedView = ({ action }) => {
  return (
    <div className="policy__details__view__container">
      <div className="policy__details__view__container__title">Clients</div>
      <div className="policy__details__view__back__btn__container mt-3">
        <SvgLeftArrow />
        <div className="policy__details__view__back__btn__container__title">
          Carson Darrin / Client ID : 12345678
        </div>
      </div>
      <PolicyDetailedViewCard action={action} />
    </div>
  );
};

export default PolicyDetailedView;
