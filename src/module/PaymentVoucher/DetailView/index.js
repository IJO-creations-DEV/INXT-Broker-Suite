import React, { useEffect, useState } from 'react';
import './index.scss';
import { BreadCrumb } from 'primereact/breadcrumb';
import InputField from '../../../components/InputField';
import SubmitButton from '../../../components/SubmitButton'
import SvgDot from '../../../assets/icons/SvgDot';
import DropDowns from '../../../components/DropDowns';
import SvgDropdown from '../../../assets/icons/SvgDropdown';
import { Button } from 'primereact/button';
import { useNavigate, useParams } from 'react-router-dom';
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
import { useDispatch, useSelector } from 'react-redux';
import { getpaymentVocherByIdMiddleware } from '../store/paymentVocherMiddleware';

function Detailview() {
  const [date, setDate] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState(false);
  const [visible, setVisible] = useState(false);
  const { id } = useParams()
  const dispatch = useDispatch();
  console.log("first1", id)
  useEffect(() => {
    dispatch(getpaymentVocherByIdMiddleware(id))
  }, [id])

  const { paymentVocherList, loading } = useSelector(({ paymentVoucherReducers }) => {
    return {
      loading: paymentVoucherReducers?.loading,
      paymentVocherList: paymentVoucherReducers?.paymentVocherList,

    };
  });
  const Navigate = useNavigate()
  const [selectedItem, setSelectedItem] = useState(null);
  const items = [
    { label: 'Payment Voucher Details',url:'/accounts/paymentvoucher/detailview' },
  ];
  const statusBodyTemplate = (rowData) => {
    return (
      <div
        style={{

          backgroundColor: rowData.status === 'Pending' ? "#E2F6EF" : "#FFE5B4",
          color: rowData.status === 'Pending' ? "#29CE00" : "#FFA800"
        }}

        className='statuslable_container'
      >
        {rowData.status}
      </div>
    );
  };

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
    // width: '12rem',
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

   

  // const handleNavigation = () => {
  //   Navigate("/SpecificVoucher")
  // }

  return (
    <div className='overall__detailview__container'>
      <NavBar />
      <div>
      <span  onClick={() => Navigate(-1)}>
                <SvgBackicon/>
                </span>
        
        <label className='label_header'>Payment Voucher Details</label>
      </div>
      <BreadCrumb
        model={items}
        home={home}
        className='breadcrumbs_container'
        separatorIcon={<SvgDot color={"#000"} />} />





      <Card className='cardstyle_container'>

        <div class="grid">
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
              <InputField
                classNames="field__container"
                label="Department Code"
                placeholder={"Enter"}
              />
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
              <InputField
                classNames="field__container"
                label="Branch Code"
                placeholder={"Enter"}
              />
            </div>
          </div>
          <div class="sm-col-12  md:col-3 lg-col-4">
            <div>
              <InputField
                classNames="field__container"
                label="Payee Type"
                placeholder={"Enter"}
              />
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
              <InputField
                classNames="field__container"
                label="Criteria"
                placeholder={"Enter"}
              />
            </div>
          </div>
        </div>



        <div class="grid">
          <div class="col-3 md:col-3 lg-col-3">

            <InputField
              classNames="field__container"
              label="Customer Code"
              placeholder={"Enter"}
            />
          </div>
          <div class="col-3 md:col-3 lg-col-3">
            <InputField
              classNames="field__container"
              label="Transaction code"
              placeholder={"Enter"}
            />
          </div>
          <div class="sm-col-12 col-12 md:col-6 lg-col-6">


            <InputField
              classNames="field__container"
              label="Transaction Description"

            />
          </div>
          {/* <div class="sm-col-12  md:col-3 lg-col-4">
            <InputField
              classNames="field__container"
              label="Currency Description"
              placeholder={"Enter"}
            />
          </div> */}
        </div>
        <div class="grid">


          <div class="sm-col-12  md:col-3 lg-col-4">
            <InputField
              classNames="field__container"
              label="Select Instrument Currency"
              placeholder={"Enter"}
            />
          </div>
          <div class="sm-col-12  md:col-6 lg-col-6">
            <InputField
              classNames="field__container"
              label="Remarks (Optional)"
              placeholder={"Enter"}
            />
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
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          selectionMode="checkbox"
        >
          {Productdata.length > 0 && (
            <Column selectionMode="single" selectedItem headerStyle={{ width: '4rem' }}></Column>
          )}
          <Column field="VoucherNumber" header="Customer Code" headerStyle={headerStyle} sortable  className='fieldvalue_container'></Column>
          <Column field="TransactionNumber" header="Customer Name" headerStyle={headerStyle} className='fieldvalue_container'></Column>
          <Column field="CustomerCode" header="Main Account" headerStyle={headerStyle} className='fieldvalue_container'></Column>
          <Column field="VoucheDate" header="Instrument Book ID" headerStyle={headerStyle} className='fieldvalue_container'></Column>
          <Column field="Amount" header="Instrument No" headerStyle={headerStyle} className='fieldvalue_container'></Column>
          <Column field="Amount" header="Instrument Date"  headerStyle={headerStyle} className='fieldvalue_container'></Column>
          <Column field="Amount" header="Total Amount" headerStyle={headerStyle} className='fieldvalue_container'></Column>
          <Column
            field="status"
            header="Status"
            headerStyle={headerStyle}
            className='fieldvalue_container'
            body={statusBodyTemplate}
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

        <Button className="submit_button p-0" label={selectedProducts?.status === "Approved" ? "Print" : "Approve"}
          // onClick={handleNavigation}
          disabled={!selectedProducts}
        />
      </div>







    </div>
  );
}

export default Detailview;
