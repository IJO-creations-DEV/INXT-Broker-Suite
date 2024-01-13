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
import { useDispatch, useSelector } from "react-redux";
import SvgEditicon from "../../../assets/icons/SvgEdit";
import SvgEdit from "../../../assets/icons/SvgEdits";
import ToggleButton from "../../../components/ToggleButton";
import SvgEditicons from "../../../assets/icons/SvgEdit";
import SvgTable from "../../../assets/icons/SvgTable";
import { getExchangeDetailEdit, getExchangeDetailView, getExchangeSearchList } from "./store/exchangeMasterMiddleware";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  const { ExchangeList, loading, ExchangeSearchList } = useSelector(({ exchangeMasterReducer }) => {
    return {
      loading: exchangeMasterReducer?.loading,
      ExchangeList: exchangeMasterReducer?.ExchangeList,
      ExchangeSearchList: exchangeMasterReducer?.ExchangeSearchList,
    };
  });
  console.log(ExchangeList, "ExchangeList")
  const dispatch = useDispatch()

  const handleView = (columnData) => {
    dispatch(getExchangeDetailView(columnData))
    navigate("/master/finance/exchangerate/viewexchange")
  }

  const handleEdit = (columnData) => {
    console.log(columnData, "columnData")
    dispatch(getExchangeDetailEdit(columnData))
    navigate("/master/finance/exchangerate/saveandeditexchange")
  }


  const isEmpty = ExchangeList.length === 0;

  const emptyTableIcon = (
    <div>
      <div className="empty-table-icon">
        <SvgTable />
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
        <ToggleButton />
      </div>
    );
  };
  const headeraction = {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    display: "flex",
    justifyContent: 'center',
    border: "none"
  }

  const headerStyle = {
    // width: '19%',
    // backgroundColor: 'red',
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
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

  const handlePolicy = () => {
    navigate('/master/finance/exchangerate/addexchange')
  }

  useEffect(() => {
    if (search?.length > 0) {
      dispatch(getExchangeSearchList(search))
    }
  }, [search])

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

      >

        <div className="header_search_container">
          <div class="col-12 md:col-12 lg:col-12" style={{ paddingLeft: 0 }}>
            {/* <div class="text-center p-3 border-round-sm bg-primary font-bold"> */}
            <span className="p-input-icon-left" style={{ width: "100%" }}>
              <i className="pi pi-search" />
              <InputText placeholder="Search By Currency code " className="searchinput_left"
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
            </span>
          </div>


        </div>
        <div className="headlist_lable">Exchange Rate List</div>


        <div >
          <DataTable
            value={search ? ExchangeSearchList : ExchangeList}
            tableStyle={{ minWidth: '50rem', color: '#1C2536' }}
            paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
            currentPageReportTemplate="{first} - {last} of {totalRecords}"
            paginatorTemplate={template2} scrollable={true}
            scrollHeight="40vh"
            emptyMessage={isEmpty ? emptyTableIcon : null}
          >

            <Column field="EffectiveFrom" header="Effective From" headerStyle={headerStyle} className='fieldvalue_container'></Column>
            <Column field="EffectiveTo" header="Effective To" headerStyle={headerStyle} className='fieldvalue_container'></Column>
            <Column field="CurrencyCode" header="Currency Code" sortable headerStyle={headerStyle} className='fieldvalue_container'></Column>
            <Column field="ToCurrencyCode" header="To Currency Code" headerStyle={headerStyle} className='fieldvalue_container'></Column>
            <Column field="ExchangeRate" header="Exchange Rate" headerStyle={headerStyle} className='fieldvalue_container'></Column>
            <Column body={(columnData) => <ToggleButton id={columnData.id} />} header="Status" headerStyle={headerStyle} className='fieldvalue_container'></Column>
            <Column
              body={(columnData) => (
                <div className="action_icons">

                  <SvgIconeye onClick={() => handleView(columnData)} />
                  <SvgEditicons onClick={() => handleEdit(columnData)} />
                </div>
              )}
              header="Action"
              headerStyle={headeraction}
              className="fieldvalue_container"
            ></Column>

          </DataTable>


        </div>

      </Card>


    </div>
  );
};

export default Index;
