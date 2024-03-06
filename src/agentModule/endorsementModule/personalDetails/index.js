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
import { useSelector } from "react-redux";

const PersonalDetails = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const { personalDetails } = useSelector(({ personalDetailsReducer }) => {
    return {
      personalDetails: personalDetailsReducer?.personalDetails,
    };
  });

  console.log(personalDetails, "personalDetails");

  const handleButtonClick = () => {
    setIsFormSubmitted(true);
  };

  const navigate = useNavigate();
  const toastRef = useRef(null);
  const { state } = useLocation();
  console.log(state?.types, "find total value");
  console.log(state?.types[state?.types.length - 1], 'find main length')
  const handleFormSubmit = (values, index) => {

    if (index === 1) {

      if (parseInt(state?.types[state?.types.length - 1]) === index) {
        toastRef.current.showToast();
        setTimeout(() => {
          navigate(`/agent/endorsement/paymenterror/${123}`);
        }, 2000);
      }
      console.log(values, index, "find PersonalDetailsChange");
    } else if (index === 2) {
      if (parseInt(state?.types[state?.types.length - 1]) === index) {
        toastRef.current.showToast();
        setTimeout(() => {
          navigate(`/agent/endorsement/paymenterror/${123}`);
        }, 2000);
      }
      console.log(values, "find MotorDetailsChange");
    } else if (index === 3) {
      if (parseInt(state?.types[state?.types.length - 1]) === index) {
        toastRef.current.showToast();
        setTimeout(() => {
          navigate(`/agent/endorsement/paymenterror/${123}`);
        }, 2000);
      }
      console.log(values, "find CoverageChange");
    } else if (index === 4) {
      if (parseInt(state?.types[state?.types.length - 1]) === index) {
        toastRef.current.showToast();
        setTimeout(() => {
          navigate(`/agent/endorsement/paymenterror/${123}`);
        }, 2000);
      }
      console.log(values, "find PolicyExtend");
    }
  };
  const handleClientViewNavigation = () => {
    navigate(`/agent/clientview/${123}`);
  };
  return (
    <div className="endorsement__personal__detail__change__container">
      <CustomToast ref={toastRef} message="Endorsement Created" />
      <div className="customer__info__main__title">Clients</div>
      <div className="customer__info__back__btn mt-3">
        <div
          className="customer__info__back__btn__title cursor-pointer"
          onClick={handleClientViewNavigation}
        >
          <span className="cursor-poiter icon__container">
            <SvgLeftArrow />
          </span>
          Carson Darrin / Client ID : 123456
        </div>
      </div>
      <Card className="mt-4">
        <div className="customer__info__title">Endorsement Request</div>
        {state?.types.includes("1") && (
          <PersonalDetailsChange
            handleFormSubmit={handleFormSubmit}
            isFormSubmitted={isFormSubmitted}
            setIsFormSubmitted={setIsFormSubmitted}
            personalDetails={personalDetails}
          />
        )}
        {state?.types.includes("2") && (
          <MotorDetailsChange
            handleFormSubmit={handleFormSubmit}
            isFormSubmitted={isFormSubmitted}
            setIsFormSubmitted={setIsFormSubmitted}
            personalDetails={personalDetails}
          />
        )}
        {state?.types.includes("3") && (
          <CoverageChange
            handleFormSubmit={handleFormSubmit}
            isFormSubmitted={isFormSubmitted}
            setIsFormSubmitted={setIsFormSubmitted}
            personalDetails={personalDetails}
          />
        )}
        {state?.types.includes("4") && (
          <PolicyExtend
            handleFormSubmit={handleFormSubmit}
            isFormSubmitted={isFormSubmitted}
            setIsFormSubmitted={setIsFormSubmitted}
            personalDetails={personalDetails}
          />
        )}
        <div className="grid mt-3">
          <div className="col-12 p-0">
            <div className="back__next__btn__container">
              <div className="next__btn__container">
                <Button
                  className="next__btn"
                  onClick={handleButtonClick}

                // onClick={()=>handleclick()}
                // onClick={()=>{ formik.handleSubmit()}}
                >
                  Send to insurance Company
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
