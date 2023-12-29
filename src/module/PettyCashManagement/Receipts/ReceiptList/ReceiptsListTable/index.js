import React, { useState, useRef } from "react";
import "./index.scss";
import SvgTable from "../../../../../assets/icons/SvgTable";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const ReceiptListTable = () => {
  const [data, setData] = useState([]);
  const isEmpty = data.length === 0;
 

  const emptyTableIcon = (
    <div className="empty-table-icon">
      <SvgTable />
    </div>
  );

  const headerStyle = {
    // width: "10rem",
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
    textAlign: "center",
  };
  return (
    <div className="add__receipts__table">
        <div className="table__container">
          <DataTable
            value={data}
            tableStyle={{ minWidth: "50rem" }}
            emptyMessage={isEmpty ? emptyTableIcon : null}
          >
            <Column
              field="TransactionCode"
              header="Transaction Code"
              headerStyle={headerStyle}
              sortable
            ></Column>
            <Column
              field="RequestNumber"
              header="Request Number"
              headerStyle={headerStyle}
              sortable
            ></Column>
            <Column
              field="Date"
              header="Date"
              headerStyle={headerStyle}
              sortable
            ></Column>
            <Column
              field="Amount"
              header="Amount"
              headerStyle={headerStyle}
              sortable
            ></Column>
            <Column
              field="Remarks"
              header="Remarks"
              headerStyle={headerStyle}
              sortable
            ></Column>
          </DataTable>
        </div>
    </div>
  );
};

export default ReceiptListTable;
