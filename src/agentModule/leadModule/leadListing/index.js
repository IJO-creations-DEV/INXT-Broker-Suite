import React from "react";
import "./index.scss";
import { Button } from "primereact/button";
import SvgAdd from "../../../assets/agentIcon/SvgAdd"
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../assets/agentIcon/SvgDots";
import LeadListingCard from "./leadListingCard";

const LeadListing = () => {

  const items = [
    { label: "Leads", url: "/agent/leadlisting" },
  ];
  const Initiate = { label: "Home" };


  return (
    <div className="leadlisting__overal__container">

      <div class="grid mt-3">
        <div class="col-12 md:col-6 lg:col-6">
          <label className="leadlisting__overal__container__title">Leads</label>
        </div>
        <div class="col-12 md:col-6 lg:col-6">
          <div className="btn_lable_save_container">
            <Button onClick={() => { }} label="Create Lead" icon={<SvgAdd />} />
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
      <LeadListingCard/>
    </div>);
};

export default LeadListing;
