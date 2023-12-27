import React, { useState, useEffect, useRef } from "react";
import "../Reversals/index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../assets/icons/SvgDot";
import InputField from "../../components/InputField";
import DropDowns from "../../components/DropDowns";
import { Button } from "primereact/button";
import SvgDropdown from "../../assets/icons/SvgDropdown";
import NavBar from "../../components/NavBar";
import TableData from "./TableData/TableData";
import { useFormik } from "formik";

const Reversals = () => {
  const [step, setStep] = useState(0);
  const items = [
    { label: "Reversal JV", url: "/reversaljv" },
    { label: "Reversal JV Details", url: "/reversaljv" },
  ];
  const home = { label: "Accounts", url: "/accounts" };
  const codeOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ];
  const customValidation = (values) => {
    const errors = {};

    if (!values.transactionCode) {
      errors.transactionCode = "This field Code is required";
    }
    if (!values.transactionDescription) {
      errors.transactionDescription = "This field is required";
    }
    if (!values.transactionNumber) {
      errors.transactionNumber = "This field is required";
    }
    if (!values.reversalJVTransactionCode) {
      errors.reversalJVTransactionCode = "This field is required";
    }
    if (!values.reversalDescription) {
      errors.reversalDescription = "This field is required";
    }
    return errors;
  };
  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values, "find values");
  };
  const formik = useFormik({
    initialValues: {
      transactionCode: "",
      transactionDescription: "",
      transactionNumber: "",
      reversalJVTransactionCode: "",
      reversalDescription: "",
    },
    validate: customValidation,
    onSubmit: (values) => {
      // Handle form submission
      handleSubmit(values);
      setStep(1);
    },
  });
  return (
    <div className="container__reversal">
      <div className="grid m-0 top__container">
        <div className="col-12 p-0">
          <NavBar />
        </div>
        <div className="col-12 p-0">
          <div className="correction__title__reversal">Reversal JV Details</div>
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
      <form onSubmit={formik.handleSubmit}>
        <div className="grid card__container">
          <div className="col-12 md:col-6 lg:col-3 xl:col-3 input__view__reversal">
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
              label="Transaction Code "
              placeholder="Enter"
              textWeight={500}
              value={formik.values.transactionCode}
              onChange={(e) =>
                formik.setFieldValue("transactionCode", e.target.value)
              }
            />
            {formik.errors.transactionCode && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.transactionCode}
              </div>
            )}
          </div>
          <div className="col-12 md:col-6 lg:col-6 xl:col-6 input__view__reversal">
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
              label="Transaction Description"
              placeholder="Enter"
              textWeight={500}
              value={formik.values.transactionDescription}
              onChange={(e) =>
                formik.setFieldValue("transactionDescription", e.target.value)
              }
            />
            {formik.errors.transactionDescription && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.transactionDescription}
              </div>
            )}
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
            {formik.errors.transactionNumber && (
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
              textWeight={500}
              dropdownIcon={<SvgDropdown color={"#000"} />}
              value={formik.values.reversalJVTransactionCode}
              onChange={(e) =>
                formik.setFieldValue("reversalJVTransactionCode", e.value)
              }
              options={codeOptions}
              optionLabel="label"
            />
            {formik.errors.reversalJVTransactionCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.reversalJVTransactionCode}
              </div>
            )}
          </div>
          <div className="col-12 md:col-6 lg:col-6 xl:col-6 input__view__reversal">
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
              label="Reversal Description"
              placeholder="Enter"
              textWeight={500}
              value={formik.values.reversalDescription}
              onChange={(e) =>
                formik.setFieldValue("reversalDescription", e.target.value)
              }
            />
            {formik.errors.reversalDescription && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.reversalDescription}
              </div>
            )}
          </div>
        </div>

        {step !== 0 && (
          <div className="grid m-0 table__container">
            <div className="col-12 p-0">
              <TableData />
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
              />
            )}

            {step === 1 && (
              <Button
                label="Approve"
                className="correction__btn__reversal"
                onClick={() => setStep(2)}
              />
            )}

            {step === 2 && (
              <Button
                label="Print"
                className="correction__btn__reversal"
                onClick={() => setStep(0)}
              />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reversals;
