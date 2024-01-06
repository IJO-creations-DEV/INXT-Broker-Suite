import React, { useState } from "react";
import { Button } from "primereact/button";
import SvgAdd from "../../../../../assets/icons/SvgAdd";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../../../assets/icons/SvgDot";
import NavBar from "../../../../../components/NavBar";
import SvgSearchIcon from "../../../../../assets/icons/SvgSearchIcon";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import SvgEyeIcon from "../../../../../assets/icons/SvgEyeIcon";
import SvgEditIcon from "../../../../../assets/icons/SvgEditIcon";
import ToggleButton from "../../../../../components/ToggleButton";
import Productdata from "./mock";

const RoleMaster = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/master/generals/usermanagement/role/add/1");
  };
  const handleNavigateedit = () => {
    // navigate('/master/finance/hierarchy/hierarchydetails')
  };
const handleView =()=>{
    navigate("/master/generals/usermanagement/role/view/2")
}

const handlEdit =()=>{
    navigate('/master/generals/usermanagement/role/edit/3')
}
  const items = [
    { label: "User Management" },
    {
      label: "Role",
      url: "/master/generals/usermanagement/role",
    },
  ];

  const home = { label: "Master" };
  const headerStyle = {
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
  };
  const ViewheaderStyle = {
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
    display: "flex",
    justifyContent: "center",
  };

  const [first, setFirst] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRowsPerPage(event.rows);
  };

  const renderViewButton = (rowData) => {
    return (
      <div className="center-content">
        <Button
          icon={<SvgEyeIcon />}
          className="eye__btn"
            onClick={() => handleView()}
        />
        <Button
          icon={<SvgEditIcon />}
          className="eye__btn"
            onClick={() => handlEdit()}
        />
      </div>
    );
  };

  const renderToggleButton = () => {
    return (
      <div>
        <ToggleButton />
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
  return (
    <div className="grid overall__role__master__container">
      <div className="col-12">
        <NavBar />
      </div>
      <div className="col-12 md:col-6 lg:col-6 mb-1">
        <div className="add__icon__title__hierarchy">Role Master</div>
        <div className="mt-3">
          <BreadCrumb
            home={home}
            className="breadCrums__view__reversal__hierarchy"
            model={items}
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>
      <div className="col-12 md:col-6 lg:col-6 add__icon__alighn__hierarchy mb-1">
        <div className="add__icon__view__hierarchy" onClick={handleNavigate}>
          <div className="add__icon__hierarchy">
            <SvgAdd />
          </div>
          <div className="add__text__hierarchy">Add</div>
        </div>
      </div>
      <div className="col-12 m-0 ">
        <div className="sub__account__sub__container__hierarchy">
          <div className="col-12 search__filter__view__hierarchy">
            <div className="col-12 md:col-10 lg:col-10">
              <div className="searchIcon__view__input__hierarchy">
                <span className="pl-3">
                  {" "}
                  <SvgSearchIcon />
                </span>
                <InputText
                  style={{ width: "100%" }}
                  classNames="input__sub__account__hierarchy"
                  placeholder="Search By Country Name"
                />
              </div>
            </div>
          </div>
          <div className="col-12 ">
            <div className="main__tabel__title__hierarchy p-2">Country List</div>
          </div>
          <div
            className="col-12 md:col-12 lg-col-12"
            style={{ maxWidth: "100%" }}
          >
            <div className="card">
              <DataTable
                value={Productdata}
                style={{ overflowY: "auto", maxWidth: "100%" }}
                responsive={true}
                className="table__view__hierarchy"
                paginator
                paginatorLeft
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                currentPageReportTemplate="{first} - {last} of {totalRecords}"
                paginatorTemplate={template2}
                onPage={onPageChange}
                onPageChange={onPageChange}
              >
                <Column
                  field="roleCode"
                  header="Role Code"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="roleName"
                  header="Role Name"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
                
                <Column
                  field="modifiedBy"
                  header="Modified By"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="modifiedOn"
                  header="Modified On"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="status"
                  body={renderToggleButton}
                  header="Status"
                  headerStyle={{ textAlign: "center", ...headerStyle }}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="action"
                  body={renderViewButton}
                  header="Action"
                  headerStyle={{ ...ViewheaderStyle }}
                  className="fieldvalue_container centered"
                ></Column>
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleMaster;
