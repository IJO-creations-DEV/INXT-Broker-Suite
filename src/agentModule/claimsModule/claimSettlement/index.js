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
import { Button } from "primereact/button";

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

  const handleList = () => {
    navigate("/agent/clientview/1233");
  };
  const handleAcknowledgmentsubmit = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1TdQzluASqjcFtWXyU-9DN4Tb9wvx1GZS/view?usp=drive_link";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClaimsDischargeVouchersubmit = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1POZmcwTzm8hg3kAPloDRjWJk9CCeRCE2/view?usp=sharing";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClaimsDatasheetubmit = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1DfrEf3kSo2msh9rBUyEbgxwqUPIOgNtB/view?usp=sharing";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            Carson Darrin / Client ID :123456
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
            <div
              onClick={() => handleAcknowledgmentsubmit()}
              className="policy__detail__view__box"
            >
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
            <div
              onClick={() => handleClaimsDischargeVouchersubmit()}
              className="policy__detail__view__box"
            >
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
            <div
              onClick={() => handleClaimsDatasheetubmit()}
              className="policy__detail__view__box"
            >
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
        <div className="listing__button mt-3">
          <Button onClick={handleList}>Go to listing</Button>
        </div>
      </Card>
    </div>
  );
};

export default ClaimSettlement;
