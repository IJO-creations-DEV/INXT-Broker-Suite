import React, { useRef } from "react";
import "./index.scss";
import { Card } from "primereact/card";
import SvgCountPlusIcon from "../../../assets/icons/SvgCountPlusIcon";
import SvgCountMinusIcon from "../../../assets/icons/SvgCountMinusIcon";
import CalculaitionTextInputs from "../../component/calculaitionTextInputs";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Button } from "primereact/button";
import DropdownField from "../../component/DropdwonField";
import CustomToast from "../../../components/Toast";
import { useNavigate } from "react-router-dom";
import customHistory from "../../../routes/customHistory";

const OrderSummary = () => {
  const toastRef = useRef(null);
  const navigate = useNavigate();

  const handleclick = () => {
    toastRef.current.showToast();
    setTimeout(() => {
      navigate("/agent/quotedetailview");
    }, 2000);
  };
  const handleBackNavigation = () => {
    customHistory.back();
  };

  return (
    <div className="order__summary__container">
      <CustomToast ref={toastRef} message="Quote Created Successfully" />
      <div className="order__summary__main__title">Leads</div>
      <div className="order__summary__back__btn mt-3">
        <SvgLeftArrow />
        <div className="order__summary__back__btn__title">
          Lead ID: 12345678
        </div>
      </div>
      <Card className="mt-4">
        <div className="order__summary__title">Create Quote</div>
        <div className="order__summary__subtitle mt-2 mb-2">Order Summery</div>
        <div class="grid m-0 nested-grid">
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 p-0">
            <div class="grid m-0">
              <div class="col-12 md:col-12 lg:col-12 xl:col-12 mt-2">
                <CalculaitionTextInputs label="NET premium" value="1,100.00" />
              </div>
              <div class="col-12 md:col-12 lg:col-12 xl:col-12 mt-2">
                <CalculaitionTextInputs
                  label="Value Added Tax"
                  value="1,500.00"
                />
              </div>
            </div>
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-3">
            <div className="discount__dynamic__card">
              <div className="discount__dynamic__card__title">
                Discount (Optional)
              </div>
              <div className="discount__dynamic__card__subtitle">
                Enter discount you will give to customer
              </div>
              <div className="discount__dynamic__card__bottom">
                <div className="cursor-pointer">
                  <SvgCountMinusIcon />
                </div>
                <div className="discount__reflection__text">0%</div>
                <div className="cursor-pointer">
                  <SvgCountPlusIcon />
                </div>
              </div>
            </div>
            <div
              className="discount__action__container"
              style={{ olor: "green" }}
            >
              <div className="discount__action__text">Min 0%</div>
              <div className="discount__action__text">Max 30%</div>
            </div>
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <CalculaitionTextInputs
              label="Others(Acc. premium)"
              value="1,300.00"
            />
          </div>
          <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField label="Authorized Signature" />
          </div>
          <div class="col-12 md:col-12 lg:col-12 xl:col-12 p-0">
            <div class="grid m-0">
              <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2">
                <CalculaitionTextInputs
                  label="Documentary Stamp Tax"
                  value="1,000.00"
                />
              </div>
            </div>
            <div class="grid m-0">
              <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2">
                <CalculaitionTextInputs
                  label="Local Gov’t Tax"
                  value="1,100.00"
                />
              </div>
            </div>
            <div class="grid m-0">
              <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2">
                <CalculaitionTextInputs label="Discount" value="00.00" />
              </div>
            </div>
            <div class="grid m-0">
              <div class="col-6 md:col-6 lg:col-6 xl:col-6 mt-2">
                <CalculaitionTextInputs label="Gross Premium" value="6000.00" />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="back__next__btn__container">
              <div className="back__btn__container">
                <Button className="back__btn" onClick={handleBackNavigation}>
                  Back
                </Button>
              </div>
              <div className="next__btn__container">
                <Button
                  className="next__btn"
                  onClick={() => {
                    handleclick();
                  }}
                >
                  Completed Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OrderSummary;
