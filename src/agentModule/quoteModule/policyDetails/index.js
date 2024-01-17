import React from 'react'
import "./index.scss"
import SvgLeftArrow from '../../../assets/agentIcon/SvgLeftArrow'
import PolicyDetailsCard from './policyDetailsCard'

const PolicyDetails = () => {
  return (
    <div className='policy__container'>
      <div className='policy__container__title'>
      Leads
      </div>
      <div className='policy__container__back__btn__container mt-3'>
      <SvgLeftArrow />
      <div className='policy__container__back__btn__title'>Lead ID: 12345678</div>
      </div>
      <PolicyDetailsCard/>
    </div>
  )
}

export default PolicyDetails
