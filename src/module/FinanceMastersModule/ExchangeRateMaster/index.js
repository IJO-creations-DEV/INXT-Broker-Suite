import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import NavBar from "../../../components/NavBar";
import { useNavigate } from "react-router-dom";
import SvgDot from "../../../assets/icons/SvgDot"
import SvgFilters from "../../../assets/icons/SvgFilters";
import SvgAdd from "../../../assets/icons/SvgAdd";
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from "primereact/inputtext";
import Productdata from './mock';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { TieredMenu } from 'primereact/tieredmenu';
import SvgIconeye from "../../../assets/icons/SvgIconeye";
import SvgDropdown from "../../../assets/icons/SvgDropdown";
import SvgDropdownicon from "../../../assets/icons/SvgDropdownicon";
import { useSelector } from "react-redux";
import SvgEditicon from "../../../assets/icons/SvgEdit";
import SvgEdit from "../../../assets/icons/SvgEdits";
import ToggleButton from "../../../components/ToggleButton";
import SvgEditicons from "../../../assets/icons/SvgEdit";
import SvgTable from "../../../assets/icons/SvgTable";

const Index = () => {
  const [products, setProducts] = useState([]);
  const { paymentVocherList, loading } = useSelector(({ paymentVoucherReducers }) => {
    return {
      loading: paymentVoucherReducers?.loading,
      paymentVocherList: paymentVoucherReducers?.paymentVocherList,
    // const [products, setProducts] = useState([]);
    
// const handleView=()=>{
//   navigate('/accounts/paymentvoucher/detailview')
// }

    };
  });
  const handleView = (columnData) => {
    navigate("/master/finance/exchangerate/viewexchange")
  }
  const handleEdit = (columnData) => {
    navigate("/master/finance/exchangerate/saveandeditexchange")
  }
  console.log("first",paymentVocherList)

  const isEmpty = paymentVocherList.length === 0;

  const emptyTableIcon = (
    <div>
    <div className="empty-table-icon">
      <SvgTable/>
    </div>
    <div className="no__data__found">No data entered</div>
    </div>
  );


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


  const menu = useRef(null);
  const menuitems = [
    {
      label: 'Name',
    },
    {
      label: 'Date',
    },
    {
      label: 'Voucher Number',
    },
  ];

  const renderToggleButton = () => {
    return (
      <div>
   <ToggleButton/>
      </div>
    );
  };

  const headerStyle = {
    // width: '19%',
    // backgroundColor: 'red',
    fontSize: 16,
    fontFamily: 'Inter var',
    fontWeight: 500,
    padding: 6,
    color: '#000',
    border: 'none'
  };

  const items = [
    {
      id: 1,
      label: "Exchange Rate",
      // url: '/accounts/paymentvoucher'
     },
    
  ];
  const home = { label: "Master" };

  const navigate = useNavigate();
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  const [globalFilter, setGlobalFilter] = useState('');

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const onGlobalFilterChange = (event) => {
    setGlobalFilter(event.target.value);
  };
 
  const handlePolicy =()=>{
    navigate('/master/finance/exchangerate/addexchange')
  }

  return (
    <div className='overall__exchangerate__container'>
      <NavBar />
      <div className="overallfilter_container">
        <div >
          <label className='label_header'>Exchange Rate Master</label>
          <BreadCrumb
            model={items}
            home={home}
            className='breadcrumbs_container'

            separatorIcon={<SvgDot color={"#000"} />} />
        </div>
        <div className="filterbutton_container">
          {/* <SvgFilters/> */}

          <div className="addbutton_container" onClick={handlePolicy} >
            <SvgAdd />
            <p className="addtext">Add</p>
          </div>
        </div>
      </div>


      <Card

      //   className="overallcard_container"
      >
        {/* <div className="searchiput_container"> */}


        <div className="header_search_container">
          <div class="col-12 md:col-6 lg:col-10" style={{ paddingLeft: 0 }}>
            {/* <div class="text-center p-3 border-round-sm bg-primary font-bold"> */}
            <span className="p-input-icon-left" style={{ width: "100%" }}>
              <i className="pi pi-search" />
              <InputText placeholder="Search By Currency code " className="searchinput_left" />
            </span>
          </div>
          {/* </div> */}
          {/* <div class="col-12 md:col-6 lg:col-2">
            <TieredMenu model={menuitems} popup ref={menu} breakpoint="767px" />
            <Button label="Search by" outlined icon={<SvgDropdownicon />}
              className="sorbyfilter_container"
              onClick={(e) => menu.current.toggle(e)}
            />
            </div> */}

        </div>
        <div className="headlist_lable">Exchange Rate List</div>

        {/* </div> */}

        <div >
          <DataTable value={paymentVocherList} tableStyle={{ minWidth: '50rem', color: '#1C2536' }}
            paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
            // paginatorTemplate="RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} - {last} of {totalRecords}"
            paginatorTemplate={template2} scrollable={true}
            scrollHeight="40vh"
            emptyMessage={isEmpty ? emptyTableIcon : null}
          >

            <Column field="VoucherNumber" header="Effective From"  headerStyle={headerStyle} className='fieldvalue_container'></Column>
            <Column field="TransactionNumber" header="Effective To"  headerStyle={headerStyle} className='fieldvalue_container'></Column>
            <Column field="CustomerCode" header="Currency Code"  sortable headerStyle={headerStyle} className='fieldvalue_container'></Column>
            <Column field="VoucheDate" header="To Currency Code"  headerStyle={headerStyle} className='fieldvalue_container'></Column>
            <Column field="Amount" header="Exchange Rate" headerStyle={headerStyle} className='fieldvalue_container'></Column>
            {/* <Column field="name" header="Action" headerStyle={headerStyle}  className='fieldvalue_container'></Column>
                    <Column field="category" header="Instrument Status" headerStyle={headerStyle}  className='fieldvalue_container'></Column>
                    <Column field="quantity" header="Amount" headerStyle={headerStyle} className='fieldvalue_container'></Column> */}
            <Column body={renderToggleButton} header="Status" headerStyle={headerStyle} className='fieldvalue_container'></Column>
            <Column
              body={(columnData) => (
                <div className="action_icons">

                <SvgIconeye onClick={() => handleView(columnData)} />
                <SvgEditicons onClick={() => handleEdit(columnData)}/>
                </div>
              )}
              header="Action"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>

          </DataTable>


        </div>

      </Card>


    </div>
  );
};

export default Index;
