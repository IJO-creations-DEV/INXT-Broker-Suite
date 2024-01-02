import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router";
import "./index.scss";
import SvgTable from "../../../../../../assets/icons/SvgTable";

const TransactionCodeSetupTable = () => {
  const [products, setProducts] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  const navigate = useNavigate();
  const isEmpty = products.length === 0;

  const emptyTableIcon = (
    <div className="empty-table-icon">
      <SvgTable />
    </div>
  );
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
              style={{ color: "var(--text-color)", userSelect: "none",    width: '127%',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center', }}
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
        </div>
      );
    },
  };


  const handleView = (rowData) => {
    console.log("View clicked:", rowData);
    // navigate("/accounts/pettycash/PettyCashCodeDetails")
  };
  const headerStyle = {
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
  };
  return (
    <div className="transactioncode__master__table_view">
      {/* <Card className="mt-1"> */}
        <div className="card">
          <DataTable
            value={products}
            tableStyle={{
              minWidth: "50rem",
              color: "#1C2536",
            }}
            scrollable={true}
            scrollHeight="40vh"
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            // paginatorTemplate="RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} - {last} of {totalRecords}"
            paginatorTemplate={template2}
            emptyMessage={isEmpty ? emptyTableIcon : null}
          >
            <Column
              field="AccountingPeriodstart"
              header="Accounting Period start"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="AccountingPeriodEnd"
              header="Accounting Period End"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            //   sortable
            ></Column>
            <Column
              field="TransactionNofrom"
              header="Transaction No from"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            //   sortable
            ></Column>
            <Column
              field="TransactionNoTo"
              header="Transaction No To"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="LastUsed"
              header="Last Used"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
          </DataTable>
        </div>
      {/* </Card> */}
    </div>
  );
};

export default TransactionCodeSetupTable;
