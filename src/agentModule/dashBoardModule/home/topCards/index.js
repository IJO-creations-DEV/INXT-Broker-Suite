import { Card } from "primereact/card";
import React from "react";
import SvgLead from "../../../../assets/agentIcon/SvgLead";
import SvgArrow from "../../../../assets/agentIcon/SvgArrow";
import SvgClient from "../../../../assets/agentIcon/SvgClient";
import SvgPolicySold from "../../../../assets/agentIcon/SvgPolicySold";

const TopCard = () => {
  return (
    <div className="top__card__container grid  m-0">
      <div className="col-12 md:col-4 lg:col-4">
        <Card>
          <div className="grid m-0">
            <div className="col-4 md:col-4 lg:col-4">
              <SvgLead />
            </div>
            <div className="col-8 md:col-8 lg:col-8">
              <div className="card__container__title">Total Leads</div>
              <div className="card__container__count mt-1">60</div>
            </div>
          </div>
          <div className="card__container__btn__container mt-3">
            <div className="card__container__btn">See More <SvgArrow/></div>
          </div>
        </Card>
      </div>
      <div className="col-12 md:col-4 lg:col-4">
        <Card>
        <div className="grid  m-0">
            <div className="col-4 md:col-4 lg:col-4">
              <SvgClient />
            </div>
            <div className="col-8 md:col-8 lg:col-8">
              <div className="card__container__title">Total Clients</div>
              <div className="card__container__count mt-1">60</div>
            </div>
          </div>
          <div className="card__container__btn__container mt-3">
            <div className="card__container__btn">See More <SvgArrow/></div>
          </div>
        </Card>
      </div>
      <div className="col-12 md:col-4 lg:col-4">
        <Card>
        <div className="grid  m-0">
            <div className="col-4 md:col-4 lg:col-4">
              <SvgPolicySold />
            </div>
            <div className="col-8 md:col-8 lg:col-8">
              <div className="card__container__title">Policy Sold</div>
              <div className="card__container__count mt-1">200</div>
            </div>
          </div>
          <div className="card__contaiiner__btn__container mt-3">
            <div className="card__container__btn">See More <SvgArrow/></div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TopCard;
