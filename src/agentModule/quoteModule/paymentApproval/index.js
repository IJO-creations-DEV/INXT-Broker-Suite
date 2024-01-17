import React from 'react'
import SvgLeftArrow from '../../../assets/agentIcon/SvgLeftArrow'
import { Card } from 'primereact/card'
import { useNavigate } from 'react-router-dom'

const PaymentApproval = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/agent/clientlisting/1233')
  }
  return (
    <div>
      <div className="claim__request__upload__main__title">Clients</div>
      <div className="claim__request__upload__back__btn mt-3">
        <SvgLeftArrow />
        <div className="claim__request__upload__back__btn__title">
          Client ID :123456
        </div>
      </div>
      <Card className="mt-4 border-round-3xl">
        <img src="https://i.ibb.co/Qpnyt7y/search.png" />
        <div onClick={handleNavigate}>
          Payment for policy number:09097332342 has been processed.
          Please wait until the payment has been confirmed.
        </div>
      </Card>
    </div>
  )
}

export default PaymentApproval
