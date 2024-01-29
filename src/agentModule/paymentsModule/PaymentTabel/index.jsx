import { Card } from 'primereact/card'
import { TabPanel, TabView } from 'primereact/tabview'
import React from 'react'
import PaidListTabelData from './PaidListTabelData'
import PendingListTabelData from './PendingListTabelData'
import ReviewingListTabelData from './ReviewingListTabelData'
import { useSelector } from 'react-redux'

const PyamentTabelCard = () => {
    const { paymenttabledata, paymentSearchList, loading } = useSelector(
        ({ agentPaymentMainReducers }) => {
          return {
            loading: agentPaymentMainReducers?.loading,
            paymenttabledata: agentPaymentMainReducers?.paymenttabledata,
            paymentSearchList: agentPaymentMainReducers?.paymentSearchList,
          };
        }
      );
    return (
        <div className="lead__listing__card__container mt-4">
            <Card>
                <TabView>
                    <TabPanel header="Paid">
                        <PaidListTabelData paymenttabledata={paymenttabledata} paymentSearchList={paymentSearchList}/>
                    </TabPanel>
                    <TabPanel header="Pending">
                        <PendingListTabelData paymenttabledata={paymenttabledata} paymentSearchList={paymentSearchList}/>
                    </TabPanel>
                    <TabPanel header="Reviewing">
                        <ReviewingListTabelData paymenttabledata={paymenttabledata} paymentSearchList={paymentSearchList}/>
                    </TabPanel>
                </TabView>
            </Card>
        </div>
    )
}

export default PyamentTabelCard