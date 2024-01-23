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
import { useSelector } from "react-redux";

const ClaimSettlement = () => {
  const { claimSettleViewData, loading } = useSelector(
    ({ claimSettleMainReducers }) => {
      return {
        loading: claimSettleMainReducers?.loading,
        claimSettleViewData: claimSettleMainReducers?.claimSettleViewData,
      };
    }
  );
  console.log(claimSettleViewData, "endrosementViewData");
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
            <InputTextField
              value={claimSettleViewData?.policyNumber}
              label="Policy Number"
            />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField
              value={claimSettleViewData?.claimNumber}
              label="Claim Number"
            />
          </div>
        </div>
        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField
              value={claimSettleViewData?.dateReported}
              label="Date Reported"
            />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField
              value={claimSettleViewData?.dateOfLoss}
              label="Date of Loss"
            />
          </div>
        </div>
        <div className="claim__doc__title mt-2">Documents</div>
        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <div className="policy__detail__view__box">
              <div className="policy__detail__view__box__title">
                Acknowledgment letter
              </div>
              <div className="policy__detail__view__box__container cursor-pointer">
                <div className="policy__detail__view__box__sub__title">
                  View
                </div>
                <SvgBlueArrow />
              </div>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <div className="policy__detail__view__box">
              <div className="policy__detail__view__box__title">
                Claims Discharge Voucher
              </div>
              <div className="policy__detail__view__box__container cursor-pointer">
                <div className="policy__detail__view__box__sub__title">
                  View
                </div>
                <SvgBlueArrow />
              </div>
            </div>
          </div>
        </div>
        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <div className="policy__detail__view__box">
              <div className="policy__detail__view__box__title">
                Claims Data sheet
              </div>

              <div className="policy__detail__view__box__container cursor-pointer">
                <div className="policy__detail__view__box__sub__title">
                  View
                </div>
                <SvgBlueArrow />
              </div>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <div className="policy__detail__view__box">
              <div className="policy__detail__view__box__title">FIR</div>
              <div className="policy__detail__view__box__container cursor-pointer">
                <div className="policy__detail__view__box__sub__title">
                  View
                </div>
                <SvgBlueArrow />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ClaimSettlement;
