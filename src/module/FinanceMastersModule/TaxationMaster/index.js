import React, { useState } from 'react'
import { Button } from 'primereact/button'
import SvgAdd from '../../../assets/icons/SvgAdd'
import "../TaxationMaster/index.scss"
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
import Productdata from './mock'

const TaxationMaster = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/master/finance/taxation/addtaxation')
  };
  const handleNavigateedit = () => {
    navigate('/master/finance/taxation/taxationdetails')
  }

  const items = [
    { label: 'Taxation', url: '/master/finance/taxation' },
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

  const rows = [
    { id: 1, tax: '', shorDesc: '', desc: '', effective: '', status: '', view: '' },
  ];
  const renderViewButton = (rowData) => {
    return (
      <div className="center-content">
        <Button
          icon={<SvgEyeIcon />}
          className="eye__btn"
          onClick={() => handleView(rowData)}
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
    navigate("/master/finance/taxation/taxationdetails")
  };
  const handlEdit =()=>{
    navigate("/master/finance/taxation/taxationedit")
  }
  const template2 = {
    layout: "RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",
    RowsPerPageDropdown: (options) => {
      const dropdownOptions = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 120, value: 120 },
      ];

      return (
        <React.Fragment>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',width:'40%' }}>
            <span

              className="mx-1"
              style={{ color: "var(--text-color)", userSelect: "none" }}
            >
              Row count :{" "}
            </span>
            <Dropdown
              value={options.value}
              className="pagedropdown_container"
              options={dropdownOptions}
              onChange={options.onChange}
            />
          </div>
        </React.Fragment>
      );
    },
  };
  return (
    <div className='grid  container__taxation'>
      <div className='col-12'>
        <NavBar />
      </div>
      <div className='col-12 md:col-6 lg:col-6 mb-1'>
        <div className='add__icon__title__taxation'>Taxation Master</div>
        <div className='mt-3'>
          <BreadCrumb home={home} className='breadCrums__view__reversal__taxation' model={items} separatorIcon={<SvgDot color={"#000"} />} />
        </div>
      </div>
      <div className='col-12 md:col-6 lg:col-6 add__icon__alighn__taxation mb-1'>
        <div className='add__icon__view__taxation' onClick={handleNavigate}>
          <div className='add__icon__taxation' >
            <SvgAdd />
          </div>
          <div className='add__text__taxation'>
            Add
          </div>
          
        </div>
      </div>
      <div className='col-12 m-0 '>
        <div className='sub__account__sub__container__taxation'>
        <div className='col-12 search__filter__view__taxation'>
            <div className='col-12 md:col-10 lg:col-10'>
              <div className='searchIcon__view__input__taxation'>
                <span className='p-1'> <SvgSearchIcon /></span>
                <InputText
                 style={{width:'100%'}}
                  classNames='input__sub__account__taxation'
                  placeholder='Search By Sub Account Code'
                />
              </div>
            </div>
       
          </div>
          <div className='col-12 '>
            <div className='main__tabel__title__taxation p-2'>Taxation List</div>
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
    >

<Column
              field="TaxCode"
              header="Tax Code"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="TaxName"
              header="Tax Name"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            //   sortable
            ></Column>
            <Column
              field="TaxRate"
              header="Tax Rate"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            //   sortable
            ></Column>
            <Column
              field="EffectiveFrom"
              header="Effective From"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="EffectiveTo"
              header="Effective To"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              body={renderToggleButton}
              header="Status"
              headerStyle={{ textAlign: 'center', ...headerStyle }}
              className="fieldvalue_container"
            ></Column>
            <Column
              body={renderViewButton}
              header="Action"
              headerStyle={{ ...ViewheaderStyle }}
              className="fieldvalue_container centered"
            ></Column>
                {/* {columns.map((column) => (
                  <Column
                    style={{
                      width: column.field === 'rowcount' ? '10%' : `${90 / (columns.length - 1)}%`, 
                      boxSizing: 'border-box',
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                    key={column.field}
                    field={column.field}
                    header={column.headerName}
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    currentPageReportTemplate="{first} - {last} of {totalRecords}"
                    paginatorTemplate={template2}
                    bodyStyle={{
                      fontSize: 14,
                      height: 50,
                      padding: 18,
                      ...(column.field === 'status' && { color: 'green' }),
                    }}
                    body={column.field === 'view' ? <div onClick={() => handleNavigateedit()}><SvgArrow /></div> : column.field == 'status' ? 'Active' : column.field && 'A012'}
                  />
                ))} */}
              </DataTable>

              
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default TaxationMaster
 
