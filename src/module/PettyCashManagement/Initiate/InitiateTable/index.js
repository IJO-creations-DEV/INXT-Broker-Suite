import React, { useState } from "react";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import SvgFilters from "../../../../assets/icons/SvgFilter";
import SvgTable from "../../../../assets/icons/SvgTable";
import SvgEyeIcon from "../../../../assets/icons/SvgEyeIcon";
import "./index.scss";

const InitiateTable = () => {
  const [products, setProducts] = useState([{name:"1"},{name:"1"},{name:"1"},{name:"1"},{name:"1"}]);
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
        </div>
      );
    },
  };

  const renderViewButton = (rowData) => {
    return (
        <div className="center-content">
      <Button
        icon={<SvgEyeIcon />}
        className="eye__btn"
        onClick={() => handleView(rowData)}
      />
      </div>
    );
  };

  const handleView = (rowData) => {
    console.log("View clicked:", rowData);
    navigate("/accounts/pettycash/PettyCashCodeDetails")
  };
  const headerStyle = {
    // width: "12rem",
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
  };
  const ViewheaderStyle = {
    // width: "5rem",
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
  };
  return (
    <div className="initiate__table">
      <Card className="mt-1">
        <div className="header_search_container grid">
          <div class="col-12 md:col-6 lg:col-10">
            <span className="p-input-icon-left" style={{ width: "100%" }}>
              <i className="pi pi-search" />
              <InputText
                placeholder="Search customers"
                className="searchinput_left"
              />
            </span>
          </div>
          <div class="col-12 md:col-6 lg:col-2">
            <Button
              label="Sort By"
              outlined
              icon={<SvgFilters />}
              className="sorbyfilter_container"
            />
          </div>
          <div className="sub__title">Petty Cash Code history</div>
        </div>
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
              field="Pettycashcode"
              header="Petty cash code"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              
            ></Column>
            <Column
              field="Pettycashsize"
              header="Petty cash size"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              sortable
            ></Column>
            <Column
              field="Transaction Number"
              header="Transaction Number"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              sortable
            ></Column>
            <Column
              field="TransactionLimit"
              header="Transaction Limit"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              
            ></Column>
            <Column
              field="Branchcode"
              header="Branch code"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              
            ></Column>
            <Column
              field="Departmentcode"
              header="Department code"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              
            ></Column>
            <Column
              field="category"
              header="Date"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              sortable
            ></Column>
            <Column
              body={renderViewButton}
              header="View"
              headerStyle={{ ...headerStyle, }}
              className="fieldvalue_container centered"
            ></Column>
          </DataTable>
        </div>
      </Card>
    </div>
  );
};

export default InitiateTable;
