import React from 'react'
import SvgLeftArrow from '../../../assets/agentIcon/SvgLeftArrow'
import { Card } from 'primereact/card'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'primereact/button'
import './index.scss'


const RequestApproval = () => {
  const params = useParams()
  const { id } = params;
  const navigate = useNavigate()
  const handleEdit = () => {
    navigate('/agent/claimrequest/claimdetails')
  }
  const handleSubmit = () => {
    navigate('/agent/claimrequest/adjustersubmission')

  }
  return (
    <div className='claim__approval__overall'>
      <div className="claim__requestapproval__upload__main__title">Clients</div>
      <div className="claim__request__uploadarrow__back__btn mt-3">
        <SvgLeftArrow />
        <div className="claim__request__upload__back__btn__title">
          Client ID :{id}
        </div>
      </div>
      <Card className="mt-4 border-round-3xl claimrequest__overall__card">

        <div >
          <div className='claim__title_txt mt-6' >
            Waiting for Update
          </div>
          <div className='claimtitle__img__overallcontainer mt-4'>
          <img src='https://i.ibb.co/4pbj1hp/waiting-for-approval.png' className='claimtitle__img__container' />
          </div>
          <div className='claimtitle__txt_container mt-6'>
        <div>  Claim request for the policy number:099870709 has been raised.</div>
        <div>  Kindly be patient while the Insurance Company processes the request and assigns an adjuster</div>
          </div>
        </div>
        <div className='claimtitle__butt_container mt-8'>
          <Button link onClick={handleEdit} className='claim__back__but' >
            Edit
          </Button>
          <Button onClick={handleSubmit} className='claim__snd__but'>
            Proceed
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default RequestApproval
