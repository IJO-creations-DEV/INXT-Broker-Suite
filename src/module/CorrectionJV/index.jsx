import React, { useState } from 'react';
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



const CorrectionJV = () => {
    const items = [
        // { label: 'Dashboard', url: '/dashboard' },
        { label: 'Accounts', url: '/accounts' },
        { label: 'Corrections JV', url: '/correctionjv' }
    ];
    const home = { label: "Dashboard" };
    const columns = [
        { field: 'mainAccount1', headerName: 'Main A/c', flex: '1 1 100px' },
        { field: 'subAccount1', headerName: 'Sub A/c', flex: '1 1 100px' },
        { field: 'entry1', headerName: 'Entry', flex: '1 1 100px' },
        { field: 'mainAccount2', headerName: 'Main A/c', flex: '1 1 100px' },
        { field: 'subAccount2', headerName: 'Sub A/c', flex: '1 1 100px' },
        { field: 'entry2', headerName: 'Entry', flex: '1 1 100px' },
        { field: 'remarks', headerName: 'Remarks', flex: '1 1 100px' },
        { field: 'amount', headerName: 'Amount', flex: '1 1 100px' },
    ];
    const [mainAccount1Value, setMainAccount1Value] = useState('A001');
    const [subAccount1Value, setSubAccount1Value] = useState('B0123');

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
                <div className='correction__title'>Corrections JV</div>
            </div>
            <div className="col-12 mb-3">
                <BreadCrumb
                    model={items}
                    home={home}
                    className='breadCrums__view'
                    separatorIcon={<SvgDot color={"#000"} />} />
            </div>
            <div className="col-12 md:col-2-5 lg-col-2-5 input__view ">
                <DropDowns
                    className='input__filed'
                    label="Date"
                    textColor={'#111927'}
                    textSize={'16'}
                    textWeight={500}
                />
            </div>
            <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
                <DropDowns
                    className='input__filed'
                    label="Transaction Code"
                    // classNames='input__label'
                    textColor={'#111927'}
                    textSize={'16'}
                    textWeight={500}
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

            <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
                <DropDowns
                    className='input__filed'
                    label="Division Code"
                    textColor={'#111927'}
                    textSize={'16'}
                    textWeight={500}
                />
            </div>
            <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
                <DropDowns
                    className='input__filed'
                    label="Department Code"
                    textColor={'#111927'}
                    textSize={'16'}
                    textWeight={500}
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

                                bodyStyle={{ fontSize: 14, fontWeight: 500, whiteSpace: 'nowrap' }}
                                style={{ width: `${100 / columns.length}%`, boxSizing: 'border-box', fontSize: 14, fontWeight: 500, color: '#000' }}
                                body={
                                    column.field === 'amount' ? '1000' :
                                        column.field.startsWith('mainAccount') ?
                                            <DropDowns
                                                value={mainAccount1Value}
                                                onChange={(e) => setMainAccount1Value(e.value)}
                                                options={[
                                                    { label: 'Option 1', value: 'A001' },
                                                    { label: 'Option 2', value: 'A002' },
                                                    // Add more options as needed
                                                ]}
                                                className='tabel__dropdown'
                                            />
                                            :
                                            column.field.startsWith('subAccount') ?
                                                <DropDowns
                                                    value={subAccount1Value}
                                                    onChange={(e) => setSubAccount1Value(e.value)}
                                                    options={[
                                                        { label: 'Option A', value: 'B0123' },
                                                        { label: 'Option B', value: 'B0456' },
                                                        // Add more options as needed
                                                    ]}
                                                    className='tabel__dropdown'
                                                />
                                                :
                                                column.field === 'description' ? '-' :
                                                    column.field === 'remarks' ? '-' :
                                                        column.field && 'Debit'
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
                    />
                    <Button
                        label='Print'
                        className='correction__print__btn'
                    />
                </div>
            </div>

        </div>
    );
}

export default CorrectionJV;
