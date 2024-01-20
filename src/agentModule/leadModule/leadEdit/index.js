import React from 'react'
import SvgLeftArrow from '../../../assets/agentIcon/SvgLeftArrow'
import "./index.scss"
import SvgClientProfile from '../../../assets/agentIcon/SvgClientProfile'
import LeadEditCrad from './leadEditCard'

const LeadEdit = () => {
    return (
        <div className="overall_leadedit_container">
            <div className="innerlead_container mt-3">
                <SvgLeftArrow />
                <label className="arrowlabel_txt">
                    Client
                </label>
            </div>
            <div className='client__container mt-5'>
                <div className='client__svg__container'><SvgClientProfile/></div>
             <div>
                <div className='client__profile__title'>
                Carson Darrin
                </div>
                <div className='client__profile__id'>Client ID : 12345678</div>
             </div>
            </div>
            <LeadEditCrad/>
        </div>
    )
}

export default LeadEdit