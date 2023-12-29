import React, { useState, useRef } from "react";
import "./index.scss";
import SvgTable from "../../../../../assets/icons/SvgTable";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const DisbursementDetailviewTable = () => {
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
    <div className="add__disbursement__table">
        <div className="table__container">
          <DataTable
            value={data}
            tableStyle={{ minWidth: "50rem" }}
            emptyMessage={isEmpty ? emptyTableIcon : null}
          >
            <Column
              field="RequestNumber"
              header="Request Number"
              headerStyle={headerStyle}
            ></Column>
            <Column
              field="Requester"
              header="Requester"
              headerStyle={headerStyle}
            ></Column>
            <Column
              field="Remarks"
              header="Remarks"
              headerStyle={headerStyle}
            ></Column>
            <Column
              field="Amount"
              header="Amount"
              headerStyle={headerStyle}
            ></Column>
            <Column field="VAT" header="VAT" headerStyle={headerStyle}></Column>
            <Column field="EWT" header="EWT" headerStyle={headerStyle}></Column>
            <Column
              field="MainAccount"
              header="Main Account"
              headerStyle={headerStyle}
            ></Column>
            <Column
              field="SubAccount"
              header="Sub Account"
              headerStyle={headerStyle}
            ></Column>
            <Column
              field="TotalAmount"
              header="Total Amount"
              headerStyle={headerStyle}
            ></Column>
          </DataTable>
        </div>
    </div>
  );
};

export default DisbursementDetailviewTable;
