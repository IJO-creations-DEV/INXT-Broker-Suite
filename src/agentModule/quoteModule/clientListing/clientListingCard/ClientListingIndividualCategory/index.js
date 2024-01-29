import { InputText } from "primereact/inputtext";
import TableDropdownField from "../../../../component/tableDropDwonField";
import React, { useState, useEffect } from "react";
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
import SvgDownArrow from "../../../../../assets/agentIcon/SvgDownArrow";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentSearchDataMiddleWare } from "../../store/clientsMiddleware";
import SvgDropdownicon from "../../../../../assets/icons/SvgDropdownicon";

const ClientListingIndividualCategory = ({paymentSearchList}) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectionMode, setSelectionMode] = useState("multiple");
  const [globalFilter, setGlobalFilter] = useState("Name");
  const [status,setStatus]=useState("")
  const [search,setSearch]=useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const cities = [
    { name: "Name", code: "Name" },
    { name: "ClientID", code: "ClientID" },
   
  ];

  useEffect(() => {
    if (globalFilter && search) {
      dispatch(
        getPaymentSearchDataMiddleWare({
          field: globalFilter,
          value: search,
          // status1: status,
        })
      );
    }
  }, [search]);
  const TableData = [
    {
      id: "1",
      Name: "Sophie Clark",
      Category: "Individual",
      Date: "2024-01-26",
      Quotes: "01",
      LeadID: "123456",
      Svg: <SvgMotorTable />,
    },
    {
      id: "2",
      Name: "John Smith",
      Category: "Individual",
      Date: "2024-02-10",
      Quotes: "02",
      LeadID: "126",
      Svg: <SvgMotorTable />,
    },
    {
      id: "3",
      Name: "Emma Davis",
      Category: "Individual",
      Date: "2024-03-15",
      Quotes: "02",
      LeadID: "1456",
      Svg: <SvgMotorTable />,
    },
    {
      id: "4",
      Name: "Michael Johnson",
      Category: "Individual",
      Date: "2024-04-20",
      Quotes: "03",
      LeadID: "1236",
      Svg: <SvgMotorTable />,
    },
    {
      id: "5",
      Name: "Olivia Turner",
      Category: "Individual",
      Date: "2024-05-25",
      Quotes: "04",
      LeadID: "1456",
      Svg: <SvgMotorTable />,
    },
    {
      id: "6",
      Name: "David Rodriguez",
      Category: "Individual",
      Date: "2024-06-30",
      Quotes: "05",
      LeadID: "123116",
      Svg: <SvgMotorTable />,
    },
    {
      id: "7",
      Name: "Ava Williams",
      Category: "Individual",
      Date: "2024-07-05",
      Quotes: "06",
      LeadID: "123411",
      Svg: <SvgMotorTable />,
    },
    {
      id: "8",
      Name: "Daniel Brown",
      Category: "Individual",
      Date: "2024-08-10",
      Quotes: "01",
      LeadID: "1234000",
      Svg: <SvgMotorTable />,
    },
    {
      id: "9",
      Name: "Sophia Carter",
      Category: "Individual",
      Date: "2024-09-15",
      Quotes: "02",
      LeadID: "1234555",
      Svg: <SvgMotorTable />,
    },
    {
      id: "10",
      Name: "Ryan Walker",
      Category: "Individual",
      Date: "2024-10-20",
      Quotes: "03",
      LeadID: "1234226",
      Svg: <SvgMotorTable />,
    },
    {
      id: "11",
      Name: "Ella Adams",
      Category: "Individual",
      Date: "2024-11-25",
      Quotes: "04",
      LeadID: "1234000",
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
          <Button
            icon={<SvgEdit />}
            className="view__btn"
            onClick={() => handleEditAction(rowData)}
          />
        </div>
        <div>
          <Button
            icon={<SvgArrow />}
            className="edit__btn"
            onClick={() => handleViewAction(rowData)}
          />
        </div>
      </div>
    );
  };

  const renderName = (rowData) => {
    return (
      <div className="name__box__container">
        <div><SvgMotorTable /></div>
        <div>
          <div className="name__text">{rowData.Name}</div>
          <div className="lead__id__text">Client Id:{rowData.LeadID} </div>
        </div>
      </div>
    );
  };

  const renderCategory = (rowData) => {
    return <div className="category__text">{rowData.Category}</div>;
  };

  const renderDate = (rowData) => {
    return <div className="date__text">{rowData.Date}</div>;
  };

  const renderQuotes = (rowData) => {
    return <div className="quote__text">{rowData.Quotes}</div>;
  };

  const handleEditAction = () => {
    navigate("/agent/leadedit");
  };

  const handleViewAction = () => {
    navigate(`/agent/clientview/${123}`);
  };

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
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            {/* <SvgSearch/> */}
            <InputText placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}style={{ width: "100%",padding: "1rem 2.75rem",borderRadius:"10px" }}/>
          </span>
        </div>
        <div class="col-12 md:col-3 lg:col-3">
        <Dropdown
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.value)}
                    options={cities}
                    optionLabel="name"
                    optionValue="code"
                    placeholder="Search by"
                    className="sorbyfilter__style"
                    dropdownIcon={<SvgDropdownicon />}
                  />
        </div>
      </div>
      <div className="lead__table__container">
        <DataTable
          value={search?paymentSearchList:TableData}
          paginator
          rows={5}
          selectionMode={selectionMode}
          selection={selectedProducts}
          rowsPerPageOptions={[5, 10, 25, 50]}
          currentPageReportTemplate="{first} - {last} of {totalRecords}"
          paginatorTemplate={template2}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="id"
          tableStyle={{ minWidth: "50rem" }}
          scrollable={true}
          scrollHeight="60vh"
        >
          
          <Column
            body={renderName}
            header={rendercheckedHeader("Name")}
            headerStyle={headerStyle}
          ></Column>
          <Column
            body={renderCategory}
            header={renderUncheckedHeader("Category")}
            headerStyle={headerStyle}
          ></Column>
          <Column
            body={renderDate}
            header={renderUncheckedHeader("Date")}
            headerStyle={headerStyle}
          ></Column>
          <Column
            body={renderQuotes}
            header={renderUncheckedHeader("Quotes")}
            headerStyle={headerStyle}
          ></Column>
          <Column
            body={renderViewEditButton}
            header={renderUncheckedHeader("Actions")}
            headerStyle={ViewheaderStyle}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default ClientListingIndividualCategory;
