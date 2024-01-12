import React, { useEffect, useState, useRef } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import InputField from "../../../components/InputField";
import SubmitButton from "../../../components/SubmitButton";
import SvgDot from "../../../assets/icons/SvgDot";
import DropDowns from "../../../components/DropDowns";
import SvgDropdown from "../../../assets/icons/SvgDropdown";
import { Button } from "primereact/button";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import SvgBackicon from "../../../assets/icons/SvgBackicon";
import { Card } from "primereact/card";
import DatePicker from "../../../components/DatePicker";
import { Calendar } from "primereact/calendar";
import LabelWrapper from "../../../components/LabelWrapper";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Productdata from "./mock";
import { Dropdown } from "primereact/dropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  getpaymentVocherByIdMiddleware,
  patchpaymentStatusByIdMiddleware,
} from "../store/paymentVocherMiddleware";
import CustomToast from "../../../components/Toast";

function Detailview() {
  const toastRef = useRef(null);
  const [date, setDate] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [actionToast, setactionToast] = useState(null);

  useEffect(() => {
    dispatch(getpaymentVocherByIdMiddleware(id));
  }, [id]);

  const { chequebooklist, individualVoucherData, loading } = useSelector(
    ({ paymentVoucherReducers }) => {
      return {
        loading: paymentVoucherReducers?.loading,
        chequebooklist: paymentVoucherReducers?.chequebooklist,
        individualVoucherData: paymentVoucherReducers?.individualVoucher,
      };
    }
  );

  const Navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  // const home = { label: "Accounts" };
  
  const items = [
    {
     
      label: "Payment Voucher",
      command:()=>Navigate("/accounts/paymentvoucher/"),
      
     
    },
    {
      label: "Payment Voucher Details",
      to: "/accounts/paymentvoucher/detailview",
    }
  ];
  const statusBodyTemplate = (rowData) => {
    return (
      <div
        style={{
          backgroundColor: rowData.status !== "Pending" ? "#E2F6EF" : "#FFE5B4",
          color: rowData.status !== "Pending" ? "#29CE00" : "#FFA800",
        }}
        className="statuslable_container"
      >
        {rowData.status}
      </div>
    );
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
        <React.Fragment>
          <span
            className="mx-1"
            style={{ color: "var(--text-color)", userSelect: "none" }}
          >
            Row count :{" "}
          </span>
          <Dropdown
            value={options.value}
            className="pagedropdown_container"
            options={dropdownOptions}
            onChange={options.onChange}
          />
        </React.Fragment>
      );
    },
  };

  const headerStyle = {
    // width: '12rem',
    // backgroundColor: 'red',
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
    paddingLeft:0
  };
  const status = [
    { name: "Active", code: "NY" },
    { name: "Deactive", code: "RM" },
  ];
  const item = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const home = { label: "Accounts" };
  useEffect(() => {
    if (actionToast != null) {
      toastRef.current.showToast();
      {
        setTimeout(() => {}, 3000);
      }
    }
  }, [actionToast]);
  const handlePatchAction = () => {
    const patchID = selectedProducts?.id;

    dispatch(patchpaymentStatusByIdMiddleware(patchID));
    setactionToast(
      selectedProducts?.status === "Pending" ? "Approved" : "Printed"
    );
    setSelectedProducts([]);
  };
  const getStatusClassName = (status) => {
    return status === "Printed" ? "disabled-row" : "";
  };
  return (
    <div className="overall__detailview__container">
      <NavBar />
      <CustomToast
        ref={toastRef}
        message={`Cheque book details ${actionToast} successfully`}
      />
      <div>
        <span onClick={() => Navigate(-1)}>
          <SvgBackicon />
        </span>

        <label className="label_header">Payment Voucher Details</label>
      </div>
      <BreadCrumb
        model={items}
        home={home}
        className="breadcrumbs_container"
        separatorIcon={<SvgDot color={"#000"} />}
      />

      <Card className="cardstyle_container">
        <div class="grid">
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
              <InputField
                classNames="field__container"
                label="Department Code"
                value="Doc00123"
                disabled={true}
              />
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
              <InputField
                classNames="field__container"
                label="Branch Code"
                value="Branch00123"
                disabled={true}
              />
            </div>
          </div>
          <div class="sm-col-12  md:col-3 lg-col-4">
            <div>
              <InputField
                classNames="field__container"
                label="Payee Type"
                value="Customer"
                disabled={true}
              />
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
              <InputField
                classNames="field__container"
                label="Criteria"
                value="Specific"
                disabled={true}
              />
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="col-3 md:col-3 lg-col-3">
            <InputField
              classNames="field__container"
              label="Customer Code"
              value={individualVoucherData[0]?.CustomerCode}
              disabled={true}
            />
          </div>
          <div class="col-3 md:col-3 lg-col-3">
            <InputField
              classNames="field__container"
              label="Transaction code"
              placeholder={"Enter"}
              value={individualVoucherData[0]?.TransactionNumber}
              disabled={true}
            />
          </div>
          <div class="sm-col-12 col-12 md:col-6 lg-col-6">
            <InputField
              classNames="field__container"
              label="Transaction Description"
              value="Informative explanation"
              disabled={true}
            />
          </div>
        </div>
        <div class="grid">
          <div class="sm-col-12  md:col-3 lg-col-4">
            <InputField
              classNames="field__container"
              label="Select Instrument Currency"
              value="INR"
              disabled={true}
            />
          </div>
          <div class="sm-col-12  md:col-6 lg-col-6">
            <InputField
              classNames="field__container"
              label="Remarks (Optional)"
              value="Specific payment voucher"
              disabled={true}
            />
          </div>
        </div>
      </Card>

      <label className="headlist_lable">Cheque book details</label>

      <div className="tablegap_container">
        <DataTable
          value={chequebooklist}
          tableStyle={{ minWidth: "50rem", color: "#1C2536" }}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          // paginatorTemplate="RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{first} - {last} of {totalRecords}"
          paginatorTemplate={template2}
          scrollable={true}
          scrollHeight="40vh"
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          selectionMode="checkbox"
          rowClassName={(rowData) => getStatusClassName(rowData.status)}
        >
          {chequebooklist?.length > 0 && (
            <Column
              selectionMode="single"
              headerStyle={{ width: "4rem" }}
              style={{textAlign:'center'}}
            ></Column>
          )}
          <Column
            field="VoucherNumber"
            header="Customer Code"
            headerStyle={headerStyle}
            sortable
            className="fieldvalue_container"
          ></Column>
          <Column
            field="TransactionNumber"
            header="Customer Name"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="CustomerCode"
            header="Main Account"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="VoucheDate"
            header="Instrument Book ID"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="Amount"
            header="Instrument No"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="Amount"
            header="Instrument Date"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="Amount"
            header="Total Amount"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="status"
            header="Status"
            headerStyle={headerStyle}
            className="fieldvalue_container"
            body={statusBodyTemplate}
          ></Column>
        </DataTable>
      </div>

      <div className="next_container">
        <Button
          className="submit_button p-0"
          label={selectedProducts?.status === "Approved" ? "Print" : "Approve"}
          onClick={handlePatchAction}
          disabled={
            selectedProducts?.length === 0 ||
            selectedProducts?.status === "Printed"
          }
        />
      </div>
    </div>
  );
}

export default Detailview;
