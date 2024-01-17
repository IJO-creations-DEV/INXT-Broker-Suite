import { Card } from 'primereact/card'
import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import LeadListingTable from './leadListingtable';

const LeadListingCard = () => {
    return (
        <div className="lead__listing__card__container mt-4">
            <Card>
                <TabView>
                    <TabPanel header="All">
                        <LeadListingTable/>
                    </TabPanel>
                    <TabPanel header="Motor">
                    </TabPanel>
                    <TabPanel header="Travel">
                    </TabPanel>
                    <TabPanel header="Property">
                    </TabPanel>
                </TabView>
            </Card>
        </div>
    )
}

export default LeadListingCard