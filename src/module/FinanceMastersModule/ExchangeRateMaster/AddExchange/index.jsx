import { BreadCrumb } from 'primereact/breadcrumb'
import React, { useEffect, useState } from 'react'
import NavBar from '../../../../components/NavBar'
import SvgDot from '../../../../assets/icons/SvgDot';
import "../AddExchange/index.scss"
import DropDowns from '../../../../components/DropDowns';
import InputField from '../../../../components/InputField';
import { Button } from 'primereact/button';
import SuccessIcon from '../../../../assets/icons/SuccessIcon';
import SvgDropdown from '../../../../assets/icons/SvgDropdown';
import LabelWrapper from '../../../../components/LabelWrapper';
import SvgDatePicker from '../../../../assets/icons/SvgDatePicker';
import { Calendar } from 'primereact/calendar';

const AddExchange = () => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [date, setDate] = useState(new Date());
    const items = [
        { label: 'Exchange Rate', url: '/exchangerate' },
        { label: 'Add Exchange Rate', url: '/saveandaddexchange' },

    ];
    const home = { label: "Master" };
    useEffect(() => {
        const timerId = setTimeout(() => {
            setVisiblePopup(false);
        }, 2000);

        return () => clearTimeout(timerId);
    }, [visiblePopup]);

    return (
        <div className='grid sub__add__container'>
            <div className='col-12'>
                <NavBar />
            </div>
            <div className='col-12 mb-2'>
                <div className='add__sub__title'>Add Exchange Rate</div>
                <div className='mt-3'>
                    <BreadCrumb home={home} className='breadCrums__view__add__screen' model={items} separatorIcon={<SvgDot color={"#000"} />} />
                </div>
            </div>
            <div className='col-12 m-0 '>
                <div className='grid add__account__sub__container p-3'>
                    <div class="sm-col-12  md:col-3 lg-col-4 col-offset-9">
                        <DropDowns
                            className="dropdown__add__sub"
                            label="Status"
                            classNames='label__sub__add'
                            // value={selectedItem}
                            // onChange={(e) => setSelectedItem(e.value)}
                            // options={item}
                            // optionLabel="name"
                            placeholder={"Select"}
                            dropdownIcon={<SvgDropdown color={"#000"} />}
                        />
                    </div>
                    <div className="col-12 md:col-3 lg-col-3 input__view__reversal">
                        <div class="calender_container_claim p-0">
                            <LabelWrapper
                                label="Effective From"
                                textSize={"14px"}
                                textColor={"#000"}
                                textWeight={"500"}
                            >
                                <Calendar
                                 
                                    value={date}
                                    onChange={(e) => setDate(e.value)}
                                    showIcon
                                    className="calender_field_claim "
                                    // placeholder={translate("claimstatus")["Choose Date"]}
                                />
                                <div className="calender_icon_claim">
                                    <SvgDatePicker />
                                </div>
                            </LabelWrapper>
                        </div>
                    </div>
                    <div className="col-12 md:col-3 lg-col-3 input__view__reversal">
                        <div class="calender_container_claim p-0">
                            <LabelWrapper
                                label="Effective To"
                                textSize={"14px"}
                                textColor={"#000"}
                                textWeight={"500"}
                                // className="label__sub__add"
                                classNames="label__sub__add"
                            >
                                <Calendar
                                    value={date}
                                    onChange={(e) => setDate(e.value)}
                                    showIcon
                                    className="calender_field_claim"
                                    // placeholder={translate("claimstatus")["Choose Date"]}
                                />
                                <div className="calender_icon_claim">
                                    <SvgDatePicker />
                                </div>
                            </LabelWrapper>
                        </div>
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Sub Account Code"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <DropDowns
                            label="Currency Code"
                            className='dropdown__add__sub'
                            classNames='label__sub__add'
                            placeholder={"Select"}
                            dropdownIcon={<SvgDropdown color={"#000"} />}
                        />
                    </div>
                    
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Currency  description"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <DropDowns
                            label="To Currency Code"
                            className='dropdown__add__sub'
                            classNames='label__sub__add'
                            placeholder={"Select"}
                            dropdownIcon={<SvgDropdown color={"#000"} />}
                        />
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="To Currency  description"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Exchange Rate"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                </div>
            </div>
            <div className='col-12 btn__view__Add mt-2'>
                <Button
                    label='Save'
                    className='save__add__btn'
                    onClick={() => setVisiblePopup(true)}
                />
            </div>
            <div className="col-12">
                {visiblePopup && (
                    <div className="grid custom-modal-overlay">
                        <div className="col-10 md:col-2 lg:col-2 custom-modal">
                            <div className='popup__text'>
                            successfully added.
                            </div>
                            <div className='popup__icon'>
                                <SuccessIcon

                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

}
export default AddExchange