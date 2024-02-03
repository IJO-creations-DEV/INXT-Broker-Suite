import { Card } from "primereact/card";
import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import ClientListingViewPolicyTable from "./ClientListingViewPolicyTable";
import ClientListingViewClaimTable from "./ClientListingViewClaimTable";
import ClientListingViewRenewalTable from "./ClientListingViewRenewaleTable";
import ClientListingViewEndorsementTable from "./ClientListingViewEndorsementTable";

import "../../clientView/index.scss";
import SvgLeftArrow from "../../../../assets/agentIcon/SvgLeftArrow";
import { useNavigate } from "react-router-dom";

const ClientListingCard = ({ action }) => {
  const navigate = useNavigate();
  const handleClientNavigation = () => {
    navigate("/agent/clientlisting");
  };
  return (
    <div className="client__listing__card__container mt-4">
      <Card style={{ borderRadius: "20px" }}>
        <div
          onClick={handleClientNavigation}
          className="cursor-pointer arrow__outer"
        >
          <SvgLeftArrow />
          <div className="carson__style">Carson Darrin</div>
        </div>
        <TabView>
          <TabPanel header="Policy" className="policy__header">
            <ClientListingViewPolicyTable action={action} />
          </TabPanel>
          <TabPanel header="Claim" className="policy__header">
            <ClientListingViewClaimTable />
          </TabPanel>
          <TabPanel header="Renewal" className="policy__header">
            <ClientListingViewRenewalTable />
          </TabPanel>
          <TabPanel header="Endorsement" className="policy__header">
            <ClientListingViewEndorsementTable />
          </TabPanel>
        </TabView>
      </Card>
    </div>
  );
};

export default ClientListingCard;
