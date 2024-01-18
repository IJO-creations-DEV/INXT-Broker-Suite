import { Card } from 'primereact/card'
import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import ClientListingTable from './ClientListingViewPolicyTable';
import ClientListingClaimTable from './ClientListingViewClaimTable';
import ClientListingRenewalTable from './ClientListingViewRenewaleTable';
import ClientListingEndorsementTable from './ClientListingViewEndorsementTable';
import SvgBackArrow from '../../../../assets/icons/SvgBackArrow';

const ClientListingCard = () => {
    return (
        <div className="client__listing__card__container mt-4">
            <Card>
                <div style={{display:'flex',gap:'10px'}}>
                <SvgBackArrow/>
                <label className='carson__style'>Carson Darrin</label>
                </div>
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