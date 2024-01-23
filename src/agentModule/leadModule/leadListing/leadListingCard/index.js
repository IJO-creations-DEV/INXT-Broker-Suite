import { Card } from 'primereact/card'
import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import LeadListingTable from './LeadListingAllTable';
import LeadListingMotorTable from './LeadListingMotorTable';
import LeadListingTravelTable from './LeadListingTravelTable';
import LeadListingHomeTable from './LeadListingHomeTable';
import { useSelector } from "react-redux";


const LeadListingCard = () => {  
    const { allClientList,paymentSearchList } = useSelector(({ leadReducers,agentPaymentMainReducers}) => {
    return {
      allClientList: leadReducers?.leadtabledata,
      paymentSearchList: leadReducers?.paymentSearchList,
    };
  });

    return (
        <div className="lead__listing__card__container mt-4">
            <Card>
                <TabView>
                    <TabPanel header="All">
                        <LeadListingTable TableData={allClientList} paymentSearchList={paymentSearchList}/>
                    </TabPanel>
                    <TabPanel header="Motor">
                        <LeadListingMotorTable TableData={allClientList} paymentSearchList={paymentSearchList}/>
                    </TabPanel>
                    <TabPanel header="Travel">
                        <LeadListingTravelTable TableData={allClientList} paymentSearchList={paymentSearchList}/>
                    </TabPanel>
                    <TabPanel header="Property">
                        <LeadListingHomeTable TableData={allClientList} paymentSearchList={paymentSearchList}/>
                    </TabPanel>
                </TabView>
            </Card>
        </div>
    )
}

export default LeadListingCard