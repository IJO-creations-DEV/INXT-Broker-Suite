import React, { useRef, useState } from "react";
import { Card } from "primereact/card";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import SvgHomes from "../../../assets/agentIcon/SvgHomes";
import SvgQr from "../../../assets/agentIcon/SvgQr";
import SvgCredit from "../../../assets/agentIcon/SvgCredit";
import SvgEmoney from "../../../assets/agentIcon/SvgEmoney";
import SvgDigital from "../../../assets/agentIcon/SvgDigital";
import SvgStore from "../../../assets/agentIcon/SvgStore";
import SvgDebit from "../../../assets/agentIcon/SvgDebit";
import SvgInternet from "../../../assets/agentIcon/SvgInternet";

import { useNavigate } from "react-router-dom";
import DocumentUpload from "./Modal/DocumentUpload";
import SvgPaymentLinkIcon from "../../../assets/agentIcon/SvgPaymentLinkIcon";
import SvgInxTlinkicon from "../../../assets/agentIcon/SvgInxTlinkicon";
import ShareOption from "./Modal/ShareOption";
import InternetBankingList from "./Modal/InternetBankingList";

const PaymentOptions = () => {
  const fileUploadRef = useRef(null);
  const [uploadImage, setuploadImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleShare, setModalVisibleShare] = useState(false);
  const [modalVisibleBankList, setModalVisibleBankList] = useState(false);
  const navigate = useNavigate();
  const handleUppendImg = (name, src) => {
    console.log(name, src, "find handleUppendImg");
    setuploadImage(src?.objectURL);
  };
  const handleMOdalOpen = () => {
    setModalVisible(true);
  };
  const handleNavigation = () => {
    navigate("/agent/policy/paymentapproval");
  };

  const handleMOdalClose = () => {
    setModalVisible(false);
  };
  const handleCancelUplaoded = () => {
    setuploadImage(null);
    fileUploadRef.current.clear();
  };
  const handleSubmit = () => {
    navigate("/agent/policy/paymentapproval");
  };
  const handleCommonAction = () => {
    navigate(`/agent/clientview/${123}`);
  };
  const handleShareOption = () => {
    setModalVisibleShare(true);
  };
  const handleBankingList = () => {
    setModalVisibleBankList(true);
  };

  return (
    <div>
      <DocumentUpload
        modalVisible={modalVisible}
        handleUppendImg={handleUppendImg}
        uploadImage={uploadImage}
        fileUploadRef={fileUploadRef}
        handleSubmit={handleSubmit}
        handleCancelUplaoded={handleCancelUplaoded}
        setModalVisible={setModalVisible}
      />
      <ShareOption
        modalVisible={modalVisibleShare}
        setModalVisible={setModalVisibleShare}
      />
      <InternetBankingList
        modalVisible={modalVisibleBankList}
        setModalVisible={setModalVisibleBankList}
      />
      <div className="overall__payment__option__container">
        <div className="header__title">Clients</div>
        <div className="mt-3">
          <div
            onClick={handleCommonAction}
            className="left__arrow cursor-pointer"
          >
            <SvgLeftArrow />
            <div className="left__arrow__text">
              Carson Darrin / Client ID : 12345678
            </div>
          </div>
        </div>
        <Card className="mt-4">
          <div className="table__header">Payment Options</div>
          <div className="grid mt-2">
            <div className="col-6">
              <div className="atm__text cursor-pointer">
                <SvgDigital />
                <div className="input__text__style">Digi Bank</div>
              </div>
            </div>
            <div className="col-6">
              <div className="atm__text cursor-pointer">
                <SvgStore />
                <div className="input__text__style">Convenience Store</div>
              </div>
            </div>
            <div className="col-6">
              <div
                className="atm__text cursor-pointer"
                onClick={handleMOdalOpen}
              >
                <SvgDebit />
                <div className="input__text__style">Direct Debit</div>
              </div>
            </div>
            <div className="col-6">
              <div
                className="atm__text cursor-pointer"
                onClick={handleBankingList}
              >
                <SvgInternet />
                <div className="input__text__style">Internet Banking</div>
              </div>
            </div>
            <div className="col-6">
              <div className="atm__text cursor-pointer">
                <SvgInxTlinkicon />
                <div className="input__text__style">INXT payment</div>
              </div>
            </div>
            <div className="col-6">
              <div
                className="atm__text cursor-pointer"
                onClick={handleShareOption}
              >
                <SvgPaymentLinkIcon />
                <div className="input__text__style">Share to Customer</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PaymentOptions;
