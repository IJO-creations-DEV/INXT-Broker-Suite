import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import NavBar from "../../../../components/NavBar";
import { useNavigate } from "react-router-dom";
import SvgDot from "../../../../assets/icons/SvgDot";
import SvgAdd from "../../../../assets/icons/SvgAdd";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import SvgIconeye from "../../../../assets/icons/SvgIconeye";
import { useDispatch, useSelector } from "react-redux";
import ToggleButton from "../../../../components/ToggleButton";
import SvgEditicons from "../../../../assets/icons/SvgEdits";
import SvgTable from "../../../../assets/icons/SvgTable";
import { getCompanyViewMiddleWare } from "./store/companyMiddleware";

const Index = () => {
  const { companyTableList, loading } = useSelector(
    ({ organizationCompanyMainReducers }) => {
      return {
        loading: organizationCompanyMainReducers?.loading,
        companyTableList: organizationCompanyMainReducers?.companyTableList,
      };
    }
  );
  console.log(companyTableList, "companyTableList");
  const dispatch = useDispatch()
  const handleView = (columnData) => {
    dispatch(getCompanyViewMiddleWare(columnData))
    navigate(
      `/master/generals/organization/companymaster/addcompany/view/${columnData.id}`
    );
  };
  const handleEdit = (id) => {
    navigate(
      `/master/generals/organization/companymaster/addcompany/edit/${id}`
    );
  };
  const handlePolicy = (id) => {
    navigate(
      `/master/generals/organization/companymaster/addcompany/add/${id}`
    );
  };

  console.log("first", companyTableList);

  const isEmpty = companyTableList.length === 0;

  const emptyTableIcon = (
    <div>
      <div className="empty-table-icon">
        <SvgTable />
      </div>
      <div className="no__data__found">No data entered</div>
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
      );
    },
  };

  const menu = useRef(null);
  const menuitems = [
    {
      label: "Name",
    },
    {
      label: "Date",
    },
    {
      label: "Voucher Number",
    },
  ];

  const renderToggleButton = () => {
    return (
      <div>
        <ToggleButton />
      </div>
    );
  };

  const headerStyle = {
    // width: '19%',
    // backgroundColor: 'red',
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
  };

  const items = [
    {
      id: 1,
      label: "Company",
      // url: '/accounts/paymentvoucher'
    },
  ];
  const home = { label: "Master" };

  const navigate = useNavigate();
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  const [globalFilter, setGlobalFilter] = useState("");

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const onGlobalFilterChange = (event) => {
    setGlobalFilter(event.target.value);
  };

  return (
    <div className="overall__company__container">
      <NavBar />
      <div className="overallfilter_container">
        <div>
          <label className="label_header">Company Master</label>
          <BreadCrumb
            model={items}
            home={home}
            className="breadcrumbs_container"
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
        <div className="filterbutton_container">
          {/* <SvgFilters/> */}

          <div className="addbutton_container" onClick={handlePolicy}>
            <SvgAdd />
            <p className="addtext">Add</p>
          </div>
        </div>
      </div>

      <Card

      //   className="overallcard_container"
      >
        {/* <div className="searchiput_container"> */}

        <div className="header_search_container">
          <div class="col-12 md:col-6 lg:col-10" style={{ paddingLeft: 0 }}>
            {/* <div class="text-center p-3 border-round-sm bg-primary font-bold"> */}
            <span className="p-input-icon-left" style={{ width: "100%" }}>
              <i className="pi pi-search" />
              <InputText
                placeholder="Search By company code/ Name"
                className="searchinput_left"
              />
            </span>
          </div>

        </div>
        <div className="headlist_lable">Company List</div>

        {/* </div> */}

        <div>
          <DataTable
            value={companyTableList}
            tableStyle={{ minWidth: "50rem", color: "#1C2536" }}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            currentPageReportTemplate="{first} - {last} of {totalRecords}"
            paginatorTemplate={template2}
            scrollable={true}
            scrollHeight="40vh"
            emptyMessage={isEmpty ? emptyTableIcon : null}
          >
            <Column
              field="CompanyCode"
              header="Company Code"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="CompanyName"
              header="Company Name"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="LicenseNumber"
              header="License Number"
              sortable
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="Country"
              header="Country"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="EmailID"
              header="Email"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              body={renderToggleButton}
              header="Status"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              body={(columnData) => (
                <div className="action_icons">
                  <SvgIconeye onClick={() => handleView(columnData)} />
                  <SvgEditicons onClick={() => handleEdit(columnData.id)} />
                </div>
              )}
              header="View"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
          </DataTable>
        </div>
      </Card>
    </div>
  );
};

export default Index;
