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
import SvgBackicon from '../../../assets/icons/SvgBackicon';
import { Card } from "primereact/card";
import DatePicker from '../../../components/DatePicker';
import { Calendar } from 'primereact/calendar';
import LabelWrapper from '../../../components/LabelWrapper';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Productdata from './mock'
import { Dropdown } from 'primereact/dropdown';

import SvgEditIcon from '../../../assets/icons/SvgEditIcon';

function Bankdetailselection() {
    const [date, setDate] = useState(null);
    
    const [visible, setVisible] = useState(false);

    const Navigate=useNavigate()
    const [selectedItem, setSelectedItem] = useState(null);
    const items = [
        { label: 'Payment Voucher Details' },
        { label: 'Create Voucher' },
    ];

    const template2 = {
        layout: 'RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
        RowsPerPageDropdown: (options) => {
            const dropdownOptions = [
                { label: 5, value: 5 },
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 120, value: 120 }
            ];

            return (
                <React.Fragment >
                    <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }} >
                        Row count :{' '}
                    </span>
                    <Dropdown value={options.value} className="pagedropdown_container" options={dropdownOptions} onChange={options.onChange} />
                </React.Fragment>
            );
        },

    };

    const headerStyle = {
        width: '12rem',
        // backgroundColor: 'red',
        fontSize: 16,
        fontFamily: 'Inter var',
        fontWeight: 500,
        padding: 6,
        color: '#000',
        border: 'none'
    };
    const status = [
        { name: "Active", code: "NY" },
        { name: "Deactive", code: "RM" },
      ];
    const item = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    const home = { label: "Accounts" };


const handleNavigation=()=>{
    Navigate("/SpecificVoucher")
}

    return (
        <div className='overall__bankdetailview__container'>
            <NavBar/>
            <div>
                <SvgBackicon/>
            <label className='label_header'>Create Voucher</label>
            </div>
            <BreadCrumb
                model={items}
                home={home}
                className='breadcrumbs_container'
                separatorIcon={<SvgDot color={"#000"} />} />


            


<Card className='cardstyle_container'>
        <div className='header_cardcontainer'>Select Bank Details</div>
        <div class="grid">
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
            <InputField
              classNames="field__container"
              label="Total Amount"
              placeholder={"Enter"}
            />
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
            <DropDowns
              className="dropdown__container"
              label="Bank Code"
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.value)}
              options={status}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            </div>
          </div>
          <div class="sm-col-12  md:col-3 lg-col-4">
            <div>
            <DropDowns
              className="dropdown__container"
              label="Bank Account"
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.value)}
              options={status}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            </div>
          </div>
          
        </div>

        

        
      </Card>


      <label className='headlist_lable'>Cheque book  details</label>


<div className='tablegap_container' >
    <DataTable value={Productdata} tableStyle={{ minWidth: '50rem', color: '#1C2536' }}
    
        paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
        // paginatorTemplate="RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} - {last} of {totalRecords}"
        paginatorTemplate={template2} scrollable={true} 
        scrollHeight="40vh"
    >
       {Productdata.length > 0 && (
    <Column selectionMode="multiple" selectedItem headerStyle={{ width: '4rem' }}></Column>
)}
        <Column field="VoucherNumber" header="Customer Code" headerStyle={headerStyle} className='fieldvalue_container'></Column>
        <Column field="TransactionNumber" header="Customer Name" headerStyle={headerStyle} className='fieldvalue_container'></Column>
        <Column field="CustomerCode" header="Main Account" headerStyle={headerStyle} className='fieldvalue_container'></Column>
        <Column field="VoucheDate" header="Instrument Book ID" headerStyle={headerStyle} className='fieldvalue_container'></Column>
        <Column field="Amount" header="Instrument No" headerStyle={headerStyle} className='fieldvalue_container'></Column>
        <Column field="Amount" header="Instrument Date" style={{ width: '24rem' }} headerStyle={headerStyle} className='fieldvalue_container'></Column>
        <Column field="Amount" header="Total Amount" headerStyle={headerStyle} className='fieldvalue_container'></Column>
        <Column 
    field = "status"
    header="Status" 
    headerStyle={headerStyle} 
    className='fieldvalue_container'
    cellRenderer={(item) => (
        <div
            style={{
                backgroundColor: item === "Printed" ? "green" : "orange"
            }}
            
        >
            {item}
        </div>
    )}
></Column>


        {/* <Column field="Amount" header="Total Amount" style={{ width: '24rem' }} headerStyle={headerStyle} className='fieldvalue_container'></Column> */}
        {/* <Column field="action" header="Action" headerStyle={headerStyle} className='fieldvalue_container'
        onClick={() => setVisible(true)}
        ></Column> */}

        {/* <Column
            body={(params) => (
                <SvgEditIcon onClick={() => setVisible(true)}/>
            )}
            header="Action"
            headerStyle={headerStyle}
            className="fieldvalue_container"
        ></Column> */}

    </DataTable>


</div>






            <div className="next_container">
                
                <Button className="submit_button p-0" label="Approve"
                onClick={handleNavigation}
                />
            </div>







        </div>
    );
}

export default Bankdetailselection;
