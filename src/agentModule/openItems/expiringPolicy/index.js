import React from 'react'
import "./index.scss"
import SvgLeftArrow from '../../../assets/agentIcon/SvgLeftArrow'
import ExpiringPolicyCard from './expiringPolicyCard'

const ExpiringPolicy = () => {

  return (
    <div className="expiring__policy__container">
      <div className="expiring__policy__container__titles">Upcoming Events</div>
      <div className="expiring__policy__container__back__btn mt-4">
        <SvgLeftArrow />
        <div className="expiring__policy__container__back__btn__title">
          Open Items
        </div>
      </div>
      <ExpiringPolicyCard/>
    </div>
  )
}

export default ExpiringPolicy
