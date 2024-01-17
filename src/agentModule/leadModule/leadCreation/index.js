import React, { useState } from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import LeadCreationCard from "./leadCreationCard";

const LeadCreation = () => {
  return (
    <div className="overall_Leadcreat_container">
      <div className="innerlead_container mt-3">
        <SvgLeftArrow />
        <label className="arrowlabel_txt">Lead</label>
      </div>
      <LeadCreationCard />
    </div>
  );
};

export default LeadCreation;
