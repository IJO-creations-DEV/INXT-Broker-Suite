import React, { useEffect, useRef, useState } from "react";
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
import { TieredMenu } from "primereact/tieredmenu";
import SvgDropdownicon from "../../../../assets/icons/SvgDropdownicon";
import { useDispatch, useSelector } from "react-redux";
import { getRequestSearchMiddleware } from "../store/pettyCashRequestMiddleware";

const RequestTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("")
  const [globalFilter, setGlobalFilter] = useState("ReceiptNo")

  const { RequestList, loading ,RequestSearch} = useSelector(({ pettyCashRequestReducer }) => {
    return {
      loading: pettyCashRequestReducer?.loading,
      RequestList: pettyCashRequestReducer?.RequestList,
      RequestSearch: pettyCashRequestReducer?.RequestSearch
    };
  });
  const searchs = [
    { name: 'Receipt No', code: 'ReceiptNo' },
    { name: 'Request Number', code: 'RequestNumber' },
    { name: 'Requester Name', code: 'RequesterName' },
    { name: 'Branch Code', code: 'Branchcode' },
    { name: 'Department code', code: 'Departmentcode' },
    { name: 'Total Amount', code: 'TotalAmount' },
    { name: 'Date', code: 'Date' },
  ]

  const isEmpty = RequestList.length === 0;

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
        <div className="paginatoroverall__container">
        <React.Fragment>
          <span
            className="mx-1"
            style={{ color: "var(--text-color)", userSelect: "none" }}
          >
            Row count :{" "}
          </span>
          <Dropdown
            value={options.value}
            className="pagedropdowninner_container"
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

  const menu = useRef(null);
 


  const handleView = (rowData) => {
    console.log("View clicked:", rowData);
    navigate("/accounts/pettycash/PettyCashCodeDetails");
  };
  const headerStyle = {
    // width: "10rem",
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    padding: 6,
    paddingLeft:"0.5rem",
    color: "#000",
    border: "none",
  };

  useEffect(() => {

    console.log(globalFilter, "as")
    if (globalFilter?.length > 0) {
      if (search?.length > 0) {
        dispatch(getRequestSearchMiddleware({
          field: globalFilter,
          value: search
        }))

      }
    }
  }, [search])

  return (
    <div className="Request__table">
      <Card className="mt-1">
        <div className="header_search_container grid">
          <div class="col-12 md:col-6 lg:col-10">
            <span className="p-input-icon-left" style={{ width: "100%" }}>
              <i className="pi pi-search" />
              <InputText
                placeholder="Search customers"
                className="searchinput_left"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </span>
          </div>
          <div class="col-12 md:col-6 lg:col-2">
          <Dropdown    value={search} onChange={(e) => setGlobalFilter(e.value)} options={searchs} optionLabel="name" optionValue="code"
                placeholder="Search by"  
                className="sorbyfilter_container"
                dropdownIcon={<SvgDropdownicon/>}
                />

            </div>
          <div className="sub__title">Petty Request history</div>
        </div>
        <div className="card">
          <DataTable
            value={search ? RequestSearch :RequestList}
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
              field="PettycashCode"
              header="Petty cash Code"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              
            ></Column>
            <Column
              field="RequestNumber"
              header="Request Number"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              sortable
            ></Column>
            <Column
              field="RequesterName"
              header="Requester Name"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              sortable
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
              field="TotalAmount"
              header="Total Amount"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              sortable
            ></Column>
            <Column
              field="Date"
              header="Date"
              headerStyle={headerStyle}
              className="fieldvalue_container_date"
              sortable
            ></Column>
          </DataTable>
        </div>
      </Card>
    </div>
  );
};

export default RequestTable;
