import { Card } from "primereact/card";
import React from "react";
import PolicyTable from "../policyModule/policyTable/index";
import "../claimModule/index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../assets/agentIcon/SvgDots";

const ClientListingCard = () => {
  const items = [{ label: "Policy", url: "/agent/clientlisting" }];
  const Initiate = { label: "Home" };

  return (
    <div className="policy__table__container mt-4">
      <div class="grid mt-3">
        <div class="col-12 md:col-6 lg:col-6">
          <label className="leadlisting__overal__container__title">
            Policy
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
        <Card style={{ borderRadius: "20px" }}>
          <PolicyTable />
        </Card>
        </div>
      </div>
    </div>
  );
};

export default ClientListingCard;
