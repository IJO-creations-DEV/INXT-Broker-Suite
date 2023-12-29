import React, { useState, useEffect } from 'react';
import './index.scss';
import { BreadCrumb } from 'primereact/breadcrumb';
import InputField from '../../../components/InputField';
import SubmitButton from '../../../components/SubmitButton'
import SvgEdit from "../../../assets/icons/SvgEdit"
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import productdata from './mock';
import SvgDot from '../../../assets/icons/SvgDot';
import { Paginator } from 'primereact/paginator';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../../components/NavBar';
import SvgBackicon from '../../../assets/icons/SvgBackicon';
import { Dropdown } from 'primereact/dropdown';
import SvgEditicon from '../../../assets/icons/SvgEdit';
import SvgEditIcon from '../../../assets/icons/SvgEditIcon';

function SpecificVoucher() {
    const Navigate = useNavigate()
    const [selectedRowData, setSelectedRowData] = useState({});
    const [visible, setVisible] = useState(false);
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState(false);
const handlebankdetail=()=>{
    Navigate('/paymentvoucher/bankdetailselection')
}
    
const renderViewButton = (e) => {
    return (
        <div onClick={() => handleView(e.value)}>
     
        <SvgEditIcon />
    
      </div>
    );
  };

  const handleView = (rowData) => {
    console.log("View clicked:", rowData);
    setSelectedRowData(rowData)
    // Navigate("/accounts/pettycash/PettyCashCodeDetails")
    setVisible(true)
  };

    const items = [
        { label: 'Payment Voucher' ,url:'/paymentvoucher'},
        { label: 'Create Voucher' ,url:'/paymentvoucher/createvoucher'},

    ];
    const home = { label: "Accounts " };
    const handleNavigation = () => {
        Navigate("/paymentvoucher/voucherbankdetails")
    }
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

    return (
        <div className='overall__specific__container'>
            <NavBar />
            <div>
                <SvgBackicon />
                <label className='label_header'>Payment Voucher</label>
            </div>
            <BreadCrumb
                model={items}
                home={home}
                className='breadcrumbs_container'
                separatorIcon={<SvgDot color={"#000"} />} />

            <label className='headlist_lable'>Invoice List</label>


            <div className='tablegap_container' >
                <DataTable value={productdata} tableStyle={{ minWidth: '50rem', color: '#1C2536' }}
                    paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                    // paginatorTemplate="RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} - {last} of {totalRecords}"
                    paginatorTemplate={template2} scrollable={true} 
                    scrollHeight="40vh"

                    selection={selectedProducts}
                    onSelectionChange={(e) => setSelectedProducts(e.value)}
                    selectionMode="checkbox"


                >
                    <Column selectionMode="multiple" headerStyle={{ width: '4rem' }}></Column>
                    <Column field="VoucherNumber" header="Payables" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="TransactionNumber" header="Outstanding" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="CustomerCode" header="FC Amount" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="VoucheDate" header="LC Amount" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="Amount" header="Excess/Discounts" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="Amount" header="Bal O/s Amount" style={{ width: '24rem' }} headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="Amount" header="VAT%" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="Amount" header="WHT%" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="Amount" header="Total Amount" style={{ width: '24rem' }} headerStyle={headerStyle} className='fieldvalue_container'></Column>
                   

                    <Column
                        // body={(params) => (
                        //     <SvgEditIcon onClick={() => setVisible(true)}/>
                        // )}
                        body={renderViewButton}
                        header="Action"
                        headerStyle={headerStyle}
                        className="fieldvalue_container"
                    ></Column>

                </DataTable>


            </div>


            <div className="next_container">


                <Button label="Next"
                className='submitbutton_container'
                onClick={()=>handlebankdetail()}
                disabled={!selectedProducts.length}
                />
            </div>



            <Dialog header="Invoice Details" visible={visible} className="dialog_fields" onHide={() => setVisible(false)}>
            <div class="grid">
            <div class="sm-col-12  md:col-6 lg-col-6">
            <InputField
              classNames="field__container"
              label="Policy"
              placeholder={"Enter"}
            //   value={selectedRowData.policy}
            />
          </div>
          <div class="sm-col-12  md:col-6 lg-col-6">
            <InputField
              classNames="field__container"
              label="Outstanding"
              placeholder={"Enter"}
            />
          </div>
    </div>
    <div class="grid">
    <div class="col-12 md:col-6 lg:col-6">
    <InputField
              classNames="field__container"
              label="FC Amount"
              placeholder={"Enter"}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-6">
    <InputField
              classNames="field__container"
              label="LC Amount"
              placeholder={"Enter"}
            />
    </div>
    </div>
    <div class="grid">
    <div class="col-12 md:col-6 lg:col-6">
    <InputField
              classNames="field__container"
              label="Excess/Discounts"
              placeholder={"Enter"}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-6">
    <InputField
              classNames="field__container"
              label="Bal O/s Amount"
              placeholder={"Enter"}
            />
    </div>
    </div>
    <div class="grid">
    <div class="col-12 md:col-6 lg:col-6">
    <InputField
              classNames="field__container"
              label="VAT%"
              placeholder={"Enter"}
            />
    </div>
    <div class="col-12 md:col-6 lg:col-6">
    <InputField
              classNames="field__container"
              label="WHT%"
              placeholder={"Enter"}
            />
    </div>
    </div>
    <div class="grid">
    <div class="col-12 md:col-6 lg:col-6">
    <InputField
              classNames="field__container"
              label="Total Amount"
              placeholder={"Enter"}
            />
    </div>
    </div>
    <div className='update_btn'>
    <Button label="Update" className='update_btnlabel' onClick={() => setVisible(false)}
    
    />
    </div>
    
            </Dialog>







        </div>
    );
}

export default SpecificVoucher;
