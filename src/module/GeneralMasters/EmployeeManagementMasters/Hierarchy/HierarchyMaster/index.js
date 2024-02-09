import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  getHierarchyPatchMiddleWare,
  getHierarchyViewMiddleWare,
  getSearchHirarchyMiddleware,
} from "../store/hierarchyMiddleware";

const HierarchyMaster = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/master/generals/employeemanagement/hierarchy/add");
  };
  const [rowList, setRowList] = useState(5);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setProducts();
  }, []);
  useEffect(() => {
    if (search.length > 0) {
      dispatch(getSearchHirarchyMiddleware(search));
    }
  }, [search]);

  const { hierarchTableList, loading, total, hierarchSeachList } = useSelector(
    ({ hierarchyTableReducers }) => {
      return {
        loading: hierarchyTableReducers?.loading,
        hierarchTableList: hierarchyTableReducers?.hierarchTableList,
        hierarchSeachList: hierarchyTableReducers?.hierarchSeachList,
        total: hierarchyTableReducers,
      };
    }
  );
  console.log(hierarchTableList, "list of master");
  const handleNavigateedit = () => {
    // navigate('/master/finance/hierarchy/hierarchydetails')
  };
  const handleView = (rowData) => {
    console.log(rowData, "rowData");
    dispatch(getHierarchyViewMiddleWare(rowData));
    navigate(
      `/master/generals/employeemanagement/hierarchy/view/${rowData.id}`
    );
  };

  const handlEdit = (rowData) => {
    dispatch(getHierarchyPatchMiddleWare(rowData));
    navigate(
      `/master/generals/employeemanagement/hierarchy/edit/${rowData?.id}`
    );
  };
  const items = [
    { label: "Employee Management" },
    {
      label: "Hierarchy",
      url: "/master/generals/employeemanagement/hierarchy",
    },
  ];

  const home = { label: "Master" };
  const headerStyle = {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    padding: "1rem",
    color: "#000",
    border: "none",
  };
  const ViewheaderStyle = {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    padding: "1rem",
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
    console.log(rowData, "row data");
    return (
      <div className="center-content">
        <Button
          icon={<SvgEyeIcon />}
          className="eye__btn"
          onClick={() => handleView(rowData)}
        />
        <Button
          icon={<SvgEditIcon />}
          className="eye__btn"
          onClick={() => handlEdit(rowData)}
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
    <div className="grid overall__hierarchy__master__container">
      <div className="col-12 md:col-6 lg:col-6 mb-1">
        <div className="add__icon__title__hierarchy">Hierarchy Master</div>
        <div style={{ margin: "20px 0px" }}>
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
            <div className="col-12 md:col-12 lg:col-12">
              <div className="searchIcon__view__input__hierarchy">
                <span className="pl-3">
                  {" "}
                  <SvgSearchIcon />
                </span>
                <InputText
                  style={{ width: "100%" }}
                  classNames="input__sub__account__hierarchy"
                  placeholder="Search By Rank Name"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-12 ">
            <div className="main__tabel__title__hierarchy p-2">
              Hierarchy List
            </div>
          </div>
          <div
            className="col-12 md:col-12 lg-col-12"
            style={{ maxWidth: "100%" }}
          >
            <div className="card">
              <DataTable
                value={search ? hierarchSeachList : hierarchTableList}
                style={{ overflowY: "auto", maxWidth: "100%" }}
                responsive={true}
                className="table__view__hierarchy"
                paginator
                paginatorLeft
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                currentPageReportTemplate="{first} - {last} of {totalRecords}"
                paginatorTemplate={template2}
                scrollable={true}
                scrollHeight="40vh"
              >
                <Column
                  field="rankCode"
                  header="Rank Code"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                  body={(rowData) => rowData.rankCode?.toUpperCase()}
                ></Column>
                <Column
                  field="rankName"
                  header="Rank Name"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                  body={(rowData) => rowData.rankName?.toUpperCase()}
                ></Column>
                <Column
                  field="levelNumber"
                  header="Level Number"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                  body={(rowData) => rowData.levelNumber?.toUpperCase()}
                ></Column>
                <Column
                  field="modifiedBy"
                  header="Modified By"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                  body={(rowData) => rowData.modifiedBy?.toUpperCase()}
                ></Column>
                <Column
                  field="modifiedOn"
                  header="Modified On"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="status"
                  body={(columnData) => <ToggleButton id={columnData.id} />}
                  header="Status"
                  headerStyle={{ textAlign: "center", ...headerStyle }}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="action"
                  body={renderViewButton}
                  header="Action"
                  headerStyle={{ ...ViewheaderStyle }}
                  className="fieldvalue_container_centered"
                ></Column>
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HierarchyMaster;
