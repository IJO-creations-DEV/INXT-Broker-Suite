import { InputText } from "primereact/inputtext";
import React, { useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import SvgMotorTable from "../../../../../assets/agentIcon/SvgMotorTable";
import { Dropdown } from "primereact/dropdown";
import SvgDownArrow from "../../../../../assets/agentIcon/SvgDownArrow";
import { useNavigate } from "react-router-dom";
import "../../../clientView/index.scss";
import SvgDot from "../../../../../assets/agentIcon/SvgDot";
import { Dialog } from "primereact/dialog";
import { Menu } from "primereact/menu";
import { element } from "prop-types";

const Index = () => {
  const menu = useRef(null);
  const [displayDialog, setDisplayDialog] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectionMode, setSelectionMode] = useState("multiple");
  const [disableOption, setdisableOption] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [statusAction, setstatusAction] = useState("");

  const categories = [
    { name: "Personal Details Change", key: "personaldetail" },
    { name: "Motor Details Change", key: "motordetail" },
    { name: "Coverage Change", key: "coveragechange" },
    { name: "Policy Extend", key: "ploicyextend" },
  ];

  const hideDialogClose = () => {
    setDisplayDialog(false);
  };
  const handleDialogButtonClick = () => {
    hideDialogClose();
    handleTypes();
    navigate("/agent/endorsement/personaldetails", {
      state: {
        types: handleTypes(),
      },
    });
  };
  const handleTypes = () => {
    let result = [];
    console.log(selectedCategories, "out 1");
    if (selectedCategories.some((obj) => obj.key === "personaldetail")) {
      result.push("1");
    }
    if (selectedCategories.some((obj) => obj.key === "motordetail")) {
      result.push("2");
    }
    if (selectedCategories.some((obj) => obj.key === "coveragechange")) {
      result.push("3");
    }
    if (selectedCategories.some((obj) => obj.key === "ploicyextend")) {
      result.push("4");
    }
    console.log(result, "out");
    return result;
  };
  const navigate = useNavigate();

  const handleMenuToggle = (event, menuRef, rowData) => {
    menuRef.current.toggle(event);
    setdisableOption(
      rowData.Payment === "Pending" || rowData.Payment === "Reviewing"
    );
    setPaymentStatus(rowData.Payment);
    setstatusAction(rowData.Status);
  };

  const handleMenuClick = (menuItem) => {
    if (menuItem == "view") {
      if (paymentStatus === "Pending") {
        if (statusAction === "Processing") {
          navigate(`/agent/renewal/waiting/${123}`);
        } else if (statusAction === "Completed") {
          navigate(`/agent/policydetailedview`);
        }
      } else if (paymentStatus === "Completed") {
        navigate("/agent/policydetailedview");
      } else if (paymentStatus === "Reviewing") {
        navigate("/agent/policy/paymentapproval");
      }
    }
    if (menuItem == "claim") {
      navigate("/agent/claimrequest/claimdetails");
    }
    if (menuItem == "endrosement") {
      setDisplayDialog(true);
    }
    if (menuItem == "renewal") {
      navigate("/agent/createquote/coveragedetails");
    }
    // Handle the menu item click here
    console.log(`${menuItem} clicked`);
  };

  const TableData = [
    {
      id: "1",
      PolicyNumber: "Policy0123",
      IssueDate: "01 JAN 2024",
      GrossPremium: "7000.00",
      ExpiryDate: "01 JAN 2024",
      Status: "Processing",
      Payment: "Pending",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      id: "2",
      PolicyNumber: "Policy0233",
      IssueDate: "01 JAN 2024",
      GrossPremium: "5000.00",
      ExpiryDate: "01 JAN 2024",
      Status: "Completed",
      Payment: "Completed",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      id: "3",
      PolicyNumber: "Policy0893",
      IssueDate: "01 JAN 2024",
      GrossPremium: "7000.00",
      ExpiryDate: "01 JAN 2024",
      Status: "Completed",
      Payment: "Reviewing",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      id: "4",
      PolicyNumber: "Policy0738",
      IssueDate: "01 JAN 2024",
      GrossPremium: "2000.00",
      ExpiryDate: "01 JAN 2024",
      Status: "Completed",
      Payment: "Pending",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      id: "5",
      PolicyNumber: "Policy0123",
      IssueDate: "01 JAN 2024",
      GrossPremium: "7000.00",
      ExpiryDate: "01 JAN 2024",
      Status: "Completed",
      Payment: "Completed",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      id: "6",
      PolicyNumber: "Policy382",
      IssueDate: "01 JAN 2024",
      GrossPremium: "1000.00",
      ExpiryDate: "01 JAN 2024",
      Status: "Completed",
      Payment: "Completed",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      id: "7",
      PolicyNumber: "Policy0123",
      IssueDate: "01 JAN 2024",
      GrossPremium: "8000.00",
      ExpiryDate: "01 JAN 2024",
      Status: "Completed",
      Payment: "Completed",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      PolicyNumber: "Policy3982",
      IssueDate: "01 JAN 2024",
      GrossPremium: "2000.00",
      ExpiryDate: "01 JAN 2024",
      Status: "Completed",
      Payment: "Pending",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      id: "9",
      PolicyNumber: "Policy0123",
      IssueDate: "01 JAN 2024",
      GrossPremium: "7000.00",
      ExpiryDate: "01 JAN 2024",
      Status: "Completed",
      Payment: "Pending",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      id: "10",
      PolicyNumber: "Policy0123",
      IssueDate: "01 JAN 2024",
      GrossPremium: "7000.00",
      ExpiryDate: "01 JAN 2024",
      Status: "Completed",
      Payment: "Pending",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
    {
      id: "11",
      PolicyNumber: "Policy0123",
      IssueDate: "01 JAN 2024",
      GrossPremium: "7000.00",
      ExpiryDate: "01 JAN 2024",
      Status: "Completed",
      Payment: "Pending",
      Actions: <SvgDot />,
      Svg: <SvgMotorTable />,
    },
  ];
  const onCategoryChange = (e) => {
    let _selectedCategories = [...selectedCategories];

    if (e.checked) _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(
        (category) => category.key !== e.value.key
      );

    setSelectedCategories(_selectedCategories);
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

  const renderViewEditButton = (rowData) => {
    const menuItems = [
      {
        label: "View",
        command: () => handleMenuClick("view"),
      },

      {
        label: "Claim",
        command: () => handleMenuClick("claim"),
        disabled: disableOption,
      },
      {
        label: "Renewal",
        command: () => handleMenuClick("renewal"),
        disabled: disableOption,
      },

      {
        label: "Endorsement",
        command: () => handleMenuClick("endrosement"),
        disabled: disableOption,
      },
      {
        label: "Reminder",
        command: () => handleMenuClick("reminder"),
        disabled: true,
      },
    ];
    return (
      <div className="btn__container__view__edit">
        <Menu model={menuItems} popup ref={menu} breakpoint="767px" />
        <Button
          icon={<SvgDot />}
          className="view__btn"
          onClick={(event) => handleMenuToggle(event, menu, rowData)}
        />
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
        className={
          rowData.Payment === "Pending"
            ? "company__status__type__green"
            : rowData.Payment === "Completed"
            ? "company__status__type__blue"
            : "company__status__type__red"
        }
      >
        {rowData.Payment}
      </div>
    );
  };
  const renderStatus = (rowData) => {
    return (
      <div
        className={
          rowData.Status === "Processing"
            ? "company__status__type__green"
            : rowData.Status === "Completed"
            ? "company__status__type__blue"
            : "company__status__type__red"
        }
      >
        {rowData.Status}
      </div>
    );
  };
  const ViewheaderStyle = {
    textalign: "center",
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: 500,
    color: "#000",
    border: " none",
  };

  const headerStyle = {
    textalign: "center",
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: 500,
    color: "#000",
    border: " none",
  };

  return (
    <div>
      <div class="grid">
        <div class="col-12 md:col-9 lg:col-9">
          <span className="p-input-icon-left" style={{ width: "100%" }}>
            <i className="pi pi-search" />
            <InputText
              placeholder="Search"
              style={{
                width: "100%",
                padding: "1rem 2.75rem",
                borderRadius: "10px",
              }}
            />
          </span>
        </div>
        <div class="col-12 md:col-3 lg:col-3">
          <Dropdown
            optionLabel="name"
            className="feat_searchby_container"
            placeholder="Search by"
            dropdownIcon={<SvgDownArrow />}
          />
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
          dataKey="id"
          tableStyle={{ minWidth: "50rem" }}
          scrollable={true}
          scrollHeight="60vh"
        >
          <Column
            body={renderPolicyNumber}
            header="Policy Number"
            headerStyle={headerStyle}
          ></Column>
          <Column
            body={renderGrossPremium}
            header="GrossPremium"
            headerStyle={headerStyle}
          ></Column>
          <Column
            field="IssueDate"
            header="Issue Date"
            headerStyle={headerStyle}
          ></Column>

          <Column
            body={renderExpiryDate}
            header="Expiry"
            headerStyle={headerStyle}
          ></Column>
          <Column
            body={renderStatus}
            header="Status"
            headerStyle={headerStyle}
          ></Column>

          <Column
            body={renderPayment}
            header="Payment"
            headerStyle={headerStyle}
          ></Column>
          <Column
            body={renderViewEditButton}
            header="Actions"
            headerStyle={{ ...ViewheaderStyle, textAlign: "center" }}
          ></Column>
        </DataTable>
      </div>
      <Dialog
        visible={displayDialog}
        style={{ height: "340px", width: "500px" }}
        modal
        onHide={hideDialogClose}
        className="agent__flow__common__dialog__container"
      >
        <div className="p-fluid">
          {categories.map((category) => {
            return (
              <div
                key={category.key}
                className="p-field-checkbox m-3 pop__data__selection__container "
              >
                <Checkbox
                  id="checkbox"
                  inputId={category.key}
                  name="category"
                  value={category}
                  onChange={onCategoryChange}
                  checked={selectedCategories.some(
                    (item) => item.key === category.key
                  )}
                />
                <label
                  style={{
                    color: "#111927",
                    marginLeft: "16px",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                  htmlFor={category.key}
                  className="ml-2"
                >
                  {category.name}
                </label>
              </div>
            );
          })}
          <div className="mt-5">
            <Button label="Proceed" onClick={handleDialogButtonClick} />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Index;
