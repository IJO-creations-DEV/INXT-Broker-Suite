import React from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import RenewalRequestCard from "./renewalRequestCard";
import { useNavigate } from "react-router-dom";

const RenewalRequest = () => {
  const navigate = useNavigate();

  const handleNavigationOpenItems = () => {
    navigate("/agent/openitemslistdata");
  };

  return (
    <div className="expiring__policy__container">
      {/* <div className="expiring__policy__container__titles">  Upcoming Events</div> */}

      <div class="grid mt-3">
        <div class="col-12 md:col-6 lg:col-6">
          <label className="leadlisting__overal__container__title">
            Renewal Request
          </label>
        </div>
      </div>

      <div
        className="expiring__policy__container__back__btn cursor-pointer"
        onClick={handleNavigationOpenItems}
      >
        <SvgLeftArrow />
        <div className="expiring__policy__container__back__btn__title">
          Open Items
        </div>
      </div>
      <RenewalRequestCard />
    </div>
  );
};

export default RenewalRequest;
