import React from 'react'
import SvgLeftArrow from '../../../assets/agentIcon/SvgLeftArrow'
import { Card } from 'primereact/card'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'primereact/button'

const RequestApproval = () => {
  const params = useParams()
  const { id } = params;
  const navigate = useNavigate()
  const handleEdit = () => {
    navigate('/agent/claimrequest/claimdetails')
  }
  const handleSubmit = () => {
    navigate('/agent/claimrequest/settlementapproval')

  }
  return (
    <div>
      <div className="claim__request__upload__main__title">Clients</div>
      <div className="claim__request__upload__back__btn mt-3">
        <SvgLeftArrow />
        <div className="claim__request__upload__back__btn__title">
          Client ID :{id}
        </div>
      </div>
      <Card className="mt-4 border-round-3xl">

        <div >
          <div>
            Waiting for Update
          </div>
          <img src='https://i.ibb.co/4pbj1hp/waiting-for-approval.png' />
          Claim request for the policy number:099870709 has been raised.
          Kindly be patient while the Insurance Company processes the request and assigns an adjuster
        </div>
        <div>
          <Button link onClick={handleEdit} >
            Edit
          </Button>
          <Button onClick={handleSubmit}>
            Proceed
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default RequestApproval
