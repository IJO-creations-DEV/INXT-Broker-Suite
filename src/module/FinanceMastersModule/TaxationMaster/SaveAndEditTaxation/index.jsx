import { BreadCrumb } from 'primereact/breadcrumb'
import React, { useEffect, useState } from 'react'
import NavBar from '../../../../components/NavBar'
import SvgDot from '../../../../assets/icons/SvgDot';
import "../SaveAndEditTaxation/index.scss"
import DropDowns from '../../../../components/DropDowns';
import InputField from '../../../../components/InputField';
import { Button } from 'primereact/button';
import SuccessIcon from '../../../../assets/icons/SuccessIcon';

import SvgEditicon from '../../../../assets/icons/SvgEdit';
import { Calendar } from 'primereact/calendar';
import SvgDatePicker from '../../../../assets/icons/SvgDatePicker';
import LabelWrapper from '../../../../components/LabelWrapper';
import SvgDropdown from '../../../../assets/icons/SvgDropdown';

const SaveAndEditTaxation = () => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [date, setDate] = useState(new Date());
    const items = [
        { label: 'Taxation Master', url: '/taxation' },
        { label: 'Taxation Details', url: '/saveandedittaxation' },

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
            <div className='col-12 mb-3 header__button__view'>
                <div>
                <div className='add__sub__title'>Taxation Details</div>
                <div className='mt-3'>
                    <BreadCrumb home={home} className='breadCrums__view__add__screen' model={items} separatorIcon={<SvgDot color={"#000"} />} />
                </div>
                </div>
                <div className='edit__btn__view'>
                    <SvgEditicon/>
                     <div>Edit</div>
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
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Tax Code"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Tax Rate"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Basis"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Remarks"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                    <div className='col-12 md:col-6 lg:col-6'>
                        <InputField
                            label="Taxation Description"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                    <div className='col-12 md:col-6 lg:col-6'>
                        <InputField
                            label="Taxation Short Description"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                    <div className="col-12 md:col-3 lg-col-3 input__view__reversal">
                        <div class="calender_container_claim p-0">
                            <LabelWrapper
                                label="Effective From"
                                textSize={"14px"}
                                textColor={"#000"}
                                textWeight={"500"}
                                classNames="label__sub__add"
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
                </div>
            </div>
            <div className='col-12 btn__view__Add mt-2'>
                <Button
                    label='Save & Exit'
                    className='save__add__btn'
                    onClick={() => setVisiblePopup(true)}
                />
            </div>
            <div className="col-12">
                {visiblePopup && (
                    <div className="grid custom-modal-overlay">
                        <div className="col-10 md:col-2 lg:col-2 custom-modal">
                            <div className='popup__text'>
                            Tax code 

                               <div className='popup__token__text'> Tax00123 <span style={{color:'#000'}}>is</span> </div>
                               Successfully added
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
export default SaveAndEditTaxation