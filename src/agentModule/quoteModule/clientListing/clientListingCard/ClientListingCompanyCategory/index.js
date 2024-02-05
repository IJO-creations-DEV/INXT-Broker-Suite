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
import { Dropdown } from "primereact/dropdown";
import SvgDownArrow from "../../../../../assets/agentIcon/SvgDownArrow";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClientEditMiddleWare, getPaymentSearchDataMiddleWare } from "../../store/clientsMiddleware";
import SvgDropdownicon from "../../../../../assets/icons/SvgDropdownicon";
import { Avatar } from "primereact/avatar";

const ClientListingCompanyCategory = ({data, clientListTable, paymentSearchList }) => {
  console.log(clientListTable?.company);
  const companyData = clientListTable?.filter(item => item.category === "Company");
  const searchMiddleWareData=paymentSearchList?.filter(val=>val?.category==="Company");

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectionMode, setSelectionMode] = useState("multiple");
  const [globalFilter, setGlobalFilter] = useState("Name");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          status: data,
        })
      );
    }
  }, [search]);



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
  const handleSvg = (type, index) => {
    const colors = [
      "#D4635D",
      "#67D07A",
      "#D4635D",
      "#874EFF",
      "#EDC63B",
      "#A36EFF",
      "#5DCB67",
      "#6366F1",
      "#D8BFD8",
      "#FFA07A",
    ];

    const backgroundColor =
      colors[parseInt(index) % colors.length] || "#CCCCCC";
    console.log(parseInt(index) % colors.length, "find");

    return (
      <Avatar
        label={type.charAt(0)}
        size="xlarge"
        shape="circle"
        style={{ backgroundColor: backgroundColor, color: "#fff" }}
      />
    );
  };
  const renderName = (rowData) => {
    return (
      <div className="name__box__container">
        <div>{handleSvg(rowData.FirstName, rowData.id)}</div>
        <div>
          <div className="name__text">{rowData.FirstName}</div>
          <div className="lead__id__text">Client Id :{rowData.LeadID} </div>
        </div>
      </div>
    );
  };

  const renderCategory = (rowData) => {
    return <div className="category__text">{rowData.category}</div>;
  };

  const renderdes = (rowData) => {
    return <div className="category__text">{rowData.ProductDescription}</div>;
  };

  const renderDate = (rowData) => {
    return <div className="date__text">{rowData.DateofBirth}</div>;
  };

  const renderQuotes = (rowData) => {
    return <div className="quote__text">{rowData.Quotes}</div>;
  };

  const handleEditAction = (rowData) => {
    dispatch(getClientEditMiddleWare(rowData))
    navigate("/agent/clientedit");
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
            <InputText
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
          value={search ? searchMiddleWareData : companyData}
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
            body={renderdes}
            header={renderUncheckedHeader("Product Description")}
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

export default ClientListingCompanyCategory;
