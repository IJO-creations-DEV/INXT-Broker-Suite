import React from "react";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import NavBar from "../../../components/NavBar";
import { Card } from "primereact/card";
import DropdownField from "../../component/DropdwonField";
import InputTextField from "../../component/inputText";
import DatepickerField from "../../component/datePicker";
import SvgBlueArrow from "../../../assets/agentIcon/SvgBlueArrow";
import "./index.scss";
import { useNavigate } from "react-router";

const ClaimSettlement = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/agent/clientview/${123}`);
  };
  return (
    <div className="claim__detailssettlemenet__container ">
      <div>
        <div className="claim__details__container__titles">Clients</div>
        <div
          onClick={handleNavigation}
          className="claim__details__container__back__btn mt-3 cursor-pointer"
        >
          <SvgLeftArrow />
          <div className="claim__details__container__back__btn__title">
            Client ID :123456
          </div>
        </div>
      </div>
      <Card>
        <div className="claim__title">Claim Settlement</div>
        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Policy Number" value="policy001" />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Claim Number" value="121221" />
          </div>
        </div>
        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Date Reported" value="01/01/2024" />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Date of Loss" value="01/01/2024" />
          </div>
        </div>
        <div className="claim__doc__title">Documents</div>
        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <div className="policy__detail__view__box">
              <div className="grid mt-2">
                <div className="col-12 md:col-6 lg:col-6">
                  <div className="policy__detail__view__box__title">
                    Acknowledgment letter
                  </div>
                </div>
                <div className="col-12 md:col-6 lg:col-6">
                  <div className="policy__detail__view__box__container">
                    <div className="policy__detail__view__box__sub__title">
                      View
                    </div>
                    <SvgBlueArrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <div className="policy__detail__view__box">
              <div className="grid mt-2">
                <div className="col-12 md:col-6 lg:col-6">
                  <div className="policy__detail__view__box__title">
                    Claims Discharge Voucher
                  </div>
                </div>
                <div className="col-12 md:col-6 lg:col-6">
                  <div className="policy__detail__view__box__container">
                    <div className="policy__detail__view__box__sub__title">
                      View
                    </div>
                    <SvgBlueArrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <div className="policy__detail__view__box">
              <div className="grid mt-2">
                <div className="col-12 md:col-6 lg:col-6">
                  <div className="policy__detail__view__box__title">
                    Claims Data sheet
                  </div>
                </div>
                <div className="col-12 md:col-6 lg:col-6">
                  <div className="policy__detail__view__box__container">
                    <div className="policy__detail__view__box__sub__title">
                      View
                    </div>
                    <SvgBlueArrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <div className="policy__detail__view__box">
              <div className="grid mt-2">
                <div className="col-12 md:col-6 lg:col-6">
                  <div className="policy__detail__view__box__title">FIR</div>
                </div>
                <div className="col-12 md:col-6 lg:col-6">
                  <div className="policy__detail__view__box__container">
                    <div className="policy__detail__view__box__sub__title">
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
  );
};

export default ClaimSettlement;
