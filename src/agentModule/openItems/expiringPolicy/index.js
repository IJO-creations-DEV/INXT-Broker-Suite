import React from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import ExpiringPolicyCard from "./expiringPolicyCard";
import { useNavigate } from "react-router-dom";

const ExpiringPolicy = () => {
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
            Policy Expiration
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
      <ExpiringPolicyCard />
    </div>
  );
};

export default ExpiringPolicy;
