import { BreadCrumb } from 'primereact/breadcrumb'
import React, { useRef } from 'react'
import SvgDot from '../../../../assets/icons/SvgDot';
import "../AddCurrency/index.scss"
import DropDowns from '../../../../components/DropDowns';
import InputField from '../../../../components/InputField';
import { Button } from 'primereact/button';
import SvgDropdown from '../../../../assets/icons/SvgDropdown';
import CustomToast from '../../../../components/Toast';
import { useNavigate } from 'react-router-dom';
import SvgBack from '../../../../assets/icons/SvgBack';

const ViewCurrency = () => {
    const toastRef = useRef(null);
    const navigate = useNavigate();
    const items = [
        { label: 'Currency', url: '/master/finance/currency' },
        { label: 'Currency Details', url: '/master/finance/currency/viewcurrency' },

    ];
    const home = { label: "Master" };


    return (
        <div className='grid sub__add__container'>
              <CustomToast ref={toastRef} message="Add Currency Successfully"/>
            <div className='col-12 mb-2'>
            <div className='back_container'>
<span onClick={()=>navigate(-1)}><SvgBack/></span>
                <div className='add__sub__title'>Currency Details</div></div>
                <div className='mt-3'>
                    <BreadCrumb home={home} className='breadCrums__view__add__screen' model={items} separatorIcon={<SvgDot color={"#000"} />} />
                </div>
            </div>
            <div className='add__account__sub__container p-3 '>
                <div className='grid'>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Currency Code"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                            disabled={true}
                        />
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <DropDowns
                            label="ISO code"
                            className='dropdown__add__sub'
                            classNames='label__sub__add'
                            placeholder={"Select"}
                            dropdownIcon={<SvgDropdown color={"#000"} />}
                            disabled={true}
                        />
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Smallest Unit"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                            disabled={true}
                        />
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Unit Description"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                            disabled={true}
                        />
                    </div>
                    </div>
                    <div className='grid'>
                    <div className='col-12 md:col-6 lg:col-6'>
                        <InputField
                            label="Currency Name"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                            disabled={true}
                            
                        />
                    </div>
                    <div className='col-12 md:col-6 lg:col-6'>
                        <InputField
                            label="Description"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                            disabled={true}
                        />
                    </div>
                    </div>
                    <div className='grid '>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Currency Format"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                            disabled={true}
                        />
                    </div>
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Number of Decimals"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                            disabled={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ViewCurrency