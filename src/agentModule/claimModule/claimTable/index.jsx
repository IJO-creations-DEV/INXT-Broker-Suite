import { InputText } from "primereact/inputtext";
// import TableDropdownField from "../../../../component/tableDropDwonField";
import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import SvgArrow from "../../../assets/icons/SvgArrow";
import { Dropdown } from "primereact/dropdown";
import SvgDownArrow from "../../../assets/agentIcon/SvgDownArrow";
import { useNavigate } from "react-router-dom";
import "../../claimModule/index.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { getClaimTabelSearchList } from "./store/getClaimTabelDataMiddleWare";
import SvgMotorTable from "../../../assets/agentIcon/SvgMotorTable";
import { useDispatch, useSelector } from "react-redux";
import { claimListSearchDataDatMiddleWare } from "../store/claimMiddleWare";

const LeadListingAllTable = () => {
  const { claimsTabelList, loading, claimSeachData } = useSelector(
    ({ claimsMainReducers }) => {
      return {
        loading: claimsMainReducers?.loading,
        claimsTabelList: claimsMainReducers?.claimsTabelList,
        claimSeachData: claimsMainReducers?.claimSeachData,
      };
    }
  );
  console.log(claimsTabelList, "claimsTabelList");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectionMode, setSelectionMode] = useState("multiple");

  const navigate = useNavigate();

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
            onClick={() => handleView(rowData)}
          />
        </div>
      </div>
    );
  };

  const renderclaimNumber = (rowData) => {
    return (
      <div className="name__box__container">
        <div>
          <SvgMotorTable />
        </div>
        <div>
          <div className="name__text">
            {rowData.claimNumber?.toUpperCase()}
          </div>
          {/* <div className="lead__id__text">Lead Id :{rowData.LeadID} </div> */}
        </div>
      </div>
    );
  };

  const renderClientName = (rowData) => {
    return (
      <div className="category__text">
        {rowData.ClientName?.toUpperCase()}
      </div>
    );
  };
  const renderpolicyNumber = (rowData) => {
    return (
      <div className="category__text">
        {rowData.policyNumber?.toUpperCase()}
      </div>
    );
  };
  const renderDes = (rowData) => {
    return (
      <div className="category__text">
        {rowData.ProductDescription?.toUpperCase()}
      </div>
    );
  };

  const renderDate = (rowData) => {
    return <div className="date__text">{rowData.Date?.toUpperCase()}</div>;
  };
  const renderExpiryDate = (rowData) => {
    return (
      <div className="date__text">{rowData.expiryDate?.toUpperCase()}</div>
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
            : "client__view__type__red"
        }
      >
        {rowData.Status?.toUpperCase()}
      </div>
    );
  };
  const [search, setSearch] = useState("");
  //   const dispatch = useDispatch();
  // useEffect(() => {
  //   if (search?.length > 0) {
  //     dispatch(getClaimTabelSearchList(search))
  //   }
  // }, [search])
  const dispatch = useDispatch();
  const [globalFilter, setGlobalFilter] = useState("Claim Number");
  const cities = [
    { name: "Policy Number", code: "Policy Number" },
    { name: "Claim Number", code: "Claim Number" },
  ];

  useEffect(() => {
    if (globalFilter && search) {
      dispatch(
        claimListSearchDataDatMiddleWare({
          field: globalFilter,
          value: search,
        })
      );
    }
  }, [search]);
  const handleView = (rowData) => {
    console.log(rowData, "find rowData");
    if (rowData?.Status === "Rejected") {
      navigate("/agent/claimrejected");
    } else if (rowData?.Status === "Processing") {
      navigate(`/agent/claimrequest/requestapproval/${123}`);
    } else if (rowData?.Status === "Completed") {
      navigate(`/agent/claimdetailedview/${123}`);
    }
  };

  const ViewheaderStyle = {
    textalign: "center",
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: 500,
    color: "#000",
    border: " none",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
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
            <InputText
              placeholder="Search"
              style={{
                width: "100%",
                padding: "1rem 2.75rem",
                borderRadius: "10px",
              }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
            className="feat_searchby_container"
            dropdownIcon={<SvgDownArrow />}
          />
        </div>
      </div>
      <div className="lead__table__container">
        <DataTable
          value={search ? claimSeachData : claimsTabelList}
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
            body={renderclaimNumber}
            header={rendercheckedHeader("Claim Number")}
            headerStyle={headerStyle}
          ></Column>
          <Column
            body={renderClientName}
            header={renderUncheckedHeader("Client Name")}
            headerStyle={headerStyle}
          ></Column>

          <Column
            body={renderpolicyNumber}
            header={renderUncheckedHeader("Policy Number")}
            headerStyle={headerStyle}
          ></Column>
          <Column
            body={renderDate}
            header={renderUncheckedHeader("Date")}
            headerStyle={headerStyle}
          ></Column>
          <Column
            body={renderDes}
            header={renderUncheckedHeader("Product Description")}
            headerStyle={headerStyle}
          ></Column>
          <Column
            body={renderStatus}
            header={renderUncheckedHeader("Status")}
            headerStyle={ViewheaderStyle}
            style={{ textAlign: "center" }}
          ></Column>
          <Column
            body={renderViewEditButton}
            header={renderUncheckedHeader("Actions")}
            headerStyle={{ ...headerStyle, textAlign: "center" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default LeadListingAllTable;
