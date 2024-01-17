import { Card } from 'primereact/card'
import React, { useState } from 'react'
import InputTextField from '../../../component/inputText'
import { Checkbox } from "primereact/checkbox";
import DropdownField from '../../../component/DropdwonField';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const ClaimDetailsCard = () => {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate()
    const handleNext = () => {
        navigate('/agent/claimrequest/sendmail')
    }
    return (
        <div className="claim__details__card__container mt-4">
            <Card>
                <div className="claim__details__card__container__title">
                    Claim Request
                </div>
                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="Insurance Company Name*"
                        />
                    </div>
                </div>

                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="Policy Number"
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="Policy Holder Name"
                        />
                    </div>
                </div>

                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="House No / Unit No / Street"
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="Barangay / Subd"
                        />
                    </div>
                </div>

                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="Country"
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="Province"
                        />
                    </div>
                </div>

                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="City"
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="ZIP Code"
                        />
                    </div>
                </div>
                <div className='check__box__container mt-3'>
                    <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                    <div className='check__box__container__title'>Same as Policy Holder</div>
                </div>

                <div className="grid mt-3">
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="Driver’s name"
                        />
                    </div>
                </div>

                <div className="grid mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="House No / Unit No / Street"
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="Barangay / Subd"
                        />
                    </div>
                </div>

                <div className="grid m-0 mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <DropdownField label="Country" />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <DropdownField label="Province" />
                    </div>
                </div>

                <div className="grid m-0 mt-2">
                    <div className="col-12 md:col-6 lg:col-6">
                        <DropdownField label="City" />
                    </div>
                    <div className="col-12 md:col-6 lg:col-6">
                        <InputTextField
                            label="ZIP Code"
                        />
                    </div>
                </div>

                <div className="claim__details__card__sub__title mt-3 ml-2">Third Party Details (If Applicable)</div>
                <div>
                    <div className="grid mt-2">
                        <div className="col-12 md:col-6 lg:col-6">
                            <InputTextField
                                label="Name"
                            />
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <InputTextField
                                label="Contact Number"
                            />
                        </div>
                    </div>

                    <div className="grid mt-2">
                        <div className="col-12 md:col-6 lg:col-6">
                            <InputTextField
                                label="Plate Number"
                            />
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <InputTextField
                                label="Unit"
                            />
                        </div>
                    </div>

                    <div className="grid mt-2">
                        <div className="col-12 md:col-6 lg:col-6">
                            <InputTextField
                                label="Shop"
                            />
                        </div>
                        <div className="col-12 md:col-6 lg:col-6">
                            <InputTextField
                                label="Insurance Company Name"
                            />
                        </div>
                    </div>
                    <div className='next_but_container'>
                        <Button label='Next' onClick={handleNext} />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ClaimDetailsCard
