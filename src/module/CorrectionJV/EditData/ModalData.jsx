import React from "react";
import { Dialog } from "primereact/dialog";
import "./index.scss";
import { useFormik } from "formik";
import DropDowns from "../../../components/DropDowns";
import InputField from "../../../components/InputField";
import { Button } from "primereact/button";
import SvgDropdown from "../../../assets/icons/SvgDropdown";
const ModalData = ({ visible, setVisible, handleUpdate }) => {
  const mainAccountOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ];
  const customValidation = (values) => {
    const errors = {};

    if (!values.mainAccount) {
      errors.mainAccount = "Main Account is required";
    }
    if (!values.mainAccountDescription) {
      errors.mainAccountDescription = "Main Account Description is required";
    }
    if (!values.entryType) {
      errors.entryType = "Main Account Description is required";
    }
    if (!values.subAccount) {
      errors.subAccount = "Main Account Description is required";
    }
    if (!values.subAccountDescription) {
      errors.subAccountDescription = "Main Account Description is required";
    }
    if (!values.branchCode) {
      errors.branchCode = "Main Account Description is required";
    }
    if (!values.branchCodeDescription) {
      errors.branchCodeDescription = "Main Account Description is required";
    }
    if (!values.departmentCode) {
      errors.departmentCode = "Main Account Description is required";
    }
    if (!values.departmentDescription) {
      errors.departmentDescription = "Main Account Description is required";
    }
    if (!values.currencyCode) {
      errors.currencyCode = "Currency Code is required";
    }
    if (!values.currencyDescription) {
      errors.currencyDescription = "Currency Description is required";
    }
    if (!values.foreignAmount) {
      errors.foreignAmount = "Foreign Amount is required";
    }

    return errors;
  };
  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };
  const formik = useFormik({
    initialValues: {
      mainAccount: "",
      mainAccountDescription: "",
      entryType: "",
      subAccount: "",
      subAccountDescription: "",
      branchCode: "",
      branchCodeDescription: "",
      departmentCode: "",
      departmentDescription: "",
      currencyCode: "",
      currencyDescription: "",
      foreignAmount: "",
    },
    validate: customValidation,
    onSubmit: (values) => {
      // Handle form submission
      handleSubmit(values);
      handleUpdate();
      setVisible(false);
    },
  });
  return (
    <Dialog
      header="Edit Data"
      visible={visible}
      style={{ width: "80vw", borderRadius: 30 }}
      onHide={() => setVisible(false)}
      className="corrections__jv__Edit__modal__container"
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="grid m-0">
          <div className="col-12 md:col-3">
            <DropDowns
              className="input__field__corrections"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              placeholder="Select Data"
              classNames="select__label__corrections"
              optionLabel="label"
              label="Main Account"
              value={formik.values.mainAccount}
              onChange={(e) => formik.setFieldValue("mainAccount", e.value)}
              options={mainAccountOptions}
            />
            {formik.errors.mainAccount && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.mainAccount}
              </div>
            )}
          </div>
          <div className="col-12 md:col-6">
            <InputField
              classNames="input__field__corrections"
              className="input__label__corrections"
              label="Main Account description"
              value={formik.values.mainAccountDescription}
              onChange={(e) =>
                formik.setFieldValue("mainAccountDescription", e.target.value)
              }
              placeholder="Enter"
            />
            {formik.errors.mainAccountDescription && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.mainAccountDescription}
              </div>
            )}
          </div>

          <div className="col-12 md:col-3">
            <DropDowns
              className="input__field__corrections"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              placeholder="Select Data"
              classNames="select__label__corrections"
              optionLabel="label"
              label="Entry Type"
              value={formik.values.entryType}
              onChange={(e) => formik.setFieldValue("entryType", e.value)}
              options={mainAccountOptions}
            />
            {formik.errors.entryType && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.entryType}
              </div>
            )}
          </div>
        </div>
        <div
          className="grid m-0 p-0 add__journal__vocture__add__JV"
          style={{ alignItems: "center" }}
        >
          <div className="col-12 md:col-3">
            <DropDowns
              className="input__field__corrections"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              classNames="select__label__corrections"
              optionLabel="label"
              label="Sub Account"
              value={formik.values.subAccount}
              onChange={(e) => formik.setFieldValue("subAccount", e.value)}
              options={mainAccountOptions}
              placeholder="Select Data"
            />
            {formik.errors.subAccount && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.subAccount}
              </div>
            )}
          </div>
          <div className="col-12 md:col-6 ">
            <InputField
              classNames="input__field__corrections"
              className="input__label__corrections"
              label="Sub Account description"
              value={formik.values.subAccountDescription}
              onChange={(e) =>
                formik.setFieldValue("subAccountDescription", e.target.value)
              }
              placeholder="Enter"
            />
            {formik.errors.subAccountDescription && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.subAccountDescription}
              </div>
            )}
          </div>
        </div>
        <div
          className="grid m-0 p-0 add__journal__vocture__add__JV"
          style={{ alignItems: "center" }}
        >
          <div className="col-12 md:col-3 ">
            <DropDowns
              className="input__field__corrections"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              classNames="select__label__corrections"
              optionLabel="label"
              label="Department Code"
              value={formik.values.branchCode}
              onChange={(e) => formik.setFieldValue("branchCode", e.value)}
              options={mainAccountOptions}
              placeholder="Select Data"
            />
            {formik.errors.branchCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.branchCode}
              </div>
            )}
          </div>
          <div className="col-12 md:col-6">
            <InputField
              classNames="input__field__corrections"
              className="input__label__corrections"
              label="Branch Code description"
              value={formik.values.branchCodeDescription}
              onChange={(e) =>
                formik.setFieldValue("branchCodeDescription", e.target.value)
              }
              placeholder="Enter"
            />
            {formik.errors.branchCodeDescription && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.branchCodeDescription}
              </div>
            )}
          </div>
        </div>
        <div
          className="grid m-0 p-0 add__journal__vocture__add__JV"
          style={{ alignItems: "center" }}
        >
          <div className="col-12 md:col-3">
            <DropDowns
              className="input__field__corrections"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              classNames="select__label__corrections"
              optionLabel="label"
              label="Department Code"
              value={formik.values.departmentCode}
              onChange={(e) => formik.setFieldValue("departmentCode", e.value)}
              options={mainAccountOptions}
              placeholder="Select Data"
            />
            {formik.errors.departmentCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.departmentCode}
              </div>
            )}
          </div>
          <div className="col-12 md:col-6">
            <InputField
              classNames="input__field__corrections"
              className="input__label__corrections"
              label="Department description"
              value={formik.values.departmentDescription}
              onChange={(e) =>
                formik.setFieldValue("departmentDescription", e.target.value)
              }
              placeholder="Enter"
            />
            {formik.errors.departmentDescription && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.departmentDescription}
              </div>
            )}
          </div>
        </div>
        <div
          className="grid m-0 p-0 add__journal__vocture__add__JV"
          style={{ alignItems: "center" }}
        >
          <div className="col-12 md:col-3">
            <DropDowns
              className="input__field__corrections"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              classNames="select__label__corrections"
              optionLabel="label"
              label="Currency Code"
              value={formik.values.currencyCode}
              onChange={(e) => formik.setFieldValue("currencyCode", e.value)}
              options={mainAccountOptions}
              placeholder="Select Data"
            />
            {formik.errors.currencyCode && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.currencyCode}
              </div>
            )}
          </div>
          <div className="col-12 md:col-6">
            <InputField
              classNames="input__field__corrections"
              className="input__label__corrections"
              label="Currency description"
              value={formik.values.currencyDescription}
              onChange={(e) =>
                formik.setFieldValue("currencyDescription", e.target.value)
              }
              placeholder="Enter"
            />
            {formik.errors.currencyDescription && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.currencyDescription}
              </div>
            )}
          </div>
          <div className="col-12 md:col-3">
            <InputField
              classNames="input__field__corrections"
              className="select__label__corrections"
              label="Foreign Amount"
              value={formik.values.foreignAmount}
              onChange={(e) =>
                formik.setFieldValue("foreignAmount", e.target.value)
              }
              placeholder="Enter"
            />
            {formik.errors.foreignAmount && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.foreignAmount}
              </div>
            )}
          </div>

          <div
            className="col-12 save__popup__correction"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Button
              label="Update"
              className="correction__btn__reversal"
              disabled={!formik.isValid}
            />
          </div>
        </div>
      </form>
    </Dialog>
  );
};

export default ModalData;
