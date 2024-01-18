import { Card } from "primereact/card";
import React, { useState } from "react";
import SvgLeftArrow from "../../../../assets/agentIcon/SvgLeftArrow";
import SvgAdd from "../../../../assets/agentIcon/SvgAdd";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import TableDropdownField from "../../../component/tableDropDwonField";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import SvgDownArrow from "../../../../assets/agentIcon/SvgDownArrow";
import SvgEdit from "../../../../assets/icons/SvgEdits";
import SvgArrow from "../../../../assets/agentIcon/SvgArrow";

const QuoteListingCard = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectionMode, setSelectionMode] = useState("multiple");

  const TableData = [
    {
      id: "1",
      Company: "Alpha Insurance",
      QuoteID: "19292",
      PolicyType: "CV",
      Grosspremium: "0.000",
      Date: "01 JAN 2024",
      Status: "Processing",
    },
    {
      id: "2",
      Company: "Beta Insurance",
      QuoteID: "83746",
      PolicyType: "CV",
      Grosspremium: "1200.50",
      Date: "15 FEB 2024",
      Status: "Draft",
    },
    {
      id: "3",
      Company: "Gamma Insurance",
      QuoteID: "54928",
      PolicyType: "CV",
      Grosspremium: "750.00",
      Date: "05 MAR 2024",
      Status: "Draft",
    },
    {
      id: "4",
      Company: "Delta Insurance",
      QuoteID: "67381",
      PolicyType: "CV",
      Grosspremium: "1500.75",
      Date: "22 APR 2024",
      Status: "Processing",
    },
    {
      id: "5",
      Company: "Epsilon Insurance",
      QuoteID: "91827",
      PolicyType: "CV",
      Grosspremium: "3000.20",
      Date: "10 MAY 2024",
      Status: "Processing",
    },
    {
      id: "6",
      Company: "Zeta Insurance",
      QuoteID: "36472",
      PolicyType: "CV",
      Grosspremium: "0.000",
      Date: "18 JUN 2024",
      Status: "Draft",
    },
    {
      id: "7",
      Company: "Eta Insurance",
      QuoteID: "50293",
      PolicyType: "CV",
      Grosspremium: "850.30",
      Date: "07 JUL 2024",
      Status: "Processing",
    },
    {
      id: "8",
      Company: "Theta Insurance",
      QuoteID: "74625",
      PolicyType: "CV",
      Grosspremium: "1200.00",
      Date: "25 AUG 2024",
      Status: "Processing",
    },
    {
      id: "9",
      Company: "Iota Insurance",
      QuoteID: "15934",
      PolicyType: "CV",
      Grosspremium: "2000.50",
      Date: "14 SEP 2024",
      Status: "Processing",
    },
    {
      id: "10",
      Company: "Kappa Insurance",
      QuoteID: "80347",
      PolicyType: "CV",
      Grosspremium: "4000.10",
      Date: "03 OCT 2024",
      Status: "Draft",
    },
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
        <div className="table__selector">
          <React.Fragment>
            <span
              className="table__selector__text"
              style={{ color: "var(--text-color)", userSelect: "none" }}
            >
              Rows per page:{" "}
            </span>
            <Dropdown
              value={options.value}
              className="pagedropdown_container"
              options={dropdownOptions}
              onChange={options.onChange}
              dropdownIcon={<SvgDownArrow />}
            />
          </React.Fragment>
        </div>
      );
    },
  };

  const rendercheckedHeader = (value) => {
    return selectedProducts.length === 0 ? (
      value
    ) : selectedProducts.length === 1 ? (
      <div className="header__btn__container">
        <div className="header__delete__btn">Delete</div>
        <div className="header__edit__btn">Edit</div>
      </div>
    ) : (
      <div className="header__delete__btn">Delete</div>
    );
  };

  const renderUncheckedHeader = (value) => {
    return selectedProducts.length == 0 && value;
  };

  const handleclick = () => {};

  const ViewheaderStyle = {
    justifyContent: "center",
    // textalign: center,
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: 500,
    color: "#000",
    border: " none",
    display: "flex",
    alignItem: "center",
    height: "56px",
  };

  const headerStyle = {
    textalign: "center",
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: 500,
    color: "#000",
    border: " none",
  };

  const checkboxheaderStyle = {
    textalign: "center",
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: 500,
    color: "#000",
    border: " none",
    width: "3rem",
  };

  const renderCompany = (rowData) => {
    return (
      <div>
        <div className="company__title__text">{rowData.Company}</div>
        <div className="company__id">Quote ID : {rowData.QuoteID}</div>
      </div>
    );
  };

  const renderPolicyType = (rowData) => {
    return (
      <div>
        <div className="company__policy__type">{rowData.PolicyType}</div>
      </div>
    );
  };

  const renderGrosspremium = (rowData) => {
    return (
      <div>
        <div className="company__policy__type">{rowData.Grosspremium}</div>
      </div>
    );
  };

  const renderDate = (rowData) => {
    return (
      <div>
        <div className="company__policy__type">{rowData.Date}</div>
      </div>
    );
  };

  const renderStatus = (rowData) => {
    return (
      <div>
        <div
          className={
            rowData.Status === "Processing"
              ? "company__status__type__green"
              : "company__status__type__red"
          }
        >
          {rowData.Status}
        </div>
      </div>
    );
  };

  const renderViewEditButton = (rowData) => {
    return (
      <div className="btn__container__view__edit">
        <div>
          <Button
            icon={<SvgEdit />}
            className="view__btn"
            onClick={() => handleEdit(rowData)}
          />
        </div>
        <div>
          <Button
            icon={<SvgArrow />}
            className="edit__btn"
            onClick={() => handleView(rowData)}
          />
        </div>
      </div>
    );
  };

  const handleEdit = () => {};
  const handleView = () => {};

  return (
    <div className="quote__listing__card__container mt-4">
      <Card>
        <div class="grid mt-2">
          <div class="back__btn__container col-12 md:col-6 lg:col-6">
            <div className="quote__listing__card__container__back__btn">
              <SvgLeftArrow />
              <div className="quote__listing__card__container__back__btn__title">
                Open Items
              </div>
            </div>
          </div>
          <div class="col-12 md:col-6 lg:col-6">
            <div class="btn__container__quote__listing col-12 md:col-6 lg:col-6">
              <Button
                icon={<SvgAdd />}
                label="Add Quote"
                onClick={() => handleclick()}
              />
            </div>
          </div>
        </div>
        <div class="grid mt-2">
          <div class="col-12 md:col-9 lg:col-9">
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText placeholder="Search" />
            </span>
          </div>
          <div class="col-12 md:col-3 lg:col-3">
            <TableDropdownField label="Search By" />
          </div>
        </div>
        <div className="quote__listing__card__table">
          <DataTable
            value={TableData}
            paginator
            rows={5}
            selectionMode={selectionMode}
            selection={selectedProducts}
            rowsPerPageOptions={[5, 10, 25, 50]}
            currentPageReportTemplate="{first} - {last} of {totalRecords}"
            paginatorTemplate={template2}
            className="corrections__table__main"
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="id"
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column
              selectionMode={selectionMode}
              body={(rowData) => (
                <Checkbox
                  checked={selectedProducts.includes(rowData)}
                  onChange={() => {}}
                />
              )}
              headerStyle={checkboxheaderStyle}
            ></Column>
            <Column
              body={renderCompany}
              header={rendercheckedHeader("Company")}
              headerStyle={headerStyle}
            ></Column>
            <Column
              body={renderPolicyType}
              header={renderUncheckedHeader("Policy Type")}
              headerStyle={headerStyle}
            ></Column>
            <Column
              body={renderGrosspremium}
              header={renderUncheckedHeader("Gross premium")}
              headerStyle={headerStyle}
            ></Column>
            <Column
              body={renderDate}
              header={renderUncheckedHeader("Date")}
              headerStyle={headerStyle}
            ></Column>
            <Column
              body={renderStatus}
              header={renderUncheckedHeader("Status")}
              headerStyle={headerStyle}
            ></Column>
            <Column
              body={renderViewEditButton}
              header={renderUncheckedHeader("Actions")}
              headerStyle={ViewheaderStyle}
            ></Column>
          </DataTable>
        </div>
      </Card>
    </div>
  );
};

export default QuoteListingCard;
