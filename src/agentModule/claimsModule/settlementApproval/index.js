import React from 'react'
import Header from '../../../components/Header'
import NavBar from '../../../components/NavBar'
import SvgLeftArrow from '../../../assets/agentIcon/SvgLeftArrow'
import { Card } from 'primereact/card'
import { useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button'

const SettlementApproval = () => {
  const navigate = useNavigate()
  const handleEdit = () => {
    navigate('/agent/claimrequest/claimdetails')
  }
  const handleSubmit = () => {
    navigate('/agent/claimrequest/settlementdetails/1223')

  }
  return (
    <div>
      <NavBar />
      <div className='claim__details__container'>
        <div className="claim__details__container__titles">Clients</div>
        <div className="claim__details__container__back__btn mt-3">
          <SvgLeftArrow />
          <div className="claim__details__container__back__btn__title">Lead ID: 12345678</div>
        </div>
        <Card>
          <div>
            Waiting for Update
          </div>
          <img src='https://i.ibb.co/4pbj1hp/waiting-for-approval.png' />
          Claim request for the policy number:099870709 has been raised.
          Kindly be patient while the Insurance Company processes the request and assigns an adjuster
          <div>
            <Button link onClick={handleEdit} >
              Edit
            </Button>
            <Button onClick={handleSubmit}>
              Proceed
            </Button>
          </div>
        </Card>
        {/* <ClaimDetailsCard /> */}
      </div>
    </div >
  )
}

export default SettlementApproval
