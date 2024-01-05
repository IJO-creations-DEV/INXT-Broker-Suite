import React, { useState, useEffect, useRef } from "react";
import { Button } from 'primereact/button'
import SvgAdd from '../../../assets/icons/SvgAdd'
import "./index.scss"
import { BreadCrumb } from 'primereact/breadcrumb'
import SvgDot from '../../../assets/icons/SvgDot'
import NavBar from "../../../components/NavBar"
import SvgSearchIcon from '../../../assets/icons/SvgSearchIcon'
import { Paginator } from 'primereact/paginator'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Dropdown } from 'primereact/dropdown'
import { useNavigate } from 'react-router-dom'
import { InputText } from 'primereact/inputtext'
import SvgEyeIcon from "../../../assets/icons/SvgEyeIcon";
import SvgEditIcon from "../../../assets/icons/SvgEditicons";
import ToggleButton from "../../../components/ToggleButton";
import Productdata from './mock';
import SvgUploade from "../../../assets/icons/SvgUploade";
import { Dialog } from "primereact/dialog";
import InputField from '../../../components/InputField';
import DropDowns from '../../../components/DropDowns';
import SvgDropdown from "../../../assets/icons/SvgDropdown";
import { MultiSelect } from 'primereact/multiselect';
import CustomToast from "../../../components/Toast";
import { useSelector } from "react-redux";
import SvgTable from "../../../assets/icons/SvgTable";

const SubAccountMaster = () => {
  const navigate = useNavigate();
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const handleDropdownChange = (e) => {
    setSelectedOption(e.value);
  };
  const handleDropdownChange1 = (e) => {
    setSelectedOption1(e.value);
  };
 
  const handleClick = () => {
  
  };
 
 
  const items = [
    { label: 'Sub Account', url: '/master/finance/subaccount'},
  ];
  const home = { label: "Master" };
  const headerStyle = {
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
  };
  const ViewheaderStyle = {
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
    display: "flex",
    justifyContent: "center",
  };

  const columns = [
    { field: 'tax', headerName: 'Tax Code', flex: 1 },
    { field: 'taxName', headerName: ' Tax Name', flex: 1 },
   
 
    { field: 'desc', headerName: 'Tax Rate', flex: 1 },
    { field: 'effective', headerName: 'Effective From', flex: 1 },
    { field: 'effectiveTo', headerName: 'Effective To', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
    { field: 'action', headerName: 'Action', flex: 1 },
  ];

  const [first, setFirst] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRowsPerPage(event.rows);
  };
  const item = [{ name: "Main00123 - Main Account Description" }, { name: "Main00125 - Main Account Description" }, { name: "Main00128 - Main Account Description" }];
const item1 =[{name:"INR-Indian Currency",name:"EUR-Euro",name:"HKD-Hong Kong Dollar"}]
const toastRef = useRef(null);
  const renderViewButton = (rowData) => {
    return (
      <div className="center-content">
        <Button
          icon={<SvgEyeIcon />}
          className="eye__btn"
          onClick={() => handleDetail(rowData)}
        />
        <Button
          icon={<SvgEditIcon />}
          className="eye__btn"
          onClick={() => handlEdit(rowData)}
        />
      </div>
    );
  };

  const renderToggleButton = () => {
    return (
      <div>
   <ToggleButton/>
      </div>
    );
  };

  const handleView = (rowData) => {
    console.log("View clicked:", rowData);
    setVisiblePopup(true);

  };
  

  const handleToast = (values) => {
    // Handle form submission
    console.log(values, "find values");
    
    toastRef.current.showToast();
    // {
      setTimeout(() => {
        setVisiblePopup(false)
      }, 3000);
    }
  const handlEdit =()=>{
    navigate("/master/finance/subaccount/subaccountedit")
  }
  const handleDetail =()=>{
    navigate("/master/finance/subaccount/subaccountdetails")
  }

  const emptyTableIcon = (
    <div>
    <div className="empty-table-icon">
      <SvgTable />
    </div>
    <div className="no__data__found">No data entered</div>
    </div>
  );
  const isEmpty = Productdata.length === 0;

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
  const { subAccountList, loading } = useSelector(({ subAccountMainReducers }) => {
    return {
      loading: subAccountMainReducers?.loading,
      subAccountList: subAccountMainReducers?.subAccountList,

    };
  });
  console.log(subAccountList, "subAccountList");
  return (
    <div className='grid  container__subaccount'>
      <div className='col-12'>
        <NavBar />
      </div>
      <div className='col-12 md:col-6 lg:col-6 mb-1'>
        <div className='add__icon__title__taxation'>Sub Account Master</div>
        <div className='mt-3'>
          <BreadCrumb home={home} className='breadCrums__view__reversal__taxation' model={items} separatorIcon={<SvgDot color={"#000"} />} />
        </div>
      </div>
     
          <div className="col-12 md:col-6 lg:col-6 mb-1">
          <div className="btn__container">
          <Button
          outlined
              label="Upload"
              icon={<SvgUploade color={"#fff"} />}
              className="upload__btn"
              onClick={() => {
                handleClick();
              }}
            />
            <Button
              label="Add"
              icon={<SvgAdd color={"#fff"} />}
              className="add__btn"
              onClick={() => {
                handleView();
              }}
            />
          </div>
        </div>
      <div className='col-12 m-0 '>
        <div className='sub__account__sub__container__taxation'>
        <div className='col-12 search__filter__view__taxation'>
            <div className='col-12 md:col-10 lg:col-10'>
              <div className='searchIcon__view__input__taxation'>
                <span className='p-3'> <SvgSearchIcon /></span>
                <InputText
                 style={{width:'100%'}}
                  classNames='input__sub__account__taxation'
                  placeholder='Search By Sub Account Code'
                />
              </div>
            </div>
       
          </div>
          <div className='col-12 '>
            <div className='main__tabel__title__taxation p-2'>Main Account List</div>
          </div>
          <div className="col-12 md:col-12 lg-col-12" style={{ maxWidth: '100%' }}>
            <div className="card">
            <DataTable
      value={Productdata}
      style={{ overflowY: 'auto', maxWidth: '100%' }}
      responsive={true}
      className='table__view__taxation'
      paginator
      paginatorLeft
      rows={5}
      rowsPerPageOptions={[5, 10, 25, 50]}
      currentPageReportTemplate="{first} - {last} of {totalRecords}"
      paginatorTemplate={template2}
      onPage={onPageChange}
      onPageChange={onPageChange}
      emptyMessage={isEmpty ? emptyTableIcon : null}
    >

<Column
              field="subAccountCode"
              header="Sub Account Code"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              sortable
            ></Column>
            <Column
              field="description"
              header="Description"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            
            ></Column>
           
           
            <Column
            field="status"
              body={renderToggleButton}
              header="Status"
              headerStyle={{ textAlign: 'center', ...headerStyle }}
              className="fieldvalue_container"
            ></Column>
            <Column
            field="action"
              body={renderViewButton}
              header="Action"
              headerStyle={{ ...ViewheaderStyle }}
              className="fieldvalue_container centered"
            ></Column>
                
              </DataTable>

              <div className="col-12">
      
      <Dialog
        header="Add Sub Account"
        visible={visiblePopup}
        className="dialog_fields"
        onHide={() => setVisiblePopup(false)}
        style={{ width: '60vw' }}
      >
        <div class="grid">
          <div class="sm-col-12  md:col-4 lg-col-4">
            <InputField
              classNames="field__container"
              label="Sub Account Code"
              placeholder={"Enter"}
              textWeight="400"
              //   value={selectedRowData.policy}
            />
          </div>
          <div class="sm-col-12  md:col-8 lg-col-8">
            <InputField
              classNames="field__container"
              label="Sub Account Name"
              placeholder={"Enter"}
              textWeight="400"
            />
          </div>
        </div>
        <div class="grid">
          <div class="sm-col-12  md:col-8 lg-col-8">
            <InputField
              classNames="field__container"
              label="Description"
              placeholder={"Enter"}
              textWeight="400"
            />
          </div>
         
        </div>
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
       
        <div className="update_btn">
          <Button
         
            label="Save"
            className="update_btnlabel"
            onClick={() => handleToast()}
            
          />
        </div>
      </Dialog>
      <CustomToast
          ref={toastRef}
          message="Sub Account Code SAC1234 is added"
        />
    </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default SubAccountMaster
 
