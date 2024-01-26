import { Card } from 'primereact/card'
import { TabPanel, TabView } from 'primereact/tabview'
import React from 'react'
import PaidListTabelData from './PaidListTabelData'
import PendingListTabelData from './PendingListTabelData'
import ReviewingListTabelData from './ReviewingListTabelData'

const PyamentTabelCard = () => {
    return (
        <div className="lead__listing__card__container mt-4">
            <Card>
                <TabView>
                    <TabPanel header="Paid">
                        <PaidListTabelData />
                    </TabPanel>
                    <TabPanel header="Pending">
                        <PendingListTabelData />
                    </TabPanel>
                    <TabPanel header="Reviewing">
                        <ReviewingListTabelData />
                    </TabPanel>
                </TabView>
            </Card>
        </div>
    )
}

export default PyamentTabelCard