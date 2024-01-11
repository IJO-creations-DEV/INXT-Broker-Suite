
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
import "../DetailsJournalVocture/index.scss"
import ArrowLeftIcon from "../../../assets/icons/ArrowLeftIcon"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import SvgArrow from '../../../assets/icons/SvgArrow';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import { data } from './data';
import { useFormik } from 'formik';
import ViewDataTabel from './ViewDataTabel';
import { useDispatch, useSelector } from 'react-redux';
import { getJournalVoucherViewData } from '../store/journalVoucherMiddleware';


const DetailsJournalVocture = () => {
    const navigate = useNavigate()

    const { id } = useParams();
    const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(getpaymentVocherByIdMiddleware(id));
    // }, [id]);

    const { journalVoucherView, loading ,journalVoucherPostTabelData} = useSelector(
        ({ journalVoucherMainReducers }) => {
            return {
                loading: journalVoucherMainReducers?.loading,
                journalVoucherView: journalVoucherMainReducers?.journalVoucherView,
                journalVoucherPostTabelData:journalVoucherMainReducers?.journalVoucherPostTabelData
            };
        }
    );
    console.log(journalVoucherView, "journalVoucherView")

    const totalForeignAmount = journalVoucherPostTabelData.reduce((total, item) => {
        if (item.entryType === "Credit") {
            const foreignAmount = parseFloat(item.foreignAmount);
            return !isNaN(foreignAmount) ? total + foreignAmount : total;
        }
        return total; // Important: Return the total for each iteration.
    }, 0);


    const totalLocalAmount = journalVoucherPostTabelData.reduce((total, item) => {
        if (item.entryType === "Debit") {
            const localAmount = parseFloat(item.foreignAmount);
            return !isNaN(localAmount) ? total + localAmount : total;
        }
        return total;
    }, 0);
   

    const [visiblePopup, setVisiblePopup] = useState(false);
    const [sortField, setSortField] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [date, setDate] = useState(new Date());
    const items = [
        { label: 'Journal Voucher', command: () => navigate('/accounts/journalvoucher') },
        { id: 1, label: 'Journal Voucher Details', to: '/accounts/journalvoucher/detailsjournalvocture' },

    ];
    const home = { label: "Account" };



    const [first, setFirst] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRowsPerPage(event.rows);
    };

    const rows = [
        { id: 1, main: '', sub: '', remarks: '', currency: '', foreign: '', local: '', entry: '' },
        { id: 2, main: '', sub: '', remarks: '', currency: '', foreign: '', local: '', entry: '' },
    ];
    const toast = useRef(null);
    const [newDataTable, setnewDataTable] = useState([]);
    const [visible, setVisible] = useState(false);
    const handleEdit = () => {
        console.log("handleEdit success");
        setVisible(true);
    };


    const showSuccess = () => {
        toast.current.show({
            severity: 'success',
            summary: 'Success',
            detail: 'Message Content',
            life: 3000,
            icon: 'pi pi-check-circle',
        });
    };
    const customValidation = (values) => {
        const errors = {};

        if (!values.transactioncode) {
            errors.transactioncode = 'Main Account is required';
        }


        return errors;
    };

    const handleFormSubmit = () => {

        showSuccess();
    };
    const handleSubmit = (values) => {

        dispatch(getJournalVoucherViewData())
        // Handle form submission
        console.log(values, "valuesuuu");
        // setVisible(false);
        // setVisiblePopup(true);
    }
    const mainAccountOptions = [
        { label: journalVoucherView?.transationCode, value: journalVoucherView?.transationCode },

       
    ];
    const formik = useFormik({
        initialValues: {
            transactioncode: `${journalVoucherView.transationCode}`,
            transactionDescription: `${journalVoucherView.totalCredit}`,
            transactionNumber: `${journalVoucherView.transationCode}`,
            date: `${new Date(journalVoucherView.date)}`,
            totalCredit: '500',
            totalDebit: '500',
            net: '00.00'

        },
        validate: customValidation,
        onSubmit: handleSubmit
    });

    const headerStyle = {
        
        fontSize: 16,
        fontFamily: "Inter var",
        fontWeight: 500,
        padding: 6,
        color: "#000",
        border: "none",
    };

    useEffect(() => {
        const timerId = setTimeout(() => {
            setVisiblePopup(false);
        }, 2000);

        return () => clearTimeout(timerId);
    }, [visiblePopup]);
    const handleGoback = () => {
        navigate('/accounts/journalvoucher')
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

        <div className='grid sub__add__container'>
            <div className='col-12'>
                <NavBar />

            </div>
            <Toast ref={toast} />

            <div className='col-12 mb-2'>
                <div className='add__sub__title' ><span className='mr-2' onClick={handleGoback}><ArrowLeftIcon /></span> Journal Voucher Details</div>
                <div className='mt-4'>
                    <BreadCrumb home={home} className='breadCrums__view__add__screen' model={items} separatorIcon={<SvgDot color={"#000"} />} />
                </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className='col-12 m-0 '>
                    <div className='grid add__journal__vocture p-3 m-1'>
                        <div class="sm-col-12  md:col-3 lg-col-4 ">
                            <DropDowns
                                className="dropdown__add__sub"
                                label="Transaction Code"
                                classNames='label__sub__add'
                                value={journalVoucherView.transationCode}
                                onChange={(e) => formik.setFieldValue('transactioncode', e.target.value)}
                                options={mainAccountOptions}
                                optionLabel='label'
                                defaultValue={formik.values.transactioncode}
                                dropdownIcon={<SvgDropdown color={"#000"} />}
                                disabled={true}
                            />


                        </div>
                        <div className='col-12 md:col-6 lg:col-6'>
                            <InputField
                                label="Transaction Description"
                                classNames='dropdown__add__sub'
                                className='label__sub__add'
                                placeholder="Enter"
                                value={journalVoucherView.transationDescription}
                                disabled={true}

                                onChange={(e) => formik.setFieldValue('transactionDescription', e.target.value)}

                            />
                        </div>
                        <div className='col-12 md:col-3 lg:col-3'>
                            <InputField
                                label="Transaction Number"
                                classNames='dropdown__add__sub'
                                className='label__sub__add'
                                // placeholder="Enter"
                                value={journalVoucherView.transactionNumber}

                                onChange={(e) => formik.setFieldValue('transactionNumber', e.target.value)}
                                disabled={true}
                            />
                        </div>
                        <div className="col-12 md:col-3 lg-col-3 input__view__reversal">
                            <div class="calender_container_claim p-0">
                                <LabelWrapper
                                    label="Date"
                                    textSize={"16px"}
                                    textColor={"#000"}
                                    textWeight={"300"}
                                    classNames="label__sub__add"
                                >
                                    {/* <Calendar
                                        value={formik.values.date}
                                        onChange={(e) => setDate(e.value)}
                                        showIcon
                                        className="calender_field_claim"
                                        disabled={true}
                                    /> */}
                                    <Calendar
                                        value={date || journalVoucherView.date || null}
                                        onChange={(e) => {
                                            setDate(e.value);
                                            formik.setFieldValue('date', e.value);
                                        }}
                                        showIcon
                                        className="calender_field_claim"
                                        disabled={true}
                                    />

                                    <div className="calender_icon_claim">
                                        <SvgDatePicker />
                                    </div>
                                </LabelWrapper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 m-0 '>
                    <div className='sub__account__details__jV'>
                        <div className="col-12 md:col-12 lg-col-12" style={{ maxWidth: '100%' }}>
                            <div className="card">
                                <ViewDataTabel journalVoucherPostTabelData={journalVoucherPostTabelData}  handleEdit={handleEdit} newDataTable={newDataTable} visible={visible} />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 m-0 '>
                        <div className='grid add__journal__vocture__view p-3'>
                            <div class="sm-col-12  md:col-3 lg-col-4 ">
                                <InputField
                                    label="Total credit"
                                    classNames='dropdown__add__sub'
                                    className='label__sub__add'
                                    placeholder="Enter"
                                    value={totalForeignAmount}
                                    disabled={true}
                                    onChange={(e) => formik.setFieldValue('totalCredit', e.target.value)}

                                />
                            </div>
                            <div className='col-12 md:col-3 lg:col-3'>
                                <InputField
                                    label="Total Debit"
                                    classNames='dropdown__add__sub'
                                    className='label__sub__add'
                                    placeholder="Enter"
                                    value={formik.values.totalDebit}
                                    disabled={true}
                                    onChange={(e) => formik.setFieldValue('totalDebit', e.target.value)}

                                />
                            </div>
                            <div className="col-12 md:col-3 lg-col-3 input__view__reversal">
                                <InputField
                                    label="Net"
                                    classNames='dropdown__add__sub'
                                    className='label__sub__add'
                                    placeholder="Enter"
                                    value={formik.values.net}
                                    disabled={true}
                                    onChange={(e) => formik.setFieldValue('net', e.target.value)}

                                />
                            </div>
                        </div>
                    </div>


                </div>


            </form>
        </div>

    )

}
export default DetailsJournalVocture