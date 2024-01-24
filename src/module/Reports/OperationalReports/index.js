import React, { useState } from 'react'
import './index.scss'
import { Card } from 'primereact/card'
import DropDowns from '../../../components/DropDowns'
import { RadioButton } from "primereact/radiobutton";
import InputField from '../../../components/InputField';
import DatePicker from '../../../components/DatePicker';
import { Calendar } from 'primereact/calendar';
import SvgDropdown from '../../../assets/icons/SvgDropdown';
        
const OperationalReports = () => {

    const reportsType = [
        { label: "Production Report" },
        { label: "Claims Report" },
        { label: "Renewel Reports" },
        { label: "RemittanceReports" },
        { label: "Broker Commision Reports" }
    ]
    const [ingredient, setIngredient] = useState('');
    return (
        <div className='operationalreports__overall'>
            <div>Reports</div>
            <div>Operational Reports</div>

            <Card>
                <DropDowns label="Select Reports Type"
                    options={reportsType}
                    optionLabel='label'
                    placeholder="Broker Commision Reports"
                />
                <div>Report Criteria</div>
                <div className="card flex justify-content-center">

                    <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                            <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
                            <label htmlFor="ingredient1" className="ml-2">Overall</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
                            <label htmlFor="ingredient2" className="ml-2">Agent</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="ingredient3" name="pizza" value="Pepper" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Pepper'} />
                            <label htmlFor="ingredient3" className="ml-2">Principal Insurance</label>
                        </div>
                        <div className="flex align-items-center">
                            <RadioButton inputId="ingredient4" name="pizza" value="Onion" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Onion'} />
                            <label htmlFor="ingredient4" className="ml-2">Branch</label>
                        </div>
                    </div>

                </div>
                <div style={{ width: "100%" }}>
                    <div className='grid'>
                    <div className='labelheader__container'>From Date</div>
                        <div class="col-12 md:col-4 lg:col-4" style={{display:'flex'}}>
                       
                        <Calendar id="buttondisplay" 
                        style={{width:"100%"}}
                        // value={date} 
                        // onChange={(e) => setDate(e.value)}
                         showIcon />
                        </div>
                        <div className='labelheader__container'>To Date</div>
                        <div class="col-12 md:col-4 lg:col-4" style={{display:'flex'}}>
                        
                        <Calendar id="buttondisplay"  style={{width:"100%"}}

                        // value={date} 
                        // onChange={(e) => setDate(e.value)} 
                        showIcon />
                        </div>

                    </div>
                    <div className='grid'>
                        <div className='labelheader__container'>Agent</div>
                        <div class="col-12 md:col-4 lg:col-4">
                            <DropDowns className='labeldropdown__container' dropdownIcon={<SvgDropdown/>} />
                        </div>
                        <div className='labelheader__container'>Company</div>
                        <div class="col-12 md:col-4 lg:col-4">
                            <DropDowns className='labeldropdown__container' dropdownIcon={<SvgDropdown/>} />
                        </div>

                    </div>

                    <div className='grid'>
                        <div className='labelheader__container'>Branch</div>
                        <div class="col-12 md:col-4 lg:col-4">
                            <DropDowns className='labeldropdown__container' dropdownIcon={<SvgDropdown/>} />
                        </div>
                        <div className='labelheader__container'>Client</div>
                        <div class="col-12 md:col-4 lg:col-4">
                            <DropDowns className='labeldropdown__container' dropdownIcon={<SvgDropdown/>} />
                        </div>

                    </div>

                </div>

            </Card>
        </div>
    )
}

export default OperationalReports