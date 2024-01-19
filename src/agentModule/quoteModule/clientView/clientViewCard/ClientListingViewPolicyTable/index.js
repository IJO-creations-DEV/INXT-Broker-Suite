import { InputText } from "primereact/inputtext";
import TableDropdownField from "../../../../component/tableDropDwonField";
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
import { TieredMenu } from "primereact/tieredmenu";
import { Dialog } from "primereact/dialog";
import { Menu } from "primereact/menu";

const LeadListingAllTable = () => {
  const menu = useRef(null);
  const [displayDialog, setDisplayDialog] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectionMode, setSelectionMode] = useState("multiple");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const categories = [
    { name: 'Personal Details Change', key: 'personaldetail' },
    { name: 'Motor Details Change', key: 'motordetail' },
    { name: 'Coverage Change', key: 'coveragechange' },
    { name: 'Policy Extend', key: 'ploicyextend' }
  ];
  const [selectedCategories, setSelectedCategories] = useState([]);


  const showDialog = () => {
    setDisplayDialog(true);
  };

  const hideDialogClose = () => {
    setDisplayDialog(false);
  };
  const handleDialogButtonClick = () => {

    hideDialogClose();
    handleTypes()
    navigate("/agent/endorsement/personaldetails", {
      state: {
        types: handleTypes()
      }
    });

  };
  const handleTypes = () => {
    let result = [];
    console.log(selectedCategories, "out 1")
    if (selectedCategories.some(obj => obj.key === "personaldetail")) {
      result.push('1')
    }
    if (selectedCategories.some(obj => obj.key === "motordetail")) {
      result.push('2')

    }
    if (selectedCategories.some(obj => obj.key === "coveragechange")) {
      result.push('3')

    }
    if (selectedCategories.some(obj => obj.key === "ploicyextend")) {
      result.push('4')

    }
    console.log(result, "out")
    return result
  }
  const navigate = useNavigate();


  const item = [
    {
      label: "View",
      url: "/agent/policydetailedview",
    },
    {
      label: "Claim",
      url: "/agent/claimrequest/claimdetails",
    },
    {
      label: "Renewal",
      url: "/agent/policydetailedview",
    },

    {
      label: "Endorsement",
      command: () => setDisplayDialog(true),
    },
  ];
  const menuItems = [

    {

      label: 'View',

      command: () => handleMenuClick('view'),

      icon: "pi pi-refresh"

    },

    {

      label: 'Claim',

      command: () => handleMenuClick('claim'),

      icon: "pi pi-refresh"

    }, {

      label: 'Renewal',

      command: () => handleMenuClick('renewal'),

      icon: "pi pi-refresh"

    },

    {

      label: 'Endorsement',

      command: () => handleMenuClick('endrosement'),

      icon: "pi pi-refresh"

    }

  ];

  const handleMenuToggle = (event, menuRef) => {
    menuRef.current.toggle(event);
  };
  const handleMenuClick = (menuItem) => {
    if (menuItem == "view") {
      navigate('/agent/claimrequest/claimdetails')
    }
    if (menuItem == "endrosement") {
      setDisplayDialog(true)
    }
    // Handle the menu item click here
    console.log(`${menuItem} clicked`);
    // You can use the menuItem information as needed (e.g., display a toast)
    // toast.current.show({ severity: 'info', summary: `${menuItem} Clicked`, detail: 'Item clicked' });
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
  const onCategoryChange = (e) => {
    let _selectedCategories = [...selectedCategories];

    if (e.checked)
      _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

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
    return (
      <div className="btn__container__view__edit">

        <Menu model={menuItems} popup ref={menu} breakpoint="767px" />
        <Button
          icon={<SvgDot />}
          className="view__btn"
          onClick={(event) => handleMenuToggle(event, menu)}
        // onClick={(e) => menu.current.toggle(e)}
        // onClick={() => handleItemClick(rowData)}
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
      <Dialog
        visible={displayDialog}
        style={{ height: "340px", width: "500px" }}
        modal
        onHide={hideDialogClose}
      >
        <div className="p-fluid">
          {categories.map((category) => {
            return (
              <div key={category.key} className="p-field-checkbox m-3">
                <Checkbox id="checkbox" inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                <label style={{
                  color: "#111927",
                  marginLeft: "16px",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: 400,
                }} htmlFor={category.key} className="ml-2">
                  {category.name}
                </label>
              </div>
            );
          })}
          {/* <div className="p-field-checkbox m-3">
            <Checkbox
              id="checkbox"
              checked={checkboxValue}
              onChange={(e) => setCheckboxValue(e.checked)}
            />
            <label
              style={{
                color: "#111927",
                marginLeft: "16px",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 400,
              }}
            >
              Personal Details Change
            </label>
          </div>
          <div className="p-field-checkbox m-3">
            <Checkbox
              id="checkbox"
              checked={checkboxValue}
              onChange={(e) => setCheckboxValue(e.checked)}
            />
            <label style={{
              color: "#111927",
              marginLeft: "16px",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
            }}>Motor Details Change</label>
          </div>
          <div className="p-field-checkbox m-3">
            <Checkbox
              id="checkbox"
              checked={checkboxValue}
              onChange={(e) => setCheckboxValue(e.checked)}
            />
            <label style={{
              color: "#111927",
              marginLeft: "16px",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
            }}>Coverage Change</label>
          </div>
          <div className="p-field-checkbox m-3">
            <Checkbox
              id="checkbox"
              checked={checkboxValue}
              onChange={(e) => setCheckboxValue(e.checked)}
            />
            <label style={{
              color: "#111927",
              marginLeft: "16px",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
            }}>Policy Extend</label>
          </div> */}


          <div className="m-5">
            <Button label="Proceed" onClick={handleDialogButtonClick} />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default LeadListingAllTable;
