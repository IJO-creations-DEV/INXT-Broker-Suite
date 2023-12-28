
import { BreadCrumb } from 'primereact/breadcrumb'
import React, { useEffect, useState, useRef } from 'react'
import NavBar from '../../../components/NavBar';
import DropDowns from '../../../components/DropDowns';
import SvgDropdown from '../../../assets/icons/SvgDropdown';
import InputField from '../../../components/InputField';
import { Calendar } from 'primereact/calendar';
import LabelWrapper from '../../../components/LabelWrapper';
import SvgDatePicker from '../../../assets/icons/SvgDatePicker';
import SvgDot from '../../../assets/icons/SvgDot';
import "../AddJournalVoucture/index.scss"
import ArrowLeftIcon from "../../../assets/icons/ArrowLeftIcon"
import SvgAddBlue from "../../../assets/icons/SvgAddBlue"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import SvgArrow from '../../../assets/icons/SvgArrow';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import SvgDeleteIcon from '../../../assets/icons/SvgDeleteIcon';
import SvgEditIcon from '../../../assets/icons/SvgEditIcon';
// import { Toast } from 'primereact/toast';
import { useFormik } from 'formik';
import AddData from './AddData/AddData';
import SvgTable from '../../../assets/icons/SvgTable';
import CustomToast from "../../../components/Toast";
import SuccessIcon from '../../../assets/icons/SuccessIcon';


const AddJournalVocture = () => {
    const [buttonshow, setButtonShow] = useState(0)
    const [products, setProducts] = useState([]);
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const isEmpty = products.length === 0;

    const emptyTableIcon = (
        <div className="empty-table-icon">
            <SvgTable />
        </div>
    );
    const toastRef = useRef(null);
    const navigate = useNavigate();
    const handleSub = () => {
        toastRef.current.showToast();
        // {
        //     setTimeout(() => {
        //         navigate("/accounts/pettycash/pettycashcodeinitiate");
        //     }, 3000);
        // }
    };

    const [visiblePopup, setVisiblePopup] = useState(false);
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    const items = [
        { label: 'Journal Voucher', url: '/journalvoucher' },
        { label: 'Add Journal Voucher', url: '/saveandedittaxation' },

    ];
    const home = { label: "Master" };
    const handleNavigateedit = () => {
        // navigate('/master/finance/taxation/saveandedittaxation')
    }
    useEffect(() => {
        const timerId = setTimeout(() => {
            setVisibleSuccess(false);
        }, 2000);

        return () => clearTimeout(timerId);
    }, [visibleSuccess]);


    const columns = [
        { field: 'main', headerName: 'Main A/c', flex: 1 },
        { field: 'sub', headerName: 'Sub A/c', flex: 1 },
        { field: 'remarks', headerName: 'Remarks', flex: 1 },
        { field: 'foreign', headerName: 'Foreign Amount', flex: 1 },
        { field: 'currency', headerName: 'Currency', flex: 1 },
        { field: 'local', headerName: 'Local Amount', flex: 1 },
        { field: 'entry', headerName: 'Entry', flex: 1 },
        { field: 'action', headerName: 'Action', flex: 1 },
    ];

    const [first, setFirst] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRowsPerPage(event.rows);
    };
    const handleNavigate = () => {

    }

    const rows = [
        { id: 1, main: '', sub: '', remarks: '', foreign: '', currency: '', local: '', entry: '', action: '' },
    ];
    const toast = useRef(null);

   

    const customValidation = (values) => {
        const errors = {};

        if (!values.transationCode) {
            errors.transationCode = 'TransationCode is required';
        }
        if (!values.transationDescription) {
            errors.transationDescription = 'Transation Description is required';
        }
        if (!values.totalCredit) {
            errors.totalCredit = 'TotalCredit is required';
        }
        if (!values.totalDebit) {
            errors.totalDebit = 'TotalDebit is required';
        }
        if (!values.net) {
            errors.net = 'Net is required';
        }



        return errors;
    };
    const handleFormSubmit = () => {
        formik.handleSubmit()
        // showSuccess();
        // setButtonShow(1);
        // handleSub()
        // setButtonShow({
        //     buttonshow:2,
        // })
    };
    const handleSubmit = (values) => {
        // Handle form submission
        console.log(values);
        setVisible(false);
        setVisiblePopup(true);
    }
    const formik = useFormik({
        initialValues: {
            transationCode: '',
            transationDescription: '',
            totalCredit: '',
            totalDebit: '',
            net: '',

        },
        validate: customValidation,
        onSubmit: handleSubmit
    });

    useEffect(() => {
        const timerId = setTimeout(() => {
            setVisiblePopup(false);
        }, 2000);

        return () => clearTimeout(timerId);
    }, [visiblePopup]);

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
                    <div className='row__count__view__JV'>
                        <span

                            className="mx-1"
                            style={{ color: "var(--text-color)", userSelect: "none" }}
                        >
                            Row count :{" "}
                        </span>
                        <Dropdown
                            value={options.value}
                            className="pagedropdown_container__JV"
                            options={dropdownOptions}
                            onChange={options.onChange}
                        />
                    </div>
                </React.Fragment>
            );
        },
    };
    const [creditTotal, setCreditTotal] = useState(500);
    const [debitTotal, setDebitTotal] = useState(500);
    const [netTotal, setNetTotal] = useState(100);
    const handleApproval = () => {
        toastRef.current.showToast();
        {
            setTimeout(() => {
                setButtonShow(1);
            }, 3000);
        }
    };

    const handleUpdate = () => {
        setNetTotal(0);
        setDebitTotal(2600);
    };

    const [selectedTransactionCode, setSelectedTransactionCode] = useState('');

    const mainAccountOptions = [
        { label: 'Trans00123', value: 'Trans00123' },
        { label: 'Trans00124', value: 'Trans00124' },

    ];

    const handleTransactionCodeChange = (e) => {
        const selectedValue = e.value;
        formik.setFieldValue('transationCode', selectedValue);
        let value = '';
        switch (selectedValue) {
          case 'Trans00123':
            value = 'Transaction code Description';
            break;
          case 'Trans00124':
            value = 'Transaction code 123';
            break;
          default:
            value = 'Enter';
        }
        formik.setFieldValue('transationDescription', value);
      };

    return (
        <div className='grid add__JV__container'>
            <CustomToast ref={toastRef} />
            <div className='col-12'>
                <NavBar />
            </div>
            <div className='col-12 mb-2'>
                <div className='add__sub__title__JV'><span className='mr-2'><ArrowLeftIcon /></span> Add Journal Voucher</div>
                <div className='mt-4'>
                    <BreadCrumb home={home} className='breadCrums__view__add__screen__JV' model={items} separatorIcon={<SvgDot color={"#000"} />} />
                </div>
            </div>
            <div className='col-12 m-0 '>
                <div className='grid add__journal__vocture__add__JV p-3'>
                    <div class="sm-col-12  md:col-3 lg-col-4 ">
                        {/* <DropDowns
                            className="dropdown__add__sub__JV"
                            label="Transaction Code"
                            classNames='label__sub__add__JV'
                            value={formik.values.transationCode}
                            onChange={(e) => {
                                formik.setFieldValue('transationCode', e.value)
                                handleTransactionCodeChange()
                            }}
                            options={mainAccountOptions}

                            optionLabel='label'
                            placeholder={"Select"}
                            dropdownIcon={<SvgDropdown color={"#000"} />}
                        /> */}
                        <DropDowns
                            className="dropdown__add__sub__JV"
                            label="Transaction Code"
                            value={formik.values.transationCode}
                            options={mainAccountOptions}
                            optionLabel='label'
                            onChange={handleTransactionCodeChange}
                            placeholder={"Select"}
                            dropdownIcon={<SvgDropdown color={"#000"} />}
                        />
                        {formik.touched.transationCode && formik.errors.transationCode && (
                            <div
                                style={{ fontSize: 12, color: "red" }}
                                className="formik__errror__JV"
                            >
                                {formik.errors.transationCode}
                            </div>
                        )}
                    </div>
                    <div className='col-12 md:col-6 lg:col-6'>

                        <InputField
                            label="Transaction Description"
                            classNames='dropdown__add__sub__JV'
                            className='label__sub__add__JV'
                            // placeholder={formik.values.transationDescriptionPlaceholder }
                             value={formik.values.transationDescription}
                             disabled={true}
                             onChange={(e) =>
                                formik.setFieldValue('transationDescription', e.value)
                              }
                        />
                        {/* <InputField
                            label="Transaction Description"
                            classNames='dropdown__add__sub__JV'
                            className='label__sub__add__JV'
                            placeholder="Enter"
                            value={formik.values.transationDescription}
                            onChange={(e) => formik.setFieldValue('transationDescription', e.value)}
                        /> */}
                        {formik.touched.transationDescription && formik.errors.transationDescription && (
                            <div
                                style={{ fontSize: 12, color: "red" }}
                                className="formik__errror__JV"
                            >
                                {formik.errors.transationDescription}
                            </div>
                        )}
                    </div>
                    <div className="col-12 md:col-3 lg-col-3 input__view__reversal__JV">
                        <div class="calender_container_claim__JV p-0">
                            <LabelWrapper
                                label="Date"
                                textSize={"16px"}
                                textColor={"#000"}
                                textWeight={"300"}
                                classNames="label__sub__add__JV"
                            >
                                <Calendar
                                    value={date}
                                    onChange={(e) => setDate(e.value)}
                                    showIcon
                                    className="calender_field_claim__JV"
                                />
                                <div className="calender_icon_claim__JV">
                                    <SvgDatePicker />
                                </div>
                            </LabelWrapper>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 m-0 '>
                <div className='sub__account__sub__container__JV'>
                    <div className="col-12 md:col-12 lg-col-12" style={{ maxWidth: '100%' }}>
                        <div className="card">
                            <DataTable
                                value={products}
                                style={{ overflowY: 'auto', maxWidth: '100%' }}
                                responsive={true}
                                className='table__view__JV'
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
                                {columns.map((column) => (
                                    <Column
                                        key={column.field}
                                        field={column.field}
                                        header={column.headerName}
                                        style={{
                                            width: `${100 / columns.length}%`, // Equal width for all columns
                                            boxSizing: 'border-box',
                                            fontSize: 16,
                                            fontWeight: 500,
                                            color: '#111927'
                                        }}
                                        paginator
                                        rows={5}
                                        rowsPerPageOptions={[5, 10, 25, 50]}
                                        currentPageReportTemplate="{first} - {last} of {totalRecords}"
                                        paginatorTemplate={template2}
                                        bodyStyle={{
                                            fontSize: 16,
                                            fontWeight: 400,
                                            color: '#111927',
                                            height: 50,
                                            padding: 18,
                                            ...(column.field === 'status' && { color: 'green' }),
                                        }}
                                        body={
                                            column.field === 'view' ? (
                                                <div onClick={() => handleNavigateedit()}><SvgArrow /></div>
                                            ) : column.field === 'action' ? (
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div onClick={() => setVisible(true)}> <SvgEditIcon /></div> <div><SvgDeleteIcon /></div>
                                                </div>
                                            ) : (
                                                column.field && 'A012'
                                            )
                                        }
                                    />
                                ))}
                            </DataTable>
                        </div>

                    </div>
                    <div className="col-12 add__icon__alighn__Journal__Voture__JV pb-3">
                        <div className='add__icon__view__Journal__Voture__JV' onClick={() => setVisible(true)}>
                            <div className='add__icon__Journal__Voture__JV' >
                                <SvgAddBlue />
                            </div>
                            <div className='add__text__Journal__Voture__JV'>
                                Add Data
                            </div>

                        </div>
                    </div>
                </div>

                <div className='col-12 m-0 '>
                    <div className='grid add__journal__vocture__add__JV p-3'>
                        <div class="sm-col-12  md:col-3 lg-col-4 ">
                            <InputField
                                label="Total credit"
                                classNames='dropdown__add__sub__JV'
                                className='label__sub__add__JV'
                                placeholder="Enter"
                                value={creditTotal}
                            // value={formik.values.totalCredit}
                            // onChange={(e) => {
                            //     formik.setFieldValue('totalCredit', e.value)
                            //     calculateNet();
                            // }}
                            />
                            {formik.touched.totalCredit && formik.errors.totalCredit && (
                                <div
                                    style={{ fontSize: 12, color: "red" }}
                                    className="formik__errror__JV"
                                >
                                    {formik.errors.totalCredit}
                                </div>
                            )}
                        </div>
                        <div className='col-12 md:col-3 lg:col-3'>
                            <InputField
                                label="Total Debit"
                                classNames='dropdown__add__sub__JV'
                                className='label__sub__add__JV'
                                placeholder="Enter"
                                value={debitTotal}
                            // value={formik.values.totalDebit}
                            // onChange={(e) => {
                            //     formik.setFieldValue('totalDebit', e.value)
                            //     calculateNet();
                            // }}
                            />
                            {formik.touched.totalDebit && formik.errors.totalDebit && (
                                <div
                                    style={{ fontSize: 12, color: "red" }}
                                    className="formik__errror__JV"
                                >
                                    {formik.errors.totalDebit}
                                </div>
                            )}
                        </div>
                        <div className="col-12 md:col-3 lg-col-3 input__view__reversal__JV">
                            <InputField
                                label="Net"
                                classNames='dropdown__add__sub__JV'
                                className='label__sub__add__JV'
                                placeholder="Enter"
                                value={netTotal}
                            // value={formik.values.net}
                            // onChange={formik.handleChange}
                            // readOnly
                            />
                            {formik.touched.net && formik.errors.net && (
                                <div
                                    style={{ fontSize: 12, color: "red" }}
                                    className="formik__errror__JV"
                                >
                                    {formik.errors.net}
                                </div>
                            )}
                        </div>
                    </div>
                </div>


            </div>
            {buttonshow === 0 && (
                <div className='col-12 btn__view__Add__JV mt-2'>
                    <Button
                        label="Approve"
                        className='save__add__btn__JV'
                        onClick={handleApproval}
                        disabled={netTotal === 0 ? false : true}
                    />
                </div>
            )}
            {/* {buttonshow === 0 && (
                <div className='col-12 btn__view__Add__JV mt-2'>
                    <Button
                        label='Approve'
                        className='save__add__btn__JV'
                        onClick={handleFormSubmit}
                    />
                </div>
            )} */}

            {buttonshow === 1 && (
                <div className='col-12 btn__view__Add__JV mt-2'>
                    <Button
                        label='Print'
                        className='save__add__btn__print'
                    // onClick={handlePrint}
                    onClick={()=>setVisibleSuccess(true)}
                    />
                </div>
            )}
            <div className="col-12" >

                <AddData visible={visible} setVisible={setVisible} handleUpdate={handleUpdate} setCreditTotal={setCreditTotal} setDebitTotal={setCreditTotal} setNetTotal={setNetTotal} />

            </div>
            

        </div>
    )

}
export default AddJournalVocture