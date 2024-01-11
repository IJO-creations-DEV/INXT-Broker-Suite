import React, { useEffect, useState } from "react";
import "./index.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Productdata from "./mock";
import { Dropdown } from "primereact/dropdown";
import SvgEditIcon from "../../../assets/icons/SvgEditicons";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import "../EditData/index.scss";
import { useFormik } from "formik";
import DropDowns from "../../../components/DropDowns";
import InputField from "../../../components/InputField";
// import { Button } from "primereact/button";
import SvgDropdown from "../../../assets/icons/SvgDropdown";
import { useDispatch, useSelector } from "react-redux";
import { getPatchCorrectionJVEdit, patchCorrectionJVEdit } from "../store/correctionJVMiddleWare";
// import SvgModalClose from "../../../assets/icons/SvgNodalClose";
// import { useDispatch } from "react-redux";
// import { patchCorrectionJVEdit } from "../store/correctionJVMiddleWare";

const TableData = ({ newDataTable, editID }) => {
  const { correctionJVList, getCorrectionJVEdit, loading } = useSelector(
    ({ correctionJVMainReducers }) => {
      return {
        loading: correctionJVMainReducers?.loading,
        correctionJVList: correctionJVMainReducers?.correctionJVList,
        getCorrectionJVEdit: correctionJVMainReducers?.getCorrectionJVEdit
      };
    }
  );
  console.log(correctionJVList, "correctionJVList");

  const template2 = {
    layout:
      "RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",
    RowsPerPageDropdown: (options) => {
      const dropdownOptions = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 120, value: 120 },
      ];

      return (
        <div className="table__selector">
          <React.Fragment>
            <span style={{ color: "var(--text-color)", userSelect: "none" }}>
              Row count :{" "}
            </span>
            <Dropdown
              value={options.value}
              className="pagedropdown_container"
              options={dropdownOptions}
              onChange={options.onChange}
            />
          </React.Fragment>
        </div>
      );
    },
  };
  const [visible, setVisible] = useState(false);
  // const handleEdit = () => {
  //   setVisible(true)
  // }
  const renderEditButton = (rowData) => {
    console.log(rowData, "rowData");
    return (
      <div className="action__icon">
        <Button
          icon={<SvgEditIcon />}
          onClick={() => handleEdit(rowData)}
          className="action__button"
        />
      </div>
    );
  };
  const headerStyle = {
    textAlign: "end",
  };

  const codeOptions = [
    { label: "Option 1", value: "00123" },
    { label: "Option 2", value: "00124" },
  ];
  const codeOptionsMain = [
    { label: "Option 1", value: "MAC001" },
    { label: "Option 2", value: "MAC002" },
    { label: "Option 3", value: "MAC003" },
  ];
  const codeOptionsSub = [
    { label: "Option 1", value: "SAC001" },
    { label: "Option 2", value: "SAC002" },
  ];
  const codeOptionsDept = [
    { label: "Option 1", value: "FIN" },
    { label: "Option 2", value: "MKT" },
    { label: "Option 1", value: "IT" },
    { label: "Option 2", value: "SLS" },
  ];
  const codeOptionsBranch = [
    { label: "Option 1", value: "PHP001" },
    { label: "Option 2", value: "PHP002" },
  ];

  const codeOptionsType = [
    { label: "Option 1", value: "Credit" },
    { label: "Option 2", value: "Debit" },
  ];
  const codeCurrencyType = [
    { label: "Option 1", value: "INR" },
    { label: "Option 2", value: "EURO" },
  ];

  const customValidation = (values) => {
    const errors = {};

    if (!values.mainAccount) {
      errors.mainAccount = "This field is required";
    }

    if (!values.entryType) {
      errors.entryType = "This field is required";
    }
    if (!values.subAccount) {
      errors.subAccount = "This field is required";
    }

    if (!values.branchCode) {
      errors.branchCode = "This field is required";
    }

    if (!values.departmentCode) {
      errors.departmentCode = "This field is required";
    }

    if (!values.currencyCode) {
      errors.currencyCode = "This field is required";
    }

    if (!values.foreignAmount) {
      errors.foreignAmount = "This field  is required";
    }

    return errors;
  };
  const dispatch = useDispatch();
  const [EditID, setEditID] = useState(null);
  const handleEdit = (rowData) => {
    console.log(rowData.id, "rown");
    dispatch(getPatchCorrectionJVEdit(rowData))
    setEditID(rowData.id);
    setVisible(true);
  };
  const handleSubmit = (values) => {
    console.log(values, "find values in formik");
    const valueWithId = {
      ...values,
      id: EditID,
    };
    // dispatch(patchCorrectionJVEdit(valueWithId));
    setVisible(false);
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
      handleSubmit(values);
      formik.resetForm();
      // handleUpdate(values);
      setVisible(false);
    },
  });
  useEffect(() => {
    if (EditID != null) {
      setFormikValues();
    }
  }, [EditID]);
  const setFormikValues = () => {
    // const getCorrectionJVEdit = correctionJVList.find((item) => item.id === EditID);
    console.log(getCorrectionJVEdit, "find data");

    const updatedValues = {
      mainAccount: getCorrectionJVEdit?.mainAccount || "",
      mainAccountDescription: getCorrectionJVEdit?.mainAccountDescription || "",
      entryType: getCorrectionJVEdit?.entryType || "",
      subAccount: getCorrectionJVEdit?.subAccount || "",
      subAccountDescription: getCorrectionJVEdit?.subAccountDescription || "",
      branchCode: getCorrectionJVEdit?.branchCode || "",
      branchCodeDescription: getCorrectionJVEdit?.branchCodeDescription || "",
      departmentCode: getCorrectionJVEdit?.departmentCode || "",
      departmentDescription: getCorrectionJVEdit?.departmentDescription || "",
      currencyCode: getCorrectionJVEdit?.currencyCode || "",
      currencyDescription: getCorrectionJVEdit?.currencyDescription || "",
      foreignAmount: getCorrectionJVEdit?.foreignAmount || "",
    };
    formik.setValues({ ...formik.values, ...updatedValues });
  };

  return (
    <div className="corrections__table__container">
      <DataTable
        value={correctionJVList}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        currentPageReportTemplate="{first} - {last} of {totalRecords}"
        paginatorTemplate={template2}
        className="corrections__table__main"
        scrollable={true}
        scrollHeight="40vh"
      >
        <Column
          field="mainAccount"
          header="Main A/c"
          className="fieldvalue_container"
        ></Column>
        <Column
          field="subAccount"
          header="Sub A/c"
          className="fieldvalue_container"
        ></Column>
        <Column
          field="remarks"
          header="Remarks"
          className="fieldvalue_container"
        ></Column>
        <Column
          field="currency"
          header="Currency"
          className="fieldvalue_container"
        ></Column>
        <Column
          field="foreignAmount"
          header="Foreign Amount"
          className="fieldvalue_container"
        ></Column>
        <Column
          field="localAmount"
          header="Local Amount"
          className="fieldvalue_container"
        ></Column>
        <Column
          field="entryType"
          header="Entry"
          className="fieldvalue_container"
        ></Column>
        <Column
          field="id"
          body={renderEditButton}
          header="Edit"
          className="fieldvalue_container last__div__table"
          headerStyle={headerStyle}
        ></Column>
      </DataTable>
      <Dialog
        header="Edit Data"
        visible={visible}
        className="corrections__jv__Edit__modal__container"
        onHide={() => setVisible(false)}
        dismissableMask={true}
      >
        <div className="form__container">
          <div className="grid m-0">
            <div className="col-12 md:col-3 lg:col-3 xl:col-3">
              <DropDowns
                className="input__field__corrections"
                dropdownIcon={<SvgDropdown color={"#000"} />}
                placeholder="Select "
                classNames="select__label__corrections"
                optionLabel="value"
                label="Main Account"
                value={formik.values.mainAccount}
                onChange={(e) => formik.setFieldValue("mainAccount", e.value)}
                options={codeOptionsMain}
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
            <div className="col-12 md:col-6 lg:col-6 xl:col-6">
              <InputField
                classNames="input__field__corrections__inactive"
                disabled={true}
                className="input__label__corrections"
                label="Main Account Description"
                value={
                  formik.values.mainAccount
                    ? `Main Account Description ${formik.values.mainAccount}`
                    : ""
                }
              />
            </div>

            <div className="col-12 md:col-3 lg:col-3 xl:col-3">
              <DropDowns
                className="input__field__corrections"
                dropdownIcon={<SvgDropdown color={"#000"} />}
                placeholder="Select "
                classNames="select__label__corrections"
                optionLabel="value"
                label="Entry Type"
                value={formik.values.entryType}
                onChange={(e) => formik.setFieldValue("entryType", e.value)}
                options={codeOptionsType}
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
            <div className="col-12 md:col-3 lg:col-3 xl:col-3">
              <DropDowns
                className="input__field__corrections"
                dropdownIcon={<SvgDropdown color={"#000"} />}
                classNames="select__label__corrections"
                optionLabel="value"
                label="Sub Account"
                value={formik.values.subAccount}
                onChange={(e) => formik.setFieldValue("subAccount", e.value)}
                options={codeOptionsSub}
                placeholder="Select "
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
            <div className="col-12 md:col-6 lg:col-6 xl:col-6 ">
              <InputField
                classNames="input__field__corrections__inactive"
                disabled={true}
                className="input__label__corrections"
                label="Sub Account Description"
                value={
                  formik.values.subAccount
                    ? `Sub Account Description ${formik.values.subAccount}`
                    : ""
                }
              />
            </div>
          </div>
          <div
            className="grid m-0 p-0 add__journal__vocture__add__JV"
            style={{ alignItems: "center" }}
          >
            <div className="col-12 md:col-3 lg:col-3 xl:col-3 ">
              <DropDowns
                className="input__field__corrections"
                dropdownIcon={<SvgDropdown color={"#000"} />}
                classNames="select__label__corrections"
                optionLabel="value"
                label="Branch Code"
                value={formik.values.branchCode}
                onChange={(e) => formik.setFieldValue("branchCode", e.value)}
                options={codeOptionsBranch}
                placeholder="Select "
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
            <div className="col-12 md:col-6 lg:col-6 xl:col-6">
              <InputField
                classNames="input__field__corrections__inactive"
                disabled={true}
                className="input__label__corrections"
                label="Branch Code Description"
                value={
                  formik.values.branchCode
                    ? `Branch Code Description ${formik.values.branchCode}`
                    : ""
                }
              />
              {formik.touched.branchCodeDescription &&
                formik.errors.branchCodeDescription && (
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
            <div className="col-12 md:col-3 lg:col-3 xl:col-3">
              <DropDowns
                className="input__field__corrections"
                dropdownIcon={<SvgDropdown color={"#000"} />}
                classNames="select__label__corrections"
                optionLabel="value"
                label="Department Code"
                value={formik.values.departmentCode}
                onChange={(e) =>
                  formik.setFieldValue("departmentCode", e.value)
                }
                options={codeOptionsDept}
                placeholder="Select "
              />
              {formik.touched.departmentCode &&
                formik.errors.departmentCode && (
                  <div
                    style={{ fontSize: 12, color: "red" }}
                    className="formik__errror__JV"
                  >
                    {formik.errors.departmentCode}
                  </div>
                )}
            </div>
            <div className="col-12 md:col-6 lg:col-6 xl:col-6">
              <InputField
                classNames="input__field__corrections__inactive"
                disabled={true}
                className="input__label__corrections"
                label="Department Description"
                value={
                  formik.values.departmentCode
                    ? `Department Description ${formik.values.departmentCode}`
                    : ""
                }
              />
              {formik.touched.departmentDescription &&
                formik.errors.departmentDescription && (
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
            <div className="col-12 md:col-3 lg:col-3 xl:col-3">
              <DropDowns
                className="input__field__corrections"
                dropdownIcon={<SvgDropdown color={"#000"} />}
                classNames="select__label__corrections"
                optionLabel="value"
                label="Currency Code"
                value={formik.values.currencyCode}
                onChange={(e) => formik.setFieldValue("currencyCode", e.value)}
                options={codeCurrencyType}
                placeholder="Select "
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
            <div className="col-12 md:col-6 lg:col-6 xl:col-6">
              <InputField
                classNames="input__field__corrections__inactive"
                disabled={true}
                className="input__label__corrections"
                label="Currency Description"
                value={
                  formik.values.currencyCode
                    ? `Currency Description ${formik.values.currencyCode}`
                    : ""
                }
              />
              {formik.touched.currencyDescription &&
                formik.errors.currencyDescription && (
                  <div
                    style={{ fontSize: 12, color: "red" }}
                    className="formik__errror__JV"
                  >
                    {formik.errors.currencyDescription}
                  </div>
                )}
            </div>
            <div className="col-12 md:col-3 lg:col-3 xl:col-3">
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
              {formik.touched.foreignAmount && formik.errors.foreignAmount && (
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
                className="correction__btn__corrections"
                disabled={!formik.isValid}
                onClick={formik.handleSubmit}
              />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default TableData;
