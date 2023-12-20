import { BreadCrumb } from 'primereact/breadcrumb'
import React, { useEffect, useState } from 'react'
import NavBar from '../../../../components/NavBar'
import SvgDot from '../../../../assets/icons/SvgDot';
import "../SaveAndEdit/index.scss"
import DropDowns from '../../../../components/DropDowns';
import InputField from '../../../../components/InputField';
import { Button } from 'primereact/button';
import SuccessIcon from '../../../../assets/icons/SuccessIcon';

import SvgEditicon from '../../../../assets/icons/SvgEdit';
import SvgDropdown from '../../../../assets/icons/SvgDropdown';

const SaveAndEdit = () => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const items = [
        { label: 'Sub Account', url: '/subaccount' },
        { label: 'Add Sub Account', url: '/subadd' },

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
                <div className='add__sub__title'>Sub Account Details</div>
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
                    <div className='col-9' style={{ display: 'block' }}>
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <DropDowns
                            label="Status"
                            className='dropdown__add__sub'
                            classNames='label__sub__add'
                            dropdownIcon={<SvgDropdown color={"#000"} />}

                        />
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
                            label="Main Account Code"
                            className='dropdown__add__sub'
                            classNames='label__sub__add'
                            dropdownIcon={<SvgDropdown color={"#000"} />}
                        />
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Main Account Description"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                    <div className='col-12 md:col-6 lg:col-6'>
                        <InputField
                            label="Description"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                    <div className='col-12 md:col-6 lg:col-6'>
                        <InputField
                            label="Short Description"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
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
                                Sub Account code
                               <div className='popup__token__text'> Sub00123 <span style={{color:'#000'}}>is</span> </div>
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
export default SaveAndEdit