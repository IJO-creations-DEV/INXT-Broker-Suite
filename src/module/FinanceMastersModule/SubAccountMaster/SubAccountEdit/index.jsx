import { BreadCrumb } from 'primereact/breadcrumb'
import React, { useEffect, useState } from 'react'
import NavBar from '../../../../components/NavBar'
import SvgDot from '../../../../assets/icons/SvgDot';
import "./index.scss"
import DropDowns from '../../../../components/DropDowns';
import InputField from '../../../../components/InputField';
import { Button } from 'primereact/button';
import SuccessIcon from '../../../../assets/icons/SuccessIcon';
import SvgDropdown from '../../../../assets/icons/SvgDropdown';
import { Card } from 'primereact/card';
import { MultiSelect } from 'primereact/multiselect';
import { useNavigate } from "react-router-dom";
import SvgBackicon from '../../../../assets/icons/SvgBackicon';

const SubAdd = () => {
    const navigation = useNavigate();
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedOption, setSelectedOption] = useState([{name:"Main0123"},{name:"Main0126"},{name:"Main0128"}]);
    const [selectedOption1, setSelectedOption1] = useState([{name:"INR"},{name:"EUR"},{name:"AUD"}]);
    const handleDropdownChange = (e) => {
        setSelectedOption(e.value);
      };
      const handleDropdownChange1 = (e) => {
        setSelectedOption1(e.value);
      };
  
    const item = [{ name: "Main00123 - Main Account Description" }, { name: "Main00125 - Main Account Description" }, { name: "Main00128 - Main Account Description" }];
    const item1 =[{name:"INR-Indian Currency",name:"EUR-Euro",name:"HKD-Hong Kong Dollar"}]
      
    const items = [
        { label: 'Sub Account', url: '/master/finance/subaccount' },
        { label: 'Sub Account Details', url: '/master/finance/subaccount/subaccountdetails' },

    ];
    const home = { label: "Master" };
    useEffect(() => {
        const timerId = setTimeout(() => {
            setVisiblePopup(false);
        }, 2000);

        return () => clearTimeout(timerId);
    }, [visiblePopup]);

    return (
        <div className='grid sub__details_edit'>
            <div className='col-12'>
                <NavBar />
            </div>
            <div className='col-12 mb-2'>
            <div className="svgback_container">
        <span onClick={() => navigation(-1)}>
            <SvgBackicon/> 
            </span>
                <div className='add__sub__title'>Sub Account Details</div>
                </div>
                <div className='mt-3'>
                    <BreadCrumb home={home} className='breadCrums__view__add__screen' model={items} separatorIcon={<SvgDot color={"#000"} />} />
                </div>
            </div>
            {/* <div className='col-12 m-0 '>
                <div className='grid add__account__sub__container p-3'>
             
                    <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Sub Account Code"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                  
                    <div className='col-12 md:col-6 lg:col-6'>
                        <InputField
                            label="Main Account Description"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
             
                    
                   
                    
                  
                   
                </div>
            </div> */}
            {/* <Card> */}
            <Card style={{width:'100%'}}>
            <div className='grid sub__details'>
            <div className='col-12 md:col-3 lg:col-3'>
                        <InputField
                            label="Sub Account Code"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            value="Sub00123"
                        />
                    </div>
                  
                    <div className='col-12 md:col-6 lg:col-6'>
                        <InputField
                            label="Sub Account Code"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            value="Sub account Name"
                        />
                    </div>
                </div>
                <div className='grid sub__details'>
            <div className='col-12 md:col-6 lg:col-6'>
                        <InputField
                            label="Description"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            value="Description"
                        />
                    </div>
                  
                   
                </div>
                {/* <div className='grid sub__details'>
            <div className='col-12 md:col-6 lg:col-6'>
                        <InputField
                            label="Main Account"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                  
                   
                </div>
                <div className='grid sub__details'>
            <div className='col-12 md:col-6 lg:col-6'>
                        <InputField
                            label="Currency Code"
                            classNames='dropdown__add__sub'
                            className='label__sub__add'
                            placeholder="Enter"
                        />
                    </div>
                  
                   
                </div> */}
                     <div class="grid">
          <div class="sm-col-12  md:col-8 lg-col-8">
            <label className='main_acc_text'>Main Account</label>
           <MultiSelect
              value={selectedOption}
              options={item}
              onChange={handleDropdownChange}
              className="dropdown__add__sub"
              label="Main Account"
              display="chip"
              optionLabel="name"
              classNames="label__sub__add"
              placeholder={"Select"}
              
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />  
         
          </div>
         
        </div>
        <div class="grid">
         
                 <div class="sm-col-12  md:col-8 lg-col-8">
            <label className='main_acc_text'>Currency Code</label>
           <MultiSelect
              value={selectedOption1}
              options={item1}
              onChange={handleDropdownChange1}
              className="dropdown__add__sub"
              
              display="chip"
              optionLabel="name"
              classNames="label__sub__add"
              placeholder={"Select"}
              
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />  
         
          </div>
         
        </div>
                </Card>

            {/* </Card> */}

            <div className='col-12 btn__view__Add mt-6'>
                <Button
                    label='Update'
                    className='save__add__btn'
                    onClick={() => setVisiblePopup(true)}
                />
            </div>
           
        </div>
    )

}
export default SubAdd