import { Card } from 'primereact/card'
import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import ClientListingTable from './ClientListingViewPolicyTable';
import ClientListingClaimTable from './ClientListingViewClaimTable';
import ClientListingRenewalTable from './ClientListingViewRenewaleTable';
import ClientListingEndorsementTable from './ClientListingViewEndorsementTable';

const ClientListingCard = () => {
    return (
        <div className="client__listing__card__container mt-4">
            <Card>
                <TabView>
                    <TabPanel header="Policy">
                        <ClientListingTable />
                    </TabPanel>
                    <TabPanel header="Claim">
                        <ClientListingClaimTable />
                    </TabPanel>
                    <TabPanel header="Renewal">
                        <ClientListingRenewalTable />
                    </TabPanel>
                    <TabPanel header="Endorsement">
                        <ClientListingEndorsementTable />
                    </TabPanel>
                </TabView>
            </Card>
        </div>
    )
}

export default ClientListingCard