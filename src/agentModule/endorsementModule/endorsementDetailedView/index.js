import React, { useEffect, useState } from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import InputTextField from "../../component/inputText";
import SvgBlueArrow from "../../../assets/agentIcon/SvgBlueArrow";
import { useSelector } from "react-redux";
import DatepickerField from "../../component/datePicker";

const EndorsementDetailedView = () => {
  const [actionScreen, setActionScreen] = useState(false);
  const { endrosmentData, loading } = useSelector(
    ({ endrosementViewMainReducers }) => {
      return {
        loading: endrosementViewMainReducers?.loading,
        endrosmentData: endrosementViewMainReducers?.endrosmentData,
      };
    }
  );
  console.log(endrosmentData.production, "endrosmentData");
  const navigate = useNavigate();

  const handleCommonAction = () => {
    navigate(`/agent/clientview/${123}`);
  };
  const handleclickNavigation = () => {
    navigate("/agent/endorsement/paymentconfirmation");
  };
  const handlePayLater = () => {
    navigate(`/agent/clientview/${123}`);
  };

  return (
    <div className="detailed__endorsement__container m-0">
      <div className="detailed__endorsement__container__title">Clients</div>
      <div className="mt-3">
        <div
          onClick={handleCommonAction}
          className="detailed__endorsement__container__back__btn__container cursor-pointer"
        >
          <SvgLeftArrow />
          <div className="detailed__endorsement__container__back__btn__title">
            Carson Darrin / Client ID : 12345678
          </div>
        </div>
      </div>
      <div className="detailed__endorsement__card__container mt-4">
        <Card className="card__container">
          <div className="detailed__endorsement__card__container__title">
            Endorsement
          </div>
          <div className="detailed__endorsement__card__sub__title mt-2 mb-2">
            Personal Details Change
          </div>
          <div className="grid mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Policy Number"
                value={endrosmentData.policyNumber}
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Endorsement Number"
                value={endrosmentData.endrosementNumber}
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Production"
                value={endrosmentData.production}
                disabled={true}
              />
              {/* <InputTextField
                label="Production"
                value={endrosmentData.production}
                disabled={true}
              /> */}
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Inception"
                value={endrosmentData.inception}
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Issued Date"
                value={endrosmentData.issuedDate}
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Expiry"
                value={endrosmentData.expiry}
                disabled={true}
              />
            </div>
          </div>

          <div className="detailed__endorsement__card__sub__title mt-2 mb-2">
            Document
          </div>

          <div className="grid mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <div className="endorsement__detail__view__box">
                <div className="endorsement__detail__view__box__title">
                  Endorsement Slip
                </div>

                <div className="endorsement__detail__view__box__container cursor-pointer">
                  <div className="endorsement__detail__view__box__sub__title">
                    View
                  </div>
                  <SvgBlueArrow />
                </div>
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <div className="endorsement__detail__view__box">
                <div className="endorsement__detail__view__box__title">
                  Endorsement Schedule
                </div>

                <div className="endorsement__detail__view__box__container cursor-pointer">
                  <div className="endorsement__detail__view__box__sub__title">
                    View
                  </div>
                  <SvgBlueArrow />
                </div>
              </div>
            </div>
          </div>
          <div className="grid m-0 mt-3">
            <div className="col-12 md:col-12 lg:col-12 p-0 back__complete__btn__container ">
              <div className="back__btn__container">
                <Button className="back__btn" onClick={handlePayLater}>
                  Pay Later
                </Button>
              </div>
              <div className="complete__btn__container">
                <Button
                  className="complete__btn"
                  onClick={() => {
                    handleclickNavigation();
                  }}
                >
                  Proceed to payment
                </Button>
              </div>
              {actionScreen && (
                <div className="complete__btn__container">
                  <Button
                    className="complete__btn"
                    onClick={handleCommonAction}
                  >
                    Go to Endorsement list
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EndorsementDetailedView;
