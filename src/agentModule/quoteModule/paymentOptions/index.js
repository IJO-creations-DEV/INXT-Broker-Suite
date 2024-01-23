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

const PaymentOptions = () => {
  const fileUploadRef = useRef(null);
  const [uploadImage, setuploadImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
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
      <div className="overall__payment__option__container">
        <div className="header__title">Clients</div>
        <div className="mt-3">
          <div
            onClick={handleCommonAction}
            className="left__arrow cursor-pointer"
          >
            <SvgLeftArrow />
            <label className="left__arrow__text">Client ID : 12345678</label>
          </div>
        </div>
        <Card className="mt-4">
          <div className="table__header">Payment Options</div>
          <div className="grid">
            <div className="col-6">
              <div
                className="atm__text cursor-pointer"
                onClick={handleNavigation}
              >
                <SvgHomes />
                <div className="input__text__style">
                  ATM/Bank Transfer (Virtual Account)
                </div>
              </div>
            </div>
            <div className="col-6">
              <div
                className="atm__text cursor-pointer"
                onClick={handleNavigation}
              >
                <SvgQr />
                <div className="input__text__style">QRIS</div>
              </div>
            </div>
          </div>
          <div className="grid mt-2">
            <div className="col-6">
              <div
                className="atm__text cursor-pointer "
                onClick={handleNavigation}
              >
                <SvgCredit />
                <div className="input__text__style">Credit Card</div>
              </div>
            </div>
            <div className="col-6">
              <div className="atm__text cursor-pointer">
                <SvgEmoney />
                <div className="input__text__style">E-Money</div>
              </div>
            </div>
          </div>
          <div className="grid mt-2">
            <div className="col-6">
              <div
                className="atm__text cursor-pointer"
                onClick={handleNavigation}
              >
                <SvgDigital />
                <div className="input__text__style">Digi Bank</div>
              </div>
            </div>
            <div className="col-6">
              <div
                className="atm__text cursor-pointer"
                onClick={handleNavigation}
              >
                <SvgStore />
                <div className="input__text__style">Convenience Store</div>
              </div>
            </div>
          </div>
          <div className="grid mt-2">
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
                onClick={handleNavigation}
              >
                <SvgInternet />
                <div className="input__text__style">Internet Banking</div>
              </div>
            </div>
          </div>
          <div></div>
        </Card>
      </div>
    </div>
  );
};

export default PaymentOptions;
