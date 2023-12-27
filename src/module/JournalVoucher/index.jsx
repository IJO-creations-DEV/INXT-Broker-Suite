import { BreadCrumb } from 'primereact/breadcrumb';
import React, { useState } from 'react'
import NavBar from '../../components/NavBar';
import SvgDot from '../../assets/icons/SvgDot';
import "../JournalVoucher/index.scss"
import SvgAdd from '../../assets/icons/SvgAdd';
import { useNavigate } from 'react-router-dom';
import { InputSwitch } from 'primereact/inputswitch';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import SvgFilters from '../../assets/icons/SvgFilters';
import { InputText } from 'primereact/inputtext';
import SvgSearchIcon from '../../assets/icons/SvgSearchIcon';
import { Dropdown } from 'primereact/dropdown';
import SvgArrow from '../../assets/icons/SvgArrow';
import { sassFalse } from 'sass';
import ArrowLeftIcon from '../../assets/icons/ArrowLeftIcon';
import SvgEye from '../../assets/icons/SvgEye';
import { dataa } from './data';

const JournalVoucher = () => {
  const navigate = useNavigate()
  const items = [
    { id: 1, label: 'Journal Voucher', url: '/subaccount' },
  ];
  const home = { label: "Accounts " };
  const handleNavigate = () => {
    navigate('/journalvoucher/addjournalvoucture')
  };
  const handleNavigateedit = () => {
    navigate('/journalvoucher/detailsjournalvocture')
  }
  const columns = [
    { field: 'subAccount', headerName: 'Transaction Code', flex: 1 },
    { field: 'shorDesc', headerName: 'Transaction Number', flex: 1 },
    { field: 'desc', headerName: 'Date', flex: 1 },
    // { field: 'status', headerName: 'Status', flex: 1 },
    { field: 'view', headerName: 'View', flex: 1 },
  ];

  const [first, setFirst] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [checked, setChecked] = useState(true);
  const [sort, setSort] = useState(false)
  const [tableData, setTableData] = useState(dataa);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRowsPerPage(event.rows);
  };

  const rows = [
    { id: 1, subAccount: '', shorDesc: '', desc: '', view: '' },
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
          <div className='row__count__view'>
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
    <div className='grid  container__Journal__Voture'>
      <div className='col-12'>
        <NavBar />
      </div>
      <div className='col-12 md:col-6 lg:col-6 mb-1'>
        <div className='add__icon__title__Journal__Voture'>Journal Voucher</div>

        <div className='mt-4'>
          <BreadCrumb
            home={home}
            className={items.map((val) => {
              return val.label === '/subaccount' ? 'breadCrums__view__reversal__Journal__Voture' : 'item__color__Journal__Voture';
            })}
            model={items}

            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>
      <div className='col-12 md:col-6 lg:col-6 add__icon__alighn__Journal__Voture mb-3'>
        <div className='add__icon__view__Journal__Voture' onClick={handleNavigate}>
          <div className='add__icon__Journal__Voture' >
            <SvgAdd color={'#fff'} />
          </div>
          <div className='add__text__Journal__Voture'>
            Add Voucher
          </div>

        </div>
      </div>
      <div className='col-12 m-0 '>
        <div className='sub__container__Journal__Voture'>
          <div className='col-12 search__filter__view__Journal__Voture'>
            <div className='col-12 md:col-10 lg:col-10'>
              <div className='searchIcon__view__input__Journal__Voture'>
                <span className='p-1'> <SvgSearchIcon /></span>
                <InputText
                  style={{ width: '100%' }}
                  classNames='input__sub__account__Journal__Voture'
                  placeholder='Search By Sub Account Code'
                />
              </div>
            </div>
            <div className='col-12 md:col-2 lg:col-2'>
              <div className='sort__filter__view__Journal__Voture' onClick={() => setSort(!sort)}>
                <div className='sort__by__text__Journal__Voture'>Sort By</div>
                <div>
                  <SvgFilters />
                </div>
              </div>
              {
                sort &&
                <div className='sort__by__data'  >
                  <div className="sort__title">
                    Name
                  </div>
                  <div className="sort__title mt-3">
                    Date
                  </div>
                </div>
              }
            </div>
          </div>
          <div className='col-12 '>
            <div className='main__tabel__title__Journal__Voture p-2'>Journal Voucher history</div>
          </div>

          <div className="col-12 md:col-12 lg-col-12" style={{ maxWidth: '100%' }}>
            <div className="card">
              <DataTable
                value={tableData}
                style={{ overflowY: 'auto', maxWidth: '100%' }}
                responsive={true}
                className='table__view__Journal__Voture'
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
                    body={column.field === 'view' ? <div onClick={() => handleNavigateedit()}> <SvgEye/></div> : 
                  column.field && 'Trans00123'}
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

export default JournalVoucher
