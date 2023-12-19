import React, { useState, useEffect } from 'react';
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
import NavBar from '../../components/NavBar';
import SvgEditIcon from '../../assets/icons/SvgEditIcon';
import SvgDeleteIcon from '../../assets/icons/SvgDeleteIcon';



const JournalVoucher = () => {
  const [date, setDate] = useState(new Date());
  const item = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  const [selectedCity, setSelectedCity] = useState(item[0]);
  const [visible, setVisible] = useState(false);
  const [visibleEditData, setVisibleEditData] = useState(false);
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
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [visibleDeletePopup, setVisibleDeletePopup] = useState(false)
  const initialState = {
    description: '123373',
    TN: 2000
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (fieldName, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };
  useEffect(() => {
    const timerId = setTimeout(() => {
      setVisiblePopup(false);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [visiblePopup]);

  return (
    <div className="grid container__correction m-0">
      <div className="col-12">
        <NavBar />
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
          // showIcon
          />

        </LabelWrapper>
      </div>
      <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
        <DropDowns
          className='input__filed'
          label="Transaction Code"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={item}
          optionLabel="name"
          // classNames='input__label'
          textColor={'#111927'}
          textSize={'16'}
          textWeight={500}
          dropdownIcon={<SvgDropdown color={"#000"} />}
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
          value={values.description}
          onChange={(e) => handleChange('description', e.value)}

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
          value={values.TN}
          onChange={(e) => handleChange('TN', e.value)}
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
          <div className={'exit__text'}>Add</div>
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
                bodyStyle={{ padding: 18 }}
                body={(rowData) =>
                  column.field === 'action' ? (
                    <div className='delete__edit__icon'>
                      <div onClick={()=>setVisibleDeletePopup(true)}>
                        <SvgDeleteIcon />
                      </div>
                      <div onClick={() => setVisibleEditData(true)}>
                        <SvgEditIcon
                        />
                      </div>
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
      {/* <Dialog header="Add Data" visible={visible} className="model_container" style={{ width: '30vw' }} onHide={() => setVisible(false)}>
        <div class="grid">
          <div class="col-12">
            <div className="detailvoucher__container">
              <label className="labeltext__container">Division :</label>
              <DropDowns
                className="field__container"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={item}
                optionLabel="name"
              />
            </div>
          </div>
          <div class="col-12">
            <div className="detailvoucher__container">
              <label className="labeltext__container">Department :</label>
              <DropDowns className="field__container"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={item}
                optionLabel="name" />
            </div>
          </div>

          <div class="col-12">
            <div className="detailvoucher__container">
              <label className="labeltext__container">Main A/c :</label>
              <DropDowns className="field__container"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={item}
                optionLabel="name"
              />
            </div>
          </div>
          <div class="col-12">
            <div className="detailvoucher__container">
              <label className="labeltext__container">Sub A/c :
              </label>
              <DropDowns className="field__container"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={item}
                optionLabel="name" />
            </div>
          </div>
          <div class="col">
            <div className="detailvoucher__container">
              <label className="labeltext__container">Foreign Amount :
              </label>
              <DropDowns classNames="field__container"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={item}
                optionLabel="name" />
            </div>
          </div>

          <div class="col-12">
            <div className="detailvoucher__container">
              <label className="labeltext__container">Entry :</label>
              <DropDowns className="field__container"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={item}
                optionLabel="name" />
            </div>
          </div>
          <div class="col-12">
            <div className="detailvoucher__container">
              <label className="labeltext__container">Currency :</label>
              <DropDowns className="field__container"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={item}
                optionLabel="name" />
            </div>
          </div>



        </div>


        <div className="next_container">

          <Button className="submit_button p-0" label="Add"
          />
        </div>


      </Dialog> */}
      <div className="col-12" >
        <Dialog header="Add Data" visible={visible} style={{ width: '30vw', borderRadius: 30 }} onHide={() => setVisible(false)}>
          {/* <div className=""> */}
          <div className="grid m-0 p-0" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div className="col-4">
            Division :
            </div>
            <div className="col-8">
              <Dropdown
                style={{ width: '100%' }}
                className=''
                dropdownIcon={<SvgDropdown />}
              />
            </div>
            <div className="col-4">
              Sub A/c
            </div>
            <div className="col-8">
              <Dropdown
                style={{ width: '100%' }}
                className=''
                dropdownIcon={<SvgDropdown />}
              />
            </div>
            <div className="col-4">
            Currency
            </div>
            <div className="col-8">
              <Dropdown
                style={{ width: '100%' }}
                className=''
                dropdownIcon={<SvgDropdown />}
              />
            </div>
            <div className="col-4">
              Branch
            </div>
            <div className="col-8">
              <Dropdown
                style={{ width: '100%' }}
                className=''
                dropdownIcon={<SvgDropdown />}
              />
            </div>
            <div className="col-4">
              Department
            </div>
            <div className="col-8">
              <Dropdown
                style={{ width: '100%' }}
                className=''
                dropdownIcon={<SvgDropdown />}
              />
            </div>
            <div className="col-4">
              Remarks
            </div>
            <div className="col-8">
              <Dropdown
                style={{ width: '100%' }}
                className=''
                dropdownIcon={<SvgDropdown />}
              />
            </div>
            <div className="col-4">
            Foreign Amount
            </div>
            <div className="col-8">
              <Dropdown
                style={{ width: '100%' }}
                className=''
                dropdownIcon={<SvgDropdown />}
              />
            </div>
            <div className="col-4">
              Entry
            </div>
            <div className="col-8">
              <Dropdown
                style={{ width: '100%' }}
                className=''
                dropdownIcon={<SvgDropdown />}
              />
            </div>
            <div className="col-12 save__popup__correction" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <Button
                onClick={() => {
                  setVisible(false)
                  setVisiblePopup(true)
                }}
                style={{ height: 40, width: 130, backgroundColor: '#6366F1', borderRadius: 31 }}
                label='Add'

              />
            </div>
          </div>

          {/* </div> */}
        </Dialog>
      </div>
      <div className="col-12" >
        <Dialog header="Edit Data" visible={visibleEditData} style={{ width: '30vw', borderRadius: 30 }} onHide={() => setVisibleEditData(false)}>
          {/* <div className=""> */}
          <div className="grid m-0 p-0" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div className="col-4">
            Division :
            </div>
            <div className="col-8">
              <Dropdown
                style={{ width: '100%' }}
                className=''
                dropdownIcon={<SvgDropdown />}
              />
            </div>
            <div className="col-4">
              Sub A/c
            </div>
            <div className="col-8">
              <Dropdown
                style={{ width: '100%' }}
                className=''
                dropdownIcon={<SvgDropdown />}
              />
            </div>
            <div className="col-4">
            Currency
            </div>
            <div className="col-8">
              <Dropdown
                style={{ width: '100%' }}
                className=''
                dropdownIcon={<SvgDropdown />}
              />
            </div>
            <div className="col-4">
              Branch
            </div>
            <div className="col-8">
              <Dropdown
                style={{ width: '100%' }}
                className=''
                dropdownIcon={<SvgDropdown />}
              />
            </div>
            <div className="col-4">
              Department
            </div>
            <div className="col-8">
              <Dropdown
                style={{ width: '100%' }}
                className=''
                dropdownIcon={<SvgDropdown />}
              />
            </div>
            <div className="col-4">
              Remarks
            </div>
            <div className="col-8">
              <Dropdown
                style={{ width: '100%' }}
                className=''
                dropdownIcon={<SvgDropdown />}
              />
            </div>
            <div className="col-4">
            Foreign Amount
            </div>
            <div className="col-8">
              <Dropdown
                style={{ width: '100%' }}
                className=''
                dropdownIcon={<SvgDropdown />}
              />
            </div>
            <div className="col-4">
              Entry
            </div>
            <div className="col-8">
              <Dropdown
                style={{ width: '100%' }}
                className=''
                dropdownIcon={<SvgDropdown />}
              />
            </div>
            <div className="col-12 save__popup__correction" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <Button
                onClick={() => {
                  setVisible(false)
                  setVisiblePopup(true)
                }}
                style={{ height: 40, width: 130, backgroundColor: '#6366F1', borderRadius: 31 }}
                label='Save'

              />
            </div>
          </div>

          {/* </div> */}
        </Dialog>
      </div>

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
      <div className="col-12">
        {visibleDeletePopup && (
          <div className="grid custom-modal-overlay__delete">
            <div className="col-10 md:col-2 lg:col-2 custom-modal__delete">
              <div className='delete__text'>Do you want to delete this entry?</div>
              <div className='yes__no__view'>
                <Button
                  label='No'
                  className='no__view'
                  onClick={() => { setVisibleDeletePopup(false) }}
                />
                <Button
                  label='Yes'
                  className='yes__view'
                  onClick={() => { setVisibleDeletePopup(false) }}
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
