import React, { useState, useRef } from 'react';
import './index.scss';
import { BreadCrumb } from 'primereact/breadcrumb';
import InputField from '../../../../components/InputField';
import SubmitButton from '../../../../components/SubmitButton'
import SvgDot from '../../../../assets/icons/SvgDot';
import DropDowns from '../../../../components/DropDowns';
import SvgDropdown from '../../../../assets/icons/SvgDropdown';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../../../components/NavBar';
import SvgBackicon from '../../../../assets/icons/SvgBackicon';
import { Card } from "primereact/card";
import DatePicker from '../../../../components/DatePicker';
import { Calendar } from 'primereact/calendar';
import LabelWrapper from '../../../../components/LabelWrapper';
import { useFormik } from "formik";
import { Toast } from 'primereact/toast';
import CustomToast from "../../../../components/Toast";
import { postExchangeStatus } from '../store/exchangeMasterMiddleware';
import { useDispatch } from 'react-redux';

const initialValues = {
  EffectiveFrom: "",
  EffectiveTo: "",
  CurrencyCode: "",
  ToCurrencyCode: "",
  ExchangeRate: "",
  CurrencyDescription: "",
  ToCurrencyDescription: ""

}

function AddExchange() {
  const toastRef = useRef(null);
  const [date, setDate] = useState(null);
  const Navigate = useNavigate()
  const [departmentcode, setDepartmentCode] = useState(null);
  const [branchcode, setBranchCode] = useState(null);
  const [payeetype, setPayeeType] = useState(null);
  const [criteria, setCriteria] = useState(null);
  const [customercode, setCustomerCode] = useState(null);
  const [transactioncode, setTransactioncode] = useState(null);
  const [selectinstrumentcurrency, setSelectInstrumentCurrency] = useState(null);

  const currencyCode = [
    { label: "INR", value: "NY" },
    { label: "USD", value: "RM" },
  ];
  const ToCurrencyCode = [
    { label: "INR", value: "NY" },
    { label: "USD", value: "RM" },
  ];


  const home = { label: "Master" };
  const items = [
    { label: 'Exchange Rate', url: '/master/finance/exchangerate' },
    { label: 'Add Exchange Rate', url: '/master/finance/exchangerate/addexchange' },
  ];

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  // const handleSubmit=(value)=>{

  //     Navigate("/master/finance/exchangerate")
  // }

  // const toastRef = useRef(null);
  const dispatch = useDispatch()
  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values, "find values");
    dispatch(postExchangeStatus(formik.values))
    toastRef.current.showToast();
    // {
    setTimeout(() => {
      Navigate("/master/finance/exchangerate")
    }, 3000);
  }

  // };

  const customValidation = (values) => {
    const errors = {};

    if (!values.CurrencyCode) {
      errors.CurrencyCode = "This field Code is required";
    }
    if (!values.ToCurrencyCode) {
      errors.ToCurrencyCode = "This field is required";
    }
    if (!values.ExchangeRate) {
      errors.ExchangeRate = "This field is required";
    }

    // if (!values.TransactionDescription) {
    //   errors.TransactionDescription = "This field is required";
    // }

    return errors;
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate: customValidation,
    // onSubmit: (values) => {
    //   // Handle form submission
    //    handleSubmit(values);

    // },
    onSubmit: handleSubmit
  });

  return (
    <div className='overall__addexchange__container'>

      <NavBar />
      {/* <CustomToast ref={toastRef} 
            // detail="Some detail text"
            // content={"Voucher Details Save Successfully"}
            /> */}
      <CustomToast ref={toastRef} message="Exchange Rate ER1234 is added" />
      <div>
        <span onClick={() => Navigate(-1)}>
          <SvgBackicon /></span>
        <label className='label_header'>Add Exchange Rate</label>
      </div>
      <BreadCrumb
        model={items}
        home={home}
        className='breadcrumbs_container'
        separatorIcon={<SvgDot color={"#000"} />} />





      <Card>

        <div class="grid">
          <div class="sm-col-12 col-12 md:col-3 lg-col-3">
            <div>

              <DropDowns
                className="dropdown__container"
                label="Currency Code"
                // value={departmentcode}
                // onChange={(e) => setDepartmentCode(e.value)}
                value={formik.values.CurrencyCode}
                onChange={(e) =>
                  formik.setFieldValue("CurrencyCode", e.value)
                }

                options={currencyCode}
                optionLabel="label"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
              {formik.touched.CurrencyCode && formik.errors.CurrencyCode && (
                <div
                  style={{ fontSize: 12, color: "red" }}

                >
                  {formik.errors.CurrencyCode}
                </div>
              )}
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-6 lg-col-6">
            <div>
              <InputField
                classNames="field__container"
                label="Currency  Description"
                placeholder={"Enter"}
                //   value={formik.values.CurrencyDescription}
                value={
                  formik.values.CurrencyDescription
                    ? `CurrencyCode ${formik.values.CurrencyDescription}`
                    : ""
                }
                onChange={formik.handleChange("CurrencyDescription")}

              />

            </div>
          </div>
        </div>


        <div class="grid">
          <div class="sm-col-12 col-12 md:col-3 lg-col-3">
            <div>
              <DropDowns
                className="dropdown__container"
                label="To Currency Code"
                // value={departmentcode}
                // onChange={(e) => setDepartmentCode(e.value)}
                value={formik.values.ToCurrencyCode}
                onChange={(e) =>
                  formik.setFieldValue("ToCurrencyCode", e.value)
                }

                options={ToCurrencyCode}
                optionLabel="label"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
              {formik.touched.ToCurrencyCode && formik.errors.ToCurrencyCode && (
                <div
                  style={{ fontSize: 12, color: "red" }}

                >
                  {formik.errors.ToCurrencyCode}
                </div>
              )}
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-6 lg-col-6">
            <div>
              <InputField
                classNames="field__container"
                label="To Currency  Description"
                placeholder={"Enter"}
                //   value={formik.values.ToCurrencyDescription}
                value={
                  formik.values.ToCurrencyCode
                    ? `ToCurrencyCode ${formik.values.ToCurrencyDescription}`
                    : ""
                }
                onChange={formik.handleChange("ToCurrencyDescription")}

              />

            </div>
          </div>
        </div>


        <div class="grid">
          <div class="col-3 md:col-3 lg-col-3">

            <LabelWrapper className="calenderlable__container">Effective From</LabelWrapper>
            <Calendar
              classNames="calender__container"
              showIcon
              value={formik.values.EffectiveFrom}
              minDate={minDate}
              onChange={(e) => {
                formik.setFieldValue("EffectiveFrom", e.target.value);
              }}
              dateFormat="yy-mm-dd"

            />
          </div>
          <div class="col-3 md:col-3 lg-col-3">
            <LabelWrapper className="calenderlable__container">Effective To</LabelWrapper>
            <Calendar
              classNames="calender__container"
              showIcon
              value={formik.values.EffectiveTo}
              minDate={minDate}

              onChange={(e) => {
                formik.setFieldValue("EffectiveTo", e.target.value);
              }}
              dateFormat="yy-mm-dd"

            />
          </div>
          <div class="col-3 md:col-3 lg-col-3">
            <InputField
              classNames="field__container"
              label="Exchange Rate"
              placeholder={"Enter"}
              value={formik.values.ExchangeRate}
              onChange={formik.handleChange("ExchangeRate")}

            />
            {formik.touched.ExchangeRate && formik.errors.ExchangeRate && (
              <div
                style={{ fontSize: 12, color: "red" }}

              >
                {formik.errors.ExchangeRate}
              </div>
            )}
          </div>

        </div>

      </Card>


      <div className="next_container">

        <Button className="submit_button p-0" label="Save" disabled={!formik.isValid}
          onClick={() => { formik.handleSubmit(); }}
        />
      </div>







    </div>
  );
}

export default AddExchange;
