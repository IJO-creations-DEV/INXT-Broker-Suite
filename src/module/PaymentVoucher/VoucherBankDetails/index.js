import React, { useState, useEffect } from 'react';
import './index.scss';
import { BreadCrumb } from 'primereact/breadcrumb';
import InputField from '../../../components/InputField';
import SubmitButton from '../../../components/SubmitButton'
import SvgEdit from "../../../assets/icons/SvgEdit"
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';   
import { Column } from 'primereact/column';
import { ProductService } from './mock';
import SvgDot from '../../../assets/icons/SvgDot';
import { Paginator } from 'primereact/paginator';
import Dropdown from '../../../components/DropDowns';
import SvgDropdown from '../../../assets/icons/SvgDropdown';
import NavBar from '../../../components/NavBar';
import { Dialog } from 'primereact/dialog';
//import SvgReportsIcon from '../../../assets/icons/SvgReportsIcon';
import SvgDocument from '../../../assets/icons/SvgDocument';

function VoucherBankDetails() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductService.getProductsMini().then(data => setProducts(data));
}, []);
const [visible, setVisible] = useState(false);
const [selectedItem, setSelectedItem] = useState('New York');
    const item = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
  const items = [
    { label: 'Accounts'},
    { label: 'Payment Voucher' },

  ];
  const home = { label: "Dashboard" };

  const headerStyle = {
    width: '12rem',
    // backgroundColor: 'red',
    fontSize: 14, 
    fontFamily: 'Inter var', 
    fontWeight: 500, 
    padding: 6,
    color:'#000',
    border: 'none',
    
    
  };

  return (
    <div className='overall__bankvoucher__container'>
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
        <InputField classNames="field__container" label="Branch"
        className="labeltext_container"  value="B012"/>
        </div>
    </div>
    <div class="sm-col-12  md:col-3 lg-col-2-5">
        <div >
        <InputField classNames="field__container"
            label="Department"  value="Motor" />
        </div>
    </div>
    <div class="sm-col-12  md:col-3 lg-col-2-5">
        <div >
        <InputField classNames="field__container"
            label="Document Date" value="07/12/2023"   />
        </div>
    </div>
    <div class="col-12 md:col-3 lg-col-2-5">
        <div >
        <InputField classNames="field__container"
            label="Document Number" value="Specific" />
        </div>
    </div>
    <div class="col-12 md:col-3 lg-col-2-5">
        <div >
        <InputField classNames="field__container" 
            label="Customer Code" value="Ctm001"/>
        </div>
    </div>

    <div class="col-12 md:col-3 lg-col-2-5">
        <div >
        <Dropdown className="dropdown__container" label="Bank code" value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
                placeholder="Select"
        dropdownIcon={<SvgDropdown color={"#000"}/>}
            />
        </div>
    </div>
    <div class="col-12 md:col-3 lg-col-2-5">
        <div >
       
        <Dropdown className="dropdown__container" label="Select Instrument Currency"
        dropdownIcon={<SvgDropdown color={"#000"}/>} 
        value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
                placeholder="Select"
            />
        </div>
    </div>
    <div class="col-12 md:col-3 lg-col-2-5">
        <div >
        <Dropdown className="dropdown__container"
            label="Select Bank A/c Number" dropdownIcon={<SvgDropdown color={"#000"}  
            />  
            } value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
            placeholder="Select"/>
        </div>
    </div>
    <div class="col-12 md:col-3 lg-col-2-5">
        <div >
        <Dropdown className="dropdown__container" 
            label="Select Payment Type" dropdownIcon={<SvgDropdown color={"#000"}/>}  value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
            placeholder="Select" />
        </div>
    </div>
    <div class="col-12 md:col-3 lg-col-2-5">
        <div >
        <InputField classNames="field__container" 
            label="Total O/s Amount" value="0001"/>
        </div>
    </div>
    <div class="col-12 md:col-3 lg-col-2-5">
        <div >
        <InputField classNames="field__container" 
            label="Remarks" value="Specific pay"/>
        </div>
    </div>
    
</div>


<div  className="next_container">


<Button label="Approvel"  className="submit_button"/>

</div>


<div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}
            paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
            paginatorTemplate=" FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} - {last} of {totalRecords}"
            >
               <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} style={{border:'none'}}></Column>
                <Column field="code" header="Main A/c" headerStyle={headerStyle} style={{ width: '10%',color:'#000' }}  className='fieldvalue_container'></Column>
                <Column field="name" header="Cheque Book ID" headerStyle={headerStyle} style={{ width: '10%' }} className='fieldvalue_container'></Column>
                <Column field="category" header="Cheque No" headerStyle={headerStyle} style={{ width: '10%' }} className='fieldvalue_container'></Column>
                <Column field="quantity" header="Date" headerStyle={headerStyle} style={{ width: '10%' }} className='fieldvalue_container'></Column>
                <Column field="code" header="Original Amount" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                <Column field="name" header="Expense Amount" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                <Column field="category" header="Discount Amount" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                <Column field="quantity" header="Total Amount" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                <Column field="code" header="Status" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                
                
            </DataTable>

      
        </div>

<div className='buttonheader_container'>
        <Button type="button" label="Back" outlined className='Back_container'/>
        <Button type="button" label="Next"  className="next_buttonconatiner" onClick={() => setVisible(true)}/>
        </div>

        {/* <Dialog  visible={visible} style={{ width: '30vw' }} onHide={() => setVisible(false)}>
                <div className='Approvel_container'>
                    <div>This instrument is No. 155421
Waiting for Approval</div>
<SvgDocument/>
                </div>
            </Dialog> */}

<Dialog  visible={visible} style={{ width: '30vw' }} onHide={() => setVisible(false)}>
                <div className='comletedApprovel_container'>
                    <div style={{textAlign:'center'}}>Do you want to update the instrument details for <span style={{color:'#6366F1'}}>Instrument No. 155421?</span></div>
                    <div className='buttonheadermodel_container'>
        <Button type="button" label="Back" outlined className='Backmodel_container'/>
        <Button type="button" label="Next"  className="nextmodle_buttonconatiner" onClick={() => setVisible(true)}/>
        </div>
                </div>
            </Dialog>

    </div>
  );
}

export default VoucherBankDetails;
