import React from "react";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import "./index.scss";
import SvgClientProfile from "../../../assets/agentIcon/SvgClientProfile";
import LeadEditCrad from "./leadEditCard";
import { useNavigate } from "react-router-dom";

const LeadEdit = ({ flow }) => {
  console.log(flow, "find flow");
  const navigate = useNavigate();
  const handleClientNavigation = () => {
    if (flow == "lead") {
      navigate("/agent/leadlisting");
    } else if (flow === "client") {
      navigate("/agent/clientlisting");
    }
  };
  return (
    <div className="overall_leadedit_container">
      <div
        className="innerlead_container mt-3 cursor-pointer"
        onClick={handleClientNavigation}
      >
        <SvgLeftArrow />
        <div className="arrowlabel_txt">
          {flow === "lead" ? "Leads" : "Clients"}
        </div>
      </div>
      <div className="client__container mt-5">
        <div className="client__svg__container">
          <SvgClientProfile />
        </div>
        <div>
          <div className="client__profile__title">Carson Darrin</div>
          <div className="client__profile__id">
            {flow === "lead" ? "Lead ID : 12345678" : "Client ID : 12345678"}
          </div>
        </div>
      </div>
      <LeadEditCrad flow={flow} />
    </div>
  );
};

export default LeadEdit;
