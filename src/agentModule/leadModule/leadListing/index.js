import React, { useState } from "react";
import "./index.scss";
import { Button } from "primereact/button";
import SvgAdd from "../../../assets/agentIcon/SvgAdd"
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../assets/agentIcon/SvgDots";
import LeadListingCard from "./leadListingCard";
import { Dropdown } from "primereact/dropdown";
import SvgMotor from "../../../assets/agentIcon/SvgMotor";
import SvgTravel from "../../../assets/agentIcon/SvgTravel";
import SvgHome from "../../../assets/agentIcon/SvgHome";
import { useNavigate } from "react-router-dom";

const LeadListing = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const items = [
    { label: "Leads",command: () => navigate("/agent/leadlisting") },
  ];
  const Initiate = { label: "Home" };
  
  const dropdownOptions = [
    {
      label: <div style={{ display: "flex",alignItems:"center",gap:"10px" }} onClick={()=>{handleClickMotor()}}>
        <div><SvgMotor /></div>
        <div
          style={{
            fontFamily: "Inter var",
            fontWeight: 400,
            fontSize: "16px",
            color: "#111927",
            width: "100%",
          }}
        >
          Motor
        </div>
      </div>,
      value: 'Motor'
    },
    {
      label: <div style={{ display: "flex",alignItems:"center",gap:"10px" }}>
        <div><SvgTravel /></div>
        <div
          style={{
            fontFamily: "Inter var",
            fontWeight: 400,
            fontSize: "16px",
            color: "#111927",
            width: "100%",
          }}
        >
          Travel
        </div>
      </div>,
      value: 'Travel'
    },
    {
      label: <div style={{ display: "flex",alignItems:"center",gap:"10px" }}>
        <div><SvgHome /></div>
        <div
          style={{
            fontFamily: "Inter var",
            fontWeight: 400,
            fontSize: "16px",
            color: "#111927",
            width: "100%",
          }}
        >
          Property
        </div>
      </div>, value: 'Property'
    },
  ];


  const handleClickMotor = () =>{
    navigate("/agent/createlead")
  }

  return (
    <div className="leadlisting__overal__container">

      <div class="grid mt-3">
        <div class="col-12 md:col-6 lg:col-6">
          <label className="leadlisting__overal__container__title">Leads</label>
        </div>
        <div class="col-12 md:col-6 lg:col-6">
          <div className="btn_lable_save_container">
            <Dropdown
              value={selectedOption}
              options={dropdownOptions}
              onChange={(e) => setSelectedOption(e.value)}
              placeholder="Create Lead"
              dropdownIcon={<SvgAdd />}
            />
          </div>
        </div>
      </div>
      <div>
        <BreadCrumb
          model={items}
          home={Initiate}
          className="breadCrums"
          separatorIcon={<SvgDot color={"#000"} />}
        />
      </div>
      <LeadListingCard />
    </div>);
};

export default LeadListing;
