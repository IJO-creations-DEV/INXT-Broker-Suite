import { InputText } from "primereact/inputtext";
import TableDropdownField from "../../../../component/tableDropDwonField";
import React, { useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputSwitch } from "primereact/inputswitch";
import { Checkbox } from "primereact/checkbox";
import SvgEdit from "../../../../../assets/icons/SvgEdits";
import { Button } from "primereact/button";
import SvgArrow from "../../../../../assets/icons/SvgArrow";
import SvgMotorTable from "../../../../../assets/agentIcon/SvgMotorTable";
import SvgTravlesTable from "../../../../../assets/agentIcon/SvgTravlesTable";
import SvgHomeTable from "../../../../../assets/agentIcon/SvgHomeTable";
import { Dropdown } from "primereact/dropdown";
import SvgDownArrow from "../../../../../assets/agentIcon/SvgDownArrow";
import { useNavigate } from "react-router-dom";
import "../../../clientListing/index.scss";
import SvgDot from "../../../../../assets/agentIcon/SvgDot";
import { TieredMenu } from "primereact/tieredmenu";
const LeadListingAllTable = () => {
  const menu = useRef(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectionMode, setSelectionMode] = useState("multiple");
  const navigate = useNavigate();
  const items = [
    {
      label: "View",
      command: () => handleItemClick("View"),
    },
    {
      label: "Claim",
      command: () => handleItemClick("Claim"),
    },
    {
      label: "Renewal",
      command: () => handleItemClick("Renewal"),
    },
    {
      label: "Endorsement",
      command: () => handleItemClick("Endorsement"),
    },
  ];
  const handleItemClick = (label) => {
    if (label === "View") {
      navigate("/agent/policydetailedview");
    } else if (label === "Claim") {
      navigate("/agent/claimrequest/claimdetails");
    } else if (label === "Renewal") {
    } else if (label === "Endorsement") {
      navigate("/agent/endorsement/personaldetails");
    }
  };

  const TableData = [
    {
      id: "1",
      PolicyNumber: "Policy0123",
      GrossPremium: "7000.00",
      ExpiryDate: "01 JAN 2024",
      Payment: "Pending",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      id: "2",
      PolicyNumber: "Policy0233",
      GrossPremium: "5000.00",
      ExpiryDate: "01 JAN 2024",
      Payment: "Completed",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      id: "3",
      PolicyNumber: "Policy0893",
      GrossPremium: "7000.00",
      ExpiryDate: "01 JAN 2024",
      Payment: "Reviewing",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      id: "4",
      PolicyNumber: "Policy0738",
      GrossPremium: "2000.00",
      ExpiryDate: "01 JAN 2024",
      Payment: "Pending",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      id: "5",
      PolicyNumber: "Policy0123",
      GrossPremium: "7000.00",
      ExpiryDate: "01 JAN 2024",
      Payment: "Completed",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      id: "6",
      PolicyNumber: "Policy382",
      GrossPremium: "1000.00",
      ExpiryDate: "01 JAN 2024",
      Payment: "Completed",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      id: "7",
      PolicyNumber: "Policy0123",
      GrossPremium: "8000.00",
      ExpiryDate: "01 JAN 2024",
      Payment: "Completed",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      PolicyNumber: "Policy3982",
      GrossPremium: "2000.00",
      ExpiryDate: "01 JAN 2024",
      Payment: "Pending",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      id: "9",
      PolicyNumber: "Policy0123",
      GrossPremium: "7000.00",
      ExpiryDate: "01 JAN 2024",
      Payment: "Pending",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      id: "10",
      PolicyNumber: "Policy0123",
      GrossPremium: "7000.00",
      ExpiryDate: "01 JAN 2024",
      Payment: "Pending",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      id: "11",
      PolicyNumber: "Policy0123",
      GrossPremium: "7000.00",
      ExpiryDate: "01 JAN 2024",
      Payment: "Pending",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
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
          <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
          <Button
            icon={<SvgDot />}
            className="view__btn"
            onClick={(e) => menu.current.toggle(e)}
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

  const renderGrossPremium = (rowData) => {
    return <div className="category__text">{rowData.GrossPremium}</div>;
  };

  const renderExpiryDate = (rowData) => {
    return <div className="date__text">{rowData.ExpiryDate}</div>;
  };

  const renderPayment = (rowData) => {
    return (
      <div
        className="quote__text"
        style={{
          backgroundColor: "#FEF2E1",
          color: "#C1622A",
          borderRadius: "25px",
          height: "25px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          width: "100px",
        }}
      >
        {rowData.Payment}
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
            body={renderGrossPremium}
            header={renderUncheckedHeader("GrossPremium")}
            headerStyle={headerStyle}
          ></Column>
          <Column
            body={renderExpiryDate}
            header={renderUncheckedHeader("ExpiryDate")}
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
