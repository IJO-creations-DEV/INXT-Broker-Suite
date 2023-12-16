import React,{useState} from 'react';
import './index.scss';
import { BreadCrumb } from 'primereact/breadcrumb';
import InputField from '../../../components/InputField';
import SubmitButton from '../../../components/SubmitButton'
import SvgDot from '../../../assets/icons/SvgDot';
import DropDowns from '../../../components/DropDowns';
import SvgDropdown from '../../../assets/icons/SvgDropdown';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../../components/NavBar';
function Createvoucher() {
    const Navigate=useNavigate()
    const [selectedItem, setSelectedItem] = useState(null);
    const items = [
        { label: 'Accounts' },
        { label: 'Payment Voucher' },

    ];
    const item = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    const home = { label: "Dashboard" };


const handleNavigation=()=>{
    Navigate("/SpecificVoucher")
}

    return (
        <div className='overall__createvoucher__container'>
            <NavBar/>
            <label className='label_header'>Payment Voucher</label>
            <BreadCrumb
                model={items}
                home={home}
                className='breadcrumbs_container'
                separatorIcon={<SvgDot color={"#000"} />} />


            <div class="grid">
                <div class="sm-col-12 col-12 md:col-3 lg-col-2-5">
                    <div >
                       
                        <DropDowns className="dropdown__container" label="Branch" value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
                placeholder="Select"
        dropdownIcon={<SvgDropdown color={"#000"}/>}
            />
                    </div>
                </div>
                <div class="sm-col-12  md:col-3 lg-col-2-5">
                    <div >
                        <InputField classNames="field__container"
                            label="Department" placeholder="Enter"/>
                    </div>
                </div>
                <div class="sm-col-12  md:col-3 lg-col-2-5">
                    <div >
                        
                             <DropDowns className="dropdown__container" label="Document Date" value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
                placeholder="Select"
        dropdownIcon={<SvgDropdown color={"#000"}/>}
            />
                    </div>
                </div>
                <div class="col-12 md:col-3 lg-col-2-5">
                    <div >
                       
                             <DropDowns className="dropdown__container" label="Document Number" value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
                placeholder="Select"
        dropdownIcon={<SvgDropdown color={"#000"}/>}
            />
                    </div>
                </div>
                <div class="col-12 md:col-3 lg-col-2-5">
                    <div >
                        
                             <DropDowns className="dropdown__container" label="Criteria" value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
                placeholder="Select"
        dropdownIcon={<SvgDropdown color={"#000"}/>}
            />
                    </div>
                </div>

                <div class="col-12 md:col-3 lg-col-2-5">
                    <div >
                        
                             <DropDowns className="dropdown__container" label="Payee Type" value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
                placeholder="Select"
        dropdownIcon={<SvgDropdown color={"#000"}/>}
            />
                    </div>
                </div>
                <div class="col-12 md:col-3 lg-col-2-5">
                    <div >
                        <InputField classNames="field__container"
                            label="Customer Code" placeholder="Enter"/>
                    </div>
                </div>
                <div class="col-12 md:col-3 lg-col-2-5">
                    <div >
                        
                             <DropDowns className="dropdown__container" label="Currency" value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
                placeholder="Select"
        dropdownIcon={<SvgDropdown color={"#000"}/>}
            />
                    </div>
                </div>
                <div class="col-12 md:col-3 lg-col-2-5">
                    <div >
                        <InputField classNames="field__container"
                            label="Remarks" placeholder="Enter"/>
                    </div>
                </div>

            </div>


            <div className="next_container">
                {/* <SubmitButton label="Next"
                    className="submit_button p-0"
                    navigation="/voucherbankdetails"
                // handleSubmit={handleSubmit}
                // setVisiblechange={setVisiblechange}
                // visiblechange={visiblechange}


                /> */}
                <Button className="submit_button p-0" label="Next"
                onClick={handleNavigation}
                />
            </div>







        </div>
    );
}

export default Createvoucher;
