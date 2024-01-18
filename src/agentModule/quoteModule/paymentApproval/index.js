import React from "react";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const PaymentApproval = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/agent/clientview/${123}`);
  };
  return (
    <div className="paymentapproval__status__container">
      <div className="claim__request__upload__main__title">Clients</div>
      <div
        onClick={handleNavigate}
        className="claim__request__upload__back__btn mt-3 cursor-pointer"
      >
        <SvgLeftArrow />
        <div className="claim__request__upload__back__btn__title">
          Client ID :123456
        </div>
      </div>
      <Card className="mt-4 paymentapproval__status__main__content">
        <div className="flex justify-content-center">
          <img src="https://i.ibb.co/Qpnyt7y/search.png" />
        </div>
        <div className="grid m-0">
          <div className="col-12 p-0 paymentapproval__status__main__content__text">
            Payment for policy number:09097332342 has been processed.
            <br></br> Please wait until the payment has been confirmed
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PaymentApproval;
