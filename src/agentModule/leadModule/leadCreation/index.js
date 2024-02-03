import React, { useState } from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import LeadCreationCard from "./leadCreationCard";
import { useNavigate } from "react-router-dom";

const LeadCreation = () => {
  const navigate = useNavigate();
  const handleLeadNavigation = () => {
    navigate("/agent/leadlisting");
  };
  return (
    <div className="overall_Leadcreat_container">
      <div onClick={handleLeadNavigation} className="innerlead_container mt-3 cursor-pointer">
        <SvgLeftArrow />
        <div className="arrowlabel_txt">Lead</div>
      </div>
      <LeadCreationCard />
    </div>
  );
};

export default LeadCreation;
