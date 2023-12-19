import React, { useState, useEffect, useRef } from 'react';
import "../Reversals/index.scss";
import { BreadCrumb } from 'primereact/breadcrumb';
import SvgDot from '../../assets/icons/SvgDot';
import InputField from '../../components/InputField';
import DropDowns from '../../components/DropDowns';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Paginator } from 'primereact/paginator';
import SuccessIcon from "../../assets/icons/SuccessIcon"
import SvgDeleteIcon from "../../assets/icons/SvgDeleteIcon"
import SvgEditIcon from '../../assets/icons/SvgEditIcon';
import { Calendar } from 'primereact/calendar';
import LabelWrapper from '../../components/LabelWrapper';
import SvgDropdown from '../../assets/icons/SvgDropdown';
import NavBar from '../../components/NavBar';



const Reversals = () => {
  const [date, setDate] = useState(new Date());
  const items = [
    { label: 'Accounts', url: '/accounts' },
    { label: 'Reversals JV', url: '/reversaljv' }
  ];
  const home = { label: "Dashboard" };

  const columns = [
    { field: 'mainAccount1', headerName: 'Main A/c', flex: 1 },
    { field: 'subAccount1', headerName: 'Sub A/c', flex: 1 },
    { field: 'description', headerName: 'Description', flex: 1 },
    { field: 'branch', headerName: 'Branch', flex: 1 },
    { field: 'remarks', headerName: 'Remarks', flex: 1 },
    { field: 'entry', headerName: 'Entry', flex: 1 },
    { field: 'action', headerName: 'Action', flex: 1 },
  ];

  const rows = [
    { id: 1, mainAccount1: '', subAccount1: '', entry1: '', mainAccount2: '', subAccount2: '', entry2: '', remarks: '', action: '' },
    { id: 2, mainAccount1: '', subAccount1: '', entry1: '', mainAccount2: '', subAccount2: '', entry2: '', remarks: '', action: '' },
    { id: 3, mainAccount1: '', subAccount1: '', entry1: '', mainAccount2: '', subAccount2: '', entry2: '', remarks: '', action: '' },
    { id: 4, mainAccount1: '', subAccount1: '', entry1: '', mainAccount2: '', subAccount2: '', entry2: '', remarks: '', action: '' },
  ];
  const [mainAccount1Value, setMainAccount1Value] = useState('A001');
  const [subAccount1Value, setSubAccount1Value] = useState('B0123');

  const [first, setFirst] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRowsPerPage(event.rows);
  };
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [visibleDeletePopup, setVisibleDeletePopup] = useState(false)
  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setVisiblePopup(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setVisiblePopup(false);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [visiblePopup]);

  return (
    <div className="grid container__reversal m-0"  >
      <div className="col-12">
        <NavBar />
        <div className='correction__title__reversal'>Reversals JV</div>
      </div>
      <div className="col-12 mb-3">
        <BreadCrumb home={home} className='breadCrums__view__reversal' model={items} separatorIcon={<SvgDot color={"#000"} />} />
      </div>
      <div className="col-12 md:col-2-5 lg-col-2-5 input__view__reversal">
        <LabelWrapper
          label={"Date"}
          textSize={"16px"}
          textColor={"#111927"}
          textWeight={500}
        >
          <Calendar
            value={date}
            onChange={(e) => setDate(e.value)}
            className='input__filed__reversal'
          // showIcon
          />

        </LabelWrapper>
      </div>
      <div className="col-12 md:col-2-5 lg-col-2-5 input__view__reversal">
        <DropDowns
          className='input__filed__reversal'
          label="Transaction Code"
          // classNames='input__label'
          textColor={'#111927'}
          textSize={'16'}
          textWeight={500}
          dropdownIcon={<SvgDropdown color={"#000"} />}
        />
      </div>
      <div className="col-12 md:col-4 lg-col-4 input__view__reversal">
        <InputField
          classNames='input__filed__reversal'
          label="Description"
          placeholder='Description here'
          textColor={'#111927'}
          textSize={'16'}
          textWeight={500}
        />
      </div>
      <div className="col-12 md:col-2-5 lg-col-2-5 input__view__reversal">
        <InputField
          classNames='input__filed__reversal'
          label="Transaction Number "
          placeholder='Enter'
          textColor={'#111927'}
          textSize={'16'}
          textWeight={500}
        />
      </div>

      <div className="col-12 md:col-2-5 lg-col-2-5 input__view__reversal">
        <DropDowns
          className='input__filed__reversal'
          label="Division Code"
          textColor={'#111927'}
          textSize={'16'}
          textWeight={500}
          dropdownIcon={<SvgDropdown color={"#000"} />}
        />
      </div>
      <div className="col-12 md:col-2-5 lg-col-2-5 input__view__reversal">
        <DropDowns
          className='input__filed__reversal'
          label="Department Code"
          textColor={'#111927'}
          textSize={'16'}
          textWeight={500}
          dropdownIcon={<SvgDropdown color={"#000"} />}
        />
      </div>
      <div className="col-12 md:col-12 lg-col-12" style={{ maxWidth: '100%' }}>
        <div className="card">
          <DataTable style={{ overflowY: 'auto', maxWidth: '100%' }} responsive={true} className='table__view' value={rows} first={first} rows={rowsPerPage} totalRecords={rows.length}>
            {columns.map((column) => (
              <Column
                style={{ width: `${100 / columns.length}%`, boxSizing: 'border-box', fontSize: 14, fontWeight: 500 }}
                key={column.field}
                field={column.field}
                header={column.headerName}
                bodyStyle={{ fontSize: 14, height: 50, padding: 18 }}
                body={
                  column.field === 'action' ? <div onClick={() => setVisibleDeletePopup(true)} > <SvgDeleteIcon /> </div> :
                    column.field === 'description' ? '-' :
                      column.field === 'remarks' ? '-' :
                        column.field && 'A012'
                }
              />
            ))}
          </DataTable>
          <Paginator
            className='paginator__view'
            first={first}
            rows={rowsPerPage}

            totalRecords={rows.length}
            onPageChange={onPageChange}
          />
        </div>
      </div>

      <div className="col-12 md:col-2-5 lg-col-2-5 input__view__reversal">
        <LabelWrapper
          label={"Date"}
          textSize={"16px"}
          textColor={"#111927"}
          textWeight={500}
        >
          <Calendar
            value={date}
            onChange={(e) => setDate(e.value)}
            className='input__filed__reversal'
          // showIcon
          />

        </LabelWrapper>
      </div>
      <div className="col-12 md:col-2-5 lg-col-2-5 input__view__reversal">
        <DropDowns
          className='input__filed__reversal'
          label="Transaction Code"
          // classNames='input__label'
          textColor={'#111927'}
          textSize={'16'}
          textWeight={500}
          dropdownIcon={<SvgDropdown color={"#000"} />}
        />
      </div>
      <div className="col-12 md:col-4 lg-col-4 input__view__reversal">
        <InputField
          classNames='input__filed__reversal'
          label="Description"
          placeholder='Description here'
          textColor={'#111927'}
          textSize={'16'}
          textWeight={500}
        />
      </div>
      <div className="col-12 md:col-2-5 lg-col-2-5 input__view__reversal">
        <InputField
          classNames='input__filed__reversal'
          label="Transaction Number "
          placeholder='Enter'
          textColor={'#111927'}
          textSize={'16'}
          textWeight={500}
        />
      </div>

      <div className="col-12 md:col-2-5 lg-col-2-5 input__view__reversal">
        <DropDowns
          className='input__filed__reversal'
          label="Division Code"
          textColor={'#111927'}
          textSize={'16'}
          textWeight={500}
          dropdownIcon={<SvgDropdown color={"#000"} />}
        />
      </div>
      <div className="col-12 md:col-2-5 lg-col-2-5 input__view__reversal">
        <DropDowns
          className='input__filed__reversal'
          label="Department Code"
          textColor={'#111927'}
          textSize={'16'}
          textWeight={500}
          dropdownIcon={<SvgDropdown color={"#000"} />}
        />
      </div>
      <div className="col-12 md:col-12 lg-col-12 button__view__corrections__reversal">
        <div>
          <Button
            label='Approve'

            className='correction__btn__reversal'
            onClick={() => setVisiblePopup(true)}
          />
        </div>
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

    </div>
  );
}

export default Reversals;
