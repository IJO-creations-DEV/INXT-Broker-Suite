import React from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const handleCancelAction = () => {
    navigate(`/agent/clientview/${123}`);
  };
  const handleClientViewNavigation = () => {
    navigate(`/agent/clientview/${123}`);
  };
  return (
    <div className="overall__endorsement__payment__confirmation">
      <div className="header__title">Clients</div>
      <div
        className="left__arrow mt-3 cursor-pointer"
        onClick={handleClientViewNavigation}
      >
        <SvgLeftArrow />
        <div className="left__arrow__text">
          Carson Darrin / Client ID : 12345678
        </div>
      </div>
      <Card className="mt-4">
        <div className="table__header">Payment Confirmation</div>
        <div className="sub__title__header mt-3">
          <label className="sub__title">Payment Details</label>
          <label className="waiting__payment">Waiting For Payment</label>
        </div>

        <div className="premium__header mt-3">
          <label className="net__premium">NET Premium</label>
          <label className="premium__id">5000.00</label>
        </div>
        <div className="premium__header mt-3">
          <label className="net__premium">DST</label>
          <label className="premium__id">400.00</label>
        </div>
        <div className="premium__header mt-3">
          <label className="net__premium">VAT</label>
          <label className="premium__id">550.00</label>
        </div>
        <div className="premium__header mt-3">
          <label className="net__premium">LGT</label>
          <label className="premium__id">550.00</label>
        </div>
        <div className="premium__header mt-3">
          <label className="net__premium">Others</label>
          <label className="premium__id">550.00</label>
        </div>
        <div className="premium__header mt-3">
          <label className="net__premium">Discount</label>
          <label className="premium__id">-500.00</label>
        </div>
        <hr className="one_line_divider mt-5"></hr>
        <div className="premium__header mt-5">
          <label className="gross__premium">Gross premium</label>
          <label className="gross__id">6500.00</label>
        </div>
        <div className="button_component">
          <Button
            label="Cancel"
            severity="help"
            text
            className="download_button"
            onClick={handleCancelAction}
          />
          <Button
            label="Proceed to payment"
            className="policy__button"
            onClick={() => navigate("/agent/policy/paymentoptions")}
          />
        </div>
      </Card>
    </div>
  );
};

export default PaymentConfirmation;
