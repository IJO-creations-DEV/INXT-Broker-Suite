import React, { useState, useEffect } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import NavBar from "../../../../components/NavBar";
import { useNavigate } from "react-router-dom";
import SvgDot from "../../../../assets/icons/SvgDot";
import SvgFilters from "../../../../assets/icons/SvgFilters";
import SvgAdd from "../../../../assets/icons/SvgAdd";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import ToggleButton from "../../../../components/ToggleButton";
// import  {data} from "../BranchMasterInitial/mock"
import SvgArrow from "../../../../assets/icons/SvgArrow";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

const Index = () => {
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

  const headerStyle = {
    width: "10rem",
    // backgroundColor: 'red',
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
  };

  const items = [{ label: "Branch" }];
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

  const handlePolicy = () => {
    navigate("/master/finance/branch/branchadding");
  };

  return (
    <div className="overall_branch_master_initial_container">
      <div className="overallfilter_container">
        <div>
          <label className="label_header">Branch Master</label>
          <BreadCrumb
            model={items}
            home={home}
            className="breadcrumbs_container"
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
        <div className="filterbutton_container">
          <div className="addbutton_container" onClick={handlePolicy}>
            <SvgAdd className="addicon" />
            <p className="addtext">Add</p>
          </div>
        </div>
      </div>

      <Card>
        <div className="header_search_container">
          <div class="col-12 md:col-6 lg:col-9">
            <span className="p-input-icon-left" style={{ width: "100%" }}>
              <i className="pi pi-search" />
              <InputText
                placeholder="Search customers"
                className="searchinput_left"
              />
            </span>
          </div>

          <div class="col-12 md:col-6 lg:col-3">
            <Button
              label="Sort By"
              outlined
              icon={<SvgFilters />}
              className="sorbyfilter_container"
            />
          </div>
        </div>

        <div className="branch_text">Branch List</div>
        <div className="card">
          <DataTable
            // value={data}
            tableStyle={{ minWidth: "50rem", color: "#1C2536" }}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            currentPageReportTemplate="{first} - {last} of {totalRecords}"
            paginatorTemplate={template2}
            scrollable={true}
            scrollHeight="40vh"
          >
            <Column
              field="branchCode"
              header="Branch Code"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="companyName"
              header="Company Name"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="manager"
              header="Manager"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="country"
              header="Country"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="email"
              header="Email"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="status"
              header="Status"
              headerStyle={headerStyle}
              className="fieldvalue_container"
              body={(columnData) => <ToggleButton id={columnData.id} />}
            ></Column>
            <Column
              header="View"
              headerStyle={headerStyle}
              field="view"
              className="fieldvalue_container"
              body={() => <SvgArrow />}
            />
          </DataTable>
        </div>
      </Card>
    </div>
  );
};

export default Index;
