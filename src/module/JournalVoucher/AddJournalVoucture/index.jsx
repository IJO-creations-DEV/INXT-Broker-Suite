
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
import SvgEditIcon from '../../../assets/icons/SvgEditicons';
// import { Toast } from 'primereact/toast';
import { useFormik } from 'formik';
import AddData from './AddData/AddData';
import SvgTable from '../../../assets/icons/SvgTable';
import CustomToast from "../../../components/Toast";
import SuccessIcon from '../../../assets/icons/SuccessIcon';
import AddDataTabel from './AddDataTabel';
import EditData from './EditData';
import { useDispatch, useSelector } from 'react-redux';
import { postTCJournalVoucher } from '../store/journalVoucherMiddleware';


const AddJournalVocture = () => {
    const navigate = useNavigate()
    const [buttonshow, setButtonShow] = useState(0)
    const [products, setProducts] = useState([]);
    const [visibleSuccess, setVisibleSuccess] = useState(false);

    const toastRef = useRef(null);


    const [visiblePopup, setVisiblePopup] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false)
    const [date, setDate] = useState(new Date());
    const items = [
        { label: 'Journal Voucher', url: '/accounts/journalvoucher' },
        { label: 'Add Journal Voucher', url: '/accounts/journalvoucher/addjournalvoucture' },

    ];
    const home = { label: "Accounts" };

    useEffect(() => {
        const timerId = setTimeout(() => {
            setVisibleSuccess(false);
        }, 2000);

        return () => clearTimeout(timerId);
    }, [visibleSuccess]);

    const handleGoback = () => {
        navigate('/accounts/journalvoucher')
    }
    const { loading, journalVoucherPostTabelData } = useSelector(({ journalVoucherMainReducers }) => {
        return {
            loading: journalVoucherMainReducers?.loading,
            // addJournalVoucher: journalVoucherMainReducers?.addJournalVoucher,
            journalVoucherPostTabelData: journalVoucherMainReducers?.journalVoucherPostTabelData

        };
    });
    console.log(journalVoucherPostTabelData, "journalVoucherPostTabelData")


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
    const [errors, setErrors] = useState("")


    
    const dispatch = useDispatch()
    const handleSubmit = (values) => {
        
        dispatch(postTCJournalVoucher(formik.values));
    };




    useEffect(() => {
        handleSubmit()
    }, [])
    // console.log(total, "find receiptsTableList")

    // const handleSubmit = (values) => {
    //     // Handle form submission
    //     console.log(values);
    //     setVisible(false);
    //     setVisiblePopup(true);
    // }
    const formik = useFormik({
        initialValues: {
            transationCode: '',
            transationDescription: '',
            totalCredit: '',
            totalDebit: '',
            net: '',
            date: new Date()

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
    const [newDataTable, setnewDataTable] = useState([]);
    const handleEdit = () => {
        console.log("handleEdit success");
        setVisible(true);
    };
    const mainAccountOptions = [
        { label: 'Trans00123', value: 'Trans00123' },
        { label: 'Trans00124', value: 'Trans00124' },

    ];
    const totalForeignAmount = journalVoucherPostTabelData.reduce((total, item) => {
        const foreignAmount = parseFloat(item.foreignAmount);
        return !isNaN(foreignAmount) ? total + foreignAmount : total;
      }, 0);
    
      const totalLocalAmount = journalVoucherPostTabelData.reduce((total, item) => {
        const localAmount = parseFloat(item.localAmount);
        return !isNaN(localAmount) ? total + localAmount : total;
      }, 0);

    const handlePrint = () => {
        setVisibleSuccess(true)
        handleSubmit()
        navigate("/accounts/journalvoucher")
    }


    return (
        <div className='grid add__JV__container'>
            {/* <CustomToast ref={toastRef} /> */}
            {buttonshow === 0 ? (
                <CustomToast
                    ref={toastRef}
                    message="Transaction Number 1234 is created"
                />
            ) : (
                <CustomToast ref={toastRef} message="Successfully Printed" />
            )}
            <div className='col-12'>
                <NavBar />
            </div>
            <div className='col-12 mb-2'>
                <div className='add__sub__title__JV' onClick={handleGoback}><span className='mr-2'><ArrowLeftIcon /></span> Add Journal Voucher</div>
                <div className='mt-4'>
                    <BreadCrumb home={home} className='breadCrums__view__add__screen__JV' model={items} separatorIcon={<SvgDot color={"#000"} />} />
                </div>
            </div>
            <div className='col-12 m-0 '>
                <div className='grid add__journal__vocture__add__JV p-3'>
                    <div class="sm-col-12  md:col-3 lg-col-4 ">
                        <DropDowns
                            className="dropdown__add__sub__JV"
                            label="Transaction Code"
                            classNames='label__sub__add__JV'
                            value={formik.values.transationCode}
                            onChange={(e) =>
                                formik.setFieldValue("transationCode", e.target.value)
                            }

                            options={mainAccountOptions}

                            optionLabel='label'
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

                            value={
                                formik.values.transationCode
                                    ? `Transaction Description ${formik.values.transationCode}`
                                    : ""
                            }
                            disabled={true}
                            onChange={(e) =>
                                formik.setFieldValue("transactionDescription", e.target.value)
                            }
                        />

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
                                    value={
                                        formik.values.date
                                            ? new Date(formik.values.date)
                                            : null
                                    }
                                    onChange={(e) => {
                                        formik.handleChange("date")(
                                            e.value.toISOString().split("T")[0]
                                        );
                                    }}
                                    dateFormat="yy-mm-dd"
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
            <div className='col-12 m-0'>
                <div className='sub__account__sub__container__JV'>
                    <div className="col-12 md:col-12 lg-col-12" style={{ maxWidth: '100%' }}>
                        <div className="card">
                            <AddDataTabel setVisibleEdit={setVisibleEdit} handleEdit={handleEdit} newDataTable={newDataTable} visible={visible} journalVoucherPostTabelData={journalVoucherPostTabelData} />

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
                                value={totalForeignAmount}

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
                                value={totalLocalAmount}

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
                                value={totalForeignAmount-totalLocalAmount}

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


            {buttonshow === 1 && (
                <div className='col-12 btn__view__Add__JV mt-2'>
                    <Button
                        label='Print'
                        className='save__add__btn__print'

                        onClick={handlePrint}
                    />
                </div>
            )}
            <div className="col-12" >

                <AddData visible={visible} setVisible={setVisible} handleUpdate={handleUpdate} setCreditTotal={setCreditTotal} setDebitTotal={setCreditTotal} setNetTotal={setNetTotal} />

            </div>
            <div className="col-12" >

                <EditData visibleEdit={visibleEdit} setVisibleEdit={setVisibleEdit} handleUpdate={handleUpdate} setCreditTotal={setCreditTotal} setDebitTotal={setCreditTotal} setNetTotal={setNetTotal} />

            </div>


        </div>
    )

}
export default AddJournalVocture