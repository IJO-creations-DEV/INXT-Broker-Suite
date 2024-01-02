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
import ModalData from "./EditData/ModalData";
import ArrowLeftIcon from "../../assets/icons/ArrowLeftIcon";
import CustomToast from "../../components/Toast";
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
  const [visible, setVisible] = useState(false);
  const [creditTotal, setCreditTotal] = useState(2600);
  const [debitTotal, setDebitTotal] = useState(2500);
  const [netTotal, setNetTotal] = useState(100);
  const [newDataTable, setnewDataTable] = useState([]);
  const [editID, setEditID] = useState(null);
  const [storeID, setStoreID] = useState(null);
  const items = [
    {
      label: "Corrections JV",
      url: "/accounts/correctionsjv/correctionsjvdetails",
    },
    {
      label: "Corrections JV Details",
      url: "/accounts/correctionsjv/correctionsjvdetails",
    },
  ];
  const home = { label: "Accounts" };
  const codeOptions = [
    { label: "Option 1", value: "Trans00123" },
    { label: "Option 2", value: "Trans00124" },
  ];
  const customValidation = (values) => {
    const errors = {};

    if (!values.transactionCode) {
      errors.transactionCode = "This field is required";
    }

    if (!values.transactionNumber) {
      errors.transactionNumber = "This field is required";
    }
    if (!values.correctionJVTransactionCode) {
      errors.correctionJVTransactionCode = "This field is required";
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
      transactionNumber: "",
      correctionJVTransactionCode: "",
    },
    validate: customValidation,
    onSubmit: (values) => {
      // Handle form submission
      handleSubmit(values);
      setStep(1);
    },
  });
  const handleEdit = (editID) => {
    setEditID(editID);
    console.log(editID, "find handleEdit success");
    setVisible(true);
  };
  const handleUpdate = (values) => {
    setStoreID(editID);
    setnewDataTable([values]);

    setNetTotal(0);
    setDebitTotal(2600);
  };
  const handlePrint = () => {
    toastRef.current.showToast();
    formik.resetForm();
    setStep(0);
  };

  return (
    <div className="container__corrections__jv">
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
            Corrections JV Details
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
            label="Transaction Code"
            dropdownIcon={<SvgDropdown color={"#000"} />}
            value={formik.values.transactionCode}
            onChange={(e) =>
              formik.setFieldValue("transactionCode", e.target.value)
            }
            options={codeOptions}
            optionLabel="value"
            placeholder="Select "
          />

          {formik.touched.transactionCode && formik.errors.transactionCode && (
            <div style={{ fontSize: 12, color: "red" }}>
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
            onChange={(e) =>
              formik.setFieldValue("transactionDescription", e.target.value)
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
            label="Corrections JV Transaction Code"
            textWeight={500}
            dropdownIcon={<SvgDropdown color={"#000"} />}
            value={formik.values.correctionJVTransactionCode}
            onChange={(e) =>
              formik.setFieldValue("correctionJVTransactionCode", e.value)
            }
            options={codeOptions}
            optionLabel="value"
            placeholder="Select "
          />
          {formik.touched.correctionJVTransactionCode &&
            formik.errors.correctionJVTransactionCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.correctionJVTransactionCode}
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
            label="Correction Description"
            value={
              formik.values.correctionJVTransactionCode
                ? `Correction Description ${formik.values.correctionJVTransactionCode}`
                : ""
            }
          />
        </div>
      </div>

      {step !== 0 && (
        <>
          <div className="grid m-0 table__container">
            <div className="col-12 p-0">
              <TableData
                handleEdit={handleEdit}
                newDataTable={newDataTable}
                visible={visible}
                editID={editID}
              />
            </div>
            <ModalData
              visible={visible}
              setVisible={setVisible}
              handleUpdate={handleUpdate}
              setEditID={setEditID}
            />
          </div>

          <div className="grid m-0">
            <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal">
              <InputField
                disabled={true}
                classNames="input__field__reversal__inactive"
                className="input__label__reversal"
                label="Total credit"
                placeholder="Enter"
                value={creditTotal}
              />
            </div>
            <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal">
              <InputField
                disabled={true}
                classNames="input__field__reversal__inactive"
                className="input__label__reversal"
                label="Total Debit"
                placeholder="Enter"
                value={debitTotal}
              />
            </div>
            <div className="col-12 md:col-3 lg:col-3 xl:col-3 input__view__reversal">
              <InputField
                disabled={true}
                classNames="input__field__reversal__inactive"
                className="input__label__reversal"
                label="Net"
                placeholder="Enter"
                value={netTotal}
              />
            </div>
          </div>
        </>
      )}
      <div className="grid m-0 bottom__container">
        <div className="col-12 button__view__corrections__reversal">
          {step === 0 && (
            <Button
              label="Next"
              className="correction__btn__reversal"
              disabled={!formik.isValid}
              onClick={formik.handleSubmit}
            />
          )}

          {step === 1 && (
            <Button
              label="Approve"
              className="correction__btn__reversal"
              onClick={handleApproval}
              disabled={netTotal === 0 ? false : true}
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
