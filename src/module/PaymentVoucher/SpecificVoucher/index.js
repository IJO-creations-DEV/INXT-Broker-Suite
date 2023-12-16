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
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../../components/NavBar';

function SpecificVoucher() {
    const Navigate = useNavigate()
    const [visible, setVisible] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    const items = [
        { label: 'Accounts' },
        { label: 'Payment Voucher' },

    ];
    const home = { label: "Dashboard" };
    const handleNavigation = () => {
        Navigate("/voucherbankdetails")
    }
    const headerStyle = {
        width: '12rem',
        // backgroundColor: 'red',
        fontSize: 14,
        fontFamily: 'Inter var',
        fontWeight: 500,
        padding: 6,
        color:'#000',
        border: 'none'
    };

    return (
        <div className='overall__specific__container'>
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
                        <InputField classNames="field__container"
                            value="B012"
                            label="Branch" />
                    </div>
                </div>
                <div class="sm-col-12  md:col-3 lg-col-2-5">
                    <div >
                        <InputField classNames="field__container"
                            label="Department" value="Motor" />
                    </div>
                </div>
                <div class="sm-col-12  md:col-3 lg-col-2-5">
                    <div >
                        <InputField classNames="field__container"
                            label="Document Date" value="07/12/2023" />
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
                            label="Criteria" value="Specific" />
                    </div>
                </div>

                <div class="col-12 md:col-3 lg-col-2-5">
                    <div >
                        <InputField classNames="field__container"
                            label="Payee Type" value="B012" />
                    </div>
                </div>
                <div class="col-12 md:col-3 lg-col-2-5">
                    <div >
                        <InputField classNames="field__container"
                            label="Customer Code" value="Ctm001" />
                    </div>
                </div>
                <div class="col-12 md:col-3 lg-col-2-5">
                    <div >
                        <InputField classNames="field__container"
                            label="Currency" value="Peso" />
                    </div>
                </div>
                <div class="col-12 md:col-3 lg-col-2-5">
                    <div >
                        <InputField classNames="field__container"
                            label="Remarks" value="Specific pay" />
                    </div>
                </div>

            </div>


            <div className="next_container">

                <label className='label_subheader'>Payment Voucher History</label>
                <Button label="Edit" icon={<SvgEdit />} className="submit_button" onClick={() => setVisible(true)}/>
            </div>


            <div className="card">
                <DataTable value={products} tableStyle={{ minWidth: '50rem',color:'#1C2536' }}
                    paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                    paginatorTemplate=" FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} - {last} of {totalRecords}"
                >
                    <Column selectionMode="multiple" headerStyle={{ width: '10rem' }}  style={{border:'none'}} className='fieldvalue_container'></Column>
                    <Column field="code" header="Trans.code" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="name" header="Document No" headerStyle={headerStyle} style={{ width: '10%' }} className='fieldvalue_container'></Column>
                    <Column field="category" header="O/s Amount" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="quantity" header="Payment Adjusted
FC Amount"  headerStyle={headerStyle} style={{ width: '12%' }} className='fieldvalue_container'></Column>
                    <Column field="code" header="Payment Adjusted
LC Amount" headerStyle={headerStyle} style={{ width: '12%' }} className='fieldvalue_container'></Column>
                    <Column field="name" header="Advance Adjusted
Amount" headerStyle={headerStyle} style={{ width: '12%' }} className='fieldvalue_container'></Column>
                    <Column field="category" header="Balance Adjusted
Amount" headerStyle={headerStyle} style={{ width: '12%' }} className='fieldvalue_container'></Column>
                    <Column field="quantity" header="VAT%" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="code" header="WHT%" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="name" header="Exp Amount" headerStyle={headerStyle} className='fieldvalue_container'></Column>

                </DataTable>


            </div>

            <div className='buttonheader_container'>
                <Button type="button" label="Back" outlined className='Back_container' />
                <Button className="next_buttonconatiner" label="Next"
                    onClick={handleNavigation}
                />
            </div>


            <Dialog header="Payment Voucher details" visible={visible} className="model_container" style={{ width: '30vw' }} onHide={() => setVisible(false)}>
            <div class="grid">
    <div  class="col">
        <div className="detailvoucher__container">
            <label className="labeltext__container">trans. Code</label>
        <InputField classNames="field__container"
                             value="00.00" />
        </div>
    </div>
    <div class="col">
        <div className="detailvoucher__container">
            <label className="labeltext__container">Document No</label>
        <InputField classNames="field__container"
                             value="00.00" />
        </div>
    </div>
    
    <div class="col">
        <div className="detailvoucher__container">
            <label className="labeltext__container">O/s Amount</label>
        <InputField classNames="field__container"
                              value="00.00" />
        </div>
    </div>
    <div class="col">
        <div className="detailvoucher__container">
            <label className="labeltext__container">Payment Adjusted
FC Amount :</label>
        <InputField classNames="field__container"
                              value="00.00" />
        </div>
    </div>
    <div class="col">
        <div className="detailvoucher__container">
            <label className="labeltext__container">Advance Adjusted
LC Amount :</label>
        <InputField classNames="field__container"
                             value="00.00" />
        </div>
    </div>
    <div class="col">
        <div className="detailvoucher__container">
            <label className="labeltext__container">Advance Adjusted
Amount</label>
        <InputField classNames="field__container"
                              value="00.00" />
        </div>
    </div>
    <div class="col">
        <div className="detailvoucher__container">
            <label className="labeltext__container">Balance Adjusted
Amount :</label>
        <InputField classNames="field__container"
                              value="00.00%" />
        </div>
    </div>
    <div class="col">
        <div className="detailvoucher__container">
            <label className="labeltext__container">VAT :</label>
        <InputField classNames="field__container"
                              value="00.00%" />
        </div>
    </div>
    <div class="col">
        <div className="detailvoucher__container">
            <label className="labeltext__container">WAT :</label>
        <InputField classNames="field__container"
                             value="00.00%" />
        </div>
    </div>

    <div class="col">
        <div className="detailvoucher__container">
            <label className="labeltext__container">Exp Amount ::</label>
        <InputField classNames="field__container"
                             value="00.00%" />
        </div>
    </div>

   
    </div>


    <div className="next_container">
                
                <Button className="submit_button p-0" label="Save"
                // onClick={handleNavigation}
                />
            </div>


            </Dialog>



        </div>
    );
}

export default SpecificVoucher;
