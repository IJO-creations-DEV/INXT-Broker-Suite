import { Card } from "primereact/card";
import React, { useEffect } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import ClientListingAllCategory from "./ClientListingAllCategory";
import ClientListingIndividualCategory from "./ClientListingIndividualCategory";
import ClientListingCompanyCategory from "./ClientListingCompanyCategory";
import { useSelector } from "react-redux";


const ClientListingCard = () => {
  const { clientListTable,paymentSearchList } = useSelector(({ clientsReducers,agentPaymentMainReducers}) => {
    return {
      clientListTable: clientsReducers?.clientListTable,
      paymentSearchList: clientsReducers?.paymentSearchList,
    };
  });
  console.log(clientListTable,"clientListTable");
  
  return (
    <div className="lead__listing__card__container mt-4">
      <Card>
        <TabView>
          <TabPanel header="All">
            <ClientListingAllCategory data={"All"} clientListTable={clientListTable} paymentSearchList={paymentSearchList}/>
          </TabPanel>
          <TabPanel header="Individual">
            <ClientListingIndividualCategory  data={"Individual"} clientListTable={clientListTable} paymentSearchList={paymentSearchList}/>
          </TabPanel>
          <TabPanel header="Company">
            <ClientListingCompanyCategory data={"Company"}  clientListTable={clientListTable} paymentSearchList={paymentSearchList}/>
          </TabPanel>
        </TabView>
      </Card>
    </div>
  );
};

export default ClientListingCard;
