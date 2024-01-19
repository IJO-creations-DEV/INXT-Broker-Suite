import { InputText } from "primereact/inputtext";
import TableDropdownField from "../../../../component/tableDropDwonField";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import SvgArrow from "../../../../../assets/icons/SvgArrow";
import { Dropdown } from "primereact/dropdown";
import SvgDownArrow from "../../../../../assets/agentIcon/SvgDownArrow";
import { useNavigate } from "react-router-dom";
import "../../../clientView/index.scss";
const LeadListingAllTable = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectionMode, setSelectionMode] = useState("multiple");
  const navigate = useNavigate();

  const TableData = [
    {
      id: "1",
      PolicyNumber: "Policy0123",
      EndorsementID: "7000.00",
      Date: "01 JAN 2024",
      Status: "Processing",
      payment: "N/A",
      Actions: <SvgArrow />,
    },
    {
      id: "2",
      PolicyNumber: "Policy0123",
      EndorsementID: "7000.00",
      Date: "01 JAN 2024",
      Status: "Completed",
      payment: "Completed",
      Actions: <SvgArrow />,
    },
    {
      id: "3",
      PolicyNumber: "Policy0123",
      EndorsementID: "7000.00",
      Date: "01 JAN 2024",
      Status: "Processing",
      payment: "Pending",
      Actions: <SvgArrow />,
    },
    {
      id: "4",
      PolicyNumber: "Policy0123",
      EndorsementID: "7000.00",
      Date: "01 JAN 2024",
      Status: "Rejected",
      payment: "N/A",
      Actions: <SvgArrow />,
    },
    {
      id: "5",
      PolicyNumber: "Policy0123",
      EndorsementID: "7000.00",
      Date: "01 JAN 2024",
      Status: "Completed",
      payment: "Reviewing",
      Actions: <SvgArrow />,
    },
    {
      id: "6",
      PolicyNumber: "Policy0123",
      EndorsementID: "7000.00",
      Date: "01 JAN 2024",
      Status: "Rejected",
      payment: "Pending",
      Actions: <SvgArrow />,
    },
    {
      id: "7",
      PolicyNumber: "Policy0123",
      EndorsementID: "7000.00",
      Date: "01 JAN 2024",
      Status: "Processing",
      payment: "N/A",
      Actions: <SvgArrow />,
    },
    {
      id: "8",
      PolicyNumber: "Policy0123",
      EndorsementID: "7000.00",
      Date: "01 JAN 2024",
      Status: "Rejected",
      payment: "Pending",
      Actions: <SvgArrow />,
    },
    {
      id: "9",
      PolicyNumber: "Policy0123",
      EndorsementID: "7000.00",
      Date: "01 JAN 2024",
      Status: "Processing",
      payment: "N/A",
      Actions: <SvgArrow />,
    },
    {
      id: "10",
      PolicyNumber: "Policy0123",
      EndorsementID: "7000.00",
      Date: "01 JAN 2024",
      Status: "Completed",
      payment: "Reviewing",
      Actions: <SvgArrow />,
    },
    {
      id: "11",
      PolicyNumber: "Policy0123",
      EndorsementID: "7000.00",
      Date: "01 JAN 2024",
      Status: "Processing",
      payment: "Pending",
      Actions: <SvgArrow />,
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

  const renderViewEditButton = (rowData) => {
    return (
      <div className="btn__container__view__edit">
        <div>
          <Button
            icon={<SvgArrow />}
            className="view__btn"
            // onClick={() => handleView(rowData)}
          />
        </div>
      </div>
    );
  };

  const renderPolicyNumber = (rowData) => {
    return (
      <div className="name__box__container">
        <div>{rowData.Svg}</div>
        <div>
          <div className="name__text">{rowData.PolicyNumber}</div>
          {/* <div className="lead__id__text">Lead Id :{rowData.LeadID} </div> */}
        </div>
      </div>
    );
  };

  const renderEndorsementID = (rowData) => {
    return <div className="category__text">{rowData.EndorsementID}</div>;
  };

  const renderDate = (rowData) => {
    return <div className="date__text">{rowData.Date}</div>;
  };

  const renderStatus = (rowData) => {
    return (
      <div
        className={
          rowData.Status === "Processing"
            ? "company__status__type__green"
            : rowData.Status === "Completed"
            ? "company__status__type__blue"
            : "client__view__type__red"
        }
      >
        {rowData.Status}
      </div>
    );
  };
  const renderPayment = (rowData) => {
    return (
      <div
        className={
          rowData.payment === "Pending"
            ? "company__status__type__green"
            : rowData.payment === "Completed"
            ? "company__status__type__blue"
            : rowData.payment === "Reviewing"
            ? "company__status__type__red"
            : "endorsement__payment__type"
           
        }
      >
        {rowData.payment}
        
      </div>
    );
  };

  // const handleView = () => {
  //     navigate("/agent/leadedit")
  // }

  const ViewheaderStyle = {
    textalign: "center",
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: 500,
    color: "#000",
    border: " none",
    // display: "grid",
    // alignItem: "center",
  };

  const headerStyle = {
    textalign: "center",
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: 500,
    color: "#000",
    border: " none",
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

  return (
    <div>
      <div class="grid">
        <div class="col-12 md:col-9 lg:col-9">
          <span className="p-input-icon-left" style={{ width: "100%" }}>
            <i className="pi pi-search" />
            {/* <SvgSearch/> */}
            <InputText placeholder="Search" style={{ width: "100%" }} />
          </span>
        </div>
        <div class="col-12 md:col-3 lg:col-3">
          <TableDropdownField label="Search By" />
        </div>
      </div>
      <div className="lead__table__container">
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
            body={renderPolicyNumber}
            header={rendercheckedHeader("PolicyNumber")}
            headerStyle={headerStyle}
          ></Column>
          <Column
            body={renderEndorsementID}
            header={renderUncheckedHeader("EndorsementID")}
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
            body={renderPayment}
            header={renderUncheckedHeader("Payment")}
            headerStyle={headerStyle}
          ></Column>
          <Column
            body={renderViewEditButton}
            header={renderUncheckedHeader("Actions")}
            headerStyle={{ ...ViewheaderStyle, textAlign: "center" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default LeadListingAllTable;
