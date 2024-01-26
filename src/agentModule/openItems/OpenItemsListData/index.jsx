import React from 'react';
import "../OpenItemsListData/index.scss";
import SvgGoBack from '../../../assets/agentIcon/SvgGoBack';
import SvgArrow from '../../../assets/agentIcon/SvgArrow';
import SvgMotorTable from '../../../assets/agentIcon/SvgMotorTable';
import { data } from './data';
import { useNavigate } from 'react-router-dom';
import { mock } from './mock';


const OpenItemsListData = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/agent/openitems/expiringpolicy")
    }
    return (
        <div className="grid m-0 open_item_container">
            <div className="col-12 open_item_title">
                Open Items
            </div>
            <div className="col-12 open__item__goBack">
                <SvgGoBack />
                Home
            </div>
            <div className="col-6 open__item__card__view" >

                {data.map((val, index) => {
                    return (
                        <div className="grid m-0" key={index} >
                            <div className="col-12 md:col-12 lg:col-12 xl:col-12 open__item__sub__data">
                                <div className='item_header'>
                                    <div className='item_status'>
                                        <div className='svg_icon'>{val.icon}</div>
                                        {val.status}
                                    </div>
                                    <div className='item_count'>{val.count}</div>
                                </div>
                                <div className="body__card__view">
                                    <div>
                                        <div className='item__name'>
                                            {val.name}
                                        </div>
                                        <div className='item__client__id'>
                                            Client ID: {val.clientId}
                                        </div>
                                    </div>
                                    <div className='policy__data__view'>
                                        <div><SvgMotorTable /></div>
                                        <div className='item_policy_no'>{val.policyNo}</div>
                                    </div>
                                </div>
                                <div className="body__card__view">
                                    <div>
                                        <div className='item__name'>
                                            {val.name}
                                        </div>
                                        <div className='item__client__id'>
                                            Client ID: {val.clientId}
                                        </div>
                                    </div>
                                    <div className='policy__data__view'>
                                        <div><SvgMotorTable /></div>
                                        <div className='item_policy_no'>{val.policyNo}</div>
                                    </div>
                                </div>
                                <div onClick={handleNavigate} className="bottom__view__card">
                                    See More
                                    <SvgArrow />
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
            <div className="col-6 open__item__card__view" >

                {mock.map((val, index) => {
                    return (
                        <div className="grid m-0" key={index} >
                            <div className="col-12 md:col-12 lg:col-12 xl:col-12 open__item__sub__data">
                                <div className='item_header'>
                                    <div className='item_status'>
                                        <div className='svg_icon'>{val.icon}</div>
                                        {val.status}
                                    </div>
                                    <div className='item_count'>{val.count}</div>
                                </div>
                                <div className="body__card__view">
                                    <div>
                                        <div className='item__name'>
                                            {val.name}
                                        </div>
                                        <div className='item__client__id'>
                                            Client ID: {val.clientId}
                                        </div>
                                    </div>
                                    <div className='policy__data__view'>
                                        <div><SvgMotorTable /></div>
                                        <div className='item_policy_no'>{val.policyNo}</div>
                                    </div>
                                </div>
                                <div className="body__card__view">
                                    <div>
                                        <div className='item__name'>
                                            {val.name}
                                        </div>
                                        <div className='item__client__id'>
                                            Client ID: {val.clientId}
                                        </div>
                                    </div>
                                    <div className='policy__data__view'>
                                        <div><SvgMotorTable /></div>
                                        <div className='item_policy_no'>{val.policyNo}</div>
                                    </div>
                                </div>
                                <div onClick={handleNavigate} className="bottom__view__card">
                                    See More
                                    <SvgArrow />
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export default OpenItemsListData;
