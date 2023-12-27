
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
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import SvgArrow from '../../../assets/icons/SvgArrow';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import SvgAdd from '../../../assets/icons/SvgAdd';
import { Dialog } from 'primereact/dialog';
import SvgDeleteIcon from '../../../assets/icons/SvgDeleteIcon';
import SvgEditIcon from '../../../assets/icons/SvgEditIcon';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { useFormik } from 'formik';


const AddJournalVocture = () => {
    const [buttonshow, setButtonShow]=useState(0)
    const navigate = useNavigate()
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

    const showSuccess = () => {
        toast.current.show({
            severity: 'success',
            summary: 'Success',
            detail: 'Message Content',
            life: 3000,
            icon: 'pi pi-check-circle',
        });
    };
    const mainAccountOptions = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        // Add more options as needed
    ];

    const customValidation = (values) => {
        const errors = {};

        if (!values.mainAccount) {
            errors.mainAccount = 'Main Account is required';
        }
        if (!values.mainAccountDescription) {
            errors.mainAccountDescription = 'Main Account Description is required';
        }
        if (!values.entryType) {
            errors.entryType = 'Main Account Description is required';
        }
        if (!values.subAccount) {
            errors.subAccount = 'Main Account Description is required';
        }
        if (!values.subAccountDescription) {
            errors.subAccountDescription = 'Main Account Description is required';
        }
        if (!values.branchCode) {
            errors.branchCode = 'Main Account Description is required';
        }
        if (!values.branchCodeDescription) {
            errors.branchCodeDescription = 'Main Account Description is required';
        }
        if (!values.departmentCode) {
            errors.departmentCode = 'Main Account Description is required';
        }
        if (!values.departmentDescription) {
            errors.departmentDescription = 'Main Account Description is required';
        }
        if (!values.currencyCode) {
            errors.currencyCode = 'Currency Code is required';
        }
        if (!values.currencyDescription) {
            errors.currencyDescription = 'Currency Description is required';
        }
        if (!values.foreignAmount) {
            errors.foreignAmount = 'Foreign Amount is required';
        }
        // if (!values.remarks) {
        //     errors.remarks = 'Remarks is required';
        // }

        return errors;
    };
    const handleFormSubmit = () => {

        showSuccess();
        setButtonShow(1);
        // setButtonShow({
        //     buttonshow:2,
        // })
    };
    const handleSubmit=(values) => {
        // Handle form submission
        console.log(values);
        setVisible(false);
        setVisiblePopup(true);
    }
    const formik = useFormik({
        initialValues: {
            mainAccount: '',
            mainAccountDescription: '',
            entryType: '',
            subAccount: '',
            subAccountDescription: '',
            branchCode: '',
            branchCodeDescription: '',
            departmentCode: '',
            departmentDescription: '',
            currencyCode: '',
            currencyDescription: '',
            foreignAmount: '',
            remarks: '',
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


    return (
        <div className='grid add__JV__container'>
            <div className='col-12'>
                <NavBar />

            </div>
            <Toast ref={toast} />

            <div className='col-12 mb-2'>
                <div className='add__sub__title__JV'><ArrowLeftIcon /> Add Journal Voucher</div>
                <div className='mt-3'>
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
                            // value={selectedItem}
                            // onChange={(e) => setSelectedItem(e.value)}
                            // options={item}
                            // optionLabel="name"
                            placeholder={"Select"}
                            dropdownIcon={<SvgDropdown color={"#000"} />}
                        />
                    </div>
                    <div className='col-12 md:col-6 lg:col-6'>
                        <InputField
                            label="Transaction Description"
                            classNames='dropdown__add__sub__JV'
                            className='label__sub__add__JV'
                            placeholder="Enter"
                        />
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
                                // placeholder={translate("claimstatus")["Choose Date"]}
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
                        {/* <div className="card">
                            <DataTable
                                value={rows}
                                style={{ overflowY: 'auto', maxWidth: '100%' }}
                                responsive={true}
                                className='table__view__taxation'
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
                                            width: `${100 / columns.length}%`,
                                            // width: column.field === 'rowcount' ? '10%' : `${100 / (columns.length - 1)}%`, // Set width for the dropdown column
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
                                        body={column.field === 'view' ? <div onClick={() => handleNavigateedit()}><SvgArrow /></div> : column.field == 'action' ? <div style={{ display: 'flex', justifyContent: 'center' }}><SvgDeleteIcon /> <SvgEditIcon /></div> : column.field && 'A012'}
                                    />
                                ))}
                            </DataTable>


                        </div> */}
                        <div className="card">
                            <DataTable
                                value={rows}
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
                            >
                                {columns.map((column) => (
                                    <Column
                                        key={column.field}
                                        field={column.field}
                                        header={column.headerName}
                                        style={{
                                            width: `${100 / columns.length}%`, // Equal width for all columns
                                            boxSizing: 'border-box',
                                            fontSize: 15,
                                            fontWeight: 500,
                                            color: '#111927'
                                        }}
                                        paginator
                                        rows={5}
                                        rowsPerPageOptions={[5, 10, 25, 50]}
                                        currentPageReportTemplate="{first} - {last} of {totalRecords}"
                                        paginatorTemplate={template2}
                                        bodyStyle={{
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color:'#111927',
                                            height: 50,
                                            padding: 18,
                                            ...(column.field === 'status' && { color: 'green' }),
                                        }}
                                        body={
                                            column.field === 'view' ? (
                                                <div onClick={() => handleNavigateedit()}><SvgArrow /></div>
                                            ) : column.field === 'action' ? (
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <SvgEditIcon /> <SvgDeleteIcon />
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
                                <SvgAdd color={'#6366F1'} />
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
                            />
                        </div>
                        <div className='col-12 md:col-3 lg:col-3'>
                            <InputField
                                label="Total Debit"
                                classNames='dropdown__add__sub__JV'
                                className='label__sub__add__JV'
                                placeholder="Enter"
                            />
                        </div>
                        <div className="col-12 md:col-3 lg-col-3 input__view__reversal__JV">
                            <InputField
                                label="Net"
                                classNames='dropdown__add__sub__JV'
                                className='label__sub__add__JV'
                                placeholder="Enter"
                            />
                        </div>
                    </div>
                </div>


            </div>
            {buttonshow === 0 && (
        <div className='col-12 btn__view__Add__JV mt-2'>
          <Button
            label='Approve'
            className='save__add__btn__JV'
            onClick={handleFormSubmit}
          />
        </div>
      )}

      {buttonshow === 1 && (
        <div className='col-12 btn__view__Add__JV mt-2'>
          <Button
            label='Print'
            className='save__add__btn__JV'
            // onClick={handlePrint}
          />
        </div>
      )}
            <div className="col-12" >
                <Dialog header="Add Journal Voucher" visible={visible} style={{ width: '80vw', borderRadius: 30 }} onHide={() => setVisible(false)}>
                    {/* <div className=""> */}
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid m-0 p-0 add__journal__vocture__add__JV" style={{ alignItems: 'center' }}>
                            <div className="col-12 md:col-3">
                                <div className='label__sub__add__JV'>Main Account</div>
                                <Dropdown
                                    style={{ width: '100%' }}
                                    className="dropdown__add__sub__JV"
                                    dropdownIcon={<SvgDropdown />}
                                    value={formik.values.mainAccount}
                                    onChange={(e) => formik.setFieldValue('mainAccount', e.value)}
                                    options={mainAccountOptions}
                                    placeholder='Select Data'
                                />
                                {formik.errors.mainAccount && (
                                    <div style={{ fontSize: 12, color: 'red' }} className='formik__errror__JV'>{formik.errors.mainAccount}</div>
                                )}
                            </div>
                            <div className="col-12 md:col-6">
                                <div className='label__sub__add__JV'>Main Account description</div>
                                <InputText
                                    style={{ width: '100%', marginTop: 8 }}
                                    className='dropdown__add__sub__JV'
                                    value={formik.values.mainAccountDescription}
                                    onChange={(e) => formik.setFieldValue('mainAccountDescription', e.target.value)}
                                    placeholder='Enter'

                                />
                                {formik.errors.mainAccountDescription && (
                                    <div style={{ fontSize: 12, color: 'red' }} className='formik__errror__JV'>{formik.errors.mainAccountDescription}</div>
                                )}
                            </div>

                            <div className="col-12 md:col-3">
                                <div className='label__sub__add__JV'>Entry Type</div>
                                <Dropdown
                                    style={{ width: '100%', }}
                                    className="dropdown__add__sub__JV"
                                    dropdownIcon={<SvgDropdown />}
                                    value={formik.values.entryType}
                                    onChange={(e) => formik.setFieldValue('entryType', e.value)}
                                    options={mainAccountOptions}
                                    placeholder='Select Data'
                                />
                                {formik.errors.entryType && (
                                    <div style={{ fontSize: 12, color: 'red' }} className='formik__errror__JV'>{formik.errors.entryType}</div>
                                )}
                            </div>
                        </div>
                        <div className="grid m-0 p-0 add__journal__vocture__add__JV" style={{ alignItems: 'center' }}>
                            <div className="col-12 md:col-3">
                                <div className='label__sub__add__JV'>Sub  Account</div>
                                <Dropdown
                                    style={{ width: '100%' }}
                                    className="dropdown__add__sub__JV"
                                    dropdownIcon={<SvgDropdown />}
                                    value={formik.values.subAccount}
                                    onChange={(e) => formik.setFieldValue('subAccount', e.value)}
                                    options={mainAccountOptions}
                                    placeholder='Select Data'
                                />
                                {formik.errors.subAccount && (
                                    <div style={{ fontSize: 12, color: 'red' }} className='formik__errror__JV'>{formik.errors.subAccount}</div>
                                )}
                            </div>
                            <div className="col-12 md:col-6 ">
                                <div className='label__sub__add__JV'>Sub Account description</div>
                                <InputText
                                    style={{ width: '100%', marginTop: 8 }}
                                    className='dropdown__add__sub__JV'
                                    value={formik.values.subAccountDescription}
                                    onChange={(e) => formik.setFieldValue('subAccountDescription', e.target.value)}
                                    placeholder='Enter'
                                />
                                {formik.errors.subAccountDescription && (
                                    <div style={{ fontSize: 12, color: 'red' }} className='formik__errror__JV'>{formik.errors.subAccountDescription}</div>
                                )}
                            </div>


                        </div>
                        <div className="grid m-0 p-0 add__journal__vocture__add__JV" style={{ alignItems: 'center' }}>
                            <div className="col-12 md:col-3 ">
                                <div className='label__sub__add__JV'>Branch Code</div>
                                <Dropdown
                                    style={{ width: '100%' }}
                                    className="dropdown__add__sub__JV"
                                    dropdownIcon={<SvgDropdown />}
                                    value={formik.values.branchCode}
                                    onChange={(e) => formik.setFieldValue('branchCode', e.value)}
                                    options={mainAccountOptions}
                                    placeholder='Select Data'
                                />
                                {formik.errors.branchCode && (
                                    <div style={{ fontSize: 12, color: 'red' }} className='formik__errror__JV'>{formik.errors.branchCode}</div>
                                )}
                            </div>
                            <div className="col-12 md:col-6">
                                <div className='label__sub__add__JV'>Branch Code description</div>
                                <InputText
                                    style={{ width: '100%', marginTop: 8 }}
                                    className='dropdown__add__sub__JV'
                                    value={formik.values.branchCodeDescription}
                                    onChange={(e) => formik.setFieldValue('branchCodeDescription', e.target.value)}
                                    placeholder='Enter'
                                />
                                {formik.errors.branchCodeDescription && (
                                    <div style={{ fontSize: 12, color: 'red' }} className='formik__errror__JV'>{formik.errors.branchCodeDescription}</div>
                                )}
                            </div>
                        </div>
                        <div className="grid m-0 p-0 add__journal__vocture__add__JV" style={{ alignItems: 'center' }}>

                            <div className="col-12 md:col-3">
                                <div className='label__sub__add__JV'>Department Code</div>
                                <Dropdown
                                    style={{ width: '100%' }}
                                    className="dropdown__add__sub__JV"
                                    dropdownIcon={<SvgDropdown />}
                                    value={formik.values.departmentCode}
                                    onChange={(e) => formik.setFieldValue('departmentCode', e.value)}
                                    options={mainAccountOptions}
                                    placeholder='Select Data'
                                />
                                {formik.errors.departmentCode && (
                                    <div style={{ fontSize: 12, color: 'red' }} className='formik__errror__JV'>{formik.errors.departmentCode}</div>
                                )}
                            </div>
                            <div className="col-12 md:col-6">
                                <div className='label__sub__add__JV'>Department description</div>
                                <InputText
                                    style={{ width: '100%', marginTop: 8 }}
                                    className='dropdown__add__sub__JV'
                                    value={formik.values.departmentDescription}
                                    onChange={(e) => formik.setFieldValue('departmentDescription', e.target.value)}
                                    placeholder='Enter'
                                />
                                {formik.errors.departmentDescription && (
                                    <div style={{ fontSize: 12, color: 'red' }} className='formik__errror__JV'>{formik.errors.departmentDescription}</div>
                                )}
                            </div>


                        </div>
                        <div className="grid m-0 p-0 add__journal__vocture__add__JV" style={{ alignItems: 'center' }}>
                            <div className="col-12 md:col-3">
                                <div className='label__sub__add__JV'>Currency Code</div>
                                <Dropdown
                                    style={{ width: '100%' }}
                                    className="dropdown__add__sub__JV"
                                    dropdownIcon={<SvgDropdown />}
                                    value={formik.values.currencyCode}
                                    onChange={(e) => formik.setFieldValue('currencyCode', e.value)}
                                    options={mainAccountOptions}
                                    placeholder='Select Data'
                                />
                                {formik.errors.currencyCode && (
                                    <div style={{ fontSize: 12, color: 'red' }} className='formik__errror__JV'>{formik.errors.currencyCode}</div>
                                )}
                            </div>
                            <div className="col-12 md:col-6">
                                <div className='label__sub__add__JV'>Currency description </div>
                                <InputText
                                    style={{ width: '100%', marginTop: 8 }}
                                    className='dropdown__add__sub__JV'
                                    value={formik.values.currencyDescription}
                                    onChange={(e) => formik.setFieldValue('currencyDescription', e.target.value)}
                                    placeholder='Enter'
                                />
                                {formik.errors.currencyDescription && (
                                    <div style={{ fontSize: 12, color: 'red' }} className='formik__errror__JV'>{formik.errors.currencyDescription}</div>
                                )}
                            </div>
                            <div className="col-12 md:col-3">
                                <div className='label__sub__add__JV'>Foreign Amount</div>
                                <InputText
                                    style={{ width: '100%', marginTop: 8 }}
                                    className='dropdown__add__sub__JV'
                                    value={formik.values.foreignAmount}
                                    onChange={(e) => formik.setFieldValue('foreignAmount', e.target.value)}
                                    placeholder='Enter'
                                />
                                {formik.errors.foreignAmount && (
                                    <div style={{ fontSize: 12, color: 'red' }} className='formik__errror__JV'>{formik.errors.foreignAmount}</div>
                                )}
                            </div>
                            <div className=" col-12 md:col-6 ">
                                <div className='label__sub__add__JV'>Remarks (Optional)</div>
                                <InputText
                                    style={{ width: '100%', marginTop: 8 }}
                                    className='dropdown__add__sub__JV'
                                    value={formik.values.remarks}
                                    onChange={(e) => formik.setFieldValue('remarks', e.target.value)}
                                    placeholder='Enter'
                                />
                                {formik.errors.remarks && (
                                    <div style={{ fontSize: 12, color: 'red' }} className='formik__errror__JV'>{formik.errors.remarks}</div>
                                )}
                            </div>

                            <div className="col-12 save__popup__correction" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                <Button
                                    disabled={!formik.isValid}
                                    onClick={() => {
                                        {
                                            !formik.isValid && setVisible(false)
                                            setVisiblePopup(true)
                                        }
                                    }}
                                    style={{ height: 45, width: 140, backgroundColor: '#6366F1', borderRadius: 31 }}
                                    label='Save'

                                />
                            </div>
                        </div>
                    </form>

                
                </Dialog>
            </div>

        </div>
    )

}
export default AddJournalVocture