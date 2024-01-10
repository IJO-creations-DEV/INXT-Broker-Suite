import React, { useState, useEffect } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import InputField from "../../../components/InputField";
import SvgDot from "../../../assets/icons/SvgDot";
import { Button } from "primereact/button";
import NavBar from "../../../components/NavBar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { data } from "./mock";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import SvgBack from "../../../assets/icons/SvgBack";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PolicyReceipts() {
  const { receiptDetailList, loading, total } = useSelector(({ receiptsTableReducers }) => {
    return {
      loading: receiptsTableReducers?.loading,
      receiptDetailList: receiptsTableReducers?.receiptDetailList,
      total: receiptsTableReducers

    };
  });
  useEffect(() => {
    console.log(total, "sd")
  }, [total])
  console.log(total, "find receivableTableList")
  const navigate = useNavigate()
  const items = [{
    label: "Receipts",
    command: () => navigate('/accounts/receipts/policyreceipts')
  }, {
    label: "Receipt Detail View"
  }];

  const home = { label: "Accounts " };
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
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    color: "#000",
    border: "none",
    textalign: "center",

  };

  return (
    <div className="overall__policy_receipts_view__container">
      <NavBar />
      <SvgBack />
      <label className="label_header">Receipt Detail View</label>
      <BreadCrumb
        model={items}
        home={home}
        className="breadcrumbs_container"
        separatorIcon={<SvgDot color={"#000"} />}
      />

      <div className="listlable_textcontainer">
        <label className="listlable_text">Receipts List</label>
      </div>

      <div className="card">
        <DataTable
          value={receiptDetailList}
          tableStyle={{
            minWidth: "50rem",
            color: "#1C2536",
            maxHeight: "50vh",
            overflowy: "auto",
          }}
          className="datatable_container"
        >
          <Column
            field="policies"
            header="Policies"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="netPremium"
            header="Net Premium"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="paid"
            header="Paid"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="unPaid"
            header="UnPaid"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="discounts"
            header="Discounts"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="dst"
            header="DST"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="lgt"
            header="LGT"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>

          <Column
            field="vat"
            header="VAT"
            headerStyle={headerStyle}
            className="fieldvalue_containers"
          ></Column>
          <Column
            field="ewt"
            header="EWT"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="fcAmount"
            header="FC Amount"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
          <Column
            field="lcAmount"
            header="LC Amount"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          ></Column>
        </DataTable>
      </div>

      <div className="label_payments">Payment Details</div>
      <Card>
        <div class="grid">
          <div class="col-4 md:col-4 lg-col-4">
            <div>
              <InputField
                classNames="field__policy "
                label="Total Payment"
                value={"16000.00"}
              />
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="col-4 md:col-4 lg-col-4">
            <div>
              <InputField
                classNames="field__policy "
                label="Bank code"
                value={"Bank00123"}
              />
            </div>
          </div>
          <div class="col-4 md:col-4 lg-col-4">
            <div>
              <InputField
                classNames="field__policy "
                label="Bank Name"
                value={"Money bank"}
              />
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col-4 md:col-4 lg-col-4">
            <div>
              <InputField
                classNames="field__policy "
                label="Bank Account"
                value={"265478932107"}
              />
            </div>
          </div>
          <div class="col-4 md:col-4 lg-col-4">
            <div>
              <InputField
                classNames="field__policy"
                label="Bank Account Name"
                value={"Business Account"}
              />
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col-4 md:col-4 lg-col-4">
            <div>
              <InputField
                classNames="field__policy"
                label="Payment Type"
                value={"Card"}
              />
            </div>
          </div>
          <div class="col-4 md:col-4 lg-col-4">
            <div>
              <InputField
                classNames="field__policy "
                label="Card Number"
                value={"1234 5678 9874 5632"}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default PolicyReceipts;
