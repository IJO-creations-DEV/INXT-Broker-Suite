import React, { useEffect, useState } from 'react';
import "../CorrectionJV/index.scss";
import { BreadCrumb } from 'primereact/breadcrumb';
import SvgDot from '../../assets/icons/SvgDot';
import InputField from '../../components/InputField';
import DropDowns from '../../components/DropDowns';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Paginator } from 'primereact/paginator';
import { Dropdown } from 'primereact/dropdown';
import SvgDeleteIcon from '../../assets/icons/SvgDeleteIcon';
import SvgEditIcon from '../../assets/icons/SvgEditIcon';
import DatePicker from '../../components/DatePicker';
import LabelWrapper from '../../components/LabelWrapper';
import { Calendar } from 'primereact/calendar';
import SuccessIcon from '../../assets/icons/SuccessIcon';
import SvgDropdown from '../../assets/icons/SvgDropdown';
import NavBar from '../../components/NavBar';
import { Dialog } from 'primereact/dialog';



const CorrectionJV = () => {
    const [date, setDate] = useState(new Date());
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [visible, setVisible] = useState(false);
    const item = [
        { name: 'A023', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const [selectedCity, setSelectedCity] = useState(item[0]);
    const items = [
        // { label: 'Dashboard', url: '/dashboard' },
        { label: 'Accounts', url: '/accounts' },
        { label: 'Corrections JV', url: '/correctionjv' }
    ];
    const home = { label: "Dashboard" };
    const columns = [
        { field: 'mainAccount1', headerName: 'Main A/c', flex: '1 1 100px' },
        { field: 'subAccount1', headerName: 'Sub A/c', flex: '1 1 100px' },
        { field: 'branch', headerName: 'Branch', flex: '1 1 100px' },
        { field: 'dept', headerName: 'Department', flex: '1 1 100px' },
        { field: 'remarks', headerName: 'Remarks', flex: '1 1 100px' },
        { field: 'amount', headerName: 'Amount', flex: '1 1 100px' },
        { field: 'entry', headerName: 'Entry', flex: '1 1 100px' },
        { field: 'action', headerName: 'Action', flex: '1 1 100px' },
    ];
    const [mainAccount1Value, setMainAccount1Value] = useState('A001');
    const [subAccount1Value, setSubAccount1Value] = useState('B0123');

    const rows = [
        { id: 1, mainAccount1: '', subAccount1: '', branch: '', dept: '', remarks: '', amount: '', entry: '', action: '' },
        { id: 2, mainAccount1: '', subAccount1: '', branch: '', dept: '', remarks: '', amount: '', entry: '', action: '' },
        { id: 3, mainAccount1: '', subAccount1: '', branch: '', dept: '', remarks: '', amount: '', entry: '', action: '' },
        { id: 4, mainAccount1: '', subAccount1: '', branch: '', dept: '', remarks: '', amount: '', entry: '', action: '' },
    ];
    const [first, setFirst] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRowsPerPage(event.rows);
    };
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
    const initialState = {
        description: '',
        TN: '',
        TD: '',
        net: ''

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
                <div className='correction__title'>Corrections JV</div>
            </div>
            <div className="col-12 mb-3 ">
                <BreadCrumb
                    model={items}
                    home={home}
                    className='breadCrums__view'
                    separatorIcon={<SvgDot color={"#000"} />} />
            </div>
            <div className="col-12 md:col-2-5 lg-col-2-5 input__view ">

                {/* <div class="calender_container_claim p-0"> */}
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
                {/* </div> */}
            </div>
            <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
                <DropDowns
                    className='input__filed'
                    label="Transaction Code"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={item}
                    optionLabel="name"
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

            <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
                <DropDowns
                    className='input__filed'
                    label="Division Code"
                    textColor={'#111927'}
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={item}
                    optionLabel="name"
                    textSize={'16'}
                    textWeight={500}
                    dropdownIcon={<SvgDropdown color={"#000"} />}
                />
            </div>
            <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
                <DropDowns
                    className='input__filed'
                    label="Department Code"
                    textColor={'#111927'}
                    textSize={'16'}
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={item}
                    optionLabel="name"
                    textWeight={500}
                    dropdownIcon={<SvgDropdown color={"#000"} />}
                />
            </div>
            <div className="col-12 md:col-12 lg-col-12" style={{ maxWidth: '100%' }}>
                <div className="card">
                    <DataTable
                        style={{ overflowY: 'auto', maxWidth: '100%' }}
                        responsive={true}
                        className='table__view'
                        value={rows}
                        first={first}
                        rows={rowsPerPage}
                        totalRecords={rows.length}

                    >
                        {columns.map((column, index) => (
                            <Column
                                key={column.field}
                                field={column.field}
                                header={column.headerName}
                                bodyStyle={{
                                    fontSize: 14, fontWeight: 500, whiteSpace: 'nowrap', padding: 18, color: '#111927'
                                    // paddingLeft: (column.field === 'description' || column.field === 'remarks' || column.field === 'entry') ? '10px' : '0',
                                }}
                                style={{ width: `${100 / columns.length}%`, boxSizing: 'border-box', fontSize: 14, fontWeight: 500, color: '#000' }}
                                body={
                                    column.field === 'action' ?
                                        <div onClick={() => setVisible(true)}>
                                            <SvgEditIcon
                                            />
                                        </div>
                                        :
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

            <div className="col-12  md:col-2-5 lg-col-2-5 input__view">
                <InputField
                    classNames='input__filed'
                    label="Total Debit"
                    placeholder='10,000.00'
                    textColor={'#111927'}
                    textSize={'16'}
                    textWeight={500}
                    value={values.TN}
                    onChange={(e) => handleChange('TN', e.value)}
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
                    value={values.TN}
                    onChange={(e) => handleChange('TN', e.value)}
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
                    value={values.TN}
                    onChange={(e) => handleChange('TN', e.value)}
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
            <div className="col-12" >
                <Dialog header="Edit Data" visible={visible} style={{ width: '30vw', borderRadius: 30 }} onHide={() => setVisible(false)}>
                    {/* <div className=""> */}
                    <div className="grid m-0 p-0" style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <div className="col-4">
                            Main A/c
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
                            Amount
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
                                Transaction Number 12345
                                is Approved
                            </div>
                            <div className='popup__icon'>
                                <SuccessIcon

                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}

export default CorrectionJV;
