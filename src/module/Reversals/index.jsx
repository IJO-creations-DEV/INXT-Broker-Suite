import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../assets/icons/SvgDot";
import InputField from "../../components/InputField";
import DropDowns from "../../components/DropDowns";
import { Button } from "primereact/button";
import SvgDropdown from "../../assets/icons/SvgDropdown";
import NavBar from "../../components/NavBar";
import TableData from "./TableData/TableData";
import { useFormik } from "formik";
import ArrowLeftIcon from "../../assets/icons/ArrowLeftIcon";
import CustomToast from "../../components/Toast";
import { useDispatch, useSelector } from "react-redux";
import { postReversalJVData } from "./store/reversalMiddleWare";


const Reversals = () => {
  const toastRef = useRef(null);
  const handleApproval = () => {
    setStep(2);
    toastRef.current.showToast();
    {
      setTimeout(() => {
        setStep(2);
      }, 3000);
    }
  };
  const [step, setStep] = useState(0);
  const items = [
    { label: "Reversal JV", to: "/accounts/reversaljv/reversaljvdetails" },
    {
      label: "Reversal JV Details",
      to: "/accounts/reversaljv/reversaljvdetails",
    },
  ];
  const home = { label: "Accounts" };
  const codeOptions = [
    { label: "Option 1", value: "PRM" },
    { label: "Option 2", value: "COMM" },
    { label: "Option 2", value: "REMT" },
  ];
  const customValidation = (values) => {
    const errors = {};

    if (!values.transactionCode) {
      errors.transactionCode = "This field Code is required";
    }

    if (!values.transactionNumber) {
      errors.transactionNumber = "This field is required";
    }
    if (!values.reversalJVTransactionCode) {
      errors.reversalJVTransactionCode = "This field is required";
    }

    return errors;
  };
  // const handleSubmit = (values) => {
  //   // Handle form submission
  //   console.log(values, "find values");
  // };
  const dispatch = useDispatch();
  const [errors, setErrors] = useState("");
  const { reversalJVList, loading, reversalJVGetDataList } = useSelector(
    ({ reversalMainReducers }) => {
      return {
        loading: reversalMainReducers?.loading,
        reversalJVList: reversalMainReducers?.reversalJVList,
        reversalJVGetDataList: reversalMainReducers?.reversalJVGetDataList,
      };
    }
  );
  // const reversalJVList = useSelector(state => state.reversalJVList);
  console.log(reversalJVGetDataList, "reversalJVGetDataList");
  const handleSubmit = (values) => {
    dispatch(postReversalJVData(formik.values));

    // navigate("/accounts/receipts");
  };

  const formik = useFormik({
    initialValues: {
      transactionCode: "",
      transactionNumber: "",
      reversalJVTransactionCode: "",
    },
    validate: customValidation,
    onSubmit: (values) => {
      // Handle form submission
      handleSubmit(values);
      setStep(1);
    },
    // onSubmit: handleSubmit
  });
  const handlePrint = () => {
    toastRef.current.showToast();
    formik.resetForm();
    setStep(0);
  };
  return (
    <div className="container__reversal">
      {step === 1 ? (
        <CustomToast
          ref={toastRef}
          message="Transaction Number 1234 is created"
        />
      ) : (
        <CustomToast ref={toastRef} message="Successfully Printed" />
      )}

      <div className="grid m-0 top__container">
        <div className="col-12 p-0">
          <NavBar />
        </div>
        <div className="col-12 p-0">
          <div className="correction__title__reversal">
            <span onClick={() => setStep(step - 1)}>
              {step !== 0 && <ArrowLeftIcon />}
            </span>{" "}
            Reversal JV Details
          </div>
        </div>
        <div className="col-12 p-0">
          <BreadCrumb
            home={home}
            className="breadCrums__view__reversal"
            model={items}
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>

      <div className="grid card__container">
        <div className="col-12 md:col-6 lg:col-3 xl:col-3 input__view__reversal">
          <DropDowns
            disabled={step === 0 ? false : true}
            className={
              step === 0
                ? "input__field__reversal"
                : "input__field__reversal__inactive"
            }
            classNames={
              step === 0
                ? "input__label__reversal"
                : "input__label__reversal__inactive"
            }
            label="Transaction Code "
            dropdownIcon={<SvgDropdown color={"#000"} />}
            value={formik.values.transactionCode}
            onChange={(e) =>
              formik.setFieldValue("transactionCode", e.target.value)
            }
            options={codeOptions}
            optionLabel="value"
            placeholder={"Select"}
          />

          {formik.touched.transactionCode && formik.errors.transactionCode && (
            <div style={{ fontSize: 12, color: "red" }} className="mt-3">
              {formik.errors.transactionCode}
            </div>
          )}
        </div>
        <div className="col-12 md:col-6 lg:col-6 xl:col-6 input__view__reversal">
          <InputField
            disabled={true}
            classNames="input__field__reversal__inactive"
            className={
              step === 0
                ? "input__label__reversal"
                : "input__label__reversal__inactive"
            }
            label="Transaction Description"
            value={
              formik.values.transactionCode
                ? `Transaction Description ${formik.values.transactionCode}`
                : ""
            }
          />
        </div>
        <div className="col-12 md:col-12 lg:col-3 xl:col-3  input__view__reversal">
          <InputField
            disabled={step === 0 ? false : true}
            classNames={
              step === 0
                ? "input__field__reversal"
                : "input__field__reversal__inactive"
            }
            className={
              step === 0
                ? "input__label__reversal"
                : "input__label__reversal__inactive"
            }
            label="Transaction Number"
            placeholder="Enter"
            textWeight={500}
            value={formik.values.transactionNumber}
            onChange={(e) =>
              formik.setFieldValue("transactionNumber", e.target.value)
            }
          />
          {formik.touched.transactionNumber &&
            formik.errors.transactionNumber && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.transactionNumber}
              </div>
            )}
        </div>
        <div className="col-12 md:col-6 lg:col-3 xl:col-3 input__view__reversal">
          <DropDowns
            disabled={step === 0 ? false : true}
            className={
              step === 0
                ? "input__field__reversal"
                : "input__field__reversal__inactive"
            }
            classNames={
              step === 0
                ? "input__label__reversal"
                : "input__label__reversal__inactive"
            }
            label="Reversal JV Transaction Code"
            dropdownIcon={<SvgDropdown color={"#000"} />}
            value={formik.values.reversalJVTransactionCode}
            onChange={(e) =>
              formik.setFieldValue("reversalJVTransactionCode", e.value)
            }
            options={codeOptions}
            optionLabel="value"
            placeholder={"Select"}
          />
          {formik.touched.reversalJVTransactionCode &&
            formik.errors.reversalJVTransactionCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV mt-3"
              >
                {formik.errors.reversalJVTransactionCode}
              </div>
            )}
        </div>
        <div className="col-12 md:col-6 lg:col-6 xl:col-6 input__view__reversal">
          <InputField
            disabled={true}
            classNames="input__field__reversal__inactive"
            className={
              step === 0
                ? "input__label__reversal"
                : "input__label__reversal__inactive"
            }
            label="Reversal Description"
            value={
              formik.values.reversalJVTransactionCode
                ? `Reversal Description ${formik.values.reversalJVTransactionCode}`
                : ""
            }
          />
        </div>
      </div>

      {step !== 0 && (
        <div className="grid m-0 table__container">
          <div className="col-12 p-0">
            <TableData
              reversalJVGetDataList={reversalJVGetDataList}
              reversalJVList={reversalJVList}
            />
          </div>
        </div>
      )}

      <div className="grid m-0 bottom__container">
        <div className="col-12 button__view__corrections__reversal">
          {step === 0 && (
            <Button
              label="Next"
              className="correction__btn__reversal"
              disabled={!formik.isValid}
              // onClick={formik.handleSubmit}
              onClick={formik.handleSubmit}
            />
          )}

          {step === 1 && (
            <Button
              label="Approve"
              className="correction__btn__reversal"
              onClick={handleApproval}
            />
          )}

          {step === 2 && (
            <Button
              label="Print"
              className="correction__btn__reversal"
              onClick={handlePrint}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Reversals;
