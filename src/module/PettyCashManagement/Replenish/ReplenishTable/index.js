import React, { useRef, useState } from "react";
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
import {  useDispatch, useSelector } from "react-redux";
import { getViewReplenishMiddleware } from "../store/pettyCashReplenishMiddleware";

const PettyCashReplenishTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ReplenishList, loading } = useSelector(
    ({ pettyCashReplenishReducer }) => {
      return {
        loading: pettyCashReplenishReducer?.loading,
        ReplenishList: pettyCashReplenishReducer?.ReplenishList,
      };
    }
  );


  const isEmpty = ReplenishList.length === 0;

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
    dispatch(getViewReplenishMiddleware(rowData));
    console.log("View clicked:", rowData);
    navigate("/accounts/pettycash/replenishtdetailview");
  };
  const headerStyle = {
    // width: "10rem",
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: 6,
    paddingLeft:0,
    color: "#000",
    border: "none",
  };
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
      { name: 'Name', code: 'NY' },
      { name: 'Edit', code: 'RM' },
      { name: 'Voucher Number', code: 'LDN' },
  ];
  const headeraction ={
    justifyContent: 'center',
    // textalign: center,
    fontSize: 16,
    fontfamily: "Inter var",
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border:" none",
    display: "flex"
  }
  const menu = useRef(null);
  const menuitems = [
    {
      label: 'Name',
    },
    {
      label: 'Date',
    },
    {
      label: 'Voucher Number',
    },
  ];

  return (
    <div className="petty__cash__replenish__table">
      <Card className="mt-4">
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
            {/* <TieredMenu model={menuitems} popup ref={menu} breakpoint="767px" /> */}

            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Search by"  
                className="sorbyfilter_container"
                dropdownIcon={<SvgDropdownicon/>}
                />

            </div>
          <div className="sub__title">Replenish history</div>
        </div>
        <div className="card">
          <DataTable
            value={ReplenishList}
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
              field="Branchcode"
              header="Branch code"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              
            ></Column>
            <Column
              field="Transactioncode"
              header="Transactioncode"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              
            ></Column>
            <Column
              field="BankCode"
              header="Bank Code"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              
            ></Column>
            <Column
              field="SubAccount"
              header="Sub Account"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              
            ></Column>
            <Column
              field="TransactionNumber"
              header="Transaction Number"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              sortable
            ></Column>
            <Column
              field="Date"
              header="Date"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              sortable
            ></Column>
            <Column
              field="View"
              header="View"
              body={renderViewButton}
              headerStyle={headeraction}
              style={{textAlign:'center'}}
              className="fieldvalue_container_date"
            ></Column>
          </DataTable>
        </div>
      </Card>
    </div>
  );
};

export default PettyCashReplenishTable;