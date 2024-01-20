import { Card } from 'primereact/card'
import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import LeadListingTable from './LeadListingAllTable';
import LeadListingMotorTable from './LeadListingMotorTable';
import LeadListingTravelTable from './LeadListingTravelTable';
import LeadListingHomeTable from './LeadListingHomeTable';

const LeadListingCard = () => {
    return (
        <div className="lead__listing__card__container mt-4">
            <Card>
                <TabView>
                    <TabPanel header="All">
                        <LeadListingTable />
                    </TabPanel>
                    <TabPanel header="Motor">
                        <LeadListingMotorTable />
                    </TabPanel>
                    <TabPanel header="Travel">
                        <LeadListingTravelTable />
                    </TabPanel>
                    <TabPanel header="Property">
                        <LeadListingHomeTable />
                    </TabPanel>
                </TabView>
            </Card>
        </div>
    )
}

export default LeadListingCard