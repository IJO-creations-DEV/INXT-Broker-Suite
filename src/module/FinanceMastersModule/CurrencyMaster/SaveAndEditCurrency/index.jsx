import { BreadCrumb } from 'primereact/breadcrumb'
import React, { useEffect, useState } from 'react'
import NavBar from '../../../../components/NavBar'
import SvgDot from '../../../../assets/icons/SvgDot';
import "../SaveAndEditCurrency/index.scss"
import DropDowns from '../../../../components/DropDowns';
import InputField from '../../../../components/InputField';
import { Button } from 'primereact/button';
import SuccessIcon from '../../../../assets/icons/SuccessIcon';

import SvgEditicon from '../../../../assets/icons/SvgEdit';
import SvgDropdown from '../../../../assets/icons/SvgDropdown';

const SaveAndEditCurrency = () => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const items = [
        { label: 'Currency', url: '/addcurrency' },
        { label: 'Currency Details', url: '/saveandeditcurrency' },
       

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
                <div className='add__sub__title'>Currency Details</div>
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
                            label="Currency Code"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <DropDowns
                            label="ISO code"
                            className='dropdown__add__sub'
                            classNames='label__sub__add'
                            placeholder={"Select"}
                            dropdownIcon={<SvgDropdown color={"#000"} />}
                        />
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Smallest Unit"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Unit Description"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                    <div className='col-12 md:col-6 lg:col-6'>
                        <InputField
                            label="Currency Description"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                    <div className='col-12 md:col-6 lg:col-6'>
                        <InputField
                            label="Currency Short Description"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Currency Format"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Number of Decimals"
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
export default SaveAndEditCurrency