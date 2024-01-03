import React, { useState, useEffect,useRef } from "react";
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
import { useSelector } from "react-redux";

const PolicyReceipts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);
  const menu = useRef(null);
  const items = [
  
    {
      label: 'Receipts',
    },
   
  ];
  const { receiptsTableList, loading } = useSelector(({ receiptsTableReducers }) => {
    return {
      loading: receiptsTableReducers?.loading,
      receiptsTableList: receiptsTableReducers?.receiptsTableList,
    // const [products, setProducts] = useState([]);
    
// const handleView=()=>{
//   navigate('/accounts/paymentvoucher/detailview')
// }

    };
  });
console.log(receiptsTableList,"receiptsTableList")
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
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: "10px 0",
    color: "#000",
    border: "none",
    textalign: "center",
    
  };
  const headerStyle1 = {
    width: "10%",

    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: "10px 0",
    color: "#000",
    border: "none",
    textalign: "center",
  };
  const headerStyle2 = {
   

    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: "10px 0",
    color: "#000",
    border: "none",
    textalign: "center",
  };
  const headerStyle3 = {
    width: "8%",

    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: "10px 0",
    color: "#000",
    border: "none",
    textalign: "center",
  };

  const itemss = [{ label: "Name" },{ label: "Date" },{ label: "Transaction Number" },{ label: "Receipt Number" }];
  const home = { label: "Accounts " };

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
    navigate("/accounts/receipts/addpolicyreceipts1");
  };
  const handleArrowClick = () => {
    navigate("/accounts/receipts/policyreceiptsview");
  };
  const handleEditClick = () => {
    navigate("/accounts/receipts/otherreceiptsview");
  };
  return (
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
          <div class="col-12 md:col-6 lg:col-10" style={{paddingLeft:'0'}}>
            <span className="p-input-icon-left" style={{ width: "100%" }}>
              <i className="pi pi-search" />
              <InputText
                placeholder="Search by Customer Code"
                className="searchinput_left"
              />
            </span>
          </div>
          
          <div class="col-12 md:col-3 lg:col-2">
          <TieredMenu model={itemss} popup ref={menu} breakpoint="67px" />
            <Button 
              label="Search by"
              outlined
              icon={<SvgFilters />}
              className="sorbyfilter_container"
              onClick={(e) => menu.current.toggle(e)}
            />
          </div>
        </div>
        <div className="listlable_textcontainer">
          <label className="listlable_text">Receipts history</label>
        </div>

        <div className="card">
          <DataTable
            value={receiptsTableList}
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
    </div>
  );
};

export default PolicyReceipts;
