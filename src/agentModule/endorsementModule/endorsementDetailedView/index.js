import React, { useEffect } from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import InputTextField from "../../component/inputText";
import SvgBlueArrow from "../../../assets/agentIcon/SvgBlueArrow";
import { useSelector } from "react-redux";

const EndorsementDetailedView = () => {
  const {endrosementViewData,  loading } = useSelector(
    ({ endrosementViewMainReducers }) => {
      return {
        loading: endrosementViewMainReducers?.loading,
        endrosementViewData: endrosementViewMainReducers?.endrosementViewData,
       
      };
    }
  );
  console.log(endrosementViewData.policyNumber, "endrosementViewData");
  const navigate = useNavigate();

  const handleCommonAction = () => {
    navigate(`/agent/clientview/${123}`);
  };

 
  return (
    <div className="detailed__endorsement__container m-0">
      <div className="detailed__endorsement__container__title">Clients</div>
      <div className="grid mt-3">
        <div
          onClick={handleCommonAction}
          className="detailed__endorsement__container__back__btn__container col-12 md:col-6 lg:col-6 cursor-pointer"
        >
          <SvgLeftArrow />
          <div className="detailed__endorsement__container__back__btn__title">
            Client ID :123456
          </div>
        </div>
      </div>
      <div className="detailed__endorsement__card__container mt-4">
        <Card className="card__container">
          <div className="detailed__endorsement__card__container__title">
            Endorsement
          </div>
          <div className="grid mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Policy Number"
                value={endrosementViewData.policyNumber}
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Endorsement Number"
                value={endrosementViewData.endrosementNumber}
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Production"
                value={endrosementViewData.production}
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Inception"
                value={endrosementViewData.inception}
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Issued Date"
                value={endrosementViewData.issuedDate}
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Expiry"
                value={endrosementViewData.expiry}
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
                <div className="grid mt-2">
                  <div className="col-12 md:col-6 lg:col-6">
                    <div className="endorsement__detail__view__box__title">
                      Endorsement
                    </div>
                  </div>
                  <div className="col-12 md:col-6 lg:col-6">
                    <div className="endorsement__detail__view__box__container">
                      <div className="endorsement__detail__view__box__sub__title">
                        View
                      </div>
                      <SvgBlueArrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EndorsementDetailedView;
