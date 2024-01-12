import React, { useState, useEffect, useRef } from "react";
import "../BranchMaster/index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import NavBar from "../../../../components/NavBar";
import { useNavigate } from "react-router-dom";
import SvgDot from "../../../../assets/icons/SvgDot";
import SvgAdd from "../../../../assets/icons/SvgAdd";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import Productdata from "./mock";
import { Dropdown } from "primereact/dropdown";
import SvgIconeye from "../../../../assets/icons/SvgIconeye";
import ToggleButton from "../../../../components/ToggleButton";
import SvgEditicons from "../../../../assets/icons/SvgEdits";
import SvgTable from "../../../../assets/icons/SvgTable";
import { useDispatch, useSelector } from "react-redux";
import { getOrganizationBranchView, getSearchBranchMiddleware } from "./store/branchMiddleware";
import { useFormik } from "formik";

const Index = () => {
  const { branchTableList, loading, branchTabelSearchList } = useSelector(({ organizationBranchMainReducers }) => {
    return {
      loading: organizationBranchMainReducers?.loading,
      branchTableList: organizationBranchMainReducers?.branchTableList,
      branchTabelSearchList: organizationBranchMainReducers?.branchTabelSearchList
    };
  });
  console.log(branchTableList, "branchTableList");

  const handlePolicy = (id) => {
    navigate(
      `/master/generals/organization/branchmaster/add/${id}`
    );
  };
  const dispatch = useDispatch()
  const handleSubmit = (values) => {
    console.log(values.search, "getSearchBranchMiddleware");
    dispatch(getSearchBranchMiddleware({ textSearch: values.search }));
  }
  const formik = useFormik({
    initialValues: { search: "" },
    onSubmit: handleSubmit
  });
  useEffect(() => {
    if (formik.values.search !== "") {
      dispatch(getSearchBranchMiddleware({ textSearch: formik.values.search }));
    }
  }, [formik.values.search]);
  const handleView = (columnData) => {
    dispatch(getOrganizationBranchView(columnData))
    console.log(columnData, "columnData")
    navigate(
      `/master/generals/organization/branchmaster/view/${columnData.id}`
    );
  };
  const handleEdit = (id) => {
    navigate(
      `/master/generals/organization/branchmaster/edit/${id}`
    );
  };

  const isEmpty = Productdata.length === 0;

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
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
  };

  const items = [
    {
      id: 1,
      label: "Branch",
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
    <div className="overall__branch__container">
      <NavBar />
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
          {/* <SvgFilters/> */}

          <div className="addbutton_container" onClick={handlePolicy}>
            <SvgAdd />
            <p className="addtext">Add</p>
          </div>
        </div>
      </div>

      <Card


      >


        <div className="header_search_container">
          <div class="col-12 md:col-6 lg:col-10" style={{ paddingLeft: 0 }}>
            <span className="p-input-icon-left" style={{ width: "100%" }}>
              <i className="pi pi-search" />
              <InputText
                placeholder="Search By company code/ Name"
                className="searchinput_left"
                value={formik.values.search}
                onChange={formik.handleChange("search")}
              />
            </span>
          </div>

        </div>
        <div className="headlist_lable">Company List</div>
        <div>
          <DataTable
            value={formik.values.search !== "" ? branchTabelSearchList : branchTableList}
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
              field="BranchCode"
              header="Branch Code"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="CompanyName"
              header="Branch Name"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              field="Country"
              header="Country"
              sortable
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
                  <SvgEditicons onClick={() => handleEdit(columnData)} />
                </div>
              )}
              header="Action"
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
