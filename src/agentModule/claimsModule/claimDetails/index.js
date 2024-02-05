import React from 'react'
import SvgLeftArrow from '../../../assets/agentIcon/SvgLeftArrow'
import "./index.scss"
import ClaimDetailsCard from './claimDetailsCard'
import { useNavigate } from 'react-router-dom'
const ClaimDetails = () => {
  const navigate= useNavigate()
  return (
    <div className='claim__details__container'>
      <div className="claim__details__container__titles">Clients</div>
      <div className="claim__details__container__back__btn mt-3">
        <div onClick={()=>navigate("/agent/clientlisting")}>
        <SvgLeftArrow />
        </div>
        <div className="claim__details__container__back__btn__title">Client ID: 12345678</div>
      </div>
      <ClaimDetailsCard />
    </div>
  )
}

export default ClaimDetails
