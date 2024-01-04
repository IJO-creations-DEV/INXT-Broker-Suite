import React, { useState } from "react";
import "./index.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Productdata from "./mock";
import { Dropdown } from "primereact/dropdown";

const TableData = ({reversalJVList}) => {
  const [products, setProducts] = useState([]);
  console.log(reversalJVList,"reversalJVList")

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

  return (
    <div className="reversal__table__container">
      <DataTable
        value={reversalJVList}
        //   tableStyle={{ minWidth: "50rem", color: "#1C2536" }}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        currentPageReportTemplate="{first} - {last} of {totalRecords}"
        paginatorTemplate={template2}
        className="reversal__table__main"
      >
        <Column
          field="transactionCode"
          header="Main A/c"
          className="fieldvalue_container"
        ></Column>
        <Column
          field="transactionNumber"
          header="Sub A/c"
          className="fieldvalue_container"
        ></Column>
        <Column
          field="reversalJVTransactionCode"
          header="Department"
          className="fieldvalue_container"
        ></Column>
        <Column
          field="Remarks"
          header="Remarks"
          className="fieldvalue_container"
        ></Column>
        <Column
          field="Entry"
          header="Entry"
          className="fieldvalue_container"
        ></Column>
      </DataTable>
    </div>
  );
};

export default TableData;
