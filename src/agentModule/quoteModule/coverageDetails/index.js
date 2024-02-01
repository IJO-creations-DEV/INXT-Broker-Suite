import React from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow"
import CoverageDetailsCard from "./coverageDetailsCard";
import { act } from "react-dom/test-utils";

const CoverageDeatails = ({action}) => {
  return (

    <div className="coverage__container">
      <div className="coverage__container__titles">Leads</div>
      <div className="coverage__container__back__btn mt-3">
        <SvgLeftArrow />
        <div className="coverage__container__back__btn__title">Lead ID: 12345678</div>
      </div>
      <CoverageDetailsCard action={action}/>

    </div>
  );
};

export default CoverageDeatails;
