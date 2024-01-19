import React, { useRef, useState } from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useLocation, useNavigate } from "react-router-dom";
import CustomToast from "../../../components/Toast";
import PersonalDetailsChange from "./SplitScreens/PersonalDetailsChange";
import MotorDetailsChange from "./SplitScreens/MotorDetailsChange";
import CoverageChange from "./SplitScreens/CoverageChange";
import PolicyExtend from "./SplitScreens/PolicyExtend";
const PersonalDetails = () => {
  const navigate = useNavigate();
  const toastRef = useRef(null);
  const { state } = useLocation();
  console.log(state, "total value")
  const handleclick = () => {
    toastRef.current.showToast();
    setTimeout(() => {
      navigate(`/agent/endorsement/paymenterror/${123}`);
    }, 2000);
  };

  return (
    <div className="endorsement__personal__detail__change__container">
      <CustomToast ref={toastRef} message="Endorsement Created" />
      <div className="customer__info__main__title">Clients</div>
      <div className="customer__info__back__btn mt-3">
        <div className="customer__info__back__btn__title">
          <span className="cursor-poiter icon__container">
            <SvgLeftArrow />
          </span>
          Client ID :123456
        </div>
      </div>
      <Card className="mt-4">
        <div className="customer__info__title">Endorsement Request</div>
        {/* <PersonalDetailsChange handleFormSubmit={handleclick} />
        <MotorDetailsChange handleFormSubmit={handleclick} />
        <CoverageChange handleFormSubmit={handleclick} />
        <PolicyExtend handleFormSubmit={handleclick} /> */}
        <PersonalDetailsChange
          handleFormSubmit={(values) => handleclick("personal", values)}
        />
        <MotorDetailsChange
          handleFormSubmit={(values) => handleclick("motor", values)}
        />
        <CoverageChange
          handleFormSubmit={(values) => handleclick("coverage", values)}
        />
        <PolicyExtend
          handleFormSubmit={(values) => handleclick("policyExtend", values)}
        />
        <div className="grid m-0">
          <div className="col-12">
            <div className="back__next__btn__container">
              <div className="next__btn__container">
                <Button
                  className="next__btn"
                  onClick={() => {
                    handleclick();
                  }}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PersonalDetails;
