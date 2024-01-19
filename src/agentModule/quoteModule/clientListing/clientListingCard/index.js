import { Card } from 'primereact/card'
import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import ClientListingTable from './ClientListingAllTable';
import ClientListingMotorTable from './ClientListingMotorTable';
import ClientListingTravelTable from './ClientListingTravelTable';
import ClientListingHomeTable from './ClientListingHomeTable';

const ClientListingCard = () => {
    return (
        <div className="lead__listing__card__container mt-4">
            <Card>
                <TabView>
                    <TabPanel header="All">
                        <ClientListingTable />
                    </TabPanel>
                    <TabPanel header="Individual">
                        <ClientListingMotorTable />
                    </TabPanel>
                    <TabPanel header="Company">
                        <ClientListingTravelTable />
                    </TabPanel>
                    {/* <TabPanel header="Property">
                        <ClientListingHomeTable />
                    </TabPanel> */}
                </TabView>
            </Card>
        </div>
    )
}

export default ClientListingCard