import React, { useState } from 'react'
import { Button } from 'primereact/button'
import SvgAdd from '../../../assets/icons/SvgAdd'
import "../SubAccountMaster/index.scss"
import { BreadCrumb } from 'primereact/breadcrumb'
import SvgDot from '../../../assets/icons/SvgDot'
import NavBar from "../../../components/NavBar"
import SvgFilters from '../../../assets/icons/SvgFilters'
import InputField from "../../../components/InputField"
import SvgSearchIcon from '../../../assets/icons/SvgSearchIcon'
import { Paginator } from 'primereact/paginator'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import SvgArrow from '../../../assets/icons/SvgArrow'
import { Dropdown } from 'primereact/dropdown'
import { useNavigate } from 'react-router-dom'
import { InputText } from 'primereact/inputtext'
import { ProductService } from './data'
// import { useNavigation } from '';

const SubAccountMaster = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/master/finance/subaccount/subadd')
  };
  const handleNavigateedit = () => {
    navigate('/master/finance/subaccount/saveandedit')
  }

  const items = [
    { id: 1, label: 'Sub Account', url: '/subaccount' },
  ];
  const home = { label: "Master" };

  const columns = [
    { field: 'subAccount', headerName: 'Sub Account Code', flex: 1 },
    { field: 'shorDesc', headerName: 'Short Description', flex: 1 },
    { field: 'desc', headerName: 'Main Account Code', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
    { field: 'view', headerName: 'View', flex: 1 },
  ];

  const [first, setFirst] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRowsPerPage(event.rows);
  };

  const rows = [
    { id: 1, subAccount: '', shorDesc: '', desc: '', status: '', view: '' },
  ];

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
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40%' }}>
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
    <div className='grid  container__sub__account__master'>
      <div className='col-12'>
        <NavBar />
      </div>
      <div className='col-12 md:col-6 lg:col-6'>
        <div className='add__icon__title'>Sub Account Master</div>
        <div className='mt-3'>
          <BreadCrumb
            home={home}
            className={items.map((val) => {
              return val.label == '/subaccount' ? 'breadCrums__view__reversal' : 'item__color'
            })}
            model={items}
            itemTemplate={(item, index, items) => (
              <span
                key={index}
                style={{
                  color: index === items.length - 1 ? 'red' : 'red',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  if (item.url) {
                    navigate(item.url);
                  }
                }}
              >
                {item.label}
              </span>
            )}
            separatorIcon={<SvgDot color={"#000"} />} />
        </div>
      </div>
      <div className='col-12 md:col-6 lg:col-6 add__icon__alighn'>
        <div className='add__icon__view' onClick={handleNavigate}>
          <div className='add__icon' >
            <SvgAdd />
          </div>
          <div className='add__text'>
            Add
          </div>

        </div>
      </div>
      <div className='col-12 m-0 '>
        <div className='sub__account__sub__container'>
          <div className='col-12 search__filter__view'>
            <div className='col-12 md:col-10 lg:col-10'>
              <div className='searchIcon__view__input'>
                <span className='p-1'> <SvgSearchIcon /></span>
                <InputText
                  classNames='input__sub__account'
                  placeholder='Search By Sub Account Code'
                />
              </div>
            </div>
            <div className='col-12 md:col-2 lg:col-2'>
              <div className='sort__filter__view'>
                <div className='sort__by__text'>Sort By</div>
                <div>
                  <SvgFilters />
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 '>
            <div className='main__tabel__title p-2'>Main Account List</div>
          </div>
          {/* <div className="col-12 md:col-12 lg-col-12" style={{ maxWidth: '100%' }}>
            <div className="card">
              <DataTable
                style={{ overflowY: 'auto', maxWidth: '100%' }}
                responsive={true}
                className='table__view'
                paginator
                paginatorLeft
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                // paginatorTemplate="RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} - {last} of {totalRecords}"
                paginatorTemplate={template2}
                onPage={onPageChange}
                onPageChange={onPageChange}
              >
                {columns.map((column) => (
                  <Column
                    style={{
                      width: column.field === 'rowcount' ? '10%' : `${90 / (columns.length - 1)}%`, // Set width for the dropdown column
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
                    body={column.field === 'view' ? <SvgArrow /> : column.field && 'A012'}
                  />
                ))}
              </DataTable>


            </div>
          </div> */}
          <div className="col-12 md:col-12 lg-col-12" style={{ maxWidth: '100%' }}>
            <div className="card">
              <DataTable
                value={rows}
                style={{ overflowY: 'auto', maxWidth: '100%' }}
                responsive={true}
                className='table__view'
                paginator
                paginatorLeft
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                currentPageReportTemplate="{first} - {last} of {totalRecords}"
                paginatorTemplate={template2}
                onPage={onPageChange}
                onPageChange={onPageChange}
              >
                {columns.map((column) => (
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
                ))}
              </DataTable>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default SubAccountMaster