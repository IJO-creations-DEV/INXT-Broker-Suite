import React, { useState, useRef, useEffect } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import InputField from "../../../components/InputField";
import SubmitButton from "../../../components/SubmitButton";
import SvgDot from "../../../assets/icons/SvgDot";
import DropDowns from "../../../components/DropDowns";
import SvgDropdown from "../../../assets/icons/SvgDropdown";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
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
import { Tag } from "primereact/tag";
import SvgEditIcon from "../../../assets/icons/SvgEditicons";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useDispatch, useSelector } from "react-redux";
import { patchpaymentStatusByIdMiddleware } from "../store/paymentVocherMiddleware";
import CustomToast from "../../../components/Toast";

function Bankdetailselection() {
  const toastRef = useRef(null);
  const [date, setDate] = useState(null);
  const dispatch = useDispatch();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  console.log("first", selectedProducts);
  const Navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [bankaccountitem, setBankaccount] = useState(null);
  const [actionToast, setactionToast] = useState(null);

  const { chequebooklist, loading } = useSelector(
    ({ paymentVoucherReducers }) => {
      return {
        loading: paymentVoucherReducers?.loading,
        chequebooklist: paymentVoucherReducers?.chequebooklist,
      };
    }
  );

  const items = [
    { label: "Payment Voucher", url: "/accounts/paymentvoucher" },
    { label: "Create Voucher", url: "/accounts/paymentvoucher/createvoucher" },
  ];

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
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
  };
  const status = [
    { name: "Bk001", code: "bk1" },
    { name: "Bk002", code: "bk2" },
    { name: "Bk003", code: "bk3" },
  ];
  const bankaccount = [
    { name: "678882222256", code: "NY" },
    { name: "678882222279", code: "RM" },
  ];
  const item = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const home = { label: "Accounts" };

  const statusBodyTemplate = (rowData) => {
    return (
      <div
        style={{
          backgroundColor: rowData.status === "Pending" ? "#FFE5B4" : "#E2F6EF",
          color: rowData.status === "Pending" ? "#FFA800" : "#29CE00",
        }}
        className="statuslable_container"
      >
        {rowData.status}
      </div>
    );
  };
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
    setSelectedProducts([]);
    setactionToast(
      selectedProducts?.status === "Pending" ? "Approved" : "Printed"
    );
  };
  const getStatusClassName = (status) => {
    return status === "Printed" ? "disabled-row" : "";
  };
  return (
    <div className="overall__bankdetailview__container">
      <CustomToast
        ref={toastRef}
        message={`Cheque book details ${actionToast} successfully`}
      />
      <div>
        <span onClick={() => Navigate(-1)}>
          <SvgBackicon />
        </span>
        <label className="label_header">Create Voucher</label>
      </div>
      <BreadCrumb
        model={items}
        home={home}
        className="breadcrumbs_container"
        separatorIcon={<SvgDot color={"#000"} />}
      />

      <Card className="cardstyle_container">
        <div className="header_cardcontainer">Select Bank Details</div>
        <div class="grid">
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
              <InputField
                disabled={true}
                classNames="field__container"
                label="Total Amount"
                value={1500}
              />
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
              <DropDowns
                className="dropdown__container"
                label="Bank Code"
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.value)}
                options={status}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
          </div>
          <div class="sm-col-12  md:col-3 lg-col-4">
            <div>
              <DropDowns
                className="dropdown__container"
                label="Bank Account"
                value={bankaccountitem}
                onChange={(e) => setBankaccount(e.value)}
                options={bankaccount}
                optionLabel="name"
                placeholder={"Select"}
                dropdownIcon={<SvgDropdown color={"#000"} />}
              />
            </div>
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
              selectedItem
              headerStyle={{ width: "4rem" ,border:"0px solid #000"}}
              style={{ textAlign: "center" }}
            ></Column>
          )}
          <Column
            field="VoucherNumber"
            header="Customer Code"
            sortable
            headerStyle={headerStyle}
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
          />

          {/* <Column field="Amount" header="Total Amount" style={{ width: '24rem' }} headerStyle={headerStyle} className='fieldvalue_container'></Column> */}
          {/* <Column field="action" header="Action" headerStyle={headerStyle} className='fieldvalue_container'
        onClick={() => setVisible(true)}
        ></Column> */}

          {/* <Column
            body={(params) => (
                <SvgEditIcon onClick={() => setVisible(true)}/>
            )}
            header="Action"
            headerStyle={headerStyle}
            className="fieldvalue_container"
        ></Column> */}
        </DataTable>
      </div>

      <div className="next_container">
        <Button
          className="history_button"
          label="Go to history"
          onClick={() => Navigate("/accounts/paymentvoucher")}
        />
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

export default Bankdetailselection;
