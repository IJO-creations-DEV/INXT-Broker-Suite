import { Card } from "primereact/card";
import React from "react";
import SvgCollectedPremium from "../../../../assets/agentIcon/SvgCollectedPremium";
import SvgEarnCollection from "../../../../assets/agentIcon/SvgEarnCollection";
import SvgReceivable from "../../../../assets/agentIcon/SvgReceivable";
import SvgGrossPremium from "../../../../assets/agentIcon/SvgGrossPremium";

const BottomCard = () => {
  return (
    <div className="bottom__card__container grid">
      <div className="col-12 md:col-3 lg:col-3">
        <Card>
          <div className="bottom__card__inner__container">
            <div className="bottom__card__inner__container__svg mt-2">
              <SvgEarnCollection />
            </div>
            <div className="bottom__card__inner__container__title mt-2">
              ₱ 13920
            </div>
            <div className="bottom__card__inner__container__sub__title mt-2">
              Earned Commission
            </div>
          </div>
        </Card>
      </div>
      <div className="col-12 md:col-3 lg:col-3">
        <Card>
          <div className="bottom__card__inner__container">
            <div className="bottom__card__inner__container__svg mt-2">
              <SvgCollectedPremium />
            </div>
            <div className="bottom__card__inner__container__title mt-2">
              ₱ 8920
            </div>
            <div className="bottom__card__inner__container__sub__title mt-2">
              Collected Premium
            </div>
          </div>
        </Card>
      </div>
      <div className="col-12 md:col-3 lg:col-3">
        <Card>
          <div className="bottom__card__inner__container">
            <div className="bottom__card__inner__container__svg mt-2">
              <SvgReceivable />
            </div>
            <div className="bottom__card__inner__container__title mt-2">
              ₱ 8920
            </div>
            <div className="bottom__card__inner__container__sub__title mt-2">
              Receivables
            </div>
          </div>
        </Card>
      </div>
      <div className="col-12 md:col-3 lg:col-3">
        <Card>
          <div className="bottom__card__inner__container">
            <div className="bottom__card__inner__container__svg mt-2">
              <SvgGrossPremium />
            </div>
            <div className="bottom__card__inner__container__title mt-2">
              ₱ 174050
            </div>
            <div className="bottom__card__inner__container__sub__title mt-2">
              Gross Premium
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BottomCard;
