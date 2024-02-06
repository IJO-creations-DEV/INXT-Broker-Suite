import { Card } from "primereact/card";
import React from "react";
import ClaimTable from "./claimTable";
import "../claimModule/index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../assets/agentIcon/SvgDots";
import "./index.scss";
const ClientListingCard = () => {
  const items = [{ label: "Claims", url: "/agent/clientlisting" }];
  const Initiate = { label: "Home" };

  return (
    <div className="claim__table__container mt-4">
      <div class="grid mt-3">
        <div class="col-12 md:col-6 lg:col-6">
          <label className="leadlisting__overal__container__title">
            Claims
          </label>
          <div className="mt-3">
            <BreadCrumb
              model={items}
              home={Initiate}
              className="breadCrums"
              separatorIcon={<SvgDot color={"#000"} />}
            />
          </div>
        </div>
        <div className="card__container__outer">
          <Card>
            <ClaimTable />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClientListingCard;
