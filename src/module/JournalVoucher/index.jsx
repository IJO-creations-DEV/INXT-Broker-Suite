import React, { useState } from 'react';
import "../JournalVoucher/index.scss";
import { BreadCrumb } from 'primereact/breadcrumb';
import SvgDot from '../../assets/icons/SvgDot';
import InputField from '../../components/InputField';
import DropDowns from '../../components/DropDowns';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Paginator } from 'primereact/paginator';
import { Dropdown } from 'primereact/dropdown';
import SvgEdit from '../../assets/icons/SvgEdit';
import { dataa } from './data';
import SuccessIcon from '../../assets/icons/SuccessIcon';
import LabelWrapper from '../../components/LabelWrapper';
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';
import SvgDropdown from '../../assets/icons/SvgDropdown';



const JournalVoucher = () => {
  const [date, setDate] = useState();
  const [visible, setVisible] = useState(false);
  const items = [
    // { label: 'Dashboard', url: '/dashboard' },
    { label: 'Accounts', url: '/accounts' },
    { label: 'Journal Voucher', url: '/journalvoucher' }
  ];
  const home = { label: "Dashboard" };
  const columns = [
    { field: 'mainAccount1', headerName: 'Main A/c', flex: '1 1 100px' },
    { field: 'subAccount1', headerName: 'Sub A/c', flex: '1 1 100px' },
    { field: 'entry1', headerName: 'Remarks', flex: '1 1 100px' },
    { field: 'mainAccount2', headerName: 'Foreign Amount', flex: '1 1 100px' },
    { field: 'subAccount2', headerName: 'Currency', flex: '1 1 100px' },
    { field: 'entry2', headerName: 'Local Amount', flex: '1 1 100px' },
    { field: 'remarks', headerName: 'Entry', flex: '1 1 100px' },
    { field: 'action', headerName: 'Action', flex: '1 1 100px' },
  ];

  const rows = [
    { id: 1, mainAccount1: '', subAccount1: '', entry1: '', mainAccount2: '', subAccount2: '', entry2: '', remarks: '', amount: '' },
    { id: 2, mainAccount1: '', subAccount1: '', entry1: '', mainAccount2: '', subAccount2: '', entry2: '', remarks: '', amount: '' },
    { id: 3, mainAccount1: '', subAccount1: '', entry1: '', mainAccount2: '', subAccount2: '', entry2: '', remarks: '', amount: '' },
    { id: 4, mainAccount1: '', subAccount1: '', entry1: '', mainAccount2: '', subAccount2: '', entry2: '', remarks: '', amount: '' },
  ];

  const [first, setFirst] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRowsPerPage(event.rows);
  };

  const [selectedRows, setSelectedRows] = useState([]);

  const onSelectionChange = (e) => {
    setSelectedRows(e.value);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [visiblePopup, setVisiblePopup] = useState(false);

  const data = [{
    id: 1,
    value: 'hdg'
  },
  {
    id: 2,
    value: 'hdsg'
  }, {
    id: 3,
    value: 'hsdg'
  }
  ]

  return (
    <div className="grid container__correction m-0">
      <div className="col-12">
        <div className='correction__title'>Journal Voucher</div>
      </div>
      <div className="col-12 mb-3">
        <BreadCrumb
          model={items}
          home={home}
          className='breadCrums__view'
          separatorIcon={<SvgDot color={"#000"} />} />
      </div>
      <div className="col-12 md:col-2-5 lg-col-2-5 input__view ">
        <LabelWrapper
          label={"Date"}
          textSize={"16px"}
          textColor={"#111927"}
          textWeight={500}
        >
          <Calendar
            value={date}
            onChange={(e) => setDate(e.value)}
            className='input__filed'
          />

        </LabelWrapper>
      </div>
      <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
        <DropDowns
          className='input__filed'
          label="Transaction Code"
          // classNames='input__label'
          textColor={'#111927'}
          textSize={'16'}
          textWeight={500}
          dropdownIcon={<SvgDropdown color={"#000"}/>}
        />
      </div>
      <div className="col-12 md:col-4 lg-col-4 input__view">
        <InputField
          classNames='input__filed'
          label="Description"
          placeholder='Description here'
          textColor={'#111927'}
          textSize={'16'}
          textWeight={500}
        />
      </div>
      <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
        <InputField
          classNames='input__filed'
          label="Transaction Number "
          placeholder='Enter'
          textColor={'#111927'}
          textSize={'16'}
          textWeight={500}
        />
      </div>

      <div className='col-6'>
        <div className={'policy__text'}>Journal Voucher History</div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "flex-end" }}
        className='col-6'
      >
        <Button onClick={() => setVisible(true)} className={'buttons__edit'}>
          <div className={'edit__icon'}>
            <SvgEdit />
          </div>
          <div className={'exit__text'}>Exit</div>
        </Button>
      </div>
      <div className="col-12 md:col-12 lg-col-12">
        <div className="card">
          <DataTable
            value={dataa}
            first={first}
            rows={rowsPerPage}
            totalRecords={dataa.length}
            responsive
            selection={selectedRows}
            onSelectionChange={onSelectionChange}
            className='header__text'
          >
            {columns.map((column) => (
              <Column
                key={column.field}
                field={column.field}
                header={column.headerName}
                style={{ flex: column.flex }}
                body={(rowData) =>
                  column.field === 'action' ? (
                    <div>
                      <SvgDot />
                    </div>
                  ) : (
                    <span>{rowData[column.field]}</span>
                  )
                }
              />
            ))}
          </DataTable>
          <Paginator
            className='paginator__view__addPolicy'
            first={first}
            rows={rowsPerPage}
            totalRecords={dataa.length}
            onPageChange={onPageChange}
          />
        </div>
      </div>

      <div className="col-12  md:col-2-5 lg-col-2-5 input__view">
        <InputField
          classNames='input__filed'
          label="Total Debit"
          placeholder='10,000.00'
          textColor={'#111927'}
          textSize={'16'}
          textWeight={500}
        />
      </div>
      <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
        <InputField
          classNames='input__filed'
          label="Net"
          placeholder='10,000.00'
          textColor={'#111927'}
          textSize={'16'}
          textWeight={500}
        />
      </div>
      <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
        <InputField
          classNames='input__filed'
          label="Transaction Number "
          placeholder='10,000.00'
          textColor={'#111927'}
          textSize={'16'}
          textWeight={500}
        />
      </div>
      <div className="col-12 md:col-12 lg-col-12 button__view__corrections">
        <div>
          <Button
            label='Approve'
            className='correction__btn'
            onClick={() => {
              setVisiblePopup(true)
            }}
          />
          <Button
            label='Print'
            className='correction__print__btn'
          />
        </div>
      </div>

      <div className="card flex justify-content-center">
        {/* <Button label="Show" icon="pi pi-external-link"  /> */}
        <Dialog header="Edit Data" visible={visible} className='dialog__view' onHide={() => setVisible(false)}>
          <div className='popup__body'>
            <div className="col-12 md:col-5 ">
              Division :
            </div>
            <div className="col-12 md:col-7 input__view">
              <DropDowns
                classNames='input__filed'
                // label="Net"
                placeholder='10,000.00'
                textColor={'#111927'}
                textSize={'16'}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"}/>}
              />
            </div>
          </div>
          <div className='popup__body'>
            <div className="col-12 md:col-5">
              Department :
            </div>
            <div className="col-12 md:col-7 input__view ">
              <DropDowns
                classNames='input__filed'
                // label="Net"
                placeholder='10,000.00'
                textColor={'#111927'}
                textSize={'16'}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"}/>}
              />
            </div>
          </div>
          <div className='popup__body'>
            <div className="col-12 md:col-5">
              Main A/c :
            </div>
            <div className="col-12 md:col-7 input__view">
              <DropDowns
                classNames='input__filed'
                // label="Net"
                placeholder='10,000.00'
                textColor={'#111927'}
                textSize={'16'}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"}/>}
              />
            </div>
          </div>
          <div className='popup__body'>
            <div className="col-12 md:col-5">
              Sub A/c :
            </div>
            <div className="col-12 md:col-7 input__view">
              <DropDowns
                classNames='input__filed'
                // label="Net"
                placeholder='10,000.00'
                textColor={'#111927'}
                textSize={'16'}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"}/>}
              />
            </div>
          </div>
          <div className='popup__body'>
            <div className="col-12 md:col-5">
              Foreign Amount :
            </div>
            <div className="col-12 md:col-7 input__view">
              <DropDowns
                classNames='input__filed'
                // label="Net"
                placeholder='10,000.00'
                textColor={'#111927'}
                textSize={'16'}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"}/>}
              />
            </div>
          </div>
          <div className='popup__body'>
            <div className="col-12 md:col-5">
              Entry :
            </div>
            <div className="col-12 md:col-7 input__view">
              <DropDowns
                classNames='input__filed'
                // label="Net"
                placeholder='10,000.00'
                textColor={'#111927'}
                textSize={'16'}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"}/>}
              />
            </div>
          </div>
          <div className='popup__body'>
            <div className="col-12 md:col-5">
              Currency :
            </div>
            <div className="col-12 md:col-7 input__view">
              <DropDowns
                classNames='input__filed'
                // label="Net"
                placeholder='10,000.00'
                textColor={'#111927'}
                textSize={'16'}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"}/>}
              />
            </div>
          </div>
          <div className="col-12 save__btn__view">
            <Button
              label='Save'
              className='save__button'
              onClick={() => setVisiblePopup(false)}
            />
          </div>
        </Dialog>
      </div>


      {/* <div className=""> */}
      {/* {visiblePopup && (
          <div className="col-12  custom-modal-overlay">
            <div className=" custom-modal">
             <div  className='popup__body'>
             <div className="col-12 md:col-5 ">
                Division :
              </div>
              <div className="col-12 md:col-7">
                <DropDowns
                  classNames='input__filed'
                  // label="Net"
                  placeholder='10,000.00'
                  textColor={'#111927'}
                  textSize={'16'}
                  textWeight={500}
                />
              </div>
             </div>
             <div  className='popup__body'>
             <div className="col-12 md:col-5">
             Department :
              </div>
              <div className="col-12 md:col-7 ">
                <DropDowns
                  classNames='input__filed'
                  // label="Net"
                  placeholder='10,000.00'
                  textColor={'#111927'}
                  textSize={'16'}
                  textWeight={500}
                />
              </div>
             </div>
             <div  className='popup__body'>
             <div className="col-12 md:col-5">
             Main A/c :
              </div>
              <div className="col-12 md:col-7 ">
                <DropDowns
                  classNames='input__filed'
                  // label="Net"
                  placeholder='10,000.00'
                  textColor={'#111927'}
                  textSize={'16'}
                  textWeight={500}
                />
              </div>
             </div>
             <div  className='popup__body'>
             <div className="col-12 md:col-5">
             Sub A/c :
              </div>
              <div className="col-12 md:col-7">
                <DropDowns
                  classNames='input__filed'
                  // label="Net"
                  placeholder='10,000.00'
                  textColor={'#111927'}
                  textSize={'16'}
                  textWeight={500}
                />
              </div>
             </div>
             <div  className='popup__body'>
             <div className="col-12 md:col-5">
             Foreign Amount :
              </div>
              <div className="col-12 md:col-7">
                <DropDowns
                  classNames='input__filed'
                  // label="Net"
                  placeholder='10,000.00'
                  textColor={'#111927'}
                  textSize={'16'}
                  textWeight={500}
                />
              </div>
             </div>
             <div  className='popup__body'>
             <div className="col-12 md:col-5">
             Entry : 
              </div>
              <div className="col-12 md:col-7">
                <DropDowns
                  classNames='input__filed'
                  // label="Net"
                  placeholder='10,000.00'
                  textColor={'#111927'}
                  textSize={'16'}
                  textWeight={500}
                />
              </div>
             </div>
             <div  className='popup__body'>
             <div className="col-12 md:col-5">
            Currency :
              </div>
              <div className="col-12 md:col-7">
                <DropDowns
                  classNames='input__filed'
                  // label="Net"
                  placeholder='10,000.00'
                  textColor={'#111927'}
                  textSize={'16'}
                  textWeight={500}
                />
              </div>
             </div>
            <div className="col-12 save__btn__view">
              <Button
              label='Save'
              className='save__button'
              onClick={() => setVisiblePopup(false)}
              />
            </div>

              
            </div>
          </div>
        )} */}
      <div className="col-12">
        {visiblePopup && (
          <div className="grid custom-modal-overlay">
            <div className="col-10 md:col-2 lg:col-2 custom-modal">
              <div className='popup__text'>
                Approved
              </div>
              <div className='popup__icon'>
                <SuccessIcon

                />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* </div> */}

    </div>
  );
}

export default JournalVoucher;
