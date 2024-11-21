import React from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import PolicyDetailedViewCard from "./policyDetailViewCard";
import { useLocation, useNavigate } from "react-router-dom";

const PolicyDetailedView = ({ action }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state, "axx")
  const handleClientViewNavigation = () => {
    navigate(`/agent/clientview/${123}`);
  };

  return (
    <div className="policy__details__view__container">
      <div className="policy__details__view__container__title">Clients</div>
      <div
        className="policy__details__view__back__btn__container mt-3 cursor-pointer"
        onClick={handleClientViewNavigation}
      >
        <SvgLeftArrow />
        <div className="policy__details__view__back__btn__container__title">
          Carson Darrin / Client ID : 12345678
        </div>
      </div>
      <PolicyDetailedViewCard action={action} state={state} />
    </div>
  );
};

export default PolicyDetailedView;
