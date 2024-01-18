import { Card } from 'primereact/card'
import React,{useRef} from 'react'
import InputTextField from '../../../component/inputText'
import DatepickerField from '../../../component/datePicker'
import SvgBlueArrow from '../../../../assets/agentIcon/SvgBlueArrow'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
import SvgDots from '../../../../assets/agentIcon/SvgDots'
import SvgDot from '../../../../assets/icons/SvgDot'
import { TieredMenu } from 'primereact/tieredmenu';

const PolicyDetailedViewCard = () => {
    const navigate = useNavigate();
    const menu = useRef(null);
    const handleclick = () => {
        navigate("/agent/policy/paymentconfirmation");
    }
    const items = [
        {
            label: 'File',
            icon: 'pi pi-fw pi-file',
        },
        {
            label: 'File',
            icon: 'pi pi-fw pi-file',
        },
        {
            label: 'File',
            icon: 'pi pi-fw pi-file',
        },
    ]

    return (
        <div className='policy__detail__view__card__container mt-4'>
            <Card style={{paddingBottom:'36px'}}>
                <div className='policy_details_header_flex'>
                <div className="policy__details__card__view__container__title">
                    Policy details
                </div>
                <div onClick={(e) => menu.current.toggle(e)} >
                <SvgDots/>
                <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
                </div>
                </div>
                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="Policy Number"
                        />
                    </div>
                </div>

                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <DatepickerField label="Production" />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <DatepickerField label="Inception" />
                    </div>
                </div>


                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <DatepickerField label="Issued Date" />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <DatepickerField label="Expiry" />
                    </div>
                </div>

                <div className='policy__detail__view__title mt-2'>
                    Documents
                </div>
                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <div className='policy__detail__view__box'>
                            <div className="grid mt-2">
                                <div className="col-12 md:col-6 lg:col-6">
                                    <div className='policy__detail__view__box__title'>Policy</div>
                                </div>
                                <div className="col-12 md:col-6 lg:col-6">
                                    <div className='policy__detail__view__box__container'>
                                    <div className='policy__detail__view__box__sub__title'>View</div>
                                    <SvgBlueArrow/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <div className='policy__detail__view__box'>
                        <div className="grid mt-2">
                                <div className="col-12 md:col-6 lg:col-6">
                                    <div className='policy__detail__view__box__title'>Invoice</div>
                                </div>
                                <div className="col-12 md:col-6 lg:col-6">
                                    <div className='policy__detail__view__box__container'>
                                    <div className='policy__detail__view__box__sub__title'>View</div>
                                    <SvgBlueArrow/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='policy__detail__view__btn__container mt-4'>
                <div className="paylater__btn__container">
              <Button className="back__btn">Pay Later</Button>
            </div>
            <div className="proceed__btn__container">
              <Button className="next__btn" onClick={()=>{handleclick()}}>Proceed to payment</Button>
            </div>
            </div> */}
            </Card>
        </div>
    )
}

export default PolicyDetailedViewCard
