import { BreadCrumb } from 'primereact/breadcrumb'
import React, { useRef } from 'react'
import SvgDot from '../../../../assets/icons/SvgDot';
import "../AddCurrency/index.scss"
import DropDowns from '../../../../components/DropDowns';
import InputField from '../../../../components/InputField';
import { Button } from 'primereact/button';
import SvgDropdown from '../../../../assets/icons/SvgDropdown';
import CustomToast from '../../../../components/Toast';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import SvgBack from '../../../../assets/icons/SvgBack';
import NavBar from '../../../../components/NavBar';
import { postAddCurrency } from "../store/currencyMasterMiddlewar";
import { useDispatch, useSelector } from 'react-redux';

const initialValues = {
  CurrencyCode: "",
  ISOcode: "",
  SmallestUnit: "",
  UnitDescription: "",
  CurrencyName: "",
  Description: "",
  CurrencyFormat: "",
  NumberofDecimals: ""

}

const AddCurrency = () => {
  const toastRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const toastRef = useRef(null);

  const { CurrencyList, loading } = useSelector(({ currencyMasterReducer }) => {
    return {
      loading: currencyMasterReducer?.loading,
      CurrencyList: currencyMasterReducer?.CurrencyList,
    };
  });
  const items = [
    { label: 'Currency', url: '/master/finance/currency' },
    { label: 'Add Currency', url: '/master/finance/currency/addcurrency' },

  ];

  const ISOcode = [
    { name: "PHP", code: "PHP" },
    { name: "USD", code: "USD" },
    { name: "AUD", code: "AUD" },
    { name: "AUD", code: "AUD" },
  ];


  const home = { label: "Master" };

  const handleSubmit = (value) => {
    const valueWithId = {
      ...value,
      id: CurrencyList?.length + 1,
    };
    dispatch(postAddCurrency(valueWithId));
    toastRef.current.showToast();
    setTimeout(() => {
      navigate("/master/finance/currency");
    }, 2000);
  };

  const customValidation = (values) => {
    const errors = {};

    if (!values.CurrencyCode) {
      errors.CurrencyCode = "This field Code is required";
    }
    if (!values.ISOcode) {
      errors.ISOcode = "This field is required";
    }
    if (!values.SmallestUnit) {
      errors.SmallestUnit = "This field is required";
    }
    if (!values.UnitDescription) {
      errors.UnitDescription = "This field is required";
    }
    if (!values.CurrencyName) {
      errors.CurrencyName = "This field is required";
    }
    if (!values.Description) {
      errors.Description = "This field is required";
    }

    if (!values.CurrencyFormat) {
      errors.CurrencyFormat = "This field is required";
    }
    if (!values.NumberofDecimals) {
      errors.NumberofDecimals = "This field is required";
    }


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
    <div className='grid sub__add__container'>

      <CustomToast ref={toastRef} message="Add Currency Successfully" />
      <div className='col-12 mb-2'>
        <div className='back_container'>
          <span onClick={() => navigate(-1)}>
            <SvgBack />
          </span>
          <div className='add__sub__title'>Add Currency</div>

        </div>
        <div className='mt-3'>
          <BreadCrumb home={home} className='breadCrums__view__add__screen' model={items} separatorIcon={<SvgDot color={"#000"} />} />
        </div>
      </div>
      <div className='add__account__sub__container p-3 '>
        <div className='grid'>
          <div className='col-12 md:col-3 lg:col-3'>
            <InputField
              label="Currency Code"
              classNames='dropdown__add__sub'
              className='label__sub__add'
              placeholder="Enter"
              value={formik.values.CurrencyCode}
              onChange={formik.handleChange("CurrencyCode")}
            />
            {formik.touched.CurrencyCode && formik.errors.CurrencyCode && (
              <div
                style={{ fontSize: 12, color: "red" }}

              >
                {formik.errors.CurrencyCode}
              </div>
            )}
          </div>
          <div className='col-12 md:col-3 lg:col-3'>
            <DropDowns
              label="ISO code"
              className='dropdown__add__sub'
              classNames='label__sub__add'
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
              value={formik.values.ISOcode}
              onChange={(e) =>
                formik.setFieldValue("ISOcode", e.value)

              }
              options={ISOcode}
              optionLabel="name"
            />
            {formik.touched.ISOcode && formik.errors.ISOcode && (
              <div
                style={{ fontSize: 12, color: "red" }}

              >
                {formik.errors.ISOcode}
              </div>
            )}
          </div>
          <div className='col-12 md:col-3 lg:col-3'>
            <InputField
              label="Smallest Unit"
              classNames='dropdown__add__sub'
              className='label__sub__add'
              placeholder="Enter"
              value={formik.values.SmallestUnit}
              onChange={formik.handleChange("SmallestUnit")}
            />
            {formik.touched.SmallestUnit && formik.errors.SmallestUnit && (
              <div
                style={{ fontSize: 12, color: "red" }}

              >
                {formik.errors.SmallestUnit}
              </div>
            )}
          </div>
          <div className='col-12 md:col-3 lg:col-3'>
            <InputField
              label="Unit Description"
              classNames='dropdown__add__sub'
              className='label__sub__add'
              placeholder="Enter"
              value={formik.values.UnitDescription}
              onChange={formik.handleChange("UnitDescription")}
            />
            {formik.touched.UnitDescription && formik.errors.UnitDescription && (
              <div
                style={{ fontSize: 12, color: "red" }}

              >
                {formik.errors.UnitDescription}
              </div>
            )}
          </div>
        </div>
        <div className='grid'>
          <div className='col-12 md:col-6 lg:col-6'>
            <InputField
              label="Currency Name"
              classNames='dropdown__add__sub'
              className='label__sub__add'
              placeholder="Enter"
              value={formik.values.CurrencyName}
              onChange={formik.handleChange("CurrencyName")}
            />
            {formik.touched.CurrencyName && formik.errors.CurrencyName && (
              <div
                style={{ fontSize: 12, color: "red" }}

              >
                {formik.errors.CurrencyName}
              </div>
            )}

          </div>
          <div className='col-12 md:col-6 lg:col-6'>
            <InputField
              label="Description"
              classNames='dropdown__add__sub'
              className='label__sub__add'
              placeholder="Enter"
              value={formik.values.Description}
              onChange={formik.handleChange("Description")}
            />
            {formik.touched.Description && formik.errors.Description && (
              <div
                style={{ fontSize: 12, color: "red" }}

              >
                {formik.errors.Description}
              </div>
            )}
          </div>
        </div>
        <div className='grid '>
          <div className='col-12 md:col-3 lg:col-3'>
            <InputField
              label="Currency Format"
              classNames='dropdown__add__sub'
              className='label__sub__add'
              placeholder="Enter"
              value={formik.values.CurrencyFormat}
              onChange={formik.handleChange("CurrencyFormat")}
            />
            {formik.touched.CurrencyFormat && formik.errors.CurrencyFormat && (
              <div
                style={{ fontSize: 12, color: "red" }}

              >
                {formik.errors.CurrencyFormat}
              </div>
            )}
          </div>
          <div className='col-12 md:col-3 lg:col-3'>
            <InputField
              label="Number of Decimals"
              classNames='dropdown__add__sub'
              className='label__sub__add'
              placeholder="Enter"
              value={formik.values.NumberofDecimals}
              onChange={formik.handleChange("NumberofDecimals")}
            />
            {formik.touched.NumberofDecimals && formik.errors.NumberofDecimals && (
              <div
                style={{ fontSize: 12, color: "red" }}

              >
                {formik.errors.NumberofDecimals}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='col-12 btn__view__Add mt-2'>
        <Button
          label='Save'
          className='save__add__btn'
          onClick={() => { formik.handleSubmit(); }}
          disabled={!formik.isValid}
        />
      </div>
    </div>
  )

}
export default AddCurrency