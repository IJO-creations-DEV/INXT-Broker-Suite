import React from 'react'
import SvgLeftArrow from '../../../assets/agentIcon/SvgLeftArrow'
import "./index.scss"
import ClaimDetailsCard from './claimDetailsCard'

const ClaimDetails = () => {
  return (
    <div className='claim__details__container'>
      <div className="claim__details__container__titles">Clients</div>
      <div className="claim__details__container__back__btn mt-3">
        <SvgLeftArrow />
        <div className="claim__details__container__back__btn__title">Lead ID: 12345678</div>
      </div>
      <ClaimDetailsCard />
    </div>
  )
}

export default ClaimDetails
