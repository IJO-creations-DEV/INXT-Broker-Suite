import React, { useEffect, useState } from "react";
import "./index.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Productdata from "./mock";
import { Dropdown } from "primereact/dropdown";
import SvgEditIcon from "../../../assets/icons/SvgEditIcon";
import { Button } from "primereact/button";
const TableData = ({ handleEdit, newDataTable }) => {
  console.log(newDataTable, "find newDataTable");
  let newProduct;
  let updatedProductData;

  if (newDataTable.length > 0) {
    updatedProductData = [
      ...Productdata,
      (newProduct = {
        id: 11,
        mainAC: newDataTable[0].mainAccount,
        subAC: newDataTable[0].subAccount,
        Currency: newDataTable[0].currencyCode,
        foreignAmount: newDataTable[0].foreignAmount,
        localAmount: "500.00",
        Remarks: "New credit voucher",
        Entry: newDataTable[0].entryType,
      }),
    ];
  } else {
    updatedProductData = Productdata;
  }

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
  const renderEditButton = (rowData) => {
    return (
      <div className="center-content">
        <Button
          icon={<SvgEditIcon />}
          onClick={handleEdit}
          className="action__button"
        />
      </div>
    );
  };

  return (
    <div className="reversal__table__container">
      <DataTable
        value={updatedProductData}
        //   tableStyle={{ minWidth: "50rem", color: "#1C2536" }}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        currentPageReportTemplate="{first} - {last} of {totalRecords}"
        paginatorTemplate={template2}
        className="reversal__table__main"
      >
        <Column
          field="mainAC"
          header="Main A/c"
          className="fieldvalue_container"
        ></Column>
        <Column
          field="subAC"
          header="Sub A/c"
          className="fieldvalue_container"
        ></Column>

        <Column
          field="Remarks"
          header="Remarks"
          className="fieldvalue_container"
        ></Column>
        <Column
          field="Currency"
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
          field="Entry"
          header="Entry"
          className="fieldvalue_container"
        ></Column>
        <Column
          body={renderEditButton}
          header="Edit"
          className="fieldvalue_container"
        ></Column>
      </DataTable>
    </div>
  );
};

export default TableData;
