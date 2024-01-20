import { Card } from 'primereact/card'
import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import ClientListingViewPolicyTable from './ClientListingViewPolicyTable';
import ClientListingViewClaimTable from './ClientListingViewClaimTable';
import ClientListingViewRenewalTable from './ClientListingViewRenewaleTable';
import ClientListingViewEndorsementTable from './ClientListingViewEndorsementTable';
import SvgBackArrow from '../../../../assets/icons/SvgBackArrow';
import "../../clientView/index.scss";

const ClientListingCard = () => {
    return (
        <div className="client__listing__card__container mt-4">
            <Card style={{borderRadius:"20px"}}>
                <div style={{display:'flex',gap:'10px',margin:"16px 0px"}}>
                <SvgBackArrow/>
                <label className='carson__style'>Carson Darrin</label>
                </div>
                <TabView>
                    <TabPanel header="Policy" className='policy__header'>
                        <ClientListingViewPolicyTable />
                    </TabPanel>
                    <TabPanel header="Claim" className='policy__header'>
                        <ClientListingViewClaimTable />
                    </TabPanel>
                    <TabPanel header="Renewal" className='policy__header'>
                        <ClientListingViewRenewalTable />
                    </TabPanel>
                    <TabPanel header="Endorsement" className='policy__header'>
                        <ClientListingViewEndorsementTable />
                    </TabPanel>
                </TabView>
            </Card>
        </div>
    )
}

export default ClientListingCard