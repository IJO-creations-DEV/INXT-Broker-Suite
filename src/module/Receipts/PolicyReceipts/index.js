import React, { useState, useEffect, useRef, Suspense } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import NavBar from "../../../components/NavBar";
import { useNavigate } from "react-router-dom";
import SvgDot from "../../../assets/icons/SvgDot";
import SvgFilters from "../../../assets/icons/SvgFilters";
import SvgAdd from "../../../assets/icons/SvgAdd";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { data } from "./mock";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import SvgEye from "../../../assets/icons/SvgEye";
import { TieredMenu } from 'primereact/tieredmenu';
import { useDispatch, useSelector } from "react-redux";
import SvgDropdownicon from "../../../assets/icons/SvgDropdownicon";
import { getReceiptsListBySearchMiddleware } from "../store/receiptsMiddleware";



const PolicyReceipts = () => {
  
  const [products, setProducts] = useState([]);
  const [stylesLoaded, setStylesLoaded] = useState(false);

  useEffect(() => {
    // Dynamically import your SCSS styles
    import('./index.scss').then(() => {
      setStylesLoaded(true);
    });
  }, []);
  // useEffect(() => {
  //   setProducts(data);
  // }, []);
  const items = [
    {
      label: 'Receipts', to: "/accounts/receipts"
    }

  ];



  const search = [
    { name: 'Name', value: 'name' },
    { name: 'Customer Code', value: 'customerCode' },
    { name: 'Transaction Number', value: 'transactionNumber' },
    { name: 'Transaction Code', value: 'transactionCode' }]

  const { receiptsTableList, loading, receiptsSearchTable } = useSelector(({ receiptsTableReducers }) => {
    return {
      loading: receiptsTableReducers?.loading,
      receiptsTableList: receiptsTableReducers?.receiptsTableList,
      // total: receiptsTableReducers,
      receiptsSearchTable: receiptsTableReducers?.receiptsSearchTable

    };
  });


  console.log(receiptsTableList, "receiptsTableListreceiptsTableList")
  // console.log(total, "find receiptsTableList")
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

        <>
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
        </>
      );
    },
  };

  const headerStyle = {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    padding: "10px 0",
    color: "#000",
    border: "none",
    textalign: "center",

  };
  const headerStyle1 = {
    width: "10%",

    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    padding: "10px 0",
    color: "#000",
    border: "none",
    textalign: "center",
  };
  const headerStyle2 = {


    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    padding: "10px 0",
    color: "#000",
    border: "none",
    textalign: "center",
  };
  const headerStyle3 = {
    width: "8%",

    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    padding: "10px 0",
    color: "#000",
    border: "none",
    textalign: "center",
  };

  const itemss = [{ label: "Name" }, { label: "Date" }, { label: "Transaction Number" }, { label: "Receipt Number" }];
  const home = { label: "Accounts " };

  const navigate = useNavigate();
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  const [globalFilter, setGlobalFilter] = useState("");
  const dispatch = useDispatch();
  const [searches, setSearch] = useState("");

  useEffect(() => {
    console.log(globalFilter, "as")
    if(globalFilter.length > 0 ){
      if (searches?.length > 0) {
        dispatch(getReceiptsListBySearchMiddleware({
          field: globalFilter,
          value: searches
        }))
  
      }
    }
  }, [searches])

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  // const onGlobalFilterChange = (event) => {
  //   setGlobalFilter(event.target.value);
  // };

  const handlePolicy = () => {
    navigate("/accounts/receipts/addreceipts");
  };
  const handleArrowClick = () => {
    navigate("/accounts/receipts/receiptdetailview");
  };
  const handleEditClick = () => {
    navigate("/accounts/receipts/otherreceiptsview");
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
    {stylesLoaded &&
        <div className="overall__policyreceipts__container">
      <NavBar />
      <div className="overallfilter_container">
        <div>
          <label className="label_header">Receipts</label>
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
            <p className="addtext">Receipt</p>
          </div>
        </div>
      </div>

      <Card>
        <div className="header_search_container">
          <div class="col-12 md:col-6 lg:col-10" style={{ paddingLeft: '0' }}>
            <span className="p-input-icon-left" style={{ width: "100%" }}>
              <i className="pi pi-search" />
              <InputText
                placeholder="Search by Customer Code"
                className="searchinput_left"
                onChange={(e) => setSearch(e.target.value)}
              />
            </span>
          </div>

          <div class="col-12 md:col-3 lg:col-2">
            {/* <TieredMenu model={itemss} popup ref={menu} breakpoint="67px" /> */}

            <Dropdown value={globalFilter} onChange={(e) => setGlobalFilter(e.value)} options={search} optionLabel="name" optionValue="value"
              placeholder="Search by"
              className="sorbyfilter_container"
              dropdownIcon={<SvgDropdownicon />}
            />

          </div>
        </div>
        <div className="listlable_textcontainer">
          <label className="listlable_text">Receipts history</label>
        </div>

        <div className="card">
          <DataTable
            value={ receiptsTableList}
            tableStyle={{
              minWidth: "50rem",
              color: "#1C2536",
              maxHeight: "50vh",
              overflowy: "auto",

            }}
            scrollable={true}
            scrollHeight="40vh"
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            currentPageReportTemplate="{first} - {last} of {totalRecords}"
            paginatorTemplate={template2}
            className="datatable_container"
          >
            <Column
              sortable
              field="receiptNumber"
              header="Receipt Number"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column

              field="transactionCode"
              header="Transaction Code"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              sortable
              field="transactionNumber"
              header="Transaction Number"
              headerStyle={headerStyle}
              className="fieldvalue_container"
            ></Column>
            <Column
              sortable
              field="name"
              header="Name"
              headerStyle={headerStyle1}
              className="fieldvalue_container"
            ></Column>
            <Column
              sortable
              field="customerCode"
              header="Customer Code"
              headerStyle={headerStyle2}
              className="fieldvalue_container"
            ></Column>
            <Column
              sortable
              field="date"
              header="Date"
              headerStyle={headerStyle1}
              className="fieldvalue_container"
            ></Column>
            <Column

              field="amount"
              header="Amount"
              headerStyle={headerStyle3}
              className="fieldvalue_container"
            ></Column>

            <Column
              // sortable
              body={() => <SvgEye onClick={() => handleArrowClick()} />}
              header="Action"
              headerStyle={headerStyle}
              className="fieldvalue_containers"
            ></Column>
          </DataTable>
        </div>
      </Card>
    </div> }
  </Suspense>


  );
};

export default PolicyReceipts;
