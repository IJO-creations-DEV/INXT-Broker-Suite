import { Card } from "primereact/card";
import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import ClientListingAllCategory from "./ClientListingAllCategory";
import ClientListingIndividualCategory from "./ClientListingIndividualCategory";
import ClientListingCompanyCategory from "./ClientListingCompanyCategory";
import { useSelector } from "react-redux";


const ClientListingCard = () => {
  const { allClientList,paymentSearchList } = useSelector(({ clientsReducers,agentPaymentMainReducers}) => {
    return {
      allClientList: clientsReducers?.clientListTable,
      paymentSearchList: clientsReducers?.paymentSearchList,
    };
  });
  console.log(allClientList,"allClientList");
  return (
    <div className="lead__listing__card__container mt-4">
      <Card>
        <TabView>
          <TabPanel header="All">
            <ClientListingAllCategory TableData={allClientList} paymentSearchList={paymentSearchList}/>
          </TabPanel>
          <TabPanel header="Individual">
            <ClientListingIndividualCategory TableData={allClientList} paymentSearchList={paymentSearchList}/>
          </TabPanel>
          <TabPanel header="Company">
            <ClientListingCompanyCategory TableData={allClientList} paymentSearchList={paymentSearchList}/>
          </TabPanel>
        </TabView>
      </Card>
    </div>
  );
};

export default ClientListingCard;
