import { Card } from 'primereact/card'
import React from 'react'
import DropdownField from '../../../component/DropdwonField'
import InputTextField from '../../../component/inputText'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'

const PolicyDetailsCard = () => {
    const navigate = useNavigate();
    
    const handleclick = () => {
        navigate("/agent/createquote/coveragedetails");
    }


    return (
        <div className='policy__details__card__container mt-4'>
            <Card>
                <div className="policy__details__card__container__title">
                    Create Quote
                </div>
                <div className="policy__details__card__container__sub__title mt-2 mb-2">
                    Policy Details
                </div>

                <div className="grid mt-2">
                    <div className="col-12 md:col-12 lg:col-12">
                        <DropdownField label="Insurance Company Name*" />
                    </div>
                </div>

                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <DropdownField label="Insurance Policy Type" />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <DropdownField label="Account Code" />
                    </div>
                </div>

                <div className='policy__details__card__sub__title mt-2'>
                    Insurance Vehicle Details
                </div>

                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <DropdownField label="Vehicle Brand" />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <DropdownField label="Model Year" />
                    </div>
                </div>

                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <DropdownField label="Vehicle Model" />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <DropdownField label="Model Variant" />
                    </div>
                </div>

                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <DropdownField label="Vehicle Color" />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="Seating Capacity"
                        />
                    </div>
                </div>
                <div className='policy__details__card__btn__container'>
                    <div className="next__btn__container mt-2 mr-1">
                        <Button className="next__btn" onClick={() => { handleclick() }}>Next</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default PolicyDetailsCard
