import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import React from "react";
import TableDropdownField from "../../../component/tableDropDwonField";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import SvgMotorTable from "../../../../assets/agentIcon/SvgMotorTable";
import SvgProfileC from "../../../../assets/agentIcon/SvgProfileC";
import SvgArrow from "../../../../assets/agentIcon/SvgArrow";
import SvgDownArrow from "../../../../assets/agentIcon/SvgDownArrow";
import { Dropdown } from "primereact/dropdown";

const ExpiringPolicyCard = () => {
  const TableData = [
    {
      AssuredName: "John Doe",
      PolicyNumber: "P12345",
      ExpiryDate: "2024 JAN 15",
      DaysCount: "30 Days",
      ClientID: "127332",
    },
    {
      AssuredName: "Jane Smith",
      PolicyNumber: "P67890",
      ExpiryDate: "2024 JAN 22",
      DaysCount: "15 Days",
      ClientID: "1272721",
    },
    {
      AssuredName: "Bob Johnson",
      PolicyNumber: "P54321",
      ExpiryDate: "2024 JAN 10",
      DaysCount: "45 Days",
      ClientID: "1270002",
    },
    {
      AssuredName: "Alice Williams",
      PolicyNumber: "P98765",
      ExpiryDate: "2024 JAN 05",
      DaysCount: "10 Days",
      ClientID: "120002",
    },
    {
      AssuredName: "Mike Davis",
      PolicyNumber: "P23456",
      ExpiryDate: "2024 JAN 18",
      DaysCount: "25 Days",
      ClientID: "111172",
    },
    {
      AssuredName: "Sara Miller",
      PolicyNumber: "P78901",
      ExpiryDate: "2024 JAN 01",
      DaysCount: "20 Days",
      ClientID: "12000",
    },
    {
      AssuredName: "Chris Brown",
      PolicyNumber: "P65432",
      ExpiryDate: "2024 JAN 12",
      DaysCount: "35 Days",
      ClientID: "1221112",
    },
    {
      AssuredName: "Emily Taylor",
      PolicyNumber: "P12398",
      ExpiryDate: "2024 JAN 28",
      DaysCount: "28 Days",
      ClientID: "12002",
    },
    {
      AssuredName: "David Wilson",
      PolicyNumber: "P56789",
      ExpiryDate: "2024-08-03",
      DaysCount: "40 Days",
      ClientID: "12233",
    },
    {
      AssuredName: "Grace Anderson",
      PolicyNumber: "P87654",
      ExpiryDate: "2024-07-20",
      DaysCount: "12 Days",
      ClientID: "127272",
    },
  ];

  const headerStyle = {
    textalign: "center",
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: 500,
    color: "#000",
    border: " none",
  };

  const renderAssuredName = (rowData) => {
    return (
      <div className="assured__container">
        <div>
          <SvgProfileC />
        </div>
        <div>
          <div className="assuredname__text">{rowData.AssuredName}</div>
          <div className="assuredname__sub___text">
            Client ID :{rowData.ClientID}{" "}
          </div>
        </div>
      </div>
    );
  };

  const renderPolicyNumber = (rowData) => {
    return (
      <div className="policy__number__container">
        <div>
          <SvgMotorTable />
        </div>
        <div>
          <div className="policy__number__text">{rowData.PolicyNumber}</div>
        </div>
      </div>
    );
  };

  const renderExpiryDate = (rowData) => {
    return (
      <div className="expiry__data__container">
        <div className="expiry__data__text">{rowData.ExpiryDate}</div>
      </div>
    );
  };

  const renderDaysCount = (rowData) => {
    return (
      <div className="days__count__container">
        <div className="days__count__text">{rowData.DaysCount}</div>
      </div>
    );
  };

  const renderAction = () => {
    return (
      <div className="action__container">
        <div
          className="action__Svg"
          onClick={() => {
            handlesubmit();
          }}
        >
          <SvgArrow />
        </div>
      </div>
    );
  };

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

  const handlesubmit = () => {};

  return (
    <div className="expiring__policy__card__container mt-4">
      <Card>
        <div class="grid">
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
        <div className="table__container">
          <DataTable
            value={TableData}
            tableStyle={{ minWidth: "50rem" }}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            currentPageReportTemplate="{first} - {last} of {totalRecords}"
            paginatorTemplate={template2}
          >
            <Column
              body={renderAssuredName}
              header="Assured Name"
              headerStyle={headerStyle}
            ></Column>
            <Column
              body={renderPolicyNumber}
              header="Policy Number"
              headerStyle={headerStyle}
            ></Column>
            <Column
              body={renderExpiryDate}
              header="Expiry Date"
              headerStyle={headerStyle}
            ></Column>
            <Column
              body={renderDaysCount}
              header="Days Count"
              headerStyle={headerStyle}
            ></Column>
            <Column
              body={renderAction}
              header="Actions"
              headerStyle={headerStyle}
            ></Column>
          </DataTable>
        </div>
      </Card>
    </div>
  );
};

export default ExpiringPolicyCard;
