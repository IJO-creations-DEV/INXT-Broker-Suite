
import { BreadCrumb } from 'primereact/breadcrumb'
import React, { useEffect, useState,useRef } from 'react'
import NavBar from '../../../../components/NavBar'
import SvgDot from '../../../../assets/icons/SvgDot';
import "../PettyCashdetails/index.scss"
import InputField from '../../../../components/InputField';
import { Button } from 'primereact/button';
import { useFormik } from 'formik';
import ArrowLeftIcon from '../../../../assets/icons/ArrowLeftIcon';
import { useNavigate } from 'react-router-dom';

const PettyCashDetail = () => {
  const toastRef = useRef(null);
  const navigate=useNavigate()
  const [visiblePopup, setVisiblePopup] = useState(false);
  const items = [
    { label: 'Petty Cash', url: '/master/finance/pettycash' },
    { label: 'Petty Cash Details', url: '/master/finance/pettycash/pettycashdetail' },

  ];
  const handleGoBack=()=>{
    navigate("/master/finance/pettycash")
  }
  const home = { label: "Master" };
  useEffect(() => {
    const timerId = setTimeout(() => {
      setVisiblePopup(false);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [visiblePopup]);

  const [step, setStep] = useState(0);
  const customValidation = (values) => {
    const errors = {};

    if (!values.prttycashcode) {
      errors.prttycashcode = "This field Code is required";
    }

    if (!values.pettycashname) {
      errors.pettycashname = "This field is required";
    }
    if (!values.pettycashsize) {
      errors.pettycashsize = "This field is required";
    }
    if (!values.avilabelcash) {
      errors.avilabelcash = "This field is required";
    }
    if (!values.mincashback) {
      errors.mincashback = "This field is required";
    }
    if (!values.transactionlimit) {
      errors.transactionlimit = "This field is required";
    }

    return errors;
  };
  const handleSubmit = (values) => {
    console.log(values, "find values");
  };
  const formik = useFormik({
    initialValues: {
      prttycashcode: "",
      pettycashname: "",
      pettycashsize: "",
      avilabelcash: "",
      mincashback: "",
      transactionlimit: ""
    },
    validate: customValidation,
    onSubmit: (values) => {
      handleSubmit(values);
      setStep(1);
    },
  });
  return (
    <div className='grid detail__add__container'>
      <div className='col-12'>
        <NavBar />
      </div>
      <div className='col-12 mb-2'>
        <div className='add__sub__title '><div onClick={handleGoBack} className='mr-2 mt-1'><ArrowLeftIcon /></div> Petty Cash Details</div>
        <div className='mt-3'>
          <BreadCrumb home={home} className='breadCrums__view__add__screen' model={items} separatorIcon={<SvgDot color={"#000"} />} />
        </div>
      </div>
      <div className="grid card__container p-2">
        <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal">
          <InputField
            classNames="input__field__reversal__inactive"
            className={
              step === 0
                ? "input__label__reversal"
                : "input__label__reversal__inactive"
            }
            label="Petty Cash Code"
            placeholder="Enter"
            value={
              formik.values.prttycashcode

            }
            onChange={(e) =>
              formik.setFieldValue("prttycashcode", e.target.value)
            }

          />
        </div>
        <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal">
          <InputField
            classNames="input__field__reversal__inactive"
            className={
              step === 0
                ? "input__label__reversal"
                : "input__label__reversal__inactive"
            }
            label="Petty Cash Name"
            placeholder="Enter"
            value={
              formik.values.pettycashname
            }
            onChange={(e) =>
              formik.setFieldValue("pettycashname", e.target.value)
            }
          />
        </div>
        <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal">
          <InputField
            classNames="input__field__reversal__inactive"
            className={
              step === 0
                ? "input__label__reversal"
                : "input__label__reversal__inactive"
            }
            label="Petty Cash Size"
            placeholder="Enter"
            value={
              formik.values.pettycashsize

            }
            onChange={(e) =>
              formik.setFieldValue("pettycashsize", e.target.value)
            }
          />
        </div>
        <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal">
          <InputField
            classNames="input__field__reversal__inactive"
            className={
              step === 0
                ? "input__label__reversal"
                : "input__label__reversal__inactive"
            }
            label="Available Cash"
            placeholder="Enter"
            value={
              formik.values.avilabelcash

            }
            onChange={(e) =>
              formik.setFieldValue("avilabelcash", e.target.value)
            }
          />
        </div>
        <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal">
          <InputField
            classNames="input__field__reversal__inactive"
            className={
              step === 0
                ? "input__label__reversal"
                : "input__label__reversal__inactive"
            }
            label="Minimum Cash Box"
            placeholder="Enter"
            value={
              formik.values.mincashback

            }
            onChange={(e) =>
              formik.setFieldValue("mincashback", e.target.value)
            }
          />
        </div>
        <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal">
          <InputField
            classNames="input__field__reversal__inactive"
            className={
              step === 0
                ? "input__label__reversal"
                : "input__label__reversal__inactive"
            }
            label="Transaction Limit"
            placeholder="Enter"
            value={
              formik.values.transactionlimit

            }
            onChange={(e) =>
              formik.setFieldValue("transactionlimit", e.target.value)
            }
          />
        </div>
      </div>
      {/* <div className='col-12 btn__view__Add mt-2'>
        <Button
          label='Save'
          className='save__add__btn'
          // onClick={() => setVisiblePopup(true)}
          onClick={formik.handleSubmit}
        />
      </div> */}

    </div>
  )
}
export default PettyCashDetail


