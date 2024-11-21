import React from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import UploadPolicyCard from "./uploadPolicyCard";
import { useLocation, useNavigate } from "react-router-dom";

const UploadPolicy = () => {
  const navigate = useNavigate();
  const { state } = useLocation()
  const handleLeadListNavigation = () => {
    navigate("/agent/quotelisting");
  };
  return (
    <div className="upload__policy__container">
      <div className="upload__policy__container__title">Leads</div>
      <div className="grid m-0 mt-3">
        <div className="upload__policy__container__back__btn__container col-12 md:col-6 lg:col-6 p-0">
          <div
            className="arrow__controller cursor-pointer"
            onClick={handleLeadListNavigation}
          >
            <SvgLeftArrow />
            <div className="upload__policy__container__back__btn__title">
              Lead ID : 12345678
            </div>
          </div>
        </div>
        <div className="upload__policy__container__quote__container col-12 md:col-6 lg:col-6 p-0">
          <div className="upload__policy__container__quote__title">
            Quote ID : 12345678
          </div>
        </div>
      </div>
      <UploadPolicyCard state={state} />
    </div>
  );
};

export default UploadPolicy;
