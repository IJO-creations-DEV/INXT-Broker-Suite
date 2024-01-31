import React, { useRef, useState } from "react";
import "./index.scss";
import { useFormik } from "formik";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../../assets/icons/SvgDot";
import { useNavigate } from "react-router";
import SvgBackArrow from "../../../../assets/icons/SvgBackArrow";
import DropDowns from "../../../../components/DropDowns";
import SvgDropdown from "../../../../assets/icons/SvgDropdown";
// import CustomToast from "../../../../components/Toast";
import { Button } from "primereact/button";
import InputField from "../../../../components/InputField";
import { Card } from "primereact/card";
import {
  PettyCashCode,
  Criteria,
  VATMainAccount,
  WHTSubAccount,
  WHTMainAccount,
  VATSubAccount,
} from "../../mock";
import { useDispatch, useSelector } from "react-redux";
import { postAddDisbursmentMiddleware } from "../store/pettyCashDisbursementMiddleware";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { Column } from "primereact/column";
import SvgTable from "../../../../assets/icons/SvgTable";

const initialValue = {
  PettyCashCode: "",
  Date: "24/01/2024",
  TransactionCode: "",
  TransactionNumber: "",
  Criteria: "",
  VATMainAccount: "",
  VATSubAccount: "",
  WHTMainAccount: "",
  WHTSubAccount: "",
  Remarks: "",
};

const AddDisbursement = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedRows, setSelectedRows] = useState([]);
  // const toastRef = useRef(null);

  const { AddDisbursment, loading, AddDisbursmentRequestTable } = useSelector(
    ({ pettyCashDisbursementReducers }) => {
      return {
        loading: pettyCashDisbursementReducers?.loading,
        AddDisbursment: pettyCashDisbursementReducers?.AddDisbursment,
        AddDisbursmentRequestTable: pettyCashDisbursementReducers?.AddDisbursmentRequestTable
      };
    }
  );

  const items = [
    {
      label: "Petty Cash",
      command: () => navigate("/accounts/pettycash/disbursement"),
    },
    {
      label: "Add Disbursement",
      to: "/accounts/pettycash/adddisbursement",
    },
  ];
  const Initiate = { label: "Accounts" };

  const handleBack = () => {
    navigate("/accounts/pettycash/disbursement");
  };
  const toastRef = useRef(null);
  const handleSubmit = (value) => {
    const valueWithId = {
      ...value,
      id: AddDisbursment?.length + 1,
    };
    dispatch(postAddDisbursmentMiddleware(valueWithId));
    // toastRef.current.showToast();
    // {
    //   setTimeout(() => {
    navigate("/accounts/pettycash/adddisbursementtable");
    //   }, 2000);
    // }
  }

  const validate = (values) => {
    const errors = {};

    if (!values.PettyCashCode) {
      errors.PettyCashCode = "This field is required";
    }
    if (!values.Date) {
      errors.Date = "This field is required";
    }
    // if (!values.TransactionCode) {
    //   errors.TransactionCode = "This field is required";
    // }
    // if (!values.TransactionNumber) {
    //   errors.TransactionNumber = "This field is required";
    // }
    if (!values.Criteria) {
      errors.Criteria = "This field is required";
    }
    if (!values.VATMainAccount) {
      errors.VATMainAccount = "This field is required";
    }
    if (!values.VATSubAccount) {
      errors.VATSubAccount = "This field is required";
    }
    if (!values.WHTMainAccount) {
      errors.WHTMainAccount = "This field is required";
    }
    if (!values.WHTSubAccount) {
      errors.WHTSubAccount = "This field is required";
    }
    if (!values.Remarks) {
      errors.Remarks = "This field is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: initialValue,
    validate,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handlePettyCashDescribtion = (value) => {
    let description = "";
    switch (value.pettycashcode) {
      case "PC001":
        description = "PC-1";
        break;
      case "PC002":
        description = "PC-2";
        break;
      case "PC003":
        description = "PC-3";
        break;
      case "PC004":
        description = "PC-4";
        break;
      default:
        description = "Unknown";
        break;
    }
    formik.setFieldValue("PettyCashdescription", description);
  };
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
        <div className="paginator__container">
          <React.Fragment>
            <span
              className="mx-1"
              style={{ color: "var(--text-color)", userSelect: "none" }}
            >
              Row count :{" "}
            </span>
            <Dropdown
              value={options.value}
              className="pagedropdownunique_container"
              options={dropdownOptions}
              onChange={options.onChange}
            />
          </React.Fragment>
        </div>
      );
    },
  };
  const headerStyle = {
    // width: "10rem",
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    padding: 8,
    color: "#000",
    border: "none",
    textAlign: "center",
    paddingLeft: 0,
  };
  const headaction = {
    justifyContent: "center",
    // textalign: center,
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    // padding: "18px 8px",
    // paddingTop:4,
    color: "#000",
    border: " none",
    display: "flex",
    // paddingBottom:"28px",
    // paddingTop:"8px"
  };
  const emptyTableIcon = (
    <div className="empty-table-icon">
      <SvgTable />
    </div>
  );
  return (
    <div className="add__disbursement__container">
      {/* <CustomToast ref={toastRef} /> */}
      <div className="grid  m-0">
        <div className="col-12 md:col-6 lg:col-6">
          <div
            className="pettycash__title"
            onClick={() => {
              handleBack();
            }}
          >
            <SvgBackArrow />
            Add Disbursement
          </div>
          <div className="mt-3">
            <BreadCrumb
              model={items}
              home={Initiate}
              className="breadCrums"
              separatorIcon={<SvgDot color={"#000"} />}
            />
          </div>
        </div>
      </div>
      <div>
        <Card className="mt-3">
          <div className="grid mt-1">
            <div className="col-12 md:col-6 lg:col-3 xl:col-3 input__view">
              <InputField
                classNames="input__filed"
                label="Date"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.Date}
                onChange={formik.handleChange("Date")}
                error={formik.touched.Date && formik.errors.Date}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-3 xl:col-3 input__view">
              <InputField
                classNames="input__filed"
                label="Transaction Code"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                disabled={true}
                value={formik.values.TransactionCode}
                onChange={formik.handleChange("TransactionCode")}
                error={
                  formik.touched.TransactionCode &&
                  formik.errors.TransactionCode
                }
              />
            </div>
            <div className="col-12 md:col-6 lg:col-3 xl:col-3 input__view">
              <InputField
                classNames="input__filed"
                label="Transaction Number"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                disabled={true}
                value={formik.values.TransactionNumber}
                onChange={formik.handleChange("TransactionNumber")}
                error={
                  formik.touched.TransactionNumber &&
                  formik.errors.TransactionNumber
                }
              />
            </div>

            <div className="col-12 md:col-3 lg:col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Petty Cash Code*"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.PettyCashCode}
                options={PettyCashCode}
                onChange={(e) => formik.setFieldValue("PettyCashCode", e.value)}
                optionLabel="pettycashcode"
                error={
                  formik.touched.PettyCashCode && formik.errors.PettyCashCode
                }
              />
            </div>
            <div className="col-12 md:col-3 lg:col-3 input__view">
              <DropDowns
                className="input__filed"
                label="Criteria*"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.Criteria}
                options={Criteria}
                onChange={(e) => formik.setFieldValue("Criteria", e.value)}
                optionLabel="label"
                error={formik.touched.Criteria && formik.errors.Criteria}
              />
            </div>
            <div className="col-12 md:col-3 lg:col-3 input__view">
              <DropDowns
                className="input__filed"
                label="VAT Main Account"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.VATMainAccount}
                options={VATMainAccount}
                onChange={(e) =>
                  formik.setFieldValue("VATMainAccount", e.value)
                }
                optionLabel="VATMainAccount"
                error={
                  formik.touched.VATMainAccount && formik.errors.VATMainAccount
                }
              />
            </div>
            <div className="col-12 md:col-3 lg:col-3 input__view">
              <DropDowns
                className="input__filed"
                label="VAT Sub Account"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.VATSubAccount}
                options={VATSubAccount}
                onChange={(e) => formik.setFieldValue("VATSubAccount", e.value)}
                optionLabel="VATSubAccount"
                error={
                  formik.touched.VATSubAccount && formik.errors.VATSubAccount
                }
              />
            </div>
            <div className="col-12 md:col-3 lg:col-3 input__view">
              <DropDowns
                className="input__filed"
                label="WHT Main Account"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.WHTMainAccount}
                options={WHTMainAccount}
                onChange={(e) =>
                  formik.setFieldValue("WHTMainAccount", e.value)
                }
                optionLabel="WHTMainAccount"
                error={
                  formik.touched.WHTMainAccount && formik.errors.WHTMainAccount
                }
              />
            </div>
            <div className="col-12 md:col-3 lg:col-3 input__view">
              <DropDowns
                className="input__filed"
                label="WHT Sub Account"
                placeholder="Select"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                dropdownIcon={<SvgDropdown color={"#000"} />}
                value={formik.values.WHTSubAccount}
                options={WHTSubAccount}
                onChange={(e) => formik.setFieldValue("WHTSubAccount", e.value)}
                optionLabel="WHTSubAccount"
                error={
                  formik.touched.WHTSubAccount && formik.errors.WHTSubAccount
                }
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6 input__view">
              <InputField
                classNames="input__filed"
                label="Remarks"
                placeholder="Enter remarks"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.Remarks}
                onChange={formik.handleChange("Remarks")}
                error={formik.touched.Remarks && formik.errors.Remarks}
              />
            </div>
          </div>
        </Card>
      </div>
      {formik.values.Criteria === "Request" ?
        <Card className="mt-4">
          <div className="sub__container grid ">
            <div className="sub__container__title col-12">
              <div className="table__top__btn__container">
                <div className="sub__request__title">Request List</div>
              </div>
            </div>
          </div>
          <div className="table__container">
            <DataTable
              value={AddDisbursmentRequestTable}
              // tableStyle={{ minWidth: "50rem" }}
              emptyMessage={emptyTableIcon}
              selection={selectedRows}
              onSelectionChange={(e) => setSelectedRows(e.value)}
              selectionMode="checkbox"
              scrollable={true}
              scrollHeight="40vh"
              paginator
              rows={5}
              rowsPerPageOptions={[5, 10, 25, 50]}
              // paginatorTemplate="RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
              currentPageReportTemplate="{first} - {last} of {totalRecords}"
              paginatorTemplate={template2}
            >
              <Column
                headerStyle={headaction}
                selectionMode="multiple"
                selectedItem
                style={{ textAlign: "center" }}
              // headerStyle={{ width: "4rem" }}
              ></Column>
              <Column
                field="TransactionCode"
                header="Transaction Code"
                headerStyle={headerStyle}
                sortable
              ></Column>
              <Column
                field="DocumentNumber"
                header="Document Number"
                headerStyle={headerStyle}
                sortable
              ></Column>
            </DataTable>
          </div>
        </Card>
        : ""
      }

      <div className="grid  mt-4">
        <div className="col-12 md:col-12 lg:col-12">
          <div className="btn__container">
            <Button
              label="Next"
              className="add__btn"
              onClick={() => {
                formik.handleSubmit();
              }}
              disabled={selectedRows.length === 0 && formik.values.Criteria === "Request"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDisbursement;
