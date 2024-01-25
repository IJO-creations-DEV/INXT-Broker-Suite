import React from "react";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { Button } from "primereact/button";

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
          Carson Darrin / Client ID : 12345678
        </div>
      </div>
      <Card className="mt-4 paymentapproval__status__main__content">
        <div className="grid m-0 overall__container">
          <div>
            <div className="flex justify-content-center">
              <img src="https://i.ibb.co/Qpnyt7y/search.png" />
            </div>
            <div className="col-12 p-0 paymentapproval__status__main__content__text">
              Payment for policy number:09097332342 has been processed.
              <br></br> Please wait until the payment has been confirmed.
            </div>
          </div>

          <div className="back__next__btn__container">
            <div className="next__btn__container">
              <Button className="next__btn" onClick={handleNavigate}>
                Go to Policy List
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PaymentApproval;
