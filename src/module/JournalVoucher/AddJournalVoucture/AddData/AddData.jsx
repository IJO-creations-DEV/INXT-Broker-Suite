
import React from "react";
import { Dialog } from "primereact/dialog";
import "./index.scss";
import { useFormik } from "formik";
import DropDowns from "../../../../components/DropDowns";
import InputField from "../../../../components/InputField";
import { Button } from "primereact/button";
import SvgDropdown from "../../../../assets/icons/SvgDropdown";
const AddData = ({ visible, setVisible, handleUpdate }) => {

  const mainAccount = [
    { label: "Main00012", value: "Main00012" },
    // { label: "Main00013", value: "Main00013" },
  ];
  const entryType = [
    { label: "Credit", value: "Credit" },
    { label: "Debit", value: "Debit" },
  ];
  const subAccount = [
    { label: "Sub0012", value: "Sub0012" },
    { label: "Sub0013", value: "Sub0013" },
  ];
  const branchCode = [
    { label: "Branch0012", value: "Branch0012" },
    { label: "Branch0013", value: "Branch0013" },
  ];
  const departmentCode = [
    { label: "Dept0012", value: "Dept0012" },
    { label: "Dept0013", value: "Dept0013" },
  ];
  const currencyCode = [
    { label: "Currency0012", value: "Currency0013" },
    { label: "Currency0013", value: "Currency0013" },
  ];
  const customValidation = (values) => {
    const errors = {};

    if (!values.mainAccount) {
      errors.mainAccount = "main account is required";
    }
    if (!values.mainAccountDescription) {
      errors.mainAccountDescription = "main description is required";
    }
    if (!values.entryType) {
      errors.entryType = "entry type is required";
    }
    if (!values.subAccount) {
      errors.subAccount = "sub account is required";
    }
    if (!values.subAccountDescription) {
      errors.subAccountDescription = "sub description is required";
    }
    if (!values.branchCode) {
      errors.branchCode = "branch code is required";
    }
    if (!values.branchCodeDescription) {
      errors.branchCodeDescription = "branch description is required";
    }
    if (!values.departmentCode) {
      errors.departmentCode = "department is required";
    }
    if (!values.departmentDescription) {
      errors.departmentDescription = "department decscription is required";
    }
    if (!values.currencyCode) {
      errors.currencyCode = "crrency code is required";
    }
    if (!values.currencyDescription) {
      errors.currencyDescription = "currency description is required";
    }
    if (!values.foreignAmount) {
      errors.foreignAmount = "foreign amount is required";
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
      remarks: ""
    },
    validate: customValidation,
    onSubmit: (values) => {
      // Handle form submission
      handleSubmit(values);
      handleUpdate();
      setVisible(false);
    },
  });
  const handleMainAccount = (e) => {
    const selectedValue = e.value;
  formik.handleChange(e); // Manually trigger validation
  formik.setFieldValue('mainAccount', selectedValue);
  let value = '';
  switch (selectedValue) {
    case 'Main00012':
      value = 'Main Account Description';
      break;
    // case 'Main00013':
    //   value = 'Main Account code 123';
    //   break;
    default:
      value = 'Enter';
  }
  formik.setFieldValue('mainAccountDescription', '');
  formik.setFieldTouched('mainAccountDescription', false);
  formik.setFieldValue('mainAccountDescription', value);
    
  }
  const handleSubAccount = (e) => {
    const selectedValue = e.value;
    formik.setFieldValue('subAccount', selectedValue);
    let value = '';
    switch (selectedValue) {
      case 'Sub0012':
        value = 'Sub Account Description';
        break;
      // case 'Sub0013':
      //   value = 'Sub Account code 123';
      //   break;
      default:
        value = 'Enter';
    }
    formik.setFieldValue('subAccountDescription', value);
  }
  const handleBranchCode = (e) => {
    const selectedValue = e.value;
    formik.setFieldValue('branchCode', selectedValue);
    let value = '';
    switch (selectedValue) {
      case 'Branch0012':
        value = 'Branch Description';
        break;
      // case 'Branch0013':
      //   value = 'Branch code 123';
      //   break;
      default:
        value = 'Enter';
    }
    formik.setFieldValue('branchCodeDescription', value);
   
  }
  const handleDepartment=(e)=>{
    const selectedValue = e.value;
    formik.setFieldValue('departmentCode', selectedValue);
    let value = '';
    switch (selectedValue) {
      case 'Dept0012':
        value = 'Department Description';
        break;
      // case 'Dept0013':
      //   value = 'Department code 123';
      //   break;
      default:
        value = 'Enter';
    }
    formik.setFieldValue('departmentDescription', value);
  }
  const handleCurrencyCode=(e)=>{
    const selectedValue = e.value;
    formik.setFieldValue('currencyCode', selectedValue);
    let value = '';
    switch (selectedValue) {
      case 'Currency0012':
        value = 'Currency Description';
        break;
      // case 'Currency0013':
      //   value = 'Currency code 123';
      //   break;
      default:
        value = 'Enter';
    }
    formik.setFieldValue('currencyDescription', value);
  }
  return (
    <Dialog
      header="Add Journal Voucher"
      visible={visible}
      style={{ width: "80vw", borderRadius: 30 }}
      onHide={() => setVisible(false)}
      className="jv__Edit__modal__container"
      dismissableMask={true}
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="grid m-0">
          <div className="col-12 md:col-3">
            <DropDowns
             label="Main Account"
              className="input__field__jv"
              value={formik.values.mainAccount}
              options={mainAccount}
              optionLabel='label'
              onChange={handleMainAccount}
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            // dropdownIcon={<SvgDropdown color={"#000"} />}
            // placeholder="Select Data"
            classNames="select__label__jv"
          
            />
            {formik.touched.mainAccount && formik.errors.mainAccount && (
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
              classNames="input__field__jv"
              className='input__label__jv'
              
              label="Main Account Description"
              value={formik.values.mainAccountDescription}
              onChange={(e) =>
                formik.setFieldValue("mainAccountDescription", e.target.value)
              }
              placeholder="Enter"
              disabled={true}

            />
            {formik.touched.mainAccountDescription && formik.errors.mainAccountDescription && (
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
              className="input__field__jv"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              placeholder="Select Data"
              classNames="select__label__jv"
              optionLabel="label"
              label="Entry Type"
              value={formik.values.entryType}
              onChange={(e) => formik.setFieldValue("entryType", e.value)}
              options={entryType}
            />
            {formik.touched.entryType && formik.errors.entryType && (
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
              className="input__field__jv"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              classNames="select__label__jv"
              optionLabel="label"
              label="Sub Account"
              value={formik.values.subAccount}
              // onChange={(e) => formik.setFieldValue("subAccount", e.value)}
              onChange={handleSubAccount}
              options={subAccount}
              placeholder="Select Data"
            />
            {formik.touched.subAccount && formik.errors.subAccount && (
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
              classNames="input__field__jv"
              className="input__label__jv"
              label="Sub Account Description"
              value={formik.values.subAccountDescription}

              onChange={(e) =>
                formik.setFieldValue("subAccountDescription", e.target.value)
              }
              placeholder="Enter"
              disabled={true}
            />
            {formik.touched.subAccountDescription && formik.errors.subAccountDescription && (
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
              className="input__field__jv"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              classNames="select__label__jv"
              optionLabel="label"
              label="Branch Code"
              value={formik.values.branchCode}
              onChange={handleBranchCode}
              options={branchCode}
              placeholder="Select Data"
            />
            {formik.touched.branchCode && formik.errors.branchCode && (
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
              classNames="input__field__jv"
              className="input__label__jv"
              label="Branch Code Description"
              value={formik.values.branchCodeDescription}
              onChange={(e) =>
                formik.setFieldValue("branchCodeDescription", e.target.value)
              }
              placeholder="Enter"
              disabled={true}
            />
            {formik.touched.branchCodeDescription && formik.errors.branchCodeDescription && (
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
              className="input__field__jv"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              classNames="select__label__jv"
              optionLabel="label"
              label="Department Code"
              value={formik.values.departmentCode}
              onChange={handleDepartment}
              options={departmentCode}
              placeholder="Select Data"
            />
            {formik.touched.departmentCode && formik.errors.departmentCode && (
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
              classNames="input__field__jv"
              className="input__label__jv"
              label="Department Description"
              value={formik.values.departmentDescription}
              onChange={(e) =>
                formik.setFieldValue("departmentDescription", e.target.value)
              }
              placeholder="Enter"
              disabled={true}
            />
            {formik.touched.departmentDescription && formik.errors.departmentDescription && (
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
              className="input__field__jv"
              dropdownIcon={<SvgDropdown color={"#000"} />}
              classNames="select__label__jv"
              optionLabel="label"
              label="Currency Code"
              value={formik.values.currencyCode}
              onChange={handleCurrencyCode}
              options={currencyCode}
              placeholder="Select Data"
            />
            {formik.touched.currencyCode && formik.errors.currencyCode && (
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
              classNames="input__field__jv"
              className="input__label__jv"
              label="Currency Description"
              value={formik.values.currencyDescription}
              onChange={(e) =>
                formik.setFieldValue("currencyDescription", e.target.value)
              }
              placeholder="Enter"
              disabled={true}
            />
            {formik.touched.currencyDescription && formik.errors.currencyDescription && (
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
              classNames="input__field__jv"
              className="select__label__jv"
              label="Foreign Amount"
              value={formik.values.foreignAmount}
              onChange={(e) =>
                formik.setFieldValue("foreignAmount", e.target.value)
              }
              placeholder="Enter"
            />
            {formik.touched.foreignAmount && formik.errors.foreignAmount && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.foreignAmount}
              </div>
            )}
          </div>
          <div className="col-12 md:col-6">
            <div className="select__label__jv">Remarks <span style={{ color: '#B1B1B1' }}>(Options)</span></div>
            <InputField
              classNames="input__field__jv"
              // className="select__label__jv"
              // label="Remarks (Options)"
              value={formik.values.remarks}
              onChange={(e) =>
                formik.setFieldValue("remarks", e.target.value)
              }
              placeholder="Enter"
             
            />
            {formik.touched.remarks && formik.errors.remarks && (
              <div
                style={{ fontSize: 12, color: "red" }}
                className="formik__errror__JV"
              >
                {formik.errors.remarks}
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
              label="Save"
              className="jv__btn__reversal"
              disabled={!formik.isValid}
            />
          </div>
        </div>
      </form>
    </Dialog>
    
  
  );
};

export default AddData;

