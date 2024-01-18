import { BreadCrumb } from "primereact/breadcrumb";
import React from "react";
import SvgDots from "../../../assets/agentIcon/SvgDots";
import { useNavigate } from "react-router-dom";
import QuoteListingCard from "./quoteListingCard";
import "./index.scss"
const QuoteListing = () => {
  const navigate = useNavigate();
  const items = [
    { label: "Leads", command: () => navigate("/agent/leadlisting") },
    {
      label: "Lead ID: 12345678",
      command: () => navigate("/agent/quotelisting"),
    },
  ];
  const Initiate = { label: "Home" };

  return (
    <div className="quotelisting__overal__container">
      <div class="grid mt-3">
        <div class="col-12 md:col-12 lg:col-12">
          <label className="leadlisting__overal__container__title">Leads</label>
        </div>
      </div>
      <div>
        <BreadCrumb
          model={items}
          home={Initiate}
          className="breadCrums"
          separatorIcon={<SvgDots color={"#000"} />}
        />
      </div>
      <QuoteListingCard/>
    </div>
  );
};

export default QuoteListing;
